export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative flex items-center justify-center p-6">

      {/* ABOUT ME */}
      <h1 className="absolute top-6 left-6 text-4xl md:text-5xl font-bold text-white/80">
        About Me!
      </h1>

      {/* CARD */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">

        {/* DATA (KIRI) */}
        <div className="flex-1">

          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-white/20 pb-2">
            Annisa Intan Khoirina
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">

            <p><span className="text-gray-300">Kelas:</span><br /> T2D</p>
            <p><span className="text-gray-300">Prodi:</span><br /> Teknologi Informasi</p>
            <p><span className="text-gray-300">Domisili:</span><br /> Tulungagung</p>
            <p><span className="text-gray-300">Kontak:</span><br /> 085775065746</p>

          </div>

          {/* DESKRIPSI */}
          <div className="mt-6 leading-relaxed text-sm md:text-base">
            <span className="text-gray-300 font-semibold">Tentang Diri:</span>
            <p className="mt-2 text-white/90">
              Saya merupakan mahasiswa Teknologi Informasi yang memiliki ketertarikan besar dalam bidang pengembangan web. 
              Saya juga memiliki kemampuan bekerja sama dalam tim, disiplin, serta semangat belajar yang tinggi.
            </p>
          </div>

        </div>

        {/* FOTO (KANAN) */}
        <div className="flex justify-center">
          <img
            src="/images/foto.jpg"
            alt="profil"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-white/30 shadow-lg"
          />
        </div>

      </div>

    </div>
  );
}