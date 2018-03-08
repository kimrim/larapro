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
                  <label class="control-label col-md-2">사유</label>
                  <div class="col-md-4">
                    <div class="btn-toolbar">         
                      <div class="btn-group btn-group-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">2.명세서제출대상 <span class="caret"></span></button>
                        <ul class="dropdown-menu settlement2" role="menu">
                          <li><a href="#">1.해당사항없음</a></li>
                          <li><a href="#">2.명세서제출대상</a></li>
                          <li><a href="#">3.명세서제출제외대상</a></li>
                          <li><a href="#">4.증빙불비</a></li>
                        </ul>
                      </div>                  
                    </div>
                  </div>
                  <label class="control-label col-md-2 hide">제외내역</label>
                  <div class="col-md-4 hide">
                    <div class="input-group">
                      <span class="input-group-addon">00</span>       
                      <input type="text" class="form-control pop except next310 n" style="z-index: 0;" readonly="readonly">
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
                   <input type="text" class="form-control input-sm amount_form next210 foc" />
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
