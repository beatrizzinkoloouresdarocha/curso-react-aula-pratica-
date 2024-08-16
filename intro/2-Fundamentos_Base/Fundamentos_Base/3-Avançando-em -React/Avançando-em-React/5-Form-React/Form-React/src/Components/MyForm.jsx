import "./MyForm.css";

import { useState } from "react";

const MyForm =() =>{
    //3-geremciamento de dados//
    const [name,setName]= userState();
    const [email,setEmail]= userState();

    return <div>
    {/* 1-criação de form*/}
    <form>
        <div>
            <label htmlFor="Name">Nome:</label>
            <input type="name" name="name" placeholder="Digite seu nome" onChange={handleName}/>
        </div>
    {/*2-label envolvendo inpit */}
        <label>
            <span>Email:</span>
            <input type="text" name="email" placeholder="Digite seu nome"/>
        </label>
            <input type="submit" value="Enviar"/>
    </form>
    </div>;
};

export default MyForm