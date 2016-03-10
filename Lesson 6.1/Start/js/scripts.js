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
    } );

    // Shuffle
    $( "#shuffle-notes" ).click( function( e ) {
        e.preventDefault();
    } );

    // Stamp/unstamp
    $( "#toggle-stamped" ).click( function( e ) {
        e.preventDefault();
    } );
} );
