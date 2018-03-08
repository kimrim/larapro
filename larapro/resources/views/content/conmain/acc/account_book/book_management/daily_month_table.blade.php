@include('content.conbutton.acc.account_book.book_management.buying_selling')
@include('content.conbreadcrumb.acc.account_book.book_management.buying_selling')
<form class="form-inline well well-sm mar_tm18" style="margin-bottom: 2px;">
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div>        
        </form>
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                            
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="acc107" role="tab" data-toggle="tab">일계표</a></li>  
              <li role="presentation"><a href="#tab2" class="acc107" role="tab" data-toggle="tab">월계표</a></li>       
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">
            <div class="tab-pane active" id="tab1"> 
               <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
                  <thead>
                      <tr class="danger">
                        <th class="" colspan=3>차변</th>  
                        <th class="" rowspan=2>계정과목</th>
                        <th class="" colspan=3>대변</th>   
                      </tr>
                      <tr class="danger">
                        <th class="">계</th>  
                        <th class="">대체</th>
                        <th class="">현금</th>  
                        <th class="">현금</th>
                        <th class="">대체</th>
                        <th class="">계</th>                         
                      </tr>
                    </thead>                              
                  </table> 
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab2">
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
                  <thead>
                      <tr class="danger">
                        <th class="" colspan=3>차변</th>  
                        <th class="" rowspan=2>계정과목</th>
                        <th class="" colspan=3>대변</th>   
                      </tr>
                      <tr class="danger">
                        <th class="">계</th>  
                        <th class="">대체</th>
                        <th class="">현금</th>  
                        <th class="">현금</th>
                        <th class="">대체</th>
                        <th class="">계</th>                         
                      </tr>
                    </thead>                              
                  </table>
              </div><!-- end tab-pane 2 --> 
             </div> <!-- end tab-content --> 
            </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default --> 

              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>

