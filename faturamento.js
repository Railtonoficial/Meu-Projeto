const faturamentoMensal = require('./faturamento.json'); // Supondo que você tenha um arquivo JSON com os dados

function calcularFaturamento(faturamento) {
    let valores = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
    let menorValor = Math.min(...valores);
    let maiorValor = Math.max(...valores);
    let mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    let diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}


let resultado = calcularFaturamento(faturamentoMensal);
console.log(`Menor valor: ${resultado.menorValor}`);
console.log(`Maior valor: ${resultado.maiorValor}`);
console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`);
