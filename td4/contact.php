<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
</head>
<body>

<?php
// Vérifier si des données ont été envoyées
if (isset($_GET['nom']) && isset($_GET['prenom']) && isset($_GET['email']) && isset($_GET['telephone']) && isset($_GET['message'])) {
    // Vérifier si des données ont été envoyées, mais aussi si elles ne sont pas vides
    if (!empty($_GET['nom']) && !empty($_GET['prenom']) && !empty($_GET['email']) && !empty($_GET['telephone']) && !empty($_GET['message'])) {
        // Afficher les données dans un tableau
        echo "<h2>Informations reçues :</h2>";
        echo "<table border='1'>";
        echo "<tr><td>Nom</td><td>{$_GET['nom']}</td></tr>";
        echo "<tr><td>Prénom</td><td>{$_GET['prenom']}</td></tr>";
        echo "<tr><td>Email</td><td>{$_GET['email']}</td></tr>";
        echo "<tr><td>Téléphone</td><td>{$_GET['telephone']}</td></tr>";
        echo "<tr><td>Message</td><td>{$_GET['message']}</td></tr>";
        echo "</table>";
    } else {
        echo "Champs manquants";
    }
} else {
    echo "Aucune donnée reçue.";
}
?>

</body>
</html>
