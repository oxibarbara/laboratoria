document.getElementById("botaoEnviar").addEventListener("click", enviar)

document.getElementById("1A").addEventListener("click",verificarResposta)

document.getElementById("1B").addEventListener("click",verificarResposta)

document.getElementById("1C").addEventListener("click",verificarResposta)

function enviar (){
  let radioOne = document.getElementById("1A").checked
  let radioTwo = document.getElementById("1B").checked
  let radioThree = document.getElementById("1C").checked
  if(radioOne || radioTwo || radioThree){

   window.location.href="questao2.html"
   
  }else(
    alert("Por favor, selecione uma alternativa")
  )
}

function verificarResposta(){
  let radioOne = document.getElementById("1A").checked
  let radioTwo = document.getElementById("1B").checked
  let radioThree = document.getElementById("1C").checked

  if(radioOne){
     document.getElementById("opcaoA").removeAttribute('hidden')
  }else if(radioTwo){
     document.getElementById("opcaoB").removeAttribute('hidden')
  }else{
    document.getElementById("opcaoC").removeAttribute('hidden')
  }

}

