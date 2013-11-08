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
				alert("Lamentamos mas não é possível manter temperaturas mais baixas.");
				return;
			} 
			else if (obj.id=="mais" && temperatura > 27) 
			{
				alert("Lamentamos mas não é possível manter temperaturas mais altas.");
				return;
			};

			if (obj.id=="mais")
			{
				document.getElementById('temperatura').innerHTML = ++temperatura + "°C";
			}
			else if (obj.id=="menos")
			{
				document.getElementById('temperatura').innerHTML = --temperatura + "°C";
			};
		}

// funcao da Ementa
		function switchEmenta()
		{			
			
			if (document.getElementById('ementa_tabela').style.display == "none") 
			{
				document.getElementById('ementa_tabela').style.display="block";
			}
			else
			{
				document.getElementById('ementa_tabela').style.display="none";
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
				document.getElementById('ementa_tabela').style.display="none";
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



		function votarMusica(name)
		{
			if (document.getElementById(name).src.indexOf("resources/votar_button.png") != -1)
			{
				document.getElementById('pic1').src = 'resources/votar_button.png';
				document.getElementById('pic2').src = 'resources/votar_button.png';
				document.getElementById('pic3').src = 'resources/votar_button.png';
				document.getElementById(name).src = 'resources/votado_button.png';
			} 
			else
			{
				document.getElementById(name).src = 'resources/votar_button.png';	
			};


		}
