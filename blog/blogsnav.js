let navtest = document.getElementById("navtest").innerHTML +=`
    <nav class="navbar navbar-expand-lg" style="box-shadow:3px 3px 3px 3px; background:url(../bg.png);   ">
<a class="navbar-brand" href="index.html"><img src="../images/frontpageimages/LOGO.jpg" height="50rem" width="50rem" style = "box-shadow:1px 1px 1px 1px black";></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto";>
        <li class="nav-item">
            <a class="nav-link text-dark mr-3" href="../index.html">Home <span
                    class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark mr-3" href="../aboutus/about.html">About us</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark mr-3" href="../contactus/contact.html">Contact Us</a>
        </li>
        <li class="nav-item"> <a class="nav-link text-dark btn btn-light mr-3" href="../blog/blogMain.html">Blog</a>
        </li>
        <li class="nav-item"> <a class="nav-link text-dark  mr-3" href="../technews/technews.html">Tech News</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Reviews
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item text-dark" href="../reviews/mobile.html">Mobile review</a>
                <a class="dropdown-item text-dark" href="../reviews/laptop.html">Laptop review</a>
                
            </div>
        </li>

    </ul>
</div>
</nav>`

                      