import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <div className="navbar-title">
          Supply Chain & Fraud AI
        </div>
        <div className="navbar-links">
          <Link href="/" className="navbar-link">
            Home
          </Link>
          <Link href="/supply-chain" className="navbar-link">
            Supply Chain
          </Link>
          <Link href="/fraud-detection" className="navbar-link">
            Fraud Detection
          </Link>
        </div>
      </div>
    </div>
  );
}