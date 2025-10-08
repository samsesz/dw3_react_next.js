import { useState } from "react";

const UserForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    //Criando a função que ira receber os dados do formulario e enviar para o back-end
    const handleSubmit = (event) => {
        //evita o comportamento padrao do formulario e nao recarrega a pagina
        event.preventDefault()
        // Aqui seria feito o envio dos dados para a API, porem iremos simular com um console.log
        console.log(name, email);
    }

    return (
        <>
        <h1>Formulario de cadastro:</h1>
        <br />
        {/* onChange = quando o valor do input mudar, pegue o novo valor (e.target.value) e mande atualizar o estado name (setName()) */}
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <br /><br />
            <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br /><br />
            <button type="submit">Cadastrar</button>
        </form>
        <br /><br />
        {name}
        <br />
        {email}
        </>
    );
};
export default UserForm;