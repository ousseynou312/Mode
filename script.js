const form = document.getElementById("invitationForm");

const invitationSection =
    document.getElementById("invitation");

const invitationResult =
    document.getElementById("invitationResult");

const guestName =
    document.getElementById("guestName");

const guestEmail =
    document.getElementById("guestEmail");

const qrCode =
    document.getElementById("qrcode");

const invitationId =
    document.getElementById("invitationId");

const newInvitation =
    document.getElementById("newInvitation");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Récupération des informations

    const prenom =
        document.getElementById("prenom").value.trim();

    const nom =
        document.getElementById("nom").value.trim();

    const email =
        document.getElementById("email").value.trim();


    // Création d'un identifiant

    const id =
        "MZ-" +
        Date.now().toString(36).toUpperCase() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 7)
            .toUpperCase();


    // Afficher les informations

    guestName.textContent =
        prenom + " " + nom;

    guestEmail.textContent =
        email;

    invitationId.textContent =
        "ID INVITATION : " + id;


    // Nettoyer le QR précédent

    qrCode.innerHTML = "";


    // Informations du QR

    const qrData = JSON.stringify({

        invitation_id: id,

        nom: nom,

        prenom: prenom,

        email: email,

        evenement: "Défilé de Mode Moulandzaou",

        date: "29 août",

        heure: "14H00",

        lieu: "La Villa 13A"

    });


    // Génération du QR

    new QRCode(qrCode, {

        text: qrData,

        width: 160,

        height: 160,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.L

    });


    // Masquer le formulaire

    invitationSection.style.display = "none";


    // Afficher la carte

    invitationResult.style.display = "block";


    // Aller à la carte

    invitationResult.scrollIntoView({
        behavior: "smooth"
    });

});


/*
    Retour au formulaire
*/

newInvitation.addEventListener("click", function () {

    invitationResult.style.display = "none";

    invitationSection.style.display = "block";

    document
        .getElementById("prenom")
        .value = "";

    document
        .getElementById("nom")
        .value = "";

    document
        .getElementById("email")
        .value = "";

    invitationSection.scrollIntoView({
        behavior: "smooth"
    });

});
