export function Navigation() {
  return (
    <div className="bg-gray-100">
      <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">FlowList</h1>
        <div className="flex gap-4">
          <a href="/moments" className="hover:underline">
            Dashboard
          </a>
          <a href="/dashboard" className="hover:underline">
            Přidat moment
          </a>
          <a href="/profile" className="hover:underline">
            Profil
          </a>
        </div>
      </nav>
    </div>
  );
}
