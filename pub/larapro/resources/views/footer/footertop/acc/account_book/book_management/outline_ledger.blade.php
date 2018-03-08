<!-- dialog_account -->
<div id="dialog_account" class="lookup_popup" title="계정과목" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
      <tr class="success">
        <th>코드</th>
        <th>계정과목명</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- toolbar_dialog -->
<!-- dialog_lookup -->
<div id="dialog_lookup" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
                        <tr class="danger">
                         <th>월/일</th>
                         <th>유형</th>
                         <th>품목</th>
                         <th>수량</th>
                         <th>단가</th>
                         <th>매수</th>
                         <th>공급가액</th>
                         <th>부가세</th>
                         <th>분개</th>
                         <th>예정누락분</th>
                         <th>전자여부</th>
                        </tr>
                      </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- toolbar_dialog -->
<!-- dialog_junLookup -->
<div id="dialog_junLookup" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">당신은 누구십니까?. 동의하십니까?</p>
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
                        <tr class="danger">
                         <th>월/일</th>
                         <th>유형2</th>
                         <th>품목2</th>
                         <th>수량</th>
                         <th>단가</th>
                         <th>매수</th>
                         <th>공급가액</th>
                         <th>부가세</th>
                         <th>분개</th>
                         <th>예정누락분</th>
                         <th>전자여부</th>
                        </tr>
                      </thead>
    <tbody>
      
    </tbody>
  </table>
</div>

<!-- dialog_sumOption -->
<div id="dialog_sumOption" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">여기에 온것을 환영합니다. 동의하십니까?</p>
  <div class="row">
             <div class="col-md-12">
                <div class="table-responsive">     
                   <table class="table table-bordered table-hover table-condensed">
                      <thead>
                        <tr class="danger">
                         <th>항목명</th>
                         <th></th>
                         <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="success">
                          <td rowspan=2>일계</td>
                          <td></td>
                          <td>1건이상</td>
                        </tr>
                        <tr class="warning">
                          <td></td>
                          <td>2건이상</td>
                        </tr>
                        <tr class="danger">
                          <td rowspan=2>월계</td>
                          <td></td>
                          <td>화면에 보이는 자료 기준</td>
                        </tr>
                        <tr class="warning">
                          <td></td>
                          <td>조회한 월의 말일까지 집계</td>
                        </tr> 
                        <tr class="success">
                          <td rowspan=2>분기누계</td>
                          <td></td>
                          <td>화면에 보이는 자료 기준</td>
                        </tr>
                        <tr class="warning">
                          <td></td>
                          <td>3개월 단위로 집계</td>
                        </tr> 
                        <tr class="danger">
                          <td rowspan=2>누계</td>
                          <td></td>
                          <td>조회한 월만 집계</td>
                        </tr>
                        <tr class="warning">
                          <td></td>
                          <td>총누계 집계</td>
                        </tr>                       
                        <tr class="info">
                          <td colspan=2>&nbsp;</td>
                        </tr>                       
                      </tbody>
                    </table>
                   </div>
             </div>
           </div>
</div>

<!-- dialog_s_lookup -->
<div id="dialog_s_lookup" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <div class="row">
              <form class="form-horizontal" id="">
                <div class="form-group">
                 <label class="control-label col-md-3"></label>
                 <div class="col-md-9">
                  <div class="btn-toolbar" role="toolbar" aria-label="...">
                   <div class="btn-group btn-group-sm" role="group" aria-label="...">
                     <button type="button" id="taxbill_modify01" class="btn btn-primary taxbill_modify">제조</button>
                     <button type="button" id="taxbill_modify02" class="btn btn-info taxbill_modify">도급</button>
                     <button type="button" id="taxbill_modify03" class="btn btn-default taxbill_modify">분양</button>
                     <button type="button" id="taxbill_modify04" class="btn btn-success taxbill_modify">보관</button>
                     <button type="button" id="taxbill_modify05" class="btn btn-warning taxbill_modify">운송</button>       
                    </div> 
                  </div>
                </div>
               </div>              
             </form>
             <div class="col-md-12">
                <div class="table-responsive">     
                   <table class="table table-bordered table-hover table-condensed">
                      <thead>
                        <tr class="danger">
                         <th>코드</th>
                         <th>과목</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="success">
                          <td>01</td>
                          <td></td>
                        </tr>
                        <tr class="warning">
                          <td>02</td>
                          <td></td>
                        </tr>
                        <tr class="danger">
                          <td>03</td>
                          <td></td>
                        </tr>
                        <tr class="info">
                          <td>04</td>
                          <td></td>
                        </tr>
                        <tr class="danger">
                          <td>05</td>
                          <td></td>
                        </tr>
                        <tr class="info">
                          <td>06</td>
                          <td></td>
                        </tr>
                        <tr class="danger">
                          <td>07</td>
                          <td></td>
                        </tr>                       
                      </tbody>
                    </table>
                   </div>
             </div>
           </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="vertical-alignment-helper">
        <div class="modal-dialog vertical-align-center">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>

                    </button>
                     <h4 class="modal-title" id="myModalLabel">Modal title</h4>

                </div>
                <div class="modal-body">
                    <form role="form">
                        <div class="form-group">
                            <label for="recipient-name" class="control-label">Email:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="control-label">Message:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="myModal-2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="vertical-alignment-helper">
        <div class="modal-dialog vertical-align-center">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span>

                    </button>
                     <h4 class="modal-title" id="myModalLabel">Modal title</h4>

                </div>
                <div class="modal-body">
                    <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>코드</th>
        <th>회사명</th>
        <th>사용여부</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>1001</td>
        <td>(주)kimrim</td>
        <td>사용</td>
      </tr>
      <tr class="warning">
        <td>1002</td>
        <td>박후영</td>
        <td>미사용</td>
      </tr>
      <tr class="danger">
        <td>1003</td>
        <td>김배현</td>
        <td>사용</td>
      </tr>
    </tbody>
  </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

