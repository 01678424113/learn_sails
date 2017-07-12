/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new' : function(req,res){
		res.view();
	},
  /*  login: function (request, response) {
        request.addFlash('success', 'A success message.');
        return response.redirect('/sample/success');
    },*/
	create: function(req,res,next){
		User.create( req.params.all(), function userCreated(err,user){
			if(err) {
				req.addFlash('errname','Create fails'); // gán 1 flash có tên là errname và nội dung là Create flails
				return res.redirect('/user/new');
			}
			return res.redirect('/user/show/' + user.id);
			/*res.json(user);*/
		});
	},
	show: function (req,res,next) {
        User.findOne(req.param('id'), function foundUser(err,user) {
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user: user
			});
        });
    },
	index: function (req,res,next) {
		User.find(function foundUsers(err,users) {
			if(err) return next(err);
			res.view({
				users: users
			});
        });
    },
	edit: function (req,res,next) {
		User.findOne(req.param('id'),function foundUser(err,user) {
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user: user
			});
        });
    },
	update: function (req,res,next) {
		User.update(req.param('id'), req.params.all(), function userUpdated(err) {
			if(err) {
				return res.redirect('/user/edit/' + req.param('id'));
			}
			res.redirect('/user/show/'+ req.param('id'));
        });
    },
	delete: function (req,res,next) {
		User.destroy(req.param('id'), function userDelete() {
			res.redirect('/user');
        });
    }
	
	// * Sẽ view file new.ejs trong views/user
};

