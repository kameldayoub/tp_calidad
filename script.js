const toggleSwitch = document.getElementById("toggleSwitch");

var body = document.body;
var resul = document.getElementById("hcontent");
var numText = document.getElementById("content");

var buttonEn = document.getElementById("BE");
var buttonDe = document.getElementById("BD");

var currentColor = body.style.backgroundColor;

toggleSwitch.addEventListener("change", function() {
  if (this.checked) {

    body.style.backgroundColor = "#22223b";
    // texto
    numText.style.backgroundColor = "#9a8c98";
    numText.style.color= "#22223b";
    // resultado
    resul.style.color = "#9a8c98";
    // botones
    buttonEn.style.color = "#22223b";
    buttonEn.style.backgroundColor = "#9a8c98";

    buttonDe.style.color = "#22223b";
    buttonDe.style.backgroundColor = "#22223b";
    document.getElementById("hcontent").textContent = "RESULTADO: " ;
    
  } else {
    
    body.style.backgroundColor = "#9a8c98";
    // texto
    numText.style.backgroundColor = "#22223b";
    numText.style.color = "#9a8c98";
    // resultado
    resul.style.color = "#22223b";

    // botones
    buttonEn.style.color = "#9a8c98";
    buttonEn.style.backgroundColor = "#9a8c98";


    buttonDe.style.color = "#9a8c98";
    buttonDe.style.backgroundColor = "#22223b";

    document.getElementById("hcontent").textContent = "RESULTADO: " ;

  }
});

function validarNumero(input, max) {
  input.value = input.value.replace(/\D/g, "");
  
  if (input.value.length > max) {
    input.value = input.value.slice(0, max);
  }
}




