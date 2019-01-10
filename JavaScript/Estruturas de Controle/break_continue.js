const nums = [1,2,3,4,5,6,7,8,9,10]

for(let x in nums){
    if(x == 5){
        break;
    }
    console.log(`x = ${nums[x]}`);
}

console.log("\nUsando continue\n");

for(let x in nums){
    if(x == 5){
        continue;
    }
    console.log(`x = ${nums[x]}`);
}

externo: //Criação de um rotulo
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo // o break quebra o for rotulado ao invez do que ele pertence
            console.log(`Par = ${a}, ${b}`);
    }
}
