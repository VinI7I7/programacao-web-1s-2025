const itens = [];

function adicionar(item){

    if(validar_item_a_cadastrar(item)){
        itens.push(item);
        return true;
    }
    return false;
}

function listar(){
    return itens;
}

function editar(id, qtd){
    return editar_item(id, qtd);
}

module.exports = {
    adicionar,
    listar,
    editar,
    remover
}

function is_numerico(n){
    if(isNaN(n) || n == null){
        return false;
    }
    return true;
}

function is_id_cadastrado(id){
    for(let indice in itens) {
        let item_cadastrado = itens[indice];
        if(item_cadastrado.id == id){
            return true;
        }
    }
    return false;
}

function validar_item_a_cadastrar(item){
    let item_valido = true;

    if(!is_numerico(item.id) || item.id <= 0){
        item_valido = false;
    }

    if(is_id_cadastrado(item.id)){
        item_valido = false;
    }

    if(!is_numerico(item.qtd) || item.qtd < 0){
        item_valido = false;
    }

    if(item.nome.length < 1){
        item_valido = false;    
    }

    return item_valido;
}

function editar_item(id, qtd){
    console.log(`${id} - ${qtd}`);
    if(!is_numerico(id) || id == 0){
        console.log('id invalido');
        return false;
    }
    if(!is_id_cadastrado(id)){
        console.log('id n cadastrado');
        return false;
    }
    if(!is_numerico(qtd) || qtd < 0){
        console.log('qtd invalido');
        return false;
    }

    for(let indice in itens){
        let item_cadastrado = itens[indice];
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        }
    }
    return true;
}

function remover(id) {
    let index = itens.findIndex(item => item.id === id);
    if (index !== -1) {
        itens.splice(index, 1); 
        return true;
    }
    return false;
}