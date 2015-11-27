/*!
Copied form this stackoverflow thread:
  http://stackoverflow.com/questions/9278569/equals-heights-of-thumbnails

This is the solution of Tim Lowrimore and Benjamin Curtis which based on the
initial one of Fabrizio Calderan!
*/


function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.each(function() { $(this).height(tallest); });
}

$(document).ready(function() {
    equalHeight($(".thumbnail"));
});
