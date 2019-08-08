var i = 0; // 0 = true, 1 = false

$(function() {
  $('.readmore').click(function(e) {
    read(e);
  });
});

function read(e) {
  // if (!i) {
  //   document.getElementById('more').style.display = 'inline';
  //   document.getElementById('dots').style.display = 'none';
  //   document.getElementById('read').innerHTML = 'read less';
  //   i = 0;
  // } else {
  //   document.getElementById('more').style.display = 'none';
  //   document.getElementById('dots').style.display = 'inline';
  //   document.getElementById('read').innerHTML = 'read more';
  //   i = 1;
  // }

  var el = e.target;
  var vis = $(el).attr('data-read');
  // var moreEl = $(el).parent().find('.more');
  // var dotsEl = $(el).parent().find('.dots');

  if (vis == 'false') {
    // $(dotsEl).hide();
    // $(moreEl).show();
    // sau
    $(el)
      .parent()
      .find('.more')
      .show();
    $(el)
      .parent()
      .find('.dots')
      .hide();

    $(el).html('read less');

    $(el).attr('data-read', 'true');
  } else {
    // $(dotsEl).show();
    // $(moreEl).hide();
    // sau
    $(el)
      .parent()
      .find('.more')
      .hide();
    $(el)
      .parent()
      .find('.dots')
      .show();

    $(el).html('read more');

    $(el).attr('data-read', 'false');
  }
}
