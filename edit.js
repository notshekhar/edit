let input = document.querySelector('#input')
let output = document.querySelector('#output')
let reset = document.querySelector('#rset')
let doc = output.contentWindow.document

document.querySelector('#run').onclick = () => {
  let html = input.value 
  doc.body.innerHTML = html
}
reset.onclick = () => {
  let html = ""
  input.value = html
}

  
