// 4-template Expression//

const TemplateExpression =() => {
const name= "Beatriz";

const data={
    age:23,
    job:"Programador",
}

    return(
        <div>
        <p>Soma é {2+2}</p>
        <h3>Seja bem vindo{name}</h3>
        <p>
        sua idade {data.age}anos e voçê é um {data.job}
        </p>
        </div>
    );
};

export default TemplateExpression