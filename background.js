var totalCount = 2;
function ChangeIt()
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'bgimages/'+num+'.png';
document.body.style.backgroundRepeat = "repeat";// Background repeat
}
