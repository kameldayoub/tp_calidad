function encriptar(numero) {
  let digitos = numero.split("");

  for (let i = 0; i < digitos.length; i++) {
    let digito = parseInt(digitos[i]);
    digitos[i] = ((digito + 7) % 10).toString();
  }

  [digitos[0], digitos[2]] = [digitos[2], digitos[0]];
  [digitos[1], digitos[3]] = [digitos[3], digitos[1]];

  let numeroEncriptado = digitos.join("");

  return numeroEncriptado;
}

function desencriptar(numero) {
  let digitos = numero.split("");

  for (let i = 0; i < digitos.length; i++) {
    let digito = parseInt(digitos[i]);
    digitos[i] = ((digito + 3) % 10).toString();
  }

  [digitos[0], digitos[2]] = [digitos[2], digitos[0]];
  [digitos[1], digitos[3]] = [digitos[3], digitos[1]];

  let numeroOriginal = digitos.join("");

  return numeroOriginal;
}

/*                                                              mensaje*/
function encripNum() {
  let inputNumero = document.getElementById("content");
  let numero = inputNumero.value;
  
  let digitos = numero.split("");
  if (digitos.length<4){
    alert("Esta mal, ingrese 4 digitos");
  }else{

    let numeroEncriptado = encriptar(numero);
    document.getElementById("hcontent").textContent = "RESULTADO: "  + "¡-" + numeroEncriptado+ "-!";
  }



}
function desencripNum() {
  let inputNumero = document.getElementById("content");
  let numero = inputNumero.value;

  let digitos = numero.split("");
  if (digitos.length<4){
    alert("Esta mal, ingrese 4 digitos");
  }else{

    let numeroDesncriptado = desencriptar(numero);
    document.getElementById("hcontent").textContent = "RESULTADO: " + "¡-" + numeroDesncriptado + "-!";
    
  }


}
