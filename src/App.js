import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="main">
      <h1 className="heading">React Tooltip</h1>
      <div className="main_position">
        <Tooltip position="top">
          <button className="btn">Hover me</button>
        </Tooltip>
        <Tooltip position="bottom">
          <button className="btn">Hover me</button>
        </Tooltip>
      </div>
      <div className="main_position">
        <Tooltip position="left">
          <button className="btn">Hover me</button>
        </Tooltip>
        <Tooltip position="right">
          <button className="btn">Hover me</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
