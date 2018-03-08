             <div class="row" style="margin-top: -17px;"> 
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
                  <label class="control-label col-md-2">불공제사유</label>
                  <div class="col-md-4">
                    <div class="btn-toolbar">         
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">1.필요적 기재사항 누락 등 <span class="caret"></span></button>
                        <ul class="dropdown-menu next410 foc" role="menu">
                          <li><a href="#">1.필요적 기재사항 누락 등</a></li>
                          <li><a href="#">2.사업과 직접 관련 없는 지출</a></li>
                          <li><a href="#">3.비영업용 소형승용자동차 구입ㆍ유지 및 임차</a></li>
                          <li><a href="#">4.접대비 및 이와 유사한 비용 관련</a></li>
                          <li><a href="#">5.면세사업등 관련</a></li>
                          <li><a href="#">6.토지의 자본적 지출 관련</a></li>
                          <li><a href="#">7.사업자등록 전 매입세액</a></li>
                          <li><a href="#">8.금ㆍ구리 스크랩 거래계좌 미사용 관련 매입세액</a></li>
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
                      <input type="text" class="form-control pop client next220 n" style="z-index: 0;" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-2">계정과목</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control pop account next330b n" style="z-index: 0;" readonly="readonly">
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
                    <input type="input" class="form-control pop summary next510 n" id="summary01" style="z-index: 0;" readonly="readonly">
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
@include('content.conmid.acc.tradeInsert.otherTradeTwo.noDeduction')
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
