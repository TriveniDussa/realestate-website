import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Register() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {

        const response = await fetch(
            "http://localhost:5000/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    password
                })
            }
        );

        const data = await response.text();

        if (data === "Registration Successful") {

            alert("Registration Successful");

            setFullname("");
            setEmail("");
            setPassword("");

            navigate("/");
        }

        else if (data === "User already exists") {
            alert("User already exists");
        }

        else {
            alert(data);
        }
    };

    return (
        <div className="auth-container">

            <h2>Register</h2>

            <input
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleRegister}>
                Register
            </button>

            <p>
                Already have an account?
                <Link to="/"> Login</Link>
            </p>

        </div>
    );
}

export default Register;