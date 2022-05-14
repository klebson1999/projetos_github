// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.


window.function = function (inicial, final) {

// Extraindo valores enviado.
var finicial = inicial.value ?? ""
var ffinal = final.value ?? ""
// Formatando valores como data.
const vinicial = new Date(finicial); // data inicial
const vfuturo = new Date(ffinal); // data final
const diff = Math.abs(vfuturo.getTime() - vinicial.getTime() ); // Subtrai uma data pela outra
// Divide o total pelo total de milisegundos correspondentes a 1 dia e depois por meses
const mounth = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30)); 

// Retorna a quantidade de meses
return(mounth);

}
