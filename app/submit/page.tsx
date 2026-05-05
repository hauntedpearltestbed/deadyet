"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";

interface FormState {
  name: string;
  wikipediaUrl: string;
  reason: string;
}

export default function SubmitPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    wikipediaUrl: "",
    reason: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      setForm({ name: "", wikipediaUrl: "", reason: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <>
      <main className="flex flex-1 flex-col items-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          ← Back
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Request an addition
        </h1>
        <p className="text-muted mb-8">
          Suggest someone who should be on this list. Submissions are reviewed
          before being added.
        </p>

        {status === "success" ? (
          <div className="border border-accent-good rounded px-4 py-6 text-center">
            <p className="text-accent-good font-medium text-lg mb-2">
              Submitted successfully
            </p>
            <p className="text-muted text-sm mb-4">
              Your request has been filed as a GitHub issue and will be reviewed.
            </p>
            <Link
              href="/"
              className="underline hover:text-muted transition-colors"
            >
              Go home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="w-full bg-transparent border-b border-foreground/30 px-1 py-2 text-foreground placeholder:text-muted focus:border-foreground transition-colors"
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="wikipediaUrl"
                className="block text-sm font-medium mb-1"
              >
                Wikipedia link (optional)
              </label>
              <input
                id="wikipediaUrl"
                type="url"
                value={form.wikipediaUrl}
                onChange={(e) =>
                  setForm((f) => ({ ...f, wikipediaUrl: e.target.value }))
                }
                className="w-full bg-transparent border-b border-foreground/30 px-1 py-2 text-foreground placeholder:text-muted focus:border-foreground transition-colors"
                placeholder="https://en.wikipedia.org/wiki/..."
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium mb-1">
                Why should they be added?
              </label>
              <textarea
                id="reason"
                required
                rows={4}
                value={form.reason}
                onChange={(e) =>
                  setForm((f) => ({ ...f, reason: e.target.value }))
                }
                className="w-full bg-transparent border border-foreground/30 rounded px-3 py-2 text-foreground placeholder:text-muted focus:border-foreground transition-colors resize-none"
                placeholder="Short factual description..."
              />
            </div>

            {status === "error" && (
              <p className="text-accent-bad text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex items-center justify-center rounded border border-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit request"}
            </button>
          </form>
        )}
      </div>
    </main>
    <Footer />
  </>
  );
}
