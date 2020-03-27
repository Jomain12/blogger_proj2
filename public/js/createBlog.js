$(document).ready(function() {
  console.log("DOCUMENT READY")
    // Getting references to our form and inputs
    var blogForm = $("form.createBlog");
    var nameInput = $("input#name-input");
    var categoryInput = $("input#category-input");
    var contentInput = $("input#content-input");
    
    console.log(blogForm)

    // When the form is submitted, we validate there's an email and password entered
    blogForm.on("submit", function(event) {
      console.log('SUBMITTING')
      event.preventDefault();
      var userData = {
        name: nameInput.val().trim(),
        category: categoryInput.val().trim(),
        content: contentInput.val().trim() 
      };
      
      
      if (!userData.name || !userData.category || !userData.content) {
        console.log('MISSING DATA')
        return;
      }
  
      console.log("READY TO CREATE")
      // If we have an email and password we run the loginUser function and clear the form
      createBlog(userData.name, userData.category, userData.content);
      nameInput.val("");
      categoryInput.val("");
      contentInput.val("");

      console.log("USERDATA" + userData);
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function createBlog(name, category, content) {
      console.log("CREATEBLOG CALLED")
      $.post("/api/createBlog", {
        name: name,
        category: category,
        content: content
      })
        .then(function() {
          console.log("SUCCESS!")
          window.location.replace("/bloggerhome");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });

  // const blog = await blogForm.create({
  //   username: 'alice123',
  //   isAdmin: true
  // }, { fields: ['username'] });
  // // let's assume the default of isAdmin is false
  // console.log(user.username); // 'alice123'
  // console.log(user.isAdmin); // false