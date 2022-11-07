function tocaSom(IdElementoAudio){ 

    document.querySelector(IdElementoAudio).play();
}
 
const ListadeTeclas= document.querySelectorAll('.tecla');




//Para
for(let contador = 0; contador < ListadeTeclas.length; contador++){

    const tecla = ListadeTeclas[contador];
   const instrumento = tecla.classList[1];

  

   //template string
   const idAudio = `#som_${instrumento}`;//template string
  // console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
}

tecla.onkeydown = function(evento) {
    
    if(evento.code === 'Space' || evento.code === 'Enter'){
    tecla.classList.add('ativa');  
    }
    
}
tecla.onkeyup = function() {
   
    tecla.classList.remove('ativa');


}


//console.log(contador);

}
