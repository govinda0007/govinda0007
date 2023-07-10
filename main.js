let input_container = document.getElementById("input_container")
let button = document.querySelectorAll( ".num , .op")
console.log(button)
let operator = false
let equal = document.querySelector(".eq")
let clearButton = document.querySelector('.clear')
let backspaceButton = document.querySelector('.backspace')
let remainderButton = document.querySelector('.remainder')
let nightButton = document.querySelector(".night")
let contentElement = document.getElementById('Calculator')
button.forEach(btn => {
    btn.addEventListener("click",(e) =>{
        if(!isNaN(e.target.innerHTML)){
            operator = false
            input_container.innerHTML += e.target.innerHTML
        }
        else if(!operator){
                operator = true
                input_container.innerHTML += e.target.innerHTML  
            }
    })
});
equal.addEventListener("click",()=>{
    input_container.innerHTML = eval(input_container.innerHTML)
})
 clearButton.addEventListener("click",()=>{
     document.getElementById('input_container').innerHTML = '';
 })
 backspaceButton.addEventListener("click",()=>{
     let display = document.getElementById('input_container')
     let currentvalue = display.innerHTML
     display.innerHTML = currentvalue.slice(0,-1)
 })
//  remainderButton.addEventListener("click", () =>{
//      let display = document.getElementById('input_container')
    
//  })
nightButton.addEventListener("click",() =>{
 contentElement.classList.toggle('night')
 
})

