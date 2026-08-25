export function sum(...num){
    const sum=num.reduce((s,i)=>s+i);
    return sum;
}



export const add=(...num)=>{ //you can directly use export with the function(new way of writing)
    let s=0;
    for(let i of num){
        s=s+i;
    }
    return s;
}
//export default sum;
//to export single function we use default
//export{sum,add}; (old way of writing the export keyword)