"use client";

import { MomentsAPI } from "@/src/lib/api/api";
import { Moment } from "@/src/types";
import { useQuery } from "@tanstack/react-query";

export default function MomentsPage() {
  const {
    data: moments,
    isLoading,
    error,
  } = useQuery({ queryKey: ["moments"], queryFn: MomentsAPI.getAll });

  if (isLoading) return <p>Načítání...</p>;
  if (error) return <p>Chyba: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pozitivní momenty</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {moments?.map((moment: Moment) => (
          <li key={moment.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{moment.text}</h3>
            <p className="text-sm text-gray-500">
              {moment.location || "Lokace neuvedena"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
