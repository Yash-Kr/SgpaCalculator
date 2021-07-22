$(document).ready(function(){

  $(".form").submit(function()
  {

    let daa = $('#daa option:selected').val();
    console.log('daa = '+daa);
    let os = $('#os option:selected').val();
    console.log('os = '+os);
    let flat = $('#flat option:selected').val();
    console.log('flat = '+flat);
    let ca = $('#ca option:selected').val();
    console.log('ca = '+ca);
    let oosd = $('#oosd option:selected').val();
    console.log('oosd = '+oosd);
    let moocs = $('#moocs option:selected').val();
    console.log('moocs = '+moocs);
    let oslab = $('#oslab option:selected').val();
    console.log('oslab = '+oslab);
    let algolab = $('#algolab option:selected').val();
    console.log('algolab = '+algolab);

    let total_points = 4*daa + 4*os + 4*flat + 3*ca + 3*oosd + 3*moocs + 1*oslab + 1*algolab ;
    let sgpa = total_points/23;
    console.log(total_points);
    console.log(sgpa.toFixed(2));
    $("#sgpa").html(sgpa.toFixed(2));
    event.preventDefault();
  });
}
);
