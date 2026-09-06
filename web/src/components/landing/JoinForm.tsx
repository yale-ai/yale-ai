"use client";

import { FormEvent, useState } from "react";

const YEARS = ["2030", "2029", "2028", "2027", "Grad student", "Other"];

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done"; message: string } | { kind: "error"; message: string };

export default function JoinForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        setState({ kind: "error", message: body.message ?? "Something went wrong. Email us instead." });
        return;
      }
      form.reset();
      setState({ kind: "done", message: body.message ?? "You are on the list." });
    } catch {
      setState({ kind: "error", message: "Network error. Try again in a moment." });
    }
  }

  return (
    <section id="join" className="card scroll-mt-24 p-6 md:p-10" aria-labelledby="join-title">
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
        <div>
          <p className="pixel-caps text-[0.7rem] tracking-[0.14em]">Mailing list</p>
          <h2 id="join-title" className="mt-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            The QR code, without the scanning.
          </h2>
          <p className="mt-4 max-w-prose text-[0.98rem] leading-relaxed text-white/75">
            One email every week or two: events, applications, credits, trips. No spam. Unsubscribe with one reply.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-3" aria-label="Join the Yale AI mailing list">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm text-white/70">
              First name
              <input name="firstName" required autoComplete="given-name" className="field" placeholder="First" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-white/70">
              Last name
              <input name="lastName" autoComplete="family-name" className="field" placeholder="Last" />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm text-white/70">
            Email
            <input name="email" type="email" required autoComplete="email" className="field" placeholder="you@yale.edu" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-white/70">
            Class year
            <select name="classYear" className="field" defaultValue="">
              <option value="" disabled>
                Pick one
              </option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
          {/* Honeypot for bots; real people never see it. */}
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <button type="submit" disabled={state.kind === "sending"} className="cta px-6 py-3 text-[0.85rem] disabled:opacity-60">
              {state.kind === "sending" ? "Adding you..." : "Join the list"} <span aria-hidden>→</span>
            </button>
            {state.kind === "done" && <p className="text-sm text-lime">{state.message}</p>}
            {state.kind === "error" && <p className="text-sm text-red-300">{state.message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
