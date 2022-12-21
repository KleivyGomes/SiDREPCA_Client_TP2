import './ModNavio.css'

function ModNavio() {
    return (
        <div className='box'>
            <h2>Navio</h2>
            <hr></hr>
            <div className='inputs'>
                <h4>IMO:
                    <input placeholder='IMO do Navio' type='text'></input></h4>
                <h4>Nome:
                    <input placeholder='Nome do Navio' type='text'></input></h4>
                <h4>Tipo:
                    <input placeholder='Passageiros e/ou Carga' type='text'></input></h4>
                <h4>maxcarga:
                    <input placeholder='Máximo de carga' type='number'></input></h4>
                <h4>maxpassageiros:
                    <input placeholder='Máximo de passageiros' type='number'></input></h4>
                <h4>proprietario:
                    <input placeholder='Proprietario do Navio' type='text'></input></h4>
            </div>
            <div>
                <button className='btn_confirm'>Confirm</button>
                <button className='btn_cancel'>Cancel</button>
            </div>
        </div>
    )
}

export default ModNavio