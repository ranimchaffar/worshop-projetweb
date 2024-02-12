/*function validerDateOfBirth(){
    var elementDate = 
    document.getElementById("date_naissance")
    var elementValue = new Date(elementDate.value) ;
    const dateAujourdhui= new Date();
    if(elementValue>=dateAujourdhui)
    {
        alert("Please select a correct date that is before today");
        }
        else {
            alert("Date is valid");
        }
}*/

var formElement = document.getElementById("form") 
formElement.addEventListener("submit", function(event){
    event.preventDefault()
    validateForm()

}) 


function validateForm(){
    
    var nameInput = document.getElementById("nom");
    var nameError = document.getElementById("nameError");
    var nameValue = nameInput.value.trim(); 
    var prenomInput = document.getElementById("prenom");
    var prenomError = document.getElementById("prenomError");
    var prenomValue = prenomInput.value.trim(); 

    var mailInput = document.getElementById("mail");
    var mailError = document.getElementById("mailError");
    var mailValue = mailInput.value.trim(); 

    var telInput = document.getElementById("telephone");
    var telError = document.getElementById("telError");
    var telValue = telInput.value.trim();

    var dateInput = document.getElementById("dateNaissance");
    var dateError = document.getElementById("dateError");
    var dateValue = dateInput.value; 

    var mdpInput = document.getElementById("password");
    var mdpError = document.getElementById("mdpError");
    var mdpValue = mdpInput.value.trim();
    
    if (nameValue === "" || !/^[a-zA-Z]+$/.test(nameValue)) {
        nameError.textContent = "Nom ne doit contenir que des lettres et doit avoir au moins 1 caractère";
    } else {
        nameError.textContent = "correct";
        nameError.style.color = "green";
    }

   
    if (prenomValue === "" || !/^[a-zA-Z]+$/.test(prenomValue)) {
        prenomError.textContent = "Prénom doit contenir au moins 1 caractère et ne doit contenir que des lettres";
    } else {
        prenomError.textContent = "correct";
        prenomError.style.color = "green";
    }

   //num tel
    if (!/^\d{8}$/.test(telValue)) {
        telError.textContent = "Numéro de téléphone doit contenir exactement 8 chiffres";
    } else {
        telError.textContent = "correct";
        telError.style.color = "green";

        
    }

    //la date de naissance
    var birthDate = new Date(dateValue);
    var today = new Date();
    if (isNaN(birthDate) || birthDate >= today) {
        dateError.textContent = "La date de naissance doit être une date valide et antérieure à aujourd'hui";
    } else {
        dateError.textContent = "correct";
        dateError.style.color = "green";

    }

    //  mot de passe
    if (mdpValue.length < 8 || !/[0-9]/.test(mdpValue) || !/[a-z]/.test(mdpValue) || !/[A-Z]/.test(mdpValue)) {
        mdpError.textContent = "Le mot de passe doit contenir au moins 8 caractères, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule";
    } else {
        mdpError.textContent = "correct";
        mdpError.style.color = "green";
    }
}
var mailInput = document.getElementById("mail");
var mailError = document.getElementById("mailError");

mailInput.addEventListener("keyup", function() {
    var mailValue = mailInput.value.trim(); 

    // l'email
    if (!isValidEmail(mailValue)) {
        mailError.textContent = "Email invalide. Veuillez saisir une adresse email valide avec '@esprit.tn'";
        mailError.style.color = "red";
    } else {
        mailError.textContent = "Correct";
        mailError.style.color = "green";
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.includes("@esprit.tn");
}