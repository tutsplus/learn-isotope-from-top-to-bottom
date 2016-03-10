$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note"
    } );

    // On filter button click
    $( ".filter-container .btn" ).click( function( e ) {
        var $this = $( this );

        // Prevent default behaviour
        e.preventDefault();

        // Get the filter data attribute from the button and set it to the location hash
        location.hash = "filter=" + encodeURIComponent( $this.attr( "data-filter" ) );
    } );

    // Function to decode the hash
    function decodeHash() {
        var $matches = location.hash.match( /filter=([^&]+)/i );
        var $hashFilter = $matches && $matches[1];

        return $hashFilter && decodeURIComponent( $hashFilter );
    }

    // On window hash change
    function windowHashChange() {
        var $hashFilter = decodeHash();

        // Filter
        $notes.isotope( {
            filter: $hashFilter
        } );

        // Toggle the active class on the correct button
        var $filterBtns = $( ".filter-container" );
        $filterBtns.find( ".btn" ).removeClass( "btn-active" );

        $filterBtns.find( '[data-filter="' + $hashFilter + '"]' ).addClass( "btn-active" );
    }

    $( window ).on( "hashchange", windowHashChange );

    // Load the function to initialize Isotope
    windowHashChange();
} );
