var params = {
	TableName: "Music",
	KeySchema: [{
		AttributeName: "artist",
		KeyType: "HASH"
	}, {
		AttributeName: "songtitle",
		KeyType: "RANGE"
	}],
	AttributeDefinitions: [{
		AttributeName: "artist",
		AttributeType: "S"
	}, {
		AttributeName: "songtitle",
		AttributeType: "S"
	}],
	ProvisionedThroughput: {
		ReadCapacityUnits: 1,
		WriteCapacityUnits: 1
	}
};

dynamodb.createTable(params, function(err, data) {
	if (err)
		console.log(JSON.stringify(err, null, 2));
	else
		console.log(JSON.stringify(data, null, 2))
});
