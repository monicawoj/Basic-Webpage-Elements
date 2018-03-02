/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function() {
    var galleryItems = document.querySelectorAll('.gallery li');
    var body = document.querySelector('body');

    galleryItems.forEach(function(element) {
        element.addEventListener('click', function(event) {
            var imgSrc = this.firstElementChild.getAttribute('src');

            //append selected image to body
            var fullScreenItem = document.createElement('div');
            var newImg = document.createElement('img');
            newImg.setAttribute('src',imgSrc);

            var newButton = document.createElement('button');
            newButton.classList.add('close');

            fullScreenItem.appendChild(newImg);
            fullScreenItem.appendChild(newButton);
            body.appendChild(fullScreenItem);

            //when new button clicked
            newButton.addEventListener('click', function(event) {
               body.removeChild(fullScreenItem);
            });

        });
    });

});
