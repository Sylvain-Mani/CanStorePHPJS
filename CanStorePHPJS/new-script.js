// var qui va contenir les produit
var products;

// ajout du fichier json dans la var product 
// fetch pour eviter les erreur
fetch('produits.php').then(function (response) {
  if (response.ok) {
    response.json().then(function (json) {
      products = json;
      initialize();
    });
  } else {
    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
  }
});



function initializeBD() {

}

