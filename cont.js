function suces(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mens = document.getElementById('men').value;
    
    if(nome == '' && email == '' && mens == ''){
        window.alert('Preencha todos campos!')
    }
    else{
        var men = window.alert('obrigado '+ nome +', Mensagem enviada com sucesso!')
    }
}