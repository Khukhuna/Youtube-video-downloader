function getDataById(id){
  url = "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id="+id+"&key=AIzaSyCrPTHR0d9JhYrAdusV2t5wLaYu-EVjsbg";
  $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function(data) {
          data = data['items'][0];
          id = data['id'];
          data = data['snippet'];

          $("#loading").fadeOut();
          $("#details").fadeIn();
          $("#title").text(data['title']);
          $("#redirect").attr("href", "https://www.youtube.com/watch?v="+id);

          var channelLink = 'https://www.youtube.com/channel/' + data['channelId'];
          $("#by").html("<a href='"+channelLink+"'>"+data['channelTitle']+"</a>");

          player.loadVideoById(id);
        },
        error: function(err){
          console.log(err);
        }
  });
}
