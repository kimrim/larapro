﻿             <div class="row" style="margin-top: -17px;"> 
<form class="form-horizontal mar_tm18" id="form116">
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
                  <label class="control-label col-md-2">화폐발행회사</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">12345</span>       
                      <input type="text" class="form-control pop jcor next310 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-2">결제처리번호</label>
                  <div class="col-md-4">   
                      <input type="text" class="form-control input-sm" style="z-index: 0;" readonly="readonly">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">거래처</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">12345</span>       
                      <input type="text" class="form-control pop client next220 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-2">계정과목</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control pop account next330 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-2">결제</label>
                  <div class="col-md-2">
                    <div class="btn-group btn-group-xs">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">미수금 <span class="caret"></span></button>
                      <ul class="dropdown-menu settlement" role="menu">
                        <li><a href="#">미수금</a></li>
                      </ul>
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
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
             </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
              </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">       
	@include('content.conmid.acc.tradeInsert.otherTradeTwo.elecMoney')
       </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
     </form>
      </div> <!-- end row -->             
   

	@include('content.conbuttonbot.acc.tradeInsert.trade_insert.revenue')
	@include('content.conbot.acc.tradeInsert.trade_insert.revenue')
