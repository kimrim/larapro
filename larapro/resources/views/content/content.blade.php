	@include('content.conbutton.acc.tradeInsert.trade_insert.revenue')
	@include('content.conbreadcrumb.acc.tradeInsert.trade_insert.revenue')
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
	@include('content.conmid.acc.revenue.tax')
       </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one') 
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
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
          </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
            </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">        
	@include('content.conmid.acc.revenue.notax')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one') 
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
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
           </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
        </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
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
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
         </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
        </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
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
	@include('content.conmid.acc.revenue.sales')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
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
	@include('content.conmid.acc.revenue.asset')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
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
	@include('content.conmid.acc.revenue.receive')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div> <!-- end tab-pane rec -->
      </div> <!-- end tab-content -->

	@include('content.conbuttonbot.acc.tradeInsert.trade_insert.revenue')
	@include('content.conbot.acc.tradeInsert.trade_insert.revenue')



