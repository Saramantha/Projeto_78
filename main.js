var images = [ "family.jpg", "avos.jpg", "irma.jpg", "mae.jpg"];
var names = [" Álbum de Família "," Manuel e Joelita" , " Laura" , " Lilian" ] ;

var i = 0;
function update()
{
    
    var numbersOfFamilyMemberInArray = 4;
    if(i == numbersOfFamilyMemberInArray)
{
    i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("familyMemberImage").src = updatedImage;
document.getElementById("familyMemberName").innerHTML = updatedName;
i++;
}
