function maxFind(prothom, ditio, tritio){
    if(prothom>ditio && prothom>ditio){
       return prothom;
    } else if(ditio>prothom && ditio>tritio){
        return ditio;
    } else {
        return tritio;
    }
}

var maxNumber= maxFind(54,14,98);
console.log(maxNumber);