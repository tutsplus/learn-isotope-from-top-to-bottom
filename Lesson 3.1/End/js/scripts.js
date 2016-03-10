$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note"
    } );

    // Filter with selectors
    $notes.isotope( {
        // Bu default, Isotope shows all items
        // filter: '*'
        // The most commong selector is a class name
        // filter: '.note-red'
        // You can also use multiple classes
        // filter: '.note-blue, .note-green'
        // Classes are not the only selectors you can use
        // ID's work just as well
        // filter: '#first-note'
        // Any kind of attribute will work
        // filter: '[class*="-gre"]'
    } );

    // Filter with jQuery selectors
    $notes.isotope( {
        // Display everything except the red notes
        // filter: '.note:not(.note-red)'
        // Show the first red note only
        filter: '.note-red:first'
    } );
} );
