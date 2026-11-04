import { createFileRoute } from "@tanstack/react-router";
import { Settings, Copy, Gem, Coins, ChevronLeft, Crown, Wallet, Gift, Star, Shield, Headphones, Video, Pencil } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import avatar from "@/assets/live2.jpg";

export const Route = createFileRoute("/me")({
  head: () => ({
    meta: [
      { title: "حسابي — Diwan" },
      { name: "description", content: "ملفك الشخصي على Diwan: مستواك، محفظتك، متابعينك وإعداداتك." },
      { property: "og:title", content: "حسابي — Diwan" },
      { property: "og:description", content: "ملفك الشخصي على Diwan." },
    ],
  }),
  component: MePage,
});

const stats = [
  { label: "متابَعين", value: "248" },
  { label: "متابِعين", value: "12.5K" },
  { label: "زوار", value: "1.8K" },
];

const menu = [
  { icon: Video, label: "بثوثي", hint: "٣٢ بث" },
  { icon: Gift, label: "الهدايا", hint: "" },
  { icon: Crown, label: "VIP", hint: "اشترك" },
  { icon: Star, label: "المستوى", hint: "Lv.24" },
  { icon: Shield, label: "الخصوصية والأمان", hint: "" },
  { icon: Headphones, label: "المساعدة والدعم", hint: "" },
];

function MePage() {
  return (
    <div className="min-h-screen bg-muted md:py-8">
      <main className="relative mx-auto min-h-screen max-w-md bg-background pb-28 md:min-h-[860px] md:rounded-[2.5rem] md:border md:shadow-soft md:overflow-hidden">
        <div className="relative h-40 bg-brand">
          <button aria-label="الإعدادات" className="absolute top-5 left-5 grid size-10 place-items-center rounded-full bg-overlay text-on-media backdrop-blur">
            <Settings className="size-5" />
          </button>
        </div>

        <section className="-mt-14 flex flex-col items-center px-5 text-center">
          <div className="relative">
            <img src={avatar} alt="صورتي" className="size-28 rounded-full border-4 border-background object-cover shadow-soft" />
            <button aria-label="تعديل" className="absolute bottom-1 left-1 grid size-8 place-items-center rounded-full border-2 border-background bg-foreground text-background">
              <Pencil className="size-3.5" />
            </button>
          </div>
          <h1 className="mt-3 font-display text-2xl font-extrabold">يوسف الصباح</h1>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">ID: 8820461 <Copy className="size-3.5" /></span>
            <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold text-accent-foreground">Lv.24</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">بحب الجيمنج والسهرات الحلوة 🎮✨</p>
        </section>

        <section className="mx-5 mt-5 grid grid-cols-3 rounded-3xl border bg-card py-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i ? "border-r" : ""}`}>
              <p className="font-display text-xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="mx-5 mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-secondary p-4">
            <Gem className="size-6 text-primary" />
            <p className="mt-2 font-display text-xl font-bold">4,320</p>
            <p className="text-xs text-muted-foreground">ماسات</p>
          </div>
          <div className="rounded-3xl bg-secondary p-4">
            <Coins className="size-6 text-accent" />
            <p className="mt-2 font-display text-xl font-bold">18,900</p>
            <p className="text-xs text-muted-foreground">عملات</p>
          </div>
        </section>

        <button className="mx-5 mt-3 flex w-[calc(100%-2.5rem)] items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-bold text-primary-foreground shadow-soft">
          <Wallet className="size-5" /> شحن المحفظة
        </button>

        <ul className="mx-5 mt-5 overflow-hidden rounded-3xl border bg-card">
          {menu.map((m, i) => (
            <li key={m.label} className={`flex items-center gap-3 px-4 py-3.5 hover:bg-secondary ${i ? "border-t" : ""}`}>
              <span className="grid size-9 place-items-center rounded-xl bg-secondary"><m.icon className="size-5 text-primary" /></span>
              <span className="flex-1 font-semibold">{m.label}</span>
              {m.hint && <span className="text-xs text-muted-foreground">{m.hint}</span>}
              <ChevronLeft className="size-4 text-muted-foreground" />
            </li>
          ))}
        </ul>

        <BottomNav />
      </main>
    </div>
  );
}
