document.getElementById("botaoComecar").addEventListener("click", validar)

function validar (){
  
  if (document.getElementById("nome").value != ""){
    alert("Vamos começar o game " + document.getElementById("nome").value)

    window.location.href="questoes.html"
    
  }else{
    alert("Por favor, digite seu nome para iniciar!")
  }

}