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

//-----------------------------Codes création de l'article------------------------------------//

//intro
$('#intro-btn').click(function() {
  var texteintro = $('#intro-generat').val().replace( /\n/g, '<br/>' );
  $('#text-intro p').replaceWith('<p>' + texteintro + '</p>');
});

//traitement image

var dossierimage
//dossier d'upload
$('#dossier-image-btn').click(function() {
dossierimage = $('#dossier-image').val();

  //afficher div pour saisie du nom de l'image
  $('#upload-image').css('display', 'block');
});



//upload image
$('#nom-image-btn').click(function() {
  var nomimage = $('#nom-image').val();
  $('#img').attr('src', 'http://mediatheque.clamart.fr/images/stories/Action_culturelle/' + dossierimage + '/' + nomimage);

});


//alt image pour accessibilité
$('#alt-image-btn').click(function() {
  var alt = $('#alt-image').val();
  $('#img').attr('alt', alt);
});

//insérer le titre
$('#titre-btn').click(function() {
  var titre = $('#titre-generat').val();
  $('#titre h4').replaceWith('<h4>' + titre + '</h4>');
});



//insérer le type d'animation
$('#type-btn').click(function() {
  var type = $('#type').val();
  $('#titre h3').replaceWith('<h3>' + type + '</h3>');
});


//insérer le texte
$('#texte-btn').click(function() {
  var texte = $('#texte-generat').val().replace( /\n/g, '<br/>' );
  $('#texte p').replaceWith('<p>' + texte + '</p>');
});

//public
$('#public-generat').change(function() {

    var publicgenerat = $('#public-generat option:selected').val();

  if (publicgenerat == 'De 0 à 3 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>');
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/0-3-ans').attr('title', 'Plus d\'animations consacrées aux 0-3 ans');
}

  else if (publicgenerat == 'Dès 3 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/3-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 3 ans et plus');

}

  else if (publicgenerat == 'Dès 5 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/3-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 3 ans et plus');
}

  else if (publicgenerat == 'De 5 à 7 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/3-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 3 ans et plus');
}

  else if (publicgenerat == 'Dès 6 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/6-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 6 ans et plus');
}

  else if (publicgenerat == 'Dès 7 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/6-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 6 ans et plus');
}

  else if (publicgenerat == 'Dès 8 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/6-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 6 ans et plus');
}

  else if (publicgenerat == 'De 8 à 12 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/6-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 6 ans et plus');
}

  else if (publicgenerat == 'De 8 à 15 ans') {
  $('#public .sprite').css('background-position',  'bottom');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-jeunes-publics/6-ans-et-plus').attr('title', 'Plus d\'animations consacrées aux 6 ans et plus');
}

  else if (publicgenerat == 'Tout public') {
  $('#public .sprite').css('background-position',  'top');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-tout-public').attr('title', 'Plus d\'animations tout public');

}
  else if (publicgenerat == 'Adulte') {
  $('#public .sprite').css('background-position',  'center');
  $('#public p').replaceWith('<p>' + publicgenerat + '</p>'); 
  $('#lien-cat-public').attr('href', 'http://mediatheque.clamart.fr/agenda2/animations-public-adulte').attr('title', 'Plus d\'animations adultes');
}

});

//horaires
$('#horaires-btn').click(function() {
  var horaires = $('#horaires-generat').val().replace( /\n/g, '<br />' );
  $('#horaires p').replaceWith('<p>' + horaires + '</p>');
});

//réservation conseillée?

$('#resa-generat').change(function() {

var resa = $('input[type=radio][name=resa]:checked').attr('value');

if (resa == 'non') {
  $('#resa-span').css('display', 'none');  
}

if (resa == 'oui') {
  $('#resa-span').css('display', 'inline');  
}

});

//médiathèques

$('#mediat-generat').change(function() {

    var mediatcgenerat = $('#mediat-generat option:selected').val();


  if (mediatcgenerat == 'FM') {
  $('#dates').replaceWith('<div id="dates" class="centre-horizontal">  <div id="FM"><a href="/pratique/venir#FM" title="Venir à la médiathèque François Mitterrand"><img src="http://mediatheque.clamart.fr/images/stories/logos/picto_mitterrand-mini.png" alt="Logo François Mitterrad" width="250" /></a> <strong id="texte-horaires1"></strong> </div></div>'); 
  $('#mediat-logo').after(' <div style="margin-bottom : 15px;" id="dates-generat-div-fm">        <label for="dates-generat">Date(s) François Mitterrad</label>        <textarea id="dates-generat" cols="40" rows="2"></textarea>        <button id="dates-btn">OK</button>        </div>');
  $('#img').css('border',  '2px solid #829C17');
  $('#dates-generat-div-bu').remove();
  $('#dates-generat-div-jp').remove();
  $('#dates-generat-div-fo').remove();
  $('#dates-generat-div1').remove();
  $('#dates-generat-div2').remove();

}

  if (mediatcgenerat == 'BU') {
  $('#dates').replaceWith('<div id="dates" class="centre-horizontal">  <div id="BU"><a href="/pratique/venir#BU" title="Venir à la médiathèque La Buanderie"><img src="http://mediatheque.clamart.fr/images/stories/logos/picto_buanderie-mini.png" alt="Logo La Buanderie" width="250" /></a>  <strong id="texte-horaires1"></strong> </div></div>'); 
  $('#mediat-logo').after(' <div style="margin-bottom : 15px;" id="dates-generat-div-bu">        <label for="dates-generat">Date(s) La Buanderie</label>        <textarea id="dates-generat" cols="40" rows="2"></textarea>        <button id="dates-btn">OK</button>        </div>');
  $('#img').css('border',  '2px solid #ED7E12');
  $('#dates-generat-div-fm').remove();
  $('#dates-generat-div-jp').remove();
  $('#dates-generat-div-fo').remove();
  $('#dates-generat-div1').remove();
  $('#dates-generat-div2').remove();
}

  if (mediatcgenerat == 'JP') {
  $('#dates').replaceWith('<div id="dates" class="centre-horizontal">  <div id="JP"><a href="/pratique/venir#JP" title="Venir à la bibliothèque du Jardin Parisien"><img src="http://mediatheque.clamart.fr/images/stories/logos/picto_jp-mini.png" alt="Logo Jardin Parisien" width="250" /></a>  <strong id="texte-horaires1"></strong> </div></div>'); 
  $('#mediat-logo').after(' <div style="margin-bottom : 15px;" id="dates-generat-div-jp">        <label for="dates-generat">Date(s) Jardin Parisien</label>        <textarea id="dates-generat" cols="40" rows="2"></textarea>        <button id="dates-btn">OK</button>        </div>');
  $('#img').css('border',  '2px solid #742982');
    $('#dates-generat-div-bu').remove();
  $('#dates-generat-div-fm').remove();
  $('#dates-generat-div-fo').remove();
  $('#dates-generat-div1').remove();
  $('#dates-generat-div2').remove();
}

  if (mediatcgenerat == 'FO') {
  $('#dates').replaceWith('<div id="dates" class="centre-horizontal">  <div id="FO"><a href="/pratique/venir#FO" title="Venir à la bibliothèque de la Fourche"><img src="http://mediatheque.clamart.fr/images/stories/logos/picto_fourche-mini.png" alt="Logo Fourche" width="250" />  </a><strong id="texte-horaires1"></strong> </div></div>'); 
  $('#mediat-logo').after(' <div style="margin-bottom : 15px;" id="dates-generat-div-fo">        <label for="dates-generat">Date(s) Fourche</label>        <textarea id="dates-generat" cols="40" rows="2"></textarea>        <button id="dates-btn">OK</button>        </div>');
  $('#img').css('border',  '2px solid #AD002E');
      $('#dates-generat-div-bu').remove();
  $('#dates-generat-div-fm').remove();
  $('#dates-generat-div-jp').remove();
  $('#dates-generat-div1').remove();
  $('#dates-generat-div2').remove();
}

  if (mediatcgenerat == 'FM+BU') {
  $('#dates').replaceWith('<div id="dates" class="centre-horizontal">  <div id="FM"><a href="/pratique/venir#FM" title="Venir à la médiathèque François Mitterrand"><img src="http://mediatheque.clamart.fr/images/stories/logos/picto_mitterrand-mini.png" alt="Logo François Mitterrad" width="190" /></a>  <strong id="texte-horaires2"></strong> </div><div id="BU"><a href="/pratique/venir#BU" title="Venir à la médiathèque La Buanderie"><img src="http://mediatheque.clamart.fr/images/stories/logos/picto_buanderie-mini.png" alt="Logo La Buanderie" width="190" />  </a><strong id="texte-horaires3"></strong> </div></div>'); 
  $('#mediat-logo').after(' <div style="margin-bottom : 10px;" id="dates-generat-div1">        <label for="dates-generat1">Dates François Mitterrand</label>        <textarea id="dates-generat1" cols="40" rows="2"></textarea>        <button id="dates-btn1">OK</button>        </div>');
  $('#dates-generat-div1').after(' <div style="margin-bottom : 15px;" id="dates-generat-div2">        <label for="dates-generat1">Dates La Buanderie</label>        <textarea id="dates-generat2" cols="40" rows="2"></textarea>        <button id="dates-btn2">OK</button>        </div>');
  $('#img').css({ "border-left": "2px solid #829C17", "border-top": "2px solid #829C17", "border-right": "2px solid #ED7E12" , "border-bottom": "2px solid #ED7E12" }) ;
  $('#dates-generat-div-fm').remove();
  $('#dates-generat-div-bu').remove();
  $('#dates-generat-div-fm').remove();
  $('#dates-generat-div-jp').remove();
  $('#dates-generat-div-fo').remove();
}

});

//dates

//mediatheques seule

//FM
$("#droite").on("click", "#dates-btn", function() {

var dates = $('#dates-generat').val().replace( /\n/g, '<br/>' );
  $('#texte-horaires1').replaceWith('<p><strong>' + dates + '</strong></p>');
  $('#dates-generat-div').remove();

  });

//FM double
$("#droite").on("click", "#dates-btn1", function() {

var dates = $('#dates-generat1').val().replace( /\n/g, '<br/>' );
  $('#texte-horaires2').replaceWith('<p><strong>' + dates + '</strong></p>');
  $('#dates-generat-div1').remove();

  });

//BU double
$("#droite").on("click", "#dates-btn2", function() {

var dates = $('#dates-generat2').val().replace( /\n/g, '<br/>' );
  $('#texte-horaires3').replaceWith('<p><strong>' + dates + '</strong></p>');
  $('#dates-generat-div2').remove();

  });


//Rénitialiser le formulaire
$('#raz').click(efface_formulaire);

function efface_formulaire () {
location.reload(true);
}

//le code html en texte
$('#afficher-code').click(function() {
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

});

//(positionnement footer reactualisté après generation dynamique jQuery sur le DOM
$('footer').css('position', 'static');

});