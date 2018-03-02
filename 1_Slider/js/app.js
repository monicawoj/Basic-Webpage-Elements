/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function() {
    var previousButton = document.querySelector('#prevPicture');
    var nextButton = document.querySelector('#nextPicture');
    var sliderItems = document.querySelectorAll('.slider li');
    var sliderIndex = 0;

    //initialize first image
    makeVisible(sliderIndex);


    //move to previous
    previousButton.addEventListener('click', function(event) {
        sliderIndex -= 1;
        //for 'previous' when first image
        if (sliderIndex < 0) {
            sliderIndex = sliderItems.length - 1;
        }
        makeVisible(sliderIndex);
    });

    //move to next
    nextButton.addEventListener('click', function(event) {
        sliderIndex += 1;
        //for 'next' when last image visible
        if (sliderIndex > sliderItems.length - 1) {
            sliderIndex = 0;
        }
        makeVisible(sliderIndex);
    });

    //make list item visible
    function makeVisible(index) {
        var visibleItem = document.querySelector('li.visible');
        if (visibleItem !== null) {
            visibleItem.classList.remove('visible');
        }
        sliderItems[index].classList.add('visible');
    }

});