//**************** Valida��es javascript ****************


/**
 * Verifica se � uma data v�lida.
 * Depois d� foco no campo
 * @param Object Campo que ser� validado
 * @returns um alert e um boolean
 */
function validaDataComAlerta(campo){
	if (campo.value.length < 10) {
		alert("Preencha a Data Corretamente (dd/mm/aaaa)");
		campo.focus();
		return true;
	}
	else {
		dia= campo.value.substring(0,2);
		mes= campo.value.substring(3,5);
		ano= campo.value.substring(6,10);
		if (mes > 12){
			alert("M�s Inv�lido");
			campo.focus();
			return true;
		}
		else {
			if (((mes==1)||(mes==3)||(mes==5)||(mes==7)||(mes==8)||(mes==10)||(mes==12))&&(dia>31)){
				alert("Dia Inv�lido");
				campo.focus();
				return true;
			}
			else {
				if (((mes==4)||(mes==6)||(mes==9)||(mes==11))&&(dia>30)){
					alert("Dia Inv�lido");
					campo.focus();
					return true;}
				else {
					if ( (ano%4==0)&&(mes==2)&&(dia>29) ){
						alert("Dia Inv�lido");
						campo.focus();
						return true;}//ano bissexto
					else {
						if ((ano%4!=0)&&(mes==2)&&(dia>28)){
							alert("Dia Inv�lido");
							campo.focus();
							return true;}
						else {
							return false;
						}
					}
				}
			}
		}
	}
}

/**
 * Verifica se � uma data v�lida.
 * @param String valor a ser validado
 * @returns boolean
 */
function validaData(valor){
	if ( isUndefined(valor) || valor.length != 10 ) {
		return false;
	}
	else {
		dia= valor.substring(0,2);
		mes= valor.substring(3,5);
		ano= valor.substring(6,10);
		if (mes > 12 || dia < 1 || mes < 1 || ano < 1){
			return false;
		}
		else {
			if (((mes==1)||(mes==3)||(mes==5)||(mes==7)||(mes==8)||(mes==10)||(mes==12))&&(dia>31)){
				return false;
			}
			else {
				if (((mes==4)||(mes==6)||(mes==9)||(mes==11))&&(dia>30)){
					return false;}
				else {
					if ( (ano%4==0)&&(mes==2)&&(dia>29) ){
						return false;}//ano bissexto
					else {
						if ((ano%4!=0)&&(mes==2)&&(dia>28)){
							return false;}
						else {
							return true;
						}
					}
				}
			}
		}
	}
}

/**
 * Retorna um Date passando-se uma string no formato 'dd/MM/yyyy'
 * @param valor {String}
 * @returns {Date}
 */
function stringToDate(valor){
	dia= valor.substring(0,2);
	mes= valor.substring(3,5);
	ano= valor.substring(6,10);
	
	return new Date(ano, mes, dia);
}

/**
 * Coleta uma data completa, ex: "2011-05-19T03:00:00Z" e retorna 
 * data no formato 'dd/MM/yyyy'
 * @param valor {String}
 * @returns {String}
 */
function toDataSimples(dataCompleta){
	data = new Date(dataCompleta);
	dia = data.getDate().toPaddedString(2);
	mes = (data.getMonth()+1).toPaddedString(2);
	ano = data.getFullYear();
	return (isNaN(dia) || isNaN(mes) || isNaN(ano) ? "" : dia + "/" + mes + "/" + ano)
	
}

function mascaraMutuario(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
}
/**
 * mascara de cpf e cnpj
 */ 
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
 
function cpfCnpj(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
    if (v.length <= 14) { //CPF
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
 
    } else { //CNPJ
 
        //Coloca ponto entre o segundo e o terceiro dígitos
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")
 
        //Coloca ponto entre o quinto e o sexto dígitos
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
 
        //Coloca uma barra entre o oitavo e o nono dígitos
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
 
        //Coloca um hífen depois do bloco de quatro dígitos
        v=v.replace(/(\d{4})(\d)/,"$1-$2")
 
    }
 
    return v
 
}
/**
 * formatacao generica
 * OnKeyPress="formatar(this, '#####-###')"
 */
function mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}
function cep(v){
    v=v.replace(/D/g,"");                //Remove tudo o que não é dígito
    v=v.replace(/^(\d{5})(\d)/,"$1-$2"); //Esse é tão fácil que não merece explicações
    return v;
}


/**
 * Verifica de uma forma mais completa se um valor � undefined
 * @param vari�vel
 * @returns {Boolean}
 */
function isUndefined(x) { 
	return x == null && x !== null;
}


/**
 * Verifica se um campo � nulo
 * @param Object
 * @return boolean
 */
function isNotNull(valor) {
    if (isUndefined(valor) || valor == null || valor == "null" || valor == ""){
        return false;
    }
    else{
        return true;
    }

}


function formatar_moeda(campo, separador_milhar, separador_decimal, tecla) {
var sep = 0;
var key = '';
var i = j = 0;
var len = len2 = 0;
var strCheck = '0123456789';
var aux = aux2 = '';
var whichCode = (window.Event) ? tecla.which : tecla.keyCode;

if (whichCode == 13) return true; // Tecla Enter
if (whichCode == 8) return true; // Tecla Delete
key = String.fromCharCode(whichCode); // Pegando o valor digitado
if (strCheck.indexOf(key) == -1) return false; // Valor inválido (não inteiro)
len = campo.value.length;
for(i = 0; i < len; i++)
if ((campo.value.charAt(i) != '0') && (campo.value.charAt(i) != separador_decimal)) break;
aux = '';
for(; i < len; i++)
if (strCheck.indexOf(campo.value.charAt(i))!=-1) aux += campo.value.charAt(i);
aux += key;
len = aux.length;
if (len == 0) campo.value = '';
if (len == 1) campo.value = '0'+ separador_decimal + '0' + aux;
if (len == 2) campo.value = '0'+ separador_decimal + aux;

if (len > 2) {
aux2 = '';

for (j = 0, i = len - 3; i >= 0; i--) {
if (j == 3) {
aux2 += separador_milhar;
j = 0;
}
aux2 += aux.charAt(i);
j++;
}

campo.value = '';
len2 = aux2.length;
for (i = len2 - 1; i >= 0; i--)
campo.value += aux2.charAt(i);
campo.value += separador_decimal + aux.substr(len - 2, len);
}

return false;
}


/**
 * somente numeros
 * @returns {Boolean}
 */
function numeros(){  
    
    if (document.all) // Internet Explorer  
            var tecla = event.keyCode;  
    else if(document.layers) // Nestcape  
            var tecla = e.which;  
  
    if ((tecla > 47 && tecla < 58)) // numeros de 0 a 9  
        return true;  
    else {  
        if (tecla != 8) // backspace  
            //event.keyCode = 0;  
            return false;  
        else  
            return true;  
    }  
}  

/**
 * Verifica se o valor � um n�mero v�lido
 * @param value
 * @returns boolean
 */
function isNumber(value){
	return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value)
}

//verifica se o campo est� vazio
function vazio(campo, msg) {
	return trim(campo.value) == "" ? true : false
}



function checkMail(mail){
	  var txt = mail;
	  if ((txt.indexOf("@") < 1) || (txt.indexOf('.') < 7)){
	   return false;
	  }else{
		return true; 
	  }
}

