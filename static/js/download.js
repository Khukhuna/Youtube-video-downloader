const button = document.getElementById('videoSubmit');
const input = document.getElementById('videoInput');

button.addEventListener('click', function(){
  var inputValue = input.value;
  // parse the video id from link
  try {
    var videoId = inputValue.split('v=')[1].split('?')[0];
  } catch (e) {
    var videoId = inputValue;
  }
  window.location.replace("/download/"+videoId);
  return false;
});
