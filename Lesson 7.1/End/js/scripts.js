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

    function onArrangeComplete() {
        console.log( "The arrange is complete!" );
    }

    function onLayoutComplete() {
        console.log( "The layout is complete!" );
    }

    function onRemoveComplete() {
        console.log( "The removal is complete!" );
    }

    // $notes.isotope( "on", "arrangeComplete", onArrangeComplete );

    $notes.isotope( "on", "layoutComplete", onLayoutComplete );
    $notes.isotope( "off", "layoutComplete", onLayoutComplete );
    $notes.isotope( "once", "layoutComplete", onLayoutComplete );

    $notes.on( "arrangeComplete", onArrangeComplete );
    $notes.off( "arrangeComplete", onArrangeComplete );
    $notes.one( "arrangeComplete", onArrangeComplete );

    $notes.on( "arrangeComplete", function( event, filteredItems ) {
        console.log( "arrangeComplete with: " + filteredItems.length + " items" );
    } );

    $notes.on( "removeComplete", onRemoveComplete );

    $( ".note" ).click( function() {
        $notes.isotope( "remove", this ).isotope( "layout" );
    } );
} );
