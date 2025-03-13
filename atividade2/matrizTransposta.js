function transporMatriz(A){
    console.log('Matriz \n')
    for(let i = 0; i < A.length; i++){
        let linha = "";
        for(let j = 0; j < A[i].length; j++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }

    console.log('\nTransposta \n');
    // Percorre colunas primeiro (matriz transposta)
    for(let j = 0; j < A[0].length; j++){
        let linha = "";
        for(let i = 0; i < A.length; i++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);