setTimeout( () =>{
    console.log("print after 2 sec")
}, 2000);

function time() {
    console.log("print after 5 sec");
}
setTimeout(time,5000);

// set interval

setInterval(() =>{
    console.log("print after 2 sec");
},2000);