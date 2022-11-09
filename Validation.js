
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-CYLRDPNTFF8V-2-2");

function validlogin() 
{
  var a = document.getElementById("mail_id").value;
  var b = "pravalika@gmail.com" || "demo@gmail.com" || "spravalika@yahoo.com" || "helloall@outlook.com" || "staging.pravalika@gmail.com"
  if (a=="pravalika@gmail.com" || "staging.pravalika@gmail.com")
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
  "id":"IBM123", //Required
  "name":"International Business Machine",
  "Program": "Platinum" // flat custom attributes
});
    location.replace("WelcomePage.html");
  }
  else if (a=="spravalika@yahoo.com")
  {
      //passing user and account objects:
    aptrinsic("identify",
    {
    //User Fields
    "id": "PX:"+a, // Required for logged in app users
    "email": a,
    "firstName": "PravS",
    "lastName": "Yahoo",
    "signUpDate": 1522697426479, //unix time in ms
    "plan" : "Premium", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    "price" : 120.8,
    "userHash": "" // optional transient for HMAC identification
    },
{
//Account Fields
  "id":"Amazon123", //Required
  "name":"Amazon Global Services",
  "Program": "Diamond" // flat custom attributes
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

function allowlogin(mail_id) 
{
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    const myaccount = 
    {
        a1: "Aptrinsic PX",
        a2: "Facebook",
        a3: "Amazon",
        a4: "Salesforce"

    }
    var c;


    if (a != "") 
    {
        if (a == "sahini@gmail.com" || a == "pravalika@outlook.com" || a == "pravalika@yahoo.com" || a == "sahini@yahoo.com" || a == "testuser@gmail.com") 
        {
            alert("valid User");
            b = a.substr(8, 5);
            var id = b;

            /*<!-- Aptrinsic Tag-->*/


            if (a == 'sahini@gmail.com') {
                aptrinsic('identify', {
                        //User Fields
                        "id": "0057F000001wxPcQAIMandiantUsecase", // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a4, //Required
                        "name": myaccount.a4,
                        // flat custom attributes
                    });
            } else if (a == 'pravalika@outlook.com') {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a3, //Required
                        "name": myaccount.a3,
                        // flat custom attributes
                    });
            } else if (a == 'sahini@yahoo.com') {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a2, //Required
                        "name": myaccount.a2,
                        // flat custom attributes
                    });
            } else {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a1, //Required
                        "name": myaccount.a1,
                        // flat custom attributes
                    });
            }


            // Full story
            // This is an example script - don't forget to change it!
            FS.identify(id, {
                displayName: a,
                email: a
                // TODO: Add your own custom user variables here, details at
                // https://help.fullstory.com/hc/en-us/articles/360020623294-FS-setUserVars-Recording-custom-user-data

            });

            alert("Logged in user id :" + b);

            window.location = "https://pravalika-pro.github.io/PravalikaSahini/WelcomePage.html";
            aptrinsic('track', 'User Login');

        } else
            alert("Invalid User,enter \"testuser@gmail.com\"");
    } else
        alert("enter \"testuser@gmail.com\"");


    return b;
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
