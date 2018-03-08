﻿<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../asset/favicon.ico">
    <title>Jumbotron Template for Bootstrap</title>
    <!-- <link href="http://fonts.googleapis.com/earlyaccess/nanumgothic.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="../../../asset/css/nanumgothic.css" />
    <!-- Bootstrap core CSS -->
    <link href="../../../asset/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="../../../asset/css/jumbotron-navbar.css" rel="stylesheet">

    <link rel="stylesheet" href="../../../asset/css/header-content.css" />
    <link rel="stylesheet" href="../../../asset/jquery-ui-1.11.4.custom/jquery-ui.css">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../../asset/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../../asset/js/ie-emulation-modes-warning.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <!--<script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script>window.jQuery || document.write('<script src="../../../asset/js/html5shiv.min.js"></script>')</script>
      <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script>window.jQuery || document.write('<script src="../../../asset/js/respond.min.js"></script>')</script> -->
      <script src="../../../asset/js/html5shiv.min.js"></script>
      <script src="../../../asset/js/respond.min.js"></script>
    <![endif]-->

    <link href="../../../asset/css/jssor.css" rel="stylesheet">
    <link href="../../../asset/css/style.css" rel="stylesheet">
    
    <link rel="stylesheet" type="text/css" href="../../../asset/DataTables/media/css/jquery.dataTables.css">
    <link rel="stylesheet" type="text/css" href="../../../asset/DataTables/media/css/dataTables.jqueryui.css">
    <link rel="stylesheet" type="text/css" href="../../../asset/DataTables/extensions/Scroller/css/scroller.jqueryui.css">
    <link rel="stylesheet" type="text/css" href="../../../asset/DataTables/extensions/Buttons/css/buttons.jqueryui.css">
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
          <li class="active"><a href="#">Home</a></li>
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
            <img src="../../../asset/img/logo_3.jpg" class="img-responsive img-thumbnail" id="logo" alt="Responsive image">
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
                      <li role="presentation"><a href="../../tradeInsert/trade_insert/revenue.html" role="menuitem">거래입력</a></li>
                      <li class="open2" role="presentation"><a href="../../account_book/book_management/buying_selling.html" role="menuitem">회계장부</a></li>
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
                <div style="position:absolute;display:block;background:url('../../../asset/img/jssor/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
              </div>
              <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 809px; height: 150px; overflow: hidden;">
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/005.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/006.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/011.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/013.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/014.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/019.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/020.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/021.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/022.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/024.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/025.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/027.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/029.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/030.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/031.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/030.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/034.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/038.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/039.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/043.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/044.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/047.jpg" />
               </div>
               <div style="display: none;">
                <img data-u="image" src="../../../asset/img/jssor/050.jpg" />
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
                <h4 class="panel-title"><a data-toggle="collapse" href="#collapse11">장부관리</a></h4>
              </div>
              <div id="collapse11" class="panel-collapse collapse">
	        <div class="panel-body">
		  <p>여기는 빈공간</p>
	        </div>
	        <!-- List group -->
	        <div class="list-group">
		  <a href="../book_management/client_account_ledger.html" class="list-group-item">거래처별계정과목별원장 <span class="badge">50</span></a> 
		  <a href="../book_management/client_buying_selling.html" class="list-group-item">거래처별매입매출장<span class="badge">65</span></a>
		  <a href="../book_management/client_ledger.html" class="list-group-item">거래처원장<span class="badge">8</span></a>
                  <a href="../book_management/foreign_currency_client_ledger.html" class="list-group-item">외화 거래처원장<span class="badge">8</span></a>
                  <a href="../book_management/account_ledger.html" class="list-group-item">계정별원장 <span class="badge">50</span></a>
                  <a href="../book_management/foreign_currency_account_ledger.html" class="list-group-item">외화 계정별원장 <span class="badge">50</span></a>
		  <a href="../book_management/buying_selling.html" class="list-group-item">매입매출장<span class="badge">145</span></a>
		  <a href="../book_management/journal.html" class="list-group-item">분개장<span class="badge">30</span></a>  
		  <a href="../book_management/tax_calculation_hh.html" class="list-group-item">세금계산서(계산서)현황<span class="badge">65</span></a>
		  <a href="../book_management/tax_calculation_sum_report.html" class="list-group-item">세금계산서합계표(관리용)<span class="badge">8</span></a>
                  <a href="../book_management/daily_month_table.html" class="list-group-item">일계표(월계표)<span class="badge">8</span></a>
                  <a href="../book_management/outline_ledger.html" class="list-group-item">적요별원장<span class="badge">8</span></a>
		  <a href="../book_management/chit.html" class="list-group-item">전표출력<span class="badge">145</span></a>
		  <a href="../book_management/receivables_age.html" class="list-group-item">채권연령분석<span class="badge">30</span></a>  
		  <a href="../book_management/total_account_ledger.html" class="list-group-item">총계정원장<span class="badge">65</span></a>
                  <a href="../book_management/cash_incomingsandoutgoings.html" class="list-group-item">현금출납장<span class="badge">8</span></a>
                  <a href="../book_management/foreign_currency_bank_hh.html" class="list-group-item">외화예적금현황<span class="badge">8</span></a>
	        </div>
              </div>
	    </div>
            <div class="panel panel-danger">
	      <!-- Default panel contents -->
	      <div class="panel-heading">
                <h4 class="panel-title"><a data-toggle="collapse" href="#collapse12">프로젝트관리</a></h4>
              </div>
              <div id="collapse12" class="panel-collapse collapse">
	        <div class="panel-body">
		  <p>무엇을 써야하나?</p>
	        </div>
	        <!-- List group -->
	        <div class="list-group">
                  <a href="../project_management/part_cost_division.html" class="list-group-item"><span class="glyphicon glyphicon-camera"></span>부문별(현장.프로젝트)원가안분및명세서<span class="badge">25</span></a>
                  <a href="../project_management/project_account_ledger.html" class="list-group-item"><span class="glyphicon glyphicon-file"></span>프로젝트계정별원장<span class="badge">145</span></a>
                  <a href="../project_management/project_client_ledger.html" class="list-group-item"><span class="glyphicon glyphicon-file"></span>프로젝트별 거래처원장<span class="badge">145</span></a>
                  <a href="../project_management/project_account_subject_ledger.html" class="list-group-item"><span class="glyphicon glyphicon-music"></span>프로젝트별 계정과목별원장(내용)<span class="badge">50</span></a>
                  <a href="../project_management/project_accumulation_lossandgain.html" class="list-group-item"><span class="glyphicon glyphicon-file"></span>프로젝트별 누적손익현황<span class="badge">145</span></a>
                  <a href="../project_management/project_accumulation_cost.html" class="list-group-item"><span class="glyphicon glyphicon-music"></span>프로젝트별 누적원가현황<span class="badge">50</span></a>
                  <a href="../project_management/project_buying_selling.html" class="list-group-item"><span class="glyphicon glyphicon-film"></span>프로젝트별매입매출장<span class="badge">8</span></a>
                </div>
              </div>
	    </div>
            <div class="panel panel-danger">
	      <!-- Default panel contents -->
	      <div class="panel-heading">
                <h4 class="panel-title"><a data-toggle="collapse" href="#collapse13">현장관리</a></h4>
              </div>
              <div id="collapse13" class="panel-collapse collapse in">
	        <div class="panel-body">
		  <p>무엇을 써야하나?</p>
	        </div>
	        <!-- List group -->
	        <div class="list-group">
                  <a href="../spot_management/construction_account_book.html" class="list-group-item"><span class="glyphicon glyphicon-camera"></span>공사대장(내용 탭)<span class="badge">25</span></a>
                  <a href="../spot_management/part_cost_division.html" class="list-group-item"><span class="glyphicon glyphicon-music"></span>부문별(현장.프로젝트)원가안분및명세서<span class="badge">50</span></a>
                  <a href="../spot_management/part_lossandgain_hh.html" class="list-group-item"><span class="glyphicon glyphicon-film"></span>부문별손익현황<span class="badge">8</span></a>
                  <a href="../spot_management/part_cost_details.html" class="list-group-item"><span class="glyphicon glyphicon-camera"></span>부문별원가명세서<span class="badge">25</span></a>
                  <a href="../spot_management/part_cost_hh.html" class="list-group-item"><span class="glyphicon glyphicon-file"></span>부문별원가현황<span class="badge">145</span></a>
                  <a href="../spot_management/advanced_money_ledger.html" class="list-group-item"><span class="glyphicon glyphicon-music"></span>전도금원장<span class="badge">50</span></a>
                  <a href="../spot_management/total_cost_lossandgain_management.html" class="list-group-item"><span class="glyphicon glyphicon-film"></span>총괄원가손익관리<span class="badge">8</span></a>
                  <a href="../spot_management/spot_client_ledger.html" class="list-group-item"><span class="glyphicon glyphicon-file"></span>현장별 거래처원장(내용)<span class="badge">145</span></a>
                  <a href="../spot_management/spot_buying_selling.html" class="list-group-item"><span class="glyphicon glyphicon-file"></span>현장별매입매출장<span class="badge">145</span></a>
                  <a href="../spot_management/spot_cost_report.html" class="list-group-item"><span class="glyphicon glyphicon-music"></span>현장별원가보고서<span class="badge">50</span></a>
                  <a href="../spot_management/spot_cost_totalization.html" class="list-group-item active"><span class="glyphicon glyphicon-film"></span>현장별원가집계표<span class="badge">8</span></a>
                  <a href="../spot_management/spot_ledger.html" class="list-group-item"><span class="glyphicon glyphicon-film"></span>현장별원장<span class="badge">8</span></a>
                </div>
              </div>
	    </div>
          </div>
        </div><!-- end well -->
      </div><!-- end col-md-3 -->
       <div class="col-md-9">
        <div class="btn-toolbar mar_b3">
          <button type="button" class="btn btn-xs btn-success toolbar_dialog" id="esc" title="실행하고있는 메뉴를 종료합니다">종료(ESC)</button> 
          <button type="button" class="btn btn-xs btn-primary toolbar_dialog" id="help" title="사용방법이 조회됩니다">도움(F1)</button>  
          <button type="button" class="btn btn-xs btn-danger toolbar_dialog" id="salesAccount_1_300">매출계정설정(F4)</button>
          <button type="button" class="btn btn-xs btn-default" title="타이틀란 현장목록에 현장명만 나오는 것을 현장코드 포함하여 사용합니다">현장코드(F6)</button>
          <button type="button" class="btn btn-xs btn-info" title="계정과목란에 있는 계정과목명의 각 코드를 보여줍니다">계정코드(F11)</button>          
          <button type="button" class="btn btn-xs btn-warning" title="메뉴 하단 판매비와관리비란의 세부항목으로 보고자 할 때 사용합니다">세부항목보기(CF2)</button>
          <button type="button" class="btn btn-xs btn-success" title="데이터 조회시 현장코드있는 내용만 조회가 되며 , Ctrl+F3 미등록현장을 클릭하면 입력된 원가계정에 현장코드 없는 데이터끼리 집계하여 표시합니다.">미등록 현장(CF3)</button>
          <button type="button" class="btn btn-xs btn-primary" title="500 번대 제조계정 사용시 본 계정을 도급현장목록에 포함할지 여부를 선택합니다. 1. 현장 기준 , 2. 계정과목기준 중 선택하여 표시할 수 있습니다.">데이타구성 기준(CF4)</button>   
          <button type="button" class="btn btn-xs btn-danger toolbar_dialog" id="lookup_3_610" title="필요한 조회조건이 입력된 상태에서 검색하여 조회됩니다.">조회(F12)</button>
         </div>
        <ol class="breadcrumb mar_b3">
          <li><a href="#">회계장부</a></li>
          <li><a href="#">현장관리</a></li>
          <li class="active">총괄원가손익관리</li>
        </ol>
        <form class="form-inline well well-sm" style="margin-bottom: 2px;">
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;구분:</label>
            <select class="form-control">
              <option>0.전체</option>
              <option>0600번대도급</option>
            </select>
          </div> 
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp; &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div>                
        </form>
        <div class="row">
           <div class="col-md-9">                                                         
                 <table id="example" class="display nowrap" cellspacing="0" width="100%">
                    <thead>
                      <tr class="danger">
                        <th class="" rowspan=2>계정과목(도급600번대)</th>
                        <th class="" colspan=3>도급현장목록</th>
                        <th class="" rowspan=2>계정과목(제조500번대)</th> 
                        <th class="" rowspan=2>금액</th>
                        <th class="" rowspan=2>총계</th>   
                      </tr> 
                      <tr class="danger">
                        <th class="">도급1현장</th>
                        <th class="">도급2현장</th>
                        <th class="">소계</th>    
                      </tr> 
                    </thead>                              
                  </table>               
              </div> <!-- end col-md-9 -->
           <div class="col-md-3">
              <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 구글 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-file"></span> 금융감독원 <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 김영식 변호사 <span class="badge">50</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-camera"></span> 삼성전자 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-camera"></span> 아마존 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-file"></span> 페이스북 <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-camera"></span> 카카오 <span class="badge">25</span>
                  </a>
                </div>
           </div> <!-- end col-md-3 -->
        </div> <!-- end row -->                

              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs" style="margin-top: 7px;">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           </div>       
                          
    </div> <!-- end col-md-9 -->
  </div> <!-- end row -->
  </div> <!-- end container -->



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

<!-- dialog_salesAccount -->
<div id="dialog_salesAccount" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <div class="btn-toolbar mar_b3">
          <button type="button" class="btn btn-xs btn-success">제조</button> 
          <button type="button" class="btn btn-xs btn-primary">도급</button>  
          <button type="button" class="btn btn-xs btn-danger">분양</button>
          <button type="button" class="btn btn-xs btn-default">보관</button>
          <button type="button" class="btn btn-xs btn-info">운송</button>          
         </div>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
                        <tr class="danger">
                         <th>코드</th>
                         <th>과목</th>
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
    <!--<script>window.jQuery || document.write('<script src="../../../js/jquery.min.js"></script>')</script> -->
    <script src="../../../asset/js/jquery.min.js"></script>
    <!--<script src="http://code.jquery.com/jquery-1.12.3.min.js"></script> -->

    <script src="../../../asset/js/bootstrap.min.js"></script>
    <script src="../../../asset/jquery-ui-1.11.4.custom/jquery-ui.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../../asset/js/ie10-viewport-bug-workaround.js"></script>

    <script src="../../../asset/js/header-content.js"></script>

    <script src="../../../asset/js/jssor/jssor.slider.mini.js"></script>
    <script src="../../../asset/js/jssor.js"></script>
  
    <script src="../../../asset/js/main.js"></script> 
    <script src="../../../asset/js/main_popup.js"></script> 
    <script src="../../../asset/js/main_popup_item.js"></script> 
    <script src="../../../asset/js/datepicker.js"></script>
    <script src="../../../asset/js/lan_ko.js"></script>
    <script src="../../../asset/js/con_tab.js"></script>
    <script src="../../../asset/js/con_topmenu.js"></script>
    <script src="../../../asset/js/toolbar_popup.js"></script>
    <script src="../../../asset/js/con_mainmenu.js"></script>
        
    <!-- dialog로딩 시 autofocus없애기 -->
    <script>$.ui.dialog.prototype._focusTabbable = function(){};</script>
   
    <script src="../../../asset/DataTables/media/js/jquery.dataTables.js"></script>
    <script src="../../../asset/DataTables/media/js/dataTables.jqueryui.js"></script>
    <script src="../../../asset/DataTables/extensions/Buttons/js/dataTables.buttons.js"></script>
    <script src="../../../asset/DataTables/extensions/Buttons/js/buttons.jqueryui.js"></script>
    <script src="../../../asset/DataTables/extensions/Scroller/js/dataTables.scroller.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
    <script src="http://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js"></script>
    <script src="http://cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js"></script>
    <script src="../../../asset/DataTables/extensions/Buttons/js/buttons.html5.js"></script>
    <script src="../../../asset/DataTables/extensions/Buttons/js/buttons.print.js"></script>
    <script src="../../../asset/DataTables/extensions/Buttons/js/buttons.colVis.js"></script>
    <script class="init">	
        $(document).ready(function() {
	   $("body").con_tab3({cla2: "1", exam: "#example", url: "../../data/2500_07.txt"});
        });
   </script>
   <script src="../../../asset/js/common.js"></script>
  </body>
</html>
