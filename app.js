function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Obtém o valor do campo de pesquisa e o transforma em minúsculas
    let campoPesquisa = document.getElementById('campoPesquisa').value.trim();

    if (campoPesquisa === '') {
        section.innerHTML = '<p>Digite o imposto a ser pesquisado!</p>';
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';

    // Itera sobre cada item do array 'imposto' (assumindo que 'imposto' é um array de objetos)
    for (let dado of imposto) {
        let nome = dado.nome.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Concatena HTML para cada item, criando uma nova div com as informações do item
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <br>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }
    if (!resultados) {
        resultados = '<p>Nada foi encontrado!</p>'

    }
    // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}
