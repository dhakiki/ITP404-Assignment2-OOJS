


var Accordion = function(options) { //pas an object literal when declare accordion
	this.$el = $(options.sel); //means is a jquery element!!

	this.hideContent(); //this represents that instance of accordion
	this.bind();
	
};

Accordion.prototype.replaceLabels = function(newHead) {
	this.$el.find('.label').text(newHead);
};

Accordion.prototype.hideContent = function() {
	this.$el.find('.content').slideUp().eq(0).slideDown(0).prev().addClass('active');
};

Accordion.prototype.expandAll = function() {
	this.$el.find('.content').show();
};

Accordion.prototype.activateAllLabels= function() {
	var that = this;
	this.$el.on('click', function() {
		that.$el.find('.label').addClass('active');
	});
};

Accordion.prototype.bind= function() {

	var that = this; //saving accordion object so can access other parts of accordion in event listiner

	this.$el.on('click', '.label', function() {
		//console.log(this, that);
		that.$el.find('.content').slideUp(300);
		that.$el.find('.label').removeClass('active');
		$(this).next().slideDown(300); // wtv we click on
		$(this).addClass('active');
	});
};


