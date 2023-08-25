let listaNome = []; //varíavel utilizável em todas as funções (variável global)
let listaProf = []

function ver(){
    console.log(listaNome)
    console.log(listaProf)

function adc(){
    let nome = document.getElementById("nome").value;
    let prof = document.getElementById("profissao").value;
    listaNome.push(nome); //chama as funções que tem nas arrays. 
    listaProf.push(prof); 
    console.log(listaNome);
    console.log(listaProf);
    Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        color: '#de6a04',
        background: '#360101',
        text: nome + prof + 'foram adicionados a lista com êxito!',
})
}

function rmv(){
    let nome = document.getElementById("nome").value;
    let profissao = document.getElementById("profissao").value;
    let pos = listaNome.indexOf(nome); //retorna o número referente a posição do produto requerido. 
    if(pos !== -1){  
    listaNome.splice(pos, 1); //vai remover a quantidade de posições do array. 
    listaProf.splice(pos, 1)
        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'O nome e a profissão foram removidas com êxito!',
            color: '#de6a04',
            background: '#360101'
    }) 
    }
    else{
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado! ' + ' A pessoa ' + nome + ' e a profissão ' + profissao + ' não foram encontrados!',
        color: '#de6a04',
        background: '#360101'
        //para caso o produto pesquisado não exista, o valor retornado será de -1.
      })    
}}
