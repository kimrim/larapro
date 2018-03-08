$(function() { 
    $.fn.lookup_popup=function(options){
        $.defaultOptions = {
            id2       : "",
            id      : "",
            title       : "",
            url : "",
            ids : "",
            table_pop : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
             $(options.id2).dialog({
		autoOpen: false,
		resizable: false,
                //height: 335,
                modal: true,
                title: options.title,
                open: function() { /* 클릭 시(anywhere) Dialog Close 방법 */
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery(options.id2).dialog('close');
                  });

                  options.table_pop.DataTable( { 
	         	ajax:           options.url,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true,
                        //"searching" : true,
                        //"info" : true,
                        paging: true,
                        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]] 
	          } );
                },             
                position: { my: "left top", at: "left-30 bottom", of: options.ids },
                buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       var input_group_addon = $(this).find("table tr.selected td:eq(1)").html();
                       var button_open_dialog = $(this).find("table tr.selected td:eq(1)").next("td").html();
                       parentinsert(options.id, button_open_dialog, input_group_addon);                      
                    },
                    취소: function() {
                       $( this ).dialog( "close" );
                    }
               },
               show: {
                  effect: "fade",
                  duration: 1000
               },
               hide: {
                  effect: "explode",
                  duration: 1000
               }
	   }).dialog('open');

           function parentinsert(id, button_open_dialog, input_group_addon){
              $("#" + id).val(button_open_dialog);
              $("#" +id).prev().text(input_group_addon);
              nextfocus(id);
           }

           function nextfocus(id) {
              id2 = id.substring(id.length-2, id.length);
              if(id2 == "11"){
                  $("#" + id).parents("div.form-group").next().find("input").focus();
              }else if(id2 == "17"){
                  $("#" + id).parents("div.form-group").next().find("input:eq(0)").focus();
              }else if(id2 == "18"){
                  $("#" + id).parents("div.col-md-3").next().find("input").focus();
              }else if(id2 == "21"){
                  $("#" + id).parents("div.form-group").next().next().next().find("input").focus();
              }else if(id2 == "22"){
                  $("#" + id).parents("div.form-group").next().next().next().find("select").focus();
              }else if(id2 == "12"){
                  $("#" + id).parents("div.form-group").next().find("select").focus();
              }else if(id2 == "13"){
                  $("#" + id).parents("div.form-group").next().find("button").focus();
              }else if(id2 == "14" || id2 == "24"){/*출고지시서입력*/
                  $("#" + id).parents("div.col-md-3").next().next().find("input").focus();
              }else if(id2 == "15"){
                  if(id == "customer7"){
                      $("#" + id).parents("div.form-group").next().find("button").focus();
                  }else{
                      $("#" + id).parents("div.form-group").next().find("input").focus();
                  }
              }
           }
        })
        return this;
    } 

       $('input.open-dialog').each(function(){
            var $this = $(this);
            var id = $this.attr("id"); 
            var subject = id.substring(0, id.length-3);
            var id2 = "#dialog_" + subject;  
            var id3 = id.charAt(id.length-3);
            var url =  "../../../data/lookup_popup/" + subject + ".txt"; 
            var title;  
              
            if(id3 == "1"){
                title = $this.parent().prev().text();
            } else if(id3 == "2"){
                title = $this.parents("div.form-group").prev().find("label").text();
            } else if(id3 == "3"){
                title = $this.parents("div.col-md-3").prev().text();
            }
            var ids = "#" + id; 
            var table_pop = $(id2).find('table'); 

            $this.click(function(){
                $this.lookup_popup({id2:id2, id:id, title:title, url:url, ids:ids, table_pop:table_pop});  
            });
            $this.keypress(function(e){
                if (e.which == 13) { 
                    $this.lookup_popup({id2:id2, id:id, title:title, url:url, ids:ids, table_pop:table_pop}); 
                } 
            });                              
	});        

       
});