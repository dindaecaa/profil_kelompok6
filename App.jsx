function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans selection:bg-rose-200 overflow-x-hidden">
      
      {/* BACKGROUND DECORATION (Warna Soft & Estetik) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-rose-100/60 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-violet-100/60 blur-[120px] rounded-full"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full border-b border-slate-200 bg-white/60 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-black tracking-tighter text-slate-900">
            VANESIA<span className="text-rose-500">.</span>
          </h1>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#profile" className="hover:text-rose-500 transition-all">Profile</a>
            <a href="#about" className="hover:text-rose-500 transition-all">About</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* PROFILE CARD */}
          <section id="profile" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
            
            {/* PHOTO SECTION */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-72 h-96 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border-8 border-white animate-float">
               <img 
                src="/foto-vanesia.png" 
                 alt="Vanesia Chelselia" 
                 className="w-full h-full object-cover"
                />
              </div>
              {/* Badge Estetik */}
              <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 rotate-6">
                <p className="text-[10px] font-bold text-rose-500 uppercase">Class</p>
                <p className="text-slate-900 font-black text-xl">T2D</p>
              </div>
            </div>

            {/* IDENTITY SECTION */}
            <div className="lg:col-span-7">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1 rounded-full bg-rose-50 text-rose-600 text-[10px] font-bold uppercase tracking-widest border border-rose-100">
                  Teknologi Informasi Student
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1] tracking-tighter">
                  VANESIA <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">
                    CHELSELIA
                  </span>
                </h2>
                
                <div className="flex flex-wrap gap-4">
                   <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Domisili</p>
                      <p className="font-bold text-slate-800">Malang, Indonesia</p>
                   </div>
                   <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Prodi</p>
                      <p className="font-bold text-slate-800">Teknologi Informasi</p>
                   </div>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed max-w-md font-medium">
                   Membangun masa depan digital dengan kreativitas dan ketelitian di setiap baris kode.
                </p>

                <div className="flex gap-4 pt-4">
                   <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-rose-600 transition-all shadow-lg active:scale-95">
                      Get In Touch
                   </button>
                   <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-rose-300 transition-all shadow-sm">
                      CV
                   </button>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT SECTION (Card Putih Bersih) */}
          <section id="about" className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
            <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">
               TENTANG DIRI <span className="text-rose-500">.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-500 leading-relaxed text-lg font-medium">
              <p>
                Halo! Saya Vanesia Chelselia BR Kaban, seorang mahasiswi di bidang Teknologi Informasi yang berdomisili di Malang. Saat ini saya sedang menempuh pendidikan di kelas T2D dengan fokus utama pada pengembangan web dan teknologi digital. Saya memiliki antusiasme yang sangat tinggi dalam mempelajari hal-hal baru, terutama yang berkaitan dengan ekosistem React dan modern CSS seperti Tailwind. Perjalanan saya di dunia IT dimulai dari rasa penasaran bagaimana sebuah platform digital dapat membantu kehidupan manusia sehari-hari, dan kini saya berdedikasi untuk mengasah kemampuan teknis saya setiap harinya.
              </p>
              <p>
                Selain fokus pada akademik, saya juga aktif dalam mengembangkan proyek-proyek kecil untuk memperdalam pemahaman saya mengenai logika pemrograman dan desain antarmuka pengguna (UI/UX). Saya percaya bahwa teknologi informasi bukan hanya sekadar baris kode, melainkan sebuah seni untuk menyelesaikan masalah secara kreatif dan efisien. Di masa depan, saya bercita-cita untuk menjadi seorang profesional di industri teknologi yang mampu memberikan kontribusi positif melalui solusi-solusi digital inovatif yang saya bangun. Saya senang berkolaborasi dalam tim dan selalu terbuka untuk tantangan baru.
              </p>
            </div>
          </section>

        </div>
      </main>

      <footer className="py-12 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
        &copy; 2026 Vanesia Chelselia • Crafted with Pride
      </footer>
    </div>
  );
}

export default App;