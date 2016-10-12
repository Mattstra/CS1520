/* Hnadle the form submission */
function submit_form() {
  var radios = document.getElementsByName('help');

  for(var i=0; i < radios.length; i++)
  {
    if(radios[i].checked)
    {
      alert("You are now leaving this website");
      window.open("http://chautauquawatershed.org/index.php/bigfoot");
    }
  }
}
