function texte() {
    // prend la valeur du champ
    var input = document.getElementById("texte").value;
    // inverser
    inverser = input.split('').reverse().join('');
    div = document.getElementById('renverser');
    // Test si il y a quelque chose dans la boite
    if(input==""){
    	alert("Veuillez Entrez Votre Texte!");
    	document.getElementById('texte').focus;
      return false;
      }
      else{
          div.innerText = inverser;
          }	
    }
