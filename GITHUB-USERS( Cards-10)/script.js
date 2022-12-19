fetch("https://api.github.com/users")
.then((res) => res.json())
.then((data) => {
   // console.log(data[0].avatar_url);

    document.getElementById("profileimage1")
   .setAttribute("src",data[1] .avatar_url)

    document.getElementById("UserName1").innerText=data[1].login;    

    document.getElementById("Visit Profile1")
    .setAttribute("href",data[1] .html_url);

});
//-------------------------------------------------------------------------------------
document.getElementById("profileimage2")
.setAttribute("src",data[2] .avatar_url)

 document.getElementById("UserName2").innerText=data[2].login;    

 document.getElementById("Visit Profile2")
 .setAttribute("href",data[2] .html_url);
//-------------------------------------------------------------------------------------
document.getElementById("profileimage3")
.setAttribute("src",data[3] .avatar_url)

 document.getElementById("UserName3").innerText=data[3].login;    

 document.getElementById("Visit Profile3")
 .setAttribute("href",data[3] .html_url);


