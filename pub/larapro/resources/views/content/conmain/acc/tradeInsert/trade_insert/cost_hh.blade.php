<form class="form-inline well well-sm mar_tm18">
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
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist" style="margin-bottom: 2px;">
              <li role="presentation" class="active"><a href="#tab1" class="acc114" role="tab" data-toggle="tab">과세</a></li>  
              <li role="presentation"><a href="#tab2" class="acc113" role="tab" data-toggle="tab">면세</a></li>
              <li role="presentation"><a href="#tab3" class="acc115" role="tab" data-toggle="tab">카드</a></li>
              <li role="presentation"><a href="#tab4" class="acc112" role="tab" data-toggle="tab">현영</a></li>
              <li role="presentation"><a href="#tab5" class="acc111" role="tab" data-toggle="tab">혼합</a></li>
              <li role="presentation"><a href="#tab6" class="acc109" role="tab" data-toggle="tab">지급</a></li>
            </ul>
          </div>
          <div class="panel-body">
            <div class="tab-content">
               <div class="tab-pane active" id="tab1"> <!-- fade in -->
                <div class="row"> 
                 <div class="col-md-9">
                  <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
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
                 </div> 
                 <div class="col-md-3">
	@include('rightbar.acc.tradeInsert.revenue')
               </div> <!-- end col-md-3 --> 
               </div> <!-- end row -->      
              </div> <!-- end tab-pane tab1 -->
              <div class="tab-pane" id="tab2">
               <div class="row"> 
                 <div class="col-md-9">
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
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
                         <th>적요</th>
                         <th>부서사원</th>
                         <th>현장</th>
                         <th>프로젝트</th>
                        </tr>
                      </thead>
                  </table>
                 </div> 
                 <div class="col-md-3">
	@include('rightbar.acc.tradeInsert.revenue')
               </div> <!-- end col-md-3 --> 
               </div> <!-- end row -->      
              </div><!-- end tab-pane tab2 -->
              <div class="tab-pane" id="tab3">
                <div class="row"> 
                 <div class="col-md-9">
                  <table id="tab3_table" class="display nowrap" cellspacing="0" width="100%">
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
                         <th>카드사</th>
                         <th>금액</th>
                         <th>세액</th>
                         <th>적요</th>
                         <th>부서사원</th>
                         <th>현장</th>
                         <th>프로젝트</th>
                        </tr>
                      </thead>
                  </table>
                 </div> 
                 <div class="col-md-3">
	@include('rightbar.acc.tradeInsert.revenue')
               </div> <!-- end col-md-3 --> 
               </div> <!-- end row -->      
              </div> <!-- end tab-pane tab3 -->  
              <div class="tab-pane" id="tab4">
                <div class="row"> 
                 <div class="col-md-9">
                  <table id="tab4_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                        <tr class="danger">
                         <th>일자</th>
                         <th>전표번호</th>
                         <th>유형</th>
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
                 </div> 
                 <div class="col-md-3">
	@include('rightbar.acc.tradeInsert.revenue')
               </div> <!-- end col-md-3 --> 
               </div> <!-- end row -->      
              </div> <!-- end tab-pane tab4 --> 
              <div class="tab-pane" id="tab5">
                 <div class="row"> 
                 <div class="col-md-9">
                  <table id="tab5_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                        <tr class="danger">
                         <th>일자</th>
                         <th>전표번호</th>
                         <th>유형</th>
                         <th>전자</th>
                         <th>건별</th>
                         <th>거래처</th>
                         <th>계정과목</th>
                         <th>적요</th>
                         <th>부서사원</th>
                         <th>현장</th>
                         <th>프로젝트</th>
                        </tr>
                      </thead>
                  </table>
                 </div> 
                 <div class="col-md-3">
	@include('rightbar.acc.tradeInsert.revenue')
               </div> <!-- end col-md-3 --> 
               </div> <!-- end row -->                        
              </div> <!-- end tab-pane tab5--> 
              <div class="tab-pane" id="tab6">
                  <div class="row"> 
                 <div class="col-md-9">
                  <table id="tab6_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                        <tr class="danger">
                         <th>일자</th>
                         <th>전표번호</th>
                         <th>거래처</th>
                         <th>결제</th>
                         <th>금액</th>
                         <th>적요</th>
                         <th>부서사원</th>
                         <th>현장</th>
                         <th>프로젝트</th>
                        </tr>
                      </thead>
                  </table>
                 </div> 
                 <div class="col-md-3">
	@include('rightbar.acc.tradeInsert.revenue')
               </div> <!-- end col-md-3 --> 
               </div> <!-- end row -->      
              </div> <!-- end tab-pane tab6 -->      
             </div> <!-- end tab-content --> 
           </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default -->


















