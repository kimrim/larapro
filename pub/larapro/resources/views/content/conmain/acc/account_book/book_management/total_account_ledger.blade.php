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
              <li role="presentation" class="active"><a href="#tab1" class="acc104" role="tab" data-toggle="tab">월별</a></li>  
              <li role="presentation"><a href="#tab2" class="acc104" role="tab" data-toggle="tab">일별</a></li>       
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">
            <div class="tab-pane active" id="tab1">
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
                        <th class="">차변</th>
                        <th class="">대변</th>
                        <th class="">잔액</th>      
                      </tr> 
                    </thead>
                  </table> 
                </div> <!-- end col-md-9 -->              
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab2">
                 <div class="col-md-3">
                  <table id="example_91" class="display nowrap" cellspacing="0" width="100%">
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
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class="">일자</th>
                        <th class="">차변</th>
                        <th class="">대변</th>
                        <th class="">잔액</th>      
                      </tr> 
                    </thead>
                  </table>
                </div> <!-- end col-md-9 -->              
             </div><!-- end tab-pane 2 --> 
            </div> <!-- end tab-content --> 
           </div> <!-- end panel-body --> 
        </div> <!-- end panel with-nav-tabs panel-default --> 

              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
