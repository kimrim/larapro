﻿<ul class="nav nav-tabs mar_tm18" id="myTab" role="tablist">
          <li role="presentation" class="active"><a href="#tab-tax1" role="tab">과세</a></li>  
          <li role="presentation"><a href="#tab-tax2">면세</a></li>
          <li role="presentation"><a href="#tab-card">카드</a></li>
          <li role="presentation"><a href="#tab-cash">현영</a></li>
          <li role="presentation"><a href="#tab-mix">혼합</a></li>
          <li role="presentation"><a href="#tab-rec">회수</a></li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active pad_t5" id="tab-tax1"> 
            <form class="form-horizontal" id="form116">
             <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">              
	@include('content.concen.acc.tradeInsert.trade_insert.revenue.tax')
            </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
             </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
              </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">       
	@include('content.conmid.acc.tradeInsert.trade_insert.revenue.tax')
       </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one') 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row -->             
     </form>
    </div> <!-- end tab-pane -->
        <div class="tab-pane pad_t5" id="tab-tax2"> <!-- fade in class-->
          <form class="form-horizontal" id="form216"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
	@include('content.concen.acc.tradeInsert.trade_insert.revenue.notax')
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
          </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
            </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">        
	@include('content.conmid.acc.tradeInsert.trade_insert.revenue.notax')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one') 
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
     </form>
    </div>  <!-- end tab-pane tax2 -->
    <div class="tab-pane pad_t5" id="tab-card"> 
           <form class="form-horizontal" id="form3"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">               
	@include('content.concen.acc.tradeInsert.trade_insert.revenue.card')
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
           </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
        </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div> <!-- end tab-pane card -->
        <div class="tab-pane pad_t5" id="tab-cash"> 
          <form class="form-horizontal" id="form4"> 
            <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
	@include('content.concen.acc.tradeInsert.trade_insert.revenue.cash')
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
         </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
        </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div> <!-- end tab-pane cash -->
        <div class="tab-pane" id="tab-mix"> <!-- fade in class-->
          <ul class="nav nav-tabs mar_t5" role="tablist">
            <li role="presentation" class="active"><a href="#tab-sales" role="tab" data-toggle="tab">판매</a></li>
            <li role="presentation"><a href="#tab-g-assest" data-toggle="tab">고정자산</a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active pad_t5" id="tab-sales">
              <form class="form-horizontal"  id="form516">
                <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">                
	@include('content.concen.acc.tradeInsert.trade_insert.revenue.sales')
              </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
            </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
                </div>
           </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">        
	@include('content.conmid.acc.tradeInsert.trade_insert.revenue.sales')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
              </form>
            </div><!-- end tab-pane sales -->
            <div class="tab-pane pad_t5" id="tab-g-assest"> 
              <form class="form-horizontal"  id="form616"> 
                <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">                
	@include('content.concen.acc.tradeInsert.trade_insert.revenue.asset')
              </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
             </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
                </div>
           </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">       
	@include('content.conmid.acc.tradeInsert.trade_insert.revenue.asset')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row -->  
              </form>
            </div> <!-- end tab-pane g-assest -->
          </div> <!-- end tab-content -->
        </div> <!-- end tab-pane mix -->
        <div class="tab-pane pad_t5" id="tab-rec"> <!-- fade in class-->
          <form class="form-horizontal"  id="form716"> 
            <div class="row"> 
              <div class="col-md-8">
                <div class="well well-sm">              
	@include('content.concen.acc.tradeInsert.trade_insert.revenue.receive')
          </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
          </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
            </div>
            </div> 
           </div> <!-- end row --> 
           <div class="row tog">         
           <div class="col-md-12">
             <div class="well well-sm mar_tm18">       
	@include('content.conmid.acc.tradeInsert.trade_insert.revenue.receive')
      </div> <!-- end well -->
       </div> <!-- end col-md-12 --> 
      </div> <!-- end row -->
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div> <!-- end tab-pane rec -->
      </div> <!-- end tab-content -->




