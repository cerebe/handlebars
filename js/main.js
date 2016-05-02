(function($) {
    $(function() {
        $(function() {
            'use strict';

            // ADD CARD
            function addCard(template) {
                /*var data = {
                    title: 'Newly generated card' + ++cardNum,
                    body: 'New card body' + cardNum,
                    cardNum: cardNum,
                    comments: [
                        {
                            author: {firstName: "Roberto", lastName: "Baggio"},
                            message: "Nice card!"
                        },
                        {
                            author: {firstName: "Alessandro", lastName: "Del Piero"},
                            message: "Me not like it.",
                            isSpecial: true
                        }
                    ]
                };*/
                $.ajax({
                        url: 'http://www.json-generator.com/api/json/get/ckuIYGaAAy?indent=2',
                        dataType: 'jsonp',
                        success: function (data) {
                            var totalItem = data.length;
                            for (var i = 0; i < totalItem; i++) {
                                var thisData = data[i];
                                console.log(thisData);
                                // Add custom props
                                if (thisData.gender === 'female') {
                                    thisData.isFemale = true;
                                }
                                thisData.cardNum = i + 1;
                                // Add card
                                var newCard = template(thisData),
                                    cardContainer = $('.card-container');
                                // Add card to container
                                cardContainer.append(newCard);
                            }
                        }
                    }
                );
            }

            function bindAddButton() {
                var addButton = $('.btn--add-card');
                addButton.on('click', function(e) {
                    e.preventDefault();
                    var template = HH.card;
                    addCard(template);
                });
            }

            function bindScroll() {
                $(window).on('scroll', _.throttle(onScroll,100));
                //$(window).on('scroll', onScroll);
            }

            function onScroll() {
                console.log('scrolling');
            }

            // Init
            function init() {
                bindAddButton();
                bindScroll();
            }

            // Global var, just for easy example
            var cardNum = 1;
            init();
        });
    });
})(jQuery);