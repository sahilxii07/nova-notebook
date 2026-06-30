function Toolbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <button>+ Code Cell</button>

      <button>+ Markdown Cell</button>
    </div>
  );
}

export default Toolbar;
