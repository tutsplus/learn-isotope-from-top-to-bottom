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

    // On search box typing
    $noteSearch = $( '#searchNote' ).on( "keyup", function() {
        // Get the typed value
        var $typedValue = $noteSearch.val();

        $notes.isotope( {
            filter: function() {
                var $noteTags = $( this ).find( ".note-tags" ).text();

                return $noteTags.indexOf( $typedValue ) >= 0;
            }
        } );
    } );
} );
