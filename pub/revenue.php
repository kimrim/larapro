﻿<!DOCTYPE html>
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
    <link rel="stylesheet" href="{{ asset('asset/css/nanumgothic.css') }}" />
    <!-- Bootstrap core CSS -->
    <link href="{{ asset('asset/css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="{{ asset('asset/css/jumbotron-navbar.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('asset/css/header-content.css') }}" />
    <link rel="stylesheet" href="{{ asset('asset/jquery-ui-1.11.4.custom/jquery-ui.css') }}">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="{{ asset('asset/js/ie8-responsive-file-warning.js') }}"></script><![endif]-->
    <script src="{{ asset('asset/js/ie-emulation-modes-warning.js') }}"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <!--<script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script>window.jQuery || document.write('<script src="{{ asset('asset/js/html5shiv.min.js') }}"></script>')</script>
      <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script>window.jQuery || document.write('<script src="{{ asset('asset/js/respond.min.js') }}"></script>')</script> -->
      <script src="{{ asset('asset/js/html5shiv.min.js') }}"></script>
      <script src="{{ asset('asset/js/respond.min.js') }}"></script>
    <![endif]-->

    <link href="{{ asset('asset/css/jssor.css') }}" rel="stylesheet">
    <link href="{{ asset('asset/css/style.css') }}" rel="stylesheet">
    
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/media/css/jquery.dataTables.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/media/css/dataTables.jqueryui.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/extensions/Scroller/css/scroller.jqueryui.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('asset/DataTables/extensions/Buttons/css/buttons.jqueryui.css') }}">
    <style type="text/css" class="init">

    </style>
</head>
<body>    
  <!-- Static navbar -->
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"> Kimrim Project</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Main</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">사용자정보 <span class="caret"></span></a>
             <ul class="dropdown-menu">
              <li><a href="#">김영식</a></li>
              <li></li>
              <li><a href="#">경기도</a></li>
              <li role="separator" class="divider"></li>
              <li class="dropdown-header">(주)삼성전자 회장</li>
              <li><a href="#">Se@dd.com</a></li>
              <li><a href="#">나는 누구인가?</a></li>
            </ul>       
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="./">Logoout <span class="sr-only">(current)</span></a></li>
          <li><a href="../navbar-static-top/">Home</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">        
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">사용회사 <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li>       
                <table class="table table-bordered table-condensed" style="width: 250px;margin:10px;">
                  <thead>
                    <tr>
                      <th>코드</th>
                      <th>회사명</th>
                      <th>사용여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="success">
                      <td>1001</td>
                      <td>(주)kimrim</td>
                      <td>사용</td>
                    </tr>
                    <tr class="warning">
                      <td>1002</td>
                      <td>박후영</td>
                      <td>미사용</td>
                    </tr>
                    <tr class="danger">
                      <td>1003</td>
                      <td>김배현</td>
                      <td>사용</td>
                    </tr>
                  </tbody>
                </table>
                <div class="nav navbar-nav navbar-right">
                  <div class="btn-group btn-group-sm" style="padding-right: 30px; margin-bottom: 10px;">
                    <button type="button" class="btn btn-info">확인</button>
                    <button type="button" class="btn btn-success">닫기</button>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container-fluid -->
  </nav>

  <div class="container">
    <div class="row">
        <div class="col-md-3 logo">
          <div class="well well-sm">
            <h5>Logo</h5>
            <img src="{{ asset('asset/img/logo_small.jpg') }}" class="img-responsive img-thumbnail" id="logo" alt="Responsive image">
            <p>안녕하세요 박후영님</p>
          </div>
        </div>
        <div class="col-md-9 menu-open">
          <div class="navbar navbar-default" role="navigation">
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav h-c">
                  <li class="dropdown open">
                    <a href="../../../acc/tradeInsert/trade_insert/revenue.html" class="dropdown-toggle" role="button">회계관리 <span class="caret"></span></a>
                    <ul class="dropdown-menu child" role="menu">
                      <li role="presentation"><a href="../../basic_registration/formerly_information_management/cor_registration.html" role="menuitem">기초등록</a></li>
                      <li class="open2" role="presentation"><a href="../../tradeInsert/trade_insert/revenue.html" role="menuitem">거래입력</a></li>
                      <li role="presentation"><a href="../../account_book/book_management/buying_selling.html" role="menuitem">회계장부</a></li>
                      <li role="presentation"><a href="../../fs/settlement/data_insert_01.html" role="menuitem">결산/재무제표</a></li>
                      <li role="presentation"><a href="../../fixAsset/fixing_asset/fixing_asset_regeister.html" role="menuitem">고정자산</a></li>
                      <li role="presentation"><a href="../../management/fundsBudget/receivableNoteHh.html" role="menuitem">경영관리</a></li>
                      <li role="presentation"><a href="../../dataManagement/dataManagement/dataBackUp.html" role="menuitem">데이타관리</a></li>
                      <li role="presentation"><a href="../../managementConsulting/businessAnalysis/profitabilityAnalysis.html" role="menuitem">경영자문</a></li>
                      <li role="presentation"><a href="../../hhDeclaration/basic/saup_report.html" role="menuitem">사업장현황신고</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="../../../vat/report/report01/report.html" class="dropdown-toggle" role="button">부가가치세 <span class="caret"></span></a>
                  </li>
                  <li class="dropdown">
                     <a href="../../../stk/sales/sales_trade/sales.html" class="dropdown-toggle" role="button">물류관리 <span class="caret"></span></a>
                  </li>
                  <li class="dropdown">
                    <a href="../../../pay/salary/earned_income/salary_insert.html" class="dropdown-toggle" role="button">급여관리 <span class="caret"></span></a>
                  </li>
                  <li class="dropdown">
                    <a href="../../../cor/base/base_establishment/totalCorTable.html" class="dropdown-toggle">법인조정 <span class="caret"></span></a>
                  </li>
                  <li class="dropdown">
                    <a href="../../../per/base/base_establishment/totalPerTable.html" class="dropdown-toggle">개인조정 <span class="caret"></span></a>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle">환경설정 <span class="caret"></span></a>
                    <ul class="dropdown-menu child" role="menu">
                      <li class="open2"><a href="#">시스템 구성</a></li>
                      <li><a href="#">화면셋팅</a></li>
                    </ul>
                  </li>
                </ul>                
              </div><!--/.nav-collapse -->                                    
          </div>         
          <div class="container" id="page">
            <div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 809px; height: 150px; overflow: hidden; visibility: hidden;">
              <!-- Loading Screen -->
              <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
                <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
                <div style="position:absolute;display:block;background:url('{{ asset('asset/img/jssor/loading.gif') }} no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
              </div>
              <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 809px; height: 150px; overflow: hidden;">
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/005.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/006.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/011.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/013.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/014.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/019.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/020.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{asset('asset/img/jssor/021.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/022.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/024.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/025.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/027.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/029.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/030.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/031.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/030.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/034.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/038.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/039.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/043.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/044.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/047.jpg') }}" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="{{ asset('asset/img/jssor/050.jpg') }}" />
               </div>
             </div>
             <!-- Bullet Navigator -->
             <div data-u="navigator" class="jssorb03" style="bottom:10px;right:10px;">
               <!-- bullet navigator item prototype -->
               <div data-u="prototype" style="width:21px;height:21px;">
                <div data-u="numbertemplate"></div>
               </div>
             </div>
             <!-- Arrow Navigator -->
             <span data-u="arrowleft" class="jssora03l" style="top:123px;left:8px;width:55px;height:55px;" data-autocenter="2"></span>
             <span data-u="arrowright" class="jssora03r" style="top:123px;right:8px;width:55px;height:55px;" data-autocenter="2"></span>
             <a href="http://www.jssor.com" style="display:none">Jssor Slider</a>
           </div>
           <!-- #endregion Jssor Slider End -->
        </div><!-- div class="container" id="page" end -->
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="well well-sm">        
          <div class="panel-group">
            <div class="panel panel-danger">
	      <!-- Default panel contents -->
	      <div class="panel-heading">
                <h4 class="panel-title"><a data-toggle="collapse" href="#collapse11">거래입력</a></h4>
              </div>
              <div id="collapse11" class="panel-collapse collapse in">
	        <div class="panel-body">
		  <p>여기는 빈공간</p>
	        </div>
	        <!-- List group -->
	        <div class="list-group">
		  <a href="../trade_insert/revenue.html" class="list-group-item active">수익거래 <span class="badge">50</span></a>
		  <a href="../trade_insert/cost.html" class="list-group-item">비용거래 <span class="badge">145</span></a>
		  <a href="../trade_insert/ilbantrade.html" class="list-group-item">일반거래 <span class="badge">30</span></a>  
		  <a href="../trade_insert/revenue_hh.html" class="list-group-item">수익거래현황 <span class="badge">65</span></a>
		  <a href="../trade_insert/cost_hh.html" class="list-group-item">비용거래현황 <span class="badge">8</span></a>
                  <a href="../trade_insert/ilbantrade_hh.html" class="list-group-item">일반거래현황 <span class="badge">8</span></a>
	        </div>
              </div>
	    </div>
            <div class="panel panel-danger">
	      <!-- Default panel contents -->
	      <div class="panel-heading">
                <h4 class="panel-title"><a data-toggle="collapse" href="#collapse12">기타거래입력 1</a></h4>
              </div>
              <div id="collapse12" class="panel-collapse collapse">
	        <div class="panel-body">
		  <p>여기는 빈공간</p>
	        </div>
	        <!-- List group -->
	        <div class="list-group">
		  <a href="../otherTradeOne/bankTrade.html" class="list-group-item">통장거래 <span class="badge">30</span></a> 
                  <a href="../otherTradeOne/bussinessCard.html" class="list-group-item">국세청사업용(복지)신용카드 <span class="badge">8</span></a>
                  <a href="../otherTradeOne/cashBill.html" class="list-group-item">현금영수증 <span class="badge">8</span></a>
	        </div>
              </div>
	    </div>
            <div class="panel panel-danger">
	      <!-- Default panel contents -->
	      <div class="panel-heading">
                <h4 class="panel-title"><a data-toggle="collapse" href="#collapse13">기타거래입력 2</a></h4>
              </div>
              <div id="collapse13" class="panel-collapse collapse">
	        <div class="panel-body">
		  <p>여기는 빈공간</p>
	        </div>
	        <!-- List group -->
	        <div class="list-group">
		  <a href="../otherTradeTwo/deemedPurchase.html" class="list-group-item">의제매입 <span class="badge">50</span></a>
		  <a href="../otherTradeTwo/recycle.html" class="list-group-item">재활용폐자원 <span class="badge">145</span></a>
                  <a href="../otherTradeTwo/elecMoney.html" class="list-group-item">전자화폐 <span class="badge">145</span></a>
                  <a href="../otherTradeTwo/noDeduction.html" class="list-group-item">불공제매입세액 <span class="badge">145</span></a>
                  <a href="../otherTradeTwo/exportInport.html" class="list-group-item">수출입 <span class="badge">145</span></a>
                  <a href="../otherTradeTwo/note.html" class="list-group-item">어음 <span class="badge">145</span></a>
                  <a href="../otherTradeTwo/copper.html" class="list-group-item">구리스크랩 <span class="badge">145</span></a>
	        </div>
              </div>
	    </div>
            <div class="panel panel-danger">
	      <!-- Default panel contents -->
	      <div class="panel-heading">
                <h4 class="panel-title"><a data-toggle="collapse" href="#collapse14">세금계산서처리</a></h4>
              </div>
              <div id="collapse14" class="panel-collapse collapse">
	        <div class="panel-body">
		  <p>무엇을 써야하나?</p>
	        </div>
	        <!-- List group -->
	        <div class="list-group">
                  <a href="../taxbill/inquiry.html" class="list-group-item"><span class="glyphicon glyphicon-camera"></span> 조회 <span class="badge">25</span></a>
                  <a href="../taxbill/handling.html" class="list-group-item"><span class="glyphicon glyphicon-file"></span> 처리 <span class="badge">145</span></a>
                  <a href="../taxbill/modification.html" class="list-group-item"><span class="glyphicon glyphicon-music"></span> 수정 <span class="badge">50</span></a>
                  <a href="../taxbill/send.html" class="list-group-item"><span class="glyphicon glyphicon-film"></span> 전송 <span class="badge">8</span></a>
                  <a href="../taxbill/send_condition.html" class="list-group-item"><span class="glyphicon glyphicon-film"></span> 전송현황 <span class="badge">8</span></a>
                </div>
              </div>
	    </div>
          </div>
        </div><!-- end well -->
      </div><!-- end col-md-3 -->
      <div class="col-md-9">
        <div class="btn-toolbar mar_b3">                                           
          <button type="button" class="btn btn-xs btn-primary toolbar_dialog" id="copy_1_500">복사(F4)</button> 
          <button type="button" class="btn btn-xs btn-danger">검색(F6)</button> 
          <button type="button" class="btn btn-xs btn-info toolbar_dialog" id="lookup_3_610">조회(F12)</button> 
        </div>
        <ol class="breadcrumb">
          <li><a href="../../../acc/tradeInsert/trade_insert/revenue.html">회계관리</a></li>
          <li><a href="../trade_insert/revenue.html">거래입력</a></li>
          <li class="active">수익거래</li>
        </ol>
        <ul class="nav nav-tabs mar_tm18" id="myTab" role="tablist">
          <li role="presentation" class="active"><a href="#tab-tax1" role="tab">과세</a></li>  
          <li role="presentation"><a href="#tab-tax2">면세</a></li>
          <li role="presentation"><a href="#tab-card">카드</a></li>
          <li role="presentation"><a href="#tab-cash">현영</a></li>
          <li role="presentation"><a href="#tab-mix">혼합</a></li>
          <li role="presentation"><a href="#tab-rec">회수</a></li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active pad_t5" id="tab-tax1"> 
            <form class="form-horizontal" id="form116">
             <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">              
                <div class="form-group">
                  <label class="control-label col-md-2">일자</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly"> 
                  </div>
                  <label class="control-label col-md-2">전표번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">유형</label>
                  <div class="col-md-4">
                    <div class="btn-toolbar">         
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">과세 <span class="caret"></span></button>
                        <ul class="dropdown-menu kind" role="menu">
                          <li><a href="#">과세</a></li>
                          <li><a href="#">영세</a></li>
                          <li><a href="#">주민</a></li>
                        </ul>
                      </div>
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-success button1">전자</button>
                        <button type="button" class="btn btn-warning button2">건별</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">거래처</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">12345</span>       
                      <input type="text" class="form-control pop client next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-2">사업자번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal-2" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">계정과목</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control pop account next310b n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">결제</label>
                  <div class="col-md-2">
                    <div class="btn-group btn-group-xs">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">외상 <span class="caret"></span></button>
                      <ul class="dropdown-menu settlement" role="menu">
                        <li><a href="#">외상</a></li>
                        <li><a href="#">현금</a></li>
                        <li><a href="#">예금</a></li>
                        <li><a href="#">카드</a></li>
                        <li><a href="#">어음</a></li>
                        <li><a href="#">선수</a></li>
                      </ul>
                    </div>
                    <!-- <select class="form-control" id="sel1">
                      <option>외상</option>
                      <option>현금</option>
                      <option>예금</option>
                      <option>카드</option>
                      <option>어음</option>
                      <option>선수</option>
                    </select> -->
                  </div>
                  <label class="control-label col-md-2 col-md-offset-2 hide">통장</label>
                  <div class="col-md-4 hide">
                    <div class="input-group">
                      <span class="input-group-addon">02045</span>
                      <input type="text" class="form-control pop bank next320 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm amount_form" readonly="readonly">
                 </div>
                 <label class="control-label col-md-2">세액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm taxamount_form" readonly="readonly">
                 </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-2">적요</label>
                <div class="col-md-10">
                  <div class="input-group">
                    <span class="input-group-addon">02</span>
                    <input type="input" class="form-control pop summary next510 n" style="z-index: 0;" readonly="readonly">
                  </div>
                </div>
              </div>
            </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
              <div class="form-group">
                <label class="control-label col-md-4">부서사원</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">123</span>
                    <input type="text" class="form-control pop busa next310 n" placeholder="부서사원" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">003</span>
                    <input type="text" class="form-control pop hh next310 n" placeholder="" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">프로젝트</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">023</span>
                    <input type="text" class="form-control pop project next611 n" readonly="readonly">
                  </div>
                </div>
              </div>
             </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
                <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 국민은행 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item hide">
                    <span class="glyphicon glyphicon-file"></span> Documents <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 김영식 회계사 <span class="badge">50</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 배철수 변호사 <span class="badge">50</span>
                  </a>
                </div>
              </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">       
                 <table class="table table-bordered table-hover table-condensed" id="tax1">
                   <thead>
                     <tr class="success">
                       <th class="wid8">코드</th>
                       <th class="wid19">품명</th>
                       <th class="wid13">수량</th>
                       <th class="wid13">단가</th>
                       <th class="wid15">금액</th>
                       <th class="wid15">세액</th>
                       <th class="wid15">합계</th>
                       <th class="wid1"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></th>
                       <th class="wid1"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></th>
                     </tr>
                   </thead>
                   <tbody>
            <tr class="success">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control plus"></td>
              <td><input type="text" class="form-control minus"></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control plus"></td>
              <td><input type="text" class="form-control minus"></td>
            </tr> 
            <tr class="success">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t"  readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control plus"></td>
              <td><input type="text" class="form-control minus"></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control plus"></td>
              <td><input type="text" class="form-control minus"></td>
            </tr>         
          </tbody>
        </table>
       </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
       <div class="btn-group btn-group-xs">
                   <button type="submit" class="btn btn-primary">저장</button>
                   <button type="button" class="btn btn-warning">리셋</button>
        </div> 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row -->             
     </form>
    </div> <!-- end tab-pane -->
        <div class="tab-pane pad_t5" id="tab-tax2"> <!-- fade in class-->
          <form class="form-horizontal" id="form216"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
                <div class="form-group">
                  <label class="control-label col-md-2">일자</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly">
                  </div>
                  <label class="control-label col-md-2">전표번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">유형</label>
                  <div class="col-md-4">
                    <div class="btn-toolbar">         
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">면세 <span class="caret"></span></button>
                        <ul class="dropdown-menu kind" role="menu">
                          <li><a href="#">면세</a></li>
                        </ul>
                      </div>
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-info button1">전자</button>
                        <button type="button" class="btn btn-success  button2">건별</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">거래처</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">12345</span>       
                      <input type="text" class="form-control pop client next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-2">사업자번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal-2" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">계정과목</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control pop account next310b n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">결제</label>
                  <div class="col-md-2">
                    <div class="btn-group btn-group-xs">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">외상 <span class="caret"></span></button>
                      <ul class="dropdown-menu settlement" role="menu">
                        <li><a href="#">외상</a></li>
                        <li><a href="#">현금</a></li>
                        <li><a href="#">예금</a></li>
                        <li><a href="#">카드</a></li>
                        <li><a href="#">어음</a></li>
                        <li><a href="#">선수</a></li>
                      </ul>
                    </div>
                  </div>
                  <label class="control-label col-md-2 col-md-offset-2 hide">통장</label>
                  <div class="col-md-4 hide">
                    <div class="input-group">
                      <span class="input-group-addon">52045</span>
                      <input type="text" class="form-control pop bank next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm amount_form next210 cac" readonly="readonly">
                 </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-2">적요</label>
                <div class="col-md-10">
                  <div class="input-group">
                    <span class="input-group-addon">02</span>
                    <input type="text" class="form-control pop summary next510 n" style="z-index: 0;" readonly="readonly">
                  </div>
                </div>
              </div>
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
              <div class="form-group">
                <label class="control-label col-md-4">부서사원</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">123</span>
                    <input type="text" class="form-control pop busa next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">003</span>
                    <input type="text" class="form-control pop hh next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">프로젝트</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">023</span>
                    <input type="text" class="form-control pop project next611 n" readonly="readonly">
                  </div>
                </div>
              </div>
          </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
              <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 당신은 누구냐? <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item hide">
                    <span class="glyphicon glyphicon-file"></span> Documents <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 나는 나다! <span class="badge">50</span>
                  </a>
              </div>
            </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">        
        <table class="table table-bordered table-hover table-condensed" id="tax2">
          <thead>
            <tr class="success">
              <th class="wid15">코드</th>
              <th>품명</th>
              <th>수량</th>
              <th>단가</th>
              <th>금액</th>
              <th class="wid1"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></th>
              <th class="wid1"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></th>
            </tr>
          </thead>
          <tbody>
            <tr class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_10 qua next110 2_4"></td>
              <td><input type="text" class="form-control cacT T_10 up next1p10 3_4"></td>
              <td><input type="text" class="form-control cacT T_00 amt next211 4"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_10 qua next110 2_4"></td>
              <td><input type="text" class="form-control cacT T_10 up next1p10 3_4"></td>
              <td><input type="text" class="form-control cacT T_00 amt next211 4"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_10 qua next110 2_4"></td>
              <td><input type="text" class="form-control cacT T_10 up next1p10 3_4"></td>
              <td><input type="text" class="form-control cacT T_00 amt next211 4"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_10 qua next110 2_4"></td>
              <td><input type="text" class="form-control cacT T_10 up next1p10 3_4"></td>
              <td><input type="text" class="form-control cacT T_00 amt next211 4"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>         
          </tbody>
        </table>
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
       <div class="btn-group btn-group-xs">
                   <button type="submit" class="btn btn-primary">저장</button>
                   <button type="button" class="btn btn-warning">리셋</button>
        </div> 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
     </form>
    </div>  <!-- end tab-pane tax2 -->
    <div class="tab-pane pad_t5" id="tab-card"> 
           <form class="form-horizontal" id="form3"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">               
                <div class="form-group">
                  <label class="control-label col-md-2">일자</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly">
                  </div>
                  <label class="control-label col-md-2">전표번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">유형</label>
                  <div class="col-md-4">
                    <div class="btn-toolbar">         
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">과세 <span class="caret"></span></button>
                        <ul class="dropdown-menu kind" role="menu">
                          <li><a href="#">과세</a></li>
                          <li><a href="#">영세</a></li>
                          <li><a href="#">주민</a></li>
                          <li><a href="#">면세</a></li>
                        </ul>
                      </div>
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-info button1">전자</button>
                        <button type="button" class="btn btn-danger button2">건별</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">거래처</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">12345</span>       
                      <input type="text" class="form-control pop client next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-2">사업자번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal-2" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">계정과목</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control pop account next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-md-2">거래처</label>
                    <div class="col-md-4">
                      <div class="input-group">
                        <span class="input-group-addon">12345</span>       
                        <input type="text" class="form-control pop client next310 n" style="z-index: 0;" readonly="readonly">
                      </div>
                    </div>
                    <label class="control-label col-md-2">사업자번호</label>
                    <div class="col-md-4">
                      <input type="text" class="form-control input-sm g-modal-2" readonly="readonly">
                    </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm amount_form next210 cac">
                 </div>
                 <label class="control-label col-md-2">세액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm taxamount_form" readonly="readonly">
                 </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-2">적요</label>
                <div class="col-md-10">
                  <div class="input-group">
                    <span class="input-group-addon">02</span>
                    <input type="text" class="form-control pop summary next510 n" style="z-index: 0;" readonly="readonly">
                  </div>
                </div>
              </div>
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
              <div class="form-group">
                <label class="control-label col-md-4">부서사원</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">123</span>
                    <input type="text" class="form-control pop busa next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">003</span>
                    <input type="text" class="form-control pop hh next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">프로젝트</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">023</span>
                    <input type="text" class="form-control pop project next100" readonly="readonly">
                  </div>
                </div>
              </div>
           </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
              <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 신한카트 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item hide">
                    <span class="glyphicon glyphicon-file"></span> Documents <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> bisa card <span class="badge">50</span>
                  </a>
              </div>
        </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
       <div class="btn-group btn-group-xs">
                   <button type="submit" class="btn btn-primary">저장</button>
                   <button type="button" class="btn btn-warning">리셋</button>
        </div> 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div> <!-- end tab-pane card -->
        <div class="tab-pane pad_t5" id="tab-cash"> 
          <form class="form-horizontal" id="form4"> 
            <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
                <div class="form-group">
                  <label class="control-label col-md-2">일자</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly">
                  </div>
                  <label class="control-label col-md-2">전표번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">유형</label>
                  <div class="col-md-4">
                    <div class="btn-toolbar">         
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">과세 <span class="caret"></span></button>
                        <ul class="dropdown-menu kind" role="menu">
                          <li><a href="#">과세</a></li>
                          <li><a href="#">면세</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">거래처</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">12345</span>       
                      <input type="text" class="form-control pop client next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-2">사업자번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal-2" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">계정과목</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control pop account next320 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">결제</label>
                  <div class="col-md-2">
                    <div class="btn-group btn-group-xs">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">현금 <span class="caret"></span></button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">현금</a></li>
                      </ul>
                    </div>
                  </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm amount_form next210 cac">
                 </div>
                 <label class="control-label col-md-2">세액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm taxamount_form" readonly="readonly">
                 </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-2">적요</label>
                <div class="col-md-10">
                  <div class="input-group">
                    <span class="input-group-addon">02</span>
                    <input type="text" class="form-control pop summary next510 n" style="z-index: 0;" readonly="readonly">
                  </div>
                </div>
              </div>
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
              <div class="form-group">
                <label class="control-label col-md-4">부서사원</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">123</span>
                    <input type="text" class="form-control pop busa next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">003</span>
                    <input type="text" class="form-control pop hh next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">프로젝트</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">023</span>
                    <input type="text" class="form-control pop project next100" readonly="readonly">
                  </div>
                </div>
              </div>
         </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
              <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 무슨 광고? <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item hide">
                    <span class="glyphicon glyphicon-file"></span> Documents <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 박후영 변호사 <span class="badge">50</span>
                  </a>
              </div>
        </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
       <div class="btn-group btn-group-xs">
                   <button type="submit" class="btn btn-primary">저장</button>
                   <button type="button" class="btn btn-warning">리셋</button>
        </div> 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div> <!-- end tab-pane cash -->
        <div class="tab-pane" id="tab-mix"> <!-- fade in class-->
          <ul class="nav nav-tabs mar_t5" role="tablist">
            <li role="presentation" class="active"><a href="#tab-sales" role="tab" data-toggle="tab">판매</a></li>
            <li role="presentation"><a href="#tab-g-assest" data-toggle="tab">고정자산</a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active pad_t5" id="tab-sales">
              <form class="form-horizontal"  id="form516">
                <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">                
                  <div class="form-group">
                    <label class="control-label col-md-2">일자</label>
                    <div class="col-md-4">
                      <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly">
                    </div>
                    <label class="control-label col-md-2">전표번호</label>
                    <div class="col-md-4">
                      <input type="text" class="form-control input-sm g-modal" readonly="readonly">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-2">유형</label>
                    <div class="col-md-4">
                      <div class="btn-toolbar">         
                        <div class="btn-group btn-group-sm">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">과세 <span class="caret"></span></button>
                          <ul class="dropdown-menu kind" role="menu">
                            <li><a href="#">과세</a></li>
                            <li><a href="#">영세</a></li>
                            <li><a href="#">주민</a></li>
                          </ul>
                        </div>
                        <div class="btn-group btn-group-sm">
                          <button type="button" class="btn btn-success button1">전자</button>
                          <button type="button" class="btn btn-warning button2">건별</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-2">거래처</label>
                    <div class="col-md-4">
                      <div class="input-group">
                        <span class="input-group-addon">12345</span>       
                        <input type="text" class="form-control pop client next310 n" style="z-index: 0;" readonly="readonly">
                      </div>
                    </div>
                    <label class="control-label col-md-2">사업자번호</label>
                    <div class="col-md-4">
                      <input type="text" class="form-control input-sm g-modal-2" readonly="readonly">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-2">계정과목</label>
                    <div class="col-md-4">
                      <div class="input-group">
                        <span class="input-group-addon">00045</span>
                        <input type="text" class="form-control pop account next310 n" style="z-index: 0;" readonly="readonly">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm amount_form" readonly="readonly">
                 </div>
                 <label class="control-label col-md-2">세액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm taxamount_form" readonly="readonly">
                 </div>
              </div>
                  <div class="form-group">
                    <label class="control-label col-md-2">적요</label>
                    <div class="col-md-10">
                      <div class="input-group">
                        <span class="input-group-addon">02</span>
                        <input type="text" class="form-control pop summary next510 n" style="z-index: 0;" readonly="readonly">
                      </div>
                    </div>
                  </div>
              </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
                  <div class="form-group">
                    <label class="control-label col-md-4">부서사원</label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-addon">123</span>
                        <input type="text" class="form-control pop busa next310 n" readonly="readonly">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-4">현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-addon">003</span>
                        <input type="text" class="form-control pop hh next310 n" readonly="readonly">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-4">프로젝트</label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-addon">023</span>
                        <input type="text" class="form-control pop project next611 n" readonly="readonly">
                      </div>
                    </div>
                  </div>
            </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
                  <div class="list-group">
                      <a href="#" class="list-group-item active">
                        <span class="glyphicon glyphicon-camera"></span> 삼성전자 구매부 <span class="badge">25</span>
                      </a>
                      <a href="#" class="list-group-item hide">
                        <span class="glyphicon glyphicon-file"></span> Documents <span class="badge">145</span>
                      </a>
                      <a href="#" class="list-group-item hide">
                        <span class="glyphicon glyphicon-music"></span> LG전자 전산부 <span class="badge">50</span>
                      </a>
                  </div>
                </div>
           </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">        
        <table class="table table-bordered table-hover table-condensed" id="sales">
          <thead>
            <tr class="success">
              <th>계정과목명</th>
              <th>코드</th>
              <th>품명</th>
              <th>수량</th>
              <th>단가</th>
              <th>금액</th>
              <th>세액</th>
              <th>합계</th>
              <th class="wid1"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></th>
              <th class="wid1"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></th>
            </tr>
          </thead>
          <tbody>
            <tr class="warning">
              <td>
                  <select class="form-control">
                      <option>상품</option>
                      <option>제품</option>
                      <option>반제품</option>
                      <option>용역</option>
                      <option>기타</option>
                  </select>
              </td>
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>
            <tr class="success">
              <td>
                  <select class="form-control">
                      <option>상품</option>
                      <option>제품</option>
                      <option>반제품</option>
                      <option>용역</option>
                      <option>기타</option>
                  </select>
              </td>
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr> 
            <tr class="info">
              <td>
                  <select class="form-control">
                      <option>상품</option>
                      <option>제품</option>
                      <option>반제품</option>
                      <option>용역</option>
                      <option>기타</option>
                  </select>
              </td>
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>
            <tr class="warning">
              <td>
                  <select class="form-control">
                      <option>상품</option>
                      <option>제품</option>
                      <option>반제품</option>
                      <option>용역</option>
                      <option>기타</option>
                  </select>
              </td>
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_30 qua next110 2_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_30 up next1p10 3_4_5_6"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 4_5_6"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>          
          </tbody>
        </table>

                  <div class="form-group mar_tm10">
                    <label class="control-label col-md-2 col-md-offset-7">차액:</label>
                    <div class="col-md-3">
                      <div class="input-group">
                        <input type="text" class="form-control" style="z-index: 0;">
                      </div>
                    </div>
                  </div>      
        <table class="table table-bordered table-hover table-condensed">
          <thead>
            <tr class="success">
              <th>코드</th>
              <th>계정과목</th>
              <th>금액</th>
              <th>세액</th>
              <th>코드</th>
              <th>거래처</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr class="success">
              <td><input type="text" class="form-control"></td>
              <td>외상매출금</td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr> 
            <tr class="info">
              <td><input type="text" class="form-control"></td>
              <td>현금</td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td rowspan=2 colspan=3></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control"></td>
              <td>예금</td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr>
            <tr class="success">
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td>비자카드</td>
              <td><input type="text" class="form-control"></td>
            </tr> 
            <tr class="info">
              <td><input type="text" class="form-control"></td>
              <td>받을어음</td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control"></td>
              <td>선수금</td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr>
            <tr class="success">
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr>          
          </tbody>
        </table>
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
       <div class="btn-group btn-group-xs">
                   <button type="submit" class="btn btn-primary">저장</button>
                   <button type="button" class="btn btn-warning">리셋</button>
        </div> 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
              </form>
            </div><!-- end tab-pane sales -->
            <div class="tab-pane pad_t5" id="tab-g-assest"> 
              <form class="form-horizontal"  id="form616"> 
                <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">                
                  <div class="form-group">
                    <label class="control-label col-md-2">일자</label>
                    <div class="col-md-4">
                      <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly">
                    </div>
                    <label class="control-label col-md-2">전표번호</label>
                    <div class="col-md-4">
                      <input type="text" class="form-control input-sm g-modal" readonly="readonly">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-2">유형</label>
                    <div class="col-md-4">
                      <div class="btn-toolbar">         
                        <div class="btn-group btn-group-sm">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">과세 <span class="caret"></span></button>
                          <ul class="dropdown-menu kind" role="menu">
                            <li><a href="#">과세</a></li>
                            <li><a href="#">영세</a></li>
                            <li><a href="#">주민</a></li>
                          </ul>
                        </div>
                        <div class="btn-group btn-group-sm">
                          <button type="button" class="btn btn-success button1">전자</button>
                          <button type="button" class="btn btn-warning button2">건별</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-2">거래처</label>
                    <div class="col-md-4">
                      <div class="input-group">
                        <span class="input-group-addon">12345</span>       
                        <input type="text" class="form-control pop client next310 n" id="client052" style="z-index: 0;" readonly="readonly">
                      </div>
                    </div>
                    <label class="control-label col-md-2">사업자번호</label>
                    <div class="col-md-4">
                      <input type="text" class="form-control input-sm g-modal-2" readonly="readonly">
                    </div>
                  </div>
                  <div class="form-group">
                  <label class="control-label col-md-2">계정과목</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control pop account next310b n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                </div>
                  <div class="form-group">
                  <label class="control-label col-md-2">결제</label>
                  <div class="col-md-2">
                    <div class="btn-group btn-group-xs">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">외상 <span class="caret"></span></button>
                      <ul class="dropdown-menu settlement" role="menu">
                        <li><a href="#">외상</a></li>
                        <li><a href="#">현금</a></li>
                        <li><a href="#">예금</a></li>
                        <li><a href="#">카드</a></li>
                        <li><a href="#">어음</a></li>
                        <li><a href="#">선수</a></li>
                      </ul>
                    </div>
                  </div>
                  <label class="control-label col-md-2 col-md-offset-2 hide">통장</label>
                  <div class="col-md-4 hide">
                    <div class="input-group">
                      <span class="input-group-addon">02045</span>
                      <input type="text" class="form-control pop bank next320 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
               </div>
                  <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm amount_form" readonly="readonly">
                 </div>
                 <label class="control-label col-md-2">세액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm taxamount_form" readonly="readonly">
                 </div>
              </div>
                  <div class="form-group">
                    <label class="control-label col-md-2">적요</label>
                    <div class="col-md-10">
                      <div class="input-group">
                        <span class="input-group-addon">02</span>
                        <input type="text" class="form-control pop summary next510 n" style="z-index: 0;" readonly="readonly">
                      </div>
                    </div>
                  </div>
              </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
                  <div class="form-group">
                    <label class="control-label col-md-4">부서사원</label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-addon">123</span>
                        <input type="text" class="form-control pop busa next310 n" readonly="readonly">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-4">현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-addon">003</span>
                        <input type="text" class="form-control pop busa next310 n" readonly="readonly">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-md-4">프로젝트</label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <span class="input-group-addon">023</span>
                        <input type="text" class="form-control pop project next611 n" readonly="readonly">
                      </div>
                    </div>
                  </div>
             </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
                  <div class="list-group">
                      <a href="#" class="list-group-item active">
                        <span class="glyphicon glyphicon-camera"></span> 현대자동차 <span class="badge">25</span>
                      </a>
                      <a href="#" class="list-group-item hide">
                        <span class="glyphicon glyphicon-file"></span> Documents <span class="badge">145</span>
                      </a>
                      <a href="#" class="list-group-item hide">
                        <span class="glyphicon glyphicon-music"></span> 한국전력 <span class="badge">50</span>
                      </a>
                  </div>
                </div>
           </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">       
        <table class="table table-bordered table-hover table-condensed" id="g-assest">
          <thead>
            <tr class="success">
              <th>코드</th>
              <th>자산명</th>
              <th>금액</th>
              <th>세액</th>
              <th>합계</th>
              <th class="wid10">즉시상각</th>
              <th class="wid10">상세등록</th>
              <th class="wid1"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></th>
              <th class="wid1"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></th>
            </tr>
          </thead>
          <tbody>
            <t class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 2_3_4"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="tacvam">
                 <div class="dropdown"">
                     <a href="#" class="btn btn-warning btn-xs dropdown-toggle" data-toggle="dropdown">1.자산 <span class="caret"></span></a>
                     <ul class="dropdown-menu foc">
                         <li><a href="#">1.자산</a></li>
                         <li><a href="#">2.비용</a></li>
                     </ul>
                 </div>
             </td>
              <td class="tacvam"><a href="#" class="btn btn-xs btn-info" role="button">추가</a></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>              
            </tr>
            <t class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 2_3_4"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="tacvam">
                 <div class="dropdown"">
                     <a href="#" class="btn btn-warning btn-xs dropdown-toggle" data-toggle="dropdown">1.자산 <span class="caret"></span></a>
                     <ul class="dropdown-menu foc">
                         <li><a href="#">1.자산</a></li>
                         <li><a href="#">2.비용</a></li>
                     </ul>
                 </div>
             </td>
              <td class="tacvam"><a href="#" class="btn btn-xs btn-info" role="button">추가</a></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr> 
            <t class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 2_3_4"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="tacvam">
                 <div class="dropdown"">
                     <a href="#" class="btn btn-warning btn-xs dropdown-toggle" data-toggle="dropdown">1.자산 <span class="caret"></span></a>
                     <ul class="dropdown-menu foc">
                         <li><a href="#">1.자산</a></li>
                         <li><a href="#">2.비용</a></li>
                     </ul>
                 </div>
             </td>
              <td class="tacvam"><a href="#" class="btn btn-xs btn-info" role="button">추가</a></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>
            <t class="warning">
              <td><input type="text" class="form-control code" readonly="readonly"></td>
              <td><input type="text" class="form-control pop item next110 t" readonly="readonly"></td>
              <td><input type="text" class="form-control cacT T_20 amt next211 2_3_4"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td><input type="text" class="form-control" readonly="readonly"></td>
              <td class="tacvam">
                 <div class="dropdown"">
                     <a href="#" class="btn btn-warning btn-xs dropdown-toggle" data-toggle="dropdown">1.자산 <span class="caret"></span></a>
                     <ul class="dropdown-menu foc">
                         <li><a href="#">1.자산</a></li>
                         <li><a href="#">2.비용</a></li>
                     </ul>
                 </div>
             </td>
              <td class="tacvam"><a href="#" class="btn btn-xs btn-info" role="button">추가</a></td>
              <td class="maxwidth-22"><input type="text" class="form-control plus"></td>
              <td class="maxwidth-22"><input type="text" class="form-control minus"></td>
            </tr>          
          </tbody>
        </table>
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
       <div class="btn-group btn-group-xs">
                   <button type="submit" class="btn btn-primary">저장</button>
                   <button type="button" class="btn btn-warning">리셋</button>
        </div> 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row -->  
              </form>
            </div> <!-- end tab-pane g-assest -->
          </div> <!-- end tab-content -->
        </div> <!-- end tab-pane mix -->
        <div class="tab-pane pad_t5" id="tab-rec"> <!-- fade in class-->
          <form class="form-horizontal"  id="form716"> 
            <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">              
                <div class="form-group">
                  <label class="control-label col-md-2">일자</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm next210 datepicker" readonly="readonly">
                  </div>
                  <label class="control-label col-md-2">전표번호</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control input-sm g-modal" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2 col-md-offset-6">거래처</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">12345</span>       
                      <input type="text" class="form-control pop client next310b n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">결제</label>
                  <div class="col-md-2">
                    <div class="btn-group btn-group-sm">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">현금 <span class="caret"></span></button>
                      <ul class="dropdown-menu settlement" role="menu">
                        <li><a href="#">현금</a></li>
                        <li><a href="#">예금</a></li>
                        <li><a href="#">카드</a></li>
                        <li><a href="#">어음</a></li>
                      </ul>
                    </div>          
                  </div>
                  <label class="control-label col-md-2 col-md-offset-2 hide">통장</label>
                  <div class="col-md-4 hide">
                    <div class="input-group">
                      <span class="input-group-addon">02045</span>
                      <input type="text" class="form-control pop bank next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
               </div>
               <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm a next210 cac">
                 </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-2">적요</label>
                <div class="col-md-10">
                  <div class="input-group">
                    <span class="input-group-addon">02</span>
                    <input type="text" class="form-control pop summary next510 n" style="z-index: 0;" readonly="readonly">
                  </div>
                </div>
              </div>
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
              <div class="form-group">
                <label class="control-label col-md-4">부서사원</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">123</span>
                    <input type="text" class="form-control pop busa next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;장</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">003</span>
                    <input type="text" class="form-control pop hh next310 n" readonly="readonly">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-4">프로젝트</label>
                <div class="col-md-8">
                  <div class="input-group">
                    <span class="input-group-addon">023</span>
                    <input type="text" class="form-control pop project next100" readonly="readonly">
                  </div>
                </div>
              </div>
          </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
              <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 고려신용정보 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item hide">
                    <span class="glyphicon glyphicon-file"></span> Documents <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item hide">
                    <span class="glyphicon glyphicon-music"></span> 미래은행 <span class="badge">50</span>
                  </a>
              </div>
            </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">       
        <table class="table table-bordered table-hover table-condensed">
          <thead>
            <tr class="success">
              <th>일자</th>
              <th>전표번호</th>
              <th>거래처</th>
              <th>결제</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            <t class="warning">
              <td><input type="text" class="form-control" value="2016/01/22"></td>
              <td><input type="text" class="form-control" value="330000"></td>
              <td><input type="text" class="form-control code" value="삼성전자1"></td>
              <td><input type="text" class="form-control" value="외상"></td>
              <td><input type="text" class="form-control" value="200000000"></td>
            </tr>
            <tr class="success">
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr> 
            <tr class="info">
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr>
            <tr class="warning">
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
              <td><input type="text" class="form-control"></td>
            </tr>          
          </tbody>
        </table>
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
       <div class="btn-group btn-group-xs">
                   <button type="submit" class="btn btn-primary">저장</button>
                   <button type="button" class="btn btn-warning">리셋</button>
        </div> 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div> <!-- end tab-pane rec -->
      </div> <!-- end tab-content -->


      <div class="nav navbar-nav navbar-right">
        <div class="btn-group btn-group-xs" style="margin-top: -22px; margin-right: 30px;">
          <button type="button" class="btn btn-info tableinput-toggle" name="tab-tax1">품목</button>
          <button type="button" class="btn btn-success table-toggle">조회</button>
        </div>
      </div>


      <div class="row">         
           <div class="col-md-12">
      <div class="well well-sm">
        <table id="example" class="display nowrap" cellspacing="0" width="100%">
	   <thead>
            <tr class="danger">
              <th>일자</th>
              <th>전표번호</th>
              <th>유형</th>
              <th>전자</th>
              <th>건별</th>
              <th>거래처</th>
              <th>계정과목</th>
              <th>결제</th>
              <th>금액</th>
              <th>세액</th>
              <th>적요</th>
              <th>부서사원</th>
              <th>현장</th>
              <th>프로젝트</th>
            </tr>
          </thead>
        </table>
      </div> <!-- end well -->
      </div>
      </div>
    </div><!-- end col-md-9 -->
  </div>
 </div>

<div class="container"> 
<div class="row">
<div class="col-md-12">    
<div class="footer well">
<div class="">
        <p><a href="#" title="당신&apos;s 이름은">Tooltips</a> 무엇인가요?. 자세히 보아야 예쁘다
오래 보아야 사랑스럽다
너도 그렇다</p>
        <p>But as it's not a native tooltip, it can be styled. Any themes built with<a href="http://jqueryui.com/themeroller/" title="당신은 나의 동반자">ThemeRoller</a>will also style tooltips accordingly.</p>
        <p>그대가 꺾어준 꽃
시들 때 까지 들여다 보았네
그대가 남기고 간 시든 꽃
다시 필 때까지</p>
        <p><label for="age">Your age:</label> <input id="age" title="We ask for your age only for statistical purposes."></p>
        <p>Hover the field to see the tooltip.</p>
      </div>
             <div class="bs-example"> 
    <button type="button" class="btn btn-default" rel="txtTooltip" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
<button type="button" class="btn btn-primary" rel="txtTooltip" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
<button type="button" class="btn btn-info" rel="txtTooltip" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
<button type="button" class="btn btn-danger" rel="txtTooltip" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
</div>
 </div>
</div>
</div>
</div>

<!-- toolbar_dialog -->
<!-- dialog_lookup -->
<div id="dialog_lookup" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
                        <tr class="danger">
                         <th>월/일</th>
                         <th>유형</th>
                         <th>품목</th>
                         <th>수량</th>
                         <th>단가</th>
                         <th>매수</th>
                         <th>공급가액</th>
                         <th>부가세</th>
                         <th>분개</th>
                         <th>예정누락분</th>
                         <th>전자여부</th>
                        </tr>
                      </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_copy -->
<div id="dialog_copy" class="lookup_popup" style="display:none; padding: 7px;">
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
             <form class="form-horizontal" id="">
                <div class="form-group">
                  <label class="control-label col-md-3">복사기준</label>
                  <div class="col-md-8">
                    <label class="radio-inline" style="margin-top: -8px;"><input type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" style="margin-top: -2px;">1.전체 예산과목</label>
                    <label class="radio-inline" style="margin-top: -8px;"><input type="radio" name="inlineRadioOptions1" id="inlineRadio2" value="option2" checked style="margin-top: -2px;">2.선택된 예산과목만</label>
                  </div>
                </div> 
                <div class="form-group">
                  <label class="control-label col-md-3">복사할 기간</label>
                  <div class="col-md-3">
                    <input type="text" class="form-control datepicker" id="" placeholder="2016-01-01" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3">복사받을 기간</label>
                  <div class="col-md-3">
                    <input type="text" class="form-control" id="from2" placeholder="2016-01-01" readonly="readonly">
                  </div>
                  <label class="control-label col-md-1">~</label>
                  <div class="col-md-3">
                    <input type="text" class="form-control" id="to2" placeholder="2016-12-31" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-10">기존자료가 있는 상태에서 복사하면 기존자료를 삭제하고 복사합니다</label>
                </div>             
             </form>
</div>

<!-- dialog_account -->
<div id="dialog_account" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>계정과목명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_client -->
<div id="dialog_client" class="lookup_popup" title="거래처" style="display:none; padding: 7px;'> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>거래처명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_bank -->
<div id="dialog_bank" class="lookup_popup" title="계좌" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>계좌명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_card -->
<div id="dialog_card" class="lookup_popup" title="카드" style="display:none; padding: 7px;">
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>카드명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_summary -->
<div id="dialog_summary" class="lookup_popup" title="적요" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>적요명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_busa -->
<div id="dialog_busa" class="lookup_popup" title="부서/사원" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>부서/사원명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_hh -->
<div id="dialog_hh" class="lookup_popup" title="현장" style="display:none; padding: 7px;">
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>현장명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_project -->
<div id="dialog_project" class="lookup_popup" title="프로젝트" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>프로젝트명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_item2 -->
<div id="dialog_item2" class="lookup_popup" title="품목" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>품목명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_item -->
<div id="dialog_item" class="lookup_popup" title="품목" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>품목명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="vertical-alignment-helper">
        <div class="modal-dialog vertical-align-center">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>

                    </button>
                     <h4 class="modal-title" id="myModalLabel">Modal title</h4>

                </div>
                <div class="modal-body">
                    <form role="form">
                        <div class="form-group">
                            <label for="recipient-name" class="control-label">Email:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="control-label">Message:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal-2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="vertical-alignment-helper">
        <div class="modal-dialog vertical-align-center">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>

                    </button>
                     <h4 class="modal-title" id="myModalLabel">Modal title</h4>

                </div>
                <div class="modal-body">
                    <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>코드</th>
        <th>회사명</th>
        <th>사용여부</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>1001</td>
        <td>(주)kimrim</td>
        <td>사용</td>
      </tr>
      <tr class="warning">
        <td>1002</td>
        <td>박후영</td>
        <td>미사용</td>
      </tr>
      <tr class="danger">
        <td>1003</td>
        <td>김배현</td>
        <td>사용</td>
      </tr>
    </tbody>
  </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

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

    <script src="{{ asset('asset/js/jssor/jssor.slider.mini.js') }}"></script>
    <script src="{{ asset('asset/js/jssor.js') }}"></script>
  
    <script src="{{ asset('asset/js/main.js') }}"></script>
    <script src="{{ asset('asset/js/main_popup.js') }}"></script>
    <script src="{{ asset('asset/js/main_popup_item.js') }}"></script>
    <script src="{{ asset('asset/js/datepicker.js') }}"></script>
    <script src="{{ asset('asset/js/lan_ko.js') }}"></script>
    <script src="{{ asset('asset/js/con_tab.js') }}"></script>
    <script src="{{ asset('asset/js/con_topmenu.js') }}"></script>
    <script src="{{ asset('asset/js/toolbar_popup.js')}}"></script>   
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
    <script class="init">
     $(document).ready(function() {	
        $("body").con_tab2({exam: "#example", url: "../../data/2500_14.txt", searching : false, info:false, paging: false});         
     } );	   
    </script> 
    <script src="{{ asset('asset/js/common.js') }}"></script>
  </body>
</html>
