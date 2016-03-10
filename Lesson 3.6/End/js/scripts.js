$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note",
        // Different transition duration
        transitionDuration: '1s',
        hiddenStyle: {
            opacity: 0,
            transform: 'rotate(-180deg)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'rotate(180deg)'
        }
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
