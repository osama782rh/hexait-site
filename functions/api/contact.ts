// Cloudflare Pages Function – POST /api/contact
// Reçoit le formulaire de contact et envoie un email via Resend

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  website?: string;
  projectType?: string;
  services?: string[];
  budget?: string;
  timeline?: string;
  message: string;
  consent?: boolean;
  company_website?: string; // honeypot
}

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;  // email destinataire (défaut: contact@hexait.fr)
  FROM_EMAIL?: string;     // email expéditeur (défaut: noreply@hexait.fr)
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.hexait.fr",
  };

  try {
    const body = (await context.request.json()) as ContactPayload;

    // Anti-spam : honeypot
    if (body.company_website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    // Validation minimale
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants." }),
        { status: 400, headers }
      );
    }

    if (!context.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Service email non configuré." }),
        { status: 500, headers }
      );
    }

    const toEmail = context.env.CONTACT_EMAIL || "contact@hexait.fr";
    const fromEmail = context.env.FROM_EMAIL || "noreply@hexait.fr";

    // Déterminer si c'est le formulaire complet ou le mini formulaire
    const isFullForm = !!body.projectType;

    // Construire le contenu de l'email
    const lines: (string | null)[] = [
      `Nouveau contact depuis hexait.fr`,
      `──────────────────────────`,
      `Nom        : ${body.name}`,
      body.company ? `Société    : ${body.company}` : null,
      `Email      : ${body.email}`,
      body.phone ? `Téléphone  : ${body.phone}` : null,
      body.website ? `Site web   : ${body.website}` : null,
    ];

    if (isFullForm) {
      lines.push(
        `──────────────────────────`,
        `Type       : ${body.projectType}`,
        `Services   : ${body.services?.join(", ") || "Non précisé"}`,
        `Budget     : ${body.budget || "Non précisé"}`,
        `Délai      : ${body.timeline || "Non précisé"}`,
      );
    }

    lines.push(
      `──────────────────────────`,
      `Message :`,
      body.message,
    );

    const emailBody = lines.filter(Boolean).join("\n");
    const subject = isFullForm
      ? `[HexaIT] ${body.projectType} – ${body.name}`
      : `[HexaIT] Contact rapide – ${body.name}`;

    // Envoi via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${body.name} via HexaIT <${fromEmail}>`,
        to: [toEmail],
        reply_to: body.email,
        subject,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend error:", resendResponse.status, errText);
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
      "Access-Control-Allow-Origin": "https://www.hexait.fr",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    },
  });
};
