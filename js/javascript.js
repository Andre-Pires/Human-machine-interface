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


/***********************************************

* JavaScript Image Clock- by JavaScript Kit (www.javascriptkit.com)
* This notice must stay intact for usage
* Visit JavaScript Kit at http://www.javascriptkit.com/ for this script and 100s more

***********************************************/
//http://www.javascriptkit.com/script/cut9.shtml
//http://randomibis.com/coolclock/

var imageclock=new Object()
	//Enter path to clock digit images here, in order of 0-9, then "am/pm", then colon image:
	imageclock.digits=["resources/c0.png", "resources/c1.png", "resources/c2.png", "resources/c3.png", "resources/c4.png", "resources/c5.png", "resources/c6.png", "resources/c7.png", "resources/c8.png", "resources/c9.png", "resources/cam.png", "resources/cpm.png", "resources/colon.png"]
	imageclock.instances=0
	var preloadimages=[]
	for (var i=0; i<imageclock.digits.length; i++){ //preload images
		preloadimages[i]=new Image()
		preloadimages[i].src=imageclock.digits[i]
	}

	imageclock.imageHTML=function(timestring){ //return timestring (ie: 1:56:38) into string of images instead
		var sections=timestring.split(":")
		if (sections[0]>=24)//13
			sections[0]=sections[0]-24+""//12
		for (var i=0; i<sections.length; i++){
			if (sections[i].length==1)
				sections[i]='<img src="'+imageclock.digits[0]+'" />'+'<img src="'+imageclock.digits[parseInt(sections[i])]+'" />'
			else
				sections[i]='<img src="'+imageclock.digits[parseInt(sections[i].charAt(0))]+'" />'+'<img src="'+imageclock.digits[parseInt(sections[i].charAt(1))]+'" />'
		}
		return sections[0]+'<img src="'+imageclock.digits[12]+'" />'+sections[1]+'<img src="'+imageclock.digits[12]+'" />'+sections[2]
	}

	imageclock.display=function(){
		var clockinstance=this
		this.spanid="clockspan"+(imageclock.instances++)
		document.write('<span id="'+this.spanid+'"></span>')
		this.update()
		setInterval(function(){clockinstance.update()}, 1000)
	}

	imageclock.display.prototype.update=function(){
		var dateobj=new Date()
		var currenttime=dateobj.getHours()+":"+dateobj.getMinutes()+":"+dateobj.getSeconds() //create time string
		var currenttimeHTML=imageclock.imageHTML(currenttime)+'<img src="'+((dateobj.getHours()>=12)? imageclock.digits[11] : imageclock.digits[10])+'" />'
		document.getElementById(this.spanid).innerHTML=currenttimeHTML

	}





	

		// funcao de estado dos menus do barista
		function switchMenus()
		{
			if (document.getElementById('barista').style.display != "none") 
			{
				document.getElementById('menu'   ).style.paddingLeft="7%";
				document.getElementById('barista').style.display="none";
				document.getElementById('ementa' ).style.display="inline";
				document.getElementById('jogos'  ).style.display="inline";
				document.getElementById('voltar' ).style.display="inline";
				document.getElementById('conta'  ).style.display="inline";
				document.getElementById('musica' ).style.display="inline";	
			}else{
				document.getElementById('menu'   ).style.paddingLeft="0%";	
				document.getElementById('ementa' ).style.display="none";
				document.getElementById('jogos'  ).style.display="none";
				document.getElementById('voltar' ).style.display="none";
				document.getElementById('conta'  ).style.display="none";
				document.getElementById('musica' ).style.display="none";
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

		function switchDisplay(obj)
		{			
			
			if (obj.style.display === "none") 
			{
				obj.style.display="block";
			}
			else
			{
				obj.style.display="none";
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
			document.getElementById('fazPedido'  ).className += " pure-button-disabled";
			document.getElementById('removeItens').disabled = true;
			document.getElementById('fazPedido'  ).disabled = true;
		}

		function copiaArea () {

			$("#area_arrasto").each(function () {
				    $("div ul li", this).each(function () {
				        var val = $.trim($(this).text()).replace(/X/ , " ");
				        val = val.replace(/\+\-/, "");
						var qtd = $("input", this).val();

				        if (val)
				        {
				        	$("#dialogCorpoConta").append(
				        		'<li>'
				        		+ '<div id="text" class="pure-u-7-12">' 
				        		+   val 
				        		+ '</div>'
				        		+ '<div class="pure-u-5-12" style="text-align:right">Qtd:' 
				        		+   qtd 
				        		+ '</div>' + 
				        	    '</li>');
				        }
				    });
				});

		}

/* Popup para a confirmacao do pedido */

		$(function() {
		    $( "#dialogComprar" ).dialog({
		      autoOpen: false,
		      width:'auto',
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
	      width:'auto',
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
    numtimes : 4,
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