"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UnsubContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "loading";
  const hasId = searchParams.get("id") || searchParams.get("token");

  // If user landed with id/token but no status, they need to go through the API
  if (hasId && !searchParams.get("status")) {
    // Client-side redirect to API
    if (typeof window !== "undefined") {
      window.location.href = `/api/unsub?id=${encodeURIComponent(hasId)}`;
    }
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-12 h-12 border-2 border-border-accent border-t-accent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {status === "success" && (
          <div className="animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-surface border border-border-accent flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-4">
              You&apos;ve been unsubscribed.
            </h1>
            <p className="text-muted leading-relaxed">
              You will no longer receive emails from us. If this was a mistake,
              please contact{" "}
              <a
                href="mailto:harris@supaleads.app"
                className="text-accent hover:underline"
              >
                harris@supaleads.app
              </a>
              .
            </p>
          </div>
        )}

        {status === "already" && (
          <div className="animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-surface border border-border-accent flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-4">
              Already unsubscribed.
            </h1>
            <p className="text-muted leading-relaxed">
              You were already removed from our list. No further emails will be
              sent. If you need anything, reach out to{" "}
              <a
                href="mailto:harris@supaleads.app"
                className="text-accent hover:underline"
              >
                harris@supaleads.app
              </a>
              .
            </p>
          </div>
        )}

        {(status === "error" || status === "loading") && (
          <div className="animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-surface border border-border-accent flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-8 h-8 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl mb-4">
              Something went wrong.
            </h1>
            <p className="text-muted leading-relaxed">
              We couldn&apos;t process your request. Please contact{" "}
              <a
                href="mailto:harris@supaleads.app"
                className="text-accent hover:underline"
              >
                harris@supaleads.app
              </a>{" "}
              to be removed manually.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function UnsubPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="w-12 h-12 border-2 border-border-accent border-t-accent rounded-full animate-spin" />
        </main>
      }
    >
      <UnsubContent />
    </Suspense>
  );
}
