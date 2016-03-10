$( function() {
    var $searchFilter = "",
        $colorFilter = "*";

    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note",
        filter: function() {
            var $this = $( this ),
            $colorResult,
            $searchResult;

            // Process the color filter
            $colorResult = $colorFilter === "*" ? true : $this.is( $colorFilter );

            // Process the search filter
            var $noteTags = $this.find( ".note-tags" ).text();
            $searchResult = $noteTags.indexOf( $searchFilter ) >= 0;

            return $searchResult && $colorResult;
        }
    } );

    // On filter button click
    $( ".filter-container .btn" ).click( function( e ) {
        var $this = $( this );

        // Prevent default behaviour
        e.preventDefault();

        // Get the filter data attribute from the button
        $colorFilter = $this.attr( "data-filter" );

        // Toggle the active class on the correct button
        $( ".filter-container .btn" ).removeClass( "btn-active" );
        $this.addClass( "btn-active" );

        // Filter
        $notes.isotope();
    } );

    // On search box typing
    $( "#searchNote" ).on( "keyup", function() {
        // Get the typed value
        $searchFilter = $( this ).val();

        // Filter
        $notes.isotope();
    } );
} );
