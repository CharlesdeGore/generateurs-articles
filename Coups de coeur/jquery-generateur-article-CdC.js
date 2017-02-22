$(function(){

//----------------------------- Menu ------------------------------------//

// cache les sous-menus :
$(".navigation ul.subMenu").hide();  

// remplace l'élément span par un lien :
$(".navigation li.toggleSubMenu span").each( function () {
    $(this).replaceWith('<a href="" class="menu-liens" title=" '+ $(this).text() +' ">' + $(this).text() + '<\/a>') ;
} ) ;   

// Effet accordéon
$(".navigation li.toggleSubMenu > a").click( function () {

    // Si le sous-menu était déjà ouvert, on le referme :
    if ($(this).next("ul.subMenu:visible").length != 0) {
    //retour style enroulé
        $('#toggleAide > a:nth-child(1)').css('border-radius', '15px 15px 15px 15px');

        $(this).next("ul.subMenu").slideUp("normal");
    }
    // Si le sous-menu est caché, on ferme les autres et on l'affiche :
    else {
    //style au déroulé
    $('#toggleAide > a:nth-child(1)').css('border-radius', '15px 15px 0px 0px');

        $(".navigation ul.subMenu").slideUp("normal");
        $(this).next("ul.subMenu").slideDown("normal");
    }
    // On empêche le navigateur de suivre le lien :
    return false;
});       

//----------------------------- Codes introduction ------------------------------------//

//initialisation de l'incrementation 
var increment = 0;

//intro
$('#intro-btn').click(function() {
  var texteintro = $('#intro-generat').val().replace( /\n/g, '<br/>' );
  $('#text-intro-art p').replaceWith('<p>' + texteintro + '</p>');
});

//traitement banniere

var dossierimage
//dossier d'upload
$('#dossier-image-btn').click(function() {
dossierimage = $('#dossier-image').val();

  //afficher div pour saisie du nom de la bannière
  $('#upload-banniere').css('display', 'block').hide().fadeIn(1000);
});

//upload bannière
$('#nom-banniere-btn').click(function() {
  var nomimage = $('#nom-banniere').val();
  $('#bann-art').attr('src', 'http://mediatheque.clamart.fr/images/stories/coups_de_coeur/' + dossierimage + '/' + nomimage);
});

//compteur de caractère carrousel
 count($("#intro-generat"),$("#count"));
      $("#intro-generat").keyup(function() {
         count($("#intro-generat"),$("#count"));
      });

function count(src,dest){
  var txtVal = src.val();
  var words = txtVal.length;
  dest.html(words+' caractères)');
}

//-----------------------------Codes création du coup de coeur------------------------------------//
$('#creer').click(function() {
   $('#cdc-generat'+ increment +'').remove();   
    increment = increment+1;
 $('#start-droite').after('<div id="cdc-generat' + increment +'"><h2 class="titres-generat">Coup de cœur n° '+ increment +'</h2><label for="nom-image">Renseigne le nom exact de l\'image, avec son extension <br/><span style="font-weight : normal; color : #838383; font-size : 12px;" >(exemple : "paniersahistoires.jpg")</span></label><input type="text" id="nom-image'+ increment +'"><button id="nom-image-btn'+ increment +'">OK</button><div id="div-alt" style="margin-bottom : 10px;"><label for="alt-image">Donne une description brève de l\'image <br/><span style="font-weight : normal; color : #838383; font-size : 12px;" >(exemple : "chat roux dans un rayonnage de romans policiers.")</span></label><input type="text" id="alt-image'+ increment +'"><button id="alt-image-btn'+ increment +'">OK</button></div><div style="margin-bottom : 10px;"><label for="titre-document">Titre du document </label><input type="text" id="titre-document-generat'+ increment +'"><button id="titre-document-btn'+ increment +'">OK</button></div><div style="margin-bottom : 10px;"><label for="auteur">Auteur(e)(s)</span></label><input type="text" id="auteur-generat'+ increment +'"><button id="auteur-btn'+ increment +'">OK</button></div><div style="margin-bottom : 10px;"><label>Éditeur(s)</span></label><input type="text" id="editeur-generat'+ increment +'"><button id="editeur-btn'+ increment +'">OK</button></div><div style="margin-bottom : 10px;"><label>Année d\'édition</span></label><input type="text" id="annee-generat'+ increment +'"><button id="annee-btn'+ increment +'">OK</button></div><label for="texte-generat" style="vertical-align:top">Texte du coup de cœur</label><textarea id="texte-generat'+ increment +'" cols="40" rows="5"></textarea><button id="texte-btn'+ increment +'">OK</button><div style="margin-bottom : 10px;"><label>Adresse (URL) du document sur l\'OPAC</span></label><input type="text" id="url-generat'+ increment +'"><button id="url-btn'+ increment +'">OK</button></div></div><div style="margin-bottom : 10px;"><label>Signature</span></label><input type="text" id="signature-generat'+ increment +'"><button id="signature-btn'+ increment +'">OK</button></div>');

 $('#cdc-generat' + increment +'').hide().fadeIn(800);


$('#start-gauche').before('<div id="cdc-' + increment +'"><a id="url'+ increment +'"><img id="img'+ increment +'" src="http://mediatheque.clamart.fr/images/stories/logos/logo_RdMdC-VSGP_thumbnail.jpg" alt="logo Réseau des médiathèques de Clamart" class="img"/><h4 id="titre-cdc'+ increment +'"><span id="titre-document'+ increment +'"><em>Titre,</em></span><span id="auteur'+ increment +'"> Auteur(e)(s).</span><span id="editeur'+ increment +'"> Éditeur(e)(s),</span><span id="annee'+ increment +'"> Année d\'édition.</span></h4></a><p id="texte'+ increment +'">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin faucibus lectus. Maecenas at eleifend neque. Nullam imperdiet ac mi quis viverra. Nullam varius augue in sem auctor vestibulum. Phasellus in enim purus. Fusce aliquet orci non viverra euismod. Vestibulum iaculis massa lacus, a scelerisque lectus luctus ac. Aenean elementum sapien eget velit mattis vestibulum. Aliquam venenatis dui eget magna posuere tincidunt. </p><p id="signature'+increment+'" style="font-size: 0.9em; clear: both;"><em>Signature</em></p><hr /></div>');  

 $('#cdc-' + increment +'').hide().fadeIn(800);

//upload image
$('#nom-image-btn'+ increment +'').click(function() {
  if (dossierimage == undefined) {alert('Complète le champ "Repertoire"')}
  else {
    //afficher div pour saisie du nom de la bannière
  $('#div-alt').css('display', 'block').hide().fadeIn(1000);

  var nomimage = $('#nom-image'+ increment +'').val();
  $('#img'+ increment +'').attr('src', 'http://mediatheque.clamart.fr/images/stories/coups_de_coeur/' + dossierimage + '/' + nomimage);
  }
});

//alt image pour accessibilité
$('#alt-image-btn'+ increment +'').click(function() {
  var alt = $('#alt-image'+ increment +'').val();
  $('#img'+ increment +'').attr('alt', alt);

    //alt ok animation
    $('#altok').remove();
    $('#alt-image-btn'+ increment +'').after('<div id="altok" style="font-weight : normal; color : #838383; font-size : 12px;">'+alt+' est la description ajoutée à l\'image.</div>');
    $('#altok').hide().fadeIn(500);
});

//texte du coup de coeur
$('#texte-btn'+ increment +'').click(function() {
  var texte = $('#texte-generat'+ increment +'').val().replace( /\n/g, '<br/>' );
  $('#texte'+ increment +'').replaceWith('<p id="texte'+ increment +'">' + texte + '</p>');
});

//titre du document
$('#titre-document-btn'+ increment +'').click(function() {
  var titredoc = $('#titre-document-generat'+ increment +'').val();
  $('#titre-document'+ increment +'').replaceWith('<span id="titre-document'+ increment +'"><em>'+ titredoc +',</em></span>');
});

//Auteur
$('#auteur-btn'+ increment +'').click(function() {
  var auteur = $('#auteur-generat'+ increment +'').val();
  $('#auteur'+ increment +'').replaceWith('<span id="auteur'+ increment +'"> '+ auteur +'.</span>');
});

//editeur
$('#editeur-btn'+ increment +'').click(function() {
  var editeur = $('#editeur-generat'+ increment +'').val();
  $('#editeur'+ increment +'').replaceWith('<span id="editeur'+ increment +'"> '+ editeur +',</span>');
});

//Année
$('#annee-btn'+ increment +'').click(function() {
  var annee = $('#annee-generat'+ increment +'').val();
  $('#annee'+ increment +'').replaceWith('<span id="annee'+ increment +'"> '+ annee +'.</span>');
});

//url doc
$('#url-btn'+ increment +'').click(function() {
  var urldoc = $('#url-generat'+ increment +'').val();
  $('#url'+ increment +'').attr('href', urldoc);
});

//signature
$('#signature-btn'+ increment +'').click(function() {
  var signature = $('#signature-generat'+ increment +'').val();
  $('#signature'+ increment +'').replaceWith('<p id="signature'+increment+'" style="font-size: 0.9em; clear: both;"><em>'+ signature +'</em></p>');
});

//(positionnement footer reactualisté après generation CdC)
$('footer').css('position', 'static');

});
//----------------------------- Fin codes création du coup de coeur------------------------------------//


//Rénitialiser le formulaire
$('#raz').click(efface_formulaire);

function efface_formulaire () {
location.reload(true);
}

//le code html en texte
$('#afficher-code').click(function() {
  $('#start-gauche').remove();
  var codehtml = $('#gauche').html();
  $('#lecode').replaceWith('<textarea id="lecode" style="display:block;" cols="40" rows="15">'+codehtml+'</textarea>').fadeIn(2000);
  $('#afficher-code').hide().fadeOut(1000);  

  //afficher le code et bouton copier dans le presse papier
  $('#lecode').css('display', 'block').hide().fadeIn(1000);
  $('#presspap').css('display', 'block').hide().fadeIn(1000);
  
  //copier dans le presse papier
  $('#presspap').click(function() {

  toCopy = $('#lecode')

	toCopy.select();
	document.execCommand( 'copy' );

  //animation texte copié
  $('#lecode').before('<div id="copiedtext">C\'est copié !</span>');
  $('#copiedtext').hide().fadeIn(500);
  });

  //(positionnement footer reactualisté après generation code)
  $('footer').css('position', 'static');

});

});