export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontFamily: 'serif', fontSize: '32px', margin: 0 }}>
        Sweet Tea & Saturdays
      </h1>
      <p style={{ marginTop: '8px', opacity: 0.75 }}>
        Demo is live. If you can read this, the app shell is fixed.
      </p>

      <div style={{
        marginTop: '24px',
        padding: '16px',
        borderRadius: '12px',
        border: '1px solid rgba(0,0,0,.1)',
        background: '#fff'
      }}>
        <p>Next we’ll re‑enable the styled sections.</p>
      </div>
    </div>
  );
}
