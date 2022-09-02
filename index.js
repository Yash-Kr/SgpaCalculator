$(document).ready(function(){

  $(".form").submit(function()
  {

    let mp = $('#mp option:selected').val();  
    let iot = $('#iot option:selected').val();
    let ds = $('#ds option:selected').val();
    let cry = $('#cry option:selected').val(); 
    let cv = $('#cv option:selected').val();
    let nlp = $('#nlp option:selected').val();
    let rs = $('#rs option:selected').val();
    let iotlab = $('#iotlab option:selected').val();
    let moocs = $('#moocs option:selected').val(); 
    let summer = $('#summer option:selected').val();
    let seminar = $('#seminar option:selected').val();

    
    
  
    let total_points = 6*mp + 3*iot + 3*ds + 3*cry + 3*cv + 3*nlp + 3*rs + 3*moocs + 1*iotlab + 1*summer + 1*seminar ;
    let sgpa = total_points/24;
 
    console.log(total_points);
    console.log(sgpa.toFixed(2));
    $("#sgpa").html(sgpa.toFixed(2));
    event.preventDefault();
  });
}
);
