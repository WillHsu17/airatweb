// src/pages/Login.tsx
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white">
      
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account? <span className="text-blue-400 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}