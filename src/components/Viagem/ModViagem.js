import './ModViagem.css'

function ModViagem() {
    return (
        <div className='box'>
            <h2>VIAGEM</h2>
            <hr></hr>
            <div className='inputs'>
                <h4>Porto partida:
                    <input placeholder='Inserir porto de partida' type='text'></input></h4>
                <h4>Porto chegada:
                    <input placeholder='Inserir porto de destino' type='text'></input></h4>
                <h4>Horario partida:
                    <input className='date' type='date'></input>
                    <input className='time' type='time'></input></h4>
                <h4>Horario chegada:
                    <input className='date' type='date'></input>
                    <input className='time' type='time'></input></h4>
                <h4>Qtd carga:
                    <input placeholder='Qtd em toneladas' type='number'></input></h4>
                <h4>Qtd passageiros:
                    <input placeholder='Numero de pessoas' type='number'></input></h4>
                <h4>IMO:
                    <input placeholder='IMO do Navio' type='number'></input></h4>
                <h4>User_id:
                    <input placeholder='ID do Agente' type='number'></input></h4>
            </div>
            <div>
                <button className='btn_confirm'>Confirm</button>
                <button className='btn_cancel'>Cancel</button>
            </div>
        </div>
    )
}

export default ModViagem