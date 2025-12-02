function call(name, callback){
    console.log(name);
    callback();
}
function callback(){
    console.log("Raj is calling back");
}
call("Gulshan", callback);