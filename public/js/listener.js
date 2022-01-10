var t = ''
async function gText(){
    console.log('start gtext')
    t = (document.all) ? document.selection.createRange().text : document.getSelection().toString()
    let data = {"element":t}
    console.log(`value of tdata is ${data.element}`)
    var xhr = new XMLHttpRequest()
    xhr.open("POST",'/',true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(data))
    console.log('finished')
}

document.onmouseup = gText