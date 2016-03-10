$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note",
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

    // When selecting a new criteria, start sorting
    $( "#sortNotes" ).change( function() {
        var $sortCriteria = this.value,
            $sortOrder = $( "#sortDescending:checked" ).length > 0;

        $notes.isotope( {
            sortBy: $sortCriteria,
            sortAscending: ! $sortOrder
        } );
    } );

    // When checking/unchecking the sort order, trigger the select change
    $( "#sortDescending" ).click( function() {
        $( "#sortNotes" ).triggerHandler( "change" );
    } );
} );
