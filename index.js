$(document).ready(function(){

  $(".form").submit(function()
  {

    let dbms = $('#dbms option:selected').val();  
    let cn = $('#cn option:selected').val();
    let cd = $('#cd option:selected').val();
    let ai = $('#ai option:selected').val(); 
    let mpc = $('#mpc option:selected').val();
    let moocs = $('#moocs option:selected').val(); 
    let dbmslab = $('#dbmslab option:selected').val();
    let cnlab = $('#cnlab option:selected').val();
    let cdlab = $('#cdlab option:selected').val();
    let ailab = $('#ailab option:selected').val();
    
    
  
    let total_points = 4*dbms + 4*cn + 3*cd + 3*ai + 3*mpc + 3*moocs + 1*dbmslab + 1*cnlab + 1*cdlab + 1*ailab ;
    let sgpa = total_points/24;
 
    console.log(sgpa.toFixed(2));
    $("#sgpa").html(sgpa.toFixed(2));
    event.preventDefault();
  });
}
);
