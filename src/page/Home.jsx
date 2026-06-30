function Home() {
  return (
    <div className="app">

      <header className="navbar">
        <h1>🚀 Nova Notebook</h1>
      </header>

      <main className="workspace">

        <aside className="sidebar">
          <h3>Explorer</h3>

          <button>+ New Notebook</button>

          <ul>
            <li>📓 Notebook 1</li>
          </ul>
        </aside>

        <section className="editor">
          <h2>Welcome 👋</h2>

          <p>
            Nova Notebook v0.1 is running successfully.
          </p>
        </section>

      </main>

    </div>
  );
}

export default Home;
