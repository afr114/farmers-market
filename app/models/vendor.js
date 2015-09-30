import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  product: DS.attr(),
  website: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
