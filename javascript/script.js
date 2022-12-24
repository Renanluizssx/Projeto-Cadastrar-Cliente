//Dúvidas
//parece o if mas seria só pra array ??
//o que é atributo data?
//Foreach fornece dois argumentos?
//boa prática adicionar um objeto no localstorage para fazer o crud
//.value
//diferença de retorno do queryselector e do queryselectorall e getelementsbyclassname
//o que é desestruturação
//db_cliente.forEach((dado, index) => printarcadastro(dado, index)) e db_cliente.forEach(printarcadastro) 
//. value
//target
//addeventlistener manda um evento de todos os objetos? 
//boaprática criar funções para chamar ou colocar no localstorage


//conclusões
//data serve para passar informações
//shit alt pra cima ou pra baixo
// colchetes para desestruturar
button = document.getElementById("cadastrar");
excluir = document.getElementById("excluir");
salvar = document.getElementById("salvar");
cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", fecharjanela);
salvar.addEventListener("click", salvarcadastro);
excluir.addEventListener("click", fecharjanela);
button.addEventListener("click", abrirjanela);
button.addEventListener("click", () => {
    return document.getElementById("clientenome").dataset.index = "new"
})
botões = document.getElementById("botões2"); 
let bloco = document.querySelector("#cadastro");
bloco.addEventListener("click", editardeletar);
            
let getLocalStorage = (db_cliente) =>  JSON.parse(localStorage.getItem(db_cliente)) ?? []
let setLocalStorage = (chave, db_cliente) => localStorage.setItem(chave, JSON.stringify(db_cliente))

function limpartela() {
    //innerHTML remove tudo
    let campos = document.querySelectorAll(".cd");
    campos.forEach((campo) => campo.innerHTML = ``);
    //campos.innerHTML = ``
    //let campos = document.querySelectorAll(".cd");
    //campos.forEach((campos) => campos.parentNode.removeChild(campos))
}   
// addeventlistener manda um evento de todos os objetos?
function editardeletar(event) {
    //event mostra as informações gerais
    //target alvo
    //tipo
    if(event.target.type === "submit") {
    //classname me retorna as minhas classes
    if(event.target.className === "cadastrar") {
        return null
        //abrirjanela()

    }
else {
     // o que é dataset
    //console.log(event.target.dataset.ação);
    //desestruturação
    //const renan = event.target.id.split("-")
    //console.log(renan)
    //let ação = event.target.id.split("-")[0]

    //console.log(ação)
    //let index = event.target.id.split("-")[1]
    let [ação, index] = event.target.id.split("-")
    console.log(index)

    if (ação === "editar") {
        editarcliente(index);
        
    } else {
        deletar(index)
        atualizartela();
    }

}
}
}

function PreencherCampos(cliente) {
    document.getElementById("clientenome").value = cliente.nome;
    document.getElementById("emailcliente").value = cliente.email;
    document.getElementById("celularcliente").value = cliente.celular;
    document.getElementById("cidadecliente").value = cliente.cidade;
    //document.getElementById("clientenome").classList.remove("novo")
    //não entendi cliente.index
    nome = document.getElementById("clientenome").dataset.index = cliente.index;
}   
function editarcliente(index) {
    let cliente = lercliente()[index]
    console.log(cliente)
    cliente.index = index
    console.log(cliente.index)
    PreencherCampos(cliente)
    abrirjanela();
}
function verificarcampos() {
    let form = document.getElementById("formulário");
    return form.reportValidity()
    
}
function atualizartela() {
    db_cliente = getLocalStorage("db_cliente");
    
    //nomecliente = document.getElementById("clientenome");
    //emailcliente = document.getElementById("emailcliente");
    //celularcliente = document.getElementById("celularcliente");
    //cidadecliente = document.getElementById("cidadecliente");
    limpartela();
    //dúvida entre as duas
                        //função anônima, não possui nome
    //db_cliente.forEach((dado, index) => printarcadastro(dado, index));
    //Foreach fornece dois argumentos?
    db_cliente.forEach(printarcadastro);
    
    
    
}
function limparcampo() {
    // query selector retorna um array?
    // getelementsbyClassName retorna um objeto de array?
    let campos = document.querySelectorAll(".campo")

    campos.forEach((campo)=> {
        campo.value = "";
    });
}
//deletar
let deletar = (index) => {
    let db_cliente = getLocalStorage("db_cliente")
    db_cliente.splice(index, 1)
    setLocalStorage("db_cliente", db_cliente)
}
//atualizar
function atualizarcliente(index, dado) {
    let db_cliente = getLocalStorage("db_cliente")
    console.log(db_cliente)
    db_cliente[index] = dado
    console.log(db_cliente[index])
    console.log(index)
    setLocalStorage("db_cliente", db_cliente)
}
//leitura
function lercliente () {
    return getLocalStorage("db_cliente")
}
//criação
function criarcliente (dado) {
    let db_cliente = getLocalStorage("db_cliente")
    //db_cliente.push(dado)
                                    // três pontos pra ele pegar os elementos antigos, somar com valor depois da vírgula e mandar um novo array
    setLocalStorage("db_cliente", [...db_cliente, dado])
}
function printarcadastro (dado, indice) {
       
//if (nomecliente.value === "" && emailcliente.value === "" && celularcliente.value === "" && cidadecliente.value === "") {
 //       window.alert("Você precisa preencher todos os campos");
  //  }
cadastronome.innerHTML += `<span>${dado.nome}</span>`;
cadastroemail.innerHTML += `<span>${dado.email}</span>`;
cadastrocelular.innerHTML += `<span>${dado.celular}</span>`;
cadastrocidade.innerHTML += `<span>${dado.cidade}</span>`;
                            // atributos personalizados nas tags
botões.innerHTML += `<div id="botõesl" class="botõesl cd"><button id="editar-${indice}" class="editar" data-ação="editar">Editar</button>
                    <button id="deletar-${indice}" class="deletar" data-ação="deletar" >Deletar</button></div>`
                    //problema
                    
}
function salvarcadastro () {
    
    if(verificarcampos() === false) {
        return null;
    }
    //tirar dúvida do .value
    nomecliente = document.getElementById("clientenome");
    emailcliente = document.getElementById("emailcliente");
    celularcliente = document.getElementById("celularcliente");
    cidadecliente = document.getElementById("cidadecliente");
    //sempre deve adicionar um objeto no localstorage
    let cliente = {
        nome:nomecliente.value,
        email:emailcliente.value,
        celular:celularcliente.value,
        cidade:cidadecliente.value
    }
    index = document.getElementById("clientenome").dataset.index 
    console.log(index)
        if(index === 'new') {
        
        criarcliente(cliente)
   
   atualizartela();
   fecharjanela();
    }
    else {
        atualizarcliente(index, cliente)
        
        atualizartela()
        fecharjanela()
    }
    
}
function fecharjanela () {
    
    janela = document.getElementById("cadastrarclientes");
    janela.classList.remove("abrir");
    limparcampo()
}
function abrirjanela () {
    let janela = document.getElementById("cadastrarclientes");
    janela.classList.add('abrir');

}

