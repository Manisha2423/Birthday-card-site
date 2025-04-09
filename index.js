
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [cardURL, setCardURL] = useState("");

  const handleGenerate = () => {
    const id = uuidv4();
    const url = `/card/${id}?name=${encodeURIComponent(name)}&age=${age}&message=${encodeURIComponent(message)}`;
    setCardURL(url);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6', padding: '2rem' }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>Create a Birthday Card</h1>

        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />

        <label>Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />

        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message" style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />

        <button onClick={handleGenerate} style={{ width: '100%', padding: '0.75rem', background: '#3b82f6', color: 'white', borderRadius: '0.5rem' }}>Generate URL</button>

        {cardURL && (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p>Share this link:</p>
            <a href={cardURL} style={{ color: '#3b82f6', wordBreak: 'break-word' }}>{typeof window !== 'undefined' ? window.location.origin + cardURL : cardURL}</a>
          </div>
        )}
      </div>
    </div>
  );
}
