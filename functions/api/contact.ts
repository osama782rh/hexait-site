// Cloudflare Pages Function – POST /api/contact
// Reçoit le formulaire de contact et envoie un email via MailChannels

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  website?: string;
  projectType: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
  company_website?: string; // honeypot
}

interface Env {
  CONTACT_EMAIL?: string;    // email destinataire (défaut: contact@hexait.fr)
  FROM_EMAIL?: string;       // email expéditeur (défaut: noreply@hexait.fr)
  DKIM_DOMAIN?: string;      // optionnel, pour signature DKIM
  DKIM_SELECTOR?: string;
  DKIM_PRIVATE_KEY?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://hexait.fr",
  };

  try {
    const body = (await context.request.json()) as ContactPayload;

    // Anti-spam : honeypot
    if (body.company_website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    // Validation minimale
    if (!body.name || !body.email || !body.message || !body.consent) {
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants." }),
        { status: 400, headers }
      );
    }

    const toEmail = context.env.CONTACT_EMAIL || "contact@hexait.fr";
    const fromEmail = context.env.FROM_EMAIL || "noreply@hexait.fr";

    // Construire le contenu de l'email
    const emailBody = [
      `Nouveau contact depuis hexait.fr`,
      `──────────────────────────`,
      `Nom        : ${body.name}`,
      body.company ? `Société    : ${body.company}` : null,
      `Email      : ${body.email}`,
      body.phone ? `Téléphone  : ${body.phone}` : null,
      body.website ? `Site web   : ${body.website}` : null,
      `──────────────────────────`,
      `Type       : ${body.projectType}`,
      `Services   : ${body.services.join(", ")}`,
      `Budget     : ${body.budget}`,
      `Délai      : ${body.timeline}`,
      `──────────────────────────`,
      `Message :`,
      body.message,
    ]
      .filter(Boolean)
      .join("\n");

    // Envoi via MailChannels (gratuit depuis Cloudflare Workers)
    const mailPayload: Record<string, unknown> = {
      personalizations: [
        {
          to: [{ email: toEmail, name: "HexaIT" }],
        },
      ],
      from: { email: fromEmail, name: `${body.name} via HexaIT` },
      reply_to: { email: body.email, name: body.name },
      subject: `[HexaIT] ${body.projectType} – ${body.name}`,
      content: [
        {
          type: "text/plain",
          value: emailBody,
        },
      ],
    };

    // Ajout DKIM si configuré
    if (context.env.DKIM_DOMAIN && context.env.DKIM_SELECTOR && context.env.DKIM_PRIVATE_KEY) {
      (mailPayload.personalizations as Record<string, unknown>[])[0].dkim_domain = context.env.DKIM_DOMAIN;
      (mailPayload.personalizations as Record<string, unknown>[])[0].dkim_selector = context.env.DKIM_SELECTOR;
      (mailPayload.personalizations as Record<string, unknown>[])[0].dkim_private_key = context.env.DKIM_PRIVATE_KEY;
    }

    const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailPayload),
    });

    if (!mailResponse.ok) {
      const errText = await mailResponse.text();
      console.error("MailChannels error:", mailResponse.status, errText);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'envoi de l'email." }),
        { status: 502, headers }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, message: "Message envoyé avec succès." }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("Contact function error:", err);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur." }),
      { status: 500, headers }
    );
  }
};

// Gérer les requêtes OPTIONS (CORS preflight)
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://hexait.fr",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    },
  });
};
