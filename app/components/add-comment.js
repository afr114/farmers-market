import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        vendor: this.get('vendor')
      }
      this.sendAction('addComment', params);
      }
    }
});
