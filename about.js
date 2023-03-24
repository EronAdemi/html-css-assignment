function validateForm() {
    let n = document.forms["myForm"]["fname"].value;
    let l = document.forms["myForm"]["flastname"].value;
    let e = document.forms["myForm"]["femail"].value;
    let p = document.forms["myForm"]["fphone"].value;
  
      var valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
      var valPhone = /^\d{8}$/; 
    if (n == "") {
      document.forms["myForm"]["fname"].style.borderColor = "red";
      alert("Name must be filled out!");
  
      return false;
    } else {
      document.forms["myForm"]["fname"].style.borderColor = "black";
    }
    if (l == "") {
      document.forms["myForm"]["flastname"].style.borderColor = "red";
      alert("Last Name must be filled out!");
      return false;
    } else {
      document.forms["myForm"]["flastname"].style.borderColor = "black";
    }
    if (e == "" || !valEmail.test(e)) {
      document.forms["myForm"]["femail"].style.borderColor = "red";
      alert("Your Email is invaild!");
      return false;
    } else {
      document.forms["myForm"]["femail"].style.borderColor = "black";
    }
    if (p == "" || !valPhone.test(p)) {
      document.forms["myForm"]["fphone"].style.borderColor = "red";
      alert("invalid phone number!");
      return false;
    } else {
      document.forms["myForm"]["fphone"].style.borderColor = "black";
    }
    return true;
  }
  