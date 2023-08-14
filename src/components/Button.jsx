import './Button.css';

// eslint-disable-next-line
const Button = ({ clickHandler, name: stringName, orange: boolOrange, wide: boolWide }) => {
  const handleClick = () => {
    clickHandler(stringName);
  };

  const className = ['component-button', boolOrange ? 'orange' : '', boolWide ? 'wide' : ''];

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick} type="button">
        {stringName}
      </button>
    </div>
  );
};

export default Button;
