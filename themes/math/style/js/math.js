$(document).ready(function(){
    var i=1, j=1, k;
    var idToName = {};
    $("body").find('div').each(function(){
    		var className = $(this).attr('class');
    		if(className == 'theorem' || className == 'lemma') {
          var text = $(this).attr('text'), prefix;
          if(className == 'theorem') {
          	prefix = 'Theorem ';
            k = i++;
          } else {
          	prefix = 'Lemma ';
            k = j++;
          }
          idToName['#' + $(this).attr('id')] = prefix + k;
          if(text != null) {
          	text = prefix + k + ' (' + text + ').';
          } else {
          	text = prefix + k + '.';
          }
          $(this).attr('text', text);
        	console.log($(this).attr('id'));
        }
    });
    $("body").find('a').each(function(){
        $(this).html(idToName[$(this).attr('href')]);
    });
});
