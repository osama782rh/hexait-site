// apps/web/src/pages/Documentation.tsx
export default function Documentation() {
  const docs = [
    {
      category: "Démarrage rapide",
      items: [
        "Processus de développement",
        "Environnements (dev, staging, prod)", 
        "Standards de code"
      ]
    },
    {
      category: "Sécurité",
      items: [
        "Checklist de sécurité",
        "Bonnes pratiques OWASP",
        "Gestion des secrets"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20"> {/* REMPLACÉ Section */}
      <div className="container py-16">
        <h1 className="text-4xl font-extrabold mb-6">Documentation</h1>
        <p className="text-slate-300 mb-8">Standards, processus et bonnes pratiques</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {docs.map((section, index) => (
            <div key={index} className="card p-6">
              <h3 className="font-bold text-xl mb-4 text-cyan-300">{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-slate-300 hover:text-cyan-200 cursor-pointer">
                    📄 {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-400">🔧 Documentation en cours d'enrichissement...</p>
        </div>
      </div>
    </div>
  );
}