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

        var $newItem = $( '<div class="note note-blue" data-category="blues">' +
            '<article>' +
                '<header>' +
                    '<p class="note-number">2</p>' +
                    '<h1 class="note-title">Dynamically generated item</h1>' +
                    '<p class="note-date">Feb 16th, 2016</p>' +
                '</header>' +

                '<p>Hey, look. This is a new item.</p>' +

                '<footer>' +
                    '<p class="note-tags">new, generated</p>' +
                '</footer>' +
            '</article>' +
        '</div> <!-- end col -->' );

        $notes.append( $newItem ).isotope( "appended", $newItem ).isotope( "updateSortData" ).isotope();
    } );

    // Prepend items
    $( "#prepend-items" ).click( function( e ) {
        e.preventDefault();

        var $newItem = $( '<div class="note note-red" data-category="reds">' +
            '<article>' +
                '<header>' +
                    '<p class="note-number">3</p>' +
                    '<h1 class="note-title">Dynamically generated item</h1>' +
                    '<p class="note-date">Feb 16th, 2016</p>' +
                '</header>' +

                '<p>Hey, look. This is a new item.</p>' +

                '<footer>' +
                    '<p class="note-tags">new, generated</p>' +
                '</footer>' +
            '</article>' +
        '</div> <!-- end col -->' );

        $notes.prepend( $newItem ).isotope( "prepended", $newItem );
    } );

    // Insert items
    $( "#insert-items" ).click( function( e ) {
        e.preventDefault();

        var $newItem = $( '<div class="note note-red" data-category="reds">' +
            '<article>' +
                '<header>' +
                    '<p class="note-number">3</p>' +
                    '<h1 class="note-title">Dynamically generated item</h1>' +
                    '<p class="note-date">Feb 16th, 2016</p>' +
                '</header>' +

                '<p>Hey, look. This is a new item.</p>' +

                '<footer>' +
                    '<p class="note-tags">new, generated</p>' +
                '</footer>' +
            '</article>' +
        '</div> <!-- end col -->' );

        $notes.isotope( "insert", $newItem );
    } );

    // Remove items
    $( "#remove-items" ).click( function( e ) {
        e.preventDefault();

        var $deleteThis = $( ".note-blue" );

        $notes.isotope( "remove", $deleteThis ).isotope( "layout" );
    } );

    // Alternatively, clicking a note will remove it
    $( ".note" ).click( function() {
        $notes.isotope( "remove", this ).isotope( "layout" );
    } );
} );
