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
               <input type="text" class="form-control pop client next230s n" readonly="readonly">
            </div>
          </div> <br /> <div class="mar_t5"></div>
          <div class="form-group">
            <label for="from">구 &nbsp;&nbsp;분:</label>
            <select class="form-control">
              <option>1.전체</option>
              <option>2.매출</option>
              <option>3.매입</option>
            </select>
          </div>       
        </form>
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                          
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" role="tab" data-toggle="tab" class="acc143" role="tab">1.월별집계</a></li>  
              <li role="presentation"><a href="#tab2" role="tab" data-toggle="tab" class="acc107">2.전체집계</a></li> 
              <li role="presentation"><a href="#tab3" role="tab" data-toggle="tab" class="acc108">3.내용</a></li>       
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">
            <div class="tab-pane active" id="tab1"> 
               <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
                  <thead>
                      <tr class="danger">
                        <th rowspan=2>코드</th>
                        <th rowspan=2>거래처명</th>
                        <th rowspan=2>사업자등록번호</th>  
                        <th rowspan=2>구분</th>
                        <th colspan=3>합계</th>
                        <th colspan=3>1월</th> 
                        <th colspan=3>2월</th>
                        <th colspan=3>3월</th>
                        <th colspan=3>4월</th> 
                        <th colspan=3>5월</th>
                        <th colspan=3>6월</th> 
                        <th colspan=3>7월</th> 
                        <th colspan=3>8월</th>
                        <th colspan=3>9월</th>
                        <th colspan=3>10월</th> 
                        <th colspan=3>11월</th>
                        <th colspan=3>12월</th>     
                      </tr> 
                      <tr class="success">
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>  
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th> 
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>
                        <th>건수</th>
                        <th>공급가액</th>
                        <th>세액</th>                                  
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
           
