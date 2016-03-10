$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ),
        $isotopeOn = true;

    // $notes.isotope( {
    //     itemSelector: ".note"
    // } );

    $notes.isotope();

    // Destroy
    $( "#toggle-isotope" ).click( function( e ) {
        e.preventDefault();

        if ( $isotopeOn ) {
            $notes.isotope( "destroy" );
        } else {
            $notes.isotope( { itemSelector: ".note" } );
        }

        $isotopeOn = ! $isotopeOn;
    } );

    // Get item elements
    var $itemElements = $notes.isotope( "getItemElements" );
    console.log( "getItemElements" );
    console.log( $itemElements );
    console.log( "=================" );

    // Data
    var $isotopeData = $notes.data( "isotope" );
    console.log( "Data" );
    console.log( $isotopeData );
    console.log( "=================" );

    // Isotope Data
    var $isotopeHTMLData = Isotope.data( $notes[0] );
    console.log( "Isotope.data()" );
    console.log( $isotopeHTMLData );
    console.log( "=================" );
} );
