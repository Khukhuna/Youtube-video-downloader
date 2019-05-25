function getDataById(id){
  url = "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id="+id+"&key=AIzaSyCrPTHR0d9JhYrAdusV2t5wLaYu-EVjsbg";
  $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function(data) {
          data = data['items'][0]['snippet']

          $("#loading").fadeOut();
          $("#details").fadeIn();
          $("#title").text(data['title']);

          var channelLink = 'https://www.youtube.com/channel/' + data['channelId'];
          $("#by").html("<a href='"+channelLink+"'>"+data['channelTitle']+"</a>");

          player.loadVideoById(id);
        },
        error: function(err){
          console.log(err);
        }
  });
}
