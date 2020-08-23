/*
	Introspect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

dados = [[813, 'Ludmilla Diniz', '3A', 0, 0, ''], [894, 'Sebastiana Barbosa', '1C', 0, 0, ' Comprou batata $ elefante roxo $ duzentos reais '], [666, 'Victor Manuel', '3A', 0, 0, ''], [137, 'Luciano Barreto', '3A', 0, 0, ''], [237, 'Tarso André', '3A', 0, 0, ''], [111, 'Darlan Martins', '3A', 0, 0, ''], [244, 'Maxwell Oliveira', '3A', 0, 0, ''], [321, 'Daniel Camilo', '3A', 0, 0, ''], [123, 'Kelliton Kenned', '3A', 0, 0, '']]

function carregaValores(dados){
	for (var n in dados){
		escreveLinhas(n, dados)
	} 
}
		 
function escreveLinhas(i, dados){
	var table = document.getElementById("tabela");
	var row = table.insertRow(-1);
	
	var posicao = row.insertCell(0);
	var nome = row.insertCell(1);
	var turma = row.insertCell(2);
	var pontos = row.insertCell(3);
	
	posicao.innerHTML = String(Number(i)+1)+".";
	nome.innerHTML = dados[i][1]; // Sem o ID
	turma.innerHTML = dados[i][2];
	pontos.innerHTML = dados[i][3];
}
/*
function pesquisar(dados){
	var nome = document.getElementById("searchBar");
	var tabela = document.getElementById("tabela");
	var linhas = tabela.getElementsByTagName("tr");
	var texto = document.getElementById("texto");
	var dadosAtual = []
	texto.innerHTML = ''
	
	console.log(linhas.length)
	
	if (linhas.length > 2 && nome.value.length > 0){
		for (var i = 0; i < dados.length; i++){
			tabela.deleteRow(-1)
		}
	}
	if (nome.value.length == 0 && linhas.length == 2){
		carregaValores(dados)
	}	
	if (nome.value.length > 0){
		for (var i = 0; i < dados.length; i++){
			if (nome.value.toUpperCase() == dados[i][1].toUpperCase()){
				var dadosProvisorios = []
				dadosProvisorios.push(dados[i])
				dadosAtual.push(dadosProvisorios)
			}
		}
		
		if (dadosAtual.length > 0){
			//carregaValores(dados.indexOf(dadosAtual[0])+1)
			//console.log(dados[1].indexOf(nome.value))
			
			for (var i = 0; i < dadosAtual.length; i++){
				console.log(dadosAtual[0])
				escreveLinhas(dados.indexOf(dadosAtual[i]), dadosAtual)
				escreveLinhas(i, dadosAtual[0])
				
			}
			
			for (var i = 0; i < dadosAtual.length; i++){
				escreveLinhas(0, dadosAtual[i])
			}
			console.log(dados.indexOf(dadosAtual[0]))
			
			
		} else {
			texto.innerHTML = 'Usuário não encontrado'
		}
		console.log(linhas.length)
		
	}
}
*/
(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

	});

})(jQuery);