import { useContext, useState } from "react";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">

      <h1>Login</h1>
      <SupervisorAccountIcon className="icon" />
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Nhập email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Login failed! Invalid email or password</span>}
      </form>
      <div class="bg-login" >
      <span></span>
      </div>
    </div>
  );
};

export default Login;
