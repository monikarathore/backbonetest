// backbone model view
/*var valueData = function(){
	var name = $("input[name = 'name']").val();
	var email = $("input[name = 'email']").val();
	var phone = $("input[name = 'phone']").val();
	var themeColor = $("input[name = 'themeColor']").val();
	var dob = $("input[name = 'dob']").val();
	var marks = $("input[name = 'marks']").val();
}*/

var dataModel = Backbone.Model.extend({
	defaults:{
		'fName': 'Monika',
		'email': 'monika@medsolis.com',
		'phone': '1234567895',
		'themeColor': '#c00',
		'dob': '08/15/1989',
		'marks': '50'
	},
	initialize: function(){
		alert("Model is working");
	}
});


var formData = Backbone.View.extend({
	el:'#fromTemplateRender',
	formTemplate: _.template($('#formTemplate').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click button#saveFromData': 'dataSAve'
	},
	render: function() {
		this.$el.html( this.formTemplate() );
		_.bindAll(this, 'render');
	},
	dataSAve: function(){
		var personname = $("input[name = 'name']").val();
		var email = $("input[name = 'email']").val();
		var phone = $("input[name = 'phone']").val();
		var themeColor = $("input[name = 'themeColor']").val();
		var dob = $("input[name = 'dob']").val();
		var marks = $("input[name = 'marks']").val();
		var jsonData = {
			'fName': personname,
			'email': email,
			'phone': phone,
			'themeColor': themeColor,
			'dob': dob,
			'marks': marks
		};
 
		dm.set(jsonData);
		alert('save event is working');  
	}
});

var tabelDataView = Backbone.View.extend({
	el:$('#informationDataContainertable'),
	template: _.template($('#tableData').html()),
	initialize: function() {
		this.model.on('change', this.render, this);
        console.log(this.model);
		this.render();
	},
	render: function() {
		this.$el.append( this.template({"data" : this.model }) );
	}
});

var dm = new dataModel();
var tDV = new tabelDataView({
	model: dm
});

var initForm = new formData();