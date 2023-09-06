function formValidation()
{
    var uid = document.registration.userid;
    var salasanaid = document.registration.salasanaid;
    var knimi = document.registration.knimi;
    var osoite = document.registration.osoite;
    var maa = document.registration.maa;
    var postiosoite = document.registration.postiosoite;
    var sposti = document.registration.sposti;
    var mies = document.registration.mies;
    var nainen = document.registration.nainen; if(userid_validation(uid,5,12))
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
