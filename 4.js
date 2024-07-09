
        function contador() {
            let palabra = document.getElementById('inputPalabra').value.toLowerCase();
            let contadorLetra = {};
            let i = 0;

            while (i < palabra.length) {
                let letra = palabra[i];
                if (contadorLetra[letra]) {
                    contadorLetra[letra]++;
                } else {
                    contadorLetra[letra] = 1;
                }
                i++;
            }

            let resultDiv = document.getElementById('resultado');
            resultDiv.innerHTML = '<h2>Contiene:</h2>';
            for (let letra in contadorLetra) {
                let contador = contadorLetra[letra];
                let contadorTexto = contador === 1 ? 'una' : contador === 2 ? 'dos' : contador === 3 ? 'tres' :contador;
                resultDiv.innerHTML += `<p>${contadorTexto} '${letra}'</p>`;
            }
        };
