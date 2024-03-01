import { useState } from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário: ${name}`)
        console.log(`Senha: ${password}`)

    }

    const [name, SetName] = useState()
    const [password, SetPassword] = useState()


    return (

        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => SetName(e.target.value)} />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => SetPassword(e.target.value)} />
                </div>
                <br />
                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form