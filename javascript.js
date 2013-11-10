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


		var votos = new Array(15, 10, 9);
		function alteraVotos (name, novoVoto) {
			for (i = 0; i < votos.length; ++i) {
				document.getElementById(votos[i] + 'v').src = 'resources/' + votos[i] +
				'votos.png';
			}
			if (novoVoto) {
				var pos = name.match(/[0-9]+/);
				var id =  votos[pos] + 'v';
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


/* ------------------------------ Drag 'n Drop jQuery -----------------------*/

/*
$(function() {
        /** we set the draggable class to be draggable, we add the containment which will be #boxdemo, so dropable and draggable object cant pass out of this box 
    $( ".draggable" ).draggable({ 
        containment:"#boxdemo",
        revert: "invalid"
    });
 
    $( ".droppable" ).droppable({
        /** tolerance:fit means, the moveable object has to be inside the dropable object area 
        tolerance: 'fit',
        over: function(event, ui) {
            /** We add the hoverClass when the moveable object is inside of the dropable object 
            $('.ui-draggable-dragging').addClass('hoverClass');
        },
        out: function(event, ui) {
            /** We remove the hoverClass when the moveable object is outside of the dropable object area 
            $('.ui-draggable-dragging').removeClass('hoverClass');
        },
        /** This is the drop event, when the draggable object is moved on the top of the dropable object area 
        drop: function( event, ui ) {
            $( ".droppable" ).addClass('dropClass');
        }
    });
});		


$(document).ready( function() {
  $('#ClickWordList li').click(function() { 
    $("#txtMessage").insertAtCaret($(this).text());
    return false
  });
  $("#DragWordList li").draggable({helper: 'clone'});
  $(".txtDropTarget").droppable({
    accept: "#DragWordList li",
    drop: function(ev, ui) {
      $(this).insertAtCaret(ui.draggable.text());
    }
  });
});
 
$.fn.insertAtCaret = function (myValue) {
  return this.each(function(){
  //IE support
  if (document.selection) {
    this.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
    this.focus();
  }
  //MOZILLA / NETSCAPE support
  else if (this.selectionStart || this.selectionStart == '0') {
    var startPos = this.selectionStart;
    var endPos = this.selectionEnd;
    var scrollTop = this.scrollTop;
    this.value = this.value.substring(0, startPos)+ myValue+ this.value.substring(endPos,this.value.length);
    this.focus();
    this.selectionStart = startPos + myValue.length;
    this.selectionEnd = startPos + myValue.length;
    this.scrollTop = scrollTop;
  } else {
    this.value += myValue;
    this.focus();
  }
  });
}; */

 total = 1;

  $(function() {
    $( ".sortable" ).sortable({
      revert: true
    });
    $( ".draggable" ).draggable({
      connectToSortable: ".sortable",
      helper: "clone",
      revert: "invalid"
    });
    // $( ".droppable" ).droppable({
    //   revert: true,
    //   drop: function (event, ui) {
    //   		console.info( ui.draggable.find('li').attr('id') );
    //   		var str = document.getElementById( ui.draggable.attr('id') ).innerHTML;
    //   		var preco = parseInt( str );
    //   		total += preco;
    //   		document.getElementById( $(ui.draggable).id ).text(total);
    //   	}
    // });
    $( "ul, li" ).disableSelection();
  });