function salvarCronograma() {
    const tbody = document.querySelector("#cronograma tbody");
  
    localStorage.setItem("meuCronogramaEstrutura", tbody.innerHTML);
}


window.onload = function() {
    const dadosSalvos = localStorage.getItem("meuCronogramaEstrutura");
    if (dadosSalvos) {
        document.querySelector("#cronograma tbody").innerHTML = dadosSalvos;
    }
};

function excluir() {
    const tabela = document.querySelector('table tbody');
    const novaLinha = document.createElement('tr');
    
    novaLinha.innerHTML = `
        <td contenteditable="true">00:00</td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <button class="btn-excluir" onclick="this.closest('tr').remove()">X</button>
    `;
    tabela.appendChild(novaLinha);
}
