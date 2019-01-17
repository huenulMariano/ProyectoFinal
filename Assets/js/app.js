
$(".featured").attr("src", "Assets/Images/tn3479.jpg")

$(".thumb").on("click", function () {

    source = $(this).attr("src");
    $(".featured").attr("src", source);
})





$(document).ready(function () {
    $(".thumb").click(function () {
        $("regiones").empty();

        $(".regiones").append("Tambien puedes Agregar este producto");
    });
});