import { z } from "zod";

/**
 * Loops newsletter form. Submissions land in the "Waitlist" user group, which is
 * what the Loops automations are keyed to — do not change the form id or the
 * userGroup value without updating the corresponding loop in Loops.
 */
const LOOPS_FORM_ID = "cml42iqn59zzx0i1zmn0qdhzg";
const LOOPS_USER_GROUP = "Waitlist";

const schema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email address" }).max(255),
});

export type SubscribeResult = { ok: true } | { ok: false; error: string };

export async function subscribeEmail(email: string): Promise<SubscribeResult> {
  const parsed = schema.safeParse({ email });
  if (!parsed.success) {
    return { ok: false, error: "Enter a valid email address" };
  }

  const body = `userGroup=${encodeURIComponent(LOOPS_USER_GROUP)}&mailingLists=&email=${encodeURIComponent(
    parsed.data.email,
  )}`;

  try {
    const response = await fetch(`https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (response.ok) {
      return { ok: true };
    }

    const data = await response.json().catch(() => ({}) as { message?: string });
    // Contacts already on the list should still read as success to the visitor.
    if (response.status === 409 || data?.message?.includes("already on the list")) {
      return { ok: true };
    }
    return { ok: false, error: data?.message || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, error: "Failed to submit. Please try again." };
  }
}
