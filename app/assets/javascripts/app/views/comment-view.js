(function () {

  window.CommentView = Backbone.View.extend({
  	events: {
  		'submit': 'deleteComment' 
  	},
    className: 'row comment',
    template: _.getTemplate('comment'),
    render: function () {
      var newCommentHtml = this.template( this.model.toJSON() );
      $(this.el).html(newCommentHtml);
    },
    deleteComment: function(e) {
    	e.preventDefault();
    	this.collection.destroy('comment');
    }
  });

})();
