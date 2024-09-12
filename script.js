let senha = "5486";
let salaflor = 1;
let gaveta = false;

const avanca = document.querySelectorAll('.btn-proximo');
const avancaflor = document.querySelectorAll('.btn-flor')

const codigo = document.querySelector('.btn-senha');
const esquerdainicio = document.querySelector('.btn-proximo-flor')
const direitainicio = document.querySelector('.btn-proximo-estante')

function proximaSala(btn, sala){
    if (typeof(sala) == 'undefined') {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + btn.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    } else {
        const atual = document.querySelector('.ativo');
        const proximoPasso =  sala;

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    }
}

avanca.forEach(button => {
    button.addEventListener('click', function(){
        proximaSala(this)
    })
})

avancaflor.forEach(button => {
    button.addEventListener('click', function(){
        if (salaflor == 1) {
            gaveta = true
        }else if (salaflor == 2) {
            gaveta = false
        }
        salaflor += 1
        proximaSala(this)
    })
})

esquerdainicio.addEventListener('click', function(){
    proximaSala(this, ('passo-f' + salaflor))
})

direitainicio.addEventListener('click', function(){
    if (gaveta) {
        proximaSala(this, 'passo-2a')
    }else {
        proximaSala(this, 'passo-2')
    }
})

codigo.addEventListener('click', function(){
    let resultado = prompt('Digite a Senha')

    if (resultado == senha){
        proximaSala(this, 'passo-1c')
    } else {
        alert('Senha Incorreta')
    }
})