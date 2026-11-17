import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[#FAF6EF] text-[#581C24]">
      <h1 className="font-serif text-5xl mb-2">404</h1>
      <p className="text-sm mb-4">Page not found</p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#581C24] text-white text-xs font-semibold uppercase tracking-wider"
      >
        Return to Wedding Invitation
      </Link>
    </div>
  );
}
