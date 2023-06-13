let hourHand = document.querySelector(".hh");
let minuteHand = document.querySelector(".mm");
let secondHand = document.querySelector(".ss");
let d = document.querySelector(".dd");

setInterval(() => {
    let date= new Date();
   hourHand.innerText=( date.toLocaleString('en-IN',{
      hour: '2-digit',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    }))
}, 1000);


setInterval(() => {
    let date= new Date();
   d.innerText=( date.toLocaleString('en-IN',{
      day:'2-digit',
      month:'2-digit',
      year: 'numeric',
    }))
}, 1000);


