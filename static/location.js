htmlEscape = function(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
};

document.addEventListener('DOMContentLoaded', function() {
       current_location=document.getElementById("curloc");
       current_location.textContent=htmlEscape(location.href);
}, false);

var pushState = history.pushState;
history.pushState = function() {
       pushState.apply(history, arguments);
       current_location=document.getElementById("curloc");
       current_location.textContent=htmlEscape(location.href);
};

