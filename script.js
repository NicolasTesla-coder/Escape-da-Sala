let senha = "5486";
let salaflor = 1;
let gaveta = false;

const avanca = document.querySelectorAll('.btn-proximo');
const avancaflor = document.querySelectorAll('.btn-flor')
const codigo = document.querySelector('.btn-senha');
const esquerdainicio = document.querySelector('.btn-proximo-flor')
const direitainicio = document.querySelector('.btn-proximo-estante')

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

avancaflor.forEach(button => {
    button.addEventListener('click', function(){
        if (salaflor == 1) {
            gaveta = true
        }
        salaflor += 1
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

esquerdainicio.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-f' + salaflor;

    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
})

direitainicio.addEventListener('click', function(){
    if (gaveta) {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-2a';

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    }else {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-2';

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    }
})

codigo.addEventListener('click', function(){
    let resultado = prompt('Digite a Senha')

    if (resultado == senha){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + '1c';

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    } else {
        alert('Senha Incorreta')
    }
})