Template.postsList.helpers({
	getPosts: function () {
		return Posts.find({}, { sort: {vcreatedAt: -1 }});
	}
});