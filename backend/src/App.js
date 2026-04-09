import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/saludo")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Frontend React</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;