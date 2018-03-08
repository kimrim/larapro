<ul class="nav nav-tabs mar_tm18" id="myTab" role="tablist">
          <li role="presentation" class="active"><a href="#tab-tax1" role="tab">받을어음</a></li>  
          <li role="presentation"><a href="#tab-tax2">지급어음</a></li>
        </ul>        
          <div class="tab-content">         
            <div class="tab-pane active pad_t5" id="tab-tax1">             
             <form class="form-horizontal" id="form11">   
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
                      <input type="text" class="form-control" value="외상매출금" readonly="readonly">
                    </div>
                  </div>
                </div>
               <div class="form-group">
                 <label class="control-label col-md-2">금액</label>
                 <div class="col-md-4">
                   <input type="text" class="form-control input-sm amount_form next210 cac">
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
           </form>
           <div class="well well-sm mar_tm18">받을어음 세부내역</div>
           <form class="form-horizontal mar_tm18" id="form12">
               <div class="well well-sm">                           
                <div class="form-group">
                  <label class="control-label col-md-3">어음상태</label>
                  <div class="col-md-3">
                     <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-xs btn-danger dropdown-toggle" data-toggle="dropdown">1.보관 <span class="caret"></span></button>
                        <ul class="dropdown-menu next410 foc" role="menu">
                          <li><a href="#">1.보관</a></li>
                          <li><a href="#">2.</a></li>
                          <li><a href="#">3.할인</a></li>
                          <li><a href="#">4.배서</a></li>
                          <li><a href="#">5.만기(추심)</a></li>
                          <li><a href="#">6.부도</a></li>
                          <li><a href="#">7.부분할인</a></li>
                        </ul>
                      </div>
                  </div>                
                  <label class="control-label col-md-3">어음종류</label>
                  <div class="col-md-3">
                    <div class="btn-group btn-group-xs">       
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">1.약속어음 <span class="caret"></span></button>
                        <ul class="dropdown-menu next410 foc" role="menu">
                          <li><a href="#">1.약속어음</a></li>
                          <li><a href="#">9.외국인</a></li>
                        </ul>
                      </div>
                  </div>
                 </div>
                 <div class="form-group">
                  <label class="control-label col-md-3">어음번호</label>
                  <div class="col-md-3">
                    <input type="text" class="form-control input-sm foc next120">
                  </div>
                  <label class="control-label col-md-3">수취구분</label>
                  <div class="col-md-3">
                    <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-xs btn-info dropdown-toggle" data-toggle="dropdown">1.자수어음 <span class="caret"></span></button>
                        <ul class="dropdown-menu next410 foc" role="menu">
                          <li><a href="#">1.자수어음</a></li>
                          <li><a href="#">9.외국인</a></li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-3">발행인</label>
                  <div class="col-md-3">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-3">배서인</label>
                  <div class="col-md-3">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control" readonly="readonly">
                    </div>
                  </div>                 
                </div> 
                <div class="form-group">
                  <label class="control-label col-md-3">발행일자</label>
                  <div class="col-md-3">
                    <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly"> 
                  </div>                 
                <label class="control-label col-md-3">만기일자</label>
                  <div class="col-md-3">
                    <input type="text" class="form-control input-sm next210b datepicker" readonly="readonly"> 
                  </div>                 
                </div> 
                <div class="form-group">
                  <label class="control-label col-md-3">지급은행</label>
                  <div class="col-md-3">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-3">지점명</label>
                  <div class="col-md-3">
                      <input type="text" class="form-control" readonly="readonly">
                  </div>                 
                </div> 
                <div class="form-group">
                  <label class="control-label col-md-3">할인기관</label>
                  <div class="col-md-3">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control" readonly="readonly">
                    </div>
                  </div>
                  <label class="control-label col-md-3">지점명</label>
                  <div class="col-md-3">
                      <input type="text" class="form-control" readonly="readonly">
                  </div>                 
                </div> 
                <div class="form-group">                  
                  <label class="control-label col-md-3">할인율(%)</label>
                  <div class="col-md-3">
                      <input type="text" class="form-control" readonly="readonly">
                  </div> 
                  <label class="control-label col-md-3">지급거래처(피배서인)</label>
                  <div class="col-md-3">
                    <div class="input-group">
                      <span class="input-group-addon">00045</span>
                      <input type="text" class="form-control" readonly="readonly">
                    </div>
                  </div>                
                </div>          
