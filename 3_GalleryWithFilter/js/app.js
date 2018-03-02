document.addEventListener('DOMContentLoaded', function() {

    var imgs = document.querySelectorAll('#gallery img');
    var hideButton = document.querySelector('#hideButton');
    var showButton = document.querySelector('#showButton');
    var tagInput = document.querySelector('#tagInput');

    hideButton.addEventListener('click', function(event) {
        showOrHide('hide');
    });

    showButton.addEventListener('click', function(event) {
        showOrHide('show');
    });

    function showOrHide(action) {
        var tagInputText = tagInput.value;
        //console.log(tagInputText);
        imgs.forEach(function(element) {
            var allTags = element.dataset.tag;
            if (allTags.indexOf(tagInputText) !== -1) {
                if (action == 'show') {
                    element.classList.remove('invisible');
                } else if (action == 'hide') {
                    element.classList.add('invisible');
                }
            }
            else {
                console.log('No images with that tag, sorry!');
            }
        });
        tagInput.value = '';
    }

});