$(document).ready(function() {
    $("select.sort").on("change", function() {
        var queries = this.value.split(" ");
        var $rows = $(".sort-target .row");

        $rows.sort(function(a, b) {
            var sortNumber = 0;

            $.each(queries, function(i, query) {
                var sortA = +$(a).find(query)[0].innerText;
                var sortB = +$(b).find(query)[0].innerText;

                if (sortA != sortB) {
                    sortNumber = sortB - sortA;
                    return false
                }
            });

            return sortNumber;
        })
        .appendTo(".sort-target");
    });
});
