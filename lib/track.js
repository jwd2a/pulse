$(document).ready(function(){
  var tracker = {};
  tracker.siteKey = "a129afc8-3fb7-165a-7fde-0b591f60868a";
  $("*[data-action]").click(function(e){
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/events",
      data: {
        apiKey: tracker.siteKey,
        eventType: 	$(e.currentTarget).attr("data-action"),
        UID:  		$(e.currentTarget).attr("data-uid"),
        UIDType: 	$(e.currentTarget).attr("data-uidType"),
        eToken: 	tracker.trackingKey
      }
    });
  });
  
  tracker.createTrackingKey = function(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  
  if(!window.localStorage.getItem("eToken")){
    window.localStorage.setItem("eToken", tracker.createTrackingKey());
  }else{
    tracker.trackingKey = window.localStorage.getItem("eToken");
  }
});
