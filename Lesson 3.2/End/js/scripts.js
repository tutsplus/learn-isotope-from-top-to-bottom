$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note"
    } );

    // Filter with functions
    // $notes.isotope( {
    //     filter: function() {
    //         // Get the number from the note header
    //         var $noteNumber = parseInt( $( this ).find( ".note-number" ).text(), 10 );
    //
    //         // Returns true/false depending on the result of the comparison
    //         return $noteNumber > 5 && $noteNumber < 13;
    //
    //         // Get the note date
    //         var $noteDate = $( this ).find( ".note-date" ).text();
    //
    //         // Let's show notes from a specific month
    //         return $noteDate.indexOf( "Mar" ) >= 0;
    //     }
    // } );

    // A more advanced example
    var $noteFunctions = {
        // Function that shows notes who's number is in a range
        notesByNumberRange: function() {
            // Get the number from the note header
            var $noteNumber = parseInt( $( this ).find( ".note-number" ).text(), 10 );

            // Returns true/false depending on the result of the comparison
            return $noteNumber > 5 && $noteNumber < 13;
        },
        notesByDate: function() {
            // Get the note date
            var $noteDate = $( this ).find( ".note-date" ).text();

            // Let's show notes from a specific month
            return $noteDate.indexOf( "Feb" ) >= 0;
        }
    };

    $notes.isotope( {
        filter: $noteFunctions.notesByNumberRange
    } );
} );
