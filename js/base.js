let raw_body;
function load(){
    raw_body = document.getElementsByClassName("content-right")[0].innerHTML
}
function search() {
    let search_text = document.getElementById("search-box").value
    document.getElementsByClassName("content-right")[0].innerHTML = raw_body
    var regex = new RegExp(search_text, 'gi');

    var textNodes = document.createTreeWalker(document.getElementsByClassName("content-right")[0], NodeFilter.SHOW_TEXT, null, false);
    let nodeToReplace = []
    while(node = textNodes.nextNode()) {
        if (node.textContent.includes(search_text)) {
            nodeToReplace.push(node)
        }
    }
    nodeToReplace.forEach(function(node){
        var hld = node.textContent.replace(regex, '<span class="hlt">' + search_text + "</span>")
        var newNode = document.createElement('span')
        newNode.innerHTML = hld
        node.parentNode.replaceChild(newNode, node)
    })
}