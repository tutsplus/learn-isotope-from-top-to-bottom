$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note",
        percentPosition: false,
        // stamp: ".stamped",
        isOriginLeft: false,
        isOriginTop: false,
        cellsByRow: {
            columnWidth: 1000,
            rowHeight: 1000
        }
    } );

    // On layout button click
    $( ".sort-container .btn" ).on( "click", function( e ) {
        var $this = $( this );

        // Prevent default behaviour
        e.preventDefault();

        // Get the layout data attribute from the button
        var layoutAttribute = $this.attr( "data-layout" );

        // Toggle the active class on the correct button
        $( ".sort-container .btn" ).removeClass( "btn-active" );
        $this.addClass( "btn-active" );

        // Sort
        $notes.isotope( {
            layoutMode: layoutAttribute
        } );
    } );
} );
