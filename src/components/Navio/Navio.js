import './Navio.css'
function Navio(props){
    return(
        <div className="Navio">
            <strong className='id'>
                <div>IMO:</div>
                <div> {props.imo}</div>
            </strong>
            <div className='intro'>
                <h4 className='name'>
                    Nome: {props.nome} | Proprietario: {props.proprietario}
                </h4>
                <h4 className='name'>
                    Tipo:{props.tipo} | Max Carga: {props.maxcarga} | Max Passageiros = {props.maxpassageiros}
                </h4>
            </div>
            <div className='controls'>
                <button className='btn_update'>Edit</button>
                <button className='btn_delete'>Delete</button>
            </div>
        </div>
    )
}

export default Navio