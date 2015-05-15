var tracker = {};
tracker.track = function(UID, UIDType){
	var request = new XMLHttpRequest();
		request.setRequestHeader("Content-type", "application/json");
		request.open("POST", "http://localhost:3000", true);
		request.send({
			UID: UID,
			UIDType: UIDType
		});
}
