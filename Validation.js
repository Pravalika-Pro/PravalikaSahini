
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-CYLRDPNTFF8V-2");

function validlogin() 
{
  var a = document.getElementById("mail_id").value;
  var b = "pravalika@gmail.com" || "demo@gmail.com" || "pravalika@yahoo.com" || "helloall@outlook.com" 
  if (a==b)
  {
    //passing user and account objects:
    aptrinsic("identify",
    {
    //User Fields
    "id": "Basic123"+a, // Required for logged in app users
    "email": a,
    "firstName": "Pravalika",
    "lastName": "S",
    "signUpDate": 1522697426479, //unix time in ms
    "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 95.5,
    "userHash": "" // optional transient for HMAC identification
    },
{
//Account Fields
  "id":"IBM", //Required
  "name":"International Business Machine",
  "Program": "Platinum" // flat custom attributes
});
    location.replace("WelcomePage.html");
  }
  else 
  {
    alert ("Invalid Credentials!");
  }
}


function myFunction() 
{
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function deleteAllCookies()
{
  Session.Abandon();
  Response.Cookies.Clear();
}

function openRadio()
{
  document.getElementById("container-3-radio-buttons-choice").style.cssText = 'display : block';
}

// function Create()
//       {
//         if(name == "one"){
//         console.log("Choice: ", name);
//             document.getElementById("one-variable-equations").checked = true;
//             document.getElementById("multiple-variable-equations").checked = false;
        
//         } else if (name == "multiple")
//         {
//             console.log("Choice: ", name);
//             document.getElementById("multiple-variable-equations").checked = true;
//             document.getElementById("one-variable-equations").checked = false;

//         }

//       }