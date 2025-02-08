export const Moment = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Skvělý den!</h3>
        <span className="text-yellow-500 text-xl">⭐</span>
      </div>
      <p className="text-gray-700 text-sm">
        Dnes jsem potkal kamarády a užil si odpoledne.
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>🌍 Brno, ČR</span>
        <span>10:30</span>
      </div>
    </div>
  );
};
