<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="{{ asset('asset/favicon.ico') }}">
    <title>Jumbotron Template for Bootstrap</title>
    <!-- <link href="http://fonts.googleapis.com/earlyaccess/nanumgothic.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="{{ asset('asset/css/nanumgothic.css') }}">
    <!-- Bootstrap core CSS -->
    <link href="{{ asset('asset/css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="{{ asset('asset/css/jumbotron-navbar.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('asset/css/header-content.css') }}">
    <link rel="stylesheet" href="{{ asset('asset/jquery-ui-1.11.4.custom/jquery-ui.css') }}">
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="{{ asset('asset/js/ie8-responsive-file-warning.js') }}"></script><![endif]-->
    <script src="{{ asset('asset/js/ie-emulation-modes-warning.js') }}"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script>window.jQuery || document.write('<script src="{{ asset('asset/js/html5shiv.min.js') }}"></script>')</script>
      <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script>window.jQuery || document.write('<script src="{{ asset('asset/js/respond.min.js') }}"></script>')</script> -->
    <!--[if lt IE 9]>
      <script src="{{ asset('asset/js/html5shiv.min.js') }}"></script>
      <script src="{{ asset('asset/js/respond.min.js') }}"></script>
    <![endif]-->
    @yield('style')
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/media/css/jquery.dataTables.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/media/css/dataTables.jqueryui.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/extensions/Scroller/css/scroller.jqueryui.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/extensions/Buttons/css/buttons.jqueryui.css') }}">
    <style type="text/css" class="init">

    </style>
</head>
<body>    
  @yield('topbar')
  <div class="container">
    <div class="row">
       <div class="col-md-3 logo">
          @yield('logo')
       </div>
       <div class="col-md-9 menu-open">
          @yield('menu') 
          @yield('img')
       </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
         @yield('sidebar')
      </div><!-- end col-md-3 -->
      <div class="col-md-9">
         @yield('content')
      </div><!-- end col-md-9 -->
  </div>
 </div>

 @yield('footertop')
 @yield('footermain')
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
    <!--<script>window.jQuery || document.write('<script src="{{ asset('asset/js/jquery.min.js') }}"></script>')</script> -->
    <script src="{{ asset('asset/js/jquery.min.js') }}"></script>

    <script src="{{ asset('asset/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('asset/jquery-ui-1.11.4.custom/jquery-ui.js') }}"></script> 

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="{{ asset('asset/js/ie10-viewport-bug-workaround.js') }}"></script>

    <script src="{{ asset('asset/js/header-content.js') }}"></script>

    @yield('script')
  
    <script src="{{ asset('asset/js/main.js') }}"></script>
    <script src="{{ asset('asset/js/main_popup.js') }}"></script>
    <script src="{{ asset('asset/js/main_popup_item.js') }}"></script>
    <script src="{{ asset('asset/js/datepicker.js') }}"></script>
    <script src="{{ asset('asset/js/lan_ko.js') }}"></script>
    <script src="{{ asset('asset/js/con_tab.js') }}"></script>
    <script src="{{ asset('asset/js/con_topmenu.js') }}"></script>
    <script src="{{ asset('asset/js/toolbar_popup.js') }}"></script>   
    <script src="{{ asset('asset/js/con_mainmenu.js') }}"></script> 
        
    <!-- dialog로딩 시 autofocus없애기 -->
    <script>$.ui.dialog.prototype._focusTabbable = function(){};</script>

    <script src="{{ asset('asset/DataTables/media/js/jquery.dataTables.js') }}"></script>
    <script src="{{ asset('asset/DataTables/media/js/dataTables.jqueryui.js') }}"></script>
    <script src="{{ asset('asset/DataTables/extensions/Buttons/js/dataTables.buttons.js') }}"></script>
    <script src="{{ asset('asset/DataTables/extensions/Buttons/js/buttons.jqueryui.js') }}"></script>
    <script src="{{ asset('asset/DataTables/extensions/Scroller/js/dataTables.scroller.js') }}"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
    <script src="http://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
    <script src="http://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
    <script src="{{ asset('asset/DataTables/extensions/Buttons/js/buttons.html5.js') }}"></script>
    <script src="{{ asset('asset/DataTables/extensions/Buttons/js/buttons.print.js') }}"></script>
    <script src="{{ asset('asset/DataTables/extensions/Buttons/js/buttons.colVis.js') }}"></script>
    @yield('scriptbot')
    <script src="{{ asset('asset/js/common.js') }}"></script>
  </body>
</html>
