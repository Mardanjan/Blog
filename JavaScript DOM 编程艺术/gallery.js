addLoadEvent(function() {
  var pTag = document.createElement('p')
  pTag.setAttribute('id', 'ptag')
  var text = document.createTextNode('This is')
  pTag.appendChild(text)
  var emTag = document.createElement('em')
  text = document.createTextNode(' my' )
  emTag.appendChild(text)
  pTag.appendChild(emTag)
  text = document.createTextNode(' content.')
  pTag.appendChild(text)
  var testDiv = document.getElementById('testDiv')
  testDiv.appendChild(pTag)

  var newH1 = document.createElement('h1')
  newH1.appendChild(document.createTextNode('this is h1'))

  testDiv.insertBefore(newH1, pTag)
  
  // insertAfter(newH1, pTag)
})


function insertAfter(newElement, targetElement) {
  var parentElement = targetElement.parentNode
  if (parentElement.lastChild == targetElement) {
    parentElement.appendChild(newElement)
  } else {
    parentElement.insertBefore(newElement, targetElement.nextSibling)
  }
}


function prepareGallery () {
  // 检测浏览器
  if (!document.getElementsByName) return false
  if (!document.getElementById) return false
  // 检测有没有这个dom
  var gallery = document.getElementById('imagegallery')
  if (!gallery) return false
  var links = gallery.getElementsByTagName('a')
  var placeholder = document.getElementById('placeholder')
  var errorImagepath = 'errorImage.png'
  var description = document.getElementById('description')
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      console.log('click' + i + 1 + 'th node')
      if (description) {
        description.childNodes[0].nodeValue = links[i].getAttribute('title')
      }
      let imgPath = links[i].getAttribute('href') ? links[i].getAttribute('href') : errorImagepath
      placeholder.setAttribute('src', imgPath)
      return false
    }
  }
}


addLoadEvent(prepareGallery)


/**
 * onload事件只能有一个
 * 如果想绑定多个onload的话，可以把旧的onload和新的onload放在一个匿名函数里
 * 然后把这个匿名函数赋值给onload
 * @param {*} func html解析完时运行的函数
 */
function addLoadEvent (func) {
  if (typeof window.onload != 'function') {
    window.onload = func
  } else {
    var oldOnload = window.onload
    window.onload = function () {
      oldOnload()
      func()
    }
  }
}

