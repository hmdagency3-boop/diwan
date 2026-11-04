import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Search, Eye, Home, Compass, Plus, MessageCircle, User, Flame, Crown } from "lucide-react";
import live1 from "@/assets/live1.jpg";
import live2 from "@/assets/live2.jpg";
import live3 from "@/assets/live3.jpg";
import live4 from "@/assets/live4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "لايفي — بثوث مباشرة ترفيهية" },
      { name: "description", content: "تابع أحلى البثوث المباشرة: غناء، ألعاب، دردشة وحفلات DJ لحظة بلحظة." },
      { property: "og:title", content: "لايفي — بثوث مباشرة ترفيهية" },
      { property: "og:description", content: "تابع أحلى البثوث المباشرة لحظة بلحظة." },
    ],
  }),
  component: Index,
});

const categories = ["الكل", "غناء", "ألعاب", "دردشة", "DJ", "كوميديا", "رقص"];
const stories = [
  { name: "سارة", img: live1 }, { name: "عمر", img: live2 }, { name: "ليلى", img: live3 },
  { name: "كريم", img: live4 }, { name: "نور", img: live3 }, { name: "يوسف", img: live2 },
];
const lives = [
  { name: "سارة ستار", title: "سهرة أغاني 🎤", viewers: "12.4K", img: live1, cat: "غناء" },
  { name: "عمر جيمر", title: "تحدي ببجي 🔥", viewers: "8.1K", img: live2, cat: "ألعاب" },
  { name: "ليلى", title: "دردشة الصبح ☀️", viewers: "3.2K", img: live3, cat: "دردشة" },
  { name: "DJ كريم", title: "بارتي الخميس 🎧", viewers: "21K", img: live4, cat: "DJ" },
];

function Index() {
  const [cat, setCat] = useState("الكل");
  const shown = cat === "الكل" ? lives : lives.filter((l) => l.cat === cat);

  return (
    <div className="min-h-screen bg-muted md:py-8">
      <main className="relative mx-auto min-h-screen max-w-md bg-background pb-28 md:min-h-[860px] md:rounded-[2.5rem] md:border md:shadow-soft md:overflow-hidden">
        <header className="flex items-center justify-between px-5 pt-6">
          <div>
            <p className="text-sm text-muted-foreground">أهلاً يوسف 👋</p>
            <h1 className="font-display text-3xl font-extrabold tracking-tight">
              لايفي<span className="text-primary">.</span>
            </h1>
          </div>
          <div className="flex gap-2">
            <IconBtn><Search className="size-5" /></IconBtn>
            <IconBtn dot><Bell className="size-5" /></IconBtn>
          </div>
        </header>

        <section className="no-scrollbar mt-5 flex gap-4 overflow-x-auto px-5">
          {stories.map((s, i) => (
            <button key={i} className="flex shrink-0 flex-col items-center gap-1.5">
              <span className="rounded-full bg-brand p-[2.5px]">
                <img src={s.img} alt={s.name} loading="lazy" className="size-16 rounded-full border-[3px] border-background object-cover" />
              </span>
              <span className="text-xs font-semibold">{s.name}</span>
            </button>
          ))}
        </section>

        <section className="mx-5 mt-6 relative overflow-hidden rounded-3xl shadow-soft">
          <img src={live4} alt="بث مميز" width={768} height={1024} className="h-52 w-full object-cover" />
          <div className="absolute inset-0 bg-media-fade" />
          <LiveBadge className="absolute top-3 right-3" />
          <div className="absolute bottom-4 right-4 left-4 text-on-media">
            <p className="flex items-center gap-1 text-xs font-semibold"><Crown className="size-4 text-accent" /> البث الأكثر مشاهدة</p>
            <h2 className="font-display text-xl font-bold">بارتي الخميس مع DJ كريم</h2>
          </div>
        </section>

        <nav className="no-scrollbar mt-6 flex gap-2 overflow-x-auto px-5">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${c === cat ? "bg-foreground text-background" : "bg-secondary text-secondary-foreground hover:bg-border"}`}>
              {c}
            </button>
          ))}
        </nav>

        <div className="mt-6 flex items-center justify-between px-5">
          <h3 className="flex items-center gap-1.5 font-display text-lg font-bold"><Flame className="size-5 text-primary" /> مباشر الآن</h3>
          <button className="text-sm font-semibold text-primary">عرض الكل</button>
        </div>

        <section className="mt-3 grid grid-cols-2 gap-3 px-5">
          {shown.map((l) => (
            <article key={l.name} className="group relative overflow-hidden rounded-3xl">
              <img src={l.img} alt={l.name} loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-media-fade" />
              <LiveBadge className="absolute top-2.5 right-2.5" />
              <span className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full bg-overlay px-2 py-1 text-[11px] font-semibold text-on-media backdrop-blur">
                <Eye className="size-3" />{l.viewers}
              </span>
              <div className="absolute bottom-3 right-3 left-3 text-on-media">
                <p className="text-sm font-bold leading-tight">{l.title}</p>
                <p className="text-xs opacity-80">{l.name}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="fixed bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-[24rem] -translate-x-1/2 md:absolute">
          <div className="flex items-center justify-around rounded-full border bg-card/90 px-3 py-2 shadow-soft backdrop-blur">
            <Tab active><Home className="size-5" /></Tab>
            <Tab><Compass className="size-5" /></Tab>
            <button aria-label="ابدأ بث" className="-mt-8 grid size-14 place-items-center rounded-full bg-brand text-primary-foreground shadow-soft">
              <Plus className="size-7" />
            </button>
            <Tab><MessageCircle className="size-5" /></Tab>
            <Tab><User className="size-5" /></Tab>
          </div>
        </footer>
      </main>
    </div>
  );
}

function LiveBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-1 rounded-full bg-live px-2 py-0.5 text-[11px] font-bold text-on-media ${className}`}>
      <span className="size-1.5 rounded-full bg-on-media animate-live" /> مباشر
    </span>
  );
}

function IconBtn({ children, dot }: { children: React.ReactNode; dot?: boolean }) {
  return (
    <button className="relative grid size-11 place-items-center rounded-full bg-secondary">
      {children}
      {dot && <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-primary ring-2 ring-secondary" />}
    </button>
  );
}

function Tab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button className={`grid size-11 place-items-center rounded-full ${active ? "text-primary" : "text-muted-foreground"}`}>
      {children}
    </button>
  );
}
