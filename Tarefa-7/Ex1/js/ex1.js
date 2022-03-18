function invert(){
    var invert = document.getElementsByName("txt");
    produto = invert.item(0).value.toString().split("");
    x = produto.reverse().join("");
    document.body.innerHTML += x + "<br>";
}