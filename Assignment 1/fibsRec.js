#!/usr/bin/node

const fibsRec = (num) => {
    
        if(num == 0){
            return [0];
        }
        else if(num == 1){
            return [0,1];
        }
        else{
            let fibs = fibsRec(num - 1);
            fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
            return fibs;
        }
}

const args = process.argv.slice(2);
console.log(fibsRec(args[0]));

