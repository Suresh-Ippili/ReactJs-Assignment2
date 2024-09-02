import '../css/signincss/Welcome.css';
const Welcome = ({ name,onLogout }) => {

    return (
        <>
            <h2>Welcome, {name}!</h2>
            <button onClick={onLogout}></button>
        </>
    );
  };
  
  export default Welcome;
  