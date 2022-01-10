function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Digite os dados novamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (sex[0].checked) {
            genero = 'Homem'
        if (idade >=0 && idade<= 11){
            img.setAttribute('src', 'foto-bebe-m.png')//Criança
        } else if(idade < 21){
            img.setAttribute('src', 'foto-jovem-m.png') //Jovem
        } else if(idade < 50){
            img.setAttribute('src', 'foto-adulto-m.png')//Adulto
        } else {
            img.setAttribute('src', 'foto-adulto-m.png')//Idoso
        }

        } else if (sex[1].checked){
            genero = 'Mulher'
        
        if (idade >=0 && idade<= 11){
            img.setAttribute('src', 'foto-bebe-f.png')//Criança
        } else if(idade < 21){
            img.setAttribute('src', 'foto-jovem-f.png')//Jovem
        } else if(idade < 50){
            img.setAttribute('src', 'foto-adulto-f.png')//Adulto
        } else {
            img.setAttribute('src', 'foto-idoso-f.png')//Idoso
        }    

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}