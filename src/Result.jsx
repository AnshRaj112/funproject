import React from 'react';

function Result({ output }) {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Result:</h2>
      <p>{output}</p>
    </div>
  );
}

export default Result;
