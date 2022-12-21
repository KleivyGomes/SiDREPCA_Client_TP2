import './Registo.css'
function Registo() {
    return (
        <div className='registo-box'>
            <h2>SigUp</h2>
            <div className='credenciais'>
                <h3>Name</h3>
                <input></input>
                <h3>Password</h3>
                <input type='password'></input>
                <h3>Confirm password</h3>
                <input type='password'></input>
                <h3 className='admin'>Admin
                    <input type='checkbox' className='check'></input>
                </h3>
                <h3>Confirm key</h3>
                <input type='password'></input>
            </div>
            <button>Confirm</button>
            <h4>Login</h4>
        </div>
    )
}

export default Registo