M.toast({html: 'Chargement en cours...'});
$(document).ready(function() {
  setTimeout(function() {
    M.Toast.dismissAll();
    M.toast({html: 'Chargement terminé! :3', displayLength: 1000});
    $('.preloader-background').fadeOut('slow');
    $('.preloader-wrapper').fadeOut();
    $('#title-steps').dvjhEcrit({
      "text" : "Mehdi ROUIS",
      "interval" : Math.floor((Math.random() * 400) + 50),
      "backgroundColor" : "#3e3e3e",
      "color" :"#ffffff"
    });
  }, 1000);
  $('.sidenav').sidenav({edge: 'right'});
  $('.scrollspy').scrollSpy({activeClass : ''});
  $('.parallax').parallax();

  $('#b-home').click(function() {
    document.getElementById('b-home').className = 'active';
    document.getElementById('b-story').className = '';
    document.getElementById('b-logs').className = '';
    document.getElementById('b-skills').className = '';
    document.getElementById('b-contact').className = '';
  });
  $('#b-story').click(function() {
    document.getElementById('b-home').className = '';
    document.getElementById('b-story').className = 'active';
    document.getElementById('b-logs').className = '';
    document.getElementById('b-skills').className = '';
    document.getElementById('b-contact').className = '';
  });
  $('#b-logs').click(function() {
    document.getElementById('b-home').className = '';
    document.getElementById('b-story').className = '';
    document.getElementById('b-logs').className = 'active';
    document.getElementById('b-skills').className = '';
    document.getElementById('b-contact').className = '';
  });
  $('#b-skills').click(function() {
    document.getElementById('b-home').className = '';
    document.getElementById('b-story').className = '';
    document.getElementById('b-logs').className = '';
    document.getElementById('b-skills').className = 'active';
    document.getElementById('b-contact').className = '';
  });
  $('#b-contact').click(function() {
    document.getElementById('b-home').className = '';
    document.getElementById('b-story').className = '';
    document.getElementById('b-logs').className = '';
    document.getElementById('b-skills').className = '';
    document.getElementById('b-contact').className = 'active';
  });

  $('#slide-out > li, #morebutton').on('click', function () {
    setTimeout(function () {
      window.scrollBy(0, -64);
    }, 500);
  });
});
