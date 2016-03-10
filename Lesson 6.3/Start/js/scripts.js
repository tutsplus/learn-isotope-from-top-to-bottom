$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ),
        isotopeOn = true;

    $notes.isotope( {
        itemSelector: ".note"
    } );
} );
