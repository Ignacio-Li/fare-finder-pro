import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Radar, MailCheck, CircleOff } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flight Price Notifier — 機票降價通知" },
      {
        name: "description",
        content:
          "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops.",
      },
      { property: "og:title", content: "Flight Price Notifier — 機票降價通知" },
      {
        property: "og:description",
        content:
          "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const features = [
  {
    icon: Radar,
    title: "盯緊熱門航線",
    subtitle: "Always-on route watching",
    description:
      "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: MailCheck,
    title: "達標自動通知",
    subtitle: "Target-price email alerts",
    description:
      "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: CircleOff,
    title: "隨時取消",
    subtitle: "Cancel anytime",
    description: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

function LandingPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Plane className="h-4 w-4" />
            </span>
            Flight Price Notifier
          </Link>
          <Link
            to="/auth"
            search={{ redirect: undefined }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Sign in / 登入
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:px-6 sm:pt-32">
          <p className="reveal mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
            <Plane className="h-3.5 w-3.5 text-primary" />
            台北出發 · 東京 / 首爾熱門航線
          </p>
          <h1 className="reveal text-4xl font-extrabold tracking-tight sm:text-6xl">
            Flight Price Notifier
            <span className="mt-3 block text-2xl font-bold text-primary sm:text-4xl">
              機票降價通知
            </span>
          </h1>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            設定航線與目標價，機票降價就通知你
          </p>
          <p className="reveal mx-auto mt-2 max-w-2xl text-sm text-muted-foreground/80">
            Set a route and a target price — we email you when the fare drops.
          </p>
          <div className="reveal mt-10">
            <Link
              to="/auth"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
            >
              Sign in / 登入
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="reveal card-glow rounded-2xl border border-border bg-card p-8"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <f.icon className="h-6 w-6" />
              </span>
              <h2 className="text-xl font-bold">{f.title}</h2>
              <p className="mt-1 text-sm font-medium text-primary">
                {f.subtitle}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8">
        <p className="text-center text-sm text-muted-foreground">
          © 2026 Flight Price Notifier
        </p>
      </footer>
    </div>
  );
}
