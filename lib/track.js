var tracker = {};
tracker.siteKey = //insert your site key here
tracker.track = function(eventType, UID, UIDType){
	var request = new XMLHttpRequest();
		request.open("POST", "http://sleepy-cliffs-1333.herokuapp.com/events", true);
		request.setRequestHeader("Content-type", "application/json");
		request.send(JSON.stringify({
			apiKey: tracker.siteKey,
			eventType: eventType,
			UID: UID,
			UIDType: UIDType
		}));
}
