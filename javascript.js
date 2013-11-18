// para criar a data e possivelmente o relogio
		/*
		tday  =new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
		tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
		*/

		//portugues
		tday  =new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
		tmonth=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");

		function GetClock()
		{
			d = new Date();
			nday   = d.getDay();
			nmonth = d.getMonth();
			ndate  = d.getDate();

			document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
			setTimeout("GetClock()", 1000);
		}

		// funcao de estado dos menus do barista
		function switchMenus()
		{			
			

			if (document.getElementById('barista').style.display != "none") 
			{
				document.getElementById('menu').style.paddingLeft="7%";
				document.getElementById('barista').style.display="none";
				document.getElementById('ementa').style.display="inline";
				document.getElementById('jogos').style.display="inline";
				document.getElementById('voltar').style.display="inline";
				document.getElementById('conta').style.display="inline";
				document.getElementById('musica').style.display="inline";	
			}else{
				document.getElementById('menu').style.paddingLeft="0%";	
				document.getElementById('ementa').style.display="none";
				document.getElementById('jogos').style.display="none";
				document.getElementById('voltar').style.display="none";
				document.getElementById('conta').style.display="none";
				document.getElementById('musica').style.display="none";
				document.getElementById('barista').style.display="inline";
			};
		}

//manter o estado do ar condicionado
temperatura = 20;

		function regulaTemp(obj)
		{

			if (obj.id=="menos" && temperatura < 15) 
			{
				document.getElementById('mensagemAC').innerHTML = "Temperatura mínima atingida. \n (Toque para fechar)";
				document.getElementById('menos').className += " pure-button-disabled";
				document.getElementById('AC_msg_container').style.display = "block";
				return;
			}
			else if (obj.id=="mais" && temperatura > 27)
			{
				document.getElementById('mensagemAC').innerHTML = "Temperatura máxima atingida. \n (Toque para fechar)";
				document.getElementById('mais').className += " pure-button-disabled";
				document.getElementById('AC_msg_container').style.display = "block";
				return;
			};

			if (obj.id=="mais")
			{
				document.getElementById('temperatura').innerHTML = ++temperatura + "°C";
				document.getElementById('menos').className = "arcondicionado";
				document.getElementById('AC_msg_container').style.display = "none";
			}
			else if (obj.id=="menos")
			{
				document.getElementById('temperatura').innerHTML = --temperatura + "°C";
				document.getElementById('mais').className = "arcondicionado";
				document.getElementById('AC_msg_container').style.display = "none";
			};
		}

// funcao da Ementa
		function switchEmenta()
		{			
			
			if (document.getElementById('wrapper_ementa').style.display == "none") 
			{
				document.getElementById('wrapper_ementa').style.display = "block";
			}
			else
			{
				document.getElementById('wrapper_ementa').style.display="none";
			};

		}

// funcao das Musicas
		function switchMusica()
		{			
			
			if (document.getElementById('musica_tabela').style.display == "none") 
			{
				document.getElementById('musica_tabela').style.display="block";
			}
			else
			{
				document.getElementById('musica_tabela').style.display="none";
			};

		}

// 1 - ementa, 2 - jogos, 3 - eventos, 4 - talao, 5 - musica
		function checkMenusOpen(n)
		{			
			
			if(n != 1)
			{
				document.getElementById('wrapper_ementa').style.display="none";
			}

			if(n != 5)
			{
				document.getElementById('musica_tabela').style.display="none";
			}

		}

		//A implementar
		function openHelp (obj) 
		{
			alert("Help: \nIt doesn't do anything yet.");
		}


		var ultimamusica = null;
		function votarMusica(name)
		{
			if (ultimamusica == null)
			{
				document.getElementById(name).src = 'resources/votado_button.png';
				ultimamusica = name;
				alteraVotos(name, true);	
			}
			else if (document.getElementById(name).src.indexOf("resources/votar_button.png") != -1) 
			{
				document.getElementById(ultimamusica).src = 'resources/votar_button.png';
				ultimamusica = name;
				document.getElementById(name).src = 'resources/votado_button.png';
				alteraVotos(name, true);
			} else {
				document.getElementById(name).src = 'resources/votar_button.png';
				alteraVotos(name, false);
			}
		}


        function alteraVotos (name, novoVoto) {
		    var votos = new Array(9, 10, 10);
			
            for (i = 0; i < votos.length; ++i) {
				document.getElementById(i + 'v').src = 'resources/' + votos[i] +
				'votos.png';
			}
			if (novoVoto) {
                // recebe "0v", p.ex.
				var pos = name.match(/[0-9]+/);
                console.info(pos);
				var id = pos + 'v';
				document.getElementById(id).src = 'resources/' + (votos[pos] + 1) +
					'votos.png';
			}
		}

		function escondeMensagem () {
			document.getElementById('AC_msg_container').style.display="none";
		}

		function retiraNumero (name) {
			var string = document.getElementById(name).innerHTML;
			var number = parseInt(string.match( /:[0-9]+/ ));
			return number;
		}


/* Old
		function limpaPedidos (){

			document.getElementById('area_arrasto').innerHTML = '<p style="float:right; padding-right:5%">\
						<span id="total_compra">Total: 0€</span>\
						<span id="total_itens">Qtd: 0</span>\
						</p>';

			document.getElementById('removeItens').className += " pure-button-disabled";
			document.getElementById('fazPedido').className += " pure-button-disabled";
			document.getElementById('removeItens').disabled = true;
			document.getElementById('fazPedido').disabled = true;
		}
*/

/*	Old
		function copiaArea () {

			$("#area_arrasto").each(function () {
				    var sum = 0;
				    var itens = 0;
				    $(".item", this).each(function () {
				        var val = $.trim($(this).text());

				        if (val) 
				        {
				        	$("#dialogCorpoConta").append(val + '<br>');
				        }			       
				    });
				});

		}
*/
		
		function limpaPedidos (){

			document.getElementById('area_arrasto').innerHTML = '<div class="basket_list">\
								<div class="head">\
									<span class="name">Produto</span>\
									<span class="count">Quantidade</span>\
								</div>\
								<ul></ul>\
							</div>\
							<div id="total_pedido" style="text-align:right" class="price">Total: <span>0</span>€</div>';

			document.getElementById('removeItens').className += " pure-button-disabled";
			document.getElementById('fazPedido').className += " pure-button-disabled";
			document.getElementById('removeItens').disabled = true;
			document.getElementById('fazPedido').disabled = true;
		}

		function copiaArea () {

			$("#area_arrasto").each(function () {
				    $("div ul li", this).each(function () {
				        var val = $.trim($(this).text()).replace(/X/ , " ");
						var qtd = $("input", this).val();

				        if (val) 
				        {
				        	$("#dialogCorpoConta").append(val + 'Qtd:' + qtd +'<br>');
				        }
				    });
				});

		}

/* Popup para a confirmacao do pedido */

		$(function() {
		    $( "#dialogComprar" ).dialog({
		      autoOpen: false,
		      show: {
		        effect: "drop",
		        duration: 700
		      },
		      hide: {
		        effect: "drop",
		        duration: 700
		      },
		      buttons: {
		        "Confirmar": function() {
                    var $conta = $("#total_conta>span").text();
                    var $itens = $("#total_conta_itens>span").text();
                    var sum = 0;

                    $("#area_arrasto").each(function () {
					    $("div ul li input", this).each(function () {
					        var val = parseInt($(this).val());

					        
					        if (val) 
					        {
					        	sum += val;
					        }			       
					    });
					    sum += parseFloat($itens);
					});


				    $("#total_conta_itens").html("Comprou <span>" + (sum) + "</span> produto(s).<br>");
				    $("#total_conta").html("Total: <span>" + ( parseFloat($conta) + parseFloat($("#total_pedido>span").text())) + "</span>€");
				    $("#detalhesConta").addClass("pure-button pure-button-xsmall").removeClass("pure-button-disabled");
					$("#detalhesConta").prop('disabled', false);

					copiaArea();
					limpaPedidos();
		          $( this ).dialog( "close" );
		        },
		        "Cancelar": function() {
		          $( this ).dialog( "close" );
		        }
		      }
		    });
		 
		    $( "#fazPedido" ).click(function() {
		      $( "#dialogComprar" ).dialog( "open" );
		    });
		  });


	/* Popup para a confirmacao de apagar o pedido */
	  $(function() {
	    $( "#dialogApagar" ).dialog({
	      autoOpen: false,
	      show: {
	        effect: "drop",
	        duration: 700
	      },
	      hide: {
	        effect: "drop",
	        duration: 700
	      },
	      buttons: {
	        "Apagar itens": function() {
	          limpaPedidos();
	          $( this ).dialog( "close" );
	        },
	        "Cancelar": function() {
	          $( this ).dialog( "close" );
	        }
	      }
	    });
	 
	    $( "#removeItens" ).click(function() {
	      $( "#dialogApagar" ).dialog( "open" );
	    });
	  });

	  /* Popup para os detalhes da conta */
	  $(function() {
	    $( "#dialogConta" ).dialog({
	      autoOpen: false,
	      show: {
	        effect: "drop",
	        duration: 700
	      },
	      hide: {
	        effect: "drop",
	        duration: 700
	      },
	      buttons: {
	        "OK": function() {
	          $( this ).dialog( "close" );
	        }
	      }
	    });
	 
	    $( "#detalhesConta" ).click(function() {
	      $( "#dialogConta" ).dialog( "open" );
	    });
	  });



/*--------------- FLASH DA MENSAGEM DE ARRASTO DA EMENTA ---------------*/

  var textObject = {
    delay : 300,
    effect : 'replace',
    whiteColour : true,
    firstColour : 'flash-white',
    secondColour : 'flash-blue',
    numtimes : 6,
    flash : function(obj, effect, delay) {
        //checka se há um objecto no documento
        if (obj.length > 0) {
            // se há mais do que um, aplica o flashing a todos 
            // (nao e relevante, por enquanto)
            if (obj.length > 1) {
                jQuery.each(obj, function() {
                    effect = effect || textObject.effect;
                    delay = delay || textObject.delay;
                    textObject.flashExe($(this), effect, delay);                    
                });
            } else { //apenas 1 objecto (header do "Arraste para ...")
                effect = effect || textObject.effect;
                delay = delay || textObject.delay;
                textObject.flashExe(obj, effect, delay);
            }
        }
    },
    flashExe : function(obj, effect, delay) {
        var flash = setTimeout(function() {
            if (textObject.numtimes > 0) {
                switch(effect) {
                    case 'replace':
                        obj.toggle();
                    break;
                    case 'colour':
                        if (textObject.whiteColour) {
                            obj.addClass(textObject.secondColour); // adiciona o azul
                            obj.removeClass(textObject.firstColour); // tira o branco
                            textObject.whiteColour = false;
                        } else {
                            obj.addClass(textObject.firstColour); 
                            obj.removeClass(textObject.secondColour); 
                            textObject.whiteColour = true;
                        }
                    break;
                }
                textObject.numtimes--;
                textObject.flashExe(obj, effect, delay);
            }
        }, delay);
    }
};