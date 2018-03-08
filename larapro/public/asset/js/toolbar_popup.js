 $(function() {  
     $.fn.toolbar_popup1=function(options){
        $.defaultOptions = {
            id3       : "",
            title     : "",
            btns      : "",
            ids       : "",
            wid       : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
            $(options.id3).dialog({
                autoOpen: false,
		resizable: false,
                //height: 335,
                width: options.wid,
                modal: true,
                title: options.title,
                open: function() { /* 클릭 시(anywhere) Dialog Close 방법 */
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery(options.id3).dialog('close');
                  });
                },             
                buttons:options.btns,
               show: {
                  effect: "fade",
                  duration: 1000
               },
               hide: {
                  effect: "explode",
                  duration: 1000
               }

	    }).dialog('open');

         })
         return this;
     }  

     $.fn.toolbar_popup3=function(options){
        $.defaultOptions = {
            id3       : "",
            title     : "",
            url       : "",
            btns      : "",
            ids       : "",
            wid       : "",
            table_pop : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
            $(options.id3).dialog({
		autoOpen: false,
		resizable: false,
                //height: 335,
                width: options.wid,
                modal: true,
                title: options.title,
                open: function() { /* 클릭 시(anywhere) Dialog Close 방법 */
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery(options.id3).dialog('close');
                  });

                  options.table_pop.DataTable( { //안되는 방식
	         	ajax:           options.url,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true,
                        //"searching" : true,
                        //"info" : true,
                        //paging: true,
                        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]] 
	          } );
                },             
                //position: { my: "left top", at: "left-30 bottom", of: ids },
                buttons:options.btns,
                /*buttons: {
                    button1: function() {
                       $( this ).dialog( "close" );                       
                    },
                   button2: function() {
                       $( this ).dialog( "close" );
                    }
               },*/
               show: {
                  effect: "fade",
                  duration: 1000
               },
               hide: {
                  effect: "explode",
                  duration: 1000
               }

	   }).dialog('open');

         })
         return this;
     }  

     $.fn.toolbar_popup6=function(options){
        $.defaultOptions = {
            id3       : "",
            title     : "",
            url       : "",
            url2       : "",
            btns      : "",
            ids       : "",
            wid       : "",
            table_pop : "",
            table_pop2 : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
            $(options.id3).dialog({
		autoOpen: false,
		resizable: false,
                //height: 335,
                width: options.wid,
                modal: true,
                title: options.title,
                open: function() { /* 클릭 시(anywhere) Dialog Close 방법 */
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery(options.id3).dialog('close');
                  });

                  options.table_pop.DataTable( { //안되는 방식
	         	ajax:           options.url,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true,
                        //"searching" : true,
                        //"info" : true,
                        //paging: true,
                        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]] 
	          } );
                  options.table_pop2.DataTable( { 
	         	ajax:           options.url2,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true,
                        //"searching" : true,
                        //"info" : true,
                        //paging: true,
                        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]] 
	          } );
                },             
                //position: { my: "left top", at: "left-30 bottom", of: ids },
                buttons:options.btns,
                /*buttons: {
                    button1: function() {
                       $( this ).dialog( "close" );                       
                    },
                   button2: function() {
                       $( this ).dialog( "close" );
                    }
               },*/
               show: {
                  effect: "fade",
                  duration: 1000
               },
               hide: {
                  effect: "explode",
                  duration: 1000
               }

	   }).dialog('open');

         })
         return this;
     } 

       $('button.toolbar_dialog').on("click", function(){   
          var $this = $(this);
          var id = $this.attr("id"); 

          //var subject = id.substring(0, id.length-5);
          //var id2 = id.charAt(id.length-4);
          //var wid = id.substring(id.length-3);

          var subject = id.split("_")[0];
          var id3 = "#dialog_" + subject;            
          var id2 = id.split("_")[1];         
          var wid = id.split("_")[2];
          var title = $this.text().substring(0, $this.text().indexOf("("));  
          var btns = {};

          if(title == "합계옵션"){
            btns["전체선택"] = function(){ $( this ).dialog( "close" ); };
            btns["선택해제"] = function(){ alert("선택해제button code here"); };
          }else if(title == "원가설정"){
            btns["편집"] = function(){ $( this ).dialog( "close" ); };
            btns["자동설정"] = function(){ alert("선택해제button code here"); };
          } else{

          }

          btns["확인"] = function(){ $( this ).dialog( "close" ); };
          btns["취소"] = function(){ alert("button2 code here"); };

          if(!$('input.conmain-dialog').focus()){//!$(".conmain-dialog").is(":focus") input[name=focus]
             alert("sss");
          } else{  
            if(subject == "esc"){
                alert("실행하고있는 메뉴를 종료합니다");
            } else if(subject == "help"){
                alert("사용방법이 조회됩니다");
            } else if(subject == "code"){
                alert("커서위치의 코드도움박스가 나타납니다");
            /*} else if(subject == "copy"){
                alert("선택된 라인, 또는 항목을 원하는 일자로 복사합니다");*/
            } else if(subject == "delete"){
                alert("선택된 라인, 또는 항목을 삭제합니다");
            } else if(subject == "print"){
                alert("인쇄릏 실행합니다");
            } else if(subject == "totalprint"){
                alert("전체 인쇄릏 실행합니다");
            } else if(subject == "save"){
                alert("선택된 라인, 또는 항목을 저장합니다");
            } else if(subject == "deadline"){
                alert("마감합니다");
            } else {              
              if(id2 == "1" || id2 == "2"){
                $this.toolbar_popup1({id3:id3, title:title, btns:btns, wid:wid});
              } else if(id2 == "3"){
                var table_pop = $(id3).find('table');
                var url =  "../../../data/toolbar_popup/" + subject + ".txt"; 
                $this.toolbar_popup3({id3:id3, title:title, url:url, btns:btns, wid:wid, table_pop:table_pop});
              } else if(id2 == "6"){
                var table_pop = $(id3).find('table:eq(0)');
                var table_pop2 = $(id3).find('table:eq(1)');
                var url =  "../../../data/toolbar_popup/" + subject + ".txt"; 
                var url2 =  "../../../data/toolbar_popup/" + subject + "2" + ".txt"; 

                $this.toolbar_popup6({id3:id3, title:title, url:url, url2:url2, btns:btns, wid:wid, table_pop:table_pop, table_pop2:table_pop2});
              } else{
                 alert("똑 바로 해");
              }
            }
          }                             
	});

        $('button.toolbar_dialog_ss').on("click", function(){   
          var $this = $(this);
          var id = $this.attr("id"); 
          var subject = id.substring(0, id.length-5);
          var id3 = "#dialog_" + subject;  
          var id2 = id.charAt(id.length-4);
          var wid = id.substring(id.length-3);
          var title = $this.text().substring(0, $this.text().indexOf("("));  
          var btns = {};

          if(title == "합계옵션"){
            btns["전체선택"] = function(){ $( this ).dialog( "close" ); };
            btns["선택해제"] = function(){ alert("선택해제button code here"); };
          }else if(title == "원가설정"){
            btns["편집"] = function(){ $( this ).dialog( "close" ); };
            btns["자동설정"] = function(){ alert("선택해제button code here"); };
          } else{

          }

          btns["확인"] = function(){ $( this ).dialog( "close" ); };
          btns["취소"] = function(){ alert("button2 code here"); };

          if(!$('input.conmain-dialog').focus()){//!$(".conmain-dialog").is(":focus") input[name=focus]
             alert("sss");
          } else{  
            if(id == "esc"){
                alert("실행하고있는 메뉴를 종료합니다");
            } else if(id == "help"){
                alert("사용방법이 조회됩니다");
            } else if(id == "code"){
                alert("커서위치의 코드도움박스가 나타납니다");
            } else if(id == "copy"){
                alert("선택된 라인, 또는 항목을 원하는 일자로 복사합니다");
            } else if(id == "delete"){
                alert("선택된 라인, 또는 항목을 삭제합니다");
            } else if(id == "print"){
                alert("인쇄릏 실행합니다");
            } else if(id == "totalprint"){
                alert("전체 인쇄릏 실행합니다");
            } else{              
              if(id2 == "1" || id2 == "2"){
                $this.toolbar_popup1({id3:id3, title:title, btns:btns, wid:wid});
              } else if(id2 == "3"){
                var table_pop = $(id3).find('table');
                var url =  "../../../data/toolbar_popup/" + subject + ".txt"; 

                $this.toolbar_popup3({id3:id3, title:title, url:url, btns:btns, wid:wid, table_pop:table_pop});
              } else if(id2 == "6"){
                var table_pop = $(id3).find('table:eq(0)');
                var table_pop2 = $(id3).find('table:eq(1)');
                var url =  "../../../data/toolbar_popup/" + subject + ".txt"; 
                var url2 =  "../../../data/toolbar_popup/" + subject + "2" + ".txt"; 

                $this.toolbar_popup6({id3:id3, title:title, url:url, url2:url2, btns:btns, wid:wid, table_pop:table_pop, table_pop2:table_pop2});
              } else{
                 alert("똑 바로 해");
              }
            }
          }                             
	});

        $('.conmain2_dialog').on("click", function(){   
          var $this = $(this);
          var id = $this.attr("id"); 
          var subject = id.substring(0, id.length-5);
          var id3 = "#dialog_" + subject;  
          var id2 = id.charAt(id.length-4);
          var wid = id.substring(id.length-3);
          var title = $this.text();  
          var btns = {};

          if(title == "합계옵션"){
            btns["전체선택"] = function(){ $( this ).dialog( "close" ); };
            btns["선택해제"] = function(){ alert("선택해제button code here"); };
          }else if(title == "원가설정"){
            btns["편집"] = function(){ $( this ).dialog( "close" ); };
            btns["자동설정"] = function(){ alert("선택해제button code here"); };
          }else if(title == "대손상각"){
            btns["새로불러오기"] = function(){ $( this ).dialog( "close" ); };
          } else{

          }

          btns["확인"] = function(){ $( this ).dialog( "close" ); };
          btns["취소"] = function(){ alert("button2 code here"); };
               
          if(id2 == "1" || id2 == "2"){
              $this.toolbar_popup1({id3:id3, title:title, btns:btns, wid:wid});
          } else if(id2 == "3"){
              var table_pop = $(id3).find('table');
              var url =  "../../../data/toolbar_popup/" + subject + ".txt"; 

              $this.toolbar_popup3({id3:id3, title:title, url:url, btns:btns, wid:wid, table_pop:table_pop});
          } else{

          }                          
	});

       
});