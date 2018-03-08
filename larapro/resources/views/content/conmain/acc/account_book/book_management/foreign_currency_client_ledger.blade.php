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
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;계정과목</label>
            <div class="input-group">
               <span class="input-group-addon">023</span>
               <input type="text" class="form-control pop account next230 n" readonly="readonly">
            </div>
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
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                            
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="acc110" role="tab" data-toggle="tab">잔액</a></li>  
              <li role="presentation"><a href="#tab2" class="acc109" role="tab" data-toggle="tab">내용</a></li>       
            </ul>
          </div>
          <div class="panel-body">          
           <div class="tab-content">
            <div class="tab-pane active" id="tab1"> 
              <div class="col-md-9">
                 <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="success">
                        <th rowspan=2 class="">코드</th>  
                        <th rowspan=2 class="">거래처</th>
                        <th rowspan=2 class="">등록번호</th>  
                        <th rowspan=2 class="">대표자명</th>
                        <th colspan=2 class="">전기이월</th>
                        <th colspan=2 class="">차변</th>                       
                        <th colspan=2 class="">대변</th>  
                      </tr>
                      <tr class="success">
                        <th class="">외화</th>  
                        <th class="">원화</th>
                        <th class="">외화</th>  
                        <th class="">원화</th>
                        <th class="">외화</th>  
                        <th class="">원화</th>    
                      </tr>
                    </thead>
                  </table>
               </div> <!-- end col-md-9 -->  
               <div class="col-md-3">
                 <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 구글 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-file"></span> 금융감독원 <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 김영식 변호사 <span class="badge">50</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-camera"></span> 삼성전자 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-camera"></span> 아마존 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-file"></span> 페이스북 <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-camera"></span> 카카오 <span class="badge">25</span>
                  </a>
                </div>
               </div> <!-- end col-md-3 -->            
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab2">
                 <div class="col-md-9">
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="success">
                        <th rowspan=2 class="">일자</th>  
                        <th rowspan=2 class="">적요</th>
                        <th rowspan=2 class="">환율</th>  
                        <th colspan=2 class="">차변</th>                       
                        <th colspan=2 class="">대변</th> 
                        <th colspan=2 class="">잔액</th>  
                      </tr>
                      <tr class="success">
                        <th class="">외화</th>  
                        <th class="">원화</th>
                        <th class="">외화</th>  
                        <th class="">원화</th>
                        <th class="">외화</th>  
                        <th class="">원화</th>    
                      </tr
                    </thead>
                  </table> 
               </div> <!-- end col-md-9 -->  
               <div class="col-md-3">
                  <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 대구은행 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-file"></span> 증권감독원 <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 스티븐 호킹 <span class="badge">50</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-camera"></span> 안철수  <span class="badge">25</span>
                  </a>
                </div>
               </div> <!-- end col-md-3 -->             
              </div><!-- end tab-pane 2 --> 
             </div> <!-- end tab-content --> 
            </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default -->   
           
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
