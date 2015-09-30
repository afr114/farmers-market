import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('vendor');
  },

  actions: {
    saveVendor(params) {
      var newVendor = this.store.createRecord('vendor', params);
      newVendor.save();
      this.transitionTo('index');
    }
  }
});
