import './Viagem.css'
function Viagem(props){
    return (
        <div className="Viagem">
            <strong className='id'>
                <div>ID: {props.id}</div>
                <div>IMO: {props.imo}</div>
            </strong>
            <div className='intro'>
                <h4 className='name'>
                    Partida: {props.porto_partida} {props.horario_partida} / Chegada: {props.porto_chegada} {props.horario_chegada}
                </h4>
                <h4 className='name'>
                    Passageiros: {props.qtd_passageiros} / Carga: {props.qtd_carga} / Registrador: {props.user}
                </h4>
            </div>
            <div className='controls'>
                <button className='btn_update'>Edit</button>
                <button className='btn_delete'>Delete</button>
            </div>
        </div>
    )
}
export default Viagem