
    window.onload = function () {

        document.querySelector("#calc").addEventListener("click", function(){
            
            let peso = document.querySelector("#peso-atual");
            let altura = document.querySelector("#altura-atual");
            let historico = document.querySelector("#historico");

            if (peso.value != "" || peso.value != false) {
                peso.style.boxShadow = "none";

                if (altura.value != "" || altura.value != false) {                    
                    
                    if (altura.value.indexOf(".") != -1) {
                        document.querySelector('#titulo-dados').insertAdjacentHTML("afterend", "<p class='erro'>Não utilize pontos ou virgulas na altura</p>");

                    } else {
                        let imc = peso.value / ((altura.value/100) ** 2);

                        if (isNaN(imc) || imc == false) {
                            document.querySelector('#titulo-dados').insertAdjacentHTML("afterend", "<p class='erro'>Verifique se os dados estão corretos</p>");
                        } else {
                            imc = imc.toFixed(1);
                            resultadoImc(imc);
                            let erros = document.querySelectorAll('.erro');
                            for (let i = 0; i < erros.length; i++) {
                                erros[i].innerText = ""
                            }
                            historico.innerHTML = "<div>"+imc+"</div>";
                            altura.style.boxShadow = "none";
                            peso.style.boxShadow = "none";

                            
                        }
                    }
                    
                } else {
                    altura.style.boxShadow = "0 0 10px red"
                }
            } else {
                peso.style.boxShadow = "0 0 10px red"
            }           
        });

        document.querySelector("#limpar").addEventListener("click", function() {
            document.querySelector("#peso-atual").value = "";
            document.querySelector("#altura-atual").value = "";
            document.querySelector("#resultado").innerText = "As informações sobre seu imc aparecerão aqui"
        });

    }

    function resultadoImc(imc) {

        let html = "<p>Seu IMC é de "+imc+"</p>";

        if (imc < 16) {
            html += "<p>Pode enterrar</p>";  
        }else if (imc >= 16 && imc <=16.9) {
            html += "<p>Muito abaixo do peso</p>";  
        } else if (imc >= 17 && imc <= 18.4) {
            html += "<p>Abaixo do peso</p>"; 
        }else if (imc >= 18.5 && imc <= 24.9) {
            html += "<p>Peso normal</p>";
        }else if (imc >= 25 && imc <= 29.9) {
            html += "<p>Acima do peso</p>";
        }else if (imc >= 30 && imc <= 34.9) {
            html += "<p>Obesidade Grau 1</p>";
        }else if (imc >= 35 && imc <= 40) {
            html += "<p>Obesidade Grau 2</p>";
        }else {
            html += "<p>Obesidade Grau 3</p>";
        }

        document.querySelector("#resultado").innerHTML = html;
    }
    

