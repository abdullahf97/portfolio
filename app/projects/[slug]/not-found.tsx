import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text mb-4">
          Project Not Found
        </h2>
        <p className="text-text-muted mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
