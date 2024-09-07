//console.log(dados);

function pesquisar() {
//Obtém a seção HTML onde os resultados serão exibidos. 

    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada
    if(!campoPesquisa){ 
        section.innerHTML = "<p>Nada foi encontrado, digite uma palavra válida </p>"
        return
    }

   //campoPesquisa = campoPesquisa letrasMinusculas
    campoPesquisa = campoPesquisa.toLowerCase();

//inicializa uma strig vazia para armazenar os resultados. 
    let resultados = "";
    let titulo = "";
    let descricao = ""; 
    let tags = "";

//para cada dado dentro da lista de dados
    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descrição.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo includes campoPesquisa então faça... 
        if(dado.titulo.includes(campoPesquisa) || dado.descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href= "#" target= _blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div> 
    `
        }
        //cria um novo html para cada resultado
        
}

if (!resultados) {
    resultados = "<p> Nada foi Encontrado </p>"
}

section.innerHTML = resultados
}
