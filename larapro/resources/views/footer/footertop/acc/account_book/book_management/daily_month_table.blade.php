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

<!-- dialog_ledgerLookup -->
<div id="dialog_ledgerLookup" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">아무 것도 하지 않을 것입니다. 동의하십니까?</p>
  <form class="form-inline well well-sm">
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from2" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to2" placeholder="2016-12-31" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;계정과목</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control open-dialog" id="account121" readonly="readonly">
            </div>
          </div>     
        </form> 
  <table id="" class="display nowrap" cellspacing="0" width="100%">
    <thead>
                        <tr class="danger">
                         <th>일자</th>
                         <th>번호</th>
                         <th>적요</th>
                         <th>코드</th>
                         <th>거래처</th>
                         <th>차변</th>
                         <th>대변</th>
                         <th>잔액</th>
                        </tr>
                      </thead>
    <tbody>
      
    </tbody>
  </table>
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

