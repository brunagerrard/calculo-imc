//////////FUNÇÃO PARA CALCULAR IMC
function calcular(p,a) {
//recebe parametros de peso e altura
    const peso = document.getElementById("peso").value;
    //atribui o valor do input de peso a uma variavel
    const altura = document.getElementById("altura").value;
    //atribui o valor do input de altura a uma variavel
    const calculo = peso / ((altura/100) * (altura/100));
    //converte a altura de cm para m e calcula o imc
    const imc = calculo.toFixed(2);
    //corta o número para até 2 decimais

    const mensagem = `Seu IMC é ${imc}.`
    //guarda a mensagem final numa variavel string que será impressa

        function exibirResultado() {
    //exibe resultado adequado ao imc obtido
            
            //banco de variáveis de texto
            const erro = document.createTextNode("Não entendi! Você está se esquivando da pergunta?");
            const underweight = document.createTextNode(`${mensagem} Parece que você está abaixo do peso! Para ganhar peso de forma saudável, é importante ajustar sua alimentação para incluir alimentos integrais e fontes de proteína, como carnes magras, peixes, ovos, arroz integral, feijão e aveia.`);
            const adequate = document.createTextNode(`${mensagem} Parabéns! Você tem um peso adequado para sua altura e isso é motivo de comemoração! Continue cuidando da sua alimentação e se exercitando regularmente para manter a massa muscular e prevenir doenças.`);
            const overweight = document.createTextNode(`${mensagem} Ops! Você está ligeiramente acima do peso. Para emagrecer com saúde, tente incluir mais frutas e verduras na sua alimentação e se exercitar entre 2 e 3 vezes ao dia.`);
            const obese = document.createTextNode(`${mensagem} Parece que você está acima do peso! Inclua mais frutas e verduras na sua alimentação e se exercite com o acompanhamento de um profissional. Também é importante fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem.`);
            
            document.getElementById("caixa-result").removeAttribute("class");
            //exibe caixa com resultado

            const img = document.createElement('img');
            //cria um nova imagem no html e atribui a variavel img

            if (imc < 18.50) {
                document.getElementById("texto-result").appendChild(underweight);
                img.src = "underweight.svg";
            } else if (imc >= 18.50 && imc < 25) {
                document.getElementById("texto-result").appendChild(adequate);
                img.src = "adequate.svg";
            } else if (imc >= 25 && imc < 30) {
                document.getElementById("texto-result").appendChild(overweight);
                img.src = "overweight.svg";
            } else if (imc >= 30) {
                document.getElementById("texto-result").appendChild(obese);
                img.src = "obese.svg";
            } else {
                document.getElementById("texto-result").appendChild(erro);
                img.src = "error.svg";
                document.getElementById("obs").style.display="none";
            }
            //a img é manipulada de acordo com o resultado
            //de imc, através da .src que é alterada
        
            document.getElementById("caixa-result").appendChild(img); 
            //imprime a imagem

            document.getElementById("caixa").replaceWith(document.getElementById("caixa-result"));
            //troca o formulário pela caixa com o resultado
    };

    exibirResultado();
//chama a função que irá imprimir o resultado
}



    










/* creating img element 
    let img = document.createElement('img');
    img.src = "lfc-crest.png";
    document.body.appendChild(img); */

// collecting user's name and age via prompt
// displaying them on the page in a string
// that will vary according to age input




/*
const name = prompt('What is your name?')
const age = prompt('And your age?')
*/



//with switch statement:
/*
switch (true) {
    case age < 18:
        document.write(`Hey, ${name}, you're a little young to be here.`);
        break;
    case age >= 18 && age < 20:
        document.write(`Oh, ${name}, I wish I was ${age} years old still...`);
        break;
    case age >= 20 && age < 40:
        document.write(`Hi, ${name}, enjoying your ${age.slice(0,1)}0s?`);
        break;
    case age >= 40:
        document.write(`Hi, ${name}, are you really ${age} years old? You look younger than ever!`);
        break;
    default:
        document.write("Sorry, I didn't get that.");
}
*/



//with if statements:
/*
    if (age < 18) {
        document.write(`Hey, ${name}, you're a little young to be here.`);
    } else if (age >= 18 && age < 20) {
        document.write(`Oh, ${name}, I wish I was ${age} years old still...`);
    } else if (age >= 20 && age < 40) {
        document.write(`Hi, ${name}, enjoying your ${age.slice(0,1)}0s?`);
    } else if (age >= 40) {
        document.write(`Hi, ${name}, are you really ${age} years old? You look younger than ever!`);
    } else {
        document.write("Sorry, I didn't get that.");
    } 
*/



//changing string input from prompt
//to number value using parseInt/Float
/*
    const strToNum1 = prompt('Input number one')
    const strToNum2 = prompt('Input number two')

    strToNum1 = parseInt(strToNum1)
    strToNum2 = parseInt(strToNum2)

//and the reverse is achieved with toString()
*/