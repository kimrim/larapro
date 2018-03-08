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

<!-- dialog_prorate -->
<div id="dialog_prorate" class="lookup_popup" style="display:none; padding: 7px;"> 
  <p style="font-size: 12px;">여기에 온것을 환영합니다. 동의하십니까?</p>
  <div class="row">
             <div class="col-md-12">
              <form class="form-horizontal" id="">
                <div class="form-group">
                  <label class="control-label col-md-4">1.직접비를 포함해서 안분</label>
                  <div class="col-md-8">
                    <div class="input-group">                           
                      <span class="input-group-addon">2</span>   
                      <input type="text" class="form-control" style="z-index: 0;"> 
                      <span class="input-group-addon">(1.포함/ 2.미포함)</span>
                    </div>
                  </div>
                </div> 
                <div class="form-group">
                  <label class="control-label col-md-4">2.안분기준의 선택</label>
                  <div class="col-md-4">
                    <div class="input-group">                           
                      <span class="input-group-addon">1</span>   
                      <input type="text" class="form-control" style="z-index: 0;"> 
                    </div>
                  </div>
                </div> 
                <div class="form-group">
                  <label class="control-label col-md-4"></label>
                  <div class="col-md-4">
                      <input type="text" class="form-control" value="(1.간편/2.비율/3.직접비)"> 
                  </div>
                </div>            
             </form>
             </div>
             <div class="col-md-12">
                <div class="table-responsive">     
                   <table class="table table-bordered table-hover table-condensed">
                      <thead>
                        <tr class="danger">
                         <th>공통경비안분</th>
                         <th>안분식</th>
                         <th>선택</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="success">
                          <td>공사수입금</td>
                          <td>현장별/총공사수입금액</td>
                          <td>1.여</td>
                        </tr>
                        <tr class="warning">
                          <td>원재료비</td>
                          <td>현장별/총원재료비</td>
                          <td>1.여</td>
                        </tr>
                        <tr class="danger">
                          <td>부재료비</td>
                          <td>현장별/총부재료비</td>
                          <td>1.여</td>
                        </tr>
                        <tr class="info">
                          <td>노무비</td>
                          <td>현장별/총노무비</td>
                          <td>1.여</td>
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

