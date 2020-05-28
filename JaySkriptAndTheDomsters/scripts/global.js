function addClass(element, value) {
  if (!element.className) {
    element.className = value
  } else {
    let oldClassName = element.className
    let newClassName = value + ' ' + oldClassName
    element.className = newClassName
  }
}

function addLoadEvent (func) {
  let oldEvent = window.onload
  if (typeof window.onload != 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      oldEvent()
      func()
    }
  }
}

function insertAfter (newElement, targetElement) {
  let parentElement = targetElement.parentNode
  if (parentElement.lastChild == targetElement) {
    parentElement.appendChild(newElement)
  } else {
    parentElement.insertBefore(newElement, targetElement.nextSibling)
  }
}