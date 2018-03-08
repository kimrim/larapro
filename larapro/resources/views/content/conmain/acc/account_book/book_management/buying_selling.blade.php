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
          </div><br /> <div class="mar_t5"></div>
         <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;구분:</label>
            <select class="form-control">
              <option>1.전체</option>
              <option>2.매출</option>
              <option>3.매입</option>
            </select> 
         </div>       
        </form> 
        <div id="buttons" style="background:wheat; margin-top: 3px; margin-bottom: 7px;"></div>       
        <table id="example" class="display nowrap" cellspacing="0" width="100%">
	    <thead>
                      <tr class="danger">
                        <th  class=""><i class="glyphicon glyphicon-heart"></i> 유형</th>  
                        <th class=""><i class="glyphicon glyphicon-star"></i>일자</th>
                        <th class="">품목</th>  
                        <th class="">공급가액</th>
                        <th class="">부가세</th>
                        <th class="">합계</th>                       
                        <th class="">예정신고</th>
                        <th class="">코드</th>
                        <th class="">거래처</th>
                        <th class="">분개유형</th>    
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
           
