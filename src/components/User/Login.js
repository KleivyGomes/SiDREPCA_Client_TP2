import './Login.css'
function Login() {
    return (
        <div className="login-box">
            <h1>SigIn</h1>
            <div className='credenciais'>
                <h3>Name</h3>
                <input type='text'></input>
                <h3>Password</h3>
                <input type='password'></input>
            </div>
            <button>Login</button>
            <h5>Registo</h5>
        </div>
    )

}

export default Login