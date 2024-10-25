let n = 5;
for(let i = 1; i <= n; i++){
    let bag = "";
    for(let j = 1; j <= i; j++){
        if(i % 3 === 0 || j % 3 === 0){
            continue;
        }
        bag += j + " ";
        if( j % 7 === 0) break;
    }
    if(bag.length!== 0) console.log(bag);
}