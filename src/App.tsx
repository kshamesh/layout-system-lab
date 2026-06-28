import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">Header</header>

      <main className="main">
        <aside className="sidebar">Sidebar</aside>

        <section className="content">
          <section className="toolbar">Toolbar</section>
          <section className="workspace">Workspace</section>
        </section>
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
}
