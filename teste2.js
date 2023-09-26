  // JavaScript aqui
        document.addEventListener("DOMContentLoaded", function() {
            // Elementos de controle
            const scrollButton = document.getElementById("scroll-button");
            const printButton = document.getElementById("print-button");
            const zoomInButton = document.getElementById("zoom-in-button");
            const zoomOutButton = document.getElementById("zoom-out-button");
            const pdfIframe = document.querySelector(".pdf-container iframe");
            const maisVelocidadeButton = document.getElementById("mais-velocidade");
            const menosVelocidadeButton = document.getElementById("menos-velocidade");

            // Função para ativar/desativar a rolagem automática
            let isAutoScrollEnabled = false;
            let scrollInterval;
            let scrollSpeed = 5; // Velocidade padrão

            scrollButton.addEventListener("click", function() {
                isAutoScrollEnabled = !isAutoScrollEnabled;
                if (isAutoScrollEnabled) {
                    // Iniciar a rolagem automática com a velocidade atual
                    scrollInterval = setInterval(function() {
                        pdfIframe.contentWindow.scrollBy(0, -scrollSpeed); // Ajuste o valor conforme necessário
                    }, 50); // Intervalo fixo
                    pdfIframe.parentNode.style.overflow = 'auto'; // Ativa a barra de rolagem
                } else {
                    // Parar a rolagem automática
                    clearInterval(scrollInterval);
                    pdfIframe.parentNode.style.overflow = 'hidden'; // Desativa a barra de rolagem
                }
            });

            // Função para imprimir a página
            printButton.addEventListener("click", function() {
                // Imprimir o iframe (PDF)
                pdfIframe.contentWindow.print();
            });

            // Funções para aumentar e diminuir o zoom do iframe
            let currentZoom = 1;
            zoomInButton.addEventListener("click", function() {
                currentZoom += 0.1;
                pdfIframe.style.transform = `scale(${currentZoom})`;
            });

            zoomOutButton.addEventListener("click", function() {
                currentZoom -= 0.1;
                pdfIframe.style.transform = `scale(${currentZoom})`;
            });

            // Botão "Mais Velocidade" aumenta a velocidade de rolagem
            maisVelocidadeButton.addEventListener("click", () => {
                scrollSpeed += 1;
            });

            // Botão "Menos Velocidade" reduz a velocidade de rolagem
            menosVelocidadeButton.addEventListener("click", () => {
                scrollSpeed -= 1;
                if (scrollSpeed < 1) {
                    scrollSpeed = 1;
                }
            });
        });