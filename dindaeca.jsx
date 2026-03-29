import { useState } from "react";
import fotoDinda from '../assets/dinda.jpeg';

// ============================================================
// Halaman Profil - Dindaecaa
// File: src/pages/dindaeca.jsx
// ============================================================

const data = {
  nama: "Dindaecaa",
  tagline: "Content Creator & Designer",
  status: "Tersedia untuk Kolaborasi",
  kelas: "T2-D 2023",
  jurusan: "D3 Teknologi Informasi",
  prodi: "Teknologi Informasi",
  universitas: "Universitas Brawijaya",
  domisili: "Malang, Jawa Timur",
  email: "cantikaedtx@gmail.com",
  instagram: "dindaecaa",
  tiktok: "@dnzaxyca",
  foto: fotoDinda,

  stats: [
    { value: "5+", label: "Tahun Pengalaman" },
    { value: "5", label: "Posisi Dijalani" },
    { value: "10+", label: "Proyek Selesai" },
  ],

  tentang: `Saya adalah Dindaecaa, lulusan SMK Multimedia dengan semangat besar di bidang kewirausahaan, kreasi digital, dan pengembangan konten. Berpengalaman dalam desain grafis, fotografi, videografi, serta pengelolaan usaha mandiri.

Saya memiliki passion yang kuat dalam dunia kreatif, khususnya dalam menciptakan konten visual yang menarik dan bermakna. Dengan pengalaman lebih dari 5 tahun di industri kreatif, saya telah menjalani berbagai peran mulai dari desainer grafis, editor foto dan video, hingga content creator dan affiliate marketer di platform TikTok.

Saat ini saya sedang menempuh pendidikan D3 Teknologi Informasi di Universitas Brawijaya untuk memperluas wawasan di bidang teknologi, sehingga dapat mengintegrasikan kemampuan kreatif dengan keahlian teknis. Saya percaya bahwa kombinasi antara kreativitas dan teknologi adalah kunci untuk menciptakan karya-karya inovatif yang berdampak di era digital ini.`,

  pengalaman: [
    {
      period: "2021 – 2026",
      role: "Owner Usaha F&B",
      company: "Dilumerins",
      icon: "🏪",
      desc: "Mengelola usaha F&B secara mandiri dari produksi hingga pemasaran digital.",
    },
    {
      period: "2022 – 2024",
      role: "Editor Foto & Video",
      company: "Gendhis Photo Studio",
      icon: "📷",
      desc: "Mengedit foto dan video klien studio secara profesional.",
    },
    {
      period: "2024 – 2025",
      role: "Konten Kreator & Affiliate TikTok",
      company: "Akun @dnzaxyca",
      icon: "🎵",
      desc: "Membuat konten kreatif dan menjalankan program affiliate di TikTok.",
    },
  ],

  hardSkills: [
    { name: "CorelDRAW", level: 90 },
    { name: "Adobe Photoshop", level: 85 },
    { name: "Adobe Illustrator", level: 80 },
    { name: "Adobe Premiere", level: 85 },
    { name: "After Effect", level: 70 },
    { name: "Canva", level: 90 },
    { name: "Capcut", level: 98 },
    { name: "Ibis Paint", level: 70 },
    { name: "Blender (Animasi)", level: 60 },
    { name: "Fotografi & Videografi", level: 90 },
    { name: "Figma", level: 80 },
    { name: "Visual Studio Code", level: 50 },
    { name: "draw.io", level: 98 },
  ],

  softSkills: [
    { icon: "💬", name: "Komunikasi" },
    { icon: "👥", name: "Kepemimpinan" },
    { icon: "💡", name: "Kreatif & Inovatif" },
    { icon: "🤝", name: "Kerja Tim" },
    { icon: "⚙️", name: "Problem Solving" },
    { icon: "🕐", name: "Manajemen Waktu" },
  ],
};

function SkillBar({ name, level }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-medium text-base">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full rounded-full h-3" style={{ background: "#e8eaf6" }}>
        <div
          className="h-3 rounded-full"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #5c6bc0 0%, #9575cd 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function DindaProfile() {
  const [activeTab, setActiveTab] = useState("tentang");

  const tabs = [
    { id: "tentang", label: "Tentang" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "skills", label: "Skills" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <div className="min-h-screen font-sans">

      {/* ── HERO SECTION ─────────────────────────────── */}
      <section
        className="min-h-screen flex items-center px-8 md:px-20 py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e2a4a 0%, #2d3a6b 40%, #7c3aed 80%, #a855f7 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-10 w-full max-w-6xl mx-auto relative">
          <div className="text-white w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-yellow-400 border-opacity-60 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-300 text-sm font-medium">{data.status}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">Hai, Saya</h1>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "#f5c842" }}>
              {data.nama}
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-lg">
              Lulusan SMK Multimedia dengan semangat besar di bidang kewirausahaan, kreasi digital, dan pengembangan konten. Berpengalaman dalam desain grafis, fotografi, videografi, serta pengelolaan usaha mandiri.
            </p>

            <div className="flex gap-8 mb-10 justify-center md:justify-start">
              {data.stats.map((s, i) => (
                <div key={i} className={i > 0 ? "border-l border-white border-opacity-30 pl-8" : ""}>
                  <div className="text-2xl font-bold" style={{ color: "#f5c842" }}>{s.value}</div>
                  <div className="text-blue-200 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <button onClick={() => setActiveTab("pengalaman")}
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                ⊞ Lihat Portofolio
              </button>
              <button onClick={() => setActiveTab("kontak")}
                className="flex items-center gap-2 border border-white border-opacity-40 hover:bg-white hover:bg-opacity-10 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                ✉ Hubungi Saya
              </button>
            </div>
          </div>

          {/* Kanan — Foto */}
          <div className="flex justify-center items-center w-full md:w-1/2 relative mt-10 md:mt-0">
            <div
              className="rounded-3xl overflow-hidden border-4 border-white border-opacity-20 shadow-2xl bg-indigo-900"
              style={{ width: "220px", height: "260px" }}
            >
              {data.foto ? (
                <img
                  src={data.foto}
                  alt={data.nama}
                  style={{ width: "220px", height: "260px", objectFit: "cover" }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-white opacity-40">
                  <div className="text-7xl mb-3">👤</div>
                  <p className="text-sm text-center">Taruh foto di<br/>src/assets/dinda.jpeg</p>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-2.5 shadow-xl flex items-center gap-2 whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="text-gray-800 font-semibold text-sm">{data.tagline}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── KONTEN BAWAH ─────────────────────────────── */}
      <section className="py-12 px-4 md:px-12" style={{ background: "#f0f2ff" }}>
        <div className="max-w-4xl mx-auto">

          {/* Tab Nav */}
          <div className="flex gap-2 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 mb-8">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id ? "text-white shadow-md" : "text-gray-500 hover:text-gray-800"
                }`}
                style={activeTab === tab.id ? { background: "linear-gradient(135deg, #5c6bc0, #9575cd)" } : {}}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── TAB: TENTANG ── */}
          {activeTab === "tentang" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>👤</span> Tentang Saya
              </h2>
              {data.tentang.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">{p}</p>
              ))}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                {[
                  { label: "Kelas", value: data.kelas },
                  { label: "Jurusan", value: data.prodi },
                  { label: "Universitas", value: data.universitas },
                  { label: "Domisili", value: data.domisili },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-gray-800 font-semibold mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB: PENGALAMAN ── */}
          {activeTab === "pengalaman" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                <span>💼</span> Riwayat Pekerjaan
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5"
                  style={{ background: "linear-gradient(to bottom, #5c6bc0, #ec4899)" }} />
                <div className="space-y-6 pl-12">
                  {data.pengalaman.map((exp, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-8 w-4 h-4 rounded-full border-2 border-indigo-400 bg-white" />
                      <div className="rounded-2xl p-5 border border-indigo-100" style={{ background: "#f5f6ff" }}>
                        <span className="inline-block text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                          style={{ background: "#e8eaf6" }}>
                          {exp.period}
                        </span>
                        <h3 className="font-bold text-gray-800 text-base">{exp.role}</h3>
                        <p className="text-gray-500 text-sm mt-1">{exp.icon} {exp.company}</p>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB: SKILLS ── */}
          {activeTab === "skills" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <span className="text-indigo-500 font-mono text-lg">&lt;/&gt;</span> Hard Skills
                </h2>
                {data.hardSkills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span style={{ color: "#5c6bc0", fontSize: "20px" }}>✦</span> Soft Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {data.softSkills.map((s, i) => (
                    <div key={i}
                      className="flex items-center gap-2 rounded-2xl px-4 py-3 text-gray-700 text-sm font-medium transition-all hover:bg-indigo-50"
                      style={{ border: "1.5px solid #e8eaf6" }}>
                      <span>{s.icon}</span> {s.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB: KONTAK ── */}
          {activeTab === "kontak" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>📬</span> Hubungi Saya
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "✉️", label: "Email", value: data.email, href: `mailto:${data.email}` },
                  { icon: "📷", label: "Instagram", value: `@${data.instagram}`, href: `https://instagram.com/${data.instagram}` },
                  { icon: "🎵", label: "TikTok", value: data.tiktok, href: `https://tiktok.com/${data.tiktok}` },
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all group hover:bg-indigo-50"
                    style={{ border: "1.5px solid #e8eaf6" }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: "#e8eaf6" }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      <p className="text-gray-800 font-semibold">{item.value}</p>
                    </div>
                    <span className="ml-auto text-gray-300 group-hover:text-indigo-400 transition-all">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-8">
            {data.nama} · {data.kelas} · {data.universitas} · {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </div>
  );
}
