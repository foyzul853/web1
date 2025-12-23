const nodes = document.querySelectorAll('.node');
const infoBox = document.getElementById('node-info');

nodes.forEach(node => {
    node.addEventListener('click', () => {
        const info = node.getAttribute('data-info');
        infoBox.textContent = info;
    });
});
