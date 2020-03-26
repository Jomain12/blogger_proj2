$(document).ready(function() {
    // Getting references to our form and inputs
    var blogForm = $("form.creatBlog");
    var nameInput = $("input#name-input");
    var categoryInput = $("input#category-input");
    var contentInput = $("input#content-input");
  
    // When the form is submitted, we validate there's an email and password entered
    blogForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        name: nameInput.val().trim(),
        category: categoryInput.val().trim(),
        content: contentInput.val().trim()
      };
  
      if (!userData.name || !userData.category || userData.content) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      createBlog(userData.name, userData.category, userData.content);
      nameInput.val("");
      categoryInput.val("");
      contentInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function createBlog(name, category, content) {
      $.post("/api/createBlog", {
        name: name,
        category: category,
        content: content
      })
        .then(function() {
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
