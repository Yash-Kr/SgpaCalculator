$(document).ready(function(){

  $(".form").submit(function()
  {

    let daa = $('#daa option:selected').val();
    let os = $('#os option:selected').val();
    let flat = $('#flat option:selected').val();
    let ca = $('#ca option:selected').val();
    let oosd = $('#oosd option:selected').val();
    let moocs = $('#moocs option:selected').val();
    let oslab = $('#oslab option:selected').val();
    let algolab = $('#algolab option:selected').val();

    let total_points = 4*daa + 4*os + 4*flat + 3*ca + 3*oosd + 3*moocs + 1*oslab + 1*algolab ;
    let sgpa = total_points/23;
    console.log(total_points);
    console.log(sgpa.toFixed(2));
    $("#sgpa").html(sgpa.toFixed(2));
    event.preventDefault();
  });
}
);
