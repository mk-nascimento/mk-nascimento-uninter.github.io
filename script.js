let paragrafo = document.querySelector('p');
let botao = document.createElement('button');

botao.innerText = "Clique para ver uma mensasgem :)";

paragrafo.insertAdjacentElement('afterend', botao);

botao.addEventListener('click', function() {
    let msg = document.createElement('p');
    msg.style.color = "red";
    msg.innerHTML = "Você é um campeâo!";

    botao.insertAdjacentElement('afterend', msg);
});