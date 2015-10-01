import Ember from 'ember';

export default Ember.Component.extend({
  openUpdateCommentForm: false,

    actions: {
      updateComment() {
        this.set('openUpdateCommentForm', true);
      },

      saveUpdate(comment) {
        var params = {
        name: this.get('name'),
        content: this.get('content')
        }
        this.sendAction('saveUpdate', comment, params);
        this.set('openCommentUpdateForm', false);
      }
    }
});
