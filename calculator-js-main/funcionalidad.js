//Declaramos variables
var operandoa;
var operandob;
var operacion;

let modoHexa = false;

let decimal;
let res_hexa;
let res_oct;
let binario;
let modoOct = false;

let media = 0;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var hexadecimal = document.getElementById('modo-hexadecimal');
    var octal = document.getElementById('modo-octal');

    var letras = document.getElementById('letras');
    var especial = document.getElementById('especial');
    var especial_bin = document.getElementById('especial-bin');
    var especial_oct = document.getElementById('especial-oct');

    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var d = document.getElementById('d');
    var e = document.getElementById('e');
    var f = document.getElementById('f');
   
    var s_hexa = document.getElementById('s-hexa');
    var r_hexa = document.getElementById('r-hexa');
    var m_hexa = document.getElementById('m-hexa');
    var d_hexa = document.getElementById('d-hexa');


    var s_bi = document.getElementById('s-bi');
    var r_bi = document.getElementById('r-bi');
    var m_bi = document.getElementById('m-bi');
    var d_bi = document.getElementById('d-bi');
    

    var s_oc = document.getElementById('s-oct');
    var r_oc = document.getElementById('r-oct');
    var m_oc = document.getElementById('m-oct');
    var d_oc = document.getElementById('d-oct');

    //Eventos estadisticos

    var media = document.getElementById('media');
    var desviacion = document.getElementById('desviacion');
    var varianza = document.getElementById('varianza');


    //Opciones multiples

    var factorial = document.getElementById('factorial');
    var fibonacci = document.getElementById('fibonacci');
    
    var sorpresa = document.getElementById('sorpresa');
  //Eventos on click


  factorial.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "factorial";
    limpiar();
  };

  fibonacci.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "fibonacci";
    limpiar();
  };

  hexadecimal.onclick = function(e){
    modoHexa = !modoHexa;
    modoOct = false;

    
  if( modoHexa ){
    letras.style.display = "table-row";
    especial.style.display = "table-row";
    especial_bin.style.display = "table-row";

    especial_oct.style.display = "none";
    
  }
  else{
    letras.style.display = "none";
    especial.style.display = "none";
    especial_bin.style.display = "none";

  }

}

octal.onclick = function(e){
    modoHexa = false;
    modoOct = !modoOct;

    if( modoOct ){
        especial_oct.style.display = "table-row";


        letras.style.display = "none";
        especial.style.display = "none";
        especial_bin.style.display = "none";
    }
    else{
        especial_oct.style.display = "none";
    }
}




  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}

reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}


//Operaciones en hexadecimales

s_hexa.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "s-hexa";
    limpiar();
}

r_hexa.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "r-hexa";
    limpiar();
}

m_hexa.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "m-hexa";
    limpiar();
}

d_hexa.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "d-hexa";
    limpiar();
}

s_bi.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "s_bi";
    limpiar();
}

r_bi.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "r_bi";
    limpiar();
}

m_bi.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "m_bi";
    limpiar();
}

d_bi.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "d_bi";
    limpiar();
}


a.onclick = function(e){
    resultado.textContent = resultado.textContent + "A";
}

b.onclick = function(e){
    resultado.textContent = resultado.textContent + "B";
}

c.onclick = function(e){
    resultado.textContent = resultado.textContent + "C";
}

d.onclick = function(e){
    resultado.textContent = resultado.textContent + "D";
}

e.onclick = function(e){
    resultado.textContent = resultado.textContent + "E";
}

f.onclick = function(e){
    resultado.textContent = resultado.textContent + "F";
}

//operaciones octales

s_oc.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "s_oc";
    limpiar();
}

r_oc.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "r_oc";
    limpiar();
}

m_oc.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "m_oc";
    limpiar();
}

d_oc.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "d_oc";
    limpiar();
}

media.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "media";
    limpiar();
}

desviacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "desviacion";
    limpiar();
}

varianza.onclick = function(e){
    operandoa = resultado.textContent;
    operacion ="varianza";
    limpiar();
}

sorpresa.onclick = function(e){
    operandoa = resultado.textContent;
    operacion ="sorpresa";
    limpiar();
}

}



function limpiar(){
    resultado.textContent = "";
  }
  
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    decimal = 0;
    res_hexa = 0;
    binario = 0;
    media = 0;

    operacion = "";
  }


  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
      case "s-hexa":
        decimal = parseInt( operandoa, 16) + parseInt( operandob, 16);
        res_hexa = decimal.toString(16);
        binario = decimal.toString(2);
        res = `Decimal: ${ decimal } Hex: ${res_hexa} Bin: ${binario}`;
        break;

      case "r-hexa":
        decimal = parseInt( operandoa, 16) - parseInt( operandob, 16);
        res_hexa = decimal.toString(16);
        binario = decimal.toString(2);
        res = `Decimal: ${ decimal } Hex: ${res_hexa} Bin: ${binario}`;
      break;

      case "m-hexa":
        decimal = parseInt( operandoa, 16) * parseInt( operandob, 16);
        res_hexa = decimal.toString(16);
        binario = decimal.toString(2);
        res = `Decimal: ${ decimal } Hex: ${res_hexa} Bin: ${binario}`;
      break;

      case "d-hexa":
        decimal = parseInt( operandoa, 16) / parseInt( operandob, 16);
        res_hexa = decimal.toString(16);
        binario = decimal.toString(2);
        res = `Decimal: ${ decimal } Hex: ${res_hexa} Bin: ${binario}`;
      break;

      case "s_bi":
          decimal = parseInt( operandoa ) + parseInt( operandob );
          res_hexa = decimal.toString(2);

          res = `Decimal: ${ decimal } Bin: ${res_hexa}`;
      break;

      case "r_bi":
          decimal = parseInt( operandoa ) - parseInt( operandob );
          res_hexa = decimal.toString(2);

          
          res = `Decimal: ${ decimal } Bin: ${res_hexa}`;
      break;

      case "m_bi":
          decimal = parseInt( operandoa ) * parseInt( operandob );
          res_hexa = decimal.toString(2);
          res = `Decimal: ${ decimal } Bin: ${res_hexa}`;
      break;

      case "d_bi":
          decimal = parseInt( operandoa ) / parseInt( operandob );
          res_hexa = decimal.toString(2);
          res = `Decimal: ${ decimal } Bin: ${res_hexa}`;
      break;

      //Octales

      case "s_oc":
          decimal = parseInt( operandoa,8 ) + parseInt( operandob,8 );
          res_oct = decimal.toString(8);
          res = `Decimal: ${decimal} Octal: ${res_oct}`;

    break;

    case "s_oc":
          decimal = parseInt( operandoa,8 ) - parseInt( operandob,8 );
          res_oct = decimal.toString(8);
          res = `Decimal: ${decimal} Octal: ${res_oct}`;

    break;

    case "s_oc":
          decimal = parseInt( operandoa,8 ) * parseInt( operandob,8 );
          res_oct = decimal.toString(8);
          res = `Decimal: ${decimal} Octal: ${res_oct}`;

    break;

    case "s_oc":
          decimal = parseInt( operandoa,8 ) / parseInt( operandob,8 );
          res_oct = decimal.toString(8);
          res = `Decimal: ${decimal} Octal: ${res_oct}`;

    break;


    case "media":
        res = `Media: ${( parseFloat(operandoa) + parseFloat(operandob) ) /2 }`;
    break;

    case "desviacion":
        media = ( parseFloat(operandoa) + parseFloat(operandob) ) /2;
        res = `Desviacion estandar ${Math.sqrt( ( ( (parseFloat(operandoa) - media) * (parseFloat(operandoa) - media) ) + ( (parseFloat(operandob) - media) * (parseFloat(operandob) - media) ) )/2)}`;
    break;

    case "varianza":
        media = ( parseFloat(operandoa) + parseFloat(operandob) ) /2;
        res = `Varianza poblacional ${ (Math.sqrt( ( ( (parseFloat(operandoa) - media) * (parseFloat(operandoa) - media) ) + ( (parseFloat(operandob) - media) * (parseFloat(operandob) - media) ) )/2))   *    (Math.sqrt( ( ( (parseFloat(operandoa) - media) * (parseFloat(operandoa) - media) ) + ( (parseFloat(operandob) - media) * (parseFloat(operandob) - media) ) )/2))}`;
    break;

    case "sorpresa":
        res = ` ln(${operandoa}) ${ Math.log(operandoa).toFixed(3) }; ln(${operandob}) ${ Math.log(operandob).toFixed(3) }`
    break;
    
    case "factorial":

        var total = 1; 
	for ( let i  = 1; i <= operandoa ; i++) {
		total = total * i; 
	}
        res = ` ${total} `;
	
    break;

    case "fibonacci":
        let a_fibonacci = 0; 
        let b_fibonacci = 1;
        let contador_fibonacci = 1;

        let valores_fibonacci = [0];

        for( let i = 0; i < ( operandoa - 1 ); i++){
            valores_fibonacci.push( contador_fibonacci );

            contador_fibonacci= a_fibonacci + b_fibonacci; 
            a_fibonacci = b_fibonacci;
            b_fibonacci= contador_fibonacci; 
            
        }

        res = valores_fibonacci;
    break;
    }
    resetear();
    resultado.textContent = res;
  }

  //Mostrar letras de hexadecimal
