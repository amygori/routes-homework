//the model
var Sign = Backbone.Model.extend({
	defaults: function() {
		return {
		name: "",
		element: "",
		dates: "",
		imgURL: ""
		
		}
	},
	urlRoot: "scripts/data.js" 
	
});
//instantiate the model
var sign = new Sign();

//the collection
var Zodiac = Backbone.Collection.extend({
	model: Sign,
	url: "scripts/data.js"
});

//set up the routes
(function (){
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 
		}
	});
})();