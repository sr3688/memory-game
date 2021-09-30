

const card=document.querySelectorAll(".card-inner");
const moves=document.querySelector('.moves-count')

var flipCounter=0;
var movesCounter=0;


function flipBackAllAndVisibility(){
            setTimeout(function(){
              for(let index in card){
                if(card[index].classList.contains('is-flipped') ){
                   if(!card[index].classList.contains('matched-card-visibility') ){
                       for(let index_1 in card){
                           if(index_1!==index){
                               if(card[index_1].classList.contains('is-flipped')){
                                   if(card[index].title===card[index_1].title){
                                           card[index_1].classList.add('matched-card-visibility')
                                           card[index].classList.add('matched-card-visibility')
                                           flipCounter=0
                                           movesCounter=movesCounter+1;
                                           moves.innerHTML=movesCounter;
                                   }
                                   else{
                                     card[index].classList.toggle('is-flipped');
                                     card[index_1].classList.toggle('is-flipped')
                                     flipCounter=0
                                     movesCounter=movesCounter+1;
                                     moves.innerHTML=movesCounter;
                                   }
                               }
                           }
                       }
                   }
               }
           } 
       },1000)
    }        
                

for(let item in card){
    card[item].addEventListener("click",()=>{
           
      if(flipCounter<2){
          if(card[item].classList.contains('is-flipped')){
              card[item].classList.toggle('is-flipped');
              flipCounter--;
          }

          else{
              card[item].classList.toggle('is-flipped');
              flipCounter++
          }
      }

     else{
         if(card[item].classList.contains('is-flipped')){
              card[item].classList.toggle('is-flipped');
              flipCounter--;
         }
     }

//This is to make the matching cards disappear and counting moves

    if(flipCounter===2){flipBackAllAndVisibility()}
   
    
})}


    
    
    
    




  
          


    
    

    
       


