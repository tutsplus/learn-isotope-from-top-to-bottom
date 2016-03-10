$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" );

    $notes.isotope( {
        itemSelector: '.note',
        getSortData: {
            title: ".note-title",
            number: ".note-number parseInt"
        },
        sortBy: 'number'
    } );

    // Update sort data
    $( "#change-note-text" ).click( function( e ) {
        e.preventDefault();

        $( "#note-test" ).find( ".note-title" ).text( "Address" );
        $notes.isotope( "updateSortData" ).isotope();
    } );

    // Shuffle
    $( "#shuffle-notes" ).click( function( e ) {
        e.preventDefault();

        $notes.isotope( "shuffle" );
    } );

    // Stamp/unstamp
    var $stamped = $( ".stamped" ),
        $isStamped = false;

    $( "#toggle-stamped" ).click( function( e ) {
        e.preventDefault();

        if ( $isStamped ) {
            $notes.isotope( "unstamp", $stamped );
        } else {
            $notes.isotope( "stamp", $stamped );
        }

        $notes.isotope( "layout" );

        $isStamped = ! $isStamped;
    } );
} );
