import Component from '@ember/component';

export default Component.extend({
    showContact: false,

    actions: {
        toggleContact: function() {
            this.toggleProperty('showContact');
        }
    }

});
