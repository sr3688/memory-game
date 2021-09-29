// Selecting all the span elements in an array "spanArr" -> Input
var spanArr=document.querySelectorAll("span")

//assigning variable to booked and available seats
var availableSeats=spanArr.length;
var bookedSeats=0;
var bookedStatusText="Available"

//BookStatus Label

    for(let i=0;i<spanArr.length;i++){
    spanArr[i].innerHTML=bookedStatusText
    spanArr[i].style.cursor="pointer"
}

// Seats Availability when no seats have been booked
document.querySelector('#seats-booked').innerHTML=bookedSeats
document.querySelector('#seats-booked').style.color="red"
document.querySelector('#seats-available').innerHTML=availableSeats;
document.querySelector('#seats-available').style.color="green"


// processing when someone clicks on the seat to book
function clickHandler(event){

        if(event.target.style.backgroundColor=="red"){
            event.target.style.backgroundColor="";
            event.target.innerHTML="Available";
            availableSeats++;
            bookedSeats--;
        }
            
            
            else{
            event.target.style.backgroundColor="red"
            event.target.innerHTML="Booked";
            bookedSeats++;
            availableSeats--;
            event.target.style.reset
            
        }
            
        document.querySelector('#seats-booked').innerHTML=bookedSeats
        document.querySelector('#seats-booked').style.color="red"
        document.querySelector('#seats-available').innerHTML=availableSeats;
        document.querySelector('#seats-available').style.color="green"
        }


// adding addEventListner on all the span elements
for(let item in spanArr){
spanArr[item].addEventListener('click',clickHandler)
}







        
        
        
            











