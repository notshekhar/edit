let input = document.querySelector('#input')
let output = document.querySelector('#output')
let reset = document.querySelector('#rset')
let doc = output.contentWindow.document

input.onclick = () => {
  let html = input.value 
  doc.body.innerHTML = value
}
reset.onclick = () => {
  let html = "<!DOCTYPE html>↵<html>↵<head>↵<title>↵↵</title>↵</head>↵<body>↵↵↵↵</body>↵</html>"
  input.value = html
}

  
