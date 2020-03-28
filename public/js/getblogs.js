$(document).ready(function() {
  console.log("DOCUMENT READY")
    // Getting references to our form and inputs
    var getBlogForm = $("form.getBlog");
    // var nameInput = $("input#blog-name");
    var blogResultbox = $("textarea#searched-blog");

    console.log(getBlogForm)

    // When the form is submitted, we validate there's an email and password entered
    getBlogForm.on("submit", function(event) {
      console.log('SUBMITTING')
      event.preventDefault();
      findblogs();

      // search for attributes
      // var userData = {
      //   name: nameInput.val().trim(),
      // };
      
      
      // if (!userData.name) {
      //   console.log('MISSING DATA')
      //   return;
      // }
  
      console.log("READY TO CREATE")
      // If we have an email and password we run the loginUser function and clear the form
      // findblogs(userData.name);
      // nameInput.val("");
      

    //   console.log("USERDATA" + userData);
    // });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function findblogs(name) {
      console.log("GETBLOG CALLED")
      $.get("/api/getblogs", {
        name: name,
      })
        .then(function() {
          console.log("SUCCESS!")
          // window.location.replace("/bloggerhome");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
        blogResultbox.text()
        
        return 
    }
  })
})

// $.ajax({
//   type:"GET",
//   url:"http://hostname/projectfolder/webservicename.php?callback=jsondata&web_name="+name+"&web_address="+address+"&web_age="+age,
//   crossDomain:true,
//   dataType:'jsonp',
//   success: function jsondata(data)
//        {

//         var parsedata=JSON.parse(JSON.stringify(data));
//         var logindata=parsedata["Status"];

//         if("sucess"==logindata)
//         {   
//             alert("success");
//         }
//         else
//         {
//             alert("failed");
//         }
//       }  
// }); 