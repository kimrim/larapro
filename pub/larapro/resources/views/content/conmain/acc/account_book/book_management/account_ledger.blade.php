@include('content.conbutton.acc.account_book.book_management.account_ledger')
@include('content.conbreadcrumb.acc.account_book.book_management.account_ledger')
<form class="form-inline well well-sm mar_tm18">
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;계정과목</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop account next230 n" readonly="readonly">
            </div>
          </div> <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">거래처</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop client next210 n" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop client next210 n" readonly="readonly">
            </div>
          </div>      
        </form> 
         
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                          
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" role="tab" data-toggle="tab" class="acc107">계정별</a></li>  
              <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab" class="acc107">부서별</a></li>
              <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab" class="acc107">사원별</a></li> 
              <li role="presentation"><a href="#tab4" role="tab" data-toggle="tab" class="acc107">현장별</a></li>
              <li role="presentation"><a href="#tab5" role="tab" data-toggle="tab" class="acc105">전체</a></li>       
           </ul>
          </div>
          <div class="panel-body">
           <div class="col-md-3">
                 <table id="example_90" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                        <tr class="danger">
                         <th class=""></th>
                         <th class="">코드</th>
                         <th class="">계정과목</th> 
                        </tr>
                      </thead>
                  </table>
               </div> <!-- end col-md-3 --> 
         <div class="col-md-9"> 
         <div class="tab-content">
            <div class="tab-pane active" id="tab1">                                              
                  <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
		      <thead>
		          <tr>
			        <th>일자</th>
				<th>적요</th>
				<th>코드</th>
				<th>거래처</th>
				<th>차변</th>
                                <th>대변</th>
				<th>잔액</th>
			  </tr>
		      </thead>
                  </table>                               
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab2">
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
		      <thead>
		          <tr>
			        <th>일자</th>
				<th>적요</th>
				<th>코드</th>
				<th>부서명</th>
				<th>차변</th>
                                <th>대변</th>
				<th>잔액</th>
			  </tr>
		      </thead>
                  </table>
              </div> <!-- end tab-pane 2 --> 
              <div class="tab-pane" id="tab3">
                  <table id="tab3_table" class="display nowrap" cellspacing="0" width="100%">
		      <thead>
		          <tr>
			        <th>일자</th>
				<th>적요</th>
				<th>코드</th>
				<th>사원명</th>
				<th>차변</th>
                                <th>대변</th>
				<th>잔액</th>
			  </tr>
		      </thead>
                  </table>
              </div> <!-- end tab-pane 3 --> 
              <div class="tab-pane" id="tab4">
                  <table id="tab4_table" class="display nowrap" cellspacing="0" width="100%">
		      <thead>
		          <tr>
			        <th>일자</th>
				<th>적요</th>
				<th>코드</th>
				<th>현장명</th>
				<th>차변</th>
                                <th>대변</th>
				<th>잔액</th>
			  </tr>
		      </thead>
                  </table>
              </div> <!-- end tab-pane 4 -->
              <div class="tab-pane" id="tab5">
                  <table id="tab5_table" class="display nowrap" cellspacing="0" width="100%">
		      <thead>
		          <tr>
			        <th>일자</th>
				<th>적요</th>
				<th>차변</th>
                                <th>대변</th>
				<th>잔액</th>
			  </tr>
		      </thead>
                  </table>
              </div> <!-- end tab-pane 5 -->
             </div> <!-- end tab-content --> 
            </div> <!-- end panel-body --> 
           </div> <!-- end panel with-nav-tabs panel-default --> 
          </div> <!-- end col-md-9 -->
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>

           
