$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3002/equipes',
        success: function (listTeams) {
            
            for (var i = 0; i < listTeams.length; i++) {
                console.log(listTeams);
                //récupere les équipes
                var teams = "";
                
                    if(listTeams.id === 1){
                        teams = flag + pays;
                    }
                // Affiche dans le Html les équipes
                $('#teams').append('<article class="col-md-2 m-3 border"><p><a href="" data-toggle="modal" data-target="#exampleModal"><img class="w-100" src="' + listTeams[i].flag+ '" /></a><h2 class="nom_pays text-center text-primary">'  + listTeams[i].pays + '</h2> </p></article>');
                
            };
            
        },
        error: function (resultat, statut, erreur) {

            alert('ERROR 404');
        }
    });
});