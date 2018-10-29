import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.send('calculateAge', '08/30/1994'); // Call action and send my Birthday
    },

    slide: 0,
    isShowingModal: false,
    
    actions: {
        calculateAge(birthday) {
            let that = this;
            let tempAge = 0;
            let myAge = 0;
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1; // January is 0
            let yyyy = today.getFullYear();
            let ddBirth = birthday.slice(3, 5);
            let mmBirth = birthday.slice(0, 2);
            let yyyyBirth = birthday.slice(6, 10);
            if (mm - mmBirth < 0 && dd - ddBirth < 0) {
                tempAge = yyyy - yyyyBirth - 1;                
            }
            else {
                tempAge = yyyy - yyyyBirth;                
            }
            that.set('myAge', tempAge);
        },
        toggleModal: function() {
            // if (typeof $.fn.fullpage.destroy == 'function') { 
            //     $.fn.fullpage.destroy('all');
            // }
            // $.fn.fullpage.destroy('all');
            this.toggleProperty('isShowingModal');
        }
    }
});
