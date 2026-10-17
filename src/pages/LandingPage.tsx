import { useApp } from "@/contexts/AppContext";
import { t } from "@/lib/translations";
import { ArrowRight, BarChart3, Briefcase, Users, Wallet } from "lucide-react";
import TopAccent from "@/components/TopAccent";

type LandingPageProps = {
  onLogin: () => void;
  onSignup: () => void;
};

const LandingPage = ({ onLogin, onSignup }: LandingPageProps) => {
  const { language, setLanguage } = useApp();
  const tr = t[language];

  const features = [
    { icon: Wallet, title: tr.landingFeaturePersonalTitle, desc: tr.landingFeaturePersonalDesc },
    { icon: Briefcase, title: tr.landingFeatureBusinessTitle, desc: tr.landingFeatureBusinessDesc },
    { icon: BarChart3, title: tr.landingFeatureInsightsTitle, desc: tr.landingFeatureInsightsDesc },
    { icon: Users, title: tr.landingFeatureTeamTitle, desc: tr.landingFeatureTeamDesc },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <TopAccent />

      {/* Header */}
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <img src="/logo.png" alt="Avail" className="h-10 w-auto object-contain" />
        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as typeof language)}
            className="border border-input bg-background px-2 py-1 text-xs text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Language"
          >
            <option value="en">English</option>
            <option value="zh-HK">繁體中文</option>
          </select>
          <button onClick={onLogin} className="border border-input px-3 py-1.5 text-sm font-medium hover:bg-accent transition">
            {tr.login}
          </button>
        </div>
      </header>

      <main className="flex-1 animate-fade-in">
        {/* Hero */}
        <section className="w-full max-w-3xl mx-auto px-4 pt-10 pb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{tr.slogan}</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">{tr.landingHeadline}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">{tr.landingSubhead}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onSignup}
              className="bg-primary text-primary-foreground px-6 py-3 font-semibold text-base hover:opacity-90 transition inline-flex items-center justify-center gap-2"
            >
              {tr.getStarted}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={onLogin} className="border border-input px-6 py-3 font-medium text-base hover:bg-accent transition">
              {tr.login}
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="w-full max-w-5xl mx-auto px-4 pb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border p-5">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-semibold mb-1">{f.title}</h2>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="w-full max-w-3xl mx-auto px-4 pb-16">
          <div className="bg-card border border-border p-6 text-center">
            <h2 className="text-xl font-bold mb-1">{tr.landingCtaTitle}</h2>
            <p className="text-sm text-muted-foreground mb-4">{tr.landingCtaDesc}</p>
            <button
              onClick={onSignup}
              className="bg-primary text-primary-foreground px-6 py-2.5 font-semibold text-base hover:opacity-90 transition"
            >
              {tr.signup}
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {tr.appName}
      </footer>
    </div>
  );
};

export default LandingPage;
