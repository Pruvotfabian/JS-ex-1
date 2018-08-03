var poire= document.getElementById("poire");
var nom = prompt("Ton Nom Bouffon !!!");
if ( nom == "Pruvot"){
         console.log("nom correct");
         poire.innerHTML = nom + " Bienvenues =)";
        poire.style.color = "green";
     }  
else if( nom !== "Pruvot" ){
        console.log("i est négative");
        poire.innerHTML = nom + " négatif";
        poire.style.color = "red";
    }
