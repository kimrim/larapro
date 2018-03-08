 $(function() {           
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
        
      });