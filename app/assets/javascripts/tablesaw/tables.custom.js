
(function($) {
    $(function() {
        $( "#date-sort" ).data( "tablesaw-sort", function( ascending ) {
            return function( a, b ) {
                var dateA = $( a.element ).data("value"),
                    dateB = $( b.element ).data("value");
    
                if( ascending ) {
                    return dateA - dateB;
                } else {
                    return dateB - dateA;
                }
            };
        });
    });
})(jQuery);

