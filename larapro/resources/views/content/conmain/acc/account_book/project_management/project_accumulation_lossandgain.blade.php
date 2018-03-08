@include('content.conbutton.acc.account_book.project_management.project_account_ledger')
@include('content.conbreadcrumb.acc.account_book.project_management.project_accumulation_lossandgain')
<form class="form-inline well well-sm mar_tm18" style="margin-bottom: 2px;">
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;구분:</label>
            <select class="form-control">
              <option>0.전체</option>
              <option>1.진행</option>
              <option>2.완료</option>
              <option>3.보류</option>
            </select>
          </div> 
          <div class="form-group">
            <label for="from">기 &nbsp;&nbsp; &nbsp;&nbsp;간</label>
            <input type="text" class="form-control" id="from" placeholder="2016-01-01" readonly="readonly">
          </div>
          <div class="form-group">
            <label for="to">~</label>
            <input type="text" class="form-control" id="to" placeholder="2016-12-31" readonly="readonly">
          </div>  <br /> <div class="mar_t5"></div> 
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
               <input type="text" class="form-control pop project next230 n" readonly="readonly">
            </div>
          </div>        
        </form>
               <div class="col-md-3">
                  <table id="example_90" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class="">No</th>
                        <th class="">코드</th>
                        <th class="">프로젝트명</th>      
                      </tr> 
                    </thead>
                  </table>
               </div> <!-- end col-md-3 --> 
               <div class="col-md-9"> 
                 <table id="example" class="display nowrap" cellspacing="0" width="100%">
		   <thead>
                      <tr class="danger">
                        <th class="">과목</th>
                        <th class="">당기누적액</th>
                        <th class="">전기누적액</th>  
                        <th class="">당기발생액</th>
                        <th class="">증감율(%)</th>
                        <th class="">1월</th> 
                        <th class="">2월</th>
                        <th class="">3월</th>
                        <th class="">4월</th>  
                        <th class="">5월</th>
                        <th class="">6월</th>
                        <th class="">7월</th>
                        <th class="">8월</th>
                        <th class="">9월</th>
                        <th class="">10월</th>  
                        <th class="">11월</th>
                        <th class="">12월</th>      
                      </tr> 
                    </thead>
                  </table>
               </div> <!-- end col-md-9 -->              
             
             <div class="row">
           <div class="col-md-12">
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs" style="margin-top: 7px;">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
           </div>       
         </div><!-- end row -->
                    
