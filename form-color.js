formulario = document.getElementById('text');
cambiar = document.getElementById('write');

manejador = function(e){
	cambiar.style.backgroundColor = this.value;
}

formulario.addEventListener('input', manejador);