import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.sendAction('loadChart');
    },


    data1: Ember.computed('model', function() {
        return {
            datasets: [{
                data: [75, 85, 70],
                backgroundColor: [
                '#444', '#825', '#921'
            ],
            }],
            labels: [
                'HTML', 'CSS', 'JavaScript'
            ],
        }
    }),

    data2: Ember.computed('model', function() {
        return {
            datasets: [{
                data: [25, 20, 25, 15],
                backgroundColor: [
                    '#80bd10', '#379', '#a90', '#f72'
                ]
            }],
            labels: [
                'Java', 'C++', 'Python', 'PHP'
            ]
        }
    }),

    data3: Ember.computed('model', function() {
        return {
            datasets: [{
                data: [90, 80, 40],
                backgroundColor: [
                    '#2020aa', '#4080ff', '#604060'
                ]
            }],
            labels: [
                'MySQL', 'MSSQL', 'MongoDB'
            ]
        }
    }),

    data4: Ember.computed('model', function() {
        return {
            datasets: [{
                data: [90, 50, 80],
                backgroundColor: [
                    '#902222', '#44ff99', '#77cc33'
                ]
            }],
            labels: [
                'Ember.js', 'Angular.js', 'Bootstrap'
            ]
        }
    }),

    Chart: {
        defaults: {
            global: {
                animation: {
                    duration: 3000
                }
            }
        }
    },

    options1: {
        title: {
            display: true,
            text: 'Front-end'
        },
        // animation: {
            // animation: true,
            // animateRotate: true,
            
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke: true,

            //String - The colour of each segment stroke
            segmentStrokeColor: "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth: 2,

            //Number - The percentage of the chart that we cut out of the middle
            cutoutPercentage: 50, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps: 100,


            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: false,

            animationEnabled: true,

        animation: {
            duration: 2000,
            //String - Animation easing effect
            easing: "easeOutBounce"

        },

        // }
    },

    options2: {
        title: {
            display: true,
            text: 'Back-end'
        }
    },

    options3: {
        title: {
            display: true,
            text: 'Database'
        }
    },

    options4: {
        title: {
            display: true,
            text: 'Frameworks'
        }
    },
    
    actions: {

    loadChart() {
        // $(function () {
        //     $('.min-chart#chart-sales').easyPieChart({
        //     barColor: "#4caf50",
        //     onStep: function (from, to, percent) {
        //         $(this.el).find('.percent').text(Math.round(percent));
        //     }
        // });
    // });

    },

    logConsole() {
        console.log("AnimationComplete");
    }
}
});
