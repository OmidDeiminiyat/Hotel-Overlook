import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './LoginForm.module.scss';
import { useParams, Link } from "react-router-dom";


export const LoginForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    const requestBody = {
        firstname: "Trevva",
        lastname: "Predict",
        email: email,
        password: password,
        is_active: "1",
        org_id: '1',
        refresh_token: "1234",
        groups: "1"
      };
  

    try {
      const response = await fetch("http://localhost:400/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json(); // Read response body

      if (!response.ok) {
        throw new Error(data.message || "Failed to log in");
      }

      setError("");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err.message);
      setError(err.message);
    }
  };

  
  return (
    <div className={style.logForm}>
        <p><Link to={`/`}>Hotel Overlook</Link> &gt; Login </p>
        <h2>Login</h2>
        <p>Indtast dit brugenavn og adgangskode for at logge ind</p>
        {error && <p className={style.error}>{error}</p>}
        <form onSubmit={handleSubmit}>            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={style.butts} >
                <button type="submit"> Login </button>
                <button type="submit"> Annuller </button>
            </div>
        </form>
      </div>
  );
};

