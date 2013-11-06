var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
	name : String,
	status : Number,
	owner : {
		type: Schema.ObjectId,
		ref: 'Person'
	},
	blockages : [{
		title: String,
		status: Number,
		owner: {
			type: Schema.ObjectId,
			ref: 'Person'			
		}
	}]
});

mongoose.model('Task', TaskSchema);