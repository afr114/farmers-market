import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(vendor) {
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        description: this.get('description'),
        website: this.get('website'),
        product: this.get('product')
      };
      this.sendAction('update', vendor, params);
    }
  }
});
