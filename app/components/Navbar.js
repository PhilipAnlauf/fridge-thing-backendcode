import { colors } from "../styles";

export const Navbar = ({onLogout}) => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: "white",
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    fontFamily: "'Lexend', sans-serif",
  };

  const logoStyle = {
    margin: 0,
    color: colors.secondary,
    fontWeight: '700',
    fontSize: '20px',
  };

  const logoutBtnStyle = {
    border: 'none',
    background: 'none',
    color: '#e74c3c',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
  };

  return (
    <nav style={navStyle}>
      <h1 style={logoStyle}>Fridge Thing</h1>
      
      <button 
        style={logoutBtnStyle} 
        className="hover:opacity-70 active:scale-95 transition-all"
        onClick={onLogout}
      >
        Logout
      </button>
    </nav>
  );
};