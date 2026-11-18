import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-desc">Page not found</p>
      <Link href="/" className="not-found-link">
        Return to Wedding Invitation
      </Link>
    </div>
  );
}
