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

        // Toggle the active class on the correct button
        $( ".filter-container .btn" ).removeClass( "btn-active" );
        $this.addClass( "btn-active" );

        // Get the filter data attribute from the button
        $notes.isotope( {
            filter: $this.attr( "data-filter" )
        } );

    } );
} );
