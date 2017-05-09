$(document).ready(function(){


//---------------------EXO 1-------------------------------------------------------//
var comp;
var win=0;
var loose=0;
var egal=0;
var pwin=0;
var ploose=0;
var total=0;


  $("#launch").click(function(){

  var rand = Math.floor((Math.random() * 3) + 1);
  var user = $("#select").val();

  var total=win+loose+egal;
  var pwin=Math.round((win *100)/total);
  var ploose=Math.round((loose *100)/total);

  switch (rand) {
    case 1:
      comp ="pierre";
      break;

    case 2:
      comp = "feuille";
      break;

    case 3:
      comp = "ciseaux";
      break;
  }

        if((user == 1) && (rand == 1)){
            egal++;
            $("#result").html('<p>vous : pierre</p><p>l\'ordi : '+comp+'</p><h4>égalité !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }

        else if((user == 1) && (rand == 2)){
          loose++;
          $("#result").html('<p>vous : pierre</p><p>l\'ordi : '+comp+'</p><h4>perdu !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }
        else if((user == 1) && (rand == 3)){
          win++;
          $("#result").html('<p>vous : pierre</p><p>l\'ordi : '+comp+'</p><h4>gagné !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }

        else if((user == 2) && (rand == 1)){
          win++;
          $("#result").html('<p>vous : feuille</p><p>l\'ordi : '+comp+'</p><h4>gagné !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }
        else if((user == 2) && (rand == 2)){
          egal++;
          $("#result").html('<p>vous : feuille</p><p>l\'ordi : '+comp+'</p><h4>égalité !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }
        else if((user == 2) && (rand == 3)){
          loose++;
          $("#result").html('<p>vous : feuille</p><p>l\'ordi : '+comp+'</p><h4>perdu !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }
        else if((user == 3) && (rand == 1)){
          loose++;
          $("#result").html('<p>vous : ciseaux</p><p>l\'ordi : '+comp+'</p><h4>perdu !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }
        else if((user == 3) && (rand == 2)){
          win++;
          $("#result").html('<p>vous : ciseaux</p><p>l\'ordi : '+comp+'</p><h4>gagné !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }
        else{
          egal++;
          $("#result").html('<p>vous : ciseaux</p><p>l\'ordi : '+comp+'</p><h4>égalité !</h4><p>win : '+pwin+'%</p><p> loose : '+ploose+'%</p>');
        }

  });

//--------------------------------EXO 2-----------------------------------------------//



  $("#submit").click(function(){

    var sal=$("#salaire").val();
    var gen=$("#genre").val();
    var enf=$("#enfant").val();

    var charge=(18 * sal)/100;
    var ass=(7 * sal)/100;
    var cot=(5 * sal)/100;


    var salrestant=sal-charge-ass-cot;
    var salfinal;

    if((enf==3) && (gen=="homme")){
      salfinal=salrestant+(1 * salrestant)/100;
      $("#result2").text('Le salaire après déduction des charges est de : '+salfinal+' euros.');
    }
    else if((enf==4) && (gen=="homme")){
      salfinal=salrestant+(2 * salrestant)/100;
      $("#result2").text('Le salaire après déduction des charges est de : '+salfinal+' euros.');
    }
    else if((enf<3) && (gen=="femme")){
      salfinal=salrestant+(2 * salrestant)/100;
      $("#result2").text('Le salaire après déduction des charges est de : '+salfinal+' euros.');
    }
    else if((enf==3) && (gen=="femme")){
      salfinal=salrestant+(3 * salrestant)/100;
      $("#result2").text('Le salaire après déduction des charges est de : '+salfinal+' euros.');
    }
    else if((enf==4) && (gen=="femme")){
      salfinal=salrestant+(4 * salrestant)/100;
      $("#result2").text('Le salaire après déduction des charges est de : '+salfinal+' euros.');
    }
    else{
      salfinal=salrestant;
      $("#result2").text('Le salaire après déduction des charges est de : '+salfinal+' euros.');
    }

  });
//--------------------------------EXO 3----------------------------------------------------//
    $("#submit2").click(function(){


        var name = $("#nom").val();
        var surname = $("#prenom").val();
        var email = $("#mail").val();
        var tel = $("#tel").val();

        var regexname = new RegExp("^[a-zA-Z|_|-]+$");
        var regexsurname = new RegExp("^[a-zA-Z|_|-]+$");
        var regexemail = new RegExp("^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})+$");
        var regextel = new RegExp("^[0-9]+$");


            if (regexname.test(name)) {
              $("#returnom").text('format correct');
            }
            else {
              $("#returnom").text('format incorrect');
            }

            if (regexsurname.test(surname)) {
              $("#returnprenom").text('format correct');
            }
            else {
              $("#returnprenom").text('format incorrect');
            }

            if (regexemail.test(email)) {
              $("#returnmail").text('format correct');
            }
            else {
              $("#returnmail").text('format incorrect');
            }

            if (regextel.test(tel)) {
              $("#returntel").text('format correct');
            }
            else {
              $("#returntel").text('format incorrect');
            }

    });

//-----------------------EXO 4-------------------------------------//

    $("#submit3").click(function(){

      var name1 = $("#nom1").val();
      var surname1 = $("#prenom1").val();
      var date = $("#date").val();
      var lieu = $("#lieu").val();
      var taf = $("#taf").val();
      var soc = $("#soc").val();

    $("#result3").text(surname1+' '+name1+', né(e) le '+date+' à '+lieu+', actuellement '+taf+' à '+soc+'.');

  });




});
