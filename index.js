function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function NamedFunction(){
        console.log("This is the returning function")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
    };
}
