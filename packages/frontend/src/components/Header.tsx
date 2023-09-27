import reactLogo from '../assets/react.svg';

function Header() {
  return (
    <>
      <div id="header">
        <h1>Header</h1>
      </div>
      <img src={reactLogo} className="logo" alt="React Logo" />
    </>
  );
}

export default Header;
