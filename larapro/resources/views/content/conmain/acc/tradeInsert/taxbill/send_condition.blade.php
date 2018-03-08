@include('content.conbutton.acc.tradeInsert.otherTradeOne.bankTrade')
@include('content.conbreadcrumb.acc.tradeInsert.taxbill.handling')
<form class="form-inline well well-sm mar_tm18"  style="margin-bottom: 5px;">
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="exampleInputName">구분</label>
            <select class="form-control foc a next110s">
              <option>매출</option>
              <option>매입</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputName2"></label>
            <select class="form-control foc a next110">
              <option>과세</option>
              <option>면세</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" class="form-control input-sm foc next110s" placeholder="종이">
          </div>
          <div class="form-group">
            <label for="exampleInputName3">국세청전송상태</label>
            <select class="form-control foc a next110s">
              <option>확인/발행요청</option>
              <option>확인</option>
              <option>결제</option>
              <option>반려</option>
              <option>취소</option>
              <option>저장</option>
              <option>기발행</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputName4">발행상태</label>
            <select class="form-control foc">
              <option>미전송</option>
              <option>전송중</option>
              <option>전송성공</option>
              <option>전송실패</option>
              <option>전송불가</option>
            </select>
          </div>
        </form>
        <div class="well well-sm">        
          <div class="row">         
            <div class="col-md-3">
              <table id="example_90" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="">
                        <th class="">No</th>
                        <th class="">코드</th>
                        <th class="">거래처명</th>      
                      </tr> 
                    </thead>
                  </table>
          </div>
          <div class="col-md-9">
            <table id="example" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr>
                  <th class="">No</th>
                  <th class="">유형</th>
                  <th class="">관리번호</th>
                  <th class="">구분</th>
                  <th class="">관리구분</th>
                  <th class="">상태</th>
                  <th class="">신고상태</th>
                  <th class="">작성일자</th>
                  <th class="">상호</th>
                  <th class="">사업자번호</th>
                  <th class="">공급가액</th>
                  <th class="">세액</th>
                  <th class="">합계</th>               
                </tr>
              </thead>
            </table>
          </div>         
        </div><!-- end row -->
      </div>  
