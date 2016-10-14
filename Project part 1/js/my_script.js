/* Hnadle the form submission */
function submit_form() {
  var radios = document.getElementsByName('help');

  for(var i=0; i < radios.length; i++)
  {
    if(radios[0].checked)
    {
      alert("You are now leaving this website");
      window.open("http://chautauquawatershed.org/index.php/bigfoot");
      return false;
    }

    else {
      alert("Bigfoot needs to find a good home");
      return false;
    }
  }
}
