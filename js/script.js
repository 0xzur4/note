document.addEventListener('DOMContentLoaded', function() {
    const btnNew = document.querySelector('.btn-new');

    btnNew.addEventListener('click', function() {
        const newDiv = document.createElement('div');
        newDiv.className = 'ui-widget-content';
        const newP = document.createElement('p');
        newP.textContent = 'Drag me around';
        const newTextArea = document.createElement('textarea')
        newTextArea.style.width = "130px"
        newTextArea.style.height = "120px"

        newDiv.appendChild(newP);
        newDiv.appendChild(newTextArea);


        document.querySelector('.note').appendChild(newDiv);

        $(newDiv).draggable();
    });
});
