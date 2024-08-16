import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState(""); // Estado para o nome
    const [email, setEmail] = useState(""); // Estado para o email

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={handleName} // Atualiza o estado do nome
                    />
                </div>

                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={handleEmail} // Atualiza o estado do email
                    />
                </label>

                <input type="submit" value="Enviar" />

                {/* Exibindo os valores de "name" e "email" */}
                <p>Nome digitado: {name}</p>
                <p>Email digitado: {email}</p>
            </form>
        </div>
    );
};

export default MyForm;
