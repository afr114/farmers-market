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
    }
  }
});
