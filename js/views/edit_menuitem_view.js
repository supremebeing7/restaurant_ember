Restaurant.EditMenuitemView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-menuitem', Restaurant.EditMenuitemView);