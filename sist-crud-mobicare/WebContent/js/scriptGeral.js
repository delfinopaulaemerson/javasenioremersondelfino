// JavaScript Document


//$j(function( $j ){
////Define classe para os bot�es desabilitados
//	$j('input[type=button]:disabled, input[type=submit]:disabled, input[type=reset]:disabled').addClass('btndisabled');
//	$j('input[type=text]:disabled, input[type=password]:disabled, input[type=file]:disabled, textarea:disabled, select:disabled').addClass('txtdisabled');
//	if($j('input[readonly=readonly]') || $j('input[readonly=true]')){$j('input[readonly=readonly],input[readonly=true]').addClass('txtdisabled');}
//	if($j('textarea[readonly=readonly]') || $j('textarea[readonly=true]')){$j('textarea[readonly=readonly],textarea[readonly=true]').addClass('txtdisabled');}
//	if($j('select[readonly=readonly]') || $j('select[readonly=true]')){$j('select[readonly=readonly],select[readonly=true]').addClass('txtdisabled');}
//	
//});

$j(function( $j ){
	//mostra e esconde campo por select
	$j('#frmAgendamentosCadastro #pesquisarem').change(function(){
		var valor = $j(this).val();
		if(valor == '6'){
			$j('#divtodos').fadeOut(function(){
				$j('#divtodos input').val('');
				$j('.div6').fadeIn();
			});
		
		} 
		
		else if(valor != '6' && valor != '0'){
			$j('.div6').fadeOut(function(){
				$j('.div6 input').val('');
				$j('#divtodos').fadeIn();
			});
		}
		else{
			return false;
		}
	});
	
	// Mostra e d� foco em mensagem de confirm do sistema (sim/nao)
	$j('.jqmsgconfirm').click(function(){
		$j('.msg-botoes').slideDown();$j('.msg-botoes input').focus();
	});

	//abre popup window com o relat�rio pdf na p�gina do menu Confere com Foto
	if($j('form').attr('id') == "frmConfereComFoto"){
		$j('form#frmConfereComFoto').ready(function(ev){
			window.open('../relatorios/imagemTeste.pdf','teste','width=800,height=600');
			ev.preventDefault();
			return false;
		})
	}
//	if($j('form#frmManterVisitanteControledePlanilha')){
//		$j('#btnImprimir').click(function(ev){
//			window.open('../relatorios/imagemTeste.pdf','teste','width=800,height=600');
//			ev.preventDefault();
//			return false;
//		})
//	}
	
//	//fun��o q retira o background q indica haver mais itens nas listas dentro das c�lulas da tabela
//	var $tabela = $j('table.cinza td ul');
//	if($tabela){
//		$tabela.each(function() {
//			var $licount = $j(this).children().size();
//			if($licount < 2){
//				$j(this).css('background','none');
//			}
//		})
//		
//	}
	//Configura o tamanho da fonte das abas de acordo com a resolu��o do browser
	if($j(window).width() <= 970){
		$j('.ui-tabs .ui-tabs-nav li a').css('font-size','0.8em');
		$j('.ui-tabs .ui-tabs-nav li a').css('padding','0.5em 0.6em');
		$j('#form_box h2:first').css('font-size','1.6em');
	};
	$j(window).resize(function() {
		if($j(window).width() <= 970){
			$j('.ui-tabs .ui-tabs-nav li a').css('font-size','0.8em');
			$j('.ui-tabs .ui-tabs-nav li a').css('padding','0.5em 0.6em');
			$j('#form_box h2:first').css('font-size','1.6em');
		}else{
			$j('.ui-tabs .ui-tabs-nav li a').css('font-size','1em');
			$j('.ui-tabs .ui-tabs-nav li a').css('padding','0.5em 1em');
			$j('#form_box h2:first').css('font-size','2em');
		}
	});
	
	//Efeito de aparecer os fieldsets de pesquisa de acordo com a op��o selecionada no 1� select da p�gina 0303-01/frmProntRegaliasCadastro.html
	$j(function( $j ){
		var $selectoptions = $j('.jqefeitoselect option[value != 0]').length;
		if ($j('.jqefeitoselect').val() == '0'){
			for(i=0; i<=$selectoptions; i++){
				$j('.jqefeitoselect'+i).fadeOut();
			}
		}
		$j('.jqefeitoselect').change(function(){
			var $selectvalue = $j('.jqefeitoselect option[value!=0]:selected').val();
			if ($j('.jqefeitoselect option[value!=0]').is(':selected')){
				for(i=0; i<=$selectoptions; i++){
					$j('.jqefeitoselect'+i).fadeOut();
				}
				$j('.jqefeitoselect'+$selectvalue).fadeIn();
			}else{
				for(i=0; i<=$selectoptions; i++){
					$j('.jqefeitoselect'+i).fadeOut();
				}
			}
		});
	});

   //efeito de aparecer e sumir as divs
	$j('.jqueryslide02, .jqueryslide04').hide();
	$j('.btnjqslide01, .btnjqslide02, .btnjqslide03, .btnjqslide04, .btnjqslide05, .btnjqslide06, .btnjqslide07, .btnjqslide08, .btnjqslide09, .btnjqslide10, .btnjqslide11, .btnjqslide12').live('click', function(){
		if($j(this).is('.btnjqslide01')){endt = '01'; end = '02'; }
		else if($j(this).is('.btnjqslide02')){endt = '02'; end = '01';}
		else if($j(this).is('.btnjqslide03')){endt = '03'; end = '04';}
		else if($j(this).is('.btnjqslide04')){endt = '04'; end = '03';}
		else if($j(this).is('.btnjqslide05')){endt = '05'; end = '06';}
		else if($j(this).is('.btnjqslide06')){endt = '06'; end = '05';}
		else if($j(this).is('.btnjqslide07')){endt = '07'; end = '08';}
		else if($j(this).is('.btnjqslide08')){endt = '08'; end = '07';}
		else if($j(this).is('.btnjqslide09')){endt = '09'; end = '10';}
		else if($j(this).is('.btnjqslide10')){endt = '10'; end = '09';}
		else if($j(this).is('.btnjqslide11')){endt = '11'; end = '12';}
		else if($j(this).is('.btnjqslide12')){endt = '12'; end = '11';}
		
		$j(this).closest('div.lista').length > 0 ? context = $j(this).closest('div.lista') : context = null 
			
		$j('.jqueryslide'+endt, context).fadeOut('fast');
		if($j('.jqueryslide'+end, context).is(':hidden')) $j('.jqueryslide'+end, context).fadeIn();
		$j('.jqueryslide'+end+" :enabled:not([readonly]):first" ).focus();
	});
	
	
	// Efeito slide down no bot�o 'Novo', 2� parte, na p�gina frmUnidPenalOcorrencias.html
	$j(document).ready(function(){
		//$j('.jqslidedown').addClass('displaynone');
		$j('.btnjqslidedown').click(function(){
			if($j('.jqslidedown').is(':hidden') ){
				$j('.jqslidedown').slideDown('slow');
			};
		});
	});
	//fun��o p/ limpar formul�rio
	$j(document).ready(function(){
		$j('.jqresetbtn').click(function(){
			var target= $j(this).attr('target');
			$j('.jqresetform').find(':input').each(function() {
				switch(this.type) {
					case 'password':
					case 'select-multiple':
					case 'select-one':
					case 'text':
					case 'textarea':
						$j(this).val('');
						break;
					case 'checkbox':
					case 'radio':
						this.checked = false;
				};
			});
		});
	});
	//convers�o do par�metro 'dest' do elemento p/ href
	$j(document).ready(function(){
		if($j('input[dest]')){
			$j('input[dest]').click(function(){
				var destino = $j(this).attr('dest');
				var onclick = "location.href='"+destino+"'";
				$j(this).attr('onclick',onclick);
			});	
		}
	});
	
	//no m�dulo Fale Conosco, ao clicar na linha da tabela das mensagens, ir p/ o conte�do da mensagem
	$j(document).ready(function(){
		$j('.grdmensagens tr').each(function(){
			$j(this).find('td:lt(4)').click(function(){
				window.location.href='../1204-01/frmFaleConoscoConteudoMsg.html';
			 });
		});
	});
	// Efeito slide down, 2� parte, na p�gina frmUnidPenalOcorrencias.html
	//$j(document).ready(function(){
//		//$j('.jqslidedown').addClass('displaynone');
//		$j('.btnjqslide01Oc').click(function(){
//			if($j('.jqslidedown').is(':hidden') ){
//				$j('.jqslidedown').slideDown('slow');
//			};
//		});
//	});
//});
});
/////////////////////////////////////////

jQuery(function( $j ){
//Marcar/desmarcar checkboxes de uma coluna
	if($j("input#marcatodos").length){
		var chklote = $j("td input.marcarcheckbox");
		$j("input#marcatodos").click(function(e){
			tablePai = $j(e.target).closest("table");
			$j(chklote.not(':disabled'), tablePai).attr('checked', e.target.checked);
			if(e.target.checked)
				$j('tr', tablePai).addClass('selected');
			else
				$j('tr', tablePai).removeClass('selected');
		});
		$j(chklote).click(function(e){
			tablePai = $j(e.target).closest("table");
			$j(e.target).closest("tr").toggleClass('selected');
			if($j(e.target).is(":checked")){
				var ch=true;
				$j(chklote.not(':disabled'), tablePai).each(function(){
					if($j(this).is(":not(':checked')")) ch = false;
				});
				if(ch)
					$j('input#marcatodos', tablePai).attr('checked','checked');
				else
					$j('input#marcatodos', tablePai).removeAttr('checked');
			}
			else
				$j('input#marcatodos', tablePai).removeAttr('checked');
		});
	};
});


/////////////////////////////////////////
//fun��o q conta caracteres em uma textarea

$j(document).ready(function(){
	if($j('textarea[maxlength]:enabled:not([readonly])')){
		$j('textarea[maxlength]:enabled:not([readonly])').each(function(){
			$j(this).contaTexto();
	   });
	}
});

//////////////////////////////////////////
//fun��o q conta caracteres em uma textarea

(function($) {
	
	/*
	fun��o que conta caracteres de uma textarea
	Ex: $('#textarea').contaTexto(100);
	*/
	$j.fn.contaTexto = function (settings) {
		var max = parseInt($j(this).attr('maxlength'));
		settings = $j.extend({
			container: "<div style='text-align:right;'></div>",
			classname: "contaTextoContador",
			format: "%1 caracteres restantes",
			pulse: true,
			delay: 0
		}, settings);
		var p, timeout;
		
		function count(el, container) {
			el = $j(el);
			if (el.val().length > (max - 4)) {
				$j('.'+settings.classname).css('color','red');
			}else{
				$j('.'+settings.classname).css('color','#000000');
			};
			if (el.val().length > max) {
			    el.val(el.val().substring(0, max));
			    if (settings.pulse && !p) {
			    	pulse(container, true);
			    };
			};
			if (settings.delay > 0) {
				if (timeout) {
					window.clearTimeout(timeout);
				}
				timeout = window.setTimeout(function () {
					container.html(settings.format.replace(/%1/, (max - el.val().length)));
				}, settings.delay);
			} else {
				container.html(settings.format.replace(/%1/, (max - el.val().length)));
			}
		};
		
		function pulse(el, again) {
			if (p) {
				window.clearTimeout(p);
				p = null;
			};
			el.animate({ opacity: 0.1 }, 100, function () {
				$(this).animate({ opacity: 1.0 }, 100);
			});
			if (again) {
				p = window.setTimeout(function () { pulse(el) }, 200);
			};
		};
		
		return this.each(function () {
			var container = (!settings.container.match(/^<.+>$/)) 
				? $j(settings.container) 
				: $j(settings.container)
					.insertAfter(this)
					.addClass(settings.classname);
			$j(this)
				.bind("keydown", function () { count(this, container); })
				.bind("keypress", function () { count(this, container); })
				.bind("keyup", function () { count(this, container); })
				.bind("focus", function () { count(this, container); })
				.bind("mouseover", function () { count(this, container); })
				.bind("mouseout", function () { count(this, container); })
				.bind("paste", function () { 
					var me = this;
					setTimeout(function () { count(me, container); }, 10);
				});
			if (this.addEventListener) {
				this.addEventListener('input', function () { count(this, container); }, false);
			};
			count(this, container);
		});
	};
//fun��o para mostrar mensagem de confirm do sistema sim/n�o //
	/*$j('.jqmsgConfirm').click(function () {
									   alert('teste');
		$j('.msg-botoes').slideDown();
		$j('.msg-botoes').focus();
	});*/
	
})(jQuery);

//////////////////////////////////////////////////////////

//fun��o p/ criar o menu nas p�ginas



//////////////////////////////////////////////////////////


/*
 * Fun��o Trim()
 */
String.prototype.trim = function() {
	return this.replace(/^\s*/, '').replace(/\s*$/, '');
}

function $(id, alertNull) {
	try {
		if (typeof id != 'string') {
			return null;
		}

		var temp = document.getElementById(id);
		return temp;
	} catch (e) {
		return null;
	}
}
function getObject(obj){
	if (typeof obj == 'object') {
		return obj;
	}
	if (typeof obj == 'string') {
		obj = $(obj);
		if (typeof obj == 'object')
			return obj;
	}
	return null;
}

/*
 * habilita e desabilita todos os elementos de um form
 */
function habilitaDesabilitaForm(form,bool) {
	var objForm = objForm = getObject(form);
	if (objForm == null) return false;
	if (objForm != null) {
		for (var count = 0; count < objForm.elements.length; count++) {
			var idNode = objForm.elements[count].getAttributeNode('id');
			if(!((idNode != null) && (idNode.nodeValue.indexOf('edt_') == 0))) {
				objForm.elements[count].disabled = !bool;
			}
		}
	}
}

function jsFormSubmit(msg)
{
	if(confirm(msg)){
		return true
	}
}

function setWindowName(wnm) {
	window.name = wnm;
}

function showlink(url) {
	window.opener.location.href = url;
	self.close();
}

function autoSubmit() {
	mainForm = document.forms[0];
	mainForm.submit();
}

function popup(url, width, height) {

	if (url == null || url == "")
		return;

	if (width == null || width == "")
		width = 700;

	if (height == null || height == "")
		height = 600;

	features = new String("menubar=0,toolbar=0,location=0,titlebar=1,resizable=1,status=1,scrollbars=1,top=10,left=10,width=" + width + ",height="+ height);

	mywindow = window.open(url, "_cropop", features);
	mywindow.moveTo(0,0);
}

// Converte o campo para mai�sculas
function toUpper(campo) {
	campo.value = campo.value.toString().toUpperCase();
}

//Verifica se o combo foi selecionado.
function selecionado(campo, indice, msg) {
	if (campo[indice].selected) {
		campo.focus();
		return true;
	} else {
		return false;
	}
}

// JavaScript Document
/*function popup(mypage, myname, w, h, scroll) {
	LeftPosition = (screen.width) ? (screen.width - w) / 2 : 0;
	TopPosition = (screen.height) ? (screen.height - h) / 2 : 0;
	settings = "height=" + h + ",width=" + w + ",top=" + TopPosition + ",left=" + LeftPosition + ",scrollbars=" + scroll;
	window.open(mypage, myname, settings);
}
*/
//Valida��es
//Retira espa��s em branco no incio e no final da palavra.
function trim(sString) {
	while (sString.substring(0, 1) == " ") {
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length - 1, sString.length) == " ") {
		sString = sString.substring(0, sString.length - 1);
	}
	return sString;
}

//verifica se o campo est� vazio
function vazio(campo, msg) {
	if (trim(campo.value) == "") {
		campo.focus();
		return true;
	} else {
		return false;
	}
}
//verifica se o tamanho do campo � menor do que o permitido
function tamMin(campo, tam, msg) {
	sStr = trim(campo.value);
	if (sStr.length < tam) {
		campo.focus();
		return true;
	} else {
		return false;
	}
}
//function contaTexto(campo, contador, tamanho) {
//	if (campo.value.length > tamanho) {
//		campo.value = campo.value.substring(0, tamanho);
//	} else {
//		document.getElementById(contador).innerHTML = tamanho - campo.value.length;
//	}
//}
function caracteres(campo, digits) {
	//func�o que retira todas as letras ou caracteres especiais
	var campo_temp;
	var tamanho = campo.value.length;
	for (var i = 0; i < tamanho; i++) {
		campo_temp = campo.value.substring(i, i + 1);
		if (digits.indexOf(campo_temp) == -1) {
			campo.value = campo.value.substring(0, i);
			break;
		}
	}
}


//SELECT
//verifica se o indice do campo est� selecionado.
function selecionado(campo, indice, msg) {
	if (campo[indice].selected) {
		campo.focus();
		return true;
	} else {
		return false;
	}
}

/*
 * pChecked => true or false
 * tabelaId => propriedade id da tabele
 * posColuna => inde da coluna que cont�m o checkbox, esse valor vai de 0 � numero de colunas da tabela - 1, sendo 0 a primeira coluna
 */
function marcaCheckboxes(pChecked,tabelaId,posColuna) {
	try {
		var table = $(tabelaId); //Tabela que compreende a lista de Folhas-Espelho
		var linhas = table.rows;
		for (var count = 0;count < linhas.length; count++) {
		var linha = linhas[count];
		var celula = linha.cells[posColuna]; //c�lula que cont�m o checkbox
		var inputs = celula.getElementsByTagName('input');
			if (inputs == null) {
				inputs = celula.getElementsByTagName('INPUT');
			}
			if (inputs[0] != null && inputs[0] != undefined && inputs[0].checked) {
				inputs[0].checked = pChecked;
			}
		}
	} catch (e) {
		
	}
}

function somenteCharactersDef(obj,availableChars) {

	if((obj == undefined) || (obj == null))
		return '';
	try	{
		var value = obj;
		if((typeof obj == 'object'))
			value = obj.value;
		var temp = "";
		if ((value != null) && (value != undefined)) {
			for (var i=0; i < value.length ; i++){
				var str = String.fromCharCode(value.charCodeAt(i));
				if (availableChars.indexOf(str) >= 0) {
					temp = temp.concat(value.charAt(i));
				}
			}
		}
		if((typeof obj == 'object'))
			obj.value = temp;
		return temp;
	} catch (e)	{
		return '';
	}
}


/* Fun��o criada para verificar se um form recebeu alguma altera��o
 * idForm => propriedade id do form
 */
function isFormAlterado(idForm){
	var form = $(idForm);
	var elements = form.elements;
	for (var count = 0; count < elements.length; count++) {
		if (elements[count].value != elements[count].defaultValue && elements[count].value.trim() != '') {
			return true;
		}
	}
	return false;
}
/**
 * somente numero
 * @param e
 * @returns {Boolean}
 */
function onlyDigit(e) {
	  var unicode = e.charCode ? e.charCode : e.keyCode;
	  if (unicode != 8 && unicode != 9) {
	   if (unicode<48||unicode>57) {
	    return false
	   }
	  }
}
