$( document ).ready(function() {
    $.ajax ({
        url : 'https://swapi.co/api/planets/',
        type : 'get',
        dataType : 'json',
        success : function (r) {
            let value = r.results;
            console.log(value);
            let no = 1;
            $.each(value, function (i, data) {
                let body = "<tr class='detail'>";
                body    += "<td>" + no + "</td>";
                body    += "<td>" + data.name + "</td>";
                body    += "<td>" + data.rotation_period + "</td>";
                body    += "<td>" + data.orbital_period + "</td>";
                body    += "<td>" + data.diameter + "</td>";
                body    += "<td>" + data.climate + "</td>";
                body    += "<td>" + data.gravity + "</td>";
                body    += "<td>" + data.terrain + "</td>";
                body    += "<td>" + data.surface_water + "</td>";
                body    += "<td>" + data.population + "</td>";
                body    += "</tr>";
                $( "#mytable" ).append(body);
                no++;
            });
            let t = $( "#mytable" ).DataTable();

            t.on( 'order.dt search.dt', function () {
                t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                    cell.innerHTML = i+1;
                } );
            } ).draw();
        },
    });
})