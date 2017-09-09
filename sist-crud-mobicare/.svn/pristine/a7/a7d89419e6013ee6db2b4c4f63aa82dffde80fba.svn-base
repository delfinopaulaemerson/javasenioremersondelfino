// JavaScript Document


/////////////////////////////////////////////////////////////////////
//função para abrir uma janela modal na página de login
jQuery(function( $j ){
	$j(document).ready(function(){
		$j('.jqmodal').click(function() {
			$j('#divfundomodal').css('filter','alpha(opacity=80)');
			$j('#divmodal').fadeIn('slow');
			$j('#divfundomodal').fadeIn('slow', function() {
				$j('#divModalContent,#divModalContent2').slideDown('slow', function(){
					$j('#divModalContent fieldset,#divModalContent2 fieldset').fadeIn('slow');
				});
			});
		});
		$j('.linkfechamodal').click(function() {
			$j('#divModalContent fieldset,#divModalContent2 fieldset').fadeOut(function(){
				$j('#divModalContent,#divModalContent2').slideUp('slow', function() {
					$j('#divfundomodal').fadeOut('slow');
					$j('#divmodal').fadeOut('slow');
				});
			});
		});
	});
});
//////////////////////////////////////////////////////////////////////
