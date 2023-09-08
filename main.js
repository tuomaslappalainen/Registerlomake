


function formValidation(){


    var x = document.forms["registration"]["osoite"].value;
    var z = document.forms["registration"]["kayttajaid"].value;
    var c = document.forms["registration"]["salasanaid"].value;
    var v = document.forms["registration"]["kayttajanimi"].value;
    var b = document.forms["registration"]["zip"].value;
    var n = document.forms["registration"]["email"].value;
   
    if (x == "") {
    alert("Osoite puuttuu");
    return false;
    }

     if (z == "") {
    alert("Käyttäjä ID puuttuu");
    return false;

     }

     if (c == "") {
    alert("Salasana puuttuu");
    return false;

     }

     if (v == "") {
    alert("Nimi puuttuu");
    return false;

     }

     if (b == "") {
    alert("Postinumero puuttuu");
    return false;

     }

     if (n == "") {
    alert("Sähköposti puuttuu");
    return false;

     }
  
    if(userid_validation(uid,5,12))
    {
        if(salasanaid_validation(salasanaid,7,12))
        {
            if(allLetter(knimi))
            {
                if(alphanumeric(osoite))
                {
                    if(countryselect(maa))
                    {
                        if(allnumeric(postiosoite))
                        {
                            if(ValidateEmail(sposti))
                            {
                                if(validspuoli(mies,nainen))
                                {
                                  
                                }
                            }
                        }
                    }
                }
            }
        }

    }

return false;
      alert('Lomnake lähetetty onnistuneesti');  

}
