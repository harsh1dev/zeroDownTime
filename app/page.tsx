"use client"
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Next.js Input Field</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something here..."
        style={{ padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
}
