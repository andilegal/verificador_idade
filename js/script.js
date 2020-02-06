let button = document.getElementById("button");

button.addEventListener("click", function() {
  let data = new Date();
  let ano = data.getFullYear();

  let formularioAno = document.getElementById("txtAno");
  let resultado = document.getElementById("resultado");

  if (formularioAno.value.length == 0 || formularioAno.value > ano) {
    resultado.innerHTML = "Informação invalidaa";
  } else {
    let formSex = document.getElementsByName("redSex");
    let idade = ano - Number(formularioAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (formSex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        img.src = `../img/bebe_${genero}.png`;
      } else if (idade < 21) {
        img.src = `../img/jovem_${genero}.png`;
      } else if (idade < 50) {
        img.src = `../img/adulto_${genero}.png`;
      } else {
        img.src = `img/idoso_${genero}.png`;
      }
    } else if (formSex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        img.src = `../img/bebe_${genero}.png`;
      } else if (idade < 21) {
        img.src = `../img/jovem_${genero}.png`;
      } else if (idade < 50) {
        img.src = `../img/adulto_${genero}.png`;
      } else {
        img.src = `../img/idoso_${genero}.png`;
      }
    }

    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resultado.appendChild(img);
  }
});
