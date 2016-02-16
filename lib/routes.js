FlowRouter.route('/', {
	subscriptions: function (params, queryParams) {
		this.register('posts', Meteor.subscribe('allPosts'));
	},
	action: function (params, queryParams) {
		FlowLayout.render('layout', { top: 'header', main: 'postsList' });
	},
	name: 'home'
});

FlowRouter.route('/blog/:postId', {
	subscriptions: function (params, queryParams) {
		this.register('post', Meteor.subscribe('singlePost', params.postId));
	},
	action: function (params, queryParams) {
		FlowLayout.render('layout', { top: 'header', main: 'singlePost'});
	},
	name: 'blog'
});