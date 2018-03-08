$(function() { 
  $.fn.toolbar_popup = function(options){
     options = $.extend({},{
        id     : "bbb",
        evt    : 11
    }, options);

   return this.each(function(){
        
	//alert(options.id);
        //alert(options.evt);

    });
    //return this;
  };  


  $("div.btn-toolbar button").on("click", function(){
        var $this = $(this);
        var  id = $this.attr("id");
        $this.toolbar_popup({id: id});                           
  });

  /*$("div.btn-toolbar button").on("keypress", function(e){
          var evt = e.which;
          var $this = $(this);
          var  id = $this.attr("id");
        $this.toolbar_popup({id: id, evt: evt});
                                       
  });*/

    

});