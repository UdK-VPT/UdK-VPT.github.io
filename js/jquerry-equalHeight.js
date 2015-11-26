/*!
Copied form this stackoverflow thread:
  http://stackoverflow.com/questions/9278569/equals-heights-of-thumbnails

This is the solution of Tim Lowrimore and Benjamin Curtis which based on the
initial one of Fabrizio Calderan!
*/


(function($) {
    $.fn.uniformHeight = function() {
        var maxHeight   = 0,
            max         = Math.max;

        return this.each(function() {
            maxHeight = max(maxHeight, $(this).height());
        }).height(maxHeight);
    }
})(jQuery);

$(".thumbnail").height(Math.max.apply(null, $(".thumbnail").map(function() { return $(this).height(); })));