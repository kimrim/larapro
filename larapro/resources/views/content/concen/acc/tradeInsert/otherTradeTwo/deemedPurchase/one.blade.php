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
                  <label class="control-label col-md-2">구분</label>
                  <div class="col-md-4">
                    <div class="btn-toolbar">         
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">1.계산서 <span class="caret"></span></button>
                        <ul class="dropdown-menu settlement2" role="menu">
                          <li><a href="#">1.계산서</a></li>
                          <li><a href="#">2.신용카드</a></li>
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
                   <input type="text" class="form-control input-sm amount_form next210 cac" readonly="readonly">
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
