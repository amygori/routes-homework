//MODEL
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

//COLLECTION
var Zodiac = Backbone.Collection.extend({
	model: Sign,
	url: "scripts/data.js"
});

//instantiate the collection
var zodiac = new Zodiac();

//VIEWS
//first the list view
ZodiacView = Backbone.View.extend({
		//tagName: 'li',
		model: Sign,
		render: function(){
	        this.template = _.template($('#list-template').html());
	        var rendered = this.template({zodiac: this.collection});
	        this.$el.html(rendered); 
	        return this; 
		},
		initialize: function() {
    	 this.collection.fetch();
    	 return this;
 	    },
		events: {
			'click .image' : 'render',
			
		}
});
//then the detail view
SignView = Backbone.View.extend({
	model: Sign,
	render: function(){
		this.template = _.template($('#detail-template').html());
	        var rendered = this.template({zodiac: this.model});
	        this.$el.html(rendered); 
	        return this; 
	},
	initialize: function(){
		this.model.fetch();
		return this;
	}
})

//set up the routes
(function(){
	var AppRouter = Backbone.Router.extend({
		routes: {
			'zodiac/:id': 'getZodiac',
			'*actions': 'defaultRoute'
        }
	});
})();

var AppRouter;
// Instantiate the router
var app_router = new AppRouter();
app_router.on('route:getZodiac', function (id) {
    console.log(id);   
});
app_router.on('route:defaultRoute', function (actions) {
    console.log(actions); 
});


Backbone.history.start();