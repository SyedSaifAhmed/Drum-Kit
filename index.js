// document.querySelector('button.w').addEventListener('click',()=>{alert("w got clicked")})
// document.querySelector('button.a').addEventListener('click',()=>{alert("a got clicked")})
// document.querySelector('button.s').addEventListener('click',()=>{alert("s got clicked")})
// document.querySelector('button.d').addEventListener('click',()=>{alert("d got clicked")})
// document.querySelector('button.j').addEventListener('click',()=>{alert("j got clicked")})
// document.querySelector('button.k').addEventListener('click',()=>{alert("k got clicked")})
// document.querySelector('button.l').addEventListener('click',()=>{alert("l got clicked")})

// var numOfDrums = document.querySelectorAll(".drum").length;

// for (var i=0; i<numOfDrums; i++){

//     document.querySelectorAll('.drum')[i].addEventListener('click',()=>{
        
//         // alert("I got clicked")
//         // var audio = new Audio('sounds/tom-1.mp3');
//         // audio.play();
        
//         // console.log(this.innerHTML);
//         this.style.color="white";
//     });

// }


//detecting clicks 
var arrDrum = document.querySelectorAll(".drum");
for (let i = 0 ; i < arrDrum.length; i++)
{
    arrDrum[i].addEventListener("click" , () =>{ makeSound(arrDrum[i].innerHTML);
    
    buttonAnimation(arrDrum[i].innerHTML)});

}

//detecting keyboard
document.addEventListener('keydown', (event) => {makeSound(event.key);
    buttonAnimation(event.key);
});

//   arrDrum[i].addEventListener("click" , () =>{ switch (arrDrum[i].innerHTML) {
//     case "w":           
//          var tom1 = new Audio('sounds/tom-1.mp3');
//          tom1.play();     
//         break;
//     case "a":  
//          var tom2 = new Audio('sounds/tom-2.mp3');
//          tom2.play();      
//         break;
//     case "s":
//         var tom3 = new Audio('sounds/tom-3.mp3');
//          tom3.play();   
               
//         break;
        
//     case "d":
//         var tom4 = new Audio('sounds/tom-4.mp3');
//          tom4.play();           
//         break;

//     case "j":
//         var snare = new Audio('sounds/snare.mp3');
//         snare.play();   
               
//         break;
//     case "k":
//         var crash = new Audio('sounds/crash.mp3');
//         crash.play();         
//         break;
//     case "l":
//         var kick = new Audio('sounds/kick-bass.mp3');
//         kick.play();          
//         break;

  
//     default:
//         console.log(arrDrum[i].innerHTML);
//         break;
//   }
// }

//   )
  


// }



// document.addEventListener('keydown', (event) => { console.log(event.key)});



function makeSound(key) {

    switch (key) {
        case "w":           
             var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();     
            break;
        case "a":  
             var tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();      
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();   
                   
            break;
            
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();           
            break;
    
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();   
                   
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();         
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();          
            break;
    
      
        default:
            console.log(key  + " pressed");
            break;
      }

    
}



function buttonAnimation(key) {

    var activeButton = document.querySelector("."+key);
    activeButton.classlist.add("pressed");
    
}