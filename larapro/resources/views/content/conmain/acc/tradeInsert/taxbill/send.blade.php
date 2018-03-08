@include('content.conbutton.acc.tradeInsert.otherTradeOne.bankTrade')
@include('content.conbreadcrumb.acc.tradeInsert.taxbill.handling')
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
            <label for="exampleInputName2">구분</label>
            <select class="form-control foc a next110s">
              <option>국세청</option>
              <option>거래처</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control foc">
              <option>과세</option>
              <option>면세</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading"> 
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="acc109" role="tab" data-toggle="tab">전송</a></li>  
              <li role="presentation"><a href="#tab2" class="acc109" role="tab" data-toggle="tab">미전송</a></li>       
            </ul>
        </div>
        <div class="panel-body">
         <div class="tab-content">
          <div class="tab-pane active" id="tab1"> <!-- fade in --> 
            <div class="row">     
              <div class="col-md-3">
                <table id="example_90" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr>
                        <th class="">No</th>
                        <th class="">코드</th>
                        <th class="">거래처명</th>      
                      </tr> 
                    </thead>
                  </table>
          </div>
          <div class="col-md-9" style="padding-left:0">
            <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr>
                  <th class="">No</th>
                  <th class="">처리일자</th>
                  <th class="">공급가액</th>
                  <th class="">부가세</th>
                  <th class="">합계</th>
                  <th class="">상호</th>
                  <th class="">과세</th>
                  <th class="">전자</th>
                  <th class="">건별</th>             
                </tr>
              </thead>
            </table>
          </div> <!-- end col-md-9 --> 
         </div>  <!-- end row --> 
        </div> <!-- end tab-pane -->
        <div class="tab-pane" id="tab2">
          <div class="row">
           <div class="col-md-3">
            <table id="example_91" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr>
                        <th class="">No</th>
                        <th class="">코드</th>
                        <th class="">거래처명</th>      
                      </tr> 
                    </thead>
                  </table>
          </div>
          <div class="col-md-9" style="padding-left:0">
           <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr>
                  <th class="width-8">No</th>
                  <th class="">처리일자</th>
                  <th class="">공급가액</th>
                  <th class="">부가세</th>
                  <th class="">합계</th>
                  <th class="">상호</th>
                  <th class="">과세</th>
                  <th class="">전자</th>
                  <th class="">건별</th>             
                </tr>
              </thead>
            </table>
          </div> <!-- end col-md-9 -->
         </div>  <!-- end row -->
        </div><!-- end tab-pane -->
       </div> <!-- end tab-content -->  
     </div> <!-- end panel-body --> 
    </div> <!-- end panel with-nav-tabs panel-default -->

