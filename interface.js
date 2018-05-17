$(document).ready(function(){
  var thermostat = new Thermostat()
  $('.temperature').text(thermostat.temperature);

$(".up").click(function(){
  thermostat.up();
  $('.temperature').text(thermostat.temperature);
});


$(".down").click(function() {
  thermostat.down();
  $('.temperature').text(thermostat.temperature);
});

$(".toggle-ps-mode").click(function() {
  if (thermostat.powerSavingIsOn === true) {
  thermostat.turnPowerSavingOff()
  $("#Status").text("Normal")
} else {
  thermostat.turnPowerSavingOn()
  $("#Status").text("Saving")
}
});

$('.reset-button').click(function(){
  thermostat.reset();
  $('.temperature').text(thermostat.temperature);
})



})
