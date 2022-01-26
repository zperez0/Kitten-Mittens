$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name").val();
    $(".name").text(name1Input);
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const description1Input = $("input#description").val();
    $(".description").text(description1Input);

  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const date1Input = $("input#date").val();
    $(".date").text(date1Input);
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const times1Input = $("input#times").val();
    $(".times").text(times1Input);
   
    $("#final").slideDown()
  });
});


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    $("#formOne").hide(); // helps reload and displays a new page

  $("#final").click(function() {
    $("#formOne").slideDown();
    $("#final").hide();
  });
});
});