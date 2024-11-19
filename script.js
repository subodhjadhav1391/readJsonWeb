fetch('api.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('h1').textContent = data.header;
  });
