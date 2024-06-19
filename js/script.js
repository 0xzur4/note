// hmm
'use strict'


document.addEventListener('DOMContentLoaded', function() {
    const btnNew = document.querySelector('.btn-new');

    btnNew.addEventListener('click', function() {
        const newDiv = document.createElement('div');
        newDiv.style.borderRadius = "12px"
        newDiv.className = 'ui-widget-content'
        newDiv.contentEditable = "true"
        const newP = document.createElement('p')
        newP.textContent = 'Drag me around'

        newDiv.appendChild(newP);


        document.querySelector('.note').appendChild(newDiv);

        $(newDiv).draggable().resizable();
    });
});
