var res = document.getElementById("res")
var bot1 = document.getElementById("bot1")
var bot2 = document.getElementById("bot2")
var bot3 = document.getElementById("bot3")
var bot4 = document.getElementById("bot4")
var numero = document.getElementById("numero")

/**VERIFICAR VALOR DIGITADO  */
function verificador(numero) {
    let verific = numero.value
    
    if (verific == '' || verific > 1000 || verific < 1) {
        return res.innerHTML='', window.alert('insira um valor entre 1 e 1000')
    } else {   
        bot1.setAttribute("data-target", "#modalExemplo")
        bot2.setAttribute("data-target", "#modalExemplo") 
        bot3.setAttribute("data-target", "#modalExemplo") 
        bot4.setAttribute("data-target", "#modalExemplo")     
            
        return true
    }
}

/**VERIFICAR PAR OU ÍMPAR */
function parimpar() {
    
    if (verificador(numero)) {
        
        if(numero.value % 2 === 0) {
            return res.innerHTML= `O número ${numero.value}, é Par!`
        } else {
            return res.innerHTML= `O número ${numero.value}, é Ímpar!`
        } 
    }
    bot1.setAttribute("data-target", "#modalExempl")
    bot2.setAttribute("data-target", "#modalExempl") 
    bot3.setAttribute("data-target", "#modalExempl") 
    bot4.setAttribute("data-target", "#modalExempl")    
}

/**VERIFICAR PRIMO */
function primo() {

    if (verificador(numero)) {
        for (let n = 2; n < numero.value; n++) {
            if(numero.value % n === 0) {
                return res.innerHTML= `O número ${numero.value}, não é Primo!`
            } else {
                return res.innerHTML= `O número ${numero.value}, é Primo!`
            }
        }    
    }
    bot1.setAttribute("data-target", "#modalExempl")
    bot2.setAttribute("data-target", "#modalExempl") 
    bot3.setAttribute("data-target", "#modalExempl") 
    bot4.setAttribute("data-target", "#modalExempl")    
}

/**VERIFICAR FIBONACCI */
function fibonacci() {
    let i;
    let fib = []

    if (verificador(numero)) {
        fib[0] = 0
        fib[1] = 1
        for (i = 2; i <= 20; i++) {
            fib[i] = fib[i - 2] + fib[i - 1]
        }

        let result = fib.indexOf(Number(numero.value))

        if (result != -1) {
            return res.innerHTML = `O número ${numero.value} está na sequência Fibonacci, e sua posição é a ${result}º da sequência.`
        } else {
            return res.innerHTML = `O número ${numero.value} não está presente na sequência Fibonacci.`
        }
    }
    bot1.setAttribute("data-target", "#modalExempl")
    bot2.setAttribute("data-target", "#modalExempl") 
    bot3.setAttribute("data-target", "#modalExempl") 
    bot4.setAttribute("data-target", "#modalExempl")    
}

/**VERIFICAR MULTIPLO DE 4 */
function pin() {
    let pin = []

    if (verificador(numero)) {
        for(let i = 1, n = 0; i <= numero.value; i++, n++) {
            pin[n] = i
        } 
        let pin2 = pin.map(a => a % 4 == 0 ? a ='pin' : a)

        return res.innerHTML=  `<textarea name="" id="textarea" rows="10">Para o número ${numero.value}, a sequência aplicada é (${pin2})</textarea>`
    }
    bot1.setAttribute("data-target", "#modalExempl")
    bot2.setAttribute("data-target", "#modalExempl") 
    bot3.setAttribute("data-target", "#modalExempl") 
    bot4.setAttribute("data-target", "#modalExempl")    
}