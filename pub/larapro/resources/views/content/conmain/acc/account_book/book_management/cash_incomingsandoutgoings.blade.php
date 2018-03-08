@include('content.conbutton.acc.account_book.book_management.cash_incomingsandoutgoings')
@include('content.conbreadcrumb.acc.account_book.book_management.cash_incomingsandoutgoings')
<form class="form-inline well well-sm mar_tm18" style="margin-bottom: 2px;">
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div>       
        </form>
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                             
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" role="tab" data-toggle="tab" class="acc108" role="tab">전체</a></li>  
              <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab" class="acc108">부서별</a></li> 
              <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab" class="acc108">사원별</a></li>
              <li role="presentation"><a href="#tab4" role="tab" data-toggle="tab" class="acc108">현장별</a></li> 
              <li role="presentation"><a href="#tab5" role="tab" data-toggle="tab" class="acc108">프로젝트별</a></li>       
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">
            <div class="tab-pane active" id="tab1"> 
             <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="danger">
		    <th>일자</th>
		    <th>코드</th>
		    <th>적요</th>
		    <th>코드</th>
		    <th>거래처</th>
		    <th>임금</th>  
                    <th>출금</th>
		    <th>잔액</th>  
                </tr> 
               </thead>
              </table>
            </div> <!-- end tab-pane -->
            <div class="tab-pane" id="tab2">
              <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="danger">
		    <th>일자</th>
		    <th>코드</th>
		    <th>적요</th>
		    <th>코드</th>
		    <th>부서</th>
		    <th>임금</th>  
                    <th>출금</th>
		    <th>잔액</th>  
                </tr> 
               </thead>
              </table>
            </div><!-- end tab-pane 2 --> 
            <div class="tab-pane" id="tab3">
              <table id="tab3_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="danger">
		    <th>일자</th>
		    <th>코드</th>
		    <th>적요</th>
		    <th>코드</th>
		    <th>사원</th>
		    <th>임금</th>  
                    <th>출금</th>
		    <th>잔액</th>  
                </tr> 
               </thead>
              </table>
            </div><!-- end tab-pane 3 -->
            <div class="tab-pane" id="tab4">
              <table id="tab4_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="danger">
		    <th>일자</th>
		    <th>코드</th>
		    <th>적요</th>
		    <th>코드</th>
		    <th>현장</th>
		    <th>임금</th>  
                    <th>출금</th>
		    <th>잔액</th>  
                </tr> 
               </thead>
              </table>
            </div><!-- end tab-pane 4 --> 
            <div class="tab-pane" id="tab5">
              <table id="tab5_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="danger">
		    <th>일자</th>
		    <th>코드</th>
		    <th>적요</th>
		    <th>코드</th>
		    <th>프로젝트</th>
		    <th>임금</th>  
                    <th>출금</th>
		    <th>잔액</th>  
                </tr> 
               </thead>
              </table>
            </div><!-- end tab-pane 5 -->  
          </div> <!-- end tab-content --> 
         </div> <!-- end panel-body --> 
       </div> <!-- end panel with-nav-tabs panel-default --> 

              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
