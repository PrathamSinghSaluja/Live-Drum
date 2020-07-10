document.addEventListener('keydown', function produceSound1(e){

    var sound1 = document.getElementById("audio1");
    if(e.keyCode==65){
    sound1.preload = 'auto';
    sound1.load();
    sound1.play();
     key.classList.add('playing');
    }
     e.target.classList.remove('playing');
})

document.addEventListener('keydown', function produceSound2(e){
     var sound2 = document.getElementById("audio2");
     if(e.keyCode==83){
    sound2.preload = 'auto';
    sound2.load();
     sound2.play();
      key.classList.add('playing');
}
 e.target.classList.remove('playing');
})

document.addEventListener('keydown', function produceSound3(e){
    var sound3 = document.getElementById("audio3");
    if(e.keyCode==68){
     sound3.preload = 'auto';
     sound3.load();
     sound3.play();
      key.classList.add('playing');
}
 e.target.classList.remove('playing');
})

document.addEventListener('keydown', function produceSound4(e){
    var sound4 = document.getElementById("audio4");
    if(e.keyCode==70){
     sound4.preload = 'auto';
     sound4.load();
     sound4.play();
}
})

document.addEventListener('keydown', function produceSound5(e){
    var sound5 = document.getElementById("audio5");
    if(e.keyCode==71){
     sound5.preload = 'auto';
     sound5.load();
     sound5.play();
}
})

document.addEventListener('keydown', function produceSound6(e){
    var sound5 = document.getElementById("audio6");
    if(e.keyCode==72){
     sound5.preload = 'auto';
     sound5.load();
     sound5.play();
}
})

document.addEventListener('keydown', function produceSound7(e){
    var sound5 = document.getElementById("audio7");
    if(e.keyCode==74){
     sound5.preload = 'auto';
     sound5.load();
     sound5.play();
}
})

document.addEventListener('keydown', function produceSound8(e){
    var sound5 = document.getElementById("audio8");
    if(e.keyCode==75){
     sound5.preload = 'auto';
     sound5.load();
     sound5.play();
}
})

document.addEventListener('keydown', function produceSound9(e){
    var sound5 = document.getElementById("audio9");
    if(e.keyCode==76){
     sound5.preload = 'auto';
     sound5.load();
     sound5.play();
}
})

const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);