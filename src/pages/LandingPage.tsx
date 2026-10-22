import {
  ArrowLeftRight,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Check,
  ChevronRight,
  DollarSign,
  FileDown,
  Globe,
  LineChart,
  PiggyBank,
  Receipt,
  Shield,
  Star,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

type LandingPageProps = {
  onLogin: () => void;
  onSignup: () => void;
};

type Feature = { icon: LucideIcon; tone: string; title: string; desc: string };

const stats = [
  { value: "7+", label: "Business Pages" },
  { value: "5+", label: "Personal Pages" },
  { value: "PDF & Excel", label: "Export Formats" },
  { value: "4", label: "Languages" },
];

const businessModeItems = [
  ["Dashboard", "daily cash snapshot"],
  ["Customers", "give/get balances"],
  ["Suppliers", "track payables"],
  ["Employees", "invite & manage access"],
  ["Expenses", "business spending log"],
  ["Cashbook", "full transaction ledger"],
  ["Reports", "PDF & Excel export"],
];

const personalModeItems = [
  ["Dashboard", "monthly spending overview"],
  ["Expenses", "log every purchase"],
  ["Budget", "set limits per category"],
  ["Insights", "charts & spending trends"],
  ["Friends", "IOUs & split tracking"],
];

const businessFeatures: Feature[] = [
  { icon: BarChart3, tone: "bg-blue-50 text-blue-600", title: "Business Dashboard", desc: "See your real-time cash position, total money coming in and going out, and outstanding customer balances at a glance." },
  { icon: Users, tone: "bg-blue-50 text-blue-600", title: "Customer Management", desc: "Track every customer balance — who owes you money and who you owe. Add transactions in seconds with the quick-add FAB." },
  { icon: ArrowLeftRight, tone: "bg-purple-50 text-purple-600", title: "Supplier Management", desc: "Keep a record of all your suppliers. Track how much you owe and manage your payables effortlessly." },
  { icon: Users, tone: "bg-orange-50 text-orange-600", title: "Employee Management", desc: "Invite employees to the app with page-level access control. Employees see only what you allow — no more, no less." },
  { icon: Receipt, tone: "bg-red-50 text-red-600", title: "Business Expenses", desc: "Log all business spending by category. Filter by date range and see exactly where the money is going." },
  { icon: BookOpen, tone: "bg-indigo-50 text-indigo-600", title: "Cashbook Ledger", desc: "A chronological ledger of every cash-in and cash-out entry. Your single source of truth for daily business cash flow." },
  { icon: FileDown, tone: "bg-teal-50 text-teal-600", title: "Reports & Export", desc: "Generate detailed business reports and export them as PDF or Excel files — share with your accountant in one click." },
  { icon: TrendingUp, tone: "bg-green-50 text-green-600", title: "Cash In Tracking", desc: "Every payment received is logged and categorized, giving you a clear picture of your daily revenue." },
  { icon: TrendingDown, tone: "bg-rose-50 text-rose-600", title: "Cash Out Tracking", desc: "Track all outgoing payments and expenses in one place, so you always know your true net position." },
];

const personalFeatures: Feature[] = [
  { icon: PiggyBank, tone: "bg-blue-50 text-blue-600", title: "Personal Dashboard", desc: "See your monthly spending broken down by category in a beautiful pie chart. Know in seconds if you're on track." },
  { icon: Receipt, tone: "bg-green-50 text-green-600", title: "Expense Tracker", desc: "Log every purchase — food, transport, entertainment — with a description and category. Filter and search with ease." },
  { icon: DollarSign, tone: "bg-orange-50 text-orange-600", title: "Category Budgets", desc: "Set spending limits per category and see your actual vs. budgeted spend in real time. Never overspend again." },
  { icon: LineChart, tone: "bg-purple-50 text-purple-600", title: "Insights & Trends", desc: "Visualize your spending history with interactive charts. Spot patterns and make smarter money decisions over time." },
  { icon: Users, tone: "bg-blue-50 text-blue-600", title: "Friends & IOUs", desc: "Track money lent to and borrowed from friends. See exactly who owes you and who you owe — no awkward conversations needed." },
];

const businessPages = [
  ["Dashboard", "Cash snapshot & stats"],
  ["Customers", "Give/get balances"],
  ["Suppliers", "Payables tracking"],
  ["Employees", "Team & access control"],
  ["Expenses", "Business spending log"],
  ["Cashbook", "Full transaction ledger"],
  ["Reports", "PDF & Excel export"],
  ["Settings", "Profile, currency, language"],
];

const personalPages = [
  ["Dashboard", "Monthly spending pie chart"],
  ["Expenses", "Personal spending log"],
  ["Budget", "Per-category budget limits"],
  ["Insights", "Charts & spending trends"],
  ["Friends", "IOU & split tracking"],
  ["Settings", "Profile, currency, language"],
];

const onboardingPages = [
  "Login / Sign Up",
  "Email OTP Verification",
  "Terms of Service",
  "Account Type Selection",
  "Business Setup Wizard",
  "App Tutorial",
];

const platformFeatures = [
  { icon: Shield, title: "Secure by Default", desc: "Your data lives in Supabase — encrypted at rest and in transit. Email OTP verification on every signup." },
  { icon: Globe, title: "Multi-Language", desc: "Use the app in English, Hindi, Mandarin, or Cantonese. Switch language anytime from Settings." },
  { icon: DollarSign, title: "Multi-Currency", desc: "Choose your preferred currency and all amounts are displayed consistently throughout the app." },
  { icon: Bell, title: "Notifications", desc: "Get alerts for important transactions, employee activity, and budget overruns." },
];

const whyAvail = [
  { icon: TrendingUp, tone: "text-green-600", title: "Know Your Cash Position Instantly", desc: "The dashboard shows your net cash position in real time — no spreadsheets, no confusion." },
  { icon: Users, tone: "text-blue-600", title: "Customers & Suppliers in One View", desc: "Stop juggling notebooks. Every customer and supplier balance is tracked digitally." },
  { icon: Star, tone: "text-orange-600", title: "Switch Modes Anytime", desc: "You can have both a business account and a personal account under one login — and switch between them with one tap." },
];

const SectionHeading = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) => (
  <div className="mb-10 sm:mb-14">
    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium uppercase tracking-wider text-primary">
      {eyebrow}
    </span>
    <p className="mt-5 text-lg sm:text-xl text-foreground">{title}</p>
    <p className="mt-1 text-lg sm:text-xl text-foreground">{subtitle}</p>
  </div>
);

const FeatureCard = ({ f }: { f: Feature }) => (
  <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
    <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${f.tone}`}>
      <f.icon className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-medium">{f.title}</h3>
    <p className="text-[15px] leading-7 text-muted-foreground">{f.desc}</p>
  </div>
);

const LandingPage = ({ onLogin, onSignup }: LandingPageProps) => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#fdf8fb] text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <img src="/logo.png" alt="Avail" className="h-12 w-auto object-contain" />
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onLogin}
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-medium transition hover:bg-accent sm:px-6 sm:py-2.5 sm:text-base"
            >
              Sign In
            </button>
            <button
              onClick={onSignup}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:px-6 sm:py-2.5 sm:text-base"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-[20%] top-0 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:pt-28">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary sm:text-base">
              Business &amp; Personal Money Management
            </span>
            <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Take Control of Every{" "}
              <span className="bg-gradient-to-r from-primary via-teal-600 to-money-in bg-clip-text text-transparent">
                dollar You Earn
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-2xl sm:leading-relaxed">
              Meet Avail — the ultimate, supercharged money management app built for everyone! Whether you're running a
              side hustle, managing a full-scale business, or just trying to handle your daily life, Avail has your back.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={onSignup}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90 sm:text-xl"
              >
                Start for Free
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={onLogin}
                className="rounded-xl border border-border bg-white px-10 py-4 text-lg font-medium transition hover:bg-accent sm:text-xl"
              >
                Sign In to Account
              </button>
            </div>

            <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-white px-4 py-7">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground sm:text-base">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two modes */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Two Modes, One App"
              title="Built for Business & Personal"
              subtitle="Switch seamlessly between business and personal modes. Your data is always kept separate, always in sync."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-primary/20 bg-[hsl(var(--primary-light))] p-8 sm:p-10">
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold sm:text-3xl">Business Mode</h2>
                </div>
                <p className="mb-8 text-lg text-muted-foreground">
                  Everything a small business owner needs to manage daily cash flow, customers, and team.
                </p>
                <ul className="mb-10 space-y-4">
                  {businessModeItems.map(([name, desc]) => (
                    <li key={name} className="flex items-center gap-4 text-lg">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      {name} — {desc}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onSignup}
                  className="w-full rounded-xl bg-primary py-4 text-lg font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Start Business Account
                </button>
              </div>

              <div className="self-start rounded-2xl border border-border bg-white p-8 sm:p-10">
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Wallet className="h-7 w-7 text-money-in" />
                  </div>
                  <h2 className="text-2xl font-bold sm:text-3xl">Personal Mode</h2>
                </div>
                <p className="mb-8 text-lg text-muted-foreground">
                  Track your personal finances, set budgets, get insights, and split expenses with friends.
                </p>
                <ul className="mb-10 space-y-4">
                  {personalModeItems.map(([name, desc]) => (
                    <li key={name} className="flex items-center gap-4 text-lg">
                      <Check className="h-5 w-5 shrink-0 text-money-in" />
                      {name} — {desc}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onSignup}
                  className="w-full rounded-xl bg-money-in py-4 text-lg font-semibold text-money-in-foreground transition hover:opacity-90"
                >
                  Start Personal Account
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Business features */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Business"
              title="Every Tool Your Business Needs"
              subtitle="From your first customer to your hundredth transaction — Avail keeps every number in order."
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {businessFeatures.map((f) => (
                <FeatureCard key={f.title} f={f} />
              ))}
            </div>
          </div>
        </section>

        {/* Personal features */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Personal"
              title="Smart Personal Finance"
              subtitle="Your money, your rules. Set budgets, track every expense, and finally know where your money goes."
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {personalFeatures.map((f) => (
                <FeatureCard key={f.title} f={f} />
              ))}
            </div>
          </div>
        </section>

        {/* Sitemap */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Sitemap"
              title="Every Page at a Glance"
              subtitle="A complete overview of every screen in the app — no surprises, no hidden menus."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-8 sm:p-9">
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-medium sm:text-3xl">Business Pages</h2>
                </div>
                <ul className="space-y-5">
                  {businessPages.map(([name, desc]) => (
                    <li key={name} className="flex items-center gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm text-primary">
                        ✓
                      </span>
                      <span className="text-xl font-medium">{name}</span>
                      <span className="text-muted-foreground">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8 sm:p-9">
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
                    <Wallet className="h-7 w-7 text-money-in" />
                  </div>
                  <h2 className="text-2xl font-medium sm:text-3xl">Personal Pages</h2>
                </div>
                <ul className="space-y-5">
                  {personalPages.map(([name, desc]) => (
                    <li key={name} className="flex items-center gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center text-sm text-money-in">✓</span>
                      <span className="text-xl font-medium">{name}</span>
                      <span className="text-muted-foreground">{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-border pt-8">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Onboarding &amp; Auth
                  </p>
                  <ul className="space-y-3">
                    {onboardingPages.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-lg text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-border" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Platform"
              title="Built with the Best"
              subtitle="Secure, fast, and works across all your devices. No installs needed."
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {platformFeatures.map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-white p-7 text-center">
                  <div className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-blue-50">
                    <f.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-medium">{f.title}</h3>
                  <p className="text-[15px] leading-7 text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Avail */}
        <section className="bg-gradient-to-br from-[#f3f5fb] via-[#f9f5fb] to-[#fdf6fa] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why Avail"
              title="Made for Real Business Owners"
              subtitle="Whether you run a local shop, a freelance practice, or just want to manage your personal wallet — we've got every screen covered."
            />
            <div className="grid gap-8 lg:grid-cols-3">
              {whyAvail.map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-white p-9">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                    <f.icon className={`h-6 w-6 ${f.tone}`} />
                  </div>
                  <h3 className="mb-4 text-xl font-medium sm:text-2xl">{f.title}</h3>
                  <p className="text-lg leading-8 text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-primary via-primary to-[hsl(220_60%_38%)] py-20 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center text-white">
            <p className="text-base font-medium uppercase tracking-[0.15em] text-white/80 sm:text-xl">Get Started Today</p>
            <h2 className="mt-6 text-3xl font-bold sm:text-5xl">Your Finances, Finally Under Control</h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-2xl sm:leading-relaxed">
              Join thousands of business owners and individuals who use Avail to manage their money smarter.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={onSignup}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-12 py-4 text-lg font-semibold text-primary shadow-lg transition hover:bg-white/90 sm:text-xl"
              >
                Create Free Account
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={onLogin}
                className="rounded-xl border border-white/40 px-12 py-4 text-lg font-semibold text-white transition hover:bg-white/10 sm:text-xl"
              >
                Sign In
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-10 text-center">
        <img src="/logo.png" alt="Avail" className="mx-auto h-12 w-auto object-contain" />
        <p className="mt-6 text-lg text-muted-foreground">© {year} Avail. All rights reserved.</p>
        <div className="mt-4 flex items-center justify-center gap-6 text-muted-foreground">
          <button onClick={onLogin} className="transition hover:text-foreground">
            Sign In
          </button>
          <span>·</span>
          <button onClick={onSignup} className="transition hover:text-foreground">
            Sign Up Free
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
