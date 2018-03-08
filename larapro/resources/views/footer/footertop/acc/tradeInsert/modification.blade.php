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

<div id="dialog_finalStock" title="" style="display: none;">
  <p class="validateTips">All form fields are required.</p>
  <form>
   <div class="col-md-12 well well-sm">
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">작성일자</label>
        <input type="text" class="form-control input-sm datepicker" id="exampleInputEmail1" placeholder="작성일자" readonly="readonly"> 
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputPassword1">공급가액</label>
        <input type="input" class="form-control" id="exampleInputPassword1" placeholder="공급가액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">세액</label>
        <input type="input" class="form-control" id="exampleInputEmail2" placeholder="세액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">수정사유</label>
        <input type="input" class="form-control" id="tt4" value="" placeholder="기재사항착오정정" readonly="readonly">
      </div>
    </div>
   </div>
  </form>
  <table class="table table-bordered table-hover table-condensed" id="">
              <thead>
                <tr class="success">
                  <th class="">월</th>
                  <th class="">일</th>
                  <th class="">품목명</th>
                  <th class="">규격</th>
                  <th class="">수량</th>
                  <th class="">단가</th>
                  <th class="">공급가액</th>
                  <th class="">세액</th> 
                  <th class="">비고</th>             
                </tr>
              </thead>
              <tbody>
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>          
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>            
                </tr> 
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>              
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>             
                </tr>          
              </tbody>
            </table>
  <form>
    <div class="col-md-9 well well-sm">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">합계금액</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="합계금액">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">현금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="현금">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">수표</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="수표">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">어음</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="어음">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">외상매출금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="외상매출금">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 well well-sm">
      <div class="row" style="padding-top: 17px;">
        <div class="col-md-5">
            <span>이 금액을</span>
        </div>
        <div class="col-md-5" style="margin-top: -32px;">   
          <div class="radio">
            <label>
              <input type="radio" value="option1"> 영수
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" value="option2" checked> 청구
            </label>
           </div>
         </div>
         <div class="col-md-2">
           <span>함</span>
         </div>
      </div>    
   </div>
  </form>
</div>


<div id="dialog_depreciation" title="" style="display: none;">
  <p class="validateTips">All form fields are required.</p>
  
  <table class="table table-bordered table-hover table-condensed">            
              <tbody>
                <tr>
                  <td class="success" rowspan=8 style="vertical-align: middle;">공<br>급<br>자</td>
                  <td class="warning">등록번호</td>
                  <td colspan=3><input type="text" class="form-control"></td>
                  <td class="success" rowspan=8 style="vertical-align: middle;">공<br>급<br>받<br>는<br>자</td>
                  <td class="warning">등록번호</td>
                  <td colspan=3><input type="text" class="form-control"></td>        
                </tr>
                <tr class="warning">
                  <td>상호</td>
                  <td><input type="text" class="form-control"></td>
                  <td>성명</td>
                  <td><input type="text" class="form-control"></td>
                  <td>상호</td>
                  <td><input type="text" class="form-control"></td>
                  <td>성명</td>
                  <td><input type="text" class="form-control"></td>           
                </tr> 
                <tr class="warning">
                  <td>사업장주소</td>
                  <td colspan=3><input type="text" class="form-control"></td>
                  <td>사업장주소</td>
                  <td colspan=3><input type="text" class="form-control"></td>            
                </tr>
                <tr class="warning">
                  <td>업태</td>
                  <td colspan="3">
                      <table class="table table-hover" style="margin-top: -1px;margin-bottom: 0;">
                          <tr>
                              <td style="border-right: 1px solid #ddd;"><input type="text" class="form-control"></td>
                              <td><input type="text" class="form-control" value="종사업장번호" readonly="readonly" style="text-align: center;"></td>
                          </tr>                  
                      </table>
                 </td>
                  <td>업태</td>
                  <td colspan="3">
                      <table class="table table-hover" style="margin-top: -1px;margin-bottom: 0;">
                          <tr>
                              <td style="border-right: 1px solid #ddd;"><input type="text" class="form-control"></td>
                              <td><input type="text" class="form-control" value="종사업장번호" readonly="readonly" style="text-align: center;"></td>
                          </tr>                  
                      </table> 
                 </td>       
                </tr>
                <tr class="warning">
                  <td>종목</td>
                  <td colspan=3>
                      <table class="table table-hover" style="margin-top: -1px;margin-bottom: 0;">
                          <tr>
                              <td style="border-right: 1px solid #ddd;"><input type="text" class="form-control"></td>
                              <td><input type="text" class="form-control"></td>
                          </tr>                  
                      </table>
                 </td>
                  <td>종목</td>
                  <td colspan=3>
                      <table class="table table-hover" style="margin-top: -1px;margin-bottom: 0;">
                          <tr>
                              <td style="border-right: 1px solid #ddd;"><input type="text" class="form-control"></td>
                              <td><input type="text" class="form-control"></td>
                          </tr>                  
                      </table> 
                 </td>       
                </tr>
                <tr class="warning">
                  <td>부서명</td>
                  <td><input type="text" class="form-control"></td>
                  <td>담당자</td>
                  <td><input type="text" class="form-control"></td>
                  <td>부서명</td>
                  <td><input type="text" class="form-control"></td>
                  <td>담당자</td>
                  <td><input type="text" class="form-control"></td>          
                </tr>
                <tr class="warning">
                  <td>연락처</td>
                  <td><input type="text" class="form-control"></td>
                  <td>휴대폰</td>
                  <td><input type="text" class="form-control"></td>
                  <td>연락처</td>
                  <td><input type="text" class="form-control"></td>
                  <td>휴대폰</td>
                  <td><input type="text" class="form-control"></td>          
                </tr> 
                <tr class="warning">
                  <td>E-Mail</td>
                  <td colspan=3><input type="text" class="form-control"></td>
                  <td>E-Mail</td>
                  <td colspan=3><input type="text" class="form-control"></td>            
                </tr>          
              </tbody>
            </table>
      <form>
   <div class="col-md-12 well well-sm">
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">작성일자</label>
        <input type="text" class="form-control input-sm datepicker" id="exampleInputEmail1" placeholder="작성일자" readonly="readonly"> 
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputPassword1">공급가액</label>
        <input type="input" class="form-control" id="exampleInputPassword1" placeholder="공급가액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">세액</label>
        <input type="input" class="form-control" id="exampleInputEmail2" placeholder="세액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">수정사유</label>
        <input type="input" class="form-control" id="tt4" value="" placeholder="계약의해제" readonly="readonly">
      </div>
    </div>
   </div>
  </form>
</div>

<div id="dialog_badDebt" title="" style="display: none;">
  <p class="validateTips">All form fields are required.</p>
  <form>
   <div class="col-md-12 well well-sm">
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">작성일자</label>
        <input type="text" class="form-control input-sm datepicker" id="exampleInputEmail1" placeholder="작성일자" readonly="readonly"> 
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputPassword1">공급가액</label>
        <input type="input" class="form-control" id="exampleInputPassword1" placeholder="공급가액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">세액</label>
        <input type="input" class="form-control" id="exampleInputEmail2" placeholder="세액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">수정사유</label>
        <input type="input" class="form-control" id="tt4" value="" placeholder="계약의해제" readonly="readonly">
      </div>
    </div>
   </div>
  </form>
  <table class="table table-bordered table-hover table-condensed" id="">
              <thead>
                <tr class="success">
                  <th class="">월</th>
                  <th class="">일</th>
                  <th class="">품목명</th>
                  <th class="">규격</th>
                  <th class="">수량</th>
                  <th class="">단가</th>
                  <th class="">공급가액</th>
                  <th class="">세액</th> 
                  <th class="">비고</th>             
                </tr>
              </thead>
              <tbody>
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>          
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>            
                </tr> 
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>              
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>             
                </tr>          
              </tbody>
            </table>
  <form>
    <div class="col-md-9 well well-sm">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">합계금액</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="합계금액">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">현금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="현금">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">수표</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="수표">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">어음</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="어음">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">외상매출금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="외상매출금">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 well well-sm">
      <div class="row" style="padding-top: 17px;">
        <div class="col-md-5">
            <span>이 금액을</span>
        </div>
        <div class="col-md-5" style="margin-top: -32px;">   
          <div class="radio">
            <label>
              <input type="radio" value="option1"> 영수
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" value="option2" checked> 청구
            </label>
           </div>
         </div>
         <div class="col-md-2">
           <span>함</span>
         </div>
      </div>    
   </div>
  </form>
</div>

<div id="dialog_retireSalary" title="" style="display: none;">우리 시스템에서는 발생할 수 없습니다!</div>

<div id="dialog_reversal" title="" style="display: none;">
  <p class="validateTips">All form fields are required.</p>
  <form>
   <div class="col-md-12 well well-sm">
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">작성일자</label>
        <input type="text" class="form-control input-sm datepicker" id="exampleInputEmail1" placeholder="작성일자" readonly="readonly"> 
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputPassword1">공급가액</label>
        <input type="input" class="form-control" id="exampleInputPassword1" placeholder="공급가액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">세액</label>
        <input type="input" class="form-control" id="exampleInputEmail2" placeholder="세액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">수정사유</label>
        <input type="input" class="form-control" id="tt4" value="" placeholder="계약의해제" readonly="readonly">
      </div>
    </div>
   </div>
  </form>
  <table class="table table-bordered table-hover table-condensed" id="">
              <thead>
                <tr class="success">
                  <th class="">월</th>
                  <th class="">일</th>
                  <th class="">품목명</th>
                  <th class="">규격</th>
                  <th class="">수량</th>
                  <th class="">단가</th>
                  <th class="">공급가액</th>
                  <th class="">세액</th> 
                  <th class="">비고</th>             
                </tr>
              </thead>
              <tbody>
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>          
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>            
                </tr> 
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>              
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>             
                </tr>          
              </tbody>
            </table>
  <form>
    <div class="col-md-9 well well-sm">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">합계금액</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="합계금액">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">현금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="현금">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">수표</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="수표">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">어음</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="어음">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">외상매출금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="외상매출금">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 well well-sm">
      <div class="row" style="padding-top: 17px;">
        <div class="col-md-5">
            <span>이 금액을</span>
        </div>
        <div class="col-md-5" style="margin-top: -32px;">   
          <div class="radio">
            <label>
              <input type="radio" value="option1"> 영수
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" value="option2" checked> 청구
            </label>
           </div>
         </div>
         <div class="col-md-2">
           <span>함</span>
         </div>
      </div>    
   </div>
  </form>
</div>

<div id="dialog_modify" title="" style="display: none;">
  <p class="validateTips">All form fields are required.</p>
  <form>
   <div class="col-md-12 well well-sm">
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">작성일자</label>
        <input type="text" class="form-control input-sm datepicker" id="exampleInputEmail1" placeholder="작성일자" readonly="readonly"> 
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputPassword1">공급가액</label>
        <input type="input" class="form-control" id="exampleInputPassword1" placeholder="공급가액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">세액</label>
        <input type="input" class="form-control" id="exampleInputEmail2" placeholder="세액" readonly="readonly">
      </div>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="exampleInputEmail1">수정사유</label>
        <input type="input" class="form-control" id="tt4" value="" placeholder="계약의해제" readonly="readonly">
      </div>
    </div>
   </div>
  </form>
  <table class="table table-bordered table-hover table-condensed" id="">
              <thead>
                <tr class="success">
                  <th class="">월</th>
                  <th class="">일</th>
                  <th class="">품목명</th>
                  <th class="">규격</th>
                  <th class="">수량</th>
                  <th class="">단가</th>
                  <th class="">공급가액</th>
                  <th class="">세액</th> 
                  <th class="">비고</th>             
                </tr>
              </thead>
              <tbody>
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>          
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>            
                </tr> 
                <tr class="success">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>              
                </tr>
                <tr class="warning">
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td>
                  <td><input type="text" class="form-control"></td> 
                  <td><input type="text" class="form-control"></td>             
                </tr>          
              </tbody>
            </table>
  <form>
    <div class="col-md-9 well well-sm">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">합계금액</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="합계금액">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">현금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="현금">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">수표</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="수표">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">어음</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="어음">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">외상매출금</label>
            <input type="input" class="form-control" id="exampleInputEmail1" placeholder="외상매출금">
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 well well-sm">
      <div class="row" style="padding-top: 17px;">
        <div class="col-md-5">
            <span>이 금액을</span>
        </div>
        <div class="col-md-5" style="margin-top: -32px;">   
          <div class="radio">
            <label>
              <input type="radio" value="option1"> 영수
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" value="option2" checked> 청구
            </label>
           </div>
         </div>
         <div class="col-md-2">
           <span>함</span>
         </div>
      </div>    
   </div>
  </form>
</div>
 

