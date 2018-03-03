document.addEventListener('DOMContentLoaded', function() {
    var mainListItems = document.querySelectorAll('.nav > ul > li');
    console.log(mainListItems);

    [...mainListItems].forEach(function(element) {
        element.addEventListener('mouseover', function(event) {
            var listPanel = this.querySelector('ul');
            if (subList) {
                    subList.style.display = 'block';
            }
        });
        element.addEventListener('mouseout', function(event) {
            var subList = this.querySelector('ul');
            if (subList) {
                subList.style.display = 'none';
            }
        });

    });

});