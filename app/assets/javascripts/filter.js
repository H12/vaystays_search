$(document).ready(function() {
    $("input.search").on("keyup", filter);
    $("select.filter").on("change", filter);

    function filter() {
        var query = $("input.search").val().toLowerCase();
        var minBeds = $("select.filter").val();
        var rows = $(".filter-target .row");

        $.each(rows, function(i, row) {
            var $row = $(row);
            var title = $row.find(".title")[0].innerText.toLowerCase();
            var sleepsMax = parseInt($row.find(".sleeps_max")[0].innerText);

            if (sleepsMax >= minBeds && ~title.indexOf(query)) {
                $row.show();
            } else {
                $row.hide();
            }
        });
    }
});
