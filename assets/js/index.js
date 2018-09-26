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
      "backgroundColor" : "#2196f3",
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

  function progressBar(id, value, color) {
    var circle = new ProgressBar.Bar(id, {
    strokeWidth: 6,
    color: color
    });
    circle.animate(value);
  }

  progressBar('#html', 0.8, '#f16528');
  progressBar('#css', 0.5, '#1c88c7');
  progressBar('#php', 0.8, '#777bb3');
  progressBar('#js', 0.4, '#f1bf28');
  progressBar('#angular', 0.01, '#b53031');
  progressBar('#symfony', 0.3, '#19171b');
  progressBar('#slim', 0.4, '#729e3f');
  progressBar('#bootstrap', 0.4, '#8559d1');
});
