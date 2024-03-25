function createAlert(beforeEl = HTMLElement, items = [{ image: null, text: null }]) {
    var div = document.createElement("div")
    div.classList.add("alert")
    if (items[0].text === null) {
        return
    }
    for (var i = 0; i < items.length; i++) {
        if (items[i].image) {
            // потом
        }
        else {
            div.append(items.text)
        }
    }
}