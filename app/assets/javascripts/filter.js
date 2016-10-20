$(document).ready(function() {
    $("select.filter").on("change", function() {
        var minBeds = this.value;
        var sleepsMaxCells = $(".filter-target .cell.sleeps_max");

        $.each(sleepsMaxCells, function(i, cell) {
            if (parseInt(cell.innerText) < minBeds) {
                $(cell).closest(".row").hide();
            } else {
                $(cell).closest(".row").show();
            }
        });
    });
});
