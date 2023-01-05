// document.querySelector('button.w').addEventListener('click',()=>{alert("w got clicked")})
// document.querySelector('button.a').addEventListener('click',()=>{alert("a got clicked")})
// document.querySelector('button.s').addEventListener('click',()=>{alert("s got clicked")})
// document.querySelector('button.d').addEventListener('click',()=>{alert("d got clicked")})
// document.querySelector('button.j').addEventListener('click',()=>{alert("j got clicked")})
// document.querySelector('button.k').addEventListener('click',()=>{alert("k got clicked")})
// document.querySelector('button.l').addEventListener('click',()=>{alert("l got clicked")})

var numOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrums; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click',()=>{
        
        // alert("I got clicked")
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        
        console.log(this.innerHTML);
    
    });

}

