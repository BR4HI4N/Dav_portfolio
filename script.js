let menuVisible = false;
//ocultar y mostrar menu
function mostrarOcultarMenu(){
	if(menuVisible){
		document.getElementById("nav").classList ="";
		menuVisible = false;
	}else{
		document.getElementById("nav").classList ="responsive";
		menuVisible = true;
	}
}


function seleccionar(){
	//se oculta menu al selecionar
	document.getElementById("nav").classList ="";
	menuVisible = false;
}

//funcion animacion habilidades
	function efectoHabilidades(){
		let hab = document.getElementById("habilidades");
		let distancia_hab = window.innerHeight - hab.getBoundingClientRect().top;
		if (distancia_hab >= 300){
			let habilidades = document.getElementsByClassName("progreso");
			habilidades[0].classList.add("javascript");
			habilidades[1].classList.add("css");
			habilidades[2].classList.add("html");
			habilidades[3].classList.add("inglés");
			habilidades[4].classList.add("comunicación");
			habilidades[5].classList.add("trabajoEnEquipo");
			habilidades[6].classList.add("dedicación");

		}
	}

//scrolling para aplicar animacion

window.onscroll = function(){
	efectoHabilidades();
}
