function search() {
    let search_text = document.getElementById("search-box").value
    let bodp = document.getElementsByClassName("content-right")[0].innerHTML
    let re = new RegExp(search_text, "gi")
    // document.getElementsByClassName("content-right")[0].innerHTML = bodp.replace("<span class=\"hlt\">", "")
    document.getElementsByClassName("content-right")[0].innerHTML = bodp.replace(re, `<span class="hlt">${search_text}</span>`)
}