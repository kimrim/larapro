@include('content.conbutton.acc.account_book.book_management.buying_selling')
@include('content.conbreadcrumb.acc.account_book.book_management.buying_selling')
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
              <li role="presentation" class="active"><a href="#tab1" role="tab" data-toggle="tab" role="tab" class="acc104">잔액</a></li>  
              <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab" class="acc106">잔액상세</a></li>
              <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab" class="acc108">내용</a></li>       
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">
            <div class="tab-pane active" id="tab1">
               <div class="col-md-3">
                 <table id="example_90" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">코드</th>
                        <th class="">거래처명</th>
                        <th class="">등록번호</th>
                        <th class="">대표자명</th>       
                      </tr> 
                    </thead>
                  </table>
               </div> <!-- end col-md-3 --> 
               <div class="col-md-9"> 
                  <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
				<thead>
					<tr class="danger">
						<th>일자</th>
						<th>적요</th>
						<th>코드</th>
						<th>거래처</th>
					</tr>
				</thead>
                    </tbody>
                  </table>
                </div> <!-- end col-md-9 -->              
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab2">
                 <div class="col-md-3">
                 <table id="example_91" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">코드</th>
                        <th class="">거래처명</th>
                        <th class="">등록번호</th>
                        <th class="">대표자명</th>       
                      </tr> 
                    </thead>
                  </table>
               </div> <!-- end col-md-3 --> 
               <div class="col-md-9"> 
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class="">코드</th>
                        <th class="">계정과목명</th>
                        <th class="">전기이월</th>  
                        <th class="">차변</th>
                        <th class="">대변</th>
                        <th class="">잔액</th>      
                      </tr> 
                    </thead>
                  </table>
                </div> <!-- end col-md-9 -->              
              </div><!-- end tab-pane 2 --> 
              <div class="tab-pane" id="tab3">
                <div class="col-md-3">
                 <table id="example_92" class="display nowrap" cellspacing="0" width="100%">
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
                  <table id="tab3_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class="">일자</th>
                        <th class="">적요</th>
                        <th class="">차변</th>
                        <th class="">대변</th>
                        <th class="">잔액</th>
                        <th class="">번호</th>
                        <th class="">코드</th>
                        <th class="">부서/사원</th>      
                      </tr> 
                    </thead>
                  </table>
                </div> <!-- end col-md-9 -->              
              </div> <!-- end tab-pane 3 --> 
             </div> <!-- end tab-content --> 
            </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default --> 
           
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
