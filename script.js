
    //selecting ul
    var ul =document.getElementById("list-container")
    var input=document.getElementById("input")
    function add()
    {
        var items =document.createElement("li")
        items.innerHTML=input.value + " <button onclick='deleteitem(event)'>Delete</button>"
        ul.append(items)
        input.value=''

    }
    function deleteitem(event)
    {
        event.target.parentElement.remove()

    }