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
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;계정과목</label>
            <div class="input-group">
               <span class="input-group-addon">322221</span>
               <input type="text" class="form-control pop account next210 n" readonly="readonly">
            </div>
          </div>  
          <div class="form-group">
            <label for="from">&nbsp;&nbsp;&nbsp;&nbsp;금융기관</label>
            <div class="input-group">
               <span class="input-group-addon">120001</span>
               <input type="text" class="form-control pop bank next100 n" readonly="readonly">
            </div>
          </div>       
        </form> 
        <div class="panel with-nav-tabs panel-default">
          <div class="panel-heading"> 
            <ul class="nav nav-tabs" id="ajaxtab3" role="tablist">
              <li role="presentation" class="active"><a href="#tab1" class="acc107" role="tab" data-toggle="tab">전체</a></li>  
              <li role="presentation"><a href="#tab2" class="acc112" role="tab" data-toggle="tab">입금</a></li>
              <li role="presentation"><a href="#tab3" class="acc112" role="tab" data-toggle="tab">출금</a></li>
            </ul>
          </div>
          <div class="panel-body">
            <div class="tab-content">
            <div class="tab-pane active" id="tab1"> 
              <div class="row">
            <div class="col-md-12"> 
              <div class="well well-sm">            
	@include('content.concen.acc.tradeInsert.otherTradeOne.bankTrade.total')
             </div>
            </div>          
          </div>                             
        </div>  <!-- end tab-pane tax1 -->
        <div class="tab-pane" id="tab2"> <!-- fade in class-->          
          <div class="row">
            <div class="col-md-12"> 
              <div class="well well-sm">            
	@include('content.concen.acc.tradeInsert.otherTradeOne.bankTrade.deposit')
               </div> <!-- end well -->
               <div class="well well-sm mar_tm18">  
	@include('content.conmid.acc.tradeInsert.otherTradeOne.bankTrade.deposit')
           </div><!-- end well -->                                                         
          </div>           
         </div>                             
        </div>  <!-- end tab-pane tax2 -->
      <div class="tab-pane" id="tab3">          
          <div class="row">
            <div class="col-md-12"> 
              <div class="well well-sm">            
	@include('content.concen.acc.tradeInsert.otherTradeOne.bankTrade.withdraw')
                </div> <!-- end well -->
               <div class="well well-sm mar_tm18">  
	@include('content.conmid.acc.tradeInsert.otherTradeOne.bankTrade.withdraw')
           </div><!-- end well -->                                                         
          </div>           
         </div>  
      </div>
      </div> <!-- end tab-content -->
     </div> <!-- end panel-body --> 
   </div> <!-- end panel with-nav-tabs panel-default -->

