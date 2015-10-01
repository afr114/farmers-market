import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('vendor', params.vendor_id);
  },

  actions: {
    update(vendor, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          vendor.set(key,params[key]);
        }
      });
      vendor.save();
      this.transitionTo('vendor', params.vendor_id);
    },

    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var vendor = params.vendor;
      vendor.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return vendor.save();
      });
      this.transitionTo('vendor', vendor.id);
    },

    saveUpdate(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
    },

    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
