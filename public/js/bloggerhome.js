var blogs = document.getElementById("navbar-item-blogs");
var discover = document.getElementById("navbar-item-discover");
var myProfile = document.getElementById("navbar-item-profile");
var login = document.getElementById("navbar-item-blogs");
var settings = document.getElementById("navbar-item-blogs");
var signup = document.getElementById("navbar-item-blogs");
var createBlog = document.getElementById("navbar-item-blogs");
var updateBlog = document.getElementById("navbar-item-blogs");
var deleteBlog = document.getElementById("navbar-item-blogs");



{/* <button id="navbar-item-blogs" class="float-left submit-button" > blog </button> */}

{/* <script type="text/javascript">
    document.getElementById("navbar-item-blogs").onclick = function () {
        res.render('blogs');
    }
</script> */}

blogs.addEventListener("click", function() {
    window.location.pathname = '../views/blogs'
});

discover.addEventListener("click", function() {
    window.location.pathname = '/views/discover'
});

myProfile.addEventListener("click", function() {
    window.location.pathname = '/views/myprofile'
});