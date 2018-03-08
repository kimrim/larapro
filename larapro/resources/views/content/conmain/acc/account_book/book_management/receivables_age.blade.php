@include('content.conbutton.acc.account_book.book_management.buying_selling')
@include('content.conbreadcrumb.acc.account_book.book_management.buying_selling')
 <form class="form-inline well well-sm mar_tm18">
          <div class="form-group">
            <label for="from">일 &nbsp;&nbsp;자</label>
            <input type="text" class="form-control datepicker" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label class="checkbox-inline" style="margin-top: -6px;"><input type="checkbox" id="inlineCheckbox1" value="option1" checked style="margin-top: -2px;">월단위 조회</label>
          </div>
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;구간:</label>
            <select class="form-control">
              <option>1.기준일로부터 1개월단위</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label class="checkbox-inline" style="margin-top: -6px;"><input type="checkbox" id="inlineCheckbox2" value="option1" checked style="margin-top: -2px;">현재 기수 데이타</label>
          </div> <br /> <div class="mar_t5"></div>
         <div class="form-group">
            <select class="form-control">
              <option>1.계정별거래처</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="from"></label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop account next210 n" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop account next230 n" readonly="readonly">
            </div>
          </div> <br /> <div class="mar_t5"></div> 
          <div class="form-group">
            <label for="from">거래처</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop client next210 n" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop client next210 n" readonly="readonly">
            </div>
          </div>     
        </form>
           <table id="example" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">코드</th>  
                        <th class="">거래처</th>
                        <th class="">채권잔액</th>
                        <th class="">당월</th>                       
                        <th class="">2월 이내</th>
                        <th class="">3월 이내</th> 
                        <th class="">3월 이상</th>  
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
           
