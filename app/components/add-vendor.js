import Ember from 'ember';

export default Ember.Component.extend({
  openVendorForm: false,

  actions: {
    createVendor() {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        description: this.get('description'),
        website: this.get('website'),
        product: this.get('product')
      };
      this.sendAction('createVendor', params);
      this.set('openVendorForm', false)
    },

    addVendorForm() {
      this.set('openVendorForm', true);
    }
  }
});
