import "../../style/style.css"

export default function Register() {
    return <>
    <div class="container">
		<form action="" method="POST" class="login-email">
            <p class="login-text" style={{fontSize: "2rem",fontWeight: "800"}}>Register</p>
			<div class="input-group">
				<input type="text" placeholder="Username" name="username" />
			</div>
			<div class="input-group">
				<input type="email" placeholder="Email" name="email" />
			</div>
			<div class="input-group">
				<input type="password" placeholder="Password" name="password" />
            </div>
            <div class="input-group">
				<input type="password" placeholder="Confirm Password" name="cpassword" />
			</div>
			<div class="input-group">
				<button name="submit" class="btn">Register</button>
			</div>
			<p class="login-register-text">Sudah punya akun? <a href="/login">Login</a></p>
		</form>
	</div>
    </>
}