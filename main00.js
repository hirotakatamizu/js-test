$(document).click(function(event) {
  if(!$(event.target).closest('.inner').length) {
    console.log('外側がクリックされました。');
  } else {
    console.log('内側がクリックされました。');
  }
});
