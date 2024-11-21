import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-300 text-xl mb-4">Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default App;
