function voto(){
    const questionario = document.getElementById('questionario')
    const resp = document.getElementById('resposta')
    const select = document.querySelector('input[name="input1"]:checked')

    if (!select) {
        resp.style.color = 'red'
        resp.innerHTML = 'Selecione uma das opções acima para dar seu feedback.'
    } else if (select.value === 'Bom'){
        resp.style.color = 'darkgreen'
        resp.innerHTML = 'Que bom que gostou, e obrigado pelo feedback!'
        questionario.innerHTML = ''
    } else if (select.value === 'Ok' || select.value === 'Ruim'){
        resp.style.color = 'green'
        resp.innerHTML = `Agradecemos seu feedback!`
        questionario.innerHTML = ''
    }
}

const nota = []
function media(){
    const resp = document.getElementById('media')
    const notaUser = +document.getElementById('nota').value
    if ( notaUser>10 || notaUser < 0){
        resp.innerHTML = 'Digite uma nota entre 0 e 10.'
    } else if ( notaUser >= 0 && notaUser <=10){
        nota.push(notaUser)
        const soma = nota.reduce((x, y) => x + y, 0)
        resp.innerHTML = `Nota adicionada: ${notaUser.toFixed(2)}`
        const media = soma / nota.length
        resp.innerHTML += `<br>Média das notas: ${media.toFixed(2)}`
    }
    document.getElementById('nota').value = ''
}
