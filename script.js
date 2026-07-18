
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:linear-gradient(135deg,#ff9ecf,#ffd6ea);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
}

.container{
    width:90%;
    max-width:600px;
    background:white;
    border-radius:25px;
    padding:40px;
    text-align:center;
    box-shadow:0 20px 50px rgba(0,0,0,.15);
    animation:fadeIn 1s;
}

h1{
    font-size:60px;
}

h2{
    margin:20px 0;
    color:#ff2d75;
    font-size:32px;
}

p{
    color:#555;
    font-size:18px;
    line-height:1.7;
}

button{
    margin-top:30px;
    padding:15px 35px;
    border:none;
    border-radius:50px;
    cursor:pointer;
    font-size:18px;
    transition:.3s;
}

button:hover{
    transform:scale(1.08);
}

.yes{
    background:#ff4d88;
    color:white;
}

.no{
    background:#ddd;
    margin-left:15px;
}

.buttons{
    margin-top:30px;
    position:relative;
}

span{
    color:#ff2d75;
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
