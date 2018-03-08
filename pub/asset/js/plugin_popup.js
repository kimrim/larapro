$.fn.lookup_popup = function(options){
     options = $.extend({},{
        id2    : "",
        table_pop: "",
        id     : "",
        ids:   : "",
        title  : "",
        url    : ""
    }, options);

    return this.each(function(){
        
	alert(options.url);

    });
    //return this;
};

$(function() {
    $('input.open-dialog').on("click", function(){
          var $this = $(this);
            var id = $this.attr("id"); 
            var subject = id.substring(0, id.length-3);
            var ids ="#" + id;
            var id2 = "#dialog_" + subject; 
            var table_pop = $(id2).find('table'); 
            var id3 = id.charAt(id.length-3);
            var title; 
            var lookup_popup_tbody = $(subject).find("tbody"); 
            var url = "../data/2500_" + subject + ".txt";           
            if(id3 == "1"){
                title = $this.parent().prev().text();
            } else if(id3 == "2"){
                title = $this.parents("div.form-group").prev().find("label").text();
            } else if(id3 == "3"){
                title = $this.parents("div.col-md-3").prev().text();
            }

            $(id2).lookup_popup({id2:id2, table_pop:table_pop, id:id, ids:ids, title:title, url:url});                                        
    });

});
