@include('content.conbutton.acc.account_book.book_management.buying_selling')
@include('content.conbreadcrumb.acc.account_book.book_management.journal')
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
          </div> <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">부서:</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop bu next210 n" placeholder="부서" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop bu next210 n" placeholder="부서" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;사원:</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop sa next210 n" placeholder="부서" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop sa next210 n" placeholder="부서" readonly="readonly">
            </div>
          </div>     
        </form> 
        <div id="buttons" style="background:wheat; margin-top: 3px; margin-bottom: 7px;"></div> 
           <table id="example" class="display nowrap" cellspacing="0" width="100%">
                  <thead>
                      <tr class="danger">
                        <th rowspan=2>No</th>  
                        <th rowspan=2>일자</th>
                        <th rowspan=2>번호</th>  
                        <th rowspan=2>구분</th>
                        <th rowspan=2>계정과목</th>
                        <th colspan=2>금액</th>                       
                        <th rowspan=2>적요</th>
                        <th rowspan=2>코드</th>
                        <th rowspan=2>거래처</th>
                      </tr>
                      <tr class="danger">
                        <th>차변</th>  
                        <th>대변</th>  
                      </tr>
                    </thead>                              
                  </table>                       
             <div class="row">
           <div class="col-md-12">
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs" style="margin-top: 7px;">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           </div>
           </div> <!-- end row -->       
           
