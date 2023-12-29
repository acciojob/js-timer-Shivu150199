// write js code here if required
const timer=document.querySelector('#timer')
let day=new Date().getDate()
let month=new Date().getMonth()+1
let year=new Date().getFullYear()
let hour=new Date().getHours()
let minutes=new Date().getMinutes()
let seconds=new Date().getSeconds();
timer.innerText=`${day}/${month}/${year},${hour}:${minutes}:${seconds}`