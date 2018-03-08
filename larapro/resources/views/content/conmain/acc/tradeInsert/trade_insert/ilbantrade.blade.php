<ul class="nav nav-tabs mar_tm18" id="" role="tablist">
          <li role="presentation" class="active"><a href="#tab-tax1" role="tab">일반</a></li>  
          <li role="presentation"><a href="#tab-tax2">영수증</a></li>
          <li role="presentation"><a href="#tab-tax3">가수/가지급</a></li>
          <li role="presentation"><a href="#tab-tax4">접대비</a></li>
          <li role="presentation"><a href="#tab-tax5">기부금</a></li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active pad_t5" id="tab-tax1"> 
            <form class="form-horizontal" id="form1">  
          <div class="row">
               <div class="col-md-12">
                 <div class="well well-sm" style="padding-bottom: 0px;">
	@include('content.concen.acc.tradeInsert.trade_insert.ilbantrade.ilbantrade')
                </div><!-- end well -->
          </div> <!-- end col-md-8 --> 
          <div class="col-md-12">
            <div class="well well-sm mar_tm18">
	@include('content.conmid.acc.tradeInsert.trade_insert.ilbantrade.ilbantrade')
          </div> <!-- end well -->
            </div> <!-- end col-md-4 -->         
           </div> <!-- end row --> 
      <div class="row">
      <div class="col-md-12"> 
      <div class="well well-sm mar_tm18">
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row -->                             
          </form>
        </div>  <!-- end tab-pane tax1 -->
        <div class="tab-pane pad_t5" id="tab-tax2"> 
          <form class="form-horizontal" id="form2"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
	@include('content.concen.acc.tradeInsert.trade_insert.ilbantrade.receipt')
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
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
        </div>  <!-- end tab-pane tax2 -->
      <div class="tab-pane pad_t5" id="tab-tax3">
         <form class="form-horizontal" id="form3"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
	@include('content.concen.acc.tradeInsert.trade_insert.ilbantrade.suspenseRp')
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
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
      </div>
      <div class="tab-pane pad_t5" id="tab-tax4">
         <form class="form-horizontal" id="form416"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
	@include('content.concen.acc.tradeInsert.trade_insert.ilbantrade.entertainment')
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
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
      </div>
       <div class="tab-pane pad_t5" id="tab-tax5">
            <form class="form-horizontal" id="form516"> 
           <div class="row">
            <div class="col-md-8"> 
              <div class="well well-sm">             
	@include('content.concen.acc.tradeInsert.trade_insert.ilbantrade.donation')
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
	@include('content.conbuttonmid.one')  
        </div> <!-- end well --> 
      </div><!-- end col-md-12 --> 
      </div> <!-- end row --> 
          </form>
       </div><!-- end tab 5 --> 
      </div> <!-- end tab-content -->


