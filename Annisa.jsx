export default function Annisa() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center hover:scale-105 transition duration-300">

        {/* Foto */}
        <img
          src="https://via.placeholder.com/150"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-400"
        />

        {/* Nama */}
        <h2 className="text-2xl font-bold text-gray-800">
          Annisa Intan
        </h2>

        {/* Info */}
        <p className="text-gray-500">TI 2A</p>
        <p className="text-gray-500">Teknologi Informasi</p>
        <p className="text-gray-500">Malang</p>

        {/* Deskripsi */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Saya adalah mahasiswa Teknologi Informasi yang memiliki minat dalam 
          pengembangan web menggunakan React dan Tailwind CSS. Saya senang belajar 
          hal baru dan berkolaborasi dalam tim untuk menciptakan proyek yang kreatif 
          dan bermanfaat.
        </p>

        {/* Tombol */}
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
          Follow
        </button>

      </div>
    </div>
  );
}