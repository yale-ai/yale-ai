import { NextResponse } from "next/server";
import { Resend } from "resend";

/*
  Adds a person to the Resend audience the newsletter goes to.
  Needs RESEND_API_KEY and RESEND_AUDIENCE_ID; without them the form
  degrades to a friendly "email us" message rather than a 500.
*/
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Bad request." }, { status: 400 });
  }

  // Honeypot: bots fill every field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ message: "You are on the list." });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const firstName = String(body.firstName ?? "").trim().slice(0, 80);
  const lastName = String(body.lastName ?? "").trim().slice(0, 80);
  const classYear = String(body.classYear ?? "").trim().slice(0, 40);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ message: "That email does not look right." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { message: "Signups are not wired up yet. Email filippo.fonseca@yale.edu and we will add you." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.contacts.create({
    audienceId,
    email,
    firstName: firstName || undefined,
    // Resend contacts have no custom fields yet, so the class year rides in lastName.
    lastName: [lastName, classYear && `(${classYear})`].filter(Boolean).join(" ") || undefined,
    unsubscribed: false,
  });

  if (error) {
    // A duplicate is a success from the person's point of view.
    if (/already exists/i.test(error.message ?? "")) {
      return NextResponse.json({ message: "You were already on the list. See you at the kickoff." });
    }
    console.error("resend contacts.create failed", error);
    return NextResponse.json({ message: "Could not add you right now. Email us instead." }, { status: 502 });
  }

  return NextResponse.json({ message: "You are on the list. See you Wednesday." });
}
