const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número binário: ', (nBin) => {
    let BASE2 = nBin

    let BASE2_ARRAY = []
    let BASE2_ARRAY_REVERSE = []
    let BASE2_ARRAY_REVERSE_MULTIPLIED = []
    
    let BASE16 = []
    let BASE16_ARRAY = []
    let BASE16_4n = [1, 2, 4, 8] // 2^0, 2^1, 2^2, 2^3
    let BASE16_LETTERS = {10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'}
    
    for(let i = 1; i <= BASE2.length; i++){ BASE2_ARRAY.push(Number(BASE2.charAt(i-1))); console.log(BASE2_ARRAY)} //Converte a string BASE2 para um array BASE2_ARRAY
    
    BASE2_ARRAY_REVERSE = BASE2_ARRAY.reverse()
    
    for(let i=1; i<=BASE2.length; i++){ // Adiciona
        BASE2_ARRAY_REVERSE_MULTIPLIED.push(BASE16_4n[i-1])
        if(i === BASE16_4n.length) { i=0 }
        if(BASE2_ARRAY_REVERSE_MULTIPLIED.length === BASE2_ARRAY.length) { break }
    }
    
    console.log('----------------');
    
    let BASE16_RESULT_NUMBER = 0
    for(let i = 1; i <= BASE2_ARRAY_REVERSE_MULTIPLIED.length; i++){
        if(BASE2_ARRAY_REVERSE[i-1] === 1){
            BASE16_RESULT_NUMBER = BASE16_RESULT_NUMBER + BASE2_ARRAY_REVERSE_MULTIPLIED[i-1]
            if(i%4===0){
                BASE16_ARRAY.push(BASE16_RESULT_NUMBER);
                BASE16_RESULT_NUMBER = 0;
            }
        };
    }
    BASE16_ARRAY.push(BASE16_RESULT_NUMBER);
    
    console.log(BASE2_ARRAY_REVERSE_MULTIPLIED);
    console.log(BASE16_RESULT_NUMBER);
    console.log(BASE16_ARRAY);
    
    for(let i=1; i<=BASE16_ARRAY.length; i++){
        if(BASE16_LETTERS[BASE16_ARRAY[i-1]]){
            console.log(BASE16_LETTERS[BASE16_ARRAY[i-1]]);
            BASE16.push(BASE16_LETTERS[BASE16_ARRAY[i-1]])
        }else {
            BASE16.push(BASE16_ARRAY[i-1])
        }
    }
    
    console.log('----------------');
    console.log(`Entrada: ${nBin}`);
    console.log('Resultado: ', BASE16.reverse());
    
    process.exit(1)
})
