window.onload = function() {
  fetch('/common/headTag.html')
      .then(response => response.text())
      .then(data => {
          // Insert header HTML into the head tag
          document.head.insertAdjacentHTML('afterbegin', data);
      })
      .catch(error => console.error('Error loading header:', error));
};