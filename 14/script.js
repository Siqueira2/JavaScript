let num = [5, 8, 2, 9, 3]

num.push(9)

num.length

/*console.log(num)
console.log(`O vetor ${num.length} posições`)
console.log(num.sort())

for (let i = 0; i < num.length; i++){
}*/

for(let pos in num)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)


 