$(document).ready(function(){
  var tracker = {};
  tracker.siteKey = // your site key
  $("*[data-pulse-action]").click(function(e){
    $.ajax({
      type: "POST",
      url: "http://sleepy-cliffs-1333.herokuapp.com/events",
      data: {
        apiKey: tracker.siteKey,
        eventType: 	$(e.currentTarget).attr("data-pulse-action"),
        UID:  		$(e.currentTarget).attr("data-pulse-uid"),
        UIDType: 	$(e.currentTarget).attr("data-pulse-uidType"),
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
  
  if(!window.localStorage.getItem("pulseEToken")){
    window.localStorage.setItem("pulseEToken", tracker.createTrackingKey());
  }else{
    tracker.trackingKey = window.localStorage.getItem("pulseEToken");
  }
});
