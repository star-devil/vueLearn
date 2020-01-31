export const abs = num =>{
    let res = num;

    if(num < 0) {
        return -num;
    }
   
    if(typeof num !== "number") {
        return NaN;
    }
    
    return res;
}
export const add = (...res) => res.reduce((prev,next) => prev + next );