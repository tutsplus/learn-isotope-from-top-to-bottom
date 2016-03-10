$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note",
        masonry: {
            columnWidth: 300,
            gutter: 120
            // isFitWidth: true
        },
        fitRows: {
            gutter: 120
        },
        vertical: {
            // 0 - left, 0.5 - middle, 1 - right
            horizontalAlignment: 1
        },
        packery: {
            gutter: 20,
            columnWidth: 500,
            rowHeight: 500,
            isHorizontal: true
        },
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
        var $layoutAttribute = $this.attr( "data-layout" );

        // Toggle the active class on the correct button
        $( ".sort-container .btn" ).removeClass( "btn-active" );
        $this.addClass( "btn-active" );

        // Layout
        $notes.isotope( {
            layoutMode: $layoutAttribute
        } );
    } );
} );
