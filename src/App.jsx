import React, { useState } from 'react';
import './App.css';
import Result from './Result';

function App() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle prompt input change
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  // Simulate output generation on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && prompt) {
      setOutput(`Generated output for: "${prompt}"`);
    } else {
      setOutput('Please upload an image and enter a prompt.');
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Image & Prompt Generator</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '20px' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginBottom: '10px' }}
          />
        </div>
        <div style={{ margin: '20px' }}>
          <input
            type="text"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Enter your prompt"
            style={{ padding: '10px', width: '300px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {image && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded Image:</h3>
          <img src={image} alt="Uploaded Preview" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}

      {output && <Result output={output} />}
    </div>
  );
}

export default App;
