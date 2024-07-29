export default function Loader() {
  return (
    <div className="terminal-loader">
      <div className="terminal-header">
        <div className="terminal-title">Terminal</div>
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
      </div>
      <div className="text">Loading...</div>
    </div>
  );
}
