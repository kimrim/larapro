@include('content.conbutton.acc.tradeInsert.otherTradeOne.bankTrade')
@include('content.conbreadcrumb.acc.tradeInsert.taxbill.handling')
<form class="form-inline well well-sm mar_tm18" style="margin-bottom: 2px;">
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
            <select class="form-control foc a next110">
              <option>과세</option>
              <option>면세</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" class="form-control input-sm" placeholder="전자">
          </div>
        </form>
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="" role="tab" data-toggle="tab">미처리</a></li>  
              <li role="presentation"><a href="#tab2" class="acc109" role="tab" data-toggle="tab">처리</a></li>       
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
              </div><!-- end col-md-3 -->
              <div class="col-md-9">
                <div class="well well-sm">
                    <form class="form-horizontal formsub" id="form1">
                      <div class="form-group">                        
                        <label class="control-label col-md-2">처리번호</label>
                        <div class="col-md-4">
                          <input type="text" class="form-control input-sm" readonly="readonly">
                        </div>
                        <label class="control-label col-md-2">처리일자</label>
                        <div class="col-md-4">
                          <input type="text" class="form-control input-sm datepicker" readonly="readonly"> 
                        </div>
                      </div>
                      <div class="form-group">                        
                        <label class="control-label col-md-2">비고</label>
                        <div class="col-md-10">
                          <input type="text" class="form-control input-sm" readonly="readonly">
                        </div>                   
                      </div>
                    </form>
                   </div>
                   <div class="mar_tm18"></div>
                    <table id="example" class="display nowrap" cellspacing="0" width="100%">
		      <thead>
                        <tr>
                          <th class="">No</th>
                          <th class="">판매일자</th>
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
                    <form class="form-horizontal formsub" id="form2">
                      <div class="col-md-2">
                       <label style="display: inline-block">
                        <input style="vertical-align: middle" type="checkbox">
                        <span style="vertical-align: middle">예정누락</span>
                      </label>
                     </div>
                     <div class="col-md-3">
                       <label style="display: inline-block">
                        <input style="vertical-align: middle" type="checkbox">
                        <span style="vertical-align: middle">매입자발행</span>
                      </label>
                     </div>
                     <div class="col-md-3 col-md-offset-4">
                       <button type="button" class="btn btn-xs btn-danger" style="margin-top: 7px;">편집</button> 
                     </div>  
                    </form>
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
            </div> <!-- end col-md-3 -->
              <div class="col-md-9">
                 <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
		      <thead>
                      <tr>
                        <th class="">No</th>
                        <th class="">판매일자</th>
                        <th class="">공급가액</th>
                        <th class="">부가세</th>
                        <th class="">합계</th>
                        <th class="">거래일자</th>
                        <th class="">과세</th>
                        <th class="">전자</th>
                        <th class="">처리번호</th>             
                      </tr>
                    </thead>
                  </table>
                </div> <!-- end col-md-9 -->
               </div>  <!-- end row -->
              </div><!-- end tab-pane -->
             </div> <!-- end tab-content --> 
           </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default -->
           
