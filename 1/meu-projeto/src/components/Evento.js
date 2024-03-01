function Evento({numero}){

    function meuEvento(){
        console.log(`ATIVADO! ${numero} vezes`);
    }
    return(
        <div>
            <p>Clique para disparar algum evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento