$(function () {
    var socket = io();
    $('#onButton').click(function(){
      var value = parseInt(document.getElementById("brightness").value);
      socket.emit('state', {"state": true, "brightness": value});
      return false;
    });
    $('#offButton').click(function(){
      var value = parseInt(document.getElementById("brightness").value);
      socket.emit('state', {"state": false, "brightness": value});
      return false;
    });
    $('#brightness').change(function(){
      var value = parseInt(this.value);
      socket.emit('brightness', value);
      return false;
    });
});
