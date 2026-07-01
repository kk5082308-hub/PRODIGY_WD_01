/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
    scroll-behavior:smooth;
}

body{
    background:#f8fafc;
    color:#333;
    line-height:1.6;
}

/* Navbar */

header{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    z-index:1000;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    transition:.4s;
}

nav.scrolled{
    background:rgba(15,23,42,.9);
    backdrop-filter:blur(12px);
    box-shadow:0 8px 20px rgba(0,0,0,.25);
}

.logo{
    color:#fff;
    font-size:28px;
    font-weight:700;
}

.logo i{
    color:#38bdf8;
    margin-right:8px;
}

.nav-links{
    display:flex;
    list-style:none;
}

.nav-links li{
    margin-left:30px;
}

.nav-links a{
    text-decoration:none;
    color:#fff;
    font-weight:500;
    transition:.3s;
}

.nav-links a:hover,
.nav-links a.active{
    color:#38bdf8;
}

/* Hero */

.hero{
    height:100vh;
    background:
    linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
    url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80");

    background-size:cover;
    background-position:center;

    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#fff;
}

.hero-content{
    animation:fadeUp 1s ease;
}

.hero h1{
    font-size:65px;
    margin-bottom:20px;
}

.hero p{
    font-size:20px;
    margin-bottom:30px;
}

.btn{
    display:inline-block;
    padding:15px 35px;
    background:#38bdf8;
    color:#fff;
    text-decoration:none;
    border-radius:50px;
    transition:.3s;
    border:none;
    cursor:pointer;
}

.btn:hover{
    background:#0ea5e9;
    transform:translateY(-5px);
}

/* Sections */

section{
    padding:90px 8%;
}

section h2{
    text-align:center;
    margin-bottom:50px;
    font-size:40px;
}

/* About */

.about-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.about-box{
    background:#fff;
    padding:30px;
    text-align:center;
    border-radius:15px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.4s;
}

.about-box:hover{
    transform:translateY(-12px);
}

.about-box i{
    font-size:45px;
    color:#38bdf8;
    margin-bottom:15px;
}

/* Destination Cards */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    background:#fff;
    border-radius:18px;
    overflow:hidden;
    box-shadow:0 10px 20px rgba(0,0,0,.1);
    transition:.4s;
    cursor:pointer;
}

.card:hover{
    transform:translateY(-15px);
    box-shadow:0 20px 40px rgba(0,0,0,.25);
}

.card img{
    width:100%;
    height:220px;
    object-fit:cover;
    transition:.6s;
}

.card:hover img{
    transform:scale(1.1);
}

.card h3{
    padding:20px 20px 10px;
}

.card p{
    padding:0 20px 20px;
}

/* Services */

.service-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.service{
    background:#fff;
    text-align:center;
    padding:35px;
    border-radius:15px;
    box-shadow:0 10px 20px rgba(0,0,0,.08);
    transition:.4s;
}

.service:hover{
    background:#0f172a;
    color:#fff;
    transform:translateY(-12px);
}

.service i{
    font-size:45px;
    color:#38bdf8;
    margin-bottom:15px;
}

/* Contact */

form{
    max-width:650px;
    margin:auto;
    display:flex;
    flex-direction:column;
}

form input,
form textarea{
    padding:15px;
    margin:12px 0;
    border:1px solid #ddd;
    border-radius:10px;
    font-size:16px;
}

textarea{
    height:160px;
    resize:none;
}

/* Footer */

footer{
    background:#0f172a;
    color:#fff;
    text-align:center;
    padding:25px;
}

/* Reveal Animation */

.reveal{
    opacity:0;
    transform:translateY(60px);
    transition:all .8s ease;
}

.reveal.active{
    opacity:1;
    transform:translateY(0);
}

/* Hero Animation */

@keyframes fadeUp{

from{
opacity:0;
transform:translateY(40px);
}

to{
opacity:1;
transform:translateY(0);
}

}

/* Responsive */

@media(max-width:768px){

nav{
    flex-direction:column;
}

.nav-links{
    margin-top:15px;
    flex-wrap:wrap;
    justify-content:center;
}

.nav-links li{
    margin:10px;
}

.hero h1{
    font-size:42px;
}

.hero p{
    font-size:18px;
}

section h2{
    font-size:32px;
}

}
