$(document).ready(function() {
    // MAKE :contains CASE INSENSITIVE
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    $("input.search").on("keyup", function() {
        var query = this.value.toLowerCase();

        if (event.keyCode == 8 || event.keyCode == 46 || query.length == 0) {
            $(".search-target .cell:contains(" + query + ")").closest(".row").show();
        } else {
            $(".search-target .cell:not(:contains(" + query + "))").closest(".row").hide();
        }
    });
});
