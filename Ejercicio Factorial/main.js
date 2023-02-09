//Esperar a que cargue el DOM
window.onload = () => {
  //Cachar todo el formulario
  const form = document.getElementById("form");
  //impedir que la pagina se refresque al enviar
  form.onsubmit = (e) => {
    e.preventDefault();
    //--
    //cachar el input del form
    const val = document.getElementById("num");
    //obtener el valor del input
    let num = val.value;
    //--
    //Poner el input en blanco
    val.value = "";

    for(var i = 0; i <= num; i++){
      num = (num -1);
      console.log(num, "num");
      console.log(i,"i");
    }
     

/*     function FirstFactorail(num) {

      return num;
    } 

    console.log(FirstFactorail(num));*/
  };
};
