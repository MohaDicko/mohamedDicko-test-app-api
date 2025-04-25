// components/layout/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 p-4">
      <h1 className="text-2xl font-bold mb-6">Admin</h1>
      <nav className="flex flex-col gap-4">
        <Link href="/programs" className="hover:bg-gray-700 p-2 rounded">Programmes</Link>
        <Link href="/levels" className="hover:bg-gray-700 p-2 rounded">Niveaux</Link>
        <Link href="/students" className="hover:bg-gray-700 p-2 rounded">Étudiants</Link>
      </nav>
    </aside>
  );
}
