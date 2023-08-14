import './Display.css';

const Display = ({ value }) => {
  const shownValue = value;
  return (
    <div className="component-display">
      <div className="display-value">{shownValue}</div>
    </div>
  );
};

export default Display;
