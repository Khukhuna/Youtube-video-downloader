function getDataById(id){
  url = "https://cors.io/?http://finkacho.pythonanywhere.com/video/"+id;
  $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function(data) {
          $("#loading").fadeOut();
          $("#details").fadeIn();
          $("#title").text(data['title']);
          $("#views").text(data['views']);
          // WARNING: TYPO in API (resoltions must be change to 'resolutions')
          for (var btn in data['resoltions']) {
            var resolution = data['resoltions'][btn]['resolution'];
            var title = 'Download - '+resolution;
            var $downloadBtn = $('<button />', {
              type: 'button',
              text: title,
              class: 'main-btn'
            }).on('click', function(){
              $(location).attr('href', '/download/'+id+'/'+resolution);
            });
            $(".details-wrapper").append($downloadBtn);
          }
          player.loadVideoById(id);
        },
        error: function(err){
          console.log(err);
        }
  });
}
