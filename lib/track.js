var tracker = {};
tracker.track = function(eventType, UID, UIDType){
	var request = new XMLHttpRequest();
		request.setRequestHeader("Content-type", "application/json");
		request.open("POST", "http://sleepy-cliffs-1333.herokuapp.com/events", true);
		request.send({
			eventType: eventType,
			UID: UID,
			UIDType: UIDType
		});
}
