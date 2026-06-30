import React from "react";

const PHOTO = (i, q = "architecture", extra = "") =>
  `https://echols.ai/api/stock?type=photo&q=${q}&i=${i}${extra}`;

const VIDEO_POSTER = PHOTO(0, "architecture");
const VIDEO_SRC = "https://echols.ai/api/stock?type=video&q=architecture";

const PALETTE = {
  bg: "#0c0c08",
  ink: "#f4f4f2",
  accent: "#c9a5a5",
  muted: "#9.9.9.6",
  card: "#1.1.1.0",
};

const Eyebrow = ({ children }) => (
  <div className="text-[0.7rem] tracking-[0.4em] uppercase text-[#9.9.9.6] font-display mb-3 text-center">
    {children}
  </div>
);

const Nav = () => (
  <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0c0c08]/0.6 border-b border-[#f4f4f2]/0.06">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="font-display text-[#f4f4f2] text-lg tracking-[0.2em] uppercase">
        Tessera<span className="text-[#c9a5a5]">·</span>Studio
      </div>
      <div className="hidden md:flex gap-8 text-[0.7rem] tracking-[0.3em] uppercase text-[#9.9.9.6]">
        <span>Work</span>
        <span>Philosophy</span>
        <span>Studio</span>
        <span>Contact</span>
      </div>
      <div className="text-[0.7rem] tracking-[0.3em] uppercase text-[#9.9.9.6]">
        Est. 2019
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative block w-full h-[88vh] overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={VIDEO_POSTER}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    >
      <source src={VIDEO_SRC} type="video/mp4" />
    </video>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.42), rgba(0,0,0,.72))",
      }}
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
      <div className="text-[0.7rem] tracking-[0.4em] uppercase text-[#9.9.9.6] mb-6">
        Architecture Studio · Est. 2019
      </div>
      <h1
        className="font-display text-[#f4f4f2] leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        We build the rooms
        <br />
        you didn't know you needed.
      </h1>
      <p className="mt-6 max-w-prose text-[#9.9.9.6] text-lg leading-relaxed">
        Twelve drafts on paper before one on site. Every line earns its place
        before it earns its shadow.
      </p>
      <div className="mt-10 flex gap-4">
        <button className="px-6 py-3 rounded-full bg-[#c9a5a5] text-[#0c0c08] text-sm tracking-[0.2em] uppercase hover:scale-[1.04] transition-transform duration-200">
          See Our Work
        </button>
        <button className="px-6 py-3 rounded-full border border-[#f4f4f2]/0.3 text-[#f4f4f2] text-sm tracking-[0.2em] uppercase hover:scale-[1.04] transition-transform duration-200">
          Read Our Philosophy
        </button>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="block py-28">
    <div className="max-w-6xl mx-auto px-6">
      <Eyebrow>The Studio</Eyebrow>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div
          className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#1.1.1.0] hover:scale-[1.02] transition-transform duration-200"
        >
          <img
            src={PHOTO(1, "architecture", "&orient=portrait")}
            alt="Studio drafting room"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2
            className="font-display text-[#f4f4f2] leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}
          >
            We draw before we build, and we draw again before we finish.
          </h2>
          <p className="mt-6 text-[#9.9.9.6] leading-relaxed">
            Tessera Studio is a small architecture firm working out of a
            converted printworks in Bristol. We are four drafters, one
            site-engineer, and a rotating cast of carpenters who keep us honest.
            Our commissions are slow, deliberate, and rarely under six months.
          </p>
          <p className="mt-4 text-[#9.9.9.6] leading-relaxed">
            We believe a building is a sentence before it is a structure — and
            that the sentence should be legible from the pavement.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Work = () => {
  const projects = [
    { i: 2, title: "The Glass Hall, Henley", note: "2024 · Commission No. 7" },
    { i: 3, title: "Reservoir House, Clevedon", note: "2023 · Commission No. 6" },
    { i: 4, title: "The Brick Long-Barrow", note: "2022 · Commission No. 5" },
    { i: 5, title: "Cliff-Edge Atrium", note: "2021 · Commission No. 4" },
  ];
  return (
    <section className="block py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>Our Work</Eyebrow>
        <h2
          className="font-display text-[#f4f4f2] leading-tight text-center mb-12"
          style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}
        >
          Four commissions, finished.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div
              key={p.i}
              className="rounded-2xl overflow-hidden bg-[#1.1.1.0] hover:scale-[1.03] transition-transform duration-200"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={PHOTO(p.i, "architecture", "&orient=portrait")}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-[#f4f4f2] font-display text-lg">{p.title}</div>
              <div className="text-[0.7rem] tracking-[0.3em] uppercase text-[#9.9.9.6] mt-1">
                {p.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section className="block py-24">
    <div className="max-w-6xl mx-auto px-6">
      <Eyebrow>Our Philosophy</Eyebrow>
      <h2
        className="font-display text-[#f4f4f2] leading-tight text-center mb-12"
        style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}
      >
        Three rules we won't break.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            n: "I",
            t: "A wall has a reason.",
            d: "No wall is added for symmetry's sake. If a room needs light, we cut a window — we do not build a wall to justify the window.",
          },
          {
            n: "II",
            t: "The plan is the poem.",
            d: "We refuse to bid a project that reads better on paper than it stands in brick. The drawing is the contract, not the brochure.",
          },
          {
            n: "III",
            t: "Let the floor settle.",
            d: "Every commission waits a full season after framing before the final pass. A building that cannot survive a winter does not deserve a client.",
          },
        ].map((r) => (
          <div
            key={r.n}
            className="rounded-2xl border border-[#f4f4f2]/0.1 bg-[#1.1.1.0] p-6 hover:scale-[1.03] transition-transform duration-200"
          >
            <div className="font-display text-[#c9a5a5] text-sm tracking-[0.3em] uppercase">
              Rule {r.n}
            </div>
            <div className="mt-4 font-display text-[#f4f4f2] leading-tight" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              {r.t}
            </div>
            <p className="mt-4 text-[#9.9.9.6] leading-relaxed text-sm">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const shots = [6, 7, 8, 9, 10, 11];
  return (
    <section className="block py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>The Portfolio</Eyebrow>
        <h2
          className="font-display text-[#f4f4f2] leading-tight text-center mb-12"
          style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}
        >
          Six rooms, six lights.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {shots.map((n) => (
            <div
              key={n}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#1.1.1.0] hover:scale-[1.03] transition-transform duration-200"
            >
              <img
                src={PHOTO(n, "architecture")}
                alt={`Portfolio image ${n}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="block py-24">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <Eyebrow>Contact</Eyebrow>
      <h2
        className="font-display text-[#f4f4f2] leading-tight mb-8"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Commission us — or visit us at the drafting table.
      </h2>
      <p className="text-[#9.9.9.6] leading-relaxed max-w-prose mx-auto">
        We answer letters within three working days. We do not answer emails
        about projects we did not build. Come to Bristol, come in October, and
        bring a drawing.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <button className="px-6 py-3 rounded-full bg-[#c9a5a5] text-[#0c0c08] text-sm tracking-[0.2em] uppercase hover:scale-[1.04] transition-transform duration-200">
          Request a Commission
        </button>
        <button className="px-6 py-3 rounded-full border border-[#f4f4f2]/0.3 text-[#f4f4f2] text-sm tracking-[0.2em] uppercase hover:scale-[1.04] transition-transform duration-200">
          Book a Studio Visit
        </button>
      </div>
      <div className="mt-16 text-[0.7rem] tracking-[0.3em] uppercase text-[#9.9.9.6]">
        Tessera Studio · 1-3 Lambeth Walk · Bristol · UK
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#0c0c08] text-[#f4f4f2] font-display"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Nav />
      <Hero />
      <About />
      <Work />
      <Philosophy />
      <Gallery />
      <Contact />
    </div>
  );
}
