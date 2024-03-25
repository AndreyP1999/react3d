export function ControllerwithKeyCode(code, createScene) {
    switch (code) {
        case 'KeyQ':
            createScene.changeFocus() //??
            break;
        case 'ShiftLeft':
            createScene.setSnap() //??
            break;
        case 'ControlLeft':
            createScene.removeSnap() //??
            break;
        case 'KeyT':
            createScene.setModeTranslate()
            break;
        case 'KeyR':
            createScene.setModeRotate()
            break;
        case 'KeyS':
            createScene.setModeScale()
            break;
        case 'NumpadSubtract':
            createScene.reduceVectorsInController()
            break;
        case 'NumpadAdd':
            createScene.increaseVectorsInController()
            break;
        case 'KeyX': // X
            createScene.showX()
            break;
        case 'KeyY': // X
            createScene.showY()
            break;
        case 'KeyZ': // X
            createScene.showZ()
            break;
        case 'KeyM':
            var svg = document.querySelector(`svg[data-key-code="${code}"`)
            console.log(svg.scrollHeight,svg.scrollWidth);
            createScene.changeFocus() //??
            break;
    }
}