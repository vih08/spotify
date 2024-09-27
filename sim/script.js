// JavaScript básico para interações futuras
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Você clicou em: ${item.textContent}`);
    });
});
