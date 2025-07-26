 function clicar(){
        let input = document.getElementById('txtab')
        let n = Number(input.value)

        let soma = document.getElementById('soma')
        let subtracao = document.getElementById('subtracao')
        let multiplicacao = document.getElementById('multiplicacao')
        let divisao = document.getElementById('divisao')
        if (input.value === ''){
            window.alert('ERRO')
            return
        }
        soma.innerHTML = ''
        subtracao.innerHTML = ''
        multiplicacao.innerHTML = ''
        divisao.innerHTML = ''

        for(let c = 1; c <=10 ; c++){
            soma.innerHTML += `${n} + ${c} = ${n + c}<br>`
            subtracao.innerHTML += `${n} - ${c} = ${n - c}<br>`
            multiplicacao.innerHTML += `${n} * ${c} = ${n * c}<br>`
            divisao.innerHTML += `${n} / ${c} = ${(n / c).toFixed(2)}<br>`
        }

    }