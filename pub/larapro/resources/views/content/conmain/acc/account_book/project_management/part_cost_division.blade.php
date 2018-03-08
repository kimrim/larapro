@include('content.conbutton.acc.account_book.project_management.project_account_ledger')
@include('content.conbreadcrumb.acc.account_book.project_management.part_cost_division')
<form class="form-inline well well-sm mar_tm18" style="margin-bottom: 2px;">
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
              <option>0500번대</option>
              <option>0600번대</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>        
        </form>
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading">                                             
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="acc106" role="tab" data-toggle="tab">도급현장</a></li>  
              <li role="presentation"><a href="#tab2" class="acc106" role="tab" data-toggle="tab">분양현장</a></li>
              <li role="presentation"><a href="#tab3" class="acc106" role="tab" data-toggle="tab">프로젝트</a></li> 
              <li role="presentation"><a href="#tab4" class="acc106" role="tab" data-toggle="tab">부서</a></li>     
            </ul>
          </div>
          <div class="panel-body">
            <div class="row">
             <div class="col-md-9"> 
              <div class="tab-content">
                <div class="tab-pane active" id="tab1"> 
                  <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
                    <thead>
                      <tr class="success">
                        <th class="" rowspan=2>계정과목</th>
                        <th class="" rowspan=2>합계</th>
                        <th class="" rowspan=2>차액</th>  
                        <th class="">00101</th>
                        <th class="">00102</th>
                        <th class="">00103</th>      
                      </tr>
                      <tr class="success">
                        <th class="">A현장</th>
                        <th class="">B현장</th>
                        <th class="">C현장</th>      
                      </tr> 
                    </thead>                              
                  </table>             
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab2">
                  <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
                    <thead>
                      <tr class="success">
                        <th class="" rowspan=2>계정과목</th>
                        <th class="" rowspan=2>합계</th>
                        <th class="" rowspan=2>차액</th>  
                        <th class="">00101</th>
                        <th class="">00102</th>
                        <th class="">00103</th>      
                      </tr>
                      <tr class="success">
                        <th class="">A현장</th>
                        <th class="">B현장</th>
                        <th class="">C현장</th>       
                      </tr> 
                    </thead>                              
                  </table>
              </div><!-- end tab-pane 2 --> 
              <div class="tab-pane" id="tab3">
                  <table id="tab3_table" class="display nowrap" cellspacing="0" width="100%">
                    <thead>
                      <tr class="success">
                        <th class="" rowspan=2>계정과목</th>
                        <th class="" rowspan=2>합계</th>
                        <th class="" rowspan=2>차액</th>  
                        <th class="">00101</th>
                        <th class="">00102</th>
                        <th class="">00103</th>      
                      </tr>
                      <tr class="success">
                        <th class="">A프로젝트</th>
                        <th class="">B프로젝트</th>
                        <th class="">C프로젝트</th>      
                      </tr> 
                    </thead>                              
                  </table>
              </div> <!-- end tab-pane 3 --> 
              <div class="tab-pane" id="tab4">
                  <table id="tab4_table" class="display nowrap" cellspacing="0" width="100%">
                    <thead>
                      <tr class="success">
                        <th class="" rowspan=2>계정과목</th>
                        <th class="" rowspan=2>합계</th>
                        <th class="" rowspan=2>차액</th>  
                        <th class="">00101</th>
                        <th class="">00102</th>
                        <th class="">00103</th>      
                      </tr>
                      <tr class="success">
                        <th class="">A부서</th>
                        <th class="">B부서</th>
                        <th class="">C부서</th>       
                      </tr> 
                    </thead>                              
                  </table>
                </div> <!-- end tab-pane 4 -->
               </div> <!-- end tab-content --> 
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
              </div> <!-- end row --> 
            </div> <!-- end panel-body --> 
         </div> <!-- end panel with-nav-tabs panel-default --> 

              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           
