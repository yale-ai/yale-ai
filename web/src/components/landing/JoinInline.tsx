"use client";

import { FormEvent, useState } from "react";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done"; message: string } | { kind: "error"; message: string };

// One field, one button: the mailing list, without a form page.
export default function JoinInline({ compact = false }: { compact?: boolean }) {
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
    <form onSubmit={onSubmit} aria-label="Join the Yale AI mailing list" className={`flex flex-col ${compact ? "gap-1.5" : "gap-2"}`}>
      <label htmlFor="join-email" className={`pixel-caps text-[0.66rem] ${compact ? "sr-only" : ""}`}>
        {compact ? "Get the emails" : "Mailing list"}
      </label>
      <div className="flex gap-2">
        <input id="join-email" name="email" type="email" required autoComplete="email" placeholder={compact ? "or get the emails: you@yale.edu" : "you@yale.edu"} className="field" />
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <button type="submit" disabled={state.kind === "sending"} className={`cta shrink-0 ${compact ? "px-3.5 py-2 text-[0.68rem]" : "px-4 py-2 text-[0.72rem]"} disabled:opacity-60`}>
          {state.kind === "sending" ? "Adding..." : "Join"}
        </button>
      </div>
      <p className={`text-[0.74rem] leading-snug text-faint ${compact ? "min-h-0 empty:hidden" : "min-h-[1.1em]"}`} aria-live="polite">
        {state.kind === "done" ? <span className="text-teal-ink">{state.message}</span> : null}
        {state.kind === "error" ? <span className="text-red-400">{state.message}</span> : null}
        {(state.kind === "idle" || state.kind === "sending") && !compact ? "One email every week or two. Unsubscribe with one reply." : null}
      </p>
    </form>
  );
}
