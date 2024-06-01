
alert("Boas Vindas ao jogo do numero secreto");
let numeroMaximo = 20
let numeroSecreto =  parseInt(Math.random ()* numeroMaximo +1)
console.log(numeroSecreto);
let chute 
let tentativas = 1;


//Enquanto o chute não for igual ao numero secreto//
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 ${numeroMaximo}`)
    //Se chute for igual ao numero secreto
  {
    if(chute == numeroSecreto){
       
    }else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`)
    } else{
        alert(`O numero secreto é maior que ${chute}`)
    }
    // tentativas = tentativas + 1;
    tentativas ++
    }
}
}
let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa"
alert(`Isso ai!! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)























// if(tentativas > 1){
//     alert( alert(`Isso ai!! Voce descobriu o numero secreto! ${numeroSecreto} com ${tentativas} tentativas.`))
// }else{
//     alert(`Isso ai!! Voce descobriu o numero secreto! ${numeroSecreto} com ${tentativas} tentativa.`)
// }




// if(tentativas >1 ){
// alert (`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//     alert (`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }










// diaDaSemana = prompt("Qual é o dia da semana??")
// if (diaDaSemana === "Sábado"){
//     alert("Bom fim de Semana!!!")
// } else if(diaDaSemana == "Domingo"){
//     alert("Bom fim de Semana!!")
// } else{
//     alert("Boa Semana!")
// }

// numero = prompt("Digite um numero??")
// if (numero > 0){
//     alert("Numero Positivo")
// }else{
//     alert("Numero Negativo")
// }

// pontuacao = 105
// if (pontuacao >= 100){
//     console.log("Parabens voce ganhou!!!")
// } else{
//     console.log("Tente Novamente")
// }

// let saldoDaConta = 500
// alert("Seu saldo é de R$ 500")

// let nome = prompt("Insira seu nome:")
// alert (`Boas Vindas ${nome}`)

// let idade = prompt(`A idade do usuário ${nome}`)
// alert(`A idade do ${nome} é ${idade} `  )


// let hb = prompt("Idade do condutor:")
// if (hb <= 18){
//     alert("Voçe não pode pilotar!!!")
// }else{
//     alert("Esta apto!")
// }

// let contador = 1
// while (contador <=10){
//     console.log(contador)
// contador ++
// }
// let contadorMenos = 10
// while (contadorMenos >=0){
//     console.log(contadorMenos)
//     contadorMenos --
//