$(document).ready(function() {
  console.log("DOCUMENT READY")
    // Getting references to our form and inputs
    var getBlogForm = $("form.getBlog");
    // var nameInput = $("input#blog-name");
    var blogResultbox = $("div#searched-blog");
    var blogArray1 = [];
    var blogArray2 = [];
    var blogArray3 = [];
    var blogArray4 = [];
    var blogArray5 = [];
    
    
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
        .then(function(resp) {
          console.log(resp)
          // window.location.replace("/bloggerhome");
          // If there's an error, log the error
          // resp is and array!
          const ul = $('ul')
          const li = $('li')
          // li.text(resp[0].name, resp[0].category, resp[0].content)
          ul.append(li)
          blogArray1.push("Name: " + resp[0].name, " Category: " +  resp[0].category,  " Content: " +  resp[0].content);
          blogArray2.push("Name: " + resp[1].name, " Category: " +  resp[1].category,  " Content: " +  resp[1].content);
          blogArray3.push("Name: " + resp[2].name, " Category: " +  resp[2].category,  " Content: " +  resp[2].content);
          blogArray4.push("Name: " + resp[3].name, " Category: " +  resp[3].category,  " Content: " +  resp[3].content);
          blogArray5.push("Name: " + resp[4].name, " Category: " +  resp[4].category,  " Content: " +  resp[4].content);
          blogResultbox.html(
           "<li>" + blogArray1 + 
           "<li>" + blogArray2 +
           "<li>" + blogArray3 +
           "<li>" + blogArray4 +
           "<li>" + blogArray5
          )

          console.log(blogArray1, blogArray2);

          // resp.forEach((i) => {
          //   return "<h2>" + resp.name[i] + resp.category[i] + resp.content[i] + "<h2>"
          // });
        })
        .catch(function(err) {
          console.log(err);
        });
        
        
    }
  })
})

// function show2(data){
//   return  "<h2>" + data.list[8].dt_txt + "<h2>" +
//           "<h4> <img><img src='https://openweathermap.org/img/wn/" +  data.list[8].weather[0].icon + ".png'>" + data.list[8].weather[0].description + "</h4>" +
//           "<p>Temperature: "+ data.list[8].main.temp + " &deg;F" + "<p>" +
//           "<p>Humidity: "+ data.list[8].main.humidity + "%<p>" 

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
