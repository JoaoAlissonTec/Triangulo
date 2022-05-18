function verificar(){
    var lado1 = document.getElementById('l1').value
    var lado2 = document.getElementById('l2').value
    var lado3 = document.getElementById('l3').value
    var resultado = document.getElementById('result')

    if(lado1.length == 0 || lado2.length == 0 || lado3.length == 0){
        alert('[ERRO] Informações inválidas.')
        resultado.innerHTML = 'ERRO'
    }else{
        resultado.style.color = 'white'
        if(lado1 == lado2 && lado2 == lado3){
            resultado.innerHTML = 'Equilátero'
            resultado.style.background = 'red'

        }else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
            resultado.innerHTML = 'Escaleno'
            resultado.style.background = 'green'
        }else{
            resultado.innerHTML = 'Isóceles'
            resultado.style.background = 'blue'
        }
    }
}