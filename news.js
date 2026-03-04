
$(function(){
  $.ajax({
    url: "news.json",
    dataType: "json",
    success: function(data){
      var html = "";
      $.each(data, function(i, item){
        html += '<div class="news-item"><a href="' + item.url + '"><span class="title">' + item.title + '</span><span class="date">' + item.date + '</span></a></div>';
      });
      $("#newsList").html(html);
    },
    error: function(xhr, status, error){
      console.error("加载新闻数据失败:", error);
      $("#newsList").html("<p>新闻加载失败，请确保在HTTP服务器环境下运行。</p>");
    }
  });
});