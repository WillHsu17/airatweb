// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-wide">TradeAI</h1>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          AI-Powered Trading <br />
          <span className="text-blue-400">Made Simple</span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Analyze markets, generate signals, and trade smarter with AI.
          Built for speed, precision, and modern traders.
        </p>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Get Started
          </Link>

          <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-24 px-10 pb-20">
        {[
          "Real-time AI signals",
          "Portfolio tracking",
          "Smart risk management",
        ].map((feature, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{feature}</h3>
            <p className="text-gray-400 text-sm">
              Powerful tools designed for modern algorithmic trading.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}