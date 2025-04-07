const NumeroFaltando = (ns=[])=>{
    let numAnterior = 0
    for(num in ns){
        const numLocal = ns[num]
        const diferenceNumberOfAfterAndBefore = 2
        if((numLocal-numAnterior)===diferenceNumberOfAfterAndBefore){
            return numLocal-1
        }else{
            numAnterior++
        }
    }
}

console.log(NumeroFaltando([1,2,3,4,6]))