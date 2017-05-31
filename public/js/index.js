//==============================================================================
// index.js
// JavaScript for home/landing page
// By: Luis Castro
//==============================================================================

$(document).ready(function() {
    // Initialize CSS
    $('.modal').modal();
    $('.parallax').parallax();

    $('#nodeIcon').click(function() {
        $('#nodeModal').modal('open');
    });

    $('#CIcon').click(function() {
        $('#CModal').modal('open');
    });

    $('#mongoIcon').click(function() {
        $('#mongoModal').modal('open');
    });

    $('#navBar').pushpin({
        top: 0,
        offset: 0
    });
});
