var submitBtn = document.getElementById('submitButton');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

submitBtn.addEventListener('click', addItem);
itemList.addEventListener('click', delItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();
    var itemName = document.getElementById('itemName').value;
    var li = document.createElement('li');
    li.className = "list-group-item";

    var liText = document.createTextNode(itemName);
    li.appendChild(liText);
    document.getElementById('items').appendChild(li);

    var delBtn = document.createElement('button');

    delBtn.className = "btn btn-danger float-right btn-sm delete";

    var btnText = document.createTextNode('X');

    delBtn.appendChild(btnText);
    li.appendChild(delBtn);
}

function delItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure To Delete This Item ?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}