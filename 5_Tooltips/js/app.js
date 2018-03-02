document.addEventListener('DOMContentLoaded', function() {

    var tooltips = document.querySelectorAll('.tooltip');
    //console.log(tooltips);
    [...tooltips].forEach(function(element) {

        //add tooltip on mouseover
        element.addEventListener('mouseover', function(event) {
            var tooltipToAdd = document.createElement('span');
            tooltipToAdd.classList.add('tooltipText');
            tooltipToAdd.innerText = element.dataset.text;
            element.appendChild(tooltipToAdd);
        });

        //hide tooltip on mouseout
        element.addEventListener('mouseout', function(event) {
            var tooltipToRemove = element.querySelector('span');
            element.removeChild(tooltipToRemove);
        });
    });

});


/*
 <span class="tooltipText">Text tooltipa</span>
 */