$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note"
    } );

    // On filter button click
    $( ".filter-container .btn" ).on( "click", function( e ) {
        var $this = $( this );

        // Prevent default behaviour
        e.preventDefault();

        // Get the filter data attribute from the button
        var $filter = $this.attr( "data-filter" );

        // Filter
        $notes.isotope( {
            filter: $filter
        } );

        // Toggle the active class on the correct button
        $( ".filter-container .btn" ).removeClass( "btn-active" );
        $this.addClass( "btn-active" );
    } );
} );
