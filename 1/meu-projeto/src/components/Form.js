function Form() {
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuário cadastrou-se`)
    }
    
    return(

        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome:"/>
                </div>
                <div>
                    <input type="submit" placeholder="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form