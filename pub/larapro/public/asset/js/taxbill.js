 $(function() {  
     $.fn.lookup_popup=function(options){
        $.defaultOptions = {
            subject       : "",
            width:      : "",
            title       : "",
            ids         : "",
            url         : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
           $(options.subject).dialog({
               autoOpen: false,
		resizable: false,
                width: options.width,
                //height: 335,
                modal: true,
                title: options.title,
                open: function() { /* 클릭 시(anywhere) Dialog Close 방법 */
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery(options.id2).dialog('close');
                  });

                  /*options.table_pop.DataTable( { 
	         	ajax:           options.url,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true,
                        //"searching" : true,
                        //"info" : true,
                        paging: true,
                        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]] 
	          } );*/
                },             
                position: { my: "left top", at: "left-30 bottom", of: options.ids },
                buttons: {
                    확인: function() {
                       $( this ).dialog( "close" );                       
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

         
          dialog = $("#dialog_taxbill").dialog({
              autoOpen: false,
              //height: 300,
              width: 850,
              modal: true,
               buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       //alert($(this).attr("class")); /*server 전송시 필요 */
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
                  effect: "fade",
                  duration: 1000
               },
               open: function (event, ui) {
                  var id = $(this).attr("class");
                  $(this).find('input#tt4').val($("#" +id).html());
               }        
         });

         dialog2 = $("#dialog_taxbill2").dialog({
              autoOpen: false,
              //height: 300,
              width: 850,
              modal: true,
               buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       //alert($(this).attr("class")); /*server 전송시 필요 */
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
                  effect: "fade",
                  duration: 1000
               },
               open: function (event, ui) {
                  var id = $(this).attr("class");
                  $(this).find('input#tt4').val($("#" +id).html());
               }        
         });

         dialog3 = $("#dialog_taxbill3").dialog({
              autoOpen: false,
              //height: 300,
              width: 850,
              modal: true,
               buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       //alert($(this).attr("class")); /*server 전송시 필요 */
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
                  effect: "fade",
                  duration: 1000
               },
               open: function (event, ui) {
                  var id = $(this).attr("class");
                  $(this).find('input#tt4').val($("#" +id).html());
               }        
         });

          dialog4 = $("#dialog_taxbill4").dialog({
              autoOpen: false,
              //height: 300,
              width: 850,
              modal: true,
               buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       //alert($(this).attr("class")); /*server 전송시 필요 */
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
                  effect: "fade",
                  duration: 1000
               },
               open: function (event, ui) {
                  var id = $(this).attr("class");
                  $(this).find('input#tt4').val($("#" +id).html());
               }        
         });

         dialog5 = $("#dialog_taxbill5").dialog({
              autoOpen: false,
              //height: 300,
              width: 850,
              modal: true,
               buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       //alert($(this).attr("class")); /*server 전송시 필요 */
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
                  effect: "fade",
                  duration: 1000
               },
               open: function (event, ui) {
                  var id = $(this).attr("class");
                  $(this).find('input#tt4').val($("#" +id).html());
               }        
         });

         dialog6 = $("#dialog_taxbill6").dialog({
              autoOpen: false,
              //height: 300,
              width: 850,
              modal: true,
               buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       //alert($(this).attr("class")); /*server 전송시 필요 */
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
                  effect: "fade",
                  duration: 1000
               },
               open: function (event, ui) {
                  var id = $(this).attr("class");
                  $(this).find('input#tt4').val($("#" +id).html());
               }        
         });
         
         $(".taxbill_report").on( "click", function() {
             var $this = $(this);
             var text = $this.text();
             var cal = $this.attr("id");           
             if(cal == "planomit01"){
                dialog.removeClass().addClass(cal);
                dialog.dialog( "option", "title", text ).dialog("open");
             }else if(cal == "planomit02"){
                dialog2.removeClass().addClass(cal);
                dialog2.dialog( "option", "title", text ).dialog("open");
             }else if(cal == "planomit03"){
                dialog3.removeClass().addClass(cal);
                dialog3.dialog( "option", "title", text ).dialog("open");
             }else if(cal == "planomit04"){
                dialog4.removeClass().addClass(cal);
                dialog4.dialog( "option", "title", text ).dialog("open");
             }else if(cal == "planomit05"){
                dialog5.removeClass().addClass(cal);
                dialog5.dialog( "option", "title", text ).dialog("open");
             }else if(cal == "planomit06"){
                dialog6.removeClass().addClass(cal);
                dialog6.dialog( "option", "title", text ).dialog("open");
             }
         });

         $('div#taxbill button').each(function(){
            var $this = $(this);
            var id = $this.attr("id"); 
            var subject = id.substring(0, id.length-4); 
            var width = id.charAt(id.length-3);
            var title = $this.text(); 
            var ids = "#" + id;  
              
            $this.click(function(){
                $this.taxbill({subject: subject, width: width, title: title, ids: ids});  
            });
            $this.keypress(function(e){
                if (e.which == 13) { 
                    $this.taxbill({subject: subject, width: width, title: title, ids: ids});
                } 
            });                              
	});
        
      });