(function() {
  var refreshPreview;

  refreshPreview = function() {
    var preview;
    preview = $(".preview pre code");
    preview.text($("textarea").val());
    return hljs.highlightBlock(preview[0]);
  };

  $(function() {
    var ta;
    ta = $("textarea");
    ta.on("input", function() {
      return refreshPreview();
    });
    return refreshPreview();
  });

  hljs.initHighlightingOnLoad();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLGNBQUEsR0FBaUIsUUFBQSxDQUFBLENBQUE7QUFDaEIsUUFBQTtJQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsbUJBQUY7SUFDVixPQUFPLENBQUMsSUFBUixDQUFhLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxHQUFkLENBQUEsQ0FBYjtXQUNBLElBQUksQ0FBQyxjQUFMLENBQW9CLE9BQVEsQ0FBQSxDQUFBLENBQTVCO0VBSGdCOztFQUlqQixDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7QUFDRCxRQUFBO0lBQUEsRUFBQSxHQUFLLENBQUEsQ0FBRSxVQUFGO0lBQ0wsRUFBRSxDQUFDLEVBQUgsQ0FBTSxPQUFOLEVBQWUsUUFBQSxDQUFBLENBQUE7YUFDZCxjQUFBLENBQUE7SUFEYyxDQUFmO1dBR0EsY0FBQSxDQUFBO0VBTEMsQ0FBRjs7RUFPQSxJQUFJLENBQUMsc0JBQUwsQ0FBQTtBQVhBIiwic291cmNlc0NvbnRlbnQiOlsicmVmcmVzaFByZXZpZXcgPSAtPlxuXHRwcmV2aWV3ID0gJChcIi5wcmV2aWV3IHByZSBjb2RlXCIpXG5cdHByZXZpZXcudGV4dCAkKFwidGV4dGFyZWFcIikudmFsKClcblx0aGxqcy5oaWdobGlnaHRCbG9jayhwcmV2aWV3WzBdKVxuJCAtPlxuXHR0YSA9ICQoXCJ0ZXh0YXJlYVwiKVxuXHR0YS5vbiBcImlucHV0XCIsIC0+XG5cdFx0cmVmcmVzaFByZXZpZXcoKVxuXG5cdHJlZnJlc2hQcmV2aWV3KClcblx0XG5obGpzLmluaXRIaWdobGlnaHRpbmdPbkxvYWQoKTtcblx0Il19
//# sourceURL=coffeescript