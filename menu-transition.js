// Use uma função anônima para criar um escopo separado
(function() {
    // Defina a variável currentPage no escopo da função
    const currentPage = window.location.href;

    // Armazene a variável no localStorage
    localStorage.setItem('currentPage', currentPage);
})();


// Defina outra variável currentPage em outro escopo
const currentPage = localStorage.getItem('currentPage');
// Verifique se a página atual corresponde a um item de menu e aplique o estilo apropriado
if (currentPage.includes('genius-vizualization.html')) {
    document.getElementById('list-vizu').classList.add('active');
} else if (currentPage.includes('genius-config.html')) {
    document.getElementById('list-config').classList.add('active');
}
