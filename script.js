// script.js

$(document).ready(function() {
    
    $('#submitBtn').hide();
  
    // Show the submit button when all questions are answered
    $('input[type="text"], input[type="email"]').keyup(function() {
      var allFilled = true;
      $('input[type="text"], input[type="email"]').each(function() {
        if ($(this).val() === '') {
          allFilled = false;
        }
      });
      if (allFilled) {
        $('#submitBtn').show();
      } else {
        $('#submitBtn').hide();
      }
    });
  
    // Submit form
    $('#surveyForm').submit(function(e) {
      e.preventDefault();
      // Collect form data
      var formData = $(this).serializeArray();
      
      console.log(formData);
      
      alert('Survey submitted successfully!');
      
    });
  });
  