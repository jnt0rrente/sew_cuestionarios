class Checker {

    corregirGrupo(num) {
        var groupId = "g" + num;

        var soluciones = new Soluciones(num).getArray();
        var respuestas = new Array();

        for (var i = 0; i < soluciones.length; i++) {
            var idPregunta = groupId + "s" + (i+1);
            var respuesta = $("input[name="+idPregunta+"]:checked").val();
            if (respuesta == undefined) {
                respuesta = "none";
            }
            respuestas.push(respuesta);


            $("#"+idPregunta).removeClass("correcta");
            $("#"+idPregunta).removeClass("incorrecta");

            if (respuesta === soluciones[i]) {
                $("#"+idPregunta).addClass("correcta");

                
            } else {
                $("#"+idPregunta).addClass("incorrecta");
                var p = document.createElement("p");
                p.innerText = "Solución: " + soluciones[i];
                $("#"+idPregunta).append(p)
            }
        }
    }

    

    resetAll() {
        this.resetGrupo(1);
        this.resetGrupo(2);
        this.resetGrupo(3);
    }

    resetGrupo(num) {
        var groupId = "g" + num;
        for (var i = 0; i < 30; i++) {            
            var idPregunta = groupId + "s" + (i+1);
            $("#"+idPregunta).removeClass("correcta");
            $("#"+idPregunta).removeClass("incorrecta");
            $("p").remove()
        }
        console.log("#"+groupId + " reseteado")
        $("#"+groupId).trigger("reset");  
    }
}

checker = new Checker();