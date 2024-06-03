// Create a "close" button and append it to each list item
function createCloseButton(li) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var descriptionValue = document.getElementById("myDescription").value;
  
    var t = document.createTextNode(inputValue);
    var desc = document.createTextNode(descriptionValue);
  
    li.appendChild(t);
  
    if (inputValue === '') {
      alert("You must write a title!");
    } else {
      document.getElementById("myUL").appendChild(li);
  
      var descSpan = document.createElement("SPAN");
      descSpan.className = "description";
      descSpan.appendChild(desc);
      li.appendChild(descSpan);
  
      var date = new Date();
      var timestamp = document.createElement("SPAN");
      timestamp.className = "timestamp";
      timestamp.appendChild(document.createTextNode(`Added on: ${date.toLocaleString()}`));
      li.appendChild(timestamp);
    }
  
    document.getElementById("myInput").value = "";
    document.getElementById("myDescription").value = "";
  
    createCloseButton(li);
  }
  