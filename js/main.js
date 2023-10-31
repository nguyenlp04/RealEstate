function dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.textContent);
    console.log(ev.dataTransfer);
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    console.log(data);
    document.querySelector('.myInput').value = data;
  }
  