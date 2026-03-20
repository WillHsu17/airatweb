import { useState } from "react";
import { signup } from "../services/authService";
import { SignupRequest } from "../types/auth";

export default function Signup() {
  const [form, setForm] = useState<SignupRequest>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signup(form);
      alert(`Welcome ${res.user.username}`);
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <input
        placeholder="Username"
        value={form.username}
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}