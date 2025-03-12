import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <div className="container main">
        <h1 className="page-title">AI-Driven Supply Chain & Fraud Detection</h1>
        
        <div className="grid">
          <div className="card">
            <h3 className="card-title">Supply Chain Dashboard</h3>
            <p>Optimize your inventory and supply chain with AI predictions.</p>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/supply-chain">
                <button className="button">Open Dashboard</button>
              </Link>
            </div>
          </div>
          
          <div className="card">
            <h3 className="card-title">Fraud Detection</h3>
            <p>Identify suspicious patterns and potential fraud in transactions.</p>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/fraud-detection">
                <button className="button">Open Dashboard</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}