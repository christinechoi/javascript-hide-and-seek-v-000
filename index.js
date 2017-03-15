

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}


function increaseRankBy(n) {
  const nodes = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = nodes.length; i < l; i++) {
    nodes[i].innerHTML = (i + 4).toString()
  }
}


function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div div div div div')[0]
}
