$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note",
        layoutMode: "fitRows",
        getSortData: {
            number: '.note-number parseInt',
            title: '.note-title',
            category: '[data-category]',
            date: function( itemElem ) {
                // Get the number of miliseconds since January 1, 1970
                return Date.parse( $( itemElem ).find( ".note-date" ).text() );
            }
        }
    } );
} );
