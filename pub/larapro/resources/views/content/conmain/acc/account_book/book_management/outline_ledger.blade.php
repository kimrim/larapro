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
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;분개유형:</label>
            <select class="form-control">
              <option>1.전체</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div> <br /> <div class="mar_t5"></div>
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
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                            
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation"><a href="#tab1" class="acc109" role="tab" data-toggle="tab">잔액</a></li>  
              <li role="presentation" class="active" class=""><a href="#tab2" class="acc108" role="tab" data-toggle="tab">내용</a></li>
              <li role="presentation"><a href="#tab3" class="" role="tab" data-toggle="tab">코드별</a></li>      
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">
            <div class="tab-pane" id="tab1"> 
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
                  <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
                   <thead> 
		    <tr class="danger">
                        <th class="">일자</th>
                        <th class="">적요</th>
                        <th class="">코드</th>  
                        <th class="">거래처</th>
                        <th class="">차변</th>
                        <th class="">대변</th>
                        <th class="">잔액</th>
                        <th class="">번호</th>
                        <th class="">....</th>       
                      </tr> 
                    </thead>  
                  </table>
                </div> <!-- end col-md-9 -->              
              </div> <!-- end tab-pane -->
              <div class="tab-pane active" id="tab2">
                 <div class="col-md-3">
                  <table id="example_91" class="display nowrap" cellspacing="0" width="100%">
                   <thead>
                      <tr class="danger">
                        <th class="">No</th>
                        <th class="">코드</th>
                        <th class="">적요명</th>      
                      </tr> 
                    </thead> 
                  </table>
               </div> <!-- end col-md-3 --> 
               <div class="col-md-9"> 
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class="">일자</th>
                        <th class="">번호</th>
                        <th class="">분개유형</th>  
                        <th class="">코드</th>  
                        <th class="">거래처</th>
                        <th class="">차변</th>
                        <th class="">대변</th>
                        <th class="">잔액</th>    
                      </tr> 
                    </thead> 
                  </table>
                </div> <!-- end col-md-9 -->              
              </div><!-- end tab-pane 2 --> 
              <div class="tab-pane" id="tab3">tab 3 </div> <!-- end tab-pane 3 --> 
             </div> <!-- end tab-content --> 
            </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default --> 
           
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
