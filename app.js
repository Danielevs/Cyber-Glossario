function pesquisar(){
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (!campoPesquisa) {
      
          section.innerHTML = "Você precisa digitar uma palavra"
          return
        }
      campoPesquisa = campoPesquisa.toLowerCase()
       let resultados = "";
      let definicao = "";
      let termo = "";

  for (let dadoTermo of dadosTermos){
    termo = dadoTermo.termo.toLowerCase()
    definicao = dadoTermo.definicao.toLowerCase()

    if( termo.includes(campoPesquisa) || definicao.includes(campoPesquisa) ){
    resultados += `
          <div class="item-resultado">
          <h2> 
        ${dadoTermo.termo}
      </h2>
            <p class="descricao-meta"> Definição: ${dadoTermo.definicao}</p>
            <p class="descricao-meta"> Exemplo: ${dadoTermo.exemplos}</p>
            <a href= ${dadoTermo.link} target="_blank">Mais informações</a>
    </div> 
            `;
    } 
    if (!resultados) {
      resultados = "<p > Nenhum resultado encontrado</p>"
    }
   
}

section.innerHTML = resultados
}


