@include('content.conbutton.acc.tradeInsert.otherTradeOne.bankTrade')
@include('content.conbreadcrumb.acc.tradeInsert.taxbill.handling')
<form class="form-inline well well-sm mar_tm18">
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
              <li role="presentation" class="active"><a href="#tab1" class="acc109" role="tab" data-toggle="tab">수정</a></li>  
              <li role="presentation"><a href="#tab2" class="acc109" role="tab" data-toggle="tab">미수정</a></li>       
            </ul>
        </div>
        <div class="panel-body">
         <div class="tab-content">
          <div class="tab-pane active" id="tab1"> <!-- fade in --> 
          <div class="row">     
          <div class="col-md-3 col-md-push-9">
            <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 국민은행 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-file"></span> 금융감독원 <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 김영식 변호사 <span class="badge">50</span>
                  </a>
             </div>
          </div>
          <div class="col-md-9 col-md-pull-3">
            <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="success">
                  <th class="width-8">No</th>
                  <th class="">처리일자</th>
                  <th class="">공급가액</th>
                  <th class="">부가세</th>
                  <th class="">합계</th>
                  <th class="">상호</th>
                  <th class="">과세</th>
                  <th class="">전자</th>
                  <th class="">건별</th>             
                </tr>
              </thead>
           </table>
          </div> <!-- end col-md-9 -->           
          <div class="col-md-12">
            <div class="nav navbar-nav">
              <div class="btn-group btn-group-xs" style="margin-top: 7px;">
                <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">수정</button>
              </div>
            </div>
          </div>
         </div> <!-- end row -->
        </div> <!-- end tab-pane -->
        <div class="tab-pane" id="tab2"> 
          <div class="row">        
          <div class="col-md-3 col-md-push-9">
            <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <span class="glyphicon glyphicon-camera"></span> 신한은행 <span class="badge">25</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-file"></span> 국세청 <span class="badge">145</span>
                  </a>
                  <a href="#" class="list-group-item">
                    <span class="glyphicon glyphicon-music"></span> 김영식 회계사 <span class="badge">50</span>
                  </a>
             </div>
          </div>
          <div class="col-md-9 col-md-pull-3">
            <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
	      <thead>
                <tr class="success">
                  <th class="">No</th>
                  <th class="">처리일자</th>
                  <th class="">공급가액</th>
                  <th class="">부가세</th>
                  <th class="">합계</th>
                  <th class="">상호</th>
                  <th class="">과세</th>
                  <th class="">전자</th>
                  <th class="">건별</th>             
                </tr>
              </thead>
           </table>
            </div> <!-- end col-md-9 -->
            </div> <!-- end row -->          
            <div class="btn-toolbar" role="toolbar" aria-label="..." style="margin-top: 7px;">
              <div class="btn-group btn-group-xs" role="" aria-label="...">
                <button type="button" class="btn btn-default">수정사유</button>
              </div>
                    <div class="btn-group btn-group-xs btn-toolbar" role="group" aria-label="...">
                      <button type="button" class="btn btn-primary toolbar_dialog" id="finalStock_1_500">기재사항착오정정(F7)</button>
                      <button type="button" class="btn btn-info toolbar_dialog" id="depreciation_1_800">공급가액변동(F7)</button>
                      <button type="button" class="btn btn-default toolbar_dialog" id="badDebt_1_500">계약의해제(F7)</button>
                      <button type="button" class="btn btn-success toolbar_dialog" id="retireSalary_1_500">착오에의한이중발급(F7)</button>
                      <button type="button" class="btn btn-warning toolbar_dialog" id="reversal_1_500">환입(F7)</button>
                      <button type="button" class="btn btn-danger toolbar_dialog" id="modify_1_500">내국신용장사후개설(F7)</button>         
                    </div> 
            </div>         
        </div>  <!-- end tab-pane tax2 -->        
      </div> <!-- end tab-content -->  
     </div> <!-- end panel-body --> 
   </div> <!-- end panel with-nav-tabs panel-default -->
              
