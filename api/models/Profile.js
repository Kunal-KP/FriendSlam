/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true
    },
    phoneNumber: {
      type: 'integer',
      required: true
    },
    profilePic: {
      type: 'string'
    },
    email: {
      type: 'string',
      email: true
    },
    bloodGroup: {
      type: 'string'
    }
  }
};

