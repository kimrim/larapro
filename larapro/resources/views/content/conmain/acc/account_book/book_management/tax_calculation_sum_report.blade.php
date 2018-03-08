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
            <ul class="nav nav-tabs mar_b5" id="ajaxtab" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="acc111" role="tab" data-toggle="tab">매출</a></li>  
              <li role="presentation"><a href="#tab2" class="acc111" role="tab" data-toggle="tab">매입</a></li>
            </ul>
          </div>
          <div class="panel-body">
           <div class="tab-content">           
             <div class="tab-pane active" id="tab1"> 
              <div class="well well-sm">2.매출세금계산서 총합계</div>               
              <div class="table-responsive mar_tm18">
                 <table class="table table-bordered table-hover table-condensed"> 
                    <thead>
                      <tr class="danger">
                        <th class="" colspan=2>구분</th>
                        <th class="">매출처수</th>
                        <th class="">매수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                      </tr>
                    <tbody>
                      <tr class="success">
                        <td colspan=2>합계</td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                      </tr>
                      <tr class="danger">
                        <td rowspan=3>과세기간종료일 다음달<br> 11일까지 전송된 <br>전자세금계산서 발급분</td>
                        <td>사업자번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="success">
                        <td>주민등록번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="danger">
                        <td>소계</td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                      </tr>
                      <tr class="danger">
                        <td rowspan=3>위 전자세금계산서 외의<br> 발급분(종이계산서+과세기간 <br>종료일다음달 12일 이후분)</td>
                        <td>사업자번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="success">
                        <td>주민등록번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="danger">
                        <td>소계</td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                      </tr>
                    </tbody>
                  </table> 
              </div> 
              <div class="panel with-nav-tabs panel-default">
                <div class="panel-heading">                               
                  <ul class="nav nav-tabs" id="" role="tablist">
                    <li role="presentation" class="active"><a href="#tab11" role="tab" data-toggle="tab">전체</a></li>  
                    <li role="presentation"><a href="#tab12" role="tab" data-toggle="tab">전자발행(11일이내)</a></li> 
                    <li role="presentation"><a href="#tab13" role="tab" data-toggle="tab">전자발행(11일이후),종이발행</a></li>       
                  </ul>
                </div>
                <div class="panel-body">
                  <div class="tab-content">
                     <div class="tab-pane active" id="tab11">             
                 <table id="tab1_table" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">사업자등록번호</th>
                        <th class="">코드</th>  
                        <th class="">거래처명</th>
                        <th class="">매수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">대표자성명</th>
                        <th class="">업태</th>
                        <th class="">종목</th>
                        <th class="">주류코드</th>                      
                      </tr>
                    </thead>
                  </table>
              </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab12">
                  <table id="example_12" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">사업자등록번호12</th>
                        <th class="">코드12</th>  
                        <th class="">거래처명</th>
                        <th class="">매수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">대표자성명</th>
                        <th class="">업태</th>
                        <th class="">종목</th>
                        <th class="">주류코드</th>                      
                      </tr>
                    </thead>
                  </table>
              </div><!-- end tab-pane 12 --> 
              <div class="tab-pane" id="tab13">
                  <table id="example_13" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">사업자등록번호13</th>
                        <th class="">코드13</th>  
                        <th class="">거래처명</th>
                        <th class="">매수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">대표자성명</th>
                        <th class="">업태</th>
                        <th class="">종목</th>
                        <th class="">주류코드</th>                      
                      </tr>
                    </thead>
                  </table>
              </div><!-- end tab-pane 13 --> 
             </div> <!-- end tab-content -->    
             </div> <!-- end panel-body --> 
            </div> <!-- end panel with-nav-tabs panel-default -->         
           </div> <!-- end tab-pane -->
           <div class="tab-pane" id="tab2">
              <div class="well well-sm">2.매입세금계산서 총합계</div>               
              <div class="table-responsive mar_tm18">
                 <table class="table table-bordered table-hover table-condensed"> 
                    <thead>
                      <tr class="danger">
                        <th class="" colspan=2>구분</th>
                        <th class="">매입처수</th>
                        <th class="">매수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                      </tr>
                    <tbody>
                      <tr class="success">
                        <td colspan=2>합계</td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                      </tr>
                      <tr class="danger">
                        <td rowspan=3>과세기간종료일 다음달<br> 11일까지 전송된 <br>전자세금계산서 발급분</td>
                        <td>사업자번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="success">
                        <td>주민등록번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="danger">
                        <td>소계</td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                      </tr>
                      <tr class="danger">
                        <td rowspan=3>위 전자세금계산서 외의<br> 발급분(종이계산서+과세기간 <br>종료일다음달 12일 이후분)</td>
                        <td>사업자번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="success">
                        <td>주민등록번호발급분</td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                        <td><input type="text" class="form-control"></td>
                      </tr>
                      <tr class="danger">
                        <td>소계</td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                        <td><input type="text" class="form-control" readonly="readonly"></td>
                      </tr>
                    </tbody>
                  </table> 
              </div>  
              <div class="panel with-nav-tabs panel-default">
                <div class="panel-heading">                             
                  <ul class="nav nav-tabs" id="" role="tablist">
                    <li role="presentation" class="active"><a href="#tab21" role="tab" data-toggle="tab">전체</a></li>  
                    <li role="presentation"><a href="#tab22" role="tab" data-toggle="tab">전자발행(11일이내)</a></li> 
                    <li role="presentation"><a href="#tab23" role="tab" data-toggle="tab">전자발행(11일이후),종이발행</a></li>       
                  </ul>
                </div>
                <div class="panel-body">
                  <div class="tab-content">
                    <div class="tab-pane active" id="tab21">             
                      <table id="tab2_table" class="display nowrap" cellspacing="0" width="100%">
		        <thead>
                          <tr class="danger">
                            <th class=""></th>
                            <th class="">사업자등록번호</th>
                            <th class="">코드</th>  
                            <th class="">거래처명</th>
                            <th class="">매수</th>
                            <th class="">공급가액</th>
                            <th class="">세액</th>
                            <th class="">대표자성명</th>
                            <th class="">업태</th>
                            <th class="">종목</th>
                            <th class="">주류코드</th>                      
                          </tr>
                        </thead>
                      </table>
                   </div> <!-- end tab-pane -->
              <div class="tab-pane" id="tab22">
                  <table id="example_22" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">사업자등록번호22</th>
                        <th class="">코드22</th>  
                        <th class="">거래처명</th>
                        <th class="">매수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">대표자성명</th>
                        <th class="">업태</th>
                        <th class="">종목</th>
                        <th class="">주류코드</th>                      
                      </tr>
                    </thead>
                  </table>
              </div><!-- end tab-pane 21 --> 
              <div class="tab-pane" id="tab23">
                  <table id="example_23" class="display nowrap" cellspacing="0" width="100%">
		    <thead>
                      <tr class="danger">
                        <th class=""></th>
                        <th class="">사업자등록번호23</th>
                        <th class="">코드23</th>  
                        <th class="">거래처명</th>
                        <th class="">매수</th>
                        <th class="">공급가액</th>
                        <th class="">세액</th>
                        <th class="">대표자성명</th>
                        <th class="">업태</th>
                        <th class="">종목</th>
                        <th class="">주류코드</th>                      
                      </tr>
                    </thead>
                  </table>
              </div><!-- end tab-pane 31 --> 
             </div> <!-- end tab-content -->  
             </div> <!-- end panel-body --> 
            </div> <!-- end panel with-nav-tabs panel-default --> 
           </div><!-- end tab-pane 2 --> 
         </div> <!-- end tab-content --> 
        </div> <!-- end panel-body --> 
       </div> <!-- end panel with-nav-tabs panel-default --> 
              <div class="nav navbar-nav">
                <div class="btn-group btn-group-xs" style="margin-top: 7px;">
                  <button type="button" class="btn btn-primary tableinput-toggle" name="tab-tax1">조회</button>
                </div>
              </div>
                  
