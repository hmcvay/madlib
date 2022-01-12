$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    function upperCaseStrings(text) {
      return text.toUpperCase();
      // assign that class to the span
    }

    $(".person1").text(upperCaseStrings(person1Input));
    $(".person2").text(upperCaseStrings(person2Input));
    $(".animal").text(upperCaseStrings(animalInput));
    $(".exclamation").text(upperCaseStrings(exclamationInput));
    $(".verb").text(upperCaseStrings(verbInput));
    $(".noun").text(upperCaseStrings(nounInput));

    $("#story").show();
  });
});

//write a style to assign uppercase via css stylesheet
//person1Input.toUpperCase()
//function to perform the task of uppercase inputs
