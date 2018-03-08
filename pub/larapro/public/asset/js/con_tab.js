$(function() {       
     $.fn.con_tab=function(options){
        $.defaultOptions = {
            cla2       : "",
            exam      : "",
            url       : "",
            lengthChange : false,
            searching : true,
            info : true,
            paging: true,
            scrollY:        200
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          $(options.exam).DataTable( {
		ajax:           options.url,
		deferRender:    true,
		scrollY:        options.scrollY,
                scrollX: true,
		scrollCollapse: true,
                "lengthChange" : options.lengthChange,
                "searching" : options.searching,
                "info" : options.info,
                paging: options.paging,             
                "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]],
                buttons: [ 
                          {
                           text: '도움 <u><i>ctrl</i> 3</u>',
                           className: 'btn btn-default btn-sm',
                           key: {
                               ctrlKey: true,
                               key: '3'
                           },
                           action: function ( e, dt, node, config ) {
                               alert( '도움 3 activated' );
                           }
                        },
                        {
                          text: '코드 <u>1</u>',
                          className: 'btn btn-default btn-sm',
                          key: '1',
                          action: function ( e, dt, node, config ) {
                             alert( '코드 activated' );
                          }
                        },
                        {
                           extend: 'copy',
                           text: '복사',
                           className: 'btn btn-default btn-sm'
                       },
                       {
                           extend: 'print',
                           text: '<u>인</u>쇄',
                           className: 'btn btn-primary btn-sm'
                       },
                       {
                           extend: 'excel',
                           text: '엑셀',
                           className: 'btn btn-default btn-sm',
                           key: {
                              key: 'c',
                              altKey: true
                          }
                       },
                       {
                          extend: 'pdf',
                          text: 'pdf',
                          className: 'btn btn-default btn-sm'
                       },
                       {
                          extend: 'colvis',
                          text: 'colvis',
                          className: 'btn btn-default btn-sm'
                       },
                       
                       
                       {
                          text: '조회 <u><i>f12</i></u>',
                          className: 'btn btn-default btn-sm',
                          key: {
                               f12Key: true
                          },
                          action: function ( e, dt, node, config ) {
                               alert( '조회 2 activated' );
                          }
                       },
                       {
                           text: '종료<u><i>esc</i></u>',
                           className: 'btn btn-default btn-sm',
                           key: {
                              key: 'esc',
                              altKey: true
                          }
                       }
            
                       
               ],

                "initComplete": function(settings, json) {
                   if(options.cla2 == "1"){
                      $(this).DataTable().buttons().container().insertBefore($(this).parent().parent().parent().find(".dataTables_filter"));
                   }else {
                     //$(this).DataTable().buttons().container().insertBefore($(this).parent().parent().parent());
                     //$(this).DataTable().buttons().container().prependTo( $('#buttons') );
                     $(this).DataTable().buttons().container().appendTo( $('#buttons') );
                   }
                }
	   } );
          
        })
        return this;
      } 

      $.fn.con_tab2=function(options){
        $.defaultOptions = {
            exam      : "",
            url       : "",
            scrollY:        200,
            lengthChange : false,
            searching : true,
            info : true,
            paging: true
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          $(options.exam).DataTable( {
		ajax:           options.url,
		deferRender:    true,
		scrollY:        options.scrollY,
                scrollX: true,
		scrollCollapse: true,
                "lengthChange" : options.lengthChange,
                "searching" : options.searching,
                "info" : options.info,
                paging: options.paging,             
                "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]],
	   } );
        })
        return this;
      } 

      $.fn.con_tab3=function(options){
        $.defaultOptions = {
            cla2       : "",
            exam      : "",
            url       : "",
            lengthChange : false,
            searching : true,
            info : true,
            paging: true
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
         $(options.exam).DataTable( {
		ajax:           options.url,
		deferRender:    true,
		scrollY:        200,
                scrollX: true,
		scrollCollapse: true,
                "lengthChange" : options.lengthChange,
                "searching" : options.searching,
                "info" : options.info,
                paging: options.paging,             
                "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "전체"]],
                buttons: [ 
                          {
                           extend: 'copy',
                           text: '복사',
                           className: 'btn btn-default btn-xs',
                           key: {
                              key: 'c',
                              altKey: true
                          }
                         },
                         {
                           extend: 'print',
                           text: '<u>인</u>쇄',
                           className: 'btn btn-default btn-xs',
                           key: {
                              key: 'c',
                              altKey: true
                          }
                       },
                       /*{
                          text: '코드 <u>1</u>',
                          className: 'btn btn-default btn-xs',
                          key: '1',
                          action: function ( e, dt, node, config ) {
                             alert( '코드 activated' );
                          }
                       },
                       {
                          text: '도움 <u><i>ctrl</i> 3</u>',
                          className: 'btn btn-default btn-xs',
                          key: {
                               ctrlKey: true,
                               key: '3'
                          },
                          action: function ( e, dt, node, config ) {
                               alert( '도움 3 activated' );
                          }
                       },
                       {
                          text: '조회 <u><i>f2</i> 3</u>',
                          className: 'btn btn-default btn-xs',
                          key: {
                               f2Key: true,
                               key: '3'
                          },
                          action: function ( e, dt, node, config ) {
                               alert( '조회 2 activated' );
                          }
                       },*/
                       {
                           extend: 'excel',
                           text: '엑셀',
                           className: 'btn btn-default btn-xs',
                           key: {
                              key: 'c',
                              altKey: true
                          }
                       },
                       {
                          extend: 'pdf',
                          text: 'pdf',
                          className: 'btn btn-default btn-xs'
                       },
                       {
                          extend: 'colvis',
                          text: 'colvis',
                          className: 'btn btn-default btn-xs'
                       }
            
                       
               ],

                "initComplete": function(settings, json) {
                   if(options.cla2 == "1"){
                      $(this).DataTable().buttons().container().insertBefore($(this).parent().parent().parent().find(".dataTables_filter"));
                   }else {
                     //$(this).DataTable().buttons().container().insertBefore($(this).parent().parent().parent());
                     //$(this).DataTable().buttons().container().prependTo( $('#buttons') );
                     $(this).DataTable().buttons().container().appendTo( $('#buttons') );
                   }
                }
	   } );

        })
        return this;
      } 


      $("#ajaxtab > li a").each(function(){
          var $this = $(this);
          var $href = $this.attr("href"); 
          var cla = $this.attr("class");
          var cla1 = cla.substring(0, cla.length-3)
          var cla2 = cla.charAt(3);
          var cla3 = cla.substring(cla.length-2);
          var exam = $href + "_table";
          var url = "../../data/" + cla1 + "/" + cla3 + ".txt";              

          $this.con_tab({cla2: cla2, exam: exam, url: url}); 
           
     });

     $("#ajaxtab3 > li a").each(function(){
          var $this = $(this);
          var $href = $this.attr("href"); 
          var cla = $this.attr("class");
          var cla1 = cla.substring(0, cla.length-3)
          var cla2 = cla.charAt(3);
          var cla3 = cla.substring(cla.length-2);          
          var exam = $href + "_table";
          var url = "../../data/" + cla1 + "/" + cla3 + ".txt";              

          $this.con_tab3({cla2: cla2, exam: exam, url: url}); 
           
     });

     $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
           $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
        });

     
     $("table[id*='tab'] > tbody tr, table[id*='example'] > tbody tr").each( function () {
         $(this).click(function(){
            if ( $(this).hasClass('selected') ) {
              $(this).removeClass('selected');
            }
            else {
              $('tr.selected').removeClass('selected');
              $(this).addClass('selected');
            }
         });
     } ); 
  
});

