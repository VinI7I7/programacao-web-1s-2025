const express = require('express');
const calc = require('./util/calculator');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Calculadora</h1>
        <form action="/calcular">
            <input type="number" name="a" required>
            <select name="operacao">
                <option value="somar">+</option>
                <option value="subtrair">-</option>
                <option value="multiplicar">×</option>
                <option value="dividir">÷</option>
            </select>
            <input type="number" name="b" required>
            <button type="submit">Calcular</button>
        </form>
    `);
});

app.get('/calcular', (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let op = req.query.operacao;
    let result

    switch (op) {
        case 'somar':
            result = calc.add(a, b);
            break;
        case 'subtrair':
            result = calc.subtract(a, b);
            break;
        case 'multiplicar':
            result = calc.multiply(a, b);
            break;
        case 'dividir':
                if (b === 0||a === 0) {
                    return res.send(`
                        <h2>Erro: Divisão por zero não permitida.</h2>
                        <a href="/">Voltar</a>
                    `);
                    
  
                }
                result = calc.divide(a, b);
            break;
        default:
            result = 'Erro: operação inválida';
    }

    res.send(`<h2>Resultado: ${result}</h2><a href="/">Voltar</a>`);
});


const PORT = 8080;
app.listen(PORT, () => 
    console.log(`Servidor rodando na porta ${PORT}`));
