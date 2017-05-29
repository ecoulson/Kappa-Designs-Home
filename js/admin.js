(function () {
  var page = window.location.pathname;
  page.replace(".html", "");
  console.log(page);
  var str = "";
  var adminPanelPageUrl = "http://localhost:3000/api/html" + page;
  $.ajax({
    url: adminPanelPageUrl,
    type: "GET",
    headers: {
      'Access-Control-Allow-Headers': 'Origin, Content-Type',
      'Access-Control-Allow-Origin': "*",
    },
    success: function (data) {
      data = JSON.parse(data);
      htmlNode = findHtmlNode(data.DOM);
      traverseDOM(htmlNode);
      var newDoc = document.open("text/html", "replace");
      newDoc.write(str);
      newDoc.close();
    },
    error: function () {

    }
  })

  function findHtmlNode(dom) {
    for (var i = 0; i < dom.length; i++) {
      if (dom[i].name == "html") {
        return dom[i];
      }
    }
    return null;
  }

  function createElement(mockNode) {
    if (mockNode.type == "tag" || mockNode.type == "script") {
      var string = "<";
      var style = " style=\"";
      string += mockNode.name;
      if (mockNode.hasOwnProperty("attribs")) {
        var keys = Object.keys(mockNode.attribs);
        for (var i = 0; i < keys.length; i++) {
          console.log(keys[i]);
          if (keys[i] == "backgroundImage") {
            style += "background-image: " + mockNode.attribs[[keys[i]]] + ";";
          } else {
            string += " " + keys[i] + "=";
            string += "\"" + mockNode.attribs[keys[i]] + "\"";
          }
        }
      }
      style += "\"";
      string += style;
      string += ">";
      return string;
    } else {
      return mockNode.data;
    }
  }

  function traverseDOM(node) {
    if (node != null) {
      if (node.hasOwnProperty("children")) {
        for (var i = 0; i < node.children.length; i++) {
          str += createElement(node.children[i]);
          traverseDOM(node.children[i]);
        }
      }
      if (node.type != "text") {
        str += "</" + node.name + ">";
      }
    }
  }
})();
