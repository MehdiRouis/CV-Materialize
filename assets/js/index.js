M.toast({html: 'Chargement en cours...'});
$(document).ready(function() {
  setTimeout(function() {
    M.Toast.dismissAll();
    M.toast({html: 'Chargement terminé! :3', displayLength: 1000});
    $('.preloader-background').fadeOut('slow');
    $('.preloader-wrapper').fadeOut();
  }, 1000);
  $('.sidenav').sidenav({edge: 'right'});
  $('.scrollspy').scrollSpy({activeClass : ''});

  $('#b-story').click(function() {
    document.getElementById('b-story').className = 'active';
    document.getElementById('b-logs').className = '';
    document.getElementById('b-skills').className = '';
  });
  $('#b-logs').click(function() {
    document.getElementById('b-story').className = '';
    document.getElementById('b-logs').className = 'active';
    document.getElementById('b-skills').className = '';
  });
  $('#b-skills').click(function() {
    document.getElementById('b-story').className = '';
    document.getElementById('b-logs').className = '';
    document.getElementById('b-skills').className = 'active';
  });
});
