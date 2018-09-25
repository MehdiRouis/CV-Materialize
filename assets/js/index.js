M.toast({html: 'Chargement en cours...'});
$(document).ready(function() {
  $(jQuery).ready(function() {
    setTimeout(function() {
      M.Toast.dismissAll();
      M.toast({html: 'Chargement terminé! :3', displayLength: 1000});
      $('.preloader-background').fadeOut('slow');
      $('.preloader-wrapper').fadeOut();
    }, 1000);
    $('.sidenav').sidenav({edge: 'right'});
  });
});
