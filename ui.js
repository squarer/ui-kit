(function() {
  var drawer = document.querySelector('.ui-drawer-button');
  if (drawer) {
    var obfuscator = document.createElement('div');
    obfuscator.classList.add('ui-obfuscator');
    obfuscator.addEventListener('click', function() {
      toggleDrawer();
    })
    document.querySelector('.ui-layout').appendChild(obfuscator);
  }
  drawer.addEventListener('click', function() {
    toggleDrawer();
  });

  function toggleDrawer() {
    document.querySelector('.ui-drawer').classList.toggle('is-visible');
    document.querySelector('.ui-obfuscator').classList.toggle('is-visible');
  }
})();
