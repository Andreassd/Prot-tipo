function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const target = document.getElementById(screenId);
    const logoContainer = document.getElementById("logoContainer");

    if (target) {
        target.classList.add('active');

        // Telas que devem mostrar a logo
        const telasComLogo = [
            "login",
            "dashboardPaciente",
            "dashboardProfissional",
            "dashboardAdministrativo"
        ];

        if (telasComLogo.includes(screenId)) {
            logoContainer.style.display = "block";
        } else {
            logoContainer.style.display = "none";
        }
    } else {
        document.getElementById('login').classList.add('active');
        logoContainer.style.display = "block"; // Mostra logo ao redirecionar para login
        console.error(`Tela "${screenId}" não encontrada. Redirecionando para login.`);
    }
}
