import Button from "./evento/Button";
function Evento({}){

    function meuEvento(){
        console.log(`ATIVANDO PRIMEIRO EVENTO!`);
    }

    function segundoEvento(){
        console.log(`ATIVANDO SEGUNDO EVENTO!`);

    }

    return(
        <div>
            <p>Clique para disparar algum evento:</p>
            <Button event ={meuEvento} text = "Primeiro Evento" />
            <Button event ={segundoEvento} text = "Segundo Evento" />

            <br/>
            <br/>

            {/* <button onClick={meuEvento}>Ativar!</button> */}
        </div>
    )
}

export default Evento