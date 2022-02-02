function noRefresh() {
    event.preventDefault();

}
    
    function validar() {
        noRefresh()

       var textoValidar = document.getElementById('input-texto').value;
        
       //Se valida que el texto ingresado no contenga ninguno de estos caracteres
        if(/[A-Z-0-9-ÁÉÍÓÚáéíóú]/.test(textoValidar) || /[`~!@#$%^&*()-_=+{};:'",<.>?]/.test(textoValidar)) {
            alert("Caracteres inválidos. Ingrese solo letras minúsculas");
            document.getElementById('input-texto').value = "";
        }
        else{
            encriptar();
        }
       
    }

    //funcion para encriptar
    function encriptar() {
        noRefresh();

        var texto = document.getElementById('input-texto').value;
        var textoEncr = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        document.getElementById("msg").value = textoEncr;
        document.getElementById("input-texto").value = " ";
    }

    //funcion para desencriptar
    function desencriptar() {
        noRefresh();

        var texto = document.getElementById('msg').value;
        var textoDesencr = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        document.getElementById("msg").value = textoDesencr;
        document.getElementById("input-texto").value = " ";
    }


    //Creamo evento para el botón copiar
    const button = document.getElementById('btn-copy');

    const input = document.getElementById('msg');

    const copiado = document.getElementById('copiado');

    button.addEventListener('click', function(){
      input.focus();  
      document.execCommand('selectAll');
      document.execCommand('copy');

      copiado.innerHTML = "Texto copiado";

      //Lanzamos un mensaje temporal 
      setTimeout(() => copiado.innerHTML = "", 2000);
    })

    
    

