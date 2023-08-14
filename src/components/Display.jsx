import './Display.css';

const Display = ({ value }) => {
  const shownValue = value;
  return (
    <div className="component-display">
      <div className="display-value" role="presentation">
        {shownValue}
      </div>
    </div>
  );
};

export default Display;
