import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.send('calculateAge', '08/30/1994'); // Call action and send my Birthday
        console.log(window.jQuery.fn.jquery);
        console.log('The page variable', page)
        this.set('page', 3);
    },

    slide: 0,

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

        clickers() {
            console.log('Clicked, page is', page);
        },

        // setIt() {
        //     this.set('slide', page)
        // }
    }
});

var page = 0;

$(document).ready(function(){
    // $('#myCarousel').bind('slide.bs.carousel', function (e) {
    //     console.log('Slide', $('#myCarousel .active').index('#myCarousel .item'));
    // });

    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var active = $(e.target).find('.carousel-inner > .item.active');
        page = active.index();
        // setIt();
        console.log('page', page);
    });
});
