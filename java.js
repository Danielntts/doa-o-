document.getElementById("copy-button").addEventListener("click", function() {
    const emailText = document.getElementById("email-text").textContent;
    navigator.clipboard.writeText(emailText).then(() => {
        const copiedMessage = document.getElementById("copied-message");
        copiedMessage.classList.remove("hidden");

        // Ocultar a mensagem de "Copiado!" após 2 segundos
        setTimeout(() => {
            copiedMessage.classList.add("hidden");
        }, 2000);
    });
});