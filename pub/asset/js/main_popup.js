 $(function() {       
     $.fn.main_popup2=function(options){
        $.defaultOptions = {
            id2         : "",
            ids         : "",
            url         : "",
            table_pop   : "",
            next   : "",
            pan         : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){        
	  $(options.id2).dialog({
		autoOpen: false,
		resizable: false,
                //height: 335,
                modal: true,
                
                open: function() { /* 클릭 시(anywhere) Dialog Close 방법 */
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery(options.id2).dialog('close');
                  });

                  options.table_pop.DataTable( { //안되는 방식
	         	ajax:           options.url,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true,
                        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]] 
	          } );
                },             
                position: { my: "left top", at: "left-30 bottom", of: options.ids },
                buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       var code = $(this).find("table tr.selected td:eq(0)").html();
                       var val  = $(this).find("table tr.selected td:eq(0)").next("td").html();
                       parentinsert(options.ids, val, code, options.pan);  
                       nextfocus(options.next,options.ids);                     
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

            function parentinsert(ids, val, code, pan){
              if(pan == "n"){
               ids.val(val);
               ids.prev().text(code);
              }else if(pan == "t"){
                ids.val(val);
                ids.parent().prev().find("input:eq(0)").val(code);
              }
            }

            function nextfocus(next, id) {
               if(next == "next110"){
                   id.parent().next().find("input:eq(0)").focus();                   
               }else if(next == "next210b"){
                   $("#"+id).parent().parent().next().find("button:eq(0)").focus();  
               }else if(next == "next210s"){
                   $("#"+id).parent().parent().next().find("select").focus();  
               }else if(next == "next220"){
                   $("#"+id).parent().parent().next().next().find("input:eq(0)").focus();  
               }else if(next == "next220b"){
                   $("#"+id).parent().parent().next().next().find("button:eq(0)").focus();  
               }else if(next == "next230"){
                   $("#"+id).parent().parent().next().next().next().find("input:eq(0)").focus();  
               }else if(next == "next230s"){
                   $("#"+id).parent().parent().next().next().next().find("select").focus();  
               }else if(next == "next310"){
                   id.parent().parent().parent().next().find("input:eq(0)").focus();
               }else if(next == "next310b"){
                   $("#"+id).parent().parent().parent().next().find("button:eq(0)").focus();
               }else if(next == "next320"){
                   $("#"+id).parent().parent().parent().next().next().find("input:eq(0)").focus();
               }else if(next == "next330"){
                   $("#"+id).parent().parent().parent().next().next().next().find("input:eq(0)").focus();
               }else if(next == "next510"){
                   $("#"+id).parent().parent().parent().parent().parent().next().find("input:eq(0)").focus();
               }else if(next == "next611"){
                   $("#"+id).parent().parent().parent().parent().parent().parent().next().find("input:eq(1)").focus();
               }else{

               }
            }
         })
         return this;
     } 


        $('input.pop2').on("click", function(){
            var $this     = $(this);                         
            var subject   = $this.attr("class").split(" ")[2];
            var $next     = $this.attr("class").split(" ")[3];
            var $pan      = $this.attr("class").split(" ")[4];
            var id2       = "#dialog_" + subject;  
            var url       =  "../../../data/lookup_popup/" + subject + ".txt";  
            var table_pop = $(id2).find('table'); 

            $this.main_popup2({id2:id2, ids: $this, url:url, table_pop: table_pop, next: $next, pan:$pan});            
	});

        $('input.pop2').on("keydown", function(e){  
          e.preventDefault();
          if (e.which == 13) {       
            var $this = $(this); 
            var id = $this.attr("id");            
            var subject = $this.attr("class").split(" ")[2];
            var next = $this.attr("class").split(" ")[3];
            var id2 = "#dialog_" + subject;  
            var url =  "../../../data/lookup_popup/" + subject + ".txt";  
            var ids = "#" + id; 
            var table_pop = $(id2).find('table'); 

            $this.main_popup({id2:id2, id: id, ids: ids, url:url, table_pop: table_pop, next: next});   
          }                              
	});

        
        $(".lookup_popup table tbody").on( 'click', 'tr', function () {
            if ( $(this).hasClass('selected') ) {
              $(this).removeClass('selected');
            }
            else {
              $('tr.selected').removeClass('selected');
              $(this).addClass('selected');
            }
       } );

   
});