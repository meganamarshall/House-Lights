const windowButtonsNode = document.getElementById('window-buttons');
const canvasNode = document.getElementById('canvas');
const transformButtonsNode = document.getElementById('light-buttons');

const windows = [
    'darkblue',
    'darkcyan',
    'darkgoldenrod'
];

for(let index = 0; index < windows.length; index++) {
    let window = windows[index];
    const windowButtonNode = document.createElement('button');
    windowButtonNode.textContent = 'window!';
    windowButtonNode.value = window;
    windowButtonNode.classList.add('window-button', window);

    windowButtonNode.addEventListener('click', function() {
        const windowQuantity = document.querySelectorAll('.window-pane').length;
        if(windowQuantity < 10) {
            paint(window);
        }

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

for(let index = 0; index < windows.length; index++) {
    let window = windows[index];
    const transformButtonNode = document.createElement('button');
    transformButtonNode.textContent = 'light!';
    transformButtonNode.value = window;
    transformButtonNode.classList.add('light-button', window);

    transformButtonNode.addEventListener('click', function() {
        transform(window);
    });

    transformButtonsNode.appendChild(transformButtonNode);
    console.log(transformButtonsNode);
}

function transform(window) {
    const selector = '.window-pane.' + window;
    const windowPanes = document.querySelectorAll(selector);

    for(let index = 0; index < windowPanes.length; index++) {
        windowPanes[index].classList.add('new-color');
    }
}
