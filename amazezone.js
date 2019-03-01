function search() {
	if (document.getElementById("search").value != ""){
		var searching = "https://www.amazon.fr/s/ref=nb_sb_noss_2?__mk_fr_FR=ÅMÅŽÕÑ&url=search-alias%3Daps&field-keywords="	+	document.getElementById("search").value;
	    window.open(searching);
		document.getElementById("search").value = "";
	}
    else {
		document.getElementById("search").style.borderWidth = "0.4vmin";
		setTimeout(function(){document.getElementById("search").style.borderWidth  = "0";}, 2000);
	}
}

function menu(){
	if (document.getElementById("menulogo").getAttribute("src") == "Images/Menu0.png")
		menudisplay(0);
	else
		menuundisplay(9);
		
}

function handle(ev){
    if (ev.keyCode == 13)
        search();
}

function menudisplay(i){
			setTimeout(function(){
			var text="Images/Menu"+i+".png";
			document.getElementById("sidebar").style.display = "flex";
			var right	=	0+"%";//(100-(i*0.75)+"%");
			var left = (-6.75+(i*0.75))+"%";
			var top = 0+"%";
			var bot = 0+"%";
			var margin = top+" "+right+" "+bot+" "+left;
			document.getElementById("menulogo").setAttribute("src",text);
			document.getElementById("sidebar").style.margin = margin ;
			if(i<9)
				menudisplay(i+1);
			else
				document.getElementById("sidebar").style.color = "#000";
			document.getElementById("content").style.webkitFilter = "brightness(30%)";
			document.getElementById("divheader").style.webkitFilter = "opacity(100%)";
		},5)			
}

function menuundisplay(i){
	setTimeout(function(){
			var text="Images/Menu"+i+".png";
			var right	=	0+"%";//(100-(i*0.75)+"%");
			var left = (-6.75+(i*0.75))+"%";
			var top = 0+"%";
			var bot = 0+"%";
			var margin = top+" "+right+" "+bot+" "+left;
			document.getElementById("menulogo").setAttribute("src",text);
			document.getElementById("sidebar").style.margin = margin ;
			if(i>0)
				menuundisplay(i-1);
			else
				document.getElementById("sidebar").style.display = "none";
			document.getElementById("content").style.webkitFilter = "brightness(100%)";
			document.getElementById("divheader").style.webkitFilter = "opacity(80%)";
		},5)
	}

var img = 0;

function changeimgright() {
    if(img == 0) {
        document.getElementById("ads_banner").getElementsByTagName("img")[0].src = "images/img_video.jpg";
        img = 1;
    }
    else if(img == 1) {
        document.getElementById("ads_banner").getElementsByTagName("img")[0].src = "images/img_music.jpg";
        img = 2;
    }
    else if(img == 2) {
        document.getElementById("ads_banner").getElementsByTagName("img")[0].src = "images/img_frais.jpg";;
        img = 0;
    }
}

function changeimgleft() {
    if(img == 0) {
        document.getElementById("ads_banner").getElementsByTagName("img")[0].src = "images/img_music.jpg";
        img = 2;
    }
    else if(img == 2) {
        document.getElementById("ads_banner").getElementsByTagName("img")[0].src = "images/img_video.jpg";
        img = 1;
    }
    else if(img == 1) {
        document.getElementById("ads_banner").getElementsByTagName("img")[0].src = "images/img_frais.jpg";
        img = 0;
  }
}

		function calcul(obj) {
					var value =0;
					var value2 =0;
					var value3 =0;
					var promo = 8.03;
					var somme = document.getElementById('prix');	
					var somme2 = document.getElementById('total');
					for(var i =1; i<=5 ; i++){
							value+=document.getElementById('article'+i).getAttribute('data-value') * document.getElementById('choice'+i).value;
							value2+=parseInt(document.getElementById('choice'+i).value);
						if(i=="3"){
						value3+=document.getElementById('choice4').value;
						value3 = (Math.trunc((value3)/3));
							value= (value)-(value3*promo);
						}
					}	
					
					if (value2>1){
					somme.innerHTML = "Sous-total("+value2+" articles) : </br> <div class=\"eur\"> EUR "+Math.round(value*100)/100+" </div> ";
					somme2.innerHTML = "Sous-total ("+value2+" articles) :  <div class=\"eur\"> EUR "+Math.round(value*100)/100+"</div>";
					}
					else {
					somme.innerHTML = "Sous-total("+value2+" article) : </br>  <div class=\"eur\"> EUR "+Math.round(value*100)/100+" </div>";
					somme2.innerHTML = "Sous-total ("+value2+" article) : <div class=\"eur\"> EUR "+Math.round(value*100)/100+"</div>";
					}
					
				
		}
		
		function sup(obj, i){
		 obj.parentElement.parentElement.parentElement.style.display = "none";
		 document.getElementById('choice'+i).value = "0";
		 calcul(obj);
		}
		
		function panier(i){
			var addpanier = "carticle"+i;
			document.getElementById(addpanier).style.display="flex";
		}
		
		function suppr(i){
			var supprpanier = "carticle"+i;
			document.getElementById(supprpanier).style.display="none";
		}
		
		function dispCart(){
			document.getElementsByTagName("header")[0].style.height = "27%";
			document.getElementsByClassName("tooltiptext")[0].style.display = "flex";
		}
		
		function undispCart(){
			setTimeout(function(){
			document.getElementsByTagName("header")[0].style.height = "10%";
			document.getElementsByClassName("tooltiptext")[0].style.display = "none";}
			,3000);
		}