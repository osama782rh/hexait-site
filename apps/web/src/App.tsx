import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1">{/* pages s'injectent ici */}<Outlet /></main>
      <Footer />
    </div>
  );
}
