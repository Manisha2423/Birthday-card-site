
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BirthdayCardViewer() {
  const router = useRouter();
  const { name, age, message } = router.query;

  const [cardData, setCardData] = useState({ name: "", age: "", message: "" });

  useEffect(() => {
    if (name && age && message) {
      setCardData({ name, age, message });
    }
  }, [name, age, message]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff1f2', padding: '2rem' }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#db2777', marginBottom: '0.5rem' }}>Happy {cardData.age}th Birthday!</h1>
        <h2 style={{ fontSize: '1.25rem', color: '#111827' }}>Dear {cardData.name},</h2>
        <p style={{ marginTop: '1rem', color: '#374151', whiteSpace: 'pre-wrap' }}>{cardData.message}</p>
        <div style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#6b7280' }}>Made with love on your special day</div>
      </div>
    </div>
  );
}
