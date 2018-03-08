<ul class="nav nav-tabs mar_tm18" id="myTab" role="tablist">
          <li role="presentation" class="active"><a href="#tab-tax1" role="tab">받을어음</a></li>  
          <li role="presentation"><a href="#tab-tax2">지급어음</a></li>
        </ul>        
          <div class="tab-content">         
            <div class="tab-pane active pad_t5" id="tab-tax1">             
             <form class="form-horizontal" id="form11">   
              <div class="row">
               <div class="col-md-8">                                                 
                <div class="well well-sm">              
	@include('content.concen.acc.tradeInsert.otherTradeTwo.note.one')
             </div><!-- end well -->
          </form>          
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
           <form class="form-horizontal" id="form13">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
             </div> <!-- end well -->
           </form>
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
              </div>
            </div><!-- end col-md-4 -->  
           </div> <!-- end row -->                         
        </div>  <!-- end tab-pane tax1 -->
        <div class="tab-pane pad_t5" id="tab-tax2"> 
         <form class="form-horizontal" id="form21">   
              <div class="row">
               <div class="col-md-8">                                                 
                <div class="well well-sm">              
	@include('content.concen.acc.tradeInsert.otherTradeTwo.note.two')
             </div><!-- end well -->
          </form>          
          </div> <!-- end col-md-8 --> 
          <div class="col-md-4">
           <form class="form-horizontal" id="form23">
            <div class="well well-sm">
	@include('content.conright.acc.tradeInsert.trade_insert.revenue')
             </div> <!-- end well -->
            </form>
            </div> <!-- end col-md-4 -->         
            <div class="col-md-4 mar_tm19">
              <div class="well well-sm">
	@include('rightbar.acc.tradeInsert.revenue')
              </div>
            </div><!-- end col-md-4 -->  
           </div> <!-- end row -->                         
        </div>  <!-- end tab-pane tax2 -->
      
      </div> <!-- end tab-content -->


