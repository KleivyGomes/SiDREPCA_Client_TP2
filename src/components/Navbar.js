import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <h2 className='empresa'><div className='first'>Sid</div>RECPA</h2>
            <li><a href='#'>AGENTES</a></li>
            <li><a href='#'>VIAGENS</a></li>
            <li><a href='#'>NAVIOS</a></li>
            <li><a href='#'>LOGOUT</a></li>
        </div>
    )
}

export default Navbar