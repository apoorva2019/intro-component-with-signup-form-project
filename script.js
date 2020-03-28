  
  var fname = document.forms['myForm']['First Name'];
  var lname = document.forms['myForm']['Last Name'];
  var password = document.forms['myForm']['Password'];
  var email = document.forms['myForm']['Email Address'];
  var fname_error = document.getElementById('fname_error');
  var lname_error = document.getElementById('lname_error');
  var email_error = document.getElementById('email_error');
  var password_error = document.getElementById('password_error');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 function validateForm(){
  if (fname.value == "") {
    fname.style.border = "1px solid red";
    document.getElementById('fname_div').style.color = "red";
    document.getElementById('icon-error1').style.display = "inline-block";
    fname_error.textContent = "First name cannot be empty";
    fname.focus();
    return false;
  }
  else{
    fname_error.innerHTML="";
    document.getElementById('fname_div').style.color = "grey";
    document.getElementById('icon-error1').style.display = "none";

  }
  if (lname.value == "") {
    lname.style.border = "1px solid red";
    document.getElementById('lname_div').style.color = "red";
    document.getElementById('icon-error2').style.display = "inline-block";
    lname_error.textContent = "Last name cannot be empty";
    lname.focus();
    return false;
  }
  else{
    lname_error.innerHTML="";
    document.getElementById('lname_div').style.color = "grey";
    document.getElementById('icon-error2').style.display = "none";
  }
  if (!email.value.match(mailformat)) {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    document.getElementById('icon-error3').style.display = "inline-block";
    email_error.textContent = "Looks like this is not an email";
    email.focus();
    return false;
  }
  else{
    email_error.innerHTML="";
    document.getElementById('email_div').style.color = "grey";
    document.getElementById('icon-error3').style.display = "none";
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    document.getElementById('icon-error4').style.display = "inline-block";
    password_error.textContent = "Password cannot be empty";
    password.focus();
    return false;
  }
  else{
    password_error.innerHTML="";
    document.getElementById('password_div').style.color = "grey";
    document.getElementById('icon-error4').style.display = "none";
  }
 }