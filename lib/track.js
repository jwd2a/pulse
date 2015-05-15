var tracker = {};
tracker.track = function(UID, UIDType){
	var request = new XMLHttpRequest();
		request.setRequestHeader("Content-type", "application/json");
		request.open("POST", "http://sleepy-cliffs-1333.herokuapp.com/events", true);
		request.send({
			UID: UID,
			UIDType: UIDType
		});
}
