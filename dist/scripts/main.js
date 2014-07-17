[
	{
	name: "Aries",
	element: "fire",
	dates: "March 21-April 19",
	qualities: "active, initiating, independent, aggressive, impatient, energetic, assertive",
	imgURL: "images/aries.gif"
	},
	{
	name: "Taurus",
	element: "earth",
	dates: "April 20-May 20",
	qualities: "persevering, down-to-earth, stable, stubborn, dependable, physical, sensual",
	imgURL: "images/taurus.gif"
	},
	{
	name: "Gemini",
	element: "air",
	dates: "May 21-June 20",
	qualities: "curious, adaptable, flexible, changeable, responsive, sociable, engaged",
	imgURL: "images/gemini.gif"
	},
	{
	name: "Cancer",
	element: "water",
	dates: "June 21-July 22",
	qualities: "gentle, caring, conservative, feeling, nurturing, sensitive, contemplative",
	imgURL: "images/cancer.gif"
	},
	{
	name: "Leo",
	element: "fire",
	dates: "July 23-August 22",
	qualities: "magnanimous, generous, hospitable, dramatic, warm, authoritative, active, open",
	imgURL: "images/leo.gif"
	},
	{
	name: "Virgo",
	element: "earth",
	dates: "August 23-September 22",
	qualities: "analytical, intelligent, reserved, critical, helpful, conscientious",
	imgURL: "images/virgo.gif"
	},
	{
	name: "Libra",
	element: "air",
	dates: "September 23-October 22",
	qualities: "just, friendly, genteel, accommodating, fair, diplomatic, likable, indecisive, respectful",
	imgURL: "images/libra.gif"
	},
	{
	name: "Scorpio",
	element: "water",
	dates: "October 23-November 21",
	qualities: "passionate, perceptive, resourceful, psychological, determined, probing, deep, focused",
	imgURL: "images/scorpio.gif"
	},
	{
	name: "Sagittarius",
	element: "fire",
	dates: "November 22-December 21",
	qualities: "optimistic, restless, enthusiastic, adventurous, honest, fun-loving, outspoken, independent",
	imgURL: "images/sagittarius.gif"
	},
	{
	name: "Capricorn",
	element: "earth",
	dates: "December 22-January 19",
	qualities: "tenacious, conservative, resourceful, disciplined, wise, ambitious, prudent, constant",
	imgURL: "images/capricorn.gif"
	},
	{
	name: "Aquarius",
	element: "air",
	dates: "January 20-February 18",
	qualities: "individualistic, independent, humanitarian, inventive, original, eccentric, idealistic, detached",
	imgURL: "images/aquairus.gif"
	},{
	name: "Pisces",
	element: "water",
	dates: "February 19-March 20",
	qualities: "intuitive, artistic, humane, empathetic, sensitive, compassionate, tender, impressionable",
	imgURL: "images/pisces.gif"
	},
]
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