var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var HeadlineSchema = new Schema ({
    headline: {
        type: String,
        required: true
    },
    summaryOne: {
        type: String,
        required: true
    },
    img: {
		type: String,
		default: "/assets/images/unavailable.jpg"
	},
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    },
    note: 
        []
    
});

var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;