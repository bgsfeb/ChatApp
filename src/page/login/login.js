import { useState } from "react"
import axios from "axios"
import "../../style/style.css"

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        let respon = await axios.post("http://localhost/moviewebapi/login.php",
        `username=${username}&password=${password}`,{
            "Content-Type": "multipart/form-data"
        })
        if (respon.data.status == "success") {
            localStorage.setItem("token", respon.data.token)
        } else {
            setErrorMessage(respon.data.message)
            setShowError(true)
        }
        
    }

    return <>
    <div class="container">
		<form onSubmit={handleSubmit} class="login-email">
            {showError && 
                <p style={{color:"#FFF",textAlign:"center", backgroundColor:"#ff5050", padding:"10px", borderRadius:"15px"}}>{errorMessage}</p>
            }
			<p class="login-text" style={{fontSize: '2rem', fontWeight: 800}}>Login</p>
			<div class="input-group">
				<input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username or Email" name="username" value={username}/>
			</div>
			<div class="input-group">
				<input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="password" value={password}/>
			</div>
			<div class="input-group">
				<button name="submit" class="btn">Login</button>
			</div>
			<p class="login-register-text">Belum punya akun? <a href="/register">Register</a></p>
		</form>
	</div>
    </>
}