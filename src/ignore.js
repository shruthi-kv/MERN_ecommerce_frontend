
function Debounce(fn,delay){
    let timerID;
    return function(...args){
        clearTimeout(timerID);
        timerID = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}




const DeboucedSearch = Debounce(()=>{
    //  ---api call ---
}, 2000)