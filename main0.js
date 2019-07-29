var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

(function($, window) {
  $(function() {
    var list = $("#list");

    function appendList(word) {
      var item = $('<li class="list">').append(word);
      list.append(item);
    }

    $("#keyword").on("keyup", function() {
      var input = $("#keyword").val();
      var reg = new RegExp("^" + input);

      $(".list").remove();
      if(input.length !== 0) {
        $.each(fruits, function(i, fruit) {
          if(fruit.match(reg)) {
            appendList(fruit);
          }
        });


      }

      $(document).on("click",function(e) {
        if($(e.target).closest("#list li").length){
          var num = $(e.target).text();
          $('#keyword').val(num);
          $(".list").hide();
        }else{
          $("#keyword").val("");
          $(".list").remove();
        }
      });
    });
  });
})(jQuery, window);
