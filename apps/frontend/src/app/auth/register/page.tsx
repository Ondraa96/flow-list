"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/button/button";
import { Input } from "@/src/components/input/input";
import { ButtonGroup } from "@/src/components/button/button-group";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      alert("Registrace úspěšná! Přesměrováváme na přihlášení...");
      router.push("/auth/login");
    } else {
      const error = await res.json();
      alert(`Chyba: ${error.message}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-sm mx-auto bg-white rounded shadow"
    >
      <h1 className="text-2xl font-bold mb-4">Registrace</h1>
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Heslo"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="new-password"
      />
      <ButtonGroup>
        <Button content="Registrovat se" type="submit" isFullWidth />
        <Button
          content="Přihlásit se"
          type="button"
          variant="secondary"
          isFullWidth
          onClick={() => router.push("/auth/login")}
        />
      </ButtonGroup>
    </form>
  );
}
