// app/programs/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";

interface Program {
  id: string;
  name: string;
  acronym: string;
  type: {
    id: string;
    name: string;
  };
  createdAt: string;
  programLevels: any[]; // tu pourras préciser après
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await axios.get("/v2/programs");
      setPrograms(response.data.data);
    } catch (error) {
      console.error("Erreur en récupérant les programmes :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gestion des Programmes</h1>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-4 border">Nom</th>
              <th className="px-6 py-4 border">Sigle</th>
              <th className="px-6 py-4 border">Type</th>
              <th className="px-6 py-4 border">Niveaux associés</th>
              <th className="px-6 py-4 border">Date de création</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program) => (
              <tr key={program.id}>
                <td className="px-6 py-4 border">{program.name}</td>
                <td className="px-6 py-4 border">{program.acronym}</td>
                <td className="px-6 py-4 border">{program.type?.name}</td>
                <td className="px-6 py-4 border">{program.programLevels.length}</td>
                <td className="px-6 py-4 border">{new Date(program.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
