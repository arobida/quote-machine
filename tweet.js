
$('#quoteBtn').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#title').text("-"+post.title);
        $('#quote').text(post.content.replace(/<[^>]*>/g, ''));

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').html("");
        }
      },
      cache: false
    });
  });

function tweetIt() {
		var url = "https://twitter.com/intent/tweet";
		var title = document.getElementById("title").innerHTML;
		var quote = document.getElementById("quote").innerHTML;
			var text = quote+title;
			var hashtags = "quoteoftheday, listenhere, wisdom";
			window.open(url+"?text="+text+";hashtags="+hashtags,"width=500,height=300");
	console.log(text);
		};