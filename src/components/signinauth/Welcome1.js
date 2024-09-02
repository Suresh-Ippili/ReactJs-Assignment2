
import '../css/signincss/Welcome.css';


const Welcome1 = ({ name,onLogout }) => {
    return (
        <>
            <h2>Welcome, {name}!</h2>
            <button onClick={onLogout}>Log Out</button>
        </>
    );
  };
  
  export default Welcome1;
