$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" );

    $notes.isotope( {
        itemSelector: '.note',
        getSortData: {
            number: ".note-number parseInt"
        },
        sortBy: 'number'
    } );

    // Append items
    $( "#append-items" ).click( function( e ) {
        e.preventDefault();
    } );

    // Prepend items
    $( "#prepend-items" ).click( function( e ) {
        e.preventDefault();
    } );

    // Insert items
    $( "#insert-items" ).click( function( e ) {
        e.preventDefault();
    } );

    // Remove items
    $( "#remove-items" ).click( function( e ) {
        e.preventDefault();
    } );
} );
