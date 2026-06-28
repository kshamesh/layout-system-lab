import "./App.css";

function Box({ label }: { label: string }) {
  return <div className="box">{label}</div>;
}

export default function App() {
  return (
    <div className="container">
      <Box label="A" />
      <Box label="B" />
      <Box label="C" />
    </div>
  );
}
