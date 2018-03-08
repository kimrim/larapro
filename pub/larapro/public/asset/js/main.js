 $(function() { 
  <!-- logo -->
  $( "#logo" ).on("click", function(){
     $(this).effect( "shake", {
                  times: 10,
                  distance: 100
               }, 1000, function() {
               $( this ).css( "background", "#cccccc" );
            });
   });

  <!-- header content topmenu 시작 -->
    $('.col-md-9 .navbar').append('<span class="nav-bg"></span>');
    $('.navbar-nav.nav.h-c a.dropdown-toggle').on("click", function (e) {      
      if (!$(this).parent().hasClass("open")) {      
         $(this).parent().addClass("open");        
         $(this).parent().siblings().removeClass("open"); 
      }
    });
    $('.navbar-nav.nav.h-c ul li a').on("click", function (e) {      
      if (!$(this).parent().hasClass("open2")) {      
         $(this).parent().addClass("open2");        
         $(this).parent().siblings().removeClass("open2"); 
      }
    });
  <!-- header content topmenu 끝 -->

  <!-- start 현황(인쇄page) -->
  $("button.pagemove").on("click", function(){
        var moveaddr = $(this).attr("id") + ".html";
      
        location.replace(moveaddr);
   });

  <!-- start 유형 -->
  $('.button1').on('keydown', function(e){
    if(e.keyCode == 13){
       e.preventDefault();
       $(this).next().focus();
    }   
  });
  $('.button1').on('click', function(e){
    if( $(this).html() == '전자' ) {
        $(this).html('종이');
      }
      else {
        $(this).html('전자');
      }
      $(this).next().focus(); 
  });

  $('.button2').on('keydown', function(e){
    if(e.keyCode == 13){
       e.preventDefault();
       $(this).parents("div.form-group").next().find("input").eq(0).focus();
    }   
  });
  $('.button2').on("click", function() {
    if( $(this).html() == '건별' ) {
      $(this).html('일괄');
    }
    else {
      $(this).html('건별');
    }
    $(this).parents("div.form-group").next().find("input").eq(0).focus();
  });

   <!-- start 유형:과세 -->
   $(".dropdown-menu.kind li a").on("click", function(){
      $(this).parents(".btn-group").find('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".btn-group").find('.dropdown-toggle').val($(this).data('value'));

      $(this).parents(".row").next().find("input[type=text]").val(" ");
      $(this).parents(".row").find("input.amount_form").val(" ");
      $(this).parents(".row").find("input.taxamount_form").val(" ");

      $(this).parent().addClass("selected");
      $(this).parent().siblings().removeClass("selected");

      if($(this).text() == "주민"){
        $(this).parents("div.form-group").next().children("label").eq(1).text("주민번호");               
      }else{
        $(this).parents("div.form-group").next().children("label").eq(1).text("사업자번호");
        $(this).parents("div.form-group").next().children("div.col-md-4").eq(1).children().val();
      }
      if($(this).text() == "영세" || $(this).text() == "면세"){//현영
         var par = $(this).parents(".form-group").siblings().find("input.taxamount_form").parent();
         par.prev().addClass("hide");
         par.addClass("hide");
         $(this).parents(".row").next().find("input.taxamount").css("background", "gray");
      }else{
         var par = $("input.taxamount_form").parent();
         par.prev().removeClass("hide");
         par.removeClass("hide");
         $(this).parents(".row").next().find("input.taxmount").removeClass("hide");
         $(this).parents(".row").next().find("input.taxamount").css("background", "");
      }
      $(this).parents("div.form-group").next().children("div.col-md-4").eq(1).children().val("");
  
      $(this).parents("div.btn-group").next().find("button").eq(0).focus();
   });
   $(".dropdown-menu.kind").prev().on('keydown', function(e){
      if(e.keyCode == 13){
         e.preventDefault();
         $(this).parents("div.btn-group").next().find("button").eq(0).focus();
      }
   });  <!-- end 유형 -->

   <!-- start con_mainmenu -->
   $(".dropdown-menu.kind2 li a").on("click", function(){
      $(this).parents(".btn-group").find('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".btn-group").find('.dropdown-toggle').val($(this).data('value'));

    });
    <!-- end con_mainmenu -->

   <!-- start cor의 revenue_amount_control(수입금액조정명세서) -->
   $(".dropdown-menu.kind3 li a").on("click", function(){
      $(this).parent().parent().prev().text($(this).text());
    });
    <!-- end cor의 revenue_amount_control(수입금액조정명세서) -->

    <!-- header-content-top 시작 -->
    //$("div.navbar-collapse ul.h-c li a").click(function(){   
        //$(this).next().collapse('show');     
        //$(this).parent().siblings().find('ul').collapse('hide');        
    //});

    $("div.navbar-collapse ul.h-c li a").click(function(){   
        $(this).next().stop(true, true).delay(200).fadeIn(1000);     
        $(this).parent().siblings().find('ul').fadeOut(1000);       
    });
 
    <!-- Modal -->
    $("input.g-modal").on("click", function(){
	$("#myModal").modal('show');
    });
    $("input.g-modal-2").click(function(){
	$("#myModal-2").modal('show');
    });

    <!-- datapicker -->
    

  
    <!-- tooltip -->
    //$('[data-toggle="tooltip"]').tooltip();
    //$("div.bs-example button").tooltip();
    //$('button[rel="txtTooltip"]').tooltip();

    $('[data-toggle="tooltip"]').tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        } 
     }
    });

    $('body').on("click", function() {
  	  $('[data-toggle="tooltip"]').tooltip('close');
     });
    <!-- end tooltip -->
 
    <!-- 품목,조회button toggle -->
    $("button.table-toggle").on("click", function() {
        /*$(this).parents(".nav").next().next().toggle(1000);*/
        $(this).parents(".nav").next().toggle(1000);
    });
    $("button.tableinput-toggle").on("click", function() {
        var id = "#" + $(this).attr("name");
        $(this).parents(".nav").prev().children(id).find(".row.tog").toggle(1000);
        
    });

    <!-- tab start -->
    //$('#myTab a').tab('show');

    $("ul.nav-tabs a").on("click", function(e){
        var $this = $(this);
        //alert($this.attr("href"));
        e.preventDefault()
        $this.tab('show');
 
        var activeTab = $(e.target).attr("href");
        activeTab = activeTab.substring(1);
        $("button.btn.btn-info.tableinput-toggle").attr("name", activeTab); 
    });    
  
    <!-- settlement start -->
    $(".dropdown-menu.settlement").on('click', 'li a', function(){
      //$(".btn:first-child").text($(this).text());
      //$(".btn:first-child").val($(this).text());
      var $this = $(this);
      var next = $this.parents("ul").parent().parent().next();
      var next2 = $this.parents("ul").parent().parent().next().next();
      var prev = $this.parent().parent().prev();
      var text  = $this.text();
      var pid = $this.parents("form").attr("id");
      //var id = pid.substring(0, pid.length - 1);
      var no = pid.substring(pid.length - 3);
      prev.html(text+ ' <span class="caret"></span>');
      //alert(id);
      if( text == "예금" || text == "카드") {
        if(text == "예금"){
          pid = "bank" + no;
           
        }else if(text == "카드"){
          pid = "card" + no;
        }
        next2.find("span").text("0000");
        next2.removeClass("hide").find("input").attr("id", pid).val(" ").focus();
        //alert(next2.find("input").attr("id"));
        if(next.hasClass("hide")){
          next.text(text).removeClass("hide");
          next2.removeClass("hide");
        }else{
          next.text(text);
        }
      }else {
        next.addClass("hide");
        next2.addClass("hide");
        $this.parents("div.form-group").next().next().find("input").focus();
      }
   });
   $(".dropdown-menu.settlement").prev().on('keydown', function(e){
      if(e.keyCode == 13){
         e.preventDefault();
         $(this).parents("div.form-group").next().next().find("input").focus();
      }
   });

  $(".dropdown-menu.settlement2").on('click', 'li a', function(){
      var $this = $(this);
      var next = $this.parents("ul").parent().parent().parent().next();
      var next2 = next.next();
      if( $this.text() == "3.명세서제출제외대상") {       
        if(next.hasClass("hide")){
          next.removeClass("hide");
          next2.removeClass("hide");
        }
        next2.removeClass("hide").find("input").focus();
      }else{
        next.addClass("hide");
        next2.addClass("hide");
        $this.parents("ul").parent().parent().parent().parent().next().find("input:eq(0)").focus();
      }
   });
   $(".dropdown-menu.settlement2").prev().on('keydown', function(e){
      if(e.keyCode == 13){
         e.preventDefault();
         $(this).parents("div.form-group").next().find("input:eq(0)").focus();
      }
   });
   <!-- settlement end -->

   <!-- form focus이동 -->
   $('form .nextpocus').on("keyup", function(e){
        var $this = $(this);                      
        var next = $this.attr("class").split(" ")[2];              
           if (e.which == 13) {
              e.preventDefault();
              if(next == "next12"){
                 $this.parent().next().next().find("input").focus();
              }else if(next == "next11"){
                 $this.parent().next().find("input").focus();
              }else if(next == "next21"){
                 $this.parent().parent().next().find("input:eq(0)").focus();
              }else if(next == "next13"){
                 $this.parent().next().next().find("button").focus();
              }else if(next == "next23"){
                 $this.parent().parent().next().find("button:eq(0)").focus();
              }else if(next == "next24"){
                 $this.parent().parent().next().next().find("button:eq(0)").focus();
              }else if(next == "next33"){
                 $this.parent().next().next().find("button:eq(0)").focus();
              }else if(next == "next16"){
                 $this.parent().next().find("button").focus();
              }else if(next == "next17"){
                 $this.parent().parent().next().next().find("input").focus();
              }else if(next == "next18"){
                 $this.parent().parent().parent().next().find("input:eq(0)").focus();
              }else if(next == "next19"){
                 $this.parent().next().next().next().find("input").focus();
              }
           }                      
    }); 

    $('form ul.nextpocus li').on("click", "a", function(evt){
        var $this = $(this);                      
        var next = $this.parents("ul").attr("class").split(" ")[1];       
        evt.preventDefault();
        $(this).parents("ul").prev().html($this.text() + ' <span class="caret"></span>');
       

              if(next == "next12"){
                 $this.parents("ul").parents(".form-group").next().find("input:eq(0)").focus();
              }else if(next == "next13" || next == "next17"){
                 $this.parents("ul").parent().parent().parent().next().next().find("button").focus();
              }else if(next == "next22"){
                 $this.parents("ul").parents(".form-group").next().find("button").focus();
              }else if(next == "next14"){
                 $this.parents("ul").parent().parent().parent().next().next().find("input").focus();
              } else if(next == "next15"){
                 $this.parents("ul").parent().parent().parent().parent().next().find("input:eq(0)").focus();
              } else if(next == "next16"){
                 $this.parents("ul").parent().parent().parent().next().find("input").focus();
              }else if(next == "next18"){
                 $this.parents("ul").parent().parent().parent().parent().next().find("button:eq(0)").focus();
              } else if(next == "next19"){
                 $this.parents("ul").parent().parent().parent().next().next().find("input").focus();
              }                
    });  

    $('form button.nextpocus').on("keyup", function(evt){
        var $this = $(this);                      
        var next = $this.attr("class").split(" ")[3];       
         evt.preventDefault();
         if (evt.which == 13) {
              if(next == "next11"){
                 $this.parent().next().find("input").focus();
              } else if(next == "next15"){
                 $this.parent().parent().next().find("input:eq(0)").focus();
              } 
         }               
    }); 

    $('table.table ul.nextfocus li').on("click", "a", function(evt){
        var $this = $(this);                      
        var next = $this.parents("ul").attr("class").split(" ")[1];       
        evt.preventDefault();
        $(this).parents("ul").prev().text($this.text());

              if(next == "next12"){
                 $this.parents("ul").parent().parent().next().next().find("input:eq(0)").focus();
              }else if(next == "next13"){
                 $this.parents("ul").parent().parent().parent().next().find("input:eq(0)").focus();
              } else if(next == "next14"){
                 $this.parents("ul").parent().parent().next().find("a").focus();
              }else if(next == "next15"){
                 $this.parents("ul").parent().parent().next().find("input:eq(0)").focus();
              }            
    });

});