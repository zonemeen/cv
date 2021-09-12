/*
var view = View('.xxx')
*/
window.View = function (selector) {
    return document.querySelector(selector)
}