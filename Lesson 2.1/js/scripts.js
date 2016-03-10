$( function() {
    $( ".notes" ).isotope( {
        itemSelector: ".note",
        layoutMode: "fitRows"
    } );
} );

// Initialize with vanilla JavaScript
var notes = document.querySelector( '.notes' );
var iso = new Isotope( notes, {
    itemSelector: '.note',
    layoutMode: 'fitRows'
});
