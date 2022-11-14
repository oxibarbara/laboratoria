document.getElementById("botaoProxima").addEventListener("click", enviar)

document.getElementById("2A").addEventListener("click",verificarResposta)

document.getElementById("2B").addEventListener("click",verificarResposta)

document.getElementById("2C").addEventListener("click",verificarResposta)

function enviar (){
  let radioOne = document.getElementById("2A").checked
  let radioTwo = document.getElementById("2B").checked
  let radioThree = document.getElementById("2C").checked
  if(radioOne || radioTwo || radioThree){

   window.location.href="questao3.html"
   
  }else(
    alert("Por favor, selecione uma alternativa")
  )
}

function verificarResposta(){
  let radioOne = document.getElementById("2A").checked
  let radioTwo = document.getElementById("2B").checked
  let radioThree = document.getElementById("2C").checked

  if(radioOne){
     document.getElementById("opcaoA").removeAttribute('hidden')
  }else if(radioTwo){
     document.getElementById("opcaoB").removeAttribute('hidden')
  }else{
    document.getElementById("opcaoC").removeAttribute('hidden')
  }

}