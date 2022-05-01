$(document).ready(function(){

  $(".form").submit(function()
  {

    let mp = $('#mp option:selected').val();  
    let dmw = $('#dmw option:selected').val();
    let is = $('#is option:selected').val();
    let se = $('#se option:selected').val(); 
    let cg = $('#cg option:selected').val();
    let bc = $('#bc option:selected').val();
    let moocs = $('#moocs option:selected').val(); 
    let cglab = $('#cglab option:selected').val();
    let selab = $('#selab option:selected').val();

    
    
  
    let total_points = 6*mp + 4*dmw + 3*is + 3*se + 3*cg + 3*bc + 3*moocs + 1*cglab + 1*selab ;
    let sgpa = total_points/27;
 
    console.log(total_points);
    console.log(sgpa.toFixed(2));
    $("#sgpa").html(sgpa.toFixed(2));
    event.preventDefault();
  });
}
);
