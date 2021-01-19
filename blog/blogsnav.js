let navtest = document.getElementById("navtest").innerHTML +=`
<nav class="navbar navbar-expand-lg bg-light" style="box-shadow:5px 5px 5px 5px";>
<a class="navbar-brand" href="index.html"><img src="../images/LOGO.jpg" height="50rem" width="50rem" style = "box-shadow:5px 5px 5px 5px";></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" style="color:black";>
        <li class="nav-item">
            <a class="nav-link mr-3" href="index.html">Home <span
                    class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link mr-3" href="./aboutus/about.html">About us</a>
        </li>
        <li class="nav-item">
            <a class="nav-link mr-3" href="./contactus/contact.html">Contact Us</a>
        </li>
      
        <li class="nav-item">
            <a class="nav-link  mr-3"
                href="./quiz/quiz.html">Quizzes</a>
        </li>

        <li class="nav-item active"> <a class="nav-link mr-3" href="./blog/blogMain.html">Blog</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Videos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="./knowledgebooster/Knowledge.html">Knowledge Booster</a>
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Reviews
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="./reviews\mobile.html">Mobile review</a>
                <a class="dropdown-item" href="./reviews\laptop.html">Laptop review</a>
                
            </div>
        </li>

    </ul>
</div>
</nav>`

                      