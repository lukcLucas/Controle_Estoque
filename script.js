document.getElementById('estoque-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    // Captura os valores dos campos do formulário
    const nomeItem = document.getElementById('nome-item').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('estoque-table').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Adiciona as células com os valores do item
    const celulaNome = novaLinha.insertCell(0);
    const celulaQuantidade = novaLinha.insertCell(1);
    const celulaPreco = novaLinha.insertCell(2);

    celulaNome.textContent = nomeItem;
    celulaQuantidade.textContent = quantidade;
    celulaPreco.textContent = preco;

    // Limpa os campos do formulário
    document.getElementById('estoque-form').reset();
});
