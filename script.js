/*let corpo = document.querySelector("body");
let lista = document.querySelector("ul");
let listas = [
    {nome: "douglas"},
    {nome:"natyele"},
    {nome:"nati"},
    {nome: "karen"}
];

imprimirNomes = (cor) =>{
    for (let pessoas of listas ){
        lista.innerHTML += `<li>${pessoas.nome}</li>`
    }
    corpo.style.backgroundColor = cor;
}

 adicionarNome = (callback) =>{
     let escolhaUmaCor = prompt('digite uma cor em ingles')
    setTimeout(() => {
        listas.push({nome:"Pessoa linda"})
        callback(escolhaUmaCor);
    }, 1500);
};



adicionarNome(imprimirNomes);*/



// function soma(a, b){
//     a + b
// }

// soma(1,2);

let semana = "5"
let escolhaUmaSemana = prompt("digite uma semana")
let callback = (resolve, reject) => {
    if(semana == escolhaUmaSemana ){
        resolve ("acertouuu");
    }
    else{
        reject("errou")
    }
}
let promessa = new Promise(callback);

promessa
    .then(console.log)
    .catch(console.error)