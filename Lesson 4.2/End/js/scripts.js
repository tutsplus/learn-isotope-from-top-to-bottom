$( function() {
    // Initialize Isotope
    var $notes = $( ".notes" ).isotope( {
        itemSelector: ".note",
        layoutMode: "fitRows",
        getSortData: {
            number: '.note-number parseInt',
            title: '.note-title',
            category: '[data-category]',
            date: function( itemElem ) {
                // Get the number of miliseconds since January 1, 1970
                return Date.parse( $( itemElem ).find( ".note-date" ).text() );
            }
        }
    } );

    // On sort button click
    $( ".sort-container .btn" ).click( function( e ) {
        var $this = $( this );

        // Prevent default behaviour
        e.preventDefault();

        // Get the filter data attribute from the button
        var $sortingCriteria = $this.attr( "data-sort" );

        // Toggle the active class on the correct button
        $( ".sort-container .btn" ).removeClass( "btn-active" );
        $this.addClass( "btn-active" );

        // Sort
        $notes.isotope( {
            sortBy: $sortingCriteria
        } );
    } );

    // On sort radio button select
    $( ".radio-group input" ).click( function() {
        var $this = $( this );

        // Get the sort data attribute from the button
        var $radioSortingCriteria = $this.val();

        // Sort
        $notes.isotope( {
            // sortBy: $radioSortingCriteria
            // Multiple sorting
            sortBy: [ 'category', 'title' ]
        } );
    } );
} );
