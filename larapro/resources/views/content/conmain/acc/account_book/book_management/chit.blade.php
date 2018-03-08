@include('content.conbutton.acc.account_book.book_management.buying_selling')
@include('content.conbreadcrumb.acc.account_book.book_management.buying_selling')
<form class="form-inline well well-sm mar_tm18">
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;구분:</label>
            <select class="form-control">
              <option>1.전체</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
         <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;유형:</label>
            <select class="form-control">
              <option>1.전체</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>  <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">계정과목</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop account next210 n" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop account next210 n" readonly="readonly">
            </div>
          </div>
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;부서/사원</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop busa next210 n" placeholder="부서사원" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop busa next230 n" readonly="readonly">
            </div>
          </div>  <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">현장코드:</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop hh next210 n" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop hh next210 n" readonly="readonly">
            </div>
          </div>
          <div class="form-group">
            <label for="from">전표번호:</label>
            <input type="text" class="form-control z_i0" readonly="readonly">
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <input type="text" class="form-control z_i0" readonly="readonly">
          </div> 
          <div class="form-group">
            <label class="checkbox-inline" style="margin-top: -6px;"><input type="checkbox" id="inlineCheckbox1" value="option1" checked style="margin-top: -2px;">동일한 전표번호 불러오기(차/대변)</label>
          </div> 
        </form>
         <table id="example" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="danger">
		    <th></th>
                    <th>일자</th>
		    <th>번호</th>
		    <th>구분</th>
		    <th>코드</th>
		    <th>계정과목</th>
                    <th>코드</th>
		    <th>거래처</th>
		    <th>차변</th>  
                    <th>대변</th>
		    <th>잔액</th>  
                </tr> 
               </thead>
              </table>                                  
             <div class="row">
           <div class="col-md-12">
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs" style="margin-top: 5px;">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           </div>
           </div> <!-- end row -->       
           
