import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Reservation.module.scss';
import { useParams, Link } from "react-router-dom";


export const ReservForm = () => {
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
    
    try {
      const response = await fetch("http://localhost:400/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }
      
      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <section className={style.logForm}>
        <p><Link to={`/`}>Hotel Overlook</Link> &gt; Login </p>
        <h2>Login</h2>
        <p>Indtast dit brugenavn og adgangskode for at logge ind</p>
        {error && <p className={style.error}>{error}</p>}
        <form onSubmit={handleSubmit}>     
            <select id="cars" name="cars">
                <option >Vælg destination & hotel</option>
                <option value="danmark">Danmark</option>
                <option value="sevrige">Sverige</option>
                <option value="finland">Finland</option>
                <option value="norge">Norge</option>
                <option value="tyskland">Tyskland</option>
                <option value="polen">Polan</option>
                <option value="island">Island</option>
            </select>   
        <div>
            <select id="cars" name="cars">
                <option >Vælg værelsetype</option>
                <option value="economy">Economy</option>
                <option value="superior">Superior</option>
                <option value="superior Plus">Superior Plus</option>
                <option value="junior Suite">Junior Suite</option>
                <option value="presidential Suite">Presidential Suite</option>
                <option value="standard Single">Standard Single</option>
                <option value="standard">Standard</option>
            </select>  
            <select id="cars" name="cars">
                <option >Vælg antal persona</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>  
        </div>
       
            <label for="myCheckbox">Checkbox Label</label>
            <input type="checkbox" id="myCheckbox" name="myCheckbox" value="value" />
        
      
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input  type="password" value={password}  onChange={(e) => setPassword(e.target.value)} />

            <div className={style.butts} >
                <button type="submit"> Login </button>
                <button type="submit"> Annuller </button>
            </div>
        </form>
    </section>
  );
};


