import './User.css'
function User(props) {
    return (
        <div className="User">
            <strong className='id'>
                <div>ID</div>
                <div>{props.id}</div>
            </strong>
            <div className='intro'>
                <h4 className='name'>
                    Name: {props.Name}
                </h4>
                <div className='atributo'>
                    <h5 className='check'>Admin
                    <input readOnly={true} type='checkbox' checked={props.admin}></input></h5>
                    <h5 className='check'>Válido
                    <input readOnly={true} type='checkbox' checked={props.valido}></input></h5>
                </div>
            </div>
            <div className='controls'>
                <button className='btn_update'>Edit</button>
                <button className='btn_delete'>Delete</button>
            </div>
        </div>
    )

}
export default User