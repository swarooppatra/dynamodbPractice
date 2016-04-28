var params = {
	RequestItems: {
		"Music": [{
			PutRequest: {
				Item: {
					"artist": "No One you know",
					"songtitle": "Call me today",
					"albumtitle": "Somewhat famous",
					"year": 2015,
					"price": 2.15,
					"genre": "country",
					"tags": {
						"composer": ["Smith", "Jones", "Davis"],
						"lengthinsecond": 214
					}
				}
			}
		}, {
			PutRequest: {
				Item: {
					"artist": "No One you know1",
					"songtitle": "Call me today1",
					"albumtitle": "Somewhat famous1",
					"year": 2014,
					"price": 3.15,
					"genre": "country",
					"critialrating": 4.5,
					"tags": {
						"composer": ["Smith", "Jones", "Davis"],
						"lengthinsecond": 119
					}
				}
			}
		}]
	}
};

docClient.batchWrite(params, function(err, data) {
	if (err)
		console.log(JSON.stringify(err, null, 2));
	else
		console.log(JSON.stringify(data, null, 2));
});
