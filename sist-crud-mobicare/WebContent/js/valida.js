/***********************/
/** FUNCOES GENERICAS **
/***********************/

//Retorna TRUE caso o campo esteja vazio
function isEmpty(campo) {
	if(trim(campo.value) == "") {
		return true;
	} else {
		return false;
	}
	
}

//Retorna TRUE caso o email seja inv�lido
function isInvalidEmailAddress(campo) {
	if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campo.value))) {
		return true;
	} else {
		return false;
	}
}

//Retorna TRUE caso a combo nao seja selecionada
function isNotSelected(campo) {
	if(campo.selectedIndex == 0) {
		return true;
	} else {
		return false;
	}
}

//Verifica se � uma data valida.
function isData(pVal) {
	var bissexto = false;
	if(pVal.length==10) { //dd/MM/yyyy
		var dia = pVal.substring(0,2);
		var mes = pVal.substring(3,5);
		var ano = pVal.substring(6,11);
		
		// � divis�vel por 4, termina com 00 e � divis�vel por 400 ent�o � bissexto
		if(ano%4==0){
			if(ano.substring(2,4)=='00') {
				bissexto = ano%400==0;
			} else {
				bissexto = true;
			}
		}

		if(!bissexto && mes==02 && dia>28)
		{
			return false;
		}	
	}   		 
	var reTipo = /^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20)?\d{2}$/;
	return reTipo.test(pVal);
}

//TRIM
//Sem informar o segundo par�metro, as functions abaixo far�o trim com os seguintes caracteres:
// " " , "\t" (tab) , "\n" (nova linha) , "\r" (retorno de carro) , "\0" (NUL-byte) e "\x0B" (barra vertical)

//Retira os espa�os � esquerda e direita de uma String
function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
//Retira os espa�os � esquerda de uma String 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
//Retira os espa�os � direita de uma String
function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
//FIM DO TRIM

//Valida se � um CPF ou CNPJ
//Retorna: 0 - Se for um CPF ou CNPJ v�lido
//		   1 - Se for um CPF ou CNPJ incorreto (menos ou mais d�gitos)
//         2 - Se for um CPF ou CNPJ inv�lido	
function validarCPFCNPJ(campo) {
	
	if(campo.value.length == 11) {
		if(!isValidCPF(campo)) {
			return 2;
		}	
		
	} else if(campo.value.length == 14) {
		if(!isValidCNPJ(campo)) {
			return 2;
		}
	
	} else {
		return 1;
	}
	
	return 0;
	
}

//Valida se � um CPF: Retorna TRUE se for v�lido
function isValidCPF(campo) {

	var numeros, digitos, soma, i, resultado, digitos_iguais, cpf;
    digitos_iguais = 1;
	cpf = campo.value;
	
	if (cpf.length < 11) {
		return false;
	}
	
	for (i = 0; i < cpf.length - 1; i++) {
		if (cpf.charAt(i) != cpf.charAt(i + 1)) {
		  digitos_iguais = 0;
		  break;
		}
	}	
	
	if (!digitos_iguais) {
		numeros = cpf.substring(0,9);
		digitos = cpf.substring(9);
		soma = 0;
		for (i = 10; i > 1; i--) {
			soma += numeros.charAt(10 - i) * i;
		}	
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0)) {
			return false;
		}	
		numeros = cpf.substring(0,10);
		soma = 0;
		for (i = 11; i > 1; i--) {
			soma += numeros.charAt(11 - i) * i;
		}	  
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1)) {
			return false;
		}	  
		return true;
		
	} else {
		return false;
	}	
}


//Valida se � um CNPJ: Retorna TRUE se for v�lido
function isValidCNPJ(campo) {
	if (campo.value.length != 14) {
		return false;
	}
	
	var pos;
	var peso;
	var soma;
	var digito_verificador;
	
	// Calculo do DV1
	pos=12;
	peso=2;
	soma=0;
	while (pos)
	{
		soma+= (parseInt(campo.value.charAt(pos-1))) * peso;
		peso++;
		if (peso > 9)
			peso = 2;
		pos--;
	}

	if (soma == 0) {
		return false;
	}

	digito_verificador=11-(soma % 11);

	if ((soma % 11)<2) {
		digito_verificador=0;
	}
	
	if (parseInt(campo.value.charAt(12))!=digito_verificador) {
	    return false;
	}

	// Calculo do DV2
	pos=13;
	peso=2;
	soma=0;
	while (pos)
	{
		soma+= (parseInt(campo.value.charAt(pos-1))) * peso;
		peso++;
		if (peso > 9)
			peso = 2;
		pos--;
	}
	digito_verificador=11-(soma % 11);
	if ((soma % 11)<2) {
		digito_verificador=0;
	}
	
	if (parseInt(campo.value.charAt(13))!=digito_verificador) {
	   return false;
	}

	return true;
}


function removeSpecialCharacter(text) {
	var padrao = /[=#$%*\'\"\)<\(>]/;
	invalid = padrao.exec(text);
	if (invalid){
		return removeSpecialCharacter(replaceAll(text, invalid[0], ""));
	} else {
		return text;
	} 
}

function replaceAll(string, token, newtoken) {
	while (string.indexOf(token) != -1) {
		string = string.replace(token, newtoken);
	}
	return string;
}



function verificarMensagem(textoAntes, textoDepois) {
	if(textoAntes != textoDepois) {
		alert('N\u00E3o \u00E9 permitida a inser\u00E7\u00E3o dos caracteres: =#$\'%*\"\)<\(>');
	}
}