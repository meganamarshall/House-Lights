const windowButtonsNode = document.getElementById('window-buttons');
const canvasNode = document.getElementById('canvas');

const windows = [
    'darkblue',
    'darkcyan',
    'darkgoldenrod'
];

for(let index = 0; index < windows.length; index++) {
    let window = windows[index];
    const windowButtonNode = document.createElement('button');
    windowButtonNode.textContent = window;
    windowButtonNode.value = window;
    windowButtonNode.classList.add('window-button', window);

    windowButtonNode.addEventListener('click', function() {
        paint(window);
        console.log(window);
    });

    windowButtonsNode.appendChild(windowButtonNode);
    console.log(windowButtonNode);
}

function paint(window) {
    // add windowpane to span in html
    const windowPane = document.createElement('span');
    windowPane.classList.add('window-pane', window);
    canvasNode.appendChild(windowPane);

}