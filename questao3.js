document.getElementById("botaoJogar").addEventListener("click", enviar)

document.getElementById("3A").addEventListener("click",verificarResposta)

document.getElementById("3B").addEventListener("click",verificarResposta)

document.getElementById("3C").addEventListener("click",verificarResposta)

function enviar (){
  let radioOne = document.getElementById("3A").checked
  let radioTwo = document.getElementById("3B").checked
  let radioThree = document.getElementById("3C").checked
  if(radioOne || radioTwo || radioThree){

   window.location.href="index.html"
   
  }else(
    alert("Por favor, selecione uma alternativa")
  )
}

function verificarResposta(){
  let radioOne = document.getElementById("3A").checked
  let radioTwo = document.getElementById("3B").checked
  let radioThree = document.getElementById("3C").checked

  if(radioOne){
     document.getElementById("opcaoA").removeAttribute('hidden')
  }else if(radioTwo){
     document.getElementById("opcaoB").removeAttribute('hidden')
  }else{
    document.getElementById("opcaoC").removeAttribute('hidden')
  }

}