function getDataById(id){
  url = "https://cors.io/?http://finkacho.pythonanywhere.com/video/"+id;
  $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
        success: function(data) {
            console.log(data['title']);
        },
        error: function(err){
          console.log(err);
        }
  });
}
