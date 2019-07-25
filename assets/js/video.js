//Featured video loader
  // $(".video-mod").click(function() {
  //   var youtube_video_id = $(this).attr("id");
  //   var video_url = "https://youtube.com/watch?v=" + youtube_video_id;
  //   var iframe_url = "https://www.youtube.com/embed/" + youtube_video_id + "?autoplay=1";
  //   var api_url = "https://www.googleapis.com/youtube/v3/videos?id=" + youtube_video_id + "&key=AIzaSyC44mhCdDUXxu8_C8wwzSr5QjEHWjOsvW0&part=snippet,contentDetails,statistics,status";

  //   // Switch to the iframe when the image is clicked.
  //   // Get video information and set the title.
  //   $.getJSON(api_url, function(data) {
  //     $(".featured-video-title").html("<a href='" + video_url + "' target='_blank'><h3>" + data.items[0].snippet.title + "</h3></a>");
  //     $(".featured-video-description").html("<p>" + data.items[0].snippet.description + "</p>");
  //   });
  //   $(".featured-video-button").html("<a href='" + video_url + "' target='_blank'><div class='button'>WATCH ON YOUTUBE</div></a>");
  //   $(".featured-video").show();
  //   $(".video-player").html("<iframe src='" + iframe_url + "' frameborder='0' allowfullscreen></iframe>");

  //   window.scrollTo(0, 0);

  // });