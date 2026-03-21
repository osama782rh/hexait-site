import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies-analytics");
    if (consent === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookies-analytics", "accepted");
    setVisible(false);
    window.location.reload();
  };

  const reject = () => {
    localStorage.setItem("cookies-analytics", "rejected");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl bg-slate-800/95 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-5 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-slate-300 flex-1">
            Nous utilisons des cookies analytics pour améliorer votre expérience.{" "}
            <Link to="/cookies" className="text-cyan-300 hover:text-cyan-200 underline">
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={reject} className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
              Refuser
            </button>
            <button onClick={accept} className="btn-cta text-sm px-4 py-2">
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
