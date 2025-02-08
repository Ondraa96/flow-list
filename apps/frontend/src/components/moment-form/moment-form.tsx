export const CreateMoment = () => {
  return (
    <form className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4">
      <textarea
        className="border border-gray-300 rounded-lg p-2 w-full resize-none"
        rows={4}
        placeholder="Zadejte svůj moment..."
      ></textarea>
      <div className="flex gap-4">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 flex-1"
          placeholder="Tagy (např. práce, rodina)"
        />
        <input type="time" className="border border-gray-300 rounded-lg p-2" />
      </div>
      <div className="flex justify-between items-center">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-yellow-500"
          />
          Označit hvězdičkou
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Uložit moment
        </button>
      </div>
    </form>
  );
};
