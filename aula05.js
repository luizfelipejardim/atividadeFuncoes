// ex1
function coversorPolegadas (polegadas){
    const resultado = polegadas * 2.54;
    return `${polegadas} polegadas equivalem a ${resultado}cm .`;
}

console.log (coversorPolegadas(10)); //10 polegadas equivalem a 25.4cm .


//ex2
function stringUrl(site) {
    return `www.${site}.com.br`;
}

console.log(stringUrl(`exercicioaula05`)); //www.exercicioaula05.com.br


//ex3
function inserirPontuacao (string){
    return `${string} !`;
}

console.log (inserirPontuacao(`Isso que é atividade`)); //Isso que é atividade !


//ex4
function anoDog (ano){
    const resultado = ano * 7;
    return `${ano} anos Humanos equivalem a ${resultado} anos de cachorro.`
}

console.log(anoDog(8)); //8 anos Humanos equivalem a 56 anos de cachorro.


//ex5
function valorHora(salario){
    const resultado = salario/ 160;
    return `Minha hora trabalhada, vale R$${resultado}, levando em consideração um salário de R$${salario}.`
   
}

console.log (valorHora(2000)); //Minha hora trabalhada, vale R$12.5, levando em consideração um salário de R$2000.


//ex6
function calculoImc (peso , altura){
    const resultado = peso / (altura * altura);
    return `Com o peso de ${peso}, seu IMC é de ${resultado}.`
    
}

console.log(calculoImc(120,1.87)); //Com o peso de 120, seu IMC é de 34.31610855329005.
console.log(calculoImc(65,1.70)); //Com o peso de 65, seu IMC é de 22.49134948096886.



//ex7
const conversorMinuscula = 'este texto tem que estar maiusculo';  
console.log(conversorMinuscula.toUpperCase()); //ESTE TEXTO TEM QUE ESTAR MAIUSCULO


//ex8
function tipoDeDado (dados) {
    const resultado = (typeof  dados);
    return `Quando inserimos "${dados}", o programa identifica como um Dado do tipo "${resultado}".`
}

console.log(tipoDeDado(10)); //Quando inserimos "10", o programa identifica como um Dado do tipo "number".


// ex9
function raioParaCircunferencia (raio){
    const resultado = raio * 2 * Math.PI;
    return `Um circulo com Raio de ${raio}, a circunferencia é de ${resultado}.`

}
console.log (raioParaCircunferencia(100)); //Um circulo com Raio de 100, a circunferencia é de 628.3185307179587.

