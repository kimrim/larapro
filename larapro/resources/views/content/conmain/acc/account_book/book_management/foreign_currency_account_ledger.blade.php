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
          </div> <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;통화코드</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop busa next210 n" placeholder="통화코드" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop busa next210 n" readonly="readonly">
            </div>
          </div> 
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
        </form> 
        <div class="row">
               <div class="col-md-3">
                  <table id="example_90" class="display nowrap" cellspacing="0" width="100%">
                   <thead>
                      <tr class="danger">
                        <th class="">No</th>
                        <th class="">코드</th>
                        <th class="">계정과목</th>      
                      </tr> 
                    </thead> 
                  </table>
               </div> <!-- end col-md-3 --> 
               <div class="col-md-9"> 
                  <table id="example" class="display nowrap" cellspacing="0" width="100%">
                   <thead> 
		      <tr class="danger">
                        <th rowspan=2 class="">일자</th>
                        <th rowspan=2 class="">적요</th>
                        <th rowspan=2 class="">코드</th>  
                        <th rowspan=2 class="">거래처</th>
                        <th rowspan=2 class="">환율</th>
                        <th colspan=2 class="">차변</th>
                        <th colspan=2 class="">대변</th>      
                      </tr> 
                      <tr class="danger">
                        <th class="">외화</th>
                        <th class="">원화</th>
                        <th class="">외화</th>
                        <th class="">원화</th>      
                      </tr> 
                    </thead>  
                  </table>
                </div> <!-- end col-md-9 -->              
            </div> <!-- end row -->
           
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
