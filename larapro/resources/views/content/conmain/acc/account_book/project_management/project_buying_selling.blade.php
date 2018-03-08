@include('content.conbutton.acc.account_book.project_management.project_account_ledger')
@include('content.conbreadcrumb.acc.account_book.project_management.project_buying_selling')
<form class="form-inline well well-sm mar_tm18" style="margin-bottom: 2px;">
          <div class="form-group">
            <label for="from">조회&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div> <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">프로젝트</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop project next210 n" readonly="readonly">
            </div>
          </div> 
          <div class="form-group">
            <label for="from">~</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop project next230s n" readonly="readonly">
            </div>
          </div> <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;구분:</label>
            <select class="form-control">
              <option>1.전체</option>
              <option>2.매입</option>
              <option>3.매출</option>
            </select>
          </div>        
        </form>
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                           
            <ul class="nav nav-tabs" id="ajaxtab" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="acc118" role="tab" data-toggle="tab">1.월별집계</a></li>  
              <li role="presentation"><a href="#tab2" class="acc107" role="tab" data-toggle="tab">2.전체집계</a></li>
              <li role="presentation"><a href="#tab3" class="acc108" role="tab" data-toggle="tab">3.내용</a></li>    
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">
            <div class="tab-pane active" id="tab1"> 
               <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
		   <thead>
                      <tr class="success">
                        <th class="" rowspan=2>코드</th>
                        <th class="" rowspan=2>프로젝트명</th>
                        <th class="" rowspan=2>구분</th>  
                        <th class="" colspan=3>합계</th>
                        <th class="" colspan=3>2월</th>
                        <th class="" colspan=3>3월</th>
                        <th class="" colspan=3>4월</th>
                        <th class="" colspan=3>...</th>      
                      </tr>
                      <tr class="success">
                        <th class="">건수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">건수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">건수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">건수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">건수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>      
                      </tr> 
                    </thead>
                  </table>
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab2">
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
                    <thead>
                      <tr class="danger">
                        <th>코드</th>
                        <th>거래처명</th>
                        <th>사업자등록번호</th>  
                        <th>구분</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>합계</th>     
                      </tr> 
                    </thead>                             
                  </table> 
              </div><!-- end tab-pane 2 --> 
              <div class="tab-pane" id="tab3">
                  <table id="tab3_table" class="display nowrap" cellspacing="0" width="100%">
                  <thead>
                      <tr class="danger">
                        <th>코드</th>
                        <th>거래처명</th>
                        <th>사업자등록번호</th>  
                        <th>구분</th>
                        <th>일자</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>합계</th>     
                      </tr> 
                    </thead>                             
                  </table> 
              </div><!-- end tab-pane 3 --> 
             </div> <!-- end tab-content --> 
           </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default --> 
           
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
