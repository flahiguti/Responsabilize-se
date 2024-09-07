
function pesquisar () {
        
        let section = document.getElementById("resultados-pesquisa")
        
        let campoPesquisa = document.getElementById("campo-pesquisa").value

        if (!campoPesquisa) {
                section.innerHTML="A não ser que não queira fazer nada, senão escreva no campo"
                return
        }

        campoPesquisa=campoPesquisa.toLowerCase()
        console.log(campoPesquisa)
                
        let resultados= "";
        let titulo= "";
        let descricao= "";
        let tags = "";
        
        for (let dado of dados) {
                titulo=dado.titulo.toLocaleLowerCase()
                descricao=dado.descricao.toLocaleLowerCase()
                tags=dado.tags.toLowerCase()

                if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)) {  
                        resultados +=
                        `
                        <div class="item-resultado">
                                        <H2>${dado.titulo}
                                        </H2>
                                        <p class="descricao-meta"> ${dado.descricao}
                                        </p>
                                        <a href=${dado.link} target="_blank"> Saiba mais...
                                        </a>
                        </div>}
                        `}              
        }
        if(!resultados) {
                resultados= "<p>Nada foi encontrado!</p>" 
        }
        section.innerHTML=resultados
}

