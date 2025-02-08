export function User() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto">
      <img
        src="/profile-picture.jpg"
        alt="Profilový obrázek"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold text-center">Ondřej Vít</h2>
      <p className="text-gray-600 text-center">ondrej.vit@example.com</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
        Upravit profil
      </button>
    </div>
  );
}
