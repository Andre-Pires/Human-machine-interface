// para criar a data e possivelmente o relogio

		tday  =new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
		tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

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

				document.getElementById('fillerdiv').className = "grid_4";
				document.getElementById('mdiv').className = "grid_11";
				document.getElementById('barista').style.display="none";
				document.getElementById('ementa').style.display="inline";
				document.getElementById('jogos').style.display="inline";
				document.getElementById('eventos').style.display="inline";
				document.getElementById('talao').style.display="inline";
				document.getElementById('musica').style.display="inline";	
			}else{
				document.getElementById('fillerdiv').className = "grid_6";
				document.getElementById('mdiv').className = "grid_9";
				document.getElementById('ementa').style.display="none";
				document.getElementById('jogos').style.display="none";
				document.getElementById('eventos').style.display="none";
				document.getElementById('talao').style.display="none";
				document.getElementById('musica').style.display="none";
				document.getElementById('barista').style.display="inline";
			};
		}

//manter o estado do ar condicionado
temperatura = 20;

		function regulaTemp(obj)
		{

			if (obj.innerHTML=="-" && temperatura < 15) 
			{
				alert("Lamentamos mas não é possível manter temperaturas mais baixas.");
				return;
			} 
			else if (obj.innerHTML=="+" && temperatura > 27) 
			{
				alert("Lamentamos mas não é possível manter temperaturas mais altas.");
				return;
			};

			if (obj.innerHTML=="+")
			{
				document.getElementById('temperatura').innerHTML = ++temperatura + "°C";
				o2.style.display="inline";
			}
			else if (obj.innerHTML=="-")
			{
				document.getElementById('temperatura').innerHTML = --temperatura + "°C";
			};
		}

// funcao da Ementa
		function switchEmenta()
		{			
			
			if (document.getElementById('ementa_tabela').style.display == "none") 
			{
				document.getElementById('ementa_tabela').style.display="inline";
			}
			else
			{
				document.getElementById('ementa_tabela').style.display="none";
			};

		}

// 1 - ementa, 2 - jogos, 3 - eventos, 4 - talao, 5 - musica
		function checkMenusOpen(n)
		{			
			
			if(n != 1)
			{
				document.getElementById('ementa_tabela').style.display="none";
			}

		}

		//A implementar
		function openHelp (obj) {
			alert("Help: \nIt doesn't do anything yet.");
		}