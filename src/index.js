const windowButtonsNode = document.getElementById('window-buttons');
const canvasNode = document.getElementById('canvas');
const transformButtonsNode = document.getElementById('transform-buttons');

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
        // make a variable that equals the length of the string
        // make a loop that limits the length to 8
        const windowQuantity = document.querySelectorAll('.window-pane').length;
        if(windowQuantity < 8) {
            paint(window);
        }
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

for(let index = 0; index < windows.length; index++) {
    let light = windows[index];
    const transformButtonNode = document.createElement('button');
    transformButtonNode.textContent = light;
    transformButtonNode.value = light;
    transformButtonNode.classList.add('transform-button', light);

    transformButtonNode.addEventListener('click', function() {
        transform(window);
    });
    transformButtonsNode.appendChild(transformButtonNode);
    console.log(transformButtonNode);
}

