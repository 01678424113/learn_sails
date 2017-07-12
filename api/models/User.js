/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,// không hiển thị pass word
  	attributes: {
	  	name: {
	  		type: 'string',
			minLength: 5
	  	},
	  	title:{
	  		type:'string'
	  	},
	  	email: {
	  		type: 'string',
	  		email: true, //Kiểu email
	  		required: true, //Bắt buộc có
	  		unique: true //Không lặp lại
	  	},
	  	enctyptedPassword: {
	  		type: 'string',
            minLength: 5,
            maxLength: 30
	  	}
  	}
};

