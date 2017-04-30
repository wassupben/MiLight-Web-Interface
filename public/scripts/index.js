$(function () {
    var socket = io();
    $('#onButton').click(function(){
      var value = parseInt(document.getElementById("brightness").value);
      socket.emit('state', {"state": true, "brightness": value, "zone": getZone()});
      return false;
    });
    $('#offButton').click(function(){
      var value = parseInt(document.getElementById("brightness").value);
      socket.emit('state', {"state": false, "brightness": value, "zone": getZone()});
      return false;
    });
    $('#brightness').change(function(){
      var value = parseInt(this.value);
      socket.emit('brightness', {"brightness": value, "zone": getZone()});
      return false;
    });
});


function getZone() {
  var zone;
  for (var i = 0; i <=4; i++) {
    if ($('#sel'+i).is(":checked"))
    {
      zone = i;
      console.log(i);
    }
  }
  return zone;
}
