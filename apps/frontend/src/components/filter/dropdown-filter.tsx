export function DropdownFilter() {
  return (
    <div className="relative">
      <select className="block appearance-none w-full bg-white border border-gray-300 rounded-lg p-2 pr-8">
        <option value="">Všechny tagy</option>
        <option value="práce">Práce</option>
        <option value="rodina">Rodina</option>
        <option value="zábava">Zábava</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        ▼
      </div>
    </div>
  );
}
