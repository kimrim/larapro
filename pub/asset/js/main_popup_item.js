 $(function() { 

   $.fn.item_popup=function(options){
        $.defaultOptions = {
            ajaxid        : "",
            tid           : "",
            $this         : "",
            ind         : "",
            url         : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
           $(options.ajaxid).dialog({
		autoOpen: false,
		resizable: false,
                //height: 335,
                modal: true,
                //title: options.title,
                open: function() { 
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery('#dialog_item').dialog('close');
                 });

                 $(options.ajaxid + ' table').DataTable( { 
	         	ajax:           options.url,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true
	          } );
                },
                position: { my: "left top", at: "left bottom", of: options.$this },
                buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       var code = $(options.ajaxid + " table tr.selected td:first").text();
                       var val = $(options.ajaxid + " table tr.selected td:first").next("td").text();
                       parentinsert_item(options.tid, options.ind, code, val);                                                              
                    },
                    취소: function() {
                       $( this ).dialog( "close" );
                    }
               },
               show: {
                  effect: "fade",
                  duration: 1000
               },
               hide: {
                  effect: "explode",
                  duration: 1000
               }
	  }).dialog('open');

          function parentinsert_item(id, ind, code, val){
            var $t = $("table#" + id).find("tbody tr").eq(ind).find("td");
          if(id == "tax1" || id == "tax2" || id == "card" || id == "inout" || id == "g-assest"){
              $t.eq(0).children().val(code);
              $t.eq(1).children().val(val);
          
              $t.eq(2).children().focus();
          }else if(id == "sales"){
              $t.eq(1).children().val(code);
              $t.eq(2).children().val(val);
          
              $t.eq(3).children().focus();
          }
        }
          
    })
    return this;
 }  


 $.fn.main_popup=function(options){
        $.defaultOptions = {
            id2         : "",
            ids         : "",
            url         : "",
            table_pop   : "",
            next        : "",
            pan         : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){        
	  $(options.id2).dialog({
		autoOpen: false,
		resizable: false,
                //height: 335,
                modal: true,
                
                open: function() { /* 클릭 시(anywhere) Dialog Close 방법 */
                  jQuery('.ui-widget-overlay').bind('click', function() {
                    jQuery(options.id2).dialog('close');
                  });

                  options.table_pop.DataTable( { //안되는 방식
	         	ajax:           options.url,
	        	deferRender:    true,
	        	scrollY:        160,
                        scrollX: true,
	             	scrollCollapse: true,
                        "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]] 
	          } );
                },             
                position: { my: "left top", at: "left-30 bottom", of: options.ids },
                buttons: {
                    확인: function() {
                       $( this ).dialog( "close" ); 
                       var code = $(this).find("table tr.selected td:eq(0)").html();
                       var val  = $(this).find("table tr.selected td:eq(0)").next("td").html();
                       parentinsert(options.ids, val, code, options.pan);  
                       nextfocus(options.next,options.ids);                     
                    },
                    취소: function() {
                       $( this ).dialog( "close" );
                    }
               },
               show: {
                  effect: "fade",
                  duration: 1000
               },
               hide: {
                  effect: "explode",
                  duration: 1000
               }
	    }).dialog('open');

            function parentinsert(ids, val, code, pan){
              if(pan == "n"){
               ids.val(val);
               ids.prev().text(code);
              }else if(pan == "t"){
                ids.val(val);
                ids.parent().prev().find("input:eq(0)").val(code);
              }
            }

            function nextfocus(next, id) {
               if(next == "next110"){
                   id.parent().next().find("input:eq(0)").focus();                   
               }else if(next == "next110sel"){
                 if(id.parent().next().find("input:eq(0)").is(":disabled")){
                   id.parent().next().next().find("input:eq(0)").focus();
                 }else{
                   id.parent().next().find("input:eq(0)").focus();
                 }  
               }else if(next == "next130"){
                   id.parent().next().next().next().find("input:eq(0)").focus(); 
               }else if(next == "next120"){
                   id.parent().next().next().find("input:eq(0)").focus(); 
               }else if(next == "next210"){
                   id.parent().parent().next().find("input:eq(0)").focus(); 
               }else if(next == "next211"){
                   id.parent().parent().next().find("input:eq(1)").focus(); 
               }else if(next == "next210b"){
                   id.parent().parent().next().find("button:eq(0)").focus();  
               }else if(next == "next210s"){
                   id.parent().parent().next().find("select").focus();  
               }else if(next == "next220"){
                   id.parent().parent().next().next().find("input:eq(0)").focus();  
               }else if(next == "next220b"){
                   id.parent().parent().next().next().find("button:eq(0)").focus();  
               }else if(next == "next230"){
                   id.parent().parent().next().next().next().find("input:eq(0)").focus();  
               }else if(next == "next230s"){
                   id.parent().parent().next().next().next().find("select").focus();  
               }else if(next == "next310"){
                   id.parent().parent().parent().next().find("input:eq(0)").focus();
               }else if(next == "next310b"){
                   id.parent().parent().parent().next().find("button:eq(0)").focus();
               }else if(next == "next320"){
                   id.parent().parent().parent().next().next().find("input:eq(0)").focus();
               }else if(next == "next330"){
                   $("#"+id).parent().parent().parent().next().next().next().find("input:eq(0)").focus();
               }else if(next == "next510"){
                   id.parent().parent().parent().parent().parent().next().find("input:eq(0)").focus();
               }else if(next == "next611"){
                   id.parent().parent().parent().parent().parent().parent().next().find("input:eq(1)").focus();
               }else{

               }
            }
         })
         return this;
     } 

     $.fn.calc=function(options){
        $.defaultOptions = {
            my         : "",
            val        : "",
            op         : "",
            dividend   : "",
            par        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0, t1, t2, t3, t4;   
          if(options.dividend == "X_1"){ 
             var ind0 = options.ind.split("_")[0];
             if(options.op == "A"){                                                 
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.A").val() || 0, 10);
             } else if(options.op == "Aarr"){                                                 
                 var inp = options.par.find("input.Aarr");

                 t0 = 0;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
             } else if(options.op == "Aarr2"){//sau/A01/AA01/dermatology                                                 
                 var inp = options.par.find("input.Aarr2");

                 t0 = 0;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
             } else if(options.op == "SA"){//per/A03/tax_stsndard/withhold_earnings_control                                               
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.AS").val() || 0, 10) - parseInt(options.par.find("input.SmA").val() || 0, 10);
             } else if(options.op == "SmA"){//per/A03/tax_stsndard/withhold_earnings_control
                 t0 = 0;                                                                
                 var inp = options.par.find("input.SA");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t0 -= parseInt(options.val || 0, 10);
             } else if(options.op == "AS"){//cor/A05/international_trade_02/reserve_earnings_calculation_02                                                
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.AS").val() || 0, 10) - parseInt(options.par.find("input.Sm3").val() || 0, 10);
             } else if(options.op == "Sm3"){//cor/A05/international_trade_02/reserve_earnings_calculation_02  
                 var inp = options.par.find("input.AS");

                 t0 = 0;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                                                
                 t0 = t0 - parseInt(options.val || 0, 10); 
             } else if(options.op == "S"){                                                 
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "Sm"){                                                
                 t0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.val || 0, 10); 
             } else if(options.op == "Sm2"){                                                               
                 t0 = parseInt(options.par.find("input.S2").val() || 0, 10) - parseInt(options.val || 0, 10);
             } else if(options.op == "SD"){//A02/subject_02/a001                                                               
                 t0 = (parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmD").val() || 0, 10))/parseInt(options.par.find("input.DdnMD").val() || 1, 10);
             } else if(options.op == "SmD"){//A02/subject_02/a001                                                               
                 t0 = (parseInt(options.par.find("input.SD").val() || 0, 10) - parseInt(options.val || 0, 10))/parseInt(options.par.find("input.DdnMD").val() || 1, 10);
             } else if(options.op == "Dp2M"){//A02/subject_02/a001 
                 ind1 = options.ind.split("_")[1];                                                              
                 t0 = parseInt(options.val || 0, 10)/parseInt(options.par.find("input.Ddp2D").val() || 1, 10) * parseInt(options.par.prev().prev().find("td:eq(" + ind1 + ")").children("input").val() || 0, 10);
             } else if(options.op == "Ddp2D"){//A02/subject_02/a001 
                 ind1 = options.ind.split("_")[1];                                                              
                 t0 = parseInt(options.par.find("input.Dp2M").val() || 0, 10) * parseInt(options.par.prev().prev().find("td:eq(" + ind1 + ")").children("input").val() || 0, 10)/parseInt(options.val || 1, 10);
             } else if(options.op == "SM"){//A04/AA04/invest_debt_exemption                                                              
                 t0 = (parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmM").val() || 0, 10)) * parseInt(options.par.find("input.M").val() || 0, 10);
             } else if(options.op == "SmM"){//A04/AA04/invest_debt_exemption                                                              
                 t0 = (parseInt(options.par.find("input.SM").val() || 0, 10) - parseInt(options.val || 0, 10)) * parseInt(options.par.find("input.M").val() || 0, 10);
             } else if(options.op == "M"){//A04/AA04/invest_debt_exemption                                                              
                 t0 = (parseInt(options.par.find("input.SM").val() || 0, 10) - parseInt(options.par.find("input.SmM").val() || 0, 10)) * parseInt(options.val || 0, 10);
             } else if(options.op == "SmarrM"){//A04/AA02/land_alienation_margin  
                 var inp = options.par.find("input.SmarrM");  
                 t0 = 0;               
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                                                          
                 t0 = (parseInt(options.par.find("input.DdnSarrM").val() || 0, 10) - t0) * parseInt(options.par.find("input.M").val() || 0, 10);
             } else if(options.op == "SarrAbs"){//cor/A04/combination/amount_control_accounts_01
                 var inp = options.par.find("input.SmarrAbs");

                 t0 = 0; 
                 t0 += parseInt(options.val)

                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t0 = Math.abs(t0);                              
             } else if(options.op == "SmarrAbs"){
                 var inp = options.par.find("input.SmarrAbs");

                 t0 = 0;
                 t0 += parseInt(options.par.find("input.SarrAbs").val() || 0, 10);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });               
                 t0 = Math.abs(t0);                              
             } else if(options.op == "Sarr"){//cor/A04/combination/amount_control_accounts_02
                 var inp = options.par.find("input.Smarr");
                 t0 = 0; 
                 t0 += parseInt(options.val)

                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });                              
             } else if(options.op == "Smarr"){
                 var inp = options.par.find("input.Smarr");

                 t0 = 0;
                 t0 += parseInt(options.par.find("input.Sarr").val() || 0, 10);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });                                            
             } else if(options.op == "SmMp115"){//cor/A06/sincerity/aa02                                                             
                 t0 = (parseInt(options.par.find("input.SnMD").val() || 0, 10) - parseInt(options.val || 0, 10) * 1.15).toFixed(2);
             } else if(options.op == "MarrD"){//cor/A05/report_attachment/no_fact
                 var inp = options.par.find("input.MarrD");
                 t0 = 1;                 
                 $(inp).each(function( index ) {
                     t0 *= parseInt($(this).val() || 0, 10);
                 });               
                 t0 = t0 /parseInt(options.par.find("input.MarrDd").val() || 1, 10);                             
             } else if(options.op == "MarrDd"){//cor/A05/report_attachment/no_fact
                 var inp = options.par.find("input.MarrD");
                 t0 = 1;                 
                 $(inp).each(function( index ) {
                     t0 *= parseInt($(this).val() || 0, 10);
                 });               
                 t0 = t0 /parseInt(options.val || 1, 10);                             
             } else if(options.op == "Mp"){//cor/A03/deduction/a0913                                                
                 t0 = parseInt(options.val || 0, 10) * parseInt(options.my.parent().siblings().find("input.Mp").val() || 0, 10)/100; 
             } else {

             } 
             
             options.par.find("td:eq(" + ind0 + ")").children("input").val(t0);                  
          } else if(options.dividend == "X_1_a"){ 
             ind0 = options.ind.split("_")[0];
             if(options.op == "A"){                                                
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.A").val() || 0, 10); 
             } else if(options.op == "Ap"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_02                                                
                 t0 = parseFloat(options.val || 0, 10)/100 + parseFloat(options.my.parent().siblings().find("input.Ap").val() || 0, 10)/100; 
             } else if(options.op == "S"){                                                 
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "Sm"){                                                
                 t0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.val || 0, 10); 
             } else if(options.op == "M"){                                                
                 t0 = options.val * parseInt(options.my.parent().siblings().find("input.M").val() || 0, 10);                             
             } else if(options.op == "M"){                                                
                 t0 = options.val * parseInt(options.my.parent().siblings().find("input.M").val() || 0, 10);                             
             } else if(options.op == "Mp"){                                                
                 t0 = options.val * parseInt(options.my.parent().siblings().find("input.Mp").val() || 0, 10)/100;                             
             } else if(options.op == "M10"){//vat/A01/report03/substitute_charge                                                             
                 t0 = Math.round(parseInt(options.val || 0, 10) * 10/100, 2);
             } else if(options.op == "M15"){//cor/A06/sincerity/aa02                                                             
                 t0 = Math.round(parseInt(options.val || 0, 10) * 15/100, 2);
             } else if(options.op == "Aarr"){//cor/A06/business_inpartnership/a03-5
                 t0 = 0;
                 var inp = options.par.find("input.Aarr");               
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                                         
             } else if(options.op == "SmD"){//cor/A03/deduction/deduction_addition_sub_04 
                 t0 = parseFloat(options.par.find("input.M").val() || 0) * (1 - parseFloat(options.my.val()/100 || 0));             
             } else if(options.op == "Sarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_13
                 t0 = parseInt(options.my.val() || 0);  
                 var inp = options.par.children().find("input.Smarr");              
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });           
             } else if(options.op == "Smarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_13
                 t0 = parseInt(options.par.find("input.Sarr").val() || 0);  
                 var inp = options.par.children().find("input.Smarr");              
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });           
             } else if(options.op == "SmM"){//per/A05/tax_confirmation/earnings_tax_standard_report_31
                 t0 = (parseInt(options.par.find("input.SM").val() || 0, 10) - parseInt(options.val || 0, 10)) * parseInt(options.par.find("input.MSm").val() || 0, 10);
             } else if(options.op == "MSm"){//per/A05/tax_confirmation/earnings_tax_standard_report_31
                 t0 = parseInt(options.val || 0, 10) * (parseInt(options.par.find("input.SM").val() || 0, 10) - parseInt(options.par.find("input.SmM").val() || 0, 10));
             } else if(options.op == "SM"){//per/A05/tax_confirmation/earnings_tax_standard_report_31
                 t0 = (parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmM").val() || 0, 10)) * parseInt(options.par.find("input.MSm").val() || 0, 10);
             } else if(options.op == "AM"){//stk/A01/formerly_transfer/item_formerly_transfer                                                
                 t0 = (parseInt(options.val || 0, 10)
                    + parseInt(options.my.parent().siblings().find("input.AM").val() || 0, 10))
                    * parseInt(options.par.find("input.AAM").val() || 0, 10); 
             } else if(options.op == "AAM"){//stk/A01/formerly_transfer/item_formerly_transfer  
                 t0 = 0; 
                 var inp = options.par.children().find("input.AM");              
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                                             
                 t0 = t0 * parseInt(options.val || 0, 10);
             } else {

             } 
           
             options.par.find("input:eq(" + ind0 + ")").val(t0);                  
          } else if(options.dividend == "X_2"){ 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             if(options.op == "AS"){//A02/subject_01/a07                                             
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.AS").val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.find("input.Sm").val() || 0, 10);                 
             } else if(options.op == "AarrS"){//cor/base/revenue/control_after_revenue_amount                                               
                 var inp = options.par.find("input.AarrS");
                 t0 = 0;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "SA"){//cor/A06/common_benefit_01/application_earnings_use                                               
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmA").val() || 0, 10); 
                 t1 = t0 + parseInt(options.par.find("input.A").val() || 0, 10);
             } else if(options.op == "SmA"){//cor/A06/common_benefit_01/application_earnings_use                                               
                 t0 = parseInt(options.par.find("input.SA").val() || 0, 10) - parseInt(options.val || 0, 10); 
                 t1 = t0 + parseInt(options.par.find("input.A").val() || 0, 10);
             } else if(options.op == "SarrS"){                                               
                 var inp = options.par.find("input.SmarrSm");
                 t0 = 0;
                 t0 += parseInt(options.val);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "SarrSm"){                                               
                 var inp = options.par.find("input.SmarrSm");
                 t0 = 0;
                 t0 += parseInt(options.val);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.find("input.S").val() || 0, 10) - t0;
             } else if(options.op == "SmarrS"){                                               
                 var inp = options.par.find("input.SmarrS");
                 t0 = 0;
                 t0 += parseInt(options.par.find("input.SarrS").val() || 0, 10);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "SmarrSm"){                                               
                 var inp = options.par.find("input.SmarrSm");
                 t0 = 0;
                 t0 += parseInt(options.par.find("input.SarrSm").val() || 0, 10);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.find("input.S").val() || 0, 10) - t0;
             } else if(options.op == "SaS2"){ //A02:special_cost                                             
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.Sum2").val() || 0, 10); 
                 t1 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmaASm").val() || 0, 10);                 
             } else if(options.op == "MSm"){ //A02/subject_01/a07                                             
                 t0 = parseInt(options.val || 0, 10) * parseInt(options.my.parent().siblings().find("input.M").val() || 0, 10); 
                 t1 = parseInt(options.par.find("input.S").val() || 0, 10) - t0;                 
             } else if(options.op == "DdMarraS"){                  
                 inp = options.par.find("input.MarrDaS");  
                 t1 = 1;              
                 $(inp).each(function( index ) {
                     t1 *= parseInt($(this).val() || 0, 10);
                 });
                 t1 = t1 /parseInt(options.val || 1, 10); 
                 t0 = t1 - parseInt(options.par.find("input.Sm").val() || 0, 10);                        
             } else if(options.op == "MarrDaS"){                  
                 inp = options.par.find("input.MarrDaS");  
                 t1 = 1;              
                 $(inp).each(function( index ) {
                     t1 *= parseInt($(this).val() || 0, 10);
                 });
                 t1 = t1 /parseInt(options.par.find("input.DdMarraS").val() || 1, 10); 
                 t0 = t1 - parseInt(options.par.find("input.Sm").val() || 0, 10);                        
             } else if(options.op == "DdnSarrM"){//A04/AA02/land_alienation_margin                   
                 var inp = options.par.find("input.AD");  
                 t0 = 0;
                 t1 = 0;              
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t0 = t0 /parseInt(options.my.val() || 1, 10); 

                 var inp2 = options.par.find("input.SmarrM");

                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });                                                           
                 t1 = (parseInt(options.my.val() || 0, 10) - t1) * t0;                       
             } else if(options.op == "AD"){//A04/AA02/land_alienation_margin                   
                 var inp = options.par.find("input.AD");  
                 t0 = 0;
                 t1 = 0;              
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t0 = t0 /parseInt(options.par.find("input.DdnSarrM").val() || 1, 10);  

                 var inp2 = options.par.find("input.SmarrM");

                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });                                                           
                 t1 = (parseInt(options.par.find("input.DdnSarrM").val() || 0, 10) - t1) * t0;                       
             } else if(options.op == "SnMD"){//cor/A06/sincerity/aa02                                                             
                 t0 = parseInt(options.val || 0, 10) - (parseInt(options.par.find("input.SmMp115").val() || 0, 10) * 1.15).toFixed(2);
                 t1 = t0/parseInt(options.val || 1, 10) * parseInt(options.par.find("input.M").val() || 0, 10);
             } else if(options.op == "prAprSm"){//cor/A02/reserve/research                                              
                 t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.closest("tbody").closest("tr").prev().find("input.A").val() || 0, 10);
                 t1 = parseInt(options.par.closest("tbody").closest("tr").prev().find("input.SAS").val() || 0, 10) - t0;
             } else if(options.op == "DdnSM"){//cor/A03/deduction/deduction_addition_sub_04 
                 t0 = parseInt(options.par.find("input.D").val() || 0, 10)/parseInt(options.my.val() || 1, 10)/100; 
                 t1 = t0 * (1 - parseFloat(options.par.find("input.SmD").val()/100 || 0));              
             } else if(options.op == "SSm"){//A03/deduction/deduction_addition_sub_04
                 t0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);   
                 t1 = 0 - t0;//추가작업           
             } else if(options.op == "MA"){//per/A05/tax_confirmation/earnings_tax_standard_report_07
                 t0 = parseInt(options.my.val() || 0, 10) * 0.11; 
                 t1 = t0 + parseInt(options.par.find("input.A:eq(0)").val() || 0, 10);              
             } else {

             } 
             //options.par.find("td:eq(" + ind0 + ")").children("input").val(t0);
             //options.par.find("td:eq(" + ind1 + ")").children("input").val(t1); 
             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);                    
          } else if(options.dividend == "X_02_2"){//vat/A01/report03/certificate_origin           X_02로 변경
             if(options.op == "MMin"){
                 t0 = parseInt(options.val || 0, 10) * 10000;
                 t1 = Math.min(t0, parseInt(options.par.parent().parent().next().next().find("input.Min").val() || 0, 10));             
             } else {

             } 

             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);             
          } else if(options.dividend == "X_2_b"){ 
             if(options.op == "ASm"){//cor/A06/common_benefit_01/contribution_property_use_plan                                               
                 t0 = parseInt(options.val) + parseInt(options.my.parent().siblings().find("input.ASm").val() || 0, 10);
                 t1 = parseInt(options.par.find("input.S").val() || 0, 10) - t0;
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);                     
          } else if(options.dividend == "X_3"){ 
             if(options.op == "AnMDnA"){//cor/connection/report/connection_addition_tax_01  
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.par.find("input.AnMDnA2").val() || 0, 10);                                                
                 t1 = parseInt(options.val || 0, 10) * parseInt(options.par.find("input.MDnMD2nA").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnA").val() || 1, 10);                  
                 t2 = parseInt(options.par.find("input:eq(7)").val() || 0, 10) + t1;                 
             } else if(options.op == "AnMDnA2"){//cor/connection/report/connection_addition_tax_01  
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.par.find("input.AnMDnA").val() || 0, 10);                                                
                 t1 = parseInt(options.val || 0, 10) * parseInt(options.par.find("input.MDnMD2nA").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnA").val() || 1, 10);
                 t2 = parseInt(options.par.find("input:eq(6)").val() || 0, 10) + t1;                 
             } else if(options.op == "MDnMD2nA"){//cor/connection/report/connection_addition_tax_01                                                
                 t0 = parseInt(options.val || 0, 10) * parseInt(options.par.find("input.AnMDnA").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnA").val() || 1, 10);
                 t1 = parseInt(options.val || 0, 10) * parseInt(options.par.find("input.AnMDnA2").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnA").val() || 1, 10);  
                 t2 = t0 + t1;              
             } else if(options.op == "MMDdnMMDdnA"){//cor/connection/report/connection_addition_tax_01                                                
                 t0 = parseInt(options.par.find("input.AnMDnA").val() || 0, 10) * parseInt(options.par.find("input.MDnMD2nA").val() || 0, 10)/parseInt(options.val || 1, 10);
                 t1 = parseInt(options.par.find("input.AnMDnA2").val() || 0, 10) * parseInt(options.par.find("input.MDnMD2nA").val() || 0, 10)/parseInt(options.val || 1, 10);  
                 t2 = t0 + t1;              
             } else if(options.op == "SSmMnDnSM"){//cor/A03/deduction/deduction_addition_sub_04 
                 t0 = (parseInt(options.par.find("input.AnSMnDnSM").val() || 0, 10) - parseInt(options.par.find("input.AnSmMnDnSM").val() || 0, 10)) * parseInt(options.my.val() || 0, 10)/100; 
                 t1 = t0/parseInt(options.par.find("input.DdnSM").val() || 1, 10); 
                 t2 = t1 * (1 - parseFloat(options.par.find("input.SmD").val()/100 || 0));              
             } else if(options.op == "MDA"){//stk/A01/formerly_information_management/set_register 
                 t0 = parseInt(options.val || 0, 10) * parseInt(options.my.parent().siblings().find("input.MDA").val() || 0, 10); 
                 t1 = t0 * 0.1; 
                 t2 = t0 * t1;              
             } else {

             } 
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);
             options.par.find("input:eq(" + ind2 + ")").val(t2);               
          } else if(options.dividend == "X_3_a"){ 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2];
             if(options.op == "AarrnMDnAarr"){//cor/a03/tax_confirmation/addition_tax  
                 t0 = 0;                                              
                 var inp = options.par.find("input.AarrnMDnAarr");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.MDnMDnMDnA").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnMMDdnA").val() || 1, 10);  
                 options.par.find("input:eq(" + ind1 + ")").val(t1);
                 t2 = 0;
                 var inp2 = options.par.find("input.Aarr");
                 $(inp2).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });              
             } else {

             } 
             
             options.par.find("input:eq(" + ind0 + ")").val(t0);             
             options.par.find("input:eq(" + ind2 + ")").val(t2);               
          } else if(options.dividend == "X_4"){ 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];
             if(options.op == "MDnMDnMDnA"){//cor/A03/tax_confirmation/addition_tax  
                 t0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.AarrnMDnAarr:eq(0)").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnMMDdnA").val() || 1, 10);  
                 t1 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.AarrnMDnAarr:eq(1)").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnMMDdnA").val() || 1, 10);
                 t2 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.AarrnMDnAarr:eq(2)").val() || 0, 10)/parseInt(options.par.find("input.MMDdnMMDdnMMDdnA").val() || 1, 10);
                 t3 = t0 + t1 + t2;              
             } else if(options.op == "MMDdnMMDdnMMDdnA"){//cor/A03/tax_confirmation/addition_tax  
                 t0 = parseInt(options.par.find("input.AarrnMDnAarr:eq(0)").val() || 0, 10) * parseInt(options.par.find("input.MDnMDnMDnA").val() || 1, 10)/parseInt(options.my.val() || 1, 10);  
                 t1 = parseInt(options.par.find("input.AarrnMDnAarr:eq(1)").val() || 0, 10) * parseInt(options.par.find("input.MDnMDnMDnA").val() || 1, 10)/parseInt(options.my.val() || 1, 10); 
                 t2 = parseInt(options.par.find("input.AarrnMDnAarr:eq(2)").val() || 0, 10) * parseInt(options.par.find("input.MDnMDnMDnA").val() || 1, 10)/parseInt(options.my.val() || 1, 10); 
                 t3 = t0 + t1 + t2;              
             } else if(options.op == "AnSMnDnSM"){//cor/A03/deduction/deduction_addition_sub_04 
                 t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.AnSmMnDnSM").val() || 0, 10);  
                 t1 = (parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.AnSmMnDnSM").val() || 0, 10)) * parseFloat(options.par.find("input.SSmMnDnSM").val()/100 || 0); 
                 t2 = t1/parseInt(options.par.find("input.DdnSM").val() || 1, 10); 
                 t3 = t2 * (1 - parseFloat(options.par.find("input.SmD").val()/100 || 0));              
             } else if(options.op == "AnSmMnDnSM"){//cor/A03/deduction/deduction_addition_sub_04 
                 t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.AnSMnDnSM").val() || 0, 10);  
                 t1 = (parseInt(options.par.find("input.AnSMnDnSM").val() || 0, 10) - parseInt(options.my.val() || 0, 10)) * parseFloat(options.par.find("input.SSmMnDnSM").val()/100 || 0); 
                 t2 = t1/parseInt(options.par.find("input.DdnSM").val() || 1, 10); 
                 t3 = t2 * (1 - parseFloat(options.par.find("input.SmD").val()/100 || 0));              
             } else {

             } 
             
             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);
             options.par.find("input:eq(" + ind2 + ")").val(t2); 
             options.par.find("input:eq(" + ind3 + ")").val(t3);              
          } else if(options.dividend == "X_5"){
             if(options.op == "MMinASSm"){//A03/deduction/deduction_addition_sub_04
                 var val = options.par.find("div.dropdown:eq(1)").children("a").text();
                 if(val == "10"){
                     val = 10000000;
                 } else if(val == "105"){
                     val = 15000000;
                 } else {
                     val = 20000000;
                 }
                 t0 = Math.round(parseInt(options.my.val() || 0, 10) * val);   
                 t1 = Math.min(t0, parseInt(options.par.find("input.Min2").val() || 0, 10)); 
                 t2 = t1 + parseInt(options.par.find("input.A").val() || 0, 10);   
                 t3 = parseInt(options.par.find("input.SSm").val() || 0, 10) - t2; 
                 t4 = 0 - t3;//추가작업           
             } else {

             } 
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];

             options.par.find("input:eq(" + ind0 + ")").val(t0); 
             options.par.find("input:eq(" + ind1 + ")").val(t1); 
             options.par.find("input:eq(" + ind2 + ")").val(t2);
             options.par.find("input:eq(" + ind3 + ")").val(t3);  
             options.par.find("input:eq(" + ind4 + ")").val(t4);                
          } else if(options.dividend == "X_7"){
             if(options.op == "MEMMinASSm"){//A03/deduction/deduction_addition_sub_04
                 var val = options.par.find("div.dropdown:eq(0)").children("a").text();
                 if(val == "50"){
                     val = 0.5;
                 } else {
                     val = 0.7;
                 }
                 t0 = Math.round(parseInt(options.my.val() || 0, 10) * val);   
                 t1 = t0; 
                 t2 = Math.round(t1 * 0.2); 
                 t3 = Math.min(t2, parseInt(options.par.find("input.Min").val() || 0, 10));  
                 t4 = t3 + t0;  
                 t5 = parseInt(options.par.find("input.SSm").val() || 0, 10) - t4; 
                 t6 = 0 - t5;//추가작업           
             } else {

             } 
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];

             options.par.find("input:eq(" + ind0 + ")").val(t0); 
             options.par.find("input:eq(" + ind1 + ")").val(t1); 
             options.par.find("input:eq(" + ind2 + ")").val(t2);
             options.par.find("input:eq(" + ind3 + ")").val(t3);  
             options.par.find("input:eq(" + ind4 + ")").val(t4);  
             options.par.find("input:eq(" + ind5 + ")").val(t5); 
             options.par.find("input:eq(" + ind6 + ")").val(t6);                                        
          } else if(options.dividend == "X_11_b"){ 
             if(options.op == "Smarrn2"){//A02/subject_02/information_contribution                                                              
                 t0 = parseInt(options.par.find("input.Sarr").val() || 0, 10) - parseInt(options.val || 0, 10) - parseInt(options.par.next().find("input.Smarr").val() || 0, 10);
             } else if(options.op == "D100"){//cor/A05/report_01/disaster_deduction, per/appending/report_attachment/disaster_deduction                                                               
                 t0 = (parseInt(options.val || 0, 10)/parseInt(options.par.parent().find("input.Dd100").val() || 1, 10) /100).toFixed(2);
             } else if(options.op == "M50"){//cor/A05/report_01/earnings_deduction_special                                                              
                 t0 = (parseInt(options.val || 0, 10) * 0.5).toFixed(2);
             } else if(options.op == "M100"){//cor/A05/report_01/earnings_deduction_special                                                              
                 t0 = (parseInt(options.val || 0, 10));
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             options.par.next().find("input:eq(" + ind0 + ")").val(t0);                  
          } else if(options.dividend == "X_11_c"){ 
             if(options.op == "Dd100"){//cor/A05/report_01/disaster_deduction, per/appending/report_attachment/disaster_deduction                                                                
                 t0 = (parseInt(options.par.parent().find("input.D100").val() || 0, 10)/parseInt(options.val || 1, 10) /100).toFixed(2);
             } else if(options.op == "S"){//cor/A03/deduction/research_develop                                                             
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.AarrD:eq(0)").val() || 0, 10);
             } else {

             } 
             ind0 = options.ind.split("_")[0];

             options.par.next().next().find("input:eq(" + ind0 + ")").val(t0);                  
          } else if(options.dividend == "X_11_e"){
            ind0 = options.ind.split("_")[0];
            ind1 = options.ind.split("_")[1];
            if(options.op == "Min"){//cor/A02/subject_02/a001                                                 
                 t0 = Math.min(parseInt(options.val || 0, 10) - parseInt(options.par.next().next().next().next().find("input:eq(" + ind1 + ")").val() || 0, 10));
            } else {

            }              

            options.par.next().next().next().next().next().find("input:eq(" + ind0 + ")").val(t0);
          } else if(options.dividend == "X_12_1a"){//cor/A05/international_trade_02/reserve_earnings_calculation_02
             if(options.op == "SarrSmarr"){                                                
                 t0 = parseInt(options.val || 0, 10);
                 var inp = options.par.find("input.Smarr");
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.closest("table").parent().parent().prev().find("input:eq(0)").val() || 0, 10) - parseInt(options.par.prev().prev().prev().find("input:eq(7)").val() || 0, 10) - t0;
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().find("input:eq(" + ind1 + ")").val(t1);                   
          } else if(options.dividend == "X_12_1d"){//cor/A05/international_trade_02/reserve_earnings_calculation_02
             if(options.op == "SarrSmarr"){                                                
                 t0 = parseInt(options.val || 0, 10);
                 var inp = options.par.find("input.Smarr");
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.closest("table").parent().parent().prev().find("input:eq(0)").val() || 0, 10) - parseInt(options.par.next().next().find("input:eq(7)").val() || 0, 10) - t0;
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().next().next().next().find("input:eq(" + ind1 + ")").val(t1);                   
          } else if(options.dividend == "X_12_ac"){
             if(options.op == "MMin"){//per/A05/sincerity_report/tax_deduction                                                 
                 t0 = parseInt(options.my.val() || 0, 10) * 60/100;
                 t1 = Math.min(t0, 1000000);
             } else if(options.op == "MDd"){//cor/A04/AA02/based_sell_plan                                                 
                 t0 = parseInt(options.val || 0, 10) * parseInt(options.my.parent().siblings().find("input.MDd").val() || 0, 10);
                 t1 = parseInt(options.par.next().next().find("input:eq(2)").val() || 0, 10)/ parseInt(t0 || 1, 10);
             } else if(options.op == "MD"){//per/A05/standard_cost/register_tax_deduction                                                
                t0 = parseInt(options.val || 0, 10) * parseInt(options.par.siblings().find("input.MD").val() || 0, 10)/parseInt(options.par.siblings().find("input.MDd").val() || 1, 10) * 0.2;
               t1 = Math.min(t0, 1000000); 
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];

             options.par.next().find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().next().next().find("input:eq(" + ind1 + ")").val(t1);                   
          } else if(options.dividend == "X_12_bd"){
             if(options.op == "MD"){//per/A05/standard_cost/register_tax_deduction                                                
                t0 = parseInt(options.val || 0, 10) * parseInt(options.par.siblings().find("input.MD").val() || 0, 10)/parseInt(options.par.siblings().find("input.MDd").val() || 1, 10) * 0.2;
               t1 = Math.min(t0, 1000000); 
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];

             options.par.next().next().find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().next().next().next().find("input:eq(" + ind1 + ")").val(t1);                   
          } else if(options.dividend == "X_12_ce"){
             if(options.op == "MDd"){//per/A05/standard_cost/register_tax_deduction  
                var inp = options.par.parent().children().find("input.MD");
                t0 = 1;
                $(inp).each(function( index ) {
                     t0 *= parseInt($(this).val() || 0, 10);
                });                                              
                t0 = t0/parseInt(options.val || 1, 10) * 0.2;
                t1 = Math.min(t0, 1000000); 
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];

             options.par.next().next().next().find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().next().next().next().next().find("input:eq(" + ind1 + ")").val(t1);                   
          } else if(options.dividend == "X_12_d2"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
             if(options.op == "DdA"){                                                
                 t0 = parseInt(options.par.next().next().next().find("input:eq(0)").val() || 0, 10)/parseInt(options.val || 1, 10);
                 t1 = parseInt(options.par.next().next().next().next().find("input:eq(1)").val() || 0, 10) + t0;
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];

             options.par.next().next().next().next().find("input:eq(" + ind0 + ")").val(t0);    
             options.par.next().next().next().next().find("input:eq(" + ind1 + ")").val(t0);                
          } else if(options.dividend == "X_13"){//cor/A02/subject_01/a06             
             if(options.op == "S2ntS2MinS"){                                                 
                 t0 = parseInt(options.val) - parseInt(options.par.find("input.Sm2").val() || 0, 10);
                 t1 = t0 - parseInt(options.par.parents("table").next().find("input.Sm2").val() || 0, 10);
                 t2 = Math.min(t0, parseInt(options.par.parents("table").next().find("input.Min").val() || 0, 10));
                 t3 = t2 - parseInt(options.par.parents("table").next().find("input.Sm").val() || 0, 10);
             }

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3]; 

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.parents("table").next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.parents("table").next().find("input:eq(" + ind2 + ")").val(t2);
             options.par.parents("table").next().find("input:eq(" + ind3 + ")").val(t3);                     
          } else if(options.dividend == "X_13_1a2"){
            if(options.op == "SAS"){//cor/A02/reserve/research                                                 
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10);
                 t1 = t0 + options.par.next().find("input.prAprSm").val();
                 t2 = parseInt(options.my.val() || 0, 10) - t1;                   
            } else {

            } 

            ind0 = options.ind.split("_")[0];
            ind1 = options.ind.split("_")[1]; 
            ind2 = options.ind.split("_")[2];

            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.next().find("input:eq(" + ind1 + ")").val(t1);                 
            options.par.next().find("input:eq(" + ind2 + ")").val(t2);                                
          } else if(options.dividend == "X_13_1a2_a"){
            ind0 = options.ind.split("_")[0];
            ind1 = options.ind.split("_")[1]; 
            ind2 = options.ind.split("_")[2];
            ind3 = options.ind.split("_")[3];
            if(options.op == "ADA"){//cor/A05/international_trade_02/reserve_earnings_calculation_01                                                
                 t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.ADA").val() || 0, 10);
                 t1 = parseInt(options.my.val() || 0, 10)/parseInt(options.par.prev().prev().prev().find("input:eq(0)").val() || 1, 10) *100;
                 t2 = t1 + parseInt(options.par.next().find("input:eq(" + ind3 + ")").val() || 0, 10);                   
            } else {

            } 
            
            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.next().find("input:eq(" + ind1 + ")").val(t1);                 
            options.par.next().find("input:eq(" + ind2 + ")").val(t2);                                
          } else if(options.dividend == "X_13_1bc"){
            ind0 = options.ind.split("_")[0];
            ind1 = options.ind.split("_")[1];
            ind2 = options.ind.split("_")[2];
            if(options.op == "SDnMMIN"){//cor/A02/subject_02/a001                                                
                 t0 = (parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmDnMMIN").val() || 0, 10))/parseInt(options.par.find("input.DdDMMin").val() || 1, 10);
                 t1 = t0 * parseInt(options.par.next().find("input:eq(2)").val() || 0, 10);
                 t2 = Math.min(t1, parseInt(options.par.prev().prev().find("input:eq(0)").val() || 0, 10));
            } else if(options.op == "SmDnMMIN"){//cor/A02/subject_02/a001                                                
                 t0 = (parseInt(options.par.find("input.SDnMMIN").val() || 0, 10) - parseInt(options.val || 0, 10))/parseInt(options.par.find("input.DdDMMin").val() || 1, 10);
                 t1 = t0 * parseInt(options.par.next().find("input:eq(2)").val() || 0, 10);
                 t2 = Math.min(t1, parseInt(options.par.prev().prev().find("input:eq(0)").val() || 0, 10));
            } else {

            }              

            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.next().next().find("input:eq(" + ind1 + ")").val(t1);
            options.par.next().next().next().find("input:eq(" + ind2 + ")").val(t2);
          } else if(options.dividend == "X_13_1c2"){//cor/A02/subject_01/a05 
             if(options.op == "MMinSm"){                                                
                 t0 = parseInt(options.val || 0, 10) * parseFloat(options.par.find("input.M").val() || 0, 10);
                 t1 = Math.min(t0, parseInt(options.par.next().next().find("input:eq(3)").val() || 0, 10));
                 t2 = parseInt(options.par.next().next().next().find("input.S").val() || 0, 10) - t1;
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().next().next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.next().next().next().find("input:eq(" + ind2 + ")").val(t2);                     
          } else if(options.dividend == "X_13_1e2"){//cor/A06/sincerity/aa06 
             if(options.op == "MMinSm"){                                                
                 t0 = parseInt(options.val || 0, 10) * 5/100;
                 t1 = Math.min(t0, parseInt(options.par.next().next().find("input.sum2").val() || 0, 10));
                 t2 = parseInt(options.par.next().next().next().find("input.S").val() || 0, 10) - t1;
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().next().next().next().next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.next().next().next().next().next().find("input:eq(" + ind2 + ")").val(t2);                     
          } else if(options.dividend == "X_13_2a"){
            ind0 = options.ind.split("_")[0];
            ind1 = options.ind.split("_")[1];
            ind2 = options.ind.split("_")[2];
            if(options.op == "Dp2M"){//cor/A02/subject_02/a001                                                
                 t0 = parseInt(options.val || 0, 10) * parseInt(options.par.prev().prev().find("input:eq(2)").val() || 0, 10)/parseInt(options.par.find("input.Ddp2D").val() || 1, 10);
                 t1 = t0 * parseInt(options.par.prev().prev().find("input:eq(3)").val() || 0, 10);
                 t2 = Math.min(t1, parseInt(options.par.prev().prev().prev().prev().find("input:eq(0)").val() || 0, 10));
            } else if(options.op == "Ddp2D"){//cor/A02/subject_02/a001                                                
                 t0 = parseInt(options.par.prev().prev().find("input:eq(2)").val() || 0, 10) * parseInt(options.par.find("input.Dp2M").val() || 0, 10)/parseInt(options.val || 1, 10);
                 t1 = t0 * parseInt(options.par.prev().prev().find("input:eq(3)").val() || 0, 10);
                 t2 = Math.min(t1, parseInt(options.par.prev().prev().prev().prev().find("input:eq(0)").val() || 0, 10));
            } else {

            }              

            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.find("input:eq(" + ind1 + ")").val(t1);
            options.par.next().find("input:eq(" + ind2 + ")").val(t2);
          } else if(options.dividend == "X_13_2d"){//cor/A05/international_trade_02/reserve_earnings_calculation_02
             if(options.op == "ASmarrSmarr"){                                                
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.ASmarrSmarr").val() || 0, 10);
                 t1 = parseInt(options.par.find("input.SarrSmarr").val() || 0, 10) - parseInt(options.par.find("input:eq(6)").val() || 0, 10) - t0;
                 t2 = parseInt(options.par.closest("table").parent().parent().prev().find("input:eq(0)").val() || 0, 10) - parseInt(options.par.next().next().next().find("input:eq(7)").val() || 0, 10) - t1;
             } else if(options.op == "A2SmarrSmarr"){                                                
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.A2SmarrSmarr").val() || 0, 10);
                 t1 = parseInt(options.par.find("input.SarrSmarr").val() || 0, 10) - parseInt(options.par.find("input:eq(3)").val() || 0, 10) - t0;
                 t2 = parseInt(options.par.closest("table").parent().parent().prev().find("input:eq(0)").val() || 0, 10) - parseInt(options.par.next().next().next().find("input:eq(7)").val() || 0, 10) - t1;
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);
             options.par.next().next().next().next().find("input:eq(" + ind2 + ")").val(t2);                   
          } else if(options.dividend == "X_13_a2b"){
             if(options.op == "nSmSmnSmarr"){//cor/A02/subject_02/information_contribution                                                  
                 t0 = parseInt(options.par.next().find("input.SmSmnSmarr").val() || 0, 10) - parseInt(options.val || 0, 10);
                 t1 = parseInt(options.val || 0, 10);
                 t2 = parseInt(options.par.find("input:eq(0)").val() || 0, 10) - parseInt(options.par.find("input.nSmSmnSmarr").val() || 0, 10) - t1;
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2]; 

             options.par.next().find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.next().next().find("input:eq(" + ind2 + ")").val(t2);                      
          } else if(options.dividend == "X_13_ce2"){
             if(options.op == "nAnEnSarr"){//A02/subject_02/information_contribution                                                  
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.par.next().next().next().find("input:eq(2)").val() || 0, 10);
                 t1 = t0;
                 t2 = t1 - parseInt(options.par.next().next().next().next().find("input.Smarrn2").val() || 0, 10) - parseInt(options.par.next().next().next().next().find("input:eq(4)").val() || 0, 10);
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2];

             options.par.next().next().next().find("input:eq(" + ind0 + ")").val(t2);
             options.par.next().next().next().next().next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.next().next().next().next().next().find("input:eq(" + ind2 + ")").val(t0);                      
          } else if(options.dividend == "X_14_1ab2"){
            var ind0 = options.ind.split("_")[0];
            var ind1 = options.ind.split("_")[1];
            var ind2 = options.ind.split("_")[2];
            var ind3 = options.ind.split("_")[3];
            if(options.op == "SmMnSmMinnSmarrSm"){//cor/A02/subject_01/contribution_details                                                
                 t2 = parseInt(options.par.parent().find("input.SMnMinMinSarrSASm").val() || 0, 10) - parseInt(options.val || 0, 10);
                 if(t2 > 0){
                     t2 = t2 * 0.5;
                 } else {
                     t2 = 0;
                 }
                 if(t2 - parseInt(options.par.parent().find("input.MinnSmMinnSmarrSm").val() || 0, 10) > 0){
                    t0 = Math.min(t2 - parseInt(options.par.parent().find("input.MinnSmMinnSmarrSm").val() || 0, 10), 100);//100--> 25번의 값
                 } else {
                    t0 = Math.min(0, 100);//100--> 25번의 값
                 }
                 t1 = parseInt(options.par.parent().find("input.Sarr").val() || 0, 10);
                 t3 = parseInt(options.par.parent().find("input.MinnSmMinnSmarrSm").val() || 0, 10) - t2;
            } else {

            }              

            options.par.next().next().find("input:eq(" + ind2 + ")").val(t2);
            options.par.find("input:eq(" + ind0 + ")").val(t0);

            var inp = options.par.parent().find("input.Smarr");
            $(inp).each(function( index ) {
                 t1 -= parseInt($(this).val() || 0, 10);
            });

            options.par.next().find("input:eq(" + ind1 + ")").val(t1);
            options.par.next().next().find("input:eq(" + ind3 + ")").val(t3);
          } else if(options.dividend == "X_14_2a2"){
             if(options.op == "MSmASm"){//cor/A02/reserve/research                                                  
                 t3 = parseInt(options.val) * parseFloat(options.par.find("input.M").val() || 0, 10);
                 t2 = parseInt(options.par.find("input.SAS").val() || 0, 10) - t3;
                 t1 = t2 + parseInt(options.par.next().find("input.prAprSm").val() || 0, 10);
                 t0 = parseInt(options.par.next().find("input.Sm").val() || 0, 10) - t1;
             } else {

            } 
            options.par.find("input.sum3").val(t3);
            options.par.find("input.sum2").val(t2);
            options.par.next().find("input.sum1").val(t1);                 
            options.par.next().find("input.sum").val(t0);                                
          } else if(options.dividend == "X_14_1b2c"){
            ind0 = options.ind.split("_")[0];
            ind1 = options.ind.split("_")[1];
            ind2 = options.ind.split("_")[2];
            ind3 = options.ind.split("_")[3];
            if(options.op == "DdDMMin"){//cor/A02/subject_02/a001                                                
                 t0 = (parseInt(options.par.find("input.SDnMMIN").val() || 0, 10) - parseInt(options.par.find("input.SmDnMMIN").val() || 0, 10))/parseInt(options.val || 1, 10);
                 t1 = (parseInt(options.val || 1, 10) * parseInt(options.par.next().next().find("input:eq(0)").val() || 0, 10))/parseInt(options.par.next().next().find("input:eq(1)").val() || 1, 10);
                 t2 = t0 * t1;
                 t3 = Math.min(t2, parseInt(options.par.prev().prev().find("input:eq(0)").val() || 0, 10));
            } else {

            }              

            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.next().next().find("input:eq(" + ind1 + ")").val(t1);
            options.par.next().next().find("input:eq(" + ind2 + ")").val(t2);
            options.par.next().next().next().find("input:eq(" + ind3 + ")").val(t3);
          } else if(options.dividend == "X_14_2a2"){              
            if(options.op == "MSmASm"){//cor/A02/reserve/research                                                 
                 t0 = parseInt(options.val || 0, 10) * options.par.find("input.M").val();
                 t1 = parseInt(options.par.find("input.SAS").val() || 0, 10) - t0;
                 t2 = t1 + options.par.next().find("input.prAprSm").val();
                 t3 = parseInt(options.par.find("input.SAS").val() || 0, 10) - t2;                   
            } else {

            } 

            var ind0 = options.ind.split("_")[0];
            var ind1 = options.ind.split("_")[1]; 
            var ind2 = options.ind.split("_")[2];
            var ind3 = options.ind.split("_")[3];

            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.find("input:eq(" + ind1 + ")").val(t1);
            options.par.next().find("input:eq(" + ind2 + ")").val(t2);                 
            options.par.next().find("input:eq(" + ind3 + ")").val(t3);                               
          } else if(options.dividend == "X_15_1a3b"){
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3]; 
             ind4 = options.ind.split("_")[4]; 
             if(options.op == "AarrD"){//cor/A03/deduction/research_develop                                                                             
                 var inp = options.par.find("input.AarrD");
                 t0 = 0, t1 = 0, t2 = 0;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 - parseFloat(options.par.find("input.AarrD:eq(3)").val() || 0, 10);
                 t2 = t1 - parseFloat(options.par.find("input.AarrD:eq(2)").val() || 0, 10);
                 t3 = parseFloat(options.par.find("input.S").val() || 0, 10) - parseFloat(options.par.find("input.AarrD:eq(0)").val() || 0, 10);
             } else {

             } 
        
             options.par.find("td:eq(" + ind0 + ")").children("input").val(t0);  
             options.par.next().find("td:eq(" + ind1 + ")").children("input").val(t0/4);   
             options.par.next().find("td:eq(" + ind2 + ")").children("input").val(t1/3); 
             options.par.next().find("td:eq(" + ind3 + ")").children("input").val(t2/2); 
             options.par.next().next().find("td:eq(" + ind4 + ")").children("input").val(t3);              
          } else if(options.dividend == "X_15_3b2"){//A02/subject_02/information_contribution  
             if(options.op == "SmSmAnEnSarr"){ 
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.prev().prev().prev().find("input:eq(3)").val() || 0, 10);                                                
                 t1 = parseInt(options.val || 0, 10) - t0;
                 t2 = parseInt(options.par.prev().prev().prev().find("input.nAnEnSarr").val() || 0, 10) + t1;
                 t3 = t2;
                 t4 = t3 - parseInt(options.par.next().next().find("input.Smarrn2").val() || 0, 10) - parseInt(options.par.next().next().find("input:eq(1)").val() || 0, 10);                 
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);
             options.par.find("input:eq(" + ind2 + ")").val(t2);
             options.par.next().next().find("input:eq(" + ind3 + ")").val(t3);                 
             options.par.next().next().find("input:eq(" + ind4 + ")").val(t4);                
          } else if(options.dividend == "X_16_1c3e2"){//A02/subject_02/information_contribution  
             if(options.op == "AnSmSmAnEnSarr"){ 
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.AnSmSmAnEnSarr").val() || 0, 10);
                 t1 = parseInt(options.par.next().next().next().find("input.SmSmAnEnSarr").val() || 0, 10) - t0;                                                
                 t2 = parseInt(options.par.next().next().next().find("input.SmSmAnEnSarr").val() || 0, 10) -t1;
                 t3 = parseInt(options.par.find("input.nAnEnSarr").val() || 0, 10) + t2;
                 t4 = t3;
                 t5 = t4 - parseInt(options.par.next().next().next().next().next().find("input:eq(1)").val() || 0, 10) - parseInt(options.par.next().next().next().next().next().find("input:eq(5)").val() || 0, 10);                 
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];
             ind5 = options.ind.split("_")[5];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.next().next().next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.next().next().next().find("input:eq(" + ind2 + ")").val(t2);
             options.par.next().next().next().find("input:eq(" + ind3 + ")").val(t3);
             options.par.next().next().next().next().next().find("input:eq(" + ind4 + ")").val(t4);                 
             options.par.next().next().next().next().next().find("input:eq(" + ind5 + ")").val(t5);            
          } else if(options.dividend == "X_17_1abc2m2"){
            var ind0 = options.ind.split("_")[0];
            var ind1 = options.ind.split("_")[1];
            var ind2 = options.ind.split("_")[2];
            var ind3 = options.ind.split("_")[3];
            var ind4 = options.ind.split("_")[4];
            var ind5 = options.ind.split("_")[5];
            var ind6 = options.ind.split("_")[6];
            if(options.op == "SMnMinMinSarrSASm"){//cor/A02/subject_01/contribution_details                                                
                 t3 = parseInt(options.val || 0, 10) - parseInt(options.par.parent().find("input.SmMnSmMinnSmarrSm").val() || 0, 10);
                 if(t3 > 0){
                     t3 = t3 * 0.5;
                 } else {
                     t3 = 0;
                 }
                 t0 = Math.min(t3, parseInt(options.par.parent().find("input.MinnSmMinnSmarrSm").val() || 0, 10));
                 if(t3 - parseInt(options.par.parent().find("input.MinnSmMinnSmarrSm").val() || 0, 10) > 0){
                    t1 = Math.min(t3 - parseInt(options.par.parent().find("input.MinnSmMinnSmarrSm").val() || 0, 10), 100);//100--> 25번의 값
                 }
                 t2 = parseInt(options.val || 0, 10);
                 t4 = parseInt(options.par.parent().find("input.MinnSmMinnSmarrSm").val() || 0, 10) - t3;
                 t5 = parseInt(options.par.parent().find("input.A").val() || 0, 10) + t3;
                 t6 = parseInt(options.par.parent().find("input.S").val() || 0, 10) - t5;
            } else {

            }              

            options.par.next().next().next().find("input:eq(" + ind3 + ")").val(t3);
            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.next().find("input:eq(" + ind1 + ")").val(t1);

            var inp = options.par.parent().find("input.Smarr");
            $(inp).each(function( index ) {
                 t2 -= parseInt($(this).val() || 0, 10);
            });

            options.par.next().next().find("input:eq(" + ind2 + ")").val(t2);
            options.par.next().next().next().find("input:eq(" + ind4 + ")").val(t4);
            options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind5 + ")").val(t5);
            options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind6 + ")").val(t6);
          } else if(options.dividend == "X_22_1Bb"){//vat/A01/report03/certificate_origin 
             if(options.op == "MinMin"){
                 t0 = Math.min(parseInt(options.val || 0, 10), 300000);
                 t1 = Math.min(t0, parseInt(options.par.parent().parent().prev().prev().find("input.Min").val() || 0, 10));             
             } else {

             } 

             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind1 + ")").val(t1);             
          } else if(options.dividend == "X_23_1bc"){//cor/A03/tax_special_case_01/employ_maintain_earnings_deduction 
             if(options.op == "DEnSMM"){
                 t0 = parseInt(options.val || 0, 10)/parseInt(options.par.find("input.DdEnSMM").val() || 1, 10);
                 t1 = t0;
                 t2 = (t1 - parseInt(options.par.next().next().next().find("input:eq(2)").val() || 0, 10)) * parseInt(options.par.next().next().find("input:eq(1)").val() || 0, 10) * 0.5;                
             } else if(options.op == "DdEnSMM"){
                 t0 = parseInt(options.par.find("input.DEnSMM").val() || 0, 10)/parseInt(options.val || 1, 10);
                 t1 = t0;
                 t2 = (t1 - parseInt(options.par.next().next().find("input:eq(2)").val() || 0, 10)) * parseInt(options.par.next().next().find("input:eq(1)").val() || 0, 10) * 0.5;                
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.prev().prev().find("input:eq(" + ind1 + ")").val(t1);
             options.par.prev().prev().prev().find("input:eq(" + ind2 + ")").val(t2);                 
          } else if(options.dividend == "X_23_1bf"){//cor/A03/tax_special_case_01/employ_maintain_earnings_deduction
             if(options.op == "DEnSMM"){
                 t0 = parseInt(options.val || 0, 10)/parseInt(options.par.find("input.DdEnSMM").val() || 1, 10);
                 t1 = t0;
                 t2 = (parseInt(options.par.prev().prev().prev().find("input:eq(2)").val() || 0, 10) - t1) * parseInt(options.par.find("input:eq(1)").val() || 0, 10) * 0.5;                
             } else if(options.op == "DdEnSMM"){
                 t0 = parseInt(options.par.find("input.DEnSMM").val() || 0, 10)/parseInt(options.val || 1, 10);
                 t1 = t0;
                 t2 = (parseInt(options.par.prev().prev().prev().find("input:eq(2)").val() || 0, 10) - t1) * parseInt(options.val || 0, 10) * 0.5;                
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.prev().prev().find("input:eq(" + ind1 + ")").val(t1);
             options.par.prev().prev().prev().prev().prev().prev().find("input:eq(" + ind2 + ")").val(t2);                 
          } else if(options.dividend == "X_23_1fh"){//cor/A03/tax_special_case_01/a1001
             if(options.op == "DdMA"){
                 var inp = options.par.find("input.Ddarr");
                 t0 = 1;
                 $(inp).each(function( index ) {
                     t0 *= parseInt($(this).val() || 1, 10);
                 });
                 t0 = parseInt(options.val || 0, 10)/ t0;
                 t1 = t0 * parseInt(options.par.prev().prev().prev().find("input:eq(2)").val() || 0, 10);
                 t2 = t1 * parseInt(options.par.next().next().find("input:eq(0)").val() || 0, 10);                
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.prev().prev().prev().prev().prev().prev().find("input:eq(" + ind1 + ")").val(t1);
             options.par.prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(" + ind2 + ")").val(t2);                 
          } else if(options.dividend == "X_23_1er"){//cor/A03/tax_special_case_011/a1001 
             if(options.op == "DMA"){
                 var inp = options.par.find("input.Ddarr");
                 t0 = 1;
                 $(inp).each(function( index ) {
                     t0 *= parseInt($(this).val() || 1, 10);
                 });
                 t0 = parseInt(options.val || 0, 10)/ t0;
                 t1 = t0 * parseInt(options.par.prev().prev().prev().find("input:eq(4)").val() || 0, 10) * 0.5;
                 t2 = t1 + parseInt(options.par.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(0)").val() || 0, 10);               
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.prev().prev().prev().prev().prev().find("input:eq(" + ind1 + ")").val(t1);
             options.par.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(" + ind2 + ")").val(t2);                 
          } else if(options.dividend == "X_24_2Dbo"){// X_2prb1o1
             if(options.op == "SSmMA"){//cor/A03/tax_special_case_01/a1001
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmSmMA").val() || 0, 10);
                 t1 = t0 - parseInt(options.par.find("input:eq(3)").val() || 0, 10);
                 t2 = t1 * parseInt(options.par.closest("table").parent().parent().next().next().next().find("input:eq(3)").val() || 0, 10) * 0.5; 
                 t3 = t2 * parseInt(options.par.closest("table").parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(0)").val() || 0, 10);               
             } else if(options.op == "SmSmMA"){//cor/A03/tax_special_case_01/a1001
                 t0 = parseInt(options.par.find("input.SSmMA").val() || 0, 10) - parseInt(options.val || 0, 10);
                 t1 = t0 - parseInt(options.par.find("input:eq(3)").val() || 0, 10);
                 t2 = t1 * parseInt(options.par.closest("table").parent().parent().next().next().next().find("input:eq(3)").val() || 0, 10) * 0.5; 
                 t3 = t2 * parseInt(options.par.closest("table").parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(0)").val() || 0, 10);               
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);
             options.par.parent().parent().parent().parent().prev().prev().find("input:eq(" + ind2 + ")").val(t2);
             options.par.parent().parent().parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(" + ind3 + ")").val(t3);                 
          } else if(options.dividend == "X_25_1c2ik"){ 
             if(options.op == "AarrEDdMA"){//cor/A03/tax_special_case_01/a1001
                 var inp = options.par.find("input.AarrEDdMA");
                 t0 = 0;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0;
                 t2 = parseInt(options.par.prev().prev().prev().find("input:eq(0)").val() || 0, 10)/(t0 * parseInt(options.par.prev().prev().prev().find("input:eq(1)").val() || 1, 10));
                 t3 = t2 * parseInt(options.par.prev().prev().prev().prev().prev().prev().find("input:eq(2)").val() || 0, 10);
                 t4 = t3 * parseInt(options.par.next().next().find("input:eq(0)").val() || 0, 10);                
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.prev().prev().prev().find("input:eq(" + ind1 + ")").val(t1);
             options.par.prev().prev().prev().find("input:eq(" + ind2 + ")").val(t2);
             options.par.prev().prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(" + ind3 + ")").val(t3);
             options.par.prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("input:eq(" + ind4 + ")").val(t4);                 
          } else if(options.dividend == "X_3a_1cec2j2hm2"){//cor/A03/tax_special_case_011/a1001 X_1c2j2h1m2pc1e1
             if(options.op == "SEDdESmMSmDdMA"){
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.find("input.SmEDdESmMSmDdMA").val() || 0, 10);
                 t1 = t0;
                 t2 = parseInt(options.par.next().next().next().find("input:eq(0)").val() || 0, 10)/(t0 * parseInt(options.par.next().next().next().find("input:eq(1)").val() || 1, 10));
                 t3 = t2;
                 t4 = parseInt(options.par.next().next().next().next().next().next().next().next().next().next().find("input:eq(2)").val() || 0, 10) - t3;  
                 t5 = t4 * parseInt(options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(2)").val() || 0, 10) * 0.5; 
                 t6 = parseInt(options.par.next().next().next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 0, 10) - parseInt(options.val || 0, 10);  
                 t7 = parseInt(options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 0, 10)/(t6 * parseInt(options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 1, 10)); 
                 t8 = t0 * parseInt(options.par.next().next().next().find("input:eq(3)").val() || 0, 10); 
                 t9 = t8 + parseInt(options.par.next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 0, 10);           
             } else if(options.op == "SmEDdESmMSmDdMA"){
                 t0 = parseInt(options.par.find("input.SEDdESmMSmDdMA").val() || 0, 10) - parseInt(options.val || 0, 10);
                 t1 = t0;
                 t2 = parseInt(options.par.next().next().next().find("input:eq(0)").val() || 0, 10)/(t0 * parseInt(options.par.next().next().next().find("input:eq(1)").val() || 1, 10));
                 t3 = t2;
                 t4 = parseInt(options.par.next().next().next().next().next().next().next().next().next().next().find("input:eq(2)").val() || 0, 10) - t3;  
                 t5 = t4 * parseInt(options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(2)").val() || 0, 10) * 0.5; 
                 t6 = parseInt(options.par.next().next().next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 0, 10) - parseInt(options.val || 0, 10);  
                 t7 = parseInt(options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 0, 10)/(t6 * parseInt(options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 1, 10)); 
                 t8 = t0 * parseInt(options.par.next().next().next().find("input:eq(3)").val() || 0, 10); 
                 t9 = t8 + parseInt(options.par.next().next().next().next().next().next().next().next().find("input:eq(0)").val() || 0, 10);           
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];
             ind5 = options.ind.split("_")[5];
             ind6 = options.ind.split("_")[6];
             ind7 = options.ind.split("_")[7];
             ind8 = options.ind.split("_")[8];
             ind9 = options.ind.split("_")[9];

             options.par.find("input:eq(" + ind0 + ")").val(t0); 
             options.par.next().next().next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.next().next().next().find("input:eq(" + ind2 + ")").val(t2);
             options.par.next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind3 + ")").val(t3);
             options.par.next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind4 + ")").val(t4); 
             options.par.next().next().next().next().next().next().next().next().find("input:eq(" + ind5 + ")").val(t5);  
             options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind6 + ")").val(t6); 
             options.par.next().next().next().next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind7 + ")").val(t7);
             options.par.prev().prev().prev().find("input:eq(" + ind8 + ")").val(t8); 
             options.par.prev().prev().prev().prev().prev().find("input:eq(" + ind9 + ")").val(t9); 
          } else if(options.dividend == "X_13_2Da"){//X_21_a
            if(options.op == "SmSmnSmarr"){//cor/A02/subject_02/information_contribution                                                  
                 t0 = parseInt(options.val || 0, 10) - parseInt(options.par.parent().parent().parent().parent().prev().find("input.nSmSmnSmarr").val() || 0, 10);
                 t1 = parseInt(options.val || 0, 10) - t0;
                 t2 = parseInt(options.par.parent().parent().parent().parent().prev().find("input:eq(0)").val() || 0, 10)
                    - parseInt(options.par.parent().parent().parent().parent().prev().find("input:eq(1)").val() || 0, 10)
                    - t1;
            } else {

            } 
            var ind0 = options.ind.split("_")[0];
            var ind1 = options.ind.split("_")[1];
            var ind2 = options.ind.split("_")[2];

            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.find("input:eq(" + ind1 + ")").val(t1);
            options.par.parent().parent().parent().parent().next().find("input:eq(" + ind2 + ")").val(t2);                     
          } else if(options.dividend == "X_12_Ba2"){//X_ta2
             if(options.op == "ASnA"){//A06/common_benefit_01/application_earnings_use                                               
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.par.find("input.A").val() || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10);
                 t1 = t0 + parseInt(options.my.closest("table").next().find("input:eq(3)").val() || 0, 10);
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 

             options.par.parent().parent().next().find("input:eq(" + ind0 + ")").val(t0);  
             options.par.parent().parent().next().find("input:eq(" + ind1 + ")").val(t1);                    
          } else if(options.dividend == "X_12_1Da"){//X_y1tta1
             if(options.op == "AD"){//cor/A04/AA02/based_sell_plan                                                 
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.par.siblings().find("input.AD").val() || 0, 10);
                 t1 = t0/parseInt(options.my.closest("table").parent().parent().prev().find("input:eq(0)").val() || 1, 10);
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 

             options.par.parent().find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().parent().parent().parent().next().find("input:eq(" + ind1 + ")").val(t1);                    
          } else if(options.dividend == "X_13_AE2_a"){//X_c1ty2
             if(options.op == "MnAarrSnMax"){//cor/A03/deduction/a0913 
                 var temp = parseInt(options.par.parent().children(":eq(1)").find("input:eq(0)").val() || 0, 10)
                          - parseInt(options.par.parent().children(":eq(2)").find("input:eq(0)").val() || 0, 10); 
                 t0 = parseInt(options.val || 0, 10)
                 if(temp <= 0){t0 = 0;}
                 t0 *= 20000000; 
                 var inp = options.par.parent().find("input.Aarr");  
                 t1 = 0;               
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t1 -= parseInt(options.par.parent().parent().parent().parent().next().find("input.Smarr").val() || 0, 10);   
                 t2 = Math.max(0, parseInt(options.par.parent().parent().parent().parent().prev().prev().find("input:eq(2)").val() || 0, 10) - t1);                         
             } else {

             } 

             options.par.parent().children(":eq(3)").find("input:eq(1)").val(t0);                
             options.par.parent().parent().parent().parent().parent().children(":eq(7)").find("input:eq(0)").val(t1);  
             options.par.parent().parent().parent().parent().parent().children(":eq(8)").find("input:eq(0)").val(t2);                        
          } else if(options.dividend == "X_13_AE2_b"){//X_d1ty2
             if(options.op == "MnAarrSnMax"){//cor/A03/deduction/a0913 
                 var temp = parseInt(options.par.parent().children(":eq(1)").find("input:eq(0)").val() || 0, 10)
                          - parseInt(options.par.parent().children(":eq(2)").find("input:eq(0)").val() || 0, 10)
                          - parseInt(options.par.parent().children(":eq(3)").find("input:eq(0)").val() || 0, 10); 
                 t0 = parseInt(options.val || 0, 10)
                 if(temp <= 0){t0 = 0;}
                 t0 *= 15000000;  
                 var inp = options.par.parent().find("input.Aarr");  
                 t1 = 0;               
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t1 -= parseInt(options.par.parent().parent().parent().parent().next().find("input.Smarr").val() || 0, 10);   
                 t2 = Math.max(0, parseInt(options.par.parent().parent().parent().parent().prev().prev().find("input:eq(2)").val() || 0, 10) - t1);                         
             } else {

             } 

             options.par.parent().children(":eq(4)").find("input:eq(1)").val(t0);                
             options.par.parent().parent().parent().parent().parent().children(":eq(7)").find("input:eq(0)").val(t1);  
             options.par.parent().parent().parent().parent().parent().children(":eq(8)").find("input:eq(0)").val(t2);                        
          } else if(options.dividend == "X_13_AE2_c"){//X_e1ty2
             if(options.op == "MnAarrSnMax"){//cor/A03/deduction/a0913 
                 var temp = parseInt(options.par.parent().children(":eq(1)").find("input:eq(0)").val() || 0, 10)
                            - parseInt(options.par.parent().children(":eq(2)").find("input:eq(0)").val() || 0, 10)
                            - parseInt(options.par.parent().children(":eq(3)").find("input:eq(0)").val() || 0, 10) 
                            - parseInt(options.par.parent().children(":eq(4)").find("input:eq(0)").val() || 0, 10);
                 t0 = parseInt(options.val || 0, 10)
                 if(temp <= 0){t0 = 0;}
                 t0 *= 10000000; 
                 var inp = options.par.parent().find("input.Aarr");  
                 t1 = 0;               
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t1 -= parseInt(options.par.parent().parent().parent().parent().next().find("input.Smarr").val() || 0, 10);   
                 t2 = Math.max(0, parseInt(options.par.parent().parent().parent().parent().prev().prev().find("input:eq(2)").val() || 0, 10) - t1);                         
             } else {

             } 

             options.par.parent().children(":eq(5)").find("input:eq(1)").val(t0);                
             options.par.parent().parent().parent().parent().parent().children(":eq(7)").find("input:eq(0)").val(t1);  
             options.par.parent().parent().parent().parent().parent().children(":eq(8)").find("input:eq(0)").val(t2);                        
          } else if(options.dividend == "X_13_A3_a"){//X_g1j1l1
             if(options.op == "MAarrMin"){//cor/A03/deduction/a0913 
                 var temp = parseInt(options.par.parent().children(":eq(2)").find("input:eq(0)").val() || 0, 10)
                          - parseInt(options.par.parent().children(":eq(3)").find("input:eq(0)").val() || 0, 10); 
                 t0 = parseInt(options.val || 0, 10)
                 if(temp <= 0){t0 = 0;}
                 t0 *= 20000000;                   
                 var inp = options.par.siblings().find("input.Aarr");  
                 t1 = 0;
                 t1 += t0;               
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 }); 
                 t2 = Math.min(t1, parseInt(options.par.parent().children(":eq(11)").find("input:eq(0)").val() || 0, 10));                         
             } else {

             } 

             options.par.parent().children(":eq(7)").find("input:eq(1)").val(t0);                
             options.par.parent().children(":eq(10)").find("input:eq(0)").val(t1); 
             options.par.parent().children(":eq(12)").find("input:eq(0)").val(t2);                    
          } else if(options.dividend == "X_13_A3_b"){//X_h1j1l1
             if(options.op == "MAarrMin"){//cor/A03/deduction/a0913 
                 var temp = parseInt(options.par.parent().children(":eq(2)").find("input:eq(0)").val() || 0, 10)
                          - parseInt(options.par.parent().children(":eq(3)").find("input:eq(0)").val() || 0, 10) 
                          - parseInt(options.par.parent().children(":eq(7)").find("input:eq(0)").val() || 0, 10); 
                 t0 = parseInt(options.val || 0, 10)
                 if(temp <= 0){t0 = 0;}
                 t0 *= 15000000;                   
                 var inp = options.par.siblings().find("input.Aarr");  
                 t1 = 0;
                 t1 += t0;               
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 }); 
                 t2 = Math.min(t1, parseInt(options.par.parent().children(":eq(11)").find("input:eq(0)").val() || 0, 10));                         
             } else {

             } 

             options.par.parent().children(":eq(8)").find("input:eq(1)").val(t0);                
             options.par.parent().children(":eq(10)").find("input:eq(0)").val(t1); 
             options.par.parent().children(":eq(12)").find("input:eq(0)").val(t2);                    
          } else if(options.dividend == "X_13_A3_c"){//X_i1j1l1
             if(options.op == "MAarrMin"){//cor/A03/deduction/a0913 
                 var temp = parseInt(options.par.parent().children(":eq(2)").find("input:eq(0)").val() || 0, 10)
                            - parseInt(options.par.parent().children(":eq(3)").find("input:eq(0)").val() || 0, 10) 
                            - parseInt(options.par.parent().children(":eq(7)").find("input:eq(0)").val() || 0, 10) 
                            - parseInt(options.par.parent().children(":eq(8)").find("input:eq(0)").val() || 0, 10);
                 t0 = parseInt(options.val || 0, 10)
                 if(temp <= 0){t0 = 0;}
                 t0 *= 15000000;                   
                 var inp = options.par.siblings().find("input.Aarr");  
                 t1 = 0;
                 t1 += t0;               
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 }); 
                 t2 = Math.min(t1, parseInt(options.par.parent().children(":eq(11)").find("input:eq(0)").val() || 0, 10));                         
             } else {

             } 

             options.par.parent().children(":eq(9)").find("input:eq(1)").val(t0);                
             options.par.parent().children(":eq(10)").find("input:eq(0)").val(t1); 
             options.par.parent().children(":eq(12)").find("input:eq(0)").val(t2);                    
          } else if(options.dividend == "X_13_1Ba2"){//X_1ta2
             if(options.op == "AnASnA"){//A06/common_benefit_01/application_earnings_use                                                               
                 t0 = parseInt(options.val || 0, 10) + parseInt(options.my.parent().siblings().find("input.AnASnA").val() || 0, 10);
                 t1 = parseInt(options.par.find("input.ASnA").val() || 0, 10) + t0 - parseInt(options.par.find("input.Sm").val() || 0, 10);
                 t2 = t1 + parseInt(options.par.parent().parent().next().find("input:eq(3)").val() || 0, 10);
             } else if(options.op == "AarrnASnA"){//A06/common_benefit_01/application_earnings_use  
                 var inp = options.par.find("input.AarrnASnA");
                 t0 = 0;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                                             
                 t1 = parseInt(options.par.find("input.ASnA").val() || 0, 10) + parseInt(options.par.find("input.S").val() || 0, 10) - t0 ;
                 t2 = t1 + parseInt(options.par.parent().parent().next().find("input:eq(3)").val() || 0, 10);
             } else {

             } 
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2]; 

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().parent().next().find("input:eq(" + ind1 + ")").val(t1);  
             options.par.parent().parent().next().find("input:eq(" + ind2 + ")").val(t2);                    
          } else if(options.dividend == "X_26_1B5"){//X_1pdb5
             if(options.op == "Maxpr2MMaxTMinSm"){//cor/A02/subject_01/a05 
                 t5 = Math.max(parseInt(options.val || 0, 10), parseInt(options.par.siblings().find("input.Maxpr2MMaxTMinSm").val() || 0, 10));
                 t4 = t5 * 5/100;
                 t3 = Math.max(parseInt(options.par.parents("div.well").prev().prev().find("input.sum4:eq(0)").val() || 0, 10) - t4 - parseInt(options.par.parents("div.well").prev().prev().find("input.MaxTnMinSm").val() || 0, 10), 0);
                 t2 = t4 - parseInt(options.par.parents("div.well").prev().prev().find("input.sum4:eq(0)").val() || 0, 10) + parseInt(options.par.parents("div.well").prev().prev().find("input.MaxTnMinSm").val() || 0, 10) + t3;
                 t1 = Math.min(t2, parseInt(options.par.parents("div.well").prev().prev().find("input.sum2:eq(0)").val() || 0, 10));
                 t0 = parseInt(options.par.parents("div.well").prev().prev().find("input.S").val() || 0, 10) - t1;               
             } else {

             } 
             options.par.siblings().find("input.sum5").val(t5);
             options.par.parents("div.well").prev().prev().find("input.sum4:eq(1)").val(t4);
             options.par.parents("div.well").prev().prev().find("input.sum3").val(t3); 
             options.par.parents("div.well").prev().prev().find("input.sum2:eq(1)").val(t2);
             options.par.parents("div.well").prev().prev().find("input.sum1").val(t1); 
             options.par.parents("div.well").prev().prev().find("input.sum").val(t0);                                 
          } else if(options.dividend == "X_15_1Aa2b2"){//X_122"
             if(options.op == "SarrnMaxTn2MinSm"){//cor/A02/subject_01/a05  
                 inp = options.par.find("input.SmarrnMaxTn2MinSm");
                 t0 = 0; 
                 t0 += parseInt(options.val);

                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });                                                
                 t1 = Math.max(t0 - parseInt(options.par.parents("tr").next().find("input:eq(0)").val() || 0, 10) - parseInt(options.par.parents("tr").next().find("input.MaxTnMinSm").val() || 0, 10), 0);
                 t2 = parseInt(options.par.parents("tr").next().find("input:eq(0)").val() || 0, 10) - t0 + parseInt(options.par.parents("tr").next().find("input.MaxTnMinSm").val() || 0, 10) + t1;
                 t3 = Math.min(t2, parseInt(options.par.parents("tr").prev().find("input:eq(2)").val() || 0, 10));
                 t4 = parseInt(options.par.parents("tr").next().next().find("input.S").val() || 0, 10) - t3;                 
             } else if(options.op == "SmarrnMaxTn2MinSm"){//cor/A02/subject_01/a05  
                 inp = options.par.find("input.SmarrnMaxTn2MinSm");
                 t0 = 0; 
                 t0 += parseInt(options.par.find("input.SarrnMaxTn2MinSm").val() || 0, 10);

                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });                                                
                 t1 = Math.max(t0 - parseInt(options.par.parents("tr").next().find("input:eq(0)").val() || 0, 10) - parseInt(options.par.parents("tr").next().find("input.MaxTnMinSm").val() || 0, 10), 0);
                 t2 = parseInt(options.par.parents("tr").next().find("input:eq(0)").val() || 0, 10) - t0 + parseInt(options.par.parents("tr").next().find("input.MaxTnMinSm").val() || 0, 10) + t1;
                 t3 = Math.min(t2, parseInt(options.par.parents("tr").prev().find("input:eq(2)").val() || 0, 10));
                 t4 = parseInt(options.par.parents("tr").next().next().find("input.S").val() || 0, 10) - t3;                
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3]; 
             ind4 = options.ind.split("_")[4];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.parents("tr").next().find("input:eq(" + ind1 + ")").val(t1);
             options.par.parents("tr").next().find("input:eq(" + ind2 + ")").val(t2);
             options.par.parents("tr").next().next().find("input:eq(" + ind3 + ")").val(t3);                 
             options.par.parents("tr").next().next().find("input:eq(" + ind4 + ")").val(t4);                                
          } else if(options.dividend == "X_14_2Da2"){//X_2ra2
            if(options.op == "MaxTnMinSm"){//cor/A02/subject_01/a05                                                 
                 t0 = Math.max(parseInt(options.par.parents("tr").prev().find("input:eq(5)").val() || 0, 10) - parseInt(options.val || 0, 10) - parseInt(options.par.find("input:eq(0)").val() || 0, 10), 0);
                 t1 = parseInt(options.par.find("input:eq(0)").val() || 0, 10) - parseInt(options.par.parents("tr").prev().find("input:eq(5)").val() || 0, 10) + parseInt(options.val || 0, 10) + t0;
                 t2 = Math.min(t1, parseInt(options.par.parents("tr").prev().prev().find("input:eq(2)").val() || 0, 10));
                 t3 = parseInt(options.par.parents("tr").next().find("input.S").val() || 0, 10) - t2;                   
            } else {

            } 

            ind0 = options.ind.split("_")[0];
            ind1 = options.ind.split("_")[1]; 
            ind2 = options.ind.split("_")[2];
            ind3 = options.ind.split("_")[3];

            options.par.find("input:eq(" + ind0 + ")").val(t0);
            options.par.find("input:eq(" + ind1 + ")").val(t1);
            options.par.parent().parent().parent().parent().next().find("input:eq(" + ind2 + ")").val(t2);                 
            options.par.parent().parent().parent().parent().next().find("input:eq(" + ind3 + ")").val(t3);                                
          } else if(options.dividend == "X_15_2Ba3"){//X_2pta3 
             if(options.op == "SarrSmntS2MinS"){//A02-subject_01:a06 
                 var inp = options.par.find("input.SmarrSmntS2MinS");
                 t0 = 0;
                 t0 += parseInt(options.val);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.find("input.S2ntS2MinS").val() || 0, 10) - t0;
                 t2 = t1 - parseInt(options.par.parent().parent().next().find("input.Sm2").val() || 0, 10);
                 t3 = Math.min(t1, parseInt(options.par.parent().parent().next().find("input.Min").val() || 0, 10));
                 t4 = t3 - parseInt(options.par.parent().parent().next().find("input.Sm").val() || 0, 10);                 
             } else if(options.op == "SmarrSmntS2MinS"){//A02-subject_01:a06 
                 var inp = options.par.find("input.SmarrSmntS2MinS");
                 t0 = 0;
                 t0 += parseInt(options.par.find("input.SarrSmntS2MinS").val() || 0, 10);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.find("input.S2ntS2MinS").val() || 0, 10) - t0;
                 t2 = t1 - parseInt(options.par.parent().parent().next().find("input.Sm2").val() || 0, 10);
                 t3 = Math.min(t1, parseInt(options.par.parent().parent().next().find("input.Min").val() || 0, 10));
                 t4 = t3 - parseInt(options.par.parent().parent().next().find("input.Sm").val() || 0, 10);                
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);
             options.par.parent().parent().next().find("input:eq(" + ind2 + ")").val(t2);
             options.par.parent().parent().next().find("input:eq(" + ind3 + ")").val(t3);
             options.par.parent().parent().next().find("input:eq(" + ind4 + ")").val(t4);                   
          } else if(options.dividend == "X_27_2Bb5"){//X_2ptb5
             if(options.op == "S2arrSmpt2Ept3Smpt2EMinSm"){//A02-subject_01:a06 
                 var inp = options.par.find("input.Sm2arrSmpt2Ept3Smpt2EMinSm");
                 t0 = 0;
                 t0 += options.val;
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.find("input.S").val() || 0, 10) - t0;
                 t2 = t0;
                 t3 = parseInt(options.par.parent().parent().prev().prev().prev().find("input:eq(5)").val() || 0, 10) - t2;
                 t4 = t1;
                 t5 = Math.min(t2, t4);
                 t6 = t5 -  parseInt(options.par.parent().parent().prev().prev().find("input.Sm").val() || 0, 10);                 
             } else if(options.op == "Sm2arrSmpt2Ept3Smpt2EMinSm"){//A02-subject_01:a06 
                 var inp = options.par.find("input.Sm2arrSmpt2Ept3Smpt2EMinSm");
                 t0 = 0;
                 t0 += parseInt(options.par.find("input.S2arrSmpt2Ept3Smpt2EMinSm").val() || 0, 10);
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = parseInt(options.par.find("input.S").val() || 0, 10) - t0;
                 t2 = t0;
                 t3 = parseInt(options.par.parent().parent().prev().prev().prev().find("input:eq(5)").val() || 0, 10) - t2;
                 t4 = t1;
                 t5 = Math.min(t2, t4);
                 t6 = t5 -  parseInt(options.par.parent().parent().prev().prev().find("input.Sm").val() || 0, 10);                
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];
             ind5 = options.ind.split("_")[5];
             ind6 = options.ind.split("_")[6];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.find("input:eq(" + ind1 + ")").val(t1);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind2 + ")").val(t2);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind3 + ")").val(t3);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind4 + ")").val(t4);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind5 + ")").val(t5);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind6 + ")").val(t6);                    
          } else if(options.dividend == "X_26_1Bb2d3"){//X_1ptb2d3
             if(options.op == "ASapt2ESpt4ESMinS"){//A02-subject_01:a06 
                 var inp = options.par.find("input.ASapt2ESpt4ESMinS");
                 t0 = 0;
                 t0 -= parseInt(options.par.find("input.Smapt2ESpt4ESMinS").val() || 0, 10);
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0;
                 t2 = t1 - parseInt(options.par.parent().parent().prev().prev().find("input:eq(4)").val() || 0, 10);
                 t3 = t2;
                 t4 = Math.min(t3, parseInt(options.par.parent().parent().prev().prev().prev().prev().find("input:eq(1)").val() || 0, 10));
                 t5 = t4 - parseInt(options.par.parent().parent().prev().prev().prev().prev().find("input.Sm").val() || 0, 10);                 
             } else if(options.op == "Smapt2ESpt4ESMinS"){//A02-subject_01:a06 
                 var inp = options.par.find("input.ASapt2ESpt4ESMinS");
                 t0 = 0;
                 t0 -= options.val;
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0;
                 t2 = t1 - parseInt(options.par.parent().parent().prev().prev().find("input:eq(4)").val() || 0, 10);
                 t3 = t2;
                 t4 = Math.min(t3, parseInt(options.par.parent().parent().prev().prev().prev().prev().find("input:eq(1)").val() || 0, 10));
                 t5 = t4 - parseInt(options.par.parent().parent().prev().prev().prev().prev().find("input.Sm").val() || 0, 10);                 
             } else {

             } 

             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];
             ind2 = options.ind.split("_")[2];
             ind3 = options.ind.split("_")[3]; 
             ind4 = options.ind.split("_")[4];
             ind5 = options.ind.split("_")[5];

             options.par.find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind1 + ")").val(t1);
             options.par.parent().parent().prev().prev().find("input:eq(" + ind2 + ")").val(t2);
             options.par.parent().parent().prev().prev().prev().prev().find("input:eq(" + ind3 + ")").val(t3);
             options.par.parent().parent().prev().prev().prev().prev().find("input:eq(" + ind4 + ")").val(t4);
             options.par.parent().parent().prev().prev().prev().prev().find("input:eq(" + ind5 + ")").val(t5);                  
          } else if(options.dividend == "X_35_baai2"){
            var ind0 = options.ind.split("_")[0];
            var ind1 = options.ind.split("_")[1];
            var ind2 = options.ind.split("_")[2];
            var ind3 = options.ind.split("_")[3];
            var ind4 = options.ind.split("_")[4];
            if(options.op == "MinnSmMinnSmarrSm"){//cor/A02/subject_01/contribution_details                                                                 
                 t0 = Math.min(parseInt(options.val || 0, 10), parseInt(options.par.parent().find("input.Min").val() || 0, 10));
                 if(parseInt(options.par.parent().find("input.Min").val() || 0, 10) - parseInt(options.val || 0, 10) > 0){
                    t1 = Math.min(parseInt(options.par.parent().find("input.Min").val() || 0, 10) - parseInt(options.val || 0, 10), 100);
                 } else {
                    t1 = Math.min(0, 100);
                 }
                 t2 = parseInt(options.val || 0, 10) - parseInt(options.par.parent().find("input.Min").val() || 0, 10);
                 t3 = parseInt(options.par.parent().find("input.A").val() || 0, 10) + t0;
                 t4 = parseInt(options.par.parent().find("input.S").val() || 0, 10) - t3;
            } else {

            }              

            options.par.prev().prev().find("input:eq(" + ind0 + ")").val(t0);
            options.par.prev().find("input:eq(" + ind1 + ")").val(t1);            
            options.par.next().find("input:eq(" + ind2 + ")").val(t2);
            options.par.next().next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind3 + ")").val(t3);
            options.par.next().next().next().next().next().next().next().next().next().next().next().find("input:eq(" + ind4 + ")").val(t4);
          }
          
        });         
        return this;
     } 


     $.fn.calcTot=function(options){
        $.defaultOptions = {
            op         : "",
            inp        : "",
            tinp       : "",
            op2        : "",
            suminp     : "",
            tsuminp    : "",
            suminp2    : "",
            tsuminp2   : "",
            val        : "",
            par        : "",
            my         : "",
            ind        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t01 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, arr0 = 0, arr1 = 0, arr2 = 0, arr3 = 0, arr4 = 0, tarr0 = 0, tarr1 = 0, tarr2 = 0, tarr3 = 0, tarr4 = 0, tarr5 = 0, ttarr0 = 0, ttarr1 = 0, ttarr2 = 0;   
          if(options.dividend == "T_10_ss"){//nodel, td  022 10
             var ind = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }          
             if(options.op == "Aarr"){                 
                $(options.par.find("input.Aarr")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });                               
             } else if(options.op == "M2"){                                                                               
                arr0 += parseInt(options.my.val() || 0, 10) * parseFloat(options.my.parent().siblings().find("input.M2").val() || 0, 10);             
             } else if(options.op == "Mn"){                                                                               
                arr0 += parseInt(options.my.val() || 0, 10) * parseFloat(options.my.parent().siblings().find("input.M").val() || 0, 10);             
             } else {

             }
 
             options.par.find("td:eq(" + ind[1] + ")").children("input").val(arr0);  

             thisinp = options.par.parent().children(":not(.nodel)").children("td:eq(" + ind[3] + ")").children(); 
             suminp  = options.par.parent().children(":not(.nodel)").children("td:eq(" + ind[4] + ")").children();
             thissum = options.par.parent().children(".nodel").children("td:eq(" + ind[3] + ")").children();  
             sumsum  = options.par.parent().children(".nodel").children("td:eq(" + ind[4] + ")").children(); 

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             thissum.val(t0);
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             sumsum.val(t1);
          } else if(options.dividend == "Tarr_01"){                       
             if(options.op == "one"){ //cor/A03/deduction/deduction_addition_01
                 thissum = options.par.closest("tbody").find("tr").find("input.asum");
                 othersum = options.par.closest("tbody").find("tr").find("input.bsum");
                 tsum = options.par.closest("tbody").find("tr").find("input.oneTwo");
             } else if(options.op == "two"){ //cor/A03/deduction/deduction_addition_01
                 thissum = options.par.closest("tbody").find("tr").find("input.bsum");
                 othersum = options.par.closest("tbody").find("tr").find("input.asum");
                 tsum = options.par.closest("tbody").find("tr").find("input.oneTwo");
             } else if(options.op == "one1"){ //cor/A03/deduction/deduction_addition_01
                 thissum = options.par.closest("tbody").find("tr").find("input.asum1");
                 othersum = options.par.closest("tbody").find("tr").find("input.bsum1");
                 tsum = options.par.closest("tbody").find("tr").find("input.oneTwo1");
             } else if(options.op == "two1"){ //cor/A03/deduction/deduction_addition_01
                 thissum = options.par.closest("tbody").find("tr").find("input.bsum1");
                 othersum = options.par.closest("tbody").find("tr").find("input.asum1");
                 tsum = options.par.closest("tbody").find("tr").find("input.oneTwo1");
             } else {
                
             }               
             
             thisinp = options.par.closest("tbody").find("tr").find("input." + options.op);
                         
             $(thisinp).each(function( index ) {
                tarr0 += parseInt($(this).val() || 0, 10);
             }); 
                          
             thissum.val(tarr0); 

             t = tarr0 + parseInt(othersum.val() || 0, 10);
             tsum.val(t);  
                             
          } else if(options.dividend == "Tarr_10a"){  
             ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1];  
             ind2 = options.ind.split("_")[2];        
             if(options.op == "Mp"){                  
                arr0   += parseInt(options.my.val() || 0, 10) * parseFloat(options.my.parent().siblings().find("input.Mp").val() || 0, 10)/100;                
                thissum = options.par.parent().find("tr").find("input.thissum:eq(" + ind0 + ")");
                suminp  = options.par.parent().find("tr").find("input.sum");  
                sumsum  = options.par.closest("tbody").find("tr").find("input.Tsum");                               
             } else if(options.op == "Mp1"){                  
                arr0 += parseInt(options.my.val() || 0, 10) * parseFloat(options.my.parent().siblings().find("input.Mp1").val() || 0, 10)/100;       
                thissum = options.par.parent().find("tr").find("input.thissum1:eq(" + ind0 + ")");
                suminp  = options.par.parent().find("tr").find("input.sum1");  
                sumsum  = options.par.closest("tbody").find("tr").find("input.Tsum1");                              
             } else {
                 
             }  
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  
             
             thisinp = options.par.parent().find("tr").find("input." + options.op + ":eq(" + ind0 + ")");            
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });

             thissum.val(t0);          
             sumsum.val(t1);
           } else {
             
          }          
          
        });
        return this;
     }

     $.fn.calcN=function(options){
        $.defaultOptions = {
            op         : "",
            dividend   : "",
            par        : "",
            my         : "",
            ind        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, arr0 = 0;  
          if (options.dividend == "T_00_227"){ 
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             if(options.op == "Aarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_17 
                t0 = parseInt(options.my.val() || 0, 10);  
                var inp = options.par.parent().parent().next().find("tbody").children().find("input:eq(" + ind0 + ")");  
                $(inp).each(function( index ) {
                  t0 += parseInt($(this).val() || 0, 10);
                });            
             }
                            
             var thissum = options.par.parent().parent().next().next().find("input:eq(" + ind2 + ")");
                                                                                    
             thissum.val(t0);          
          } else if(options.dividend == "T_00_228"){
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2]; 
             if(options.op == "A"){//cor/A04/AA02/english_exemption_tax
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.AMin:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "Aarr"){//cor/A04/AA02/farming_exemption_tax
                t0 = parseInt(options.my.val() || 0, 10)
                   + parseInt(options.par.parent().children().find("input.AarrMin").val() || 0, 10)
                   + parseInt(options.par.parent().children().find("input.AarrMin2").val() || 0, 10);
             } else if(options.op == "S"){//cor/A04/AA01/financial_struct, cor/A04/combination/physical_division_tax_special
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "Sm"){//cor/A03/local_income_tax/agriculture_special_tax_standard_report, cor/A03/tax_confirmation/a0802, cor/A05/international_trade_01/outside_special_relation_pl 
                t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
             } else if(options.op == "SnM"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01 
                t0 = parseInt(options.my.val() || 0, 10)
                   - parseInt(options.par.parent().children(":eq(6)").find("input:eq(" + ind0 + ")").val() || 0, 10)
                   * parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "MSm"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01 
                t0 = parseInt(options.par.parent().children(":eq(0)").find("input:eq(" + ind0 + ")").val() || 0, 10)
                   - parseInt(options.my.val() || 0, 10)
                   * parseInt(options.par.parent().children(":eq(6)").find("input:eq(" + ind0 + ")").val() || 0, 10);                                
             } else if(options.op == "M"){//cor/A06/business_inpartnership/tax_division, per/A05/tax_confirmation/earnings_tax_standard_report_27
                t0 = (parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.Mp:eq(" + ind2 + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "Mm"){//per/A02/subject/inventory_evaluation_control
                t0 = (parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.MMM:eq(" + ind0 + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "Min"){//cor/A03/deduction/a0913                  
                t0 = Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.par.siblings().find("input.Min").val() || 0, 10));                      
             } else if(options.op == "Min2"){//cor/base/depreciation/a01                  
                t0 = Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.par.siblings().find("input.Min").val() || 0, 10));                      
             } else if(options.op == "AS"){//per/A05/standard_cost/simple_account_book_earnings, per/A03/tax_stsndard/control_calculation
                t0 = parseInt(options.my.val() || 0, 10)
                   + parseInt(options.par.parent().find("input.A:eq(" + ind0 + ")").val() || 0, 10)
                   - parseInt(options.par.parent().find("input.ASm:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "ASm"){//per/A05/standard_cost/revenue_cost, per/A03/tax_stsndard/control_calculation
                t0 = parseInt(options.par.parent().find("input.AS:eq(" + ind0 + ")").val() || 0, 10)
                   - parseInt(options.my.val() || 0, 10)
                   + parseInt(options.par.parent().find("input.A:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "ASarr"){//cor/A05/international_trade_02/oversea_office_build_hh  
                t0 = parseInt(options.my.val() || 0, 10);              
                var inp = options.par.parent().children().find("input.ASmarr");
                $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });                               
             } else if(options.op == "ASmarr"){//cor/A05/international_trade_02/oversea_office_build_hh  
                t0 = parseInt(options.par.parent().children().find("input.ASarr").val() || 0, 10);               
                var inp = options.par.parent().children().find("input.ASmarr");
                $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });                             
             }if(options.op == "Smarr"){//cor/A03/tax_confirmation/tax_stsndard_change 
                t0 = parseInt(options.par.parent().children().find("input.Sarr:eq(" + ind0 + ")").val() || 0, 10);
                var inp = options.par.parent().children().find("input.Smarr:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                    t0 += parseInt($(this).val() || 0, 10);
                });
             } else {

             } 
 
             var thissum = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind2 + ")");                             
             thissum.val(t0); 
          } else if(options.dividend == "T_00_228_a"){  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];  
             var inp;
             if(options.op == "A"){//stk/A05/operation_management/business_hh_table
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.A").val() || 0, 10);               
             } else if(options.op == "Aarr"){//cor/A03/tax_special_case_02/a1301 : cor/A05/international_trade_02/oversea_local_cor_financial_report: cor/A05/international_trade_01/service_trade_normal_price 
                inp = options.par.parent().children().find("input.Aarr:eq(" + ind0 + ")");              
             } else if(options.op == "Aarr2"){//cor/A03/tax_special_case_02/a1301 : cor/A05/international_trade_02/oversea_local_cor_financial_report
                inp = options.par.parent().children().find("input.Aarr2:eq(" + ind0 + ")");
             } else if(options.op == "Aarr3"){//per/A05/standard_cost/revenue_cost
                t0 = parseInt(options.par.parent().find("input.A3:eq(" + ind0 + ")").val() || 0, 10);
                inp = options.par.parent().children().find("input.Aarr3:eq(" + ind0 + ")");
             } else if(options.op == "AarrS"){//cor/A03/tax_confirmation/tax_stsndard_determine
                t0 -= parseInt(options.par.parent().children().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10);
                inp = options.par.parent().children().find("input.AarrS:eq(" + ind0 + ")");                
             } else if(options.op == "Sm"){//cor/A03/tax_confirmation/tax_stsndard_determine
                t0 -= parseInt(options.my.val() || 0, 10);
                inp = options.par.parent().children().find("input.AarrS:eq(" + ind0 + ")");
             } else if(options.op == "ASmarr"){//cor/A06/business_inpartnership/a03-8 
                t0 = parseInt(options.par.parent().find("input.A2").val() || 0, 10);
                inp = options.par.parent().children().find("input.ASmarr");                                                       
             } else if(options.op == "ASmarr2"){//cor/A06/business_inpartnership/a03-6 
                t0 = parseInt(options.par.parent().find("input.A2").val() || 0, 10);
                inp = options.par.parent().children().find("input.ASmarr2");                                                       
             } else if(options.op == "AarrA"){//cor/A05/international_trade_02/oversea_local_cor_financial_report 
                t0 = parseInt(options.par.parent().find("input.A:eq(" + ind0 + ")").val() || 0, 10); 
                inp = options.par.parent().children().find("input.AarrA:eq(" + ind0 + ")");                                                                          
             } else{                  
                                             
             }  

             $(inp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });
             var thissum = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind2 + ")").val(t0);
             thissum.val(t0); 
          } else if(options.dividend == "T_01_223"){           //T_01_003
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];               
             if(options.op == "AMin"){//cor/A04/AA02/english_exemption_tax
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.A").val() || 0, 10); 
                t1 = Math.min(t0, parseInt(options.par.parent().find("input.Min").val() || 0, 10));                      
             } else if(options.op == "SSm"){//cor/A04/combination/combination_tax_special
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.SmSm").val() || 0, 10); 
                t1 = parseInt(options.par.parent().children().find("input.S").val() || 0, 10) - t0;                      
             } else if(options.op == "SmSm"){//cor/A04/combination/combination_tax_special
                t0 = parseInt(options.par.parent().children().find("input.SSm").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                t1 = parseInt(options.par.parent().children().find("input.S").val() || 0, 10) - t0;                      
             } else if(options.op == "AS"){//cor/A06/sincerity/aa07
                t0 = parseInt(options.par.siblings().find("input.A:eq(" + ind0 + ")").val() || 0, 10) + parseInt(options.my.val() || 0, 10);
                t1 = t0 - parseInt(options.par.siblings().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "MS"){//cor/A06/business_inpartnership/semi_clearing_tax_standard_report
                t0 = (parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.Mp").val() || 0, 10)/100).toFixed(2); 
                t1 = t0 - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);                      
             } else if(options.op == "SS"){//cor/A05/international_trade_01/outside_special_relation_pl
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10);  
                t1 = t0 - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind0 + ")").val() || 0, 10);                     
             } else if(options.op == "Sm"){//cor/A05/international_trade_01/outside_special_relation_pl
                t0 = parseInt(options.par.parent().children().find("input.SS:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);  
                t1 = t0 - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind0 + ")").val() || 0, 10);                     
             } else if(options.op == "SmS"){//cor/A03/local_income_tax/agriculture_special_tax_standard_report 
                t0 = parseInt(options.par.parent().children().find("input.S2").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                t1 = t0 - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);                      
             } else if(options.op == "SmSm"){//cor/A03/tax_confirmation/a0802
                t0 = (parseInt(options.par.parent().find("input.MSESSm").val() || 0, 10) - parseInt(options.my.val() || 0, 10))* 0.3;//세율
                t1 = parseInt(options.par.parent().find("input.S").val() || 0, 10) - t0;
             } else if(options.op == "MSnMin"){//cor/base/depreciation/a01
                t0 = parseInt(options.my.val() || 0, 10)
                   * parseInt(options.par.parent().children().find("input.M").val() || 0, 10)
                   - parseInt(options.par.parent().children().find("input.MSmnMin").val() || 0, 10);
                t1 = Math.min(t0, parseInt(options.par.parent().children().find("input.Min2").val() || 0, 10));
             } else if(options.op == "MSmnMin"){//cor/base/depreciation/a01
                t0 = parseInt(options.par.parent().children().find("input.MSnMin").val() || 0, 10)
                   * parseInt(options.par.parent().children().find("input.M").val() || 0, 10)
                   - parseInt(options.my.val() || 0, 10);
                t1 = Math.min(t0, parseInt(options.par.parent().children().find("input.Min2").val() || 0, 10));
             } else if(options.op == "SmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t0 = parseInt(options.par.parent().find("input.Sarr").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.my.val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t1 = parseInt(options.par.parent().find("input.Sarr").val() || 0, 10) - parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);             
             } else if(options.op == "AM"){//cor/A06/business_inpartnership/tax_division
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.A2").val() || 0, 10);
                t1 = (t0 * parseInt(options.par.parent().children("tr:eq(14)").find("input:eq(" + ind0 + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "AD"){//acc/A06/AA05/aaaaa01
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.AD:eq(" + ind0 + ")").val() || 0, 10);
                t1 = parseInt(options.my.val() || 0, 10)/t0;
             } else if(options.op == "ASnA"){//per/A05/standard_cost/revenue_cost
                t0 = parseInt(options.my.val() || 0, 10)
                   + parseInt(options.par.siblings().find("input.ASnA:eq(" + ind0 + ")").val() || 0, 10)
                   - parseInt(options.par.parent().children().find("input.AASmnA:eq(" + ind0 + ")").val() || 0, 10);
                t1 = t0 + parseInt(options.par.parent().children().find("input.A:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "SmM"){//per/A05/tax_confirmation/earnings_tax_standard_report_27
                t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t1 = (t0 * parseInt(options.par.parent().children().find("input.M:eq(" + ind0 + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "MinSm"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction
                t0 = Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.par.parent().children(":eq(12)").find("input:eq(" + ind0 + ")").val() || 0, 10));
                t1 = parseInt(options.par.parent().children(":eq(12)").find("input:eq(" + ind0 + ")").val() || 0, 10) - t0;
             } else if(options.op == "AarrA"){//stk/A05/operation_management/business_hh_table
                t0 = 0;
                var inp = options.par.parent().children().find("input.AarrA");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = parseInt(options.par.parent().children(":eq(0)").find("input:eq(" + ind0 + ")").val() || 0, 10) + t0;
             } else {

             } 
 
             var thissum = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind3 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");                 
           
             thissum.val(t0); 
             thissum1.val(t1);
         } else if(options.dividend == "T_01_227"){ //T_01_047 
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];          
             if(options.op == "AarrSmarr"){//cor/A03/tax_confirmation/a0803                  
                var inp = options.par.parent().children().find("input.AarrSmarr");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = t0;
                var inp2 = options.par.parent().children().find("input.SmarrSmarr");
                $(inp2).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                });                    
             } else{                  
                                             
             }  
             var thissum  = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind3 + ")");
             var thissum1 = options.par.parent().parent().next().find("tbody").children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");
             thissum.val(t0); 
             thissum1.val(t1);
          } else if(options.dividend == "T_01_227_a"){  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];            
             if(options.op == "AarrSmarr"){//cor/A03/tax_confirmation/a0803 
                t0 = parseInt(options.my.val() || 0, 10);                 
                var inp = options.par.parent().parent().parent().parent().siblings().find("input.AarrSmarr");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = t0;
                var inp2 = options.par.parent().parent().parent().parent().siblings().find("input.SmarrSmarr");
                $(inp2).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                });                    
             } else{                  
                                             
             }  
             var thissum  = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")");
             var thissum1 = options.par.parent().parent().parent().parent().parent().parent().next().find("tbody").find("input:eq(" + ind2 + ")");
             thissum.val(t0); 
             thissum1.val(t1);
           } else if(options.dividend == "T_01_227_b"){  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];          
             if(options.op == "SmarrSmarr"){//cor/A03/tax_confirmation/a0803                                  
                var inp = options.par.parent().children().find("input.SmarrSmarr");
                $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                });
                t1 = Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.3 + t0);
                t0 += Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.8 - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10));                      
             } else{                  
                                             
             }  
             
             var thissum  = options.par.parent().parent().next().find("tbody").children(":eq(" + ind1 + ")").find("input:eq(" + ind3 + ")");
             var thissum1 = options.par.parent().parent().next().find("tbody").children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");
             thissum.val(t0); 
             thissum1.val(t1);
           } else if(options.dividend == "T_01_228"){//T_01_048  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var inp;    
             if(options.op == "AarrA"){//cor/A03/deduction/deduction_addition_01, cor/A06/sincerity/aa02, cor/A05/international_trade_01/international_trade_report 
                inp = options.par.parent().children().find("input.AarrA:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = t0 + parseInt(options.par.parent().children().find("input.A:eq(" + ind0 + ")").val() || 0, 10);                      
             } else if(options.op == "AarrA2"){//cor/A03/deduction/deduction_addition_01, cor/A06/sincerity/aa02, cor/A05/international_trade_01/international_trade_report, per/A05/standard_cost/revenue_cost 
                inp = options.par.parent().children().find("input.AarrA2:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = t0 + parseInt(options.par.parent().children().find("input.A2:eq(" + ind0 + ")").val() || 0, 10);                      
             } else if(options.op == "AarrAarr"){//cor/A05/international_trade_02/oversea_local_cor_financial_report 
                var inp = options.par.parent().children().find("input.AarrAarr:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                }); 
                var inp2 = options.par.parent().children().find("input.AarrA:eq(" + ind0 + ")");                  
                $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                }); 
                t1 += t0;                                       
             } else if(options.op == "AarrD"){//cor/A05/international_trade_02/reserve_earnings_sum_apply_range_tax_judge_02
                inp = options.par.parent().find("input.AarrD");
                $(inp).each(function( index ) {
                   t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = (t0 - parseInt(options.par.parent().children(":eq(4)").find("input:eq(0)").val() || 0, 10))/t0*100;                      
             } else if(options.op == "AarrS"){//cor/A04/combination/combination_tax_special, cor/A04/combination/division_tax_special
                inp = options.par.parent().find("input.AarrS");
                $(inp).each(function( index ) {
                    t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = t0 - parseInt(options.par.parent().children(":eq(12)").find("input:eq(0)").val() || 0, 10);                      
             } else if(options.op == "AarrMin"){//cor/A04/AA02/farming_exemption_tax 
                t0 = parseInt(options.my.val() || 0, 10)
                   + parseInt(options.par.parent().find("input.AarrMin2").val() || 0, 10)
                   + parseInt(options.par.parent().find("input.Aarr").val() || 0, 10);
                t1 = parseInt(options.my.val() || 0, 10)
                   + Math.min(parseInt(options.par.parent().children(":eq(1)").find("input:eq(0)").val() || 0, 10), parseInt(options.par.parent().children(":eq(4)").find("input:eq(0)").val() || 0, 10));                      
             } else if(options.op == "AarrMin2"){//cor/A04/AA02/farming_exemption_tax 
                t0 = parseInt(options.my.val() || 0, 10)
                   + parseInt(options.par.parent().find("input.AarrMin").val() || 0, 10)
                   + parseInt(options.par.parent().find("input.Aarr").val() || 0, 10);
                t1 = parseInt(options.par.parent().children(":eq(0)").find("input:eq(0)").val() || 0, 10)
                   + Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.par.parent().children(":eq(4)").find("input:eq(0)").val() || 0, 10));                      
             } else if(options.op == "AarrSnSarr"){//cor/A03/tax_confirmation/tax_stsndard_change
                inp = options.par.parent().children().find("input.AarrSnSarr:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 -= parseInt(options.par.parent().children().find("input.AarrSmnSarr:eq(" + ind0 + ")").val() || 0, 10);
                var inp2 = options.par.parent().children().find("input.Smarr");
                $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 }); 
                t1 = t0 - t1;                      
             } else if(options.op == "AarrSmnSarr"){//cor/A03/tax_confirmation/tax_stsndard_change
                inp = options.par.parent().children().find("input.AarrSnSarr:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 -= parseInt(options.my.val() || 0, 10);
                var inp2 = options.par.parent().children().find("input.Smarr");
                $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 }); 
                t1 = t0 - t1;                      
             } else if(options.op == "ASnSarr"){//cor/A06/business_inpartnership/a03-6, a03-8 
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t1 = t0;
                inp = options.par.parent().children().find("input.ASmarr");                  
                $(inp).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                });                                      
             } else if(options.op == "AASmnSarr"){//cor/A06/business_inpartnership/a03-6, a03-8
                t0 = parseInt(options.par.parent().find("input.A").val() || 0, 10)
                   + parseInt(options.par.parent().find("input.ASnSarr").val() || 0, 10)
                   - parseInt(options.my.val() || 0, 10);
                t1 = t0;
                inp = options.par.parent().children().find("input.ASmarr");                  
                $(inp).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                });                                      
             } else if(options.op == "AASmnA"){//per/A05/standard_cost/revenue_cost
                var inp = options.par.parent().children().find("input.ASnA:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t0 -= parseInt(options.my.val() || 0, 10);
                t1 = t0 + parseInt(options.par.parent().children().find("input.Aarr:eq(" + ind0 + ")").val() || 0, 10);
             } else if(options.op == "ASnAarr"){//per/A05/standard_cost/revenue_cost
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASnAarr:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AASmnAarr:eq(" + ind0 + ")").val() || 0, 10);
                t1 = t0;
                inp = options.par.parent().children().find("input.Aarr2:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                });
             } else if(options.op == "AASmnAarr"){//per/A05/standard_cost/revenue_cost
                inp = options.par.parent().children().find("input.ASnAarr:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t0 -= parseInt(options.my.val() || 0, 10);
                t1 = t0;
                inp = options.par.parent().children().find("input.Aarr2:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                });
             } else if(options.op == "AAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t0 = parseInt(options.my.val() || 0, 10);
                inp = options.par.siblings().find("input.Aa:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = Math.max(t0, parseInt(options.par.parent().children().find("input.Maxa:eq(" + ind0 + ")").val() || 0, 10));
             } else if(options.op == "MnAA"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t0 = parseInt(options.my.val() || 0, 10);
                inp = options.par.siblings().find("input.Aa:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = Math.max(t0, parseInt(options.par.parent().children().find("input.Maxa:eq(" + ind0 + ")").val() || 0, 10));
             } else if(options.op == "AarrSnAS"){//per/A03/tax_stsndard/control_calculation                
                var inp = options.par.parent().find("input.AarrSnAS");                  
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t0 -= parseInt(options.par.parent().find("input.SmarrnAS").val() || 0, 10);
                t1 = t0 + parseInt(options.par.parent().find("input.AS").val() || 0, 10) - parseInt(options.par.parent().find("input.ASm").val() || 0, 10);
             } else if(options.op == "SmarrnAS"){//per/A03/tax_stsndard/control_calculation                
                var inp = options.par.parent().find("input.AarrSnAS");                  
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t0 -= parseInt(options.my.val() || 0, 10);
                t1 = t0 + parseInt(options.par.parent().find("input.AS").val() || 0, 10) - parseInt(options.par.parent().find("input.ASm").val() || 0, 10);
             } else{                  
                                             
             } 

             var thissum  = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind3 + ")");             
             var thissum1 = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");
             thissum.val(t0); 
             thissum1.val(t1);  
           } else if(options.dividend == "T_02_223"){//T_02_043  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];         
             if(options.op == "ASnASnSarr"){//cor/A06/business_inpartnership/a03-6, a03-8                
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASnASnSarr").val() || 0, 10)
                   - parseInt(options.par.parent().find("input.AASmnASnSarr").val() || 0, 10);
                t1 = t0 + parseInt(options.par.parent().find("input.ASnSarr").val() || 0, 10)
                   - parseInt(options.par.parent().find("input.AASmnSarr").val() || 0, 10); 
                t2 = t1;
                var inp = options.par.parent().find("input.ASmarr");
                $(inp).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                });                      
             } else if(options.op == "AASmnASnSarr"){//cor/A06/business_inpartnership/a03-6                                                
                var inp = options.par.parent().find("input.ASnASnSarr");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 -= parseInt(options.my.val() || 0, 10); 
                t1 = t0 + parseInt(options.par.parent().find("input.ASnSarr").val() || 0, 10) - parseInt(options.par.parent().find("input.AASmnSarr").val() || 0, 10); 
                t2 = t1;
                var inp2 = options.par.parent().find("input.ASmarr");
                $(inp2).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                });                     
             } else if(options.op == "SMS"){//cor/A06/business_inpartnership/semi_clearing_tax_standard_report
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.SmMS").val() || 0, 10); 
                t1 = (t0 * parseInt(options.par.parent().children().find("input.MS").val() || 0, 10)/100).toFixed(2);                      
             } else if(options.op == "SmMS"){//cor/A06/business_inpartnership/semi_clearing_tax_standard_report
                t0 =  parseInt(options.par.parent().children().find("input.SMS").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                t1 = (t0 * parseInt(options.par.parent().children().find("input.MS").val() || 0, 10)/100).toFixed(2);                      
             } else if(options.op == "SmarrAM"){//cor/A06/business_inpartnership/tax_division
                var inp = options.par.parent().find("input.SmarrAM");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.par.parent().children().find("input.Sarr").val() || 0, 10) - t0; 
                t1 = t0 + parseInt(options.par.parent().children(":eq(12)").find("input:eq(" + ind0 + ")").val() || 0, 10);
                t2 = (t1 * parseInt(options.par.parent().children(":eq(14)").find("input:eq(" + ind0 + ")").val() || 0, 10)/100).toFixed(2);                    
             } else if(options.op == "MSS"){//cor/A06/business_inpartnership/tax_division
                t0 = (parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.Mp").val() || 0, 10)/100).toFixed(2); 
                t1 = (t0 - parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind0 + ")").val() || 0, 10)).toFixed(2);
                t2 = (t1 - parseInt(options.par.parent().children(":eq(15)").find("input:eq(" + ind0 + ")").val() || 0, 10)).toFixed(2);                    
             } else if(options.op == "SarrSM"){//per/A05/tax_confirmation/earnings_tax_standard_report_27
                t0 = parseInt(options.my.val() || 0, 10);
                var inp = options.par.parent().find("input.SmarrSM:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                }); 
                t1 = t0 - parseInt(options.par.parent().children().find("input.SmM:eq(" + ind0 + ")").val() || 0, 10);
                t2 = (t1 * parseInt(options.par.parent().children().find("input.M:eq(" + ind0 + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "SmarrSM"){//per/A05/tax_confirmation/earnings_tax_standard_report_27
                t0 = parseInt(options.par.parent().children().find("input.SarrSM:eq(" + ind0 + ")").val() || 0, 10);
                var inp = options.par.parent().children().find("input.SmarrSM:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                }); 
                t1 = t0 - parseInt(options.par.parent().children().find("input.SmM:eq(" + ind0 + ")").val() || 0, 10);
                t2 = (t1 * parseInt(options.par.parent().children().find("input.M:eq(" + ind0 + ")").val() || 0, 10)/100).toFixed(2);
             } else{                  
                                             
             }  
             options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val(t1);  
             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val(t2);
           } else if(options.dividend == "T_02_223_a"){//T_02_043_a  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];          
             if(options.op == "SSmarrSmarr"){//cor/A03/tax_confirmation/a0803                  
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.siblings().find("input.SmSmarrSmarr").val() || 0, 10); 
                options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
                
                var inp = options.par.parent().children().find("input.SmarrSmarr");
                $(inp).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                });
                t2 = Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.3 + t1);
                t1 += Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.8 - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10));                      
             } else if(options.op == "SmSmarrSmarr"){//cor/A03/tax_confirmation/a0803                  
                t0 = parseInt(options.par.siblings().find("input.SSmarrSmarr").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
                
                var inp = options.par.parent().children().find("input.SmarrSmarr");
                $(inp).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                });
                t2 = Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.3 + t1);
                t1 += Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.8 - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10));                      
             } else if(options.op == "ASmarrSmarr"){//cor/A03/tax_confirmation/a0803                  
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASmarrSmarr").val() || 0, 10); 
                options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
                
                var inp = options.par.parent().children().find("input.SmarrSmarr");
                $(inp).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                });
                t2 = Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.3 + t1);
                t1 += Math.round(parseInt(options.par.siblings().find("input.M").val() || 0, 10) * 0.8 - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10));                      
             } else{                  
                                             
             }  
             
             options.par.parent().parent().next().find("input:eq(" + ind2 + ")").val(t1);
             options.par.parent().parent().next().find("input:eq(" + ind3 + ")").val(t2);
           } else if(options.dividend == "T_02_225"){//T_02  
             /*ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2]; 
             ind3 = options.ind.split("_")[3];*/ 
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }          
             if(options.op == "AMMin"){//cor/A03/deduction/a0913                  
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.AMMin").val() || 0, 10); 
                t[1] = t[0] * 10000000; 
                t[2] = Math.min(t[1], parseInt(options.par.parent().find("input.Min").val() || 0, 10));                      
             } else if(options.op == "ASS"){//cor/A03/local_income_tax/agriculture_special_tax_standard_report                  
                t[0] = parseInt(options.my.val() || 0, 10) + options.par.parent().children().find("input.A").val(); 
                t[1] = t[0] - options.par.parent().children().find("input.SmS").val(); 
                t[2] = t[1] - options.par.parent().children().find("input.Sm").val();                      
             } else if(options.op == "MaxMSm"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01
                t[0] = Math.max(parseInt(options.my.val() || 0, 10),parseInt(options.par.parent().children(":eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[1] = t[0] * parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = parseInt(options.par.parent().children(":eq(0)").find("input:eq(" + ind[0] + ")").val() || 0, 10)
                     - t[1] * parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "DMSm"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01
                t[0] = parseInt(options.my.val() || 0, 10)/parseInt(options.par.parent().children(":eq(2)").find("input:eq(" + ind[0] + ")").val() || 1, 10);
                t[1] = t[0] * parseInt(options.par.parent().children(":eq(5)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = parseInt(options.par.parent().children(":eq(0)").find("input:eq(" + ind[0] + ")").val() || 0, 10)
                     - t[1]
                     * parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "SMinSm"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.closest("tbody").children("tr:eq(10)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                if(t[0] < 0)t[0] = 0;
                t[1] = Math.min(t[0], parseInt(options.par.closest("tbody").children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[2] = t[1] - t[0];
             } else if(options.op == "AarrnASnS"){//cor/A05/international_trade_02/oversea_local_cor_financial_report
                var inp = options.par.closest("tbody").children().find("input.AarrnASnS");
                t[0] = 0;
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = parseInt(options.par.parent().children(":eq(15)").find("input:eq(" + ind[0] + ")").val() || 0, 10) + t[0] - parseInt(options.par.parent().children(":eq(21)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().children(":eq(25)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "AarrnSmSmnS"){//cor/A05/international_trade_02/oversea_local_cor_financial_report
                var inp = options.par.parent().children().find("input.AarrnSmSmnS");
                t[0] = 0;
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = parseInt(options.par.parent().children(":eq(15)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[0] + parseInt(options.par.parent().children(":eq(21)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().children(":eq(25)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "SSMin"){ //cor/A02/subject_01/a08, cor/connection/report/connection_reception_control_01
                 t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.siblings().find("input.SSmMin").val() || 0, 10);
                 t[1] = t[0] - parseInt(options.par.parent().children(":eq(16)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                 t[2] = Math.min(t[0], parseInt(options.par.parent().children(":eq(16)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
             } else if(options.op == "SSmMin"){ ///corA02/subject_01/a08, cor/connection/report/connection_reception_control_01
                 t[0] = parseInt(options.par.siblings().find("input.SSMin").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 t[1] = t[0] - parseInt(options.par.parent().children(":eq(16)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                 t[2] = Math.min(t[0], parseInt(options.par.parent().children(":eq(16)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
             } else if(options.op == "SmAS"){//cor/A03/tax_confirmation/cor_tax_middle_prepayment                
                t[0] = parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);  
                t[1] = t[0] + parseInt(options.par.parent().children(":eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[2] = t[1] - parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10);          
             } else if(options.op == "ASmarrnAS"){//cor/A03/tax_confirmation/cor_tax_middle_prepayment                
                t[0] = parseInt(options.par.parent().children(":eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10);               
                var inp = options.par.parent().find("input.ASmarrnAS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });  
                t[1] = t[0] - parseInt(options.par.parent().children(":eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[2] = t[1] + parseInt(options.par.parent().children(":eq(10)").find("input:eq(" + ind[0] + ")").val() || 0, 10);          
             } else if(options.op == "AarrnSmAAnS"){//cor/A06/nonprofit/cor_tax_agriculture_special_tax_standard_report 
                t[0] = 0;  
                var inp = options.par.parent().find("input.AarrnSmAAnS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                }); 
                t[1] = t[0] + parseInt(options.par.parent().children().find("input.A").val() || 0, 10); 
                t[2] = t[1] + parseInt(options.par.parent().children().find("input.A2").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm2").val() || 0, 10);  
                t[3] = t[2] - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "MnSAAnS"){//cor/A06/nonprofit/cor_tax_agriculture_special_tax_standard_report   
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.MnSAAnS").val() || 0, 10) * 3/10000, 2); 
                t[1] = t[0] + parseInt(options.par.parent().children().find("input.A2").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm2").val() || 0, 10);  
                t[3] = t[2] - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "SmAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A4").val() || 0, 10) + parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "SAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A4").val() || 0, 10) - parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "SmnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.SS2").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] + parseInt(options.par.parent().find("input.AA2").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "SAnSmnAS"){//per/A05/standard_cost/simple_account_book_earnings
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSmnAS:eq(" + ind[0] + ")").val() || 0, 10) + parseInt(options.par.siblings().find("input.SAnSmnAS:eq(" + ind[0] + ")").val() || 0, 10);
                t[1] = parseInt(options.par.parent().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                t[2] = t[1] + parseInt(options.par.parent().find("input.AS:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.parent().find("input.ASm:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "SmAnSmnAS"){//per/A05/standard_cost/simple_account_book_earnings
                t[0] = 0;
                var inp = options.par.parent().find("input.SAnSmnAS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] = t[0] - parseInt(options.my.val() || 0, 10);
                t[1] = parseInt(options.par.parent().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                t[2] = t[1] + parseInt(options.par.parent().find("input.AS:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.parent().find("input.ASm:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "SAnSnAS"){//per/A05/standard_cost/simple_account_book_earnings
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSnAS:eq(" + ind[0] + ")").val() || 0, 10) + parseInt(options.par.siblings().find("input.SAnSnAS:eq(" + ind[0] + ")").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.AS:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.parent().find("input.ASm:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "SmAnSnAS"){//per/A05/standard_cost/simple_account_book_earnings
                t[0] = 0;
                var inp = options.par.parent().find("input.SAnSnAS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] = t[0] - parseInt(options.my.val() || 0, 10);
                t[1] = parseInt(options.par.parent().find("input.Sm:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                t[2] = t[1] + parseInt(options.par.parent().find("input.AS:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.parent().find("input.ASm:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "MAMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = parseInt(options.par.parent().children().find("input.Mp4:eq(" + ind[0] + ")").val() || 0, 10) * parseInt(options.my.val() || 0, 10);
                t[1] = t[0] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = Math.max(t[1], 0);         
             } else if(options.op == "MnAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = parseInt(options.par.parent().children().find("input.Mpa2:eq(" + ind[0] + ")").val() || 0, 10) * parseInt(options.my.val() || 0, 10);
                t[1] = t[0];
                var inp = options.par.parent().children().find("input.Aa2:eq(" + ind[0] + ")");                  
                $(inp).each(function( index ) {
                     t[1] += parseInt($(this).val() || 0, 10);
                });
                t[2] = Math.max(t[1], parseInt(options.par.parent().children().find("input.Maxa2:eq(" + ind[0] + ")").val() || 0, 10));
             } else if(options.op == "MnAAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.Mpa:eq(" + ind0 + ")").val() || 0, 10);
                t1 = parseInt(options.par.parent().children().find("input.AAAnMax:eq(" + ind0 + ")").val() || 0, 10);
                var inp = options.par.parent().children().find("input.Aa:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                });
                t2 = Math.max(t1, parseInt(options.par.parent().children().find("input.Maxa:eq(" + ind0 + ")").val() || 0, 10));
             } else if(options.op == "MMM"){//per/A02/subject/inventory_evaluation_control
                t[0] = (parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children(":eq(5)").find("input.Mm:eq(0)").val() || 0, 10)/100).toFixed(2);
                t[1] = (parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children(":eq(7)").find("input.Mm:eq(0)").val() || 0, 10)/100).toFixed(2);
                t[2] = (parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children(":eq(9)").find("input.Mm:eq(0)").val() || 0, 10)/100).toFixed(2);
             } else{                  
                                             
             }               
             for(var i = 1; i < options.ind.split("_").length; i++){
                 options.par.parent().children(":eq(" + ind[i] + ")").find("input:eq(" + ind[0] + ")").val(t[i - 1]);
             }
             /*options.par.closest("tbody").children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
             options.par.closest("tbody").children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val(t1);  
             options.par.closest("tbody").children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val(t2);*/
           } else if(options.dividend == "T_03_225"){//T_03    
             /*ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2]; 
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];*/
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }                    
             if(options.op == "DdMinMSm"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01
                t[0] = parseInt(options.par.closest("tbody").children("tr:eq(3)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/parseInt(options.my.val() || 1, 10);
                t[1] = Math.max(parseInt(options.my.val() || 0, 10),parseInt(options.par.closest("tbody").children("tr:eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[2] = t[0] * t[1];
                t[3] = parseInt(options.par.closest("tbody").children("tr:eq(0)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[2] * parseInt(options.par.closest("tbody").children("tr:eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "MDnSmMinSm"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.closest("tbody").children("tr:eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/parseInt(options.par.closest("tbody").children("tr:eq(9)").find("input:eq(" + ind[0] + ")").val() || 1, 10);
                t[1] = parseInt(options.par.closest("tbody").children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                if(t[1] < 0)t[1] = 0;
                t[2] = Math.min(t1, parseInt(options.par.closest("tbody").children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[3] = t[1] - t[2];
             } else if(options.op == "MDdnSmMinSm"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction
                t[0] = parseInt(options.par.closest("tbody").children("tr:eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10) * parseInt(options.par.closest("tbody").children("tr:eq(8)").find("input:eq(" + ind[0] + ")").val() || 1, 10)/parseInt(options.my.val() || 1, 10);
                t[1] = parseInt(options.par.closest("tbody").children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                if(t[1] < 0)t[1] = 0;
                t[2] = Math.min(t[1], parseInt(options.par.closest("tbody").children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[3] = t[1] - t[2];
             } else if(options.op == "AarrSmnASnS"){//cor/A05/international_trade_02/oversea_local_cor_financial_report
                var inp = options.par.closest("tbody").children().find("input.AarrSmnASnS");
                t[0] = 0;
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = parseInt(options.par.closest("tbody").children("tr:eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                t[2] = t[1] + parseInt(options.par.closest("tbody").children("tr:eq(16)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.closest("tbody").children("tr:eq(21)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.closest("tbody").children("tr:eq(22)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "ASnMSS"){//cor/A06/business_inpartnership/tax_division
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASnMSS").val() || 0, 10) - parseInt(options.par.siblings().find("input.SmAAnMSS").val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.siblings().find("input.MSS").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.siblings().find("input.S2").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.siblings().find("input.S").val() || 0, 10);
             } else if(options.op == "SmAAnMSS"){//cor/A06/business_inpartnership/tax_division
                t[0] = 0;
                t[0] = parseInt(options.my.val() || 0, 10);
                var inp = options.par.parent().find("input.ASnMSS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] * parseInt(options.par.siblings().find("input.MSS").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.siblings().find("input.S2").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.siblings().find("input.S").val() || 0, 10);
             } else if(options.op == "SmarrMAS"){//cor/A06/sincerity/aa07
                t[0] = parseInt(options.par.siblings().find("input.S2").val() || 0, 10) - parseInt(options.my.val() || 0, 10) - parseInt(options.par.siblings().find("input.SmarrMAS").val() || 0, 10);
                t[1] = t[0] * 0.5;
                t[2] = t[1] + parseInt(options.par.siblings().find("input.AS:eq(" + ind[0] + ")").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.siblings().find("input.Sm:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "MinASmMin"){//cor/A02/subject_01/a08, cor/connection/report/connection_reception_control_01
                t[0] = Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10)*10/100);
                t[1] = t[0] + parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = parseInt(options.par.parent().children("tr:eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[1];
                t[3] = Math.min(t[1], parseInt(options.par.parent().children(":eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
             } else if(options.op == "MSarrAS"){//cor/A03/tax_confirmation/cor_tax_middle_prepayment                
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.siblings().find("input.MpSarrAS:eq(" + ind[0] + ")").val() || 1, 10)/100;  
                t[1] = t[0];              
                var inp = options.par.parent().find("input.ASmarrnAS");
                $(inp).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });  
                t[2] = t[1] + parseInt(options.par.parent().children(":eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[3] = t[2] - parseInt(options.par.parent().children(":eq(10)").find("input:eq(" + ind[0] + ")").val() || 0, 10);          
             } else if(options.op == "MAnSAnS"){//cor/A06/nonprofit/cor_tax_agriculture_special_tax_standard_report  
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.M").val() || 0, 10)/100, 2); 
                t[1] = t[0] + parseInt(options.par.parent().children().find("input.A3").val() || 0, 10); 
                t[2] = t[1] + parseInt(options.par.parent().children().find("input.A").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm2").val() || 0, 10);  
                t[3] = t[2] - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "MarrAnSAnS"){//cor/A06/nonprofit/cor_tax_agriculture_special_tax_standard_report   
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.MarrAnSAnS").val() || 0, 10) * 3/10000, 2); 
                t[1] = t[0] + parseInt(options.par.parent().children().find("input.A4").val() || 0, 10); 
                t[2] = t[1] + parseInt(options.par.parent().children().find("input.A").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm2").val() || 0, 10);  
                t[3] = t[2] - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "ASmarrAarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.siblings().find("input.Sarr").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "AAarrSmarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.siblings().find("input.Sarr").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "ASmSAnSAnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] =  parseInt(options.par.parent().find("input.AA4").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.ASmSAnSAnAnS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[0] += parseInt(options.par.parent().find("input.ASSAnSAnAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmSm2").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.SmSm").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "ASSAnSAnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] =  parseInt(options.par.parent().find("input.AA5").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.ASmSAnSAnAnS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[0] += parseInt(options.par.parent().find("input.ASSAnSAnAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmSm2").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.SmSm").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AnSmAAnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.AA3").val() || 0, 10);
                t[1] = parseInt(options.par.parent().find("input.AA5").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnAnS").val() || 0, 10) - t[0];
                t[2] = t[1] + parseInt(options.par.parent().find("input.SmSm").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "ASmarrAnSnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.AA").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.ASmarrAnSnAnS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[0] += parseInt(options.par.parent().find("input.SarrAnSnAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmnAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.AA2").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "SarrAnSnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.AA").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.ASmarrAnSnAnS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[0] += parseInt(options.my.val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmnAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.AA2").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "SMAMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29 ????
                t[0] = parseInt(options.par.parent().children().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[3] = Math.max(t[2], 0);         
             } else{                  
                                             
             } 
             for(var i = 1; i < options.ind.split("_").length; i++){
                 options.par.parent().children(":eq(" + ind[i] + ")").find("input:eq(" + ind[0] + ")").val(t[i - 1]);
             }
             /*options.par.closest("tbody").children("tr:eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
             options.par.closest("tbody").children("tr:eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val(t1);  
             options.par.closest("tbody").children("tr:eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val(t2); 
             options.par.closest("tbody").children("tr:eq(" + ind4 + ")").find("input:eq(" + ind0 + ")").val(t3);*/ 
                             
           } else if(options.dividend == "T_03_225_a"){//T_03_04b  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];           
             if(options.op == "MASS"){//cor/A03/local_income_tax/agriculture_special_tax_standard_report                  
                t0 = parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.MASS").val() || 0, 10) * 3/10000; 
                t1 = t0 + parseInt(options.par.parent().parent().parent().parent().parent().children().find("input.ASS").val() || 0, 10);
                t2 = t1 - parseInt(options.par.parent().parent().parent().parent().parent().children().find("input.SmS").val() || 0, 10); 
                t3 = t2 - parseInt(options.par.parent().parent().parent().parent().parent().children().find("input.Sm").val() || 0, 10);                      
             } else{                  
                                             
             }  
             options.par.parent().parent().parent().parent().parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().parent().parent().parent().parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val(t1);
             options.par.parent().parent().parent().parent().parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val(t2);
             options.par.parent().parent().parent().parent().parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")").val(t3);
           } else if(options.dividend == "T_03_225_b"){//T_03_04b_a  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];           
             if(options.op == "ASnMnMSarrnMSarr"){//cor/A03/tax_confirmation/a0803                  
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.A").val() || 0, 10)
                   - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10); 
                t1 = Math.round(t0 * 0.3);
                t3 = t1;
                var inp = options.par.parent().children().find("input.SmarrSmarr");
                $(inp).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                });
                t3 += t2;
                t2 += Math.round(t0 * 0.8 - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10));                      
             } else{                  
                                             
             }  
             options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val(t1);
             options.par.parent().parent().next().find("input:eq(" + ind3 + ")").val(t2);
             options.par.parent().parent().next().find("input:eq(" + ind4 + ")").val(t3);
           } else if(options.dividend == "T_03_225_c"){//T_03_40  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "ASnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.A2").val() || 0, 10)
                     - parseInt(options.my.val() || 0, 10)
                     + parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else {

             } 
             
             t[1] = t[0];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[1] += parseInt($(this).val() || 0, 10);
                });                                                            
                t[2] = t[1]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.my.val() || 0, 10)
                      - parseInt(options.par.parent().children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[3] = t[1] - parseInt(options.par.parent().children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10)
           
             for(var j = 0; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             }                       
           } else if(options.dividend == "T_03_225_d"){//T_03_41  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "ASnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A2").val() || 0, 10) + parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.AASmnAAnSmarrAnS").val() || 0, 10);  
                t[1] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[0] + parseInt(options.par.parent().find("input.Aarr:eq(0)").val() || 0, 10); 
                t[2] = t[1]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);           
             } else if(options.op == "AASmnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A2").val() || 0, 10) + parseInt(options.par.parent().find("input.ASnAAnSmarrAnS:eq(1)").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                t[1] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[0] + parseInt(options.par.parent().find("input.Aarr:eq(0)").val() || 0, 10); 
                t[2] = t[1]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);                            
             } else if(options.op == "ASnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.A2").val() || 0, 10);
                t[1] = t[0] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[2] = t[1]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "SnSAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = parseInt(options.par.parent().find("input.S2").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[2] = t[1]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else {

             }                                                                                                        
             for(var j = 0; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             }                        
           } else if(options.dividend == "T_03_225_e"){//T_03_42  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "SmMnAAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = parseInt(options.par.parent().children().find("input.Sa:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.parent().children().find("input.MnAAAnMax").val() || 0, 10)/100;
                t[2] = t[1] + parseInt(options.par.parent().children().find("input.AAAnMax:eq(" + ind[0] + ")").val() || 0, 10);
                var inp = options.par.parent().children().find("input.Aa:eq(" + ind[0] + ")");                  
                $(inp).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = Math.max(t[2], parseInt(options.par.parent().children().find("input.Maxa:eq(" + ind[0] + ")").val() || 0, 10));
             } else {

             }                                                                                                        
             for(var j = 1; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val(t[j -1]);
             }                        
           } else if(options.dividend == "T_04_225"){//T_04    
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }                    
             if(options.op == "ASSnASnS"){//cor/A05/international_trade_02/oversea_local_cor_financial_report, per/appending/international_trade/oversea_local_cor_financial_report
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASSnASnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().children(":eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().children(":eq(16)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.parent().children(":eq(21)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().children(":eq(22)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "ASmSnASnS"){//cor/A05/international_trade_02/oversea_local_cor_financial_report
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASmSnASnS").val() || 0, 10);
                t[1] = parseInt(options.par.parent().children(":eq(1)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                t[2] = t[1] - parseInt(options.par.parent().children(":eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().children(":eq(16)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.parent().children(":eq(21)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().children(":eq(22)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "ASnESarrAM"){//cor/A06/business_inpartnership/tax_division
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.A").val() || 0, 10) - parseInt(options.par.siblings().find("input.SmAAnESarrAM").val() || 0, 10);
                t[1] = t[0];
                t[2] = t[1]
                var inp = options.par.parent().find("input.SmarrAM");
                $(inp).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] + parseInt(options.par.parent().children(":eq(12)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = (t[3] * parseInt(options.par.parent().children(":eq(14)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "SmAAnESarrAM"){//cor/A06/business_inpartnership/tax_division
                t[0] = parseInt(options.par.siblings().find("input.A").val() || 0, 10) + parseInt(options.par.siblings().find("input.ASnESarrAM").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0];
                t[2] = t[1]
                var inp = options.par.parent().find("input.SmarrAM");
                $(inp).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] + parseInt(options.par.parent().children(":eq(12)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = (t[3] * parseInt(options.par.parent().children(":eq(14)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "SAnSarrMAS"){//cor/A06/sincerity/aa07
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.SAnSarrMAS").val() || 0, 10) - parseInt(options.par.siblings().find("input.SmAAnSarrMAS").val() || 0, 10);
                t[1] = t[0];
                var inp = options.par.parent().find("input.SmarrMAS");
                $(inp).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1] * 0.5;
                t[3] = t[2] + parseInt(options.par.siblings().find("input.AS:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.siblings().find("input.Sm:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "SmAAnSarrMAS"){//cor/A06/sincerity/aa07
                t[0] = 0;
                t[0] -= parseInt(options.my.val() || 0, 10);
                var inp = options.par.parent().find("input.SAnSarrMAS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                }); 
                t[1] = t[0];              
                var inp2 = options.par.parent().find("input.SmarrMAS");
                $(inp2).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1] * 0.5;
                t[3] = t[2] + parseInt(options.par.siblings().find("input.AS:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.siblings().find("input.Sm:eq(" + ind[0] + ")").val() || 0, 10);
             } else if(options.op == "SmarrAnSarrMSAS"){//cor/A03/tax_confirmation/cor_tax_middle_prepayment                
                t[0] = parseInt(options.par.parent().children("tr:eq(3)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10) - parseInt(options.par.siblings().find("input.SmarrAnSarrMSAS:eq(" + ind[0] + ")").val() || 0, 10);  
                t[1] = Math.round(t[0] * 0.5, 2); 
                t[2] = t[1] - parseInt(options.par.parent().children(":eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[3] = t[2] + parseInt(options.par.parent().children(":eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[4] = t[3] - parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10);          
             } else if(options.op == "SmMAnSAnS"){//cor/A06/nonprofit/cor_tax_agriculture_special_tax_standard_report 
                t[0] = parseInt(options.par.parent().children().find("input.S2").val() || 0, 10) - parseInt(options.my.val() || 0, 10);    
                t[1] = Math.round(t[0] * parseInt(options.par.parent().children().find("input.MAnSAnS").val() || 0, 10)/100, 2); 
                t[2] = t[1] + parseInt(options.par.parent().children().find("input.A3").val() || 0, 10); 
                t[3] = t[2] + parseInt(options.par.parent().children().find("input.A").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm2").val() || 0, 10);  
                t[4] = t[3] - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "MSESSm"){//cor/A03/tax_confirmation/a0802 
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.MpSESSm").val() || 0, 10)/100;                             
                t[1] = t[0] - parseInt(options.par.parent().children().find("input.SmS").val() || 0, 10);  
                t[2] = t[1]; 
                t[3] = (parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.SmSm").val() || 0, 10)) * 0.3; 
                t[4] = t[2] - t[3];          
             } else if(options.op == "MpSESSm"){//cor/A03/tax_confirmation/a0802 
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.MSESSm").val() || 0, 10)/100;                             
                t[1] = t[0] - parseInt(options.par.parent().children().find("input.SmS").val() || 0, 10);  
                t[2] = t[1]; 
                t[3] = (parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.SmSm").val() || 0, 10)) * 0.3; 
                t[4] = t[2] - t[3];          
             } else if(options.op == "AASSnAarrSmarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.siblings().find("input.A5").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.AASSnAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.AASmSnAarrSmarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0]
                var inp3 = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp3).each(function( index ) {
                     t[1] += parseInt($(this).val() || 0, 10);
                });
                var inp4 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp4).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "AASmSnAarrSmarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.siblings().find("input.A5").val() || 0, 10);
                var inp = options.par.closest("tbody").find("input.AASSnAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.AASmSnAarrSmarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0]
                var inp3 = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp3).each(function( index ) {
                     t[1] += parseInt($(this).val() || 0, 10);
                });
                var inp4 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp4).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "MnSSAnSAnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.MM2").val() || 0, 10)/100;
                t[1] = t[0];
                var inp = options.par.closest("tbody").find("input.ASmSAnSAnAnS");
                $(inp).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmSm2").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnAnS").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().find("input.SmSm").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AarrnAnSmAAnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = 0;
                var inp = options.par.closest("tbody").find("input.AarrnAnSmAAnAnS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] + parseInt(options.par.parent().find("input.AnSmAAnAnS").val() || 0, 10);
                t[2] = parseInt(options.par.parent().find("input.AA4").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnAnS").val() || 0, 10) - t[1];
                t[3] = t[2] + parseInt(options.par.parent().find("input.SmSm").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "MnSmarrAnSnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.MM").val() || 0, 10)/100;
                t[1] = t[0]
                var inp = options.par.closest("tbody").find("input.ASmarrAnSnAnS");
                $(inp).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[1] += parseInt(options.par.parent().find("input.SarrAnSnAnS").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmnAnS").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().find("input.AA2").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AarrSMAMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29 ?????
                t[0] = parseInt(options.par.parent().children().find("input.A2:eq(" + ind[0] + ")").val() || 0, 10);
                var inp = options.par.parent().children().find("input.AarrSMAMax");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });             
                t[1] = t[0] - parseInt(options.par.parent().children().find("input.SMAMax").val() || 0, 10);
                t[2] = t[1] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = Math.max(t[3], 0);         
             } else if(options.op == "SMnMinASmMin"){//cor/A02/subject_01/a08, per/A02/subject/reception_cost_control_01
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.SmMinASmMin").val() || 0, 10)*3/100;
                t[1] = Math.min(t[0], parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10)*10/100);
                t[2] = t[1] + parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[3] = parseInt(options.par.parent().children().find("input.Min").val() || 0, 10) - t[2];
                t[4] = Math.min(t[2], parseInt(options.par.parent().children().find("input.Min").val() || 0, 10));
             } else if(options.op == "SmMinASmMin"){//cor/A02/subject_01/a08, per/A02/subject/reception_cost_control_01
                t[0] = parseInt(options.par.parent().children().find("input.SMnMinASmMin").val() || 0, 10) - parseInt(options.my.val() || 0, 10)*3/100;
                t[1] = Math.min(t[0], parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10)*10/100);
                t[2] = t[1] + parseInt(options.par.parent().children(":eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[3] = parseInt(options.par.parent().children().find("input.Min").val() || 0, 10) - t[2];
                t[4] = Math.min(t[2], parseInt(options.par.parent().children().find("input.Min").val() || 0, 10));
             } else{                  
                                             
             } 
             for(var i = 1; i < options.ind.split("_").length; i++){
                 options.par.parent().children(":eq(" + ind[i] + ")").find("input:eq(" + ind[0] + ")").val(t[i - 1]);
             }
                             
           } else if(options.dividend == "T_04_225_a"){//T_04_50  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "SmAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) - parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[2] = t[1];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10); 
             } else if(options.op == "SAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSAnAAnSmarrAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[2] = t[1];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10); 
             } else if(options.op == "AnSmAAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A").val() || 0, 10) + parseInt(options.my.val() || 0, 10);
                t[1] = parseInt(options.par.parent().find("input.A2").val() || 0, 10) - t[0] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[2] = t[1];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10); 
             } else if(options.op == "SmAAnSAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) - parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[3] = t[2]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else if(options.op == "ASnSAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.SmAAnSAnAnSmarrAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[3] = t[2]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AnSmAAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[3] = t[2]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else {

             }                                                                
                          
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 1; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             } 
                      
           } else if(options.dividend == "T_04_225_b"){//T_04_51  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "SmAAAnSnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A2").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                var inp = options.par.parent().find("input.SAAnSnSmarrAnS");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);  
                t[2] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[1] + parseInt(options.par.parent().find("input.A").val() || 0, 10); 
                t[3] = t[2]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);            
             } else if(options.op == "SAAnSnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A2").val() || 0, 10);
                var inp = options.par.parent().find("input.SAAnSnSmarrAnS");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.par.parent().find("input.SmAAAnSnSmarrAnS").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);   
                t[2] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[1] + parseInt(options.par.parent().find("input.A").val() || 0, 10);  
                t[3] = t[2]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "ASmnSmnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASmnSmnSmarrAnS").val() || 0, 10);
                t[1] = parseInt(options.par.parent().find("input.S").val() || 0, 10) - t[0];  
                t[2] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[1] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[3] = t[2]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);             
             } else if(options.op == "MpnASnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.MnASnAAnSmarrAnS").val() || 0, 10)/100;
                t[1] = t[0] + parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.AASmnAAnSmarrAnS").val() || 0, 10);    
                t[2] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[1] + parseInt(options.par.parent().find("input.Aarr:eq(0)").val() || 0, 10);   
                t[3] = t[2]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);        
             } else if(options.op == "MnASnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.MpnASnAAnSmarrAnS").val() || 0, 10)/100;
                t[1] = t[0] + parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.AASmnAAnSmarrAnS").val() || 0, 10);   
                t[2] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[1] + parseInt(options.par.parent().find("input.Aarr:eq(0)").val() || 0, 10);  
                t[3] = t[2]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);         
             } else if(options.op == "AAnSAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = parseInt(options.par.parent().find("input.A2").val() || 0, 10);
                var inp = options.par.parent().children().find("input.AAnSAnSmarrAnS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[3] = t[2]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else {

             }              
                                                                                                          
             for(var j = 0; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             }                        
           } else if(options.dividend == "T_04_225_c"){//T_04_60  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];           
             if(options.op == "AarrnASnMnMSarrnMSarr"){//cor/A03/tax_confirmation/a0803                                  
                var inp = options.par.parent().children().find("input.AarrnASnMnMSarrnMSarr");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = t0 + parseInt(options.par.siblings().find("input.ASnMnMSarrnMSarr").val() || 0, 10) - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10); 
                t2 = Math.round(t1 * 0.3);
                t4 = t2;
                var inp = options.par.parent().children().find("input.SmarrSmarr");
                $(inp).each(function( index ) {
                     t3 -= parseInt($(this).val() || 0, 10);
                });
                t4 += t3;
                t3 += Math.round(t1 * 0.8 - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10));                      
             } else if(options.op == "AarrnAASmnMnMSarrnMSarr"){//cor/A03/tax_confirmation/a0803                                  
                var inp = options.par.parent().children().find("input.AarrnAASmnMnMSarrnMSarr");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });
                t1 = parseInt(options.par.siblings().find("input.A").val() || 0, 10) + parseInt(options.par.siblings().find("input.ASnMnMSarrnMSarr").val() || 0, 10) - t0; 
                t2 = Math.round(t1 * 0.3);
                t4 = t2;
                var inp2 = options.par.parent().children().find("input.SmarrSmarr");
                $(inp2).each(function( index ) {
                     t3 -= parseInt($(this).val() || 0, 10);
                });
                t4 += t3;
                t3 += Math.round(t1 * 0.8 - parseInt(options.par.siblings().find("input.Sm2").val() || 0, 10));                      
             } else{                  
                                             
             }  
             options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind0 + ")").val(t0);
             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val(t1);
             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val(t2);
             options.par.parent().parent().next().find("input:eq(" + ind4 + ")").val(t3);
             options.par.parent().parent().next().find("input:eq(" + ind5 + ")").val(t4);
           } else if(options.dividend == "T_05_225"){//T_05  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }                     
             if(options.op == "ASnASnESarrAM"){//cor/A06/business_inpartnership/tax_division
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASnASnESarrAM").val() || 0, 10) - parseInt(options.par.closest("tbody").children("tr").find("input.SmAAnASnESarrAM").val() || 0, 10);
                t[1] = t[0] + parseInt(options.par.closest("tbody").children("tr:eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.closest("tbody").children("tr:eq(5)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1];
                var inp = options.par.parent().find("input.SmarrAM");
                t[3] = 0;
                $(inp).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] - t[3];
                t[4] = t[3] +parseInt(options.par.closest("tbody").children("tr:eq(12)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[5] = (t[4] * parseInt(options.par.closest("tbody").children("tr:eq(14)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "SmAAnASnESarrAM"){//cor/A06/business_inpartnership/tax_division
                t[0] = 0;
                t[0] -= parseInt(options.my.val() || 0, 10);
                var inp = options.par.parent().find("input.ASnASnESarrAM");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] + parseInt(options.par.closest("tbody").children("tr:eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.par.closest("tbody").children("tr:eq(5)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1];
                var inp2 = options.par.parent().find("input.SmarrAM");
                t[3] = 0;
                $(inp2).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] - t[3];
                t[4] = t[3] +parseInt(options.par.closest("tbody").children("tr:eq(12)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[5] = (t[4] * parseInt(options.par.closest("tbody").children("tr:eq(14)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "SAnSarrMSAS"){//cor/A03/tax_confirmation/cor_tax_middle_prepayment                
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children("tr:eq(1)").find("input:eq(" + ind[0] + ")").val() || 0, 10) + parseInt(options.par.siblings().find("input.SAnSarrMSAS:eq(" + ind[0] + ")").val() || 0, 10);  
                t[1] = t[0] - parseInt(options.par.parent().children("tr:eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10) + parseInt(options.par.parent().children("tr:eq(5)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[2] = Math.round(t[1] * 0.5, 2); 
                t[3] = t[2] - parseInt(options.par.parent().children("tr:eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[4] = t[3] + parseInt(options.par.parent().children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[5] = t[4] - parseInt(options.par.parent().children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10);          
             } else if(options.op == "SmAAnSarrMSAS"){//cor/A03/tax_confirmation/cor_tax_middle_prepayment  
                t[0] = 0;            
                var inp = options.par.parent().find("input.SAnSarrMSAS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                }); 
                t[0] -= parseInt(options.my.val() || 0, 10) 
                t[1] = t[0] - parseInt(options.par.parent().children("tr:eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10) + parseInt(options.par.parent().children("tr:eq(5)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[2] = Math.round(t[1] * 0.5, 2); 
                t[3] = t[2] - parseInt(options.par.parent().children("tr:eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[4] = t[3] + parseInt(options.par.parent().children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10);  
                t[5] = t[4] - parseInt(options.par.parent().children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10);          
             } else if(options.op == "SarrSMAnSAnS"){//cor/A06/nonprofit/cor_tax_agriculture_special_tax_standard_report  
                t[0] = parseInt(options.my.val() || 0, 10);            
                var inp = options.par.parent().find("input.SmarrSMAnSAnS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });                  
                t[1] = t[0] - parseInt(options.par.parent().children().find("input.SmMAnSAnS").val() || 0, 10);  
                t[2] = Math.round(t[1] * parseInt(options.par.parent().children().find("input.MAnSAnS").val() || 0, 10)/100, 2); 
                t[3] = t[2] + parseInt(options.par.parent().children().find("input.A3").val() || 0, 10); 
                t[4] = t[3] + parseInt(options.par.parent().children().find("input.A").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm2").val() || 0, 10);  
                t[5] = t[4] - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "SmarrSMAnSAnS"){//cor/A06/nonprofit/cor_tax_agriculture_special_tax_standard_report  
                t[0] = parseInt(options.par.parent().children().find("input.SarrSMAnSAnS").val() || 0, 10);            
                var inp = options.par.parent().find("input.SmarrSMAnSAnS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });                  
                t[1] = t[0] - parseInt(options.par.parent().children().find("input.SmMAnSAnS").val() || 0, 10);  
                t[2] = Math.round(t[1] * parseInt(options.par.parent().children().find("input.MAnSAnS").val() || 0, 10)/100, 2); 
                t[3] = t[2] + parseInt(options.par.parent().children().find("input.A3").val() || 0, 10); 
                t[4] = t[3] + parseInt(options.par.parent().children().find("input.A").val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm2").val() || 0, 10);  
                t[5] = t[4] - parseInt(options.par.parent().children().find("input.Sm").val() || 0, 10);          
             } else if(options.op == "ASnAASSnAarrSmarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10)
                     + parseInt(options.par.siblings().find("input.A6").val() || 0, 10)
                     - parseInt(options.par.parent().find("input.AASmnAASSnAarrSmarrnSAnSAnA").val() || 0, 10);
                t[1] = t[0]
                var inp = options.par.closest("tbody").find("input.AASSnAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[1] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.AASmSnAarrSmarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1]
                var inp3 = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp3).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                var inp4 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp4).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "AASmnAASSnAarrSmarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.par.siblings().find("input.A6").val() || 0, 10)
                     + parseInt(options.par.parent().find("input.ASnAASSnAarrSmarrnSAnSAnA").val() || 0, 10)
                     - parseInt(options.my.val() || 0, 10);
                t[1] = t[0]
                var inp = options.par.closest("tbody").find("input.AASSnAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[1] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.AASmSnAarrSmarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[1] -= parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1]
                var inp3 = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp3).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                var inp4 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp4).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "SarrnMnSSAnSAnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10);
                var inp = options.par.parent().find("input.SmarrnMnSSAnSAnAnS");
                $(inp).each(function( index ) {
                     t[0] -= parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] * parseInt(options.par.parent().find("input.MnSSAnSAnAnS").val() || 0, 10);
                t[2] = t[1];
                var inp2 = options.par.closest("tbody").find("input.ASmSAnSAnAnS");
                $(inp2).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmSm2").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnAnS").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.SmSm").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "ASnMnSmarrAnSnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.ASnMnSmarrAnSnAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.AASmnMnSmarrAnSnAnS").val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.parent().find("input.MnSmarrAnSnAnS").val() || 0, 10)/100;
                t[2] = t[1]
                var inp = options.par.parent().find("input.ASmarrAnSnAnS");
                $(inp).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[2] += parseInt(options.par.parent().find("input.SarrAnSnAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmnAnS").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.AA2").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AASmnMnSmarrAnSnAnS"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = 0;
                var inp = options.par.parent().find("input.ASnMnSmarrAnSnAnS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.my.val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.parent().find("input.MnSmarrAnSnAnS").val() || 0, 10)/100;
                t[2] = t[1]
                var inp = options.par.closest("tbody").find("input.ASmarrAnSnAnS");
                $(inp).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[2] += parseInt(options.par.parent().find("input.SarrAnSnAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmnAnS").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.AA2").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "SMSarrAarrSnSAS"){//per/A05/tax_confirmation/earnings_tax_standard_report_03
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().find("input.SmMSarrAarrSnSAS").val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.parent().find("input.MSarrAarrSnSAS").val() || 0, 10)/100;
                t[2] = t[1]
                var inp = options.par.closest("tbody").find("input.SmSnAarrSnSAS");
                $(inp).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2];
                var inp2 = options.par.closest("tbody").find("input.AarrSnSAS");
                $(inp2).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmnSAS").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().find("input.ASS").val() || 0, 10);
                var inp3 = options.par.closest("tbody").find("input.SmAS");
                $(inp3).each(function( index ) {
                     t[5] -= parseInt($(this).val() || 0, 10);
                });
             } else if(options.op == "SmMSarrAarrSnSAS"){//per/A05/tax_confirmation/earnings_tax_standard_report_03
                t[0] = parseInt(options.par.parent().find("input.SMSarrAarrSnSAS").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.parent().find("input.MSarrAarrSnSAS").val() || 0, 10)/100;
                t[2] = t[1]
                var inp = options.par.closest("tbody").find("input.SmSnAarrSnSAS");
                $(inp).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2];
                var inp2 = options.par.closest("tbody").find("input.AarrSnSAS");
                $(inp2).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmnSAS").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().find("input.ASS").val() || 0, 10);
                var inp3 = options.par.closest("tbody").find("input.SmAS");
                $(inp3).each(function( index ) {
                     t[5] -= parseInt($(this).val() || 0, 10);
                });
             } else{                  
                                             
             } 
             
             for(var i = 1; i < options.ind.split("_").length; i++){
                 options.par.parent().children(":eq(" + ind[i] + ")").find("input:eq(" + ind[0] + ")").val(t[i - 1]);
             }                             
           } else if(options.dividend == "T_05_225_a"){//T_05_61  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "SmnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] + parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSAnAAnSmarrAnS").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);

                t[3] = t[2];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[4] = t[3]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10)
             } else if(options.op == "AarrAnSmAAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = 0;
                var inp = options.par.parent().children().find("input.AarrAnSmAAnAAnSmarrAnS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] + parseInt(options.par.parent().find("input.AnSmAAnAAnSmarrAnS").val() || 0, 10);
                t[2] = parseInt(options.par.parent().find("input.A2").val() || 0, 10) - t[1] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);

                t[3] = t[2];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[4] = t[3]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10)
             } else if(options.op == "MnSAnSAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.M").val() || 0, 10)/100);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmAAnSAnAnSmarrAnS").val() || 0, 10) + parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[4] = t[3]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AarrnAnSmAAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = 0;
                var inp = options.par.parent().children().find("input.AarrnAnSmAAnAnSmarrAnS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[4] = t[3]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else {

             }                                 
                                                          
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 2; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             } 
                      
           } else if(options.dividend == "T_05_225_b"){//T_05_62  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }             
             if(options.op == "SmnSAAnSnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.S2").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0];
                var inp = options.par.parent().find("input.SAAnSnSmarrAnS");
                $(inp).each(function( index ) {
                    t[1] += parseInt($(this).val() || 0, 10);
                });
                t[1] -= parseInt(options.par.parent().find("input.SmAAAnSnSmarrAnS").val() || 0, 10);
                t[2] = t[1] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
                t[3] = parseInt(options.par.parent().find("input.A3").val() || 0, 10) + t[2] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[4] = t[3]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "MAarrSAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report 
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.M").val() || 0, 10)/100);
                t[1] = t[0];
                var inp = options.par.parent().find("input.AAnSAnSmarrAnS");
                $(inp).each(function( index ) {
                    t[1] += parseInt($(this).val() || 0, 10);
                });
                t[2] = t[1] - parseInt(options.par.parent().find("input.SnSAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().find("input.A3").val() || 0, 10);
                t[4] = t[3]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else {

             }                                 
                                                          
             for(var j = 0; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             }  
                      
           } else if(options.dividend == "T_06_225"){//T_06  
             /*ind0 = options.ind.split("_")[0];
             ind1 = options.ind.split("_")[1]; 
             ind2 = options.ind.split("_")[2]; 
             ind3 = options.ind.split("_")[3];
             ind4 = options.ind.split("_")[4];
             ind5 = options.ind.split("_")[5];
             ind6 = options.ind.split("_")[6]; 
             ind7 = options.ind.split("_")[7];*/
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }                     
             if(options.op == "SSEMSmMinSm"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction
                t[0] = parseInt(options.my.val() || 0, 10) - parseInt(options.par.closest("tbody").children("tr").find("input.SmSEMSmMinSm").val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.closest("tbody").children("tr:eq(5)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1];//결손국가가 없는 경우=⑨, 있는 경우 작성방법 참조
                t[3] = t[2] * parseInt(options.par.closest("tbody").children("tr:eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/parseInt(options.par.closest("tbody").children("tr:eq(9)").find("input:eq(" + ind[0] + ")").val() || 1, 10);
                t[4] = parseInt(options.par.closest("tbody").children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[3];
                if(t[4] < 0)t[4] = 0;
                t[5] = Math.min(t[4], parseInt(options.par.closest("tbody").children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[6] = t[4] - t[5];
             } else if(options.op == "SmSEMSmMinSm"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction
                t[0] = parseInt(options.par.closest("tbody").children("tr").find("input.SSEMSmMinSm").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.closest("tbody").children("tr:eq(5)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                t[2] = t[1];//결손국가가 없는 경우=⑨, 있는 경우 작성방법 참조
                t[3] = t[2] * parseInt(options.par.closest("tbody").children("tr:eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/parseInt(options.par.closest("tbody").children("tr:eq(9)").find("input:eq(" + ind[0] + ")").val() || 1, 10);
                t[4] = parseInt(options.par.closest("tbody").children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[3];
                if(t4 < 0)t[4] = 0;
                t[5] = Math.min(t[4], parseInt(options.par.closest("tbody").children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[6] = t[5] - t[4];
             } else if(options.op == "MSmEMSmMinSm"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction
                t[0] = parseInt(options.my.val() || 0, 10) * parseInt(options.par.siblings().find("input.MSmEMSmMinSm").val() || 0, 10)/100;
                t[1] = parseInt(options.par.closest("tbody").children("tr:eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[0];
                t[2] = t[1];//결손국가가 없는 경우=⑨, 있는 경우 작성방법 참조
                t[3] = t[2] * parseInt(options.par.closest("tbody").children("tr:eq(8)").find("input:eq(" + ind[0] + ")").val() || 0, 10)/parseInt(options.par.closest("tbody").children("tr:eq(9)").find("input:eq(" + ind[0] + ")").val() || 1, 10);
                t[4] = parseInt(options.par.closest("tbody").children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[3];
                if(t[4] < 0)t[4] = 0;
                t[5] = Math.min(t4, parseInt(options.par.closest("tbody").children("tr:eq(13)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
                t[6] = t[4] - t[5];
             } else if(options.op == "AarrnSMnAarrMinASmMin"){//cor/A02/subject_01/a08, cor/connection/report/connection_reception_control_01, per/A02/subject/reception_cost_control_01
                var inp = options.par.closest("tbody").find("input.AarrnSMnAarrMinASmMin");
                t[0] = 0;
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = (t[0]- parseInt(options.par.parent().children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10))*20/100;
                t[2] = parseInt(options.par.parent().children("tr:eq(3)").find("input:eq(" + ind[0] + ")").val() || 0, 10) + parseInt(options.par.parent().children("tr:eq(11)").find("input:eq(" + ind[0] + ")").val() || 0, 10) + t[1];
                t[3] = Math.min(t[2]*10/100, parseInt(options.par.parent().find("input.MinASmMin").val() || 0, 10));
                t[4] = t[2] + t[3];
                t[5] = parseInt(options.par.parent().children("tr:eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[4];
                t[6] = Math.min(t[4], parseInt(options.par.parent().children("tr:eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
             } else if(options.op == "AarrnSmMnAarrMinASmMin"){//cor/A02/subject_01/a08                                     
                var inp = options.par.closest("tbody").find("input.AarrnSmMnAarrMinASmMin");
                t[0] = 0;
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = (parseInt(options.par.parent().children("tr:eq(7)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[0])*20/100;
                t[2] = parseInt(options.par.parent().children("tr:eq(3)").find("input:eq(" + ind[0] + ")").val() || 0, 10) + t[0] + t[1];
                t[3] = Math.min(t[2]*10/100, parseInt(options.par.parent().find("input.MinASmMin").val() || 0, 10));
                t[4] = t[2] + t[3];
                t[5] = parseInt(options.par.parent().children("tr:eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10) - t[4];
                t[6] = Math.min(t[4], parseInt(options.par.parent().children("tr:eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10));
             } else if(options.op == "ASnASnAASSnAarrSmarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10)
                     + parseInt(options.par.siblings().find("input.ASnASnAASSnAarrSmarrnSAnSAnA").val() || 0, 10)
                     - parseInt(options.par.parent().find("input.AASmnASnAASSnAarrSmarrnSAnSAnA").val() || 0, 10);
                t[1] = t[0]
                     + parseInt(options.par.siblings().find("input.ASnAASSnAarrSmarrnSAnSAnA").val() || 0, 10)
                     - parseInt(options.par.parent().find("input.AASmnAASSnAarrSmarrnSAnSAnA").val() || 0, 10);
                t[2] = t[1]
                var inp = options.par.closest("tbody").find("input.AASSnAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.AASmSnAarrSmarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2]
                var inp3 = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp3).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                var inp4 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp4).each(function( index ) {
                     t[3] -= parseInt($(this).val() || 0, 10);
                });
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[6] = t[5] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "AASmnASnAASSnAarrSmarrnSAnSAnA"){//cor/connection/report/connection_cor_tax_standard_control
                t[0] = 0;
                var inp5 = options.par.parent().find("input.ASnASnAASSnAarrSmarrnSAnSAnA");
                $(inp5).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.my.val() || 0, 10);
                t[1] = t[0]
                     + parseInt(options.par.siblings().find("input.ASnAASSnAarrSmarrnSAnSAnA").val() || 0, 10)
                     - parseInt(options.par.parent().find("input.AASmnAASSnAarrSmarrnSAnSAnA").val() || 0, 10);
                t[2] = t[1]
                var inp = options.par.closest("tbody").find("input.AASSnAarrSmarrnSAnSAnA");
                $(inp).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.closest("tbody").find("input.AASmSnAarrSmarrnSAnSAnA");
                $(inp2).each(function( index ) {
                     t[2] -= parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2]
                var inp3 = options.par.closest("tbody").find("input.AAarrSmarrnSAnSAnA");
                $(inp3).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                var inp4 = options.par.closest("tbody").find("input.ASmarrAarrnSAnSAnA");
                $(inp4).each(function( index ) {
                     t[3] -= parseInt($(this).val() || 0, 10);
                });
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmAnSAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnSAnA").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.SmAnA").val() || 0, 10) + parseInt(options.par.parent().find("input.SAnA").val() || 0, 10);
                t[6] = t[5] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
             } else if(options.op == "SMASMnAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29    
                t[0] = parseInt(options.par.parent().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);           
                t[1] = t[0] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                t[2] = t[1] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                t[3] = t[0] - parseInt(options.par.parent().find("input.SmMnAA").val() || 0, 10);
                t[4] = t[3] * parseInt(options.par.parent().find("input.MnAA").val() || 0, 10);
                t[5] = parseInt(options.par.parent().find("input.AA").val() || 0, 10)
                     + parseInt(options.par.parent().find("input.A3:eq(" + ind[0] + ")").val() || 0, 10)
                     + parseInt(options.par.parent().find("input.A4:eq(" + ind[0] + ")").val() || 0, 10);
                t[6] = Math.max(t[2], t[5]);
             } else if(options.op == "SMnAAnSMnAAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = parseInt(options.par.parent().children().find("input.Sa:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = t[0] * parseInt(options.par.parent().children().find("input.MnAAnMax").val() || 0, 10)/100;
                t[2] = t[1];
                var inp = options.par.parent().children().find("input.Aa2:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[0] - parseInt(options.par.parent().children().find("input.SmMnAAAnMax").val() || 0, 10);
                t[4] = t[3] * parseInt(options.par.parent().children().find("input.MnAAAnMax").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().children().find("input.AAAnMax").val() || 0, 10);
                var inp2 = options.par.parent().children().find("input.Aa2");                  
                $(inp2).each(function( index ) {
                     t[5] += parseInt($(this).val() || 0, 10);
                });
                t[6] = Math.max(t[5], parseInt(options.par.parent().children().find("input.Maxa:eq(" + ind0 + ")").val() || 0, 10));
             } else{                  
                                             
             } 
             
             for(var i = 1; i < options.ind.split("_").length; i++){
                 options.par.parent().children(":eq(" + ind[i] + ")").find("input:eq(" + ind[0] + ")").val(t[i - 1]);
             }
             /*options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(" + ind[0] + ")").val(t0);
             options.par.parent().children(":eq(" + ind[2] + ")").find("input:eq(" + ind[0] + ")").val(t1);  
             options.par.parent().children(":eq(" + ind[3] + ")").find("input:eq(" + ind[0] + ")").val(t2); 
             options.par.parent().children(":eq(" + ind[4] + ")").find("input:eq(" + ind[0] + ")").val(t3); 
             options.par.parent().children(":eq(" + ind[5] + ")").find("input:eq(" + ind[0] + ")").val(t4); 
             options.par.parent().children(":eq(" + ind[6] + ")").find("input:eq(" + ind[0] + ")").val(t5); 
             options.par.parent().children(":eq(" + ind[7] + ")").find("input:eq(" + ind[0] + ")").val(t6);*/
                             
           } else if(options.dividend == "T_06_225_a"){//T_06_70  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "MnSnSAAnSnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.M").val() || 0, 10)/100);
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmnSAAnSnSmarrAnS").val() || 0, 10);
                t[2] = t[1];
                var inp2 = options.par.parent().find("input.SAAnSnSmarrAnS");
                $(inp2).each(function( index ) {
                    t[2] += parseInt($(this).val() || 0, 10);
                });
                t[2] -= parseInt(options.par.parent().find("input.SmAAAnSnSmarrAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
                t[4] = t[0] + t[3] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[5] = t[4]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[6] = t[5] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "ASnMnAAnSnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report 
                t[0] = 0;
                var inp = options.par.parent().find("input.ASnMnAAnSnAnSmarrAnS");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.par.parent().find("input.AASmnMnAAnSnAnSmarrAnS").val() || 0, 10);
                t[1] = Math.round(t[0] * parseInt(options.par.parent().find("input.MAarrSAnSmarrAnS").val() || 0, 10)/100);
                t[2] = t[1];
                var inp2 = options.par.parent().find("input.AAnSAnSmarrAnS");
                $(inp2).each(function( index ) {
                    t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] - parseInt(options.par.parent().find("input.SnSAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.A3").val() || 0, 10);
                t[5] = t[4]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[6] = t[5] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AASmnMnAAnSnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report 
                t[0] = 0;
                var inp = options.par.parent().find("input.ASnMnAAnSnAnSmarrAnS");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.my.val() || 0, 10);
                t[1] = Math.round(t[0] * parseInt(options.par.parent().find("input.MAarrSAnSmarrAnS").val() || 0, 10)/100);
                t[2] = t[1];
                var inp2 = options.par.parent().find("input.AAnSAnSmarrAnS");
                $(inp2).each(function( index ) {
                    t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] - parseInt(options.par.parent().find("input.SnSAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.A3").val() || 0, 10);
                t[5] = t[4]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[6] = t[5] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else {

             } 
           
             for(var j = 0; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             }                       
           } else if(options.dividend == "T_06_225_b"){//T_06_71  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "SmnMnSAnSAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report               
                t[0] = parseInt(options.par.parent().find("input.S2").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t[1] = Math.round(t[0] * parseInt(options.par.parent().find("input.MnSAnSAnAnSmarrAnS").val() || 0, 10)/100);
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmAAnSAnAnSmarrAnS").val() || 0, 10) + parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10);
                t[3] = t[2] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[5] = t[4]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[6] = t[5] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else {

             } 
                                     
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 3; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             }                        
           } else if(options.dividend == "T_07_225"){//T_07  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "ASnMnSnSAAnSnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10)
                     + parseInt(options.par.siblings().find("input.ASnMnSnSAAnSnSmarrAnS ").val() || 0, 10)
                     + parseInt(options.par.parent().find("input.AASmnMnSnSAAnSnSmarrAnS").val() || 0, 10);
                t[1] = Math.round(t[0] * parseInt(options.par.parent().find("input.MnSnSAAnSnSmarrAnS").val() || 0, 10)/100);
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmnSAAnSnSmarrAnS").val() || 0, 10);
                t[3] = t[2];
                var inp2 = options.par.parent().find("input.SAAnSnSmarrAnS");
                $(inp2).each(function( index ) {
                    t[3] += parseInt($(this).val() || 0, 10);
                });
                t[3] -= parseInt(options.par.parent().find("input.SmAAAnSnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
                t[5] = t[0] + t[4] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[6] = t[5]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[7] = t[6] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else if(options.op == "AASmnMnSnSAAnSnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = 0;
                t[0] -= parseInt(options.my.val() || 0, 10)
                var inp = options.par.parent().find("input.ASnMnSnSAAnSnSmarrAnS");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = Math.round(t[0] * parseInt(options.par.parent().find("input.MnSnSAAnSnSmarrAnS").val() || 0, 10)/100);
                t[2] = t[1] - parseInt(options.par.parent().find("input.SmnSAAnSnSmarrAnS").val() || 0, 10);
                t[3] = t[2];
                var inp2 = options.par.parent().find("input.SAAnSnSmarrAnS");
                $(inp2).each(function( index ) {
                    t[3] += parseInt($(this).val() || 0, 10);
                });
                t[3] -= parseInt(options.par.parent().find("input.SmAAAnSnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
                t[5] = t[0] + t[4] + parseInt(options.par.parent().find("input.A").val() || 0, 10);
                t[6] = t[5]
                      - parseInt(options.par.parent().parent().parent().prev().find("tbody").children().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().parent().prev().find("tbody").children().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[7] = t[6] - parseInt(options.par.parent().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.Sm").val() || 0, 10);
             } else {

             } 
                                     
             for(var j = 0; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             }                       
           } else if(options.dividend == "T_07_225_a"){//T_07_90  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "AarrSMASMnAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29    
                 t[0] = parseInt(options.par.parent().find("input.A2:eq(" + ind[0] + ")").val() || 0, 10);           
                 var inp = options.par.parent().children().find("input.AarrSMASMnAAnMax");
                 $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[1] = t[0] - parseInt(options.par.parent().children().find("input.SMASMnAAnMax").val() || 0, 10);
                t[2] = t[1] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                t[3] = t[2] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                t[4] = t[1] - parseInt(options.par.parent().find("input.SmMnAA").val() || 0, 10);
                t[5] = t[4] * parseInt(options.par.parent().find("input.MnAA").val() || 0, 10);
                t[6] = parseInt(options.par.parent().find("input.AA").val() || 0, 10)
                     + parseInt(options.par.parent().find("input.A3:eq(" + ind[0] + ")").val() || 0, 10)
                     + parseInt(options.par.parent().find("input.A4:eq(" + ind[0] + ")").val() || 0, 10);
                t[7] = Math.max(t[3], t[6]);
             } else if(options.op == "ESMnAAnSMnAAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = parseInt(options.my.val() || 0, 10);
                t[1] = t[0] - parseInt(options.par.parent().children().find("input.SMnAAnSMnAAAnMax").val() || 0, 10);
                t[2] = t[1] * parseInt(options.par.parent().children().find("input.MnAAnMax").val() || 0, 10)/100;
                t[3] = t[2];
                var inp = options.par.parent().children().find("input.Aa2:eq(" + ind0 + ")");                  
                $(inp).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[4] = t[1] - parseInt(options.par.parent().children().find("input.SmMnAAAnMax").val() || 0, 10);
                t[5] = t[4] * parseInt(options.par.parent().children().find("input.MnAAAnMax").val() || 0, 10);
                t[6] = t[5] + parseInt(options.par.parent().children().find("input.AAAnMax").val() || 0, 10);
                var inp2 = options.par.parent().children().find("input.Aa2");                  
                $(inp2).each(function( index ) {
                     t[6] += parseInt($(this).val() || 0, 10);
                });
                t[7] = Math.max(t[6], parseInt(options.par.parent().children().find("input.Maxa:eq(" + ind0 + ")").val() || 0, 10));
             } else if(options.op == "AarrASnAAnSMAMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_23
                t[0] = 0;             
                var inp = options.par.parent().children().find("input.AarrASnAAnSMAMax");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                if(t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10) > 20000000){                                 
                    t[1] = t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10);
                    t[2] = t[1] - 20000000;
                    t[3] = t[2] + parseInt(options.par.parent().children().find("input.ASMAMax").val() || 0, 10) + parseInt(options.par.parent().children().find("input.ASMAESMnAAnMax").val() || 0, 10);
                    t[4] = t[3] - parseInt(options.par.parent().children().find("input.SMAMax").val() || 0, 10);
                    t[5] = t[4] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                    t[6] = t[5] + parseInt(options.par.parent().find("input.A2:eq(" + ind[0] + ")").val() || 0, 10);
                    t[7] = Math.max(t[6], parseInt(options.par.parent().find("input.Max:eq(" + ind[0] + ")").val() || 0, 10));
                    t[8] = Math.min(t[7] - parseInt(options.par.parent().find("input.Sm:eq(" + ind[0] + ")").val() || 0, 10), parseInt(options.par.parent().find("input.ASMAMax:eq(" + ind[0] + ")").val() || 0, 10));

                    options.par.parent().children(":eq(10)").find("input:eq(0)").val("");
                    options.par.parent().children(":eq(16)").find("input:eq(1)").val("");
                } else {
                   if(options.par.index() == 3){//추가작업
                      t0 = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(4)").find("input:eq(1)").val() || 0, 10))  * 14/100;
                      t1 = t0 + parseInt(options.par.parent().children(":eq(10)").find("input:eq(1)").val() || 0, 10) + parseInt(options.par.parent().children(":eq(15)").find("input:eq(1)").val() || 0, 10);

                      options.par.parent().children(":eq(9)").find("input:eq(1)").val(t0);
                      options.par.parent().children(":eq(16)").find("input:eq(1)").val(t1);
                      for(var j = 1; j < options.ind.split("_").length; j++){
                         options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val("");
                      }
                      options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(" + ind[0] + ")").val(t[0]);
                      return;
                   }
                }
             } else {

             } 
                                     
             for(var j = 1; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val(t[j-1]);
             }                       
           } else if(options.dividend == "T_07_225_b"){//T_07_81  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "AarrSnSnMnSAnSAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report
                t[0] = 0;                
                var inp = options.par.parent().find("input.AarrSnSnMnSAnSAnAnSmarrAnS");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.par.parent().find("input.SmAarrnSnMnSAnSAnAnSmarrAnS").val() || 0, 10);                
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmnMnSAnSAnAnSmarrAnS").val() || 0, 10);
                t[2] = Math.round(t[1] * parseInt(options.par.parent().find("input.MnSAnSAnAnSmarrAnS").val() || 0, 10)/100);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmAAnSAnAnSmarrAnS").val() || 0, 10) + parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[6] = t[5]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[7] = t[6] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else if(options.op == "SmAarrnSnMnSAnSAnAnSmarrAnS"){//cor/A06/sincerity/sincerity_tax_standard_report
                t[0] = 0;                
                var inp = options.par.parent().find("input.AarrSnSnMnSAnSAnAnSmarrAnS");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.my.val() || 0, 10);               
                t[1] = t[0] - parseInt(options.par.parent().find("input.SmnMnSAnSAnAnSmarrAnS").val() || 0, 10);
                t[2] = Math.round(t[1] * parseInt(options.par.parent().find("input.MnSAnSAnAnSmarrAnS").val() || 0, 10)/100);
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmAAnSAnAnSmarrAnS").val() || 0, 10) + parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.A").val() || 0, 10);
                t[6] = t[5]
                      - parseInt(options.par.parent().find("input.ASnSAnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.AAnSAnSmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnAnSmarrAnS").val() || 0, 10);
                t[7] = t[6] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
             } else {

             } 
                                     
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 4; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             }                        
           } else if(options.dividend == "T_08_225"){//T_08  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "MpAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.M").val() || 0, 10)/100);
                t[1] = t[0] + parseInt(options.par.parent().find("input.A4").val() || 0, 10);
             } else if(options.op == "Mp2AESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.MAESnSAnSAnAAnSmarrAnS").val() || 0, 10)/100);
                t[1] = t[0] + parseInt(options.par.parent().find("input.A5").val() || 0, 10);
             } else if(options.op == "MAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = Math.round(parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.Mp2AESnSAnSAnAAnSmarrAnS").val() || 0, 10)/100);
                t[1] = t[0] + parseInt(options.par.parent().find("input.A5").val() || 0, 10);
             } else {

             }                 
                
                
                t[2] = t[1];
                t[3] = t[2] - parseInt(options.par.parent().find("input.SmnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[4] = t[3] + parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSAnAAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[6] = t[5];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[6] += parseInt($(this).val() || 0, 10);
                });
                t[7] = t[6]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[8] = t[7] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10);
           
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 5; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             } 
                      
           } else if(options.dividend == "T_09_225"){//T_09  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "AMAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.A6").val() || 0, 10);
             } else {

             }                 
                t[1] = Math.round(t[0] * parseInt(options.par.parent().find("input.MAESnSAnSAnAAnSmarrAnS").val() || 0, 10)/100);
                t[2] = t[1] + parseInt(options.par.parent().find("input.A4").val() || 0, 10);
                t[3] = t[2];
                t[4] = t[3] - parseInt(options.par.parent().find("input.SmnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[5] = t[4] + parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSAnAAnSmarrAnS").val() || 0, 10);
                t[6] = t[5] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[7] = t[6];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[7] += parseInt($(this).val() || 0, 10);
                });
                t[8] = t[7]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[9] = t[8] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10)
           
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 6; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             } 
                      
           } else if(options.dividend == "T_0a_225"){//T_010  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "SmarrAMAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.S2").val() || 0, 10);
                var inp = options.par.parent().children().find("input.SmarrAMAESnSAnSAnAAnSmarrAnS");
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
             } else {

             } 
                
                t[1] = t[0] + parseInt(options.par.parent().find("input.AMAESnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[2] = Math.round(t[1] * parseInt(options.par.parent().find("input.MAESnSAnSAnAAnSmarrAnS").val() || 0, 10)/100);
                t[3] = t[2] + parseInt(options.par.parent().find("input.A4").val() || 0, 10);
                t[4] = t[3];
                t[5] = t[4] - parseInt(options.par.parent().find("input.SmnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[6] = t[5] + parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSAnAAnSmarrAnS").val() || 0, 10);
                t[7] = t[6] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[8] = t[7];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[8] += parseInt($(this).val() || 0, 10);
                });
                t[9] = t[8]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[10] = t[9] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10)
           
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 7; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             } 
                      
           } else if(options.dividend == "T_0a_225_a"){//T_010_120  
             var ind = [], t = [];   
             if(options.ind.split("_")){
                for(var i = 0; i < options.ind.split("_").length; i++){
                    ind.push(options.ind.split("_")[i]);
                }  
             }                         
             if(options.op == "AarrASAarrSMASMnAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = 0;             
                var inp = options.par.parent().children().find("input.AarrASAarrSMASMnAAnMax");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                if(t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10) > 20000000){                                 
                    t[1] = t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10);
                    t[2] = t[1] - 20000000;
                    t[3] = t[2];
                    var inp2 = options.par.parent().children().find("input.AarrSMAMax");
                    $(inp2).each(function( index ) {
                        t[3] += parseInt($(this).val() || 0, 10);
                    });
                    t[4] = t[3] - parseInt(options.par.parent().children().find("input.SMAMax").val() || 0, 10);
                    t[5] = t[4] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                    t[6] = t[5] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                    t[7] = t[4] - parseInt(options.par.parent().find("input.SmMnAA").val() || 0, 10);
                    t[8] = t[7] * parseInt(options.par.parent().find("input.MnAA").val() || 0, 10);
                    t[9] = parseInt(options.par.parent().find("input.AA").val() || 0, 10)
                         + parseInt(options.par.parent().find("input.A3:eq(" + ind[0] + ")").val() || 0, 10)
                         + parseInt(options.par.parent().find("input.A4:eq(" + ind[0] + ")").val() || 0, 10);
                    t[10] = Math.max(t[6], t[9]);

                    options.par.parent().children(":eq(9)").find("input:eq(1)").val("");
                    options.par.parent().children(":eq(23)").find("input:eq(1)").val("");
                    options.par.parent().children(":eq(24)").find("input:eq(1)").val(""); 
                } else {
                   if(options.par.index() == 3){//추가작업
                      t0 = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(4)").find("input:eq(2)").val() || 0, 10)) * 14/100;
                      t1 = t0;
                      t2 = Math.max(t1, 0);

                      options.par.parent().children(":eq(9)").find("input:eq(1)").val(t0);
                      options.par.parent().children(":eq(23)").find("input:eq(1)").val(t1);
                      options.par.parent().children(":eq(24)").find("input:eq(1)").val(t2);
                      for(var j = 1; j < options.ind.split("_").length; j++){
                         options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val("");
                      }
                      options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(" + ind[0] + ")").val(t[0]);
                      return;
                   }
                }
             } else if(options.op == "AarrASnAAnSMAMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_23
                t[0] = 0;             
                var inp = options.par.parent().children().find("input.AarrASnAAnSMAMax");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                if(t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10) > 20000000){                                 
                    t[1] = t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10);
                    t[2] = t[1] - 20000000;
                    t[3] = t[2] + parseInt(options.par.parent().children().find("input.ASMAMax").val() || 0, 10) + parseInt(options.par.parent().children().find("input.ASMAESMnAAnMax").val() || 0, 10);
                    t[4] = t[3] - parseInt(options.par.parent().children().find("input.SMAMax").val() || 0, 10);
                    t[5] = t[4] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                    t[6] = t[5] + parseInt(options.par.parent().find("input.A2:eq(" + ind[0] + ")").val() || 0, 10);
                    if(options.par.index() == 2){
                       t[7] = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10)) *25/100;
                       t[8] = parseInt(options.par.parent().children().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                    } else if(options.par.index() == 4){
                       t[7] = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10)) *25/100;
                       t[8] = parseInt(options.par.parent().children().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                    }
                    t[9] = t[8] * 14/100;
                    t[10] = t[7] + t[8] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                    t[11] = Math.max(t[10], parseInt(options.par.parent().find("input.Max:eq(" + ind[0] + ")").val() || 0, 10));
                    t[12] = Math.min(t[11] - t[10], parseInt(options.par.parent().find("input.ASMAMax:eq(" + ind[0] + ")").val() || 0, 10));

                    options.par.parent().children(":eq(10)").find("input:eq(0)").val("");
                    options.par.parent().children(":eq(16)").find("input:eq(1)").val("");
                } else {
                   if(options.par.index() == 4){//추가작업
                      t0 = parseInt(options.my.val() || 0, 10) * 25/100;
                      t1 = t0 + parseInt(options.par.parent().children(":eq(9)").find("input.A2:eq(0)").val() || 0, 10) + parseInt(options.par.parent().children(":eq(15)").find("input.A:eq(0)").val() || 0, 10);

                      options.par.parent().children(":eq(10)").find("input:eq(0)").val(t0);
                      options.par.parent().children(":eq(16)").find("input:eq(1)").val(t1);
                      for(var j = 1; j < options.ind.split("_").length; j++){
                         options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val("");
                      }
                      options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(" + ind[0] + ")").val(t[0]);
                      return;
                   }
                }
             } else {

             }                       
             for(var j = 1; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val(t[j-1]);
             }                       
           } else if(options.dividend == "T_0a_225_b"){//T_010_121  
             var ind = [], t = [];   
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                    ind.push(options.ind.split("_")[i]);
                 }  
             }                         
             if(options.op == "AarrASAarrSMASMnAAnMax2"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = 0;             
                var inp = options.par.parent().children().find("input.AarrASAarrSMASMnAAnMax2");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(1)").val(t[0]);
                if(t[0] + parseInt(options.par.parent().children().find("input.A6:eq(0)").val() || 0, 10) > 20000000){                                  
                    t[1] = t[0] + parseInt(options.par.parent().children().find("input.A6:eq(0)").val() || 0, 10);
                    t[2] = t[1] - 20000000;
                    t[3] = t[2];
                    var inp2 = options.par.parent().children().find("input.AarrSMAMax");
                    $(inp2).each(function( index ) {
                        t[3] += parseInt($(this).val() || 0, 10);
                    });
                    t[4] = t[3] - parseInt(options.par.parent().children().find("input.SMAMax").val() || 0, 10);
                    t[5] = t[4] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                    t[6] = t[5] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                    t[7] = t[4] - parseInt(options.par.parent().find("input.SmMnAA").val() || 0, 10);
                    t[8] = t[7] * parseInt(options.par.parent().find("input.MnAA").val() || 0, 10);
                    t[9] = parseInt(options.par.parent().find("input.AA").val() || 0, 10)
                         + parseInt(options.par.parent().find("input.A3:eq(" + ind[0] + ")").val() || 0, 10)
                         + parseInt(options.par.parent().find("input.A4:eq(" + ind[0] + ")").val() || 0, 10);
                    t[10] = Math.max(t[6], t[9]);

                    options.par.parent().children(":eq(9)").find("input:eq(1)").val("");
                    options.par.parent().children(":eq(23)").find("input:eq(1)").val("");
                    options.par.parent().children(":eq(24)").find("input:eq(1)").val(""); 
                } else {
                    if(options.par.index() == 4){//추가작업
                      t0 = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(4)").find("input:eq(0)").val() || 0, 10)) * 14/100;
                      t1 = t0;
                      t2 = Math.max(t1, 0);

                      options.par.parent().children(":eq(9)").find("input:eq(1)").val(t0);
                      options.par.parent().children(":eq(23)").find("input:eq(1)").val(t1);
                      options.par.parent().children(":eq(24)").find("input:eq(1)").val(t2);
                      for(var j = 1; j < options.ind.split("_").length; j++){
                         options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val("");
                      }
                      options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(" + ind[0] + ")").val(t[0]);
                      return;
                   }
                }
             } else if(options.op == "AarrASnAAnSMAMax2"){//per/A05/tax_confirmation/earnings_tax_standard_report_23
                t[0] = 0;             
                var inp = options.par.parent().children().find("input.AarrASnAAnSMAMax2");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(1)").val(t[0]);
                if(t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10) > 20000000){                                 
                    t[1] = t[0] + parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10);
                    t[2] = t[1] - 20000000;
                    t[3] = t[2] + parseInt(options.par.parent().children().find("input.ASMAMax").val() || 0, 10) + parseInt(options.par.parent().children().find("input.ASMAESMnAAnMax").val() || 0, 10);
                    t[4] = t[3] - parseInt(options.par.parent().children().find("input.SMAMax").val() || 0, 10);
                    t[5] = t[4] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                    t[6] = t[5] + parseInt(options.par.parent().find("input.A2:eq(" + ind[0] + ")").val() || 0, 10);
                    if(options.par.index() == 2){
                       t[7] = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10)) *25/100;
                       t[8] = parseInt(options.par.parent().children().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                    } else if(options.par.index() == 4){
                       t[7] = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(2)").find("input:eq(" + ind[0] + ")").val() || 0, 10)) *25/100;
                       t[8] = parseInt(options.par.parent().children().find("input.S:eq(" + ind[0] + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children(":eq(4)").find("input:eq(" + ind[0] + ")").val() || 0, 10);
                    }
                    t[9] = t[8] * 14/100;
                    t[10] = t[7] + t[8] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                    t[11] = Math.max(t[10], parseInt(options.par.parent().find("input.Max:eq(" + ind[0] + ")").val() || 0, 10));
                    t[12] = Math.min(t[11] - t[10], parseInt(options.par.parent().find("input.ASMAMax:eq(" + ind[0] + ")").val() || 0, 10));

                    options.par.parent().children(":eq(10)").find("input:eq(0)").val("");
                    options.par.parent().children(":eq(16)").find("input:eq(1)").val("");
                } else {
                   if(options.par.index() == 4){//추가작업
                      t0 = (parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children(":eq(3)").find("input:eq(0)").val() || 0, 10))  * 14/100;
                      t1 = t0 + parseInt(options.par.parent().children(":eq(10)").find("input:eq(1)").val() || 0, 10) + parseInt(options.par.parent().children(":eq(15)").find("input:eq(1)").val() || 0, 10);

                      options.par.parent().children(":eq(9)").find("input:eq(1)").val(t0);
                      options.par.parent().children(":eq(16)").find("input:eq(1)").val(t1);
                      for(var j = 1; j < options.ind.split("_").length; j++){
                         options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val("");
                      }
                      //options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(" + ind[0] + ")").val(t[0]);
                      return;
                   }
                }
             } else {

             }                       
             for(var j = 2; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val(t[j-1]);
             }                       
           } else if(options.dividend == "T_0c_225"){//T_012  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "ASnESarrAMAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().find("input.A7").val() || 0, 10) - parseInt(options.par.parent().find("input.AASmnESarrAMAESnSAnSAnAAnSmarrAnS").val() || 0, 10);
                
             } else if(options.op == "AASmnESarrAMAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                t[0] = parseInt(options.par.parent().find("input.A7").val() || 0, 10) + parseInt(options.par.parent().find("input.ASnESarrAMAESnSAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                
             } else {

             } 
                t[1] = t[0];
                t[2] = t[1];
                var inp = options.par.parent().children().find("input.SmarrAMAESnSAnSAnAAnSmarrAnS");
                $(inp).each(function( index ) {
                     t[2] += parseInt($(this).val() || 0, 10);
                });
                t[3] = t[2] + parseInt(options.par.parent().find("input.AMAESnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[4] = Math.round(t[3] * parseInt(options.par.parent().find("input.MAESnSAnSAnAAnSmarrAnS").val() || 0, 10)/100);
                t[5] = t[4] + parseInt(options.par.parent().find("input.A4").val() || 0, 10);
                t[6] = t[5];
                t[7] = t[6] - parseInt(options.par.parent().find("input.SmnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[8] = t[7] + parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSAnAAnSmarrAnS").val() || 0, 10);
                t[9] = t[8] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[10] = t[9];
                var inp2 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp2).each(function( index ) {
                     t[10] += parseInt($(this).val() || 0, 10);
                });
                t[11] = t[10]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[12] = t[11] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10)
           
             for(var j = 0; j < options.ind.split("_").length - 4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 

             for(var k = 9; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             } 
                      
           } else if(options.dividend == "T_0d_225"){//T_013  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "ASnASnESarrAMAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                var inp = options.par.parent().children().find("input.ASnASnESarrAMAESnSAnSAnAAnSmarrAnS");
                t[0] = 0;
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.par.parent().find("input.AASmnASnESarrAMAESnSAnSAnAAnSmarrAnS").val() || 0, 10);              
             } else if(options.op == "AASmnASnESarrAMAESnSAnSAnAAnSmarrAnS"){//cor/A03/tax_confirmation/cor_tax_standard_control
                var inp = options.par.parent().children().find("input.ASnASnESarrAMAESnSAnSAnAAnSmarrAnS");
                t[0] = 0;
                $(inp).each(function( index ) {
                     t[0] += parseInt($(this).val() || 0, 10);
                });
                t[0] -= parseInt(options.my.val() || 0, 10);                
             } else {

             } 
             t[1] = t[0] + parseInt(options.par.parent().find("input.ASnESarrAMAESnSAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.AASmnESarrAMAESnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[2] = t[1];
                t[3] = t[2];
                var inp2 = options.par.parent().children().find("input.SmarrAMAESnSAnSAnAAnSmarrAnS");
                $(inp2).each(function( index ) {
                     t[3] += parseInt($(this).val() || 0, 10);
                });
                t[4] = t[3] + parseInt(options.par.parent().find("input.AMAESnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[5] = Math.round(t[4] * parseInt(options.par.parent().find("input.MAESnSAnSAnAAnSmarrAnS").val() || 0, 10)/100);
                t[6] = t[5] + parseInt(options.par.parent().find("input.A4").val() || 0, 10);
                t[7] = t[6];
                t[8] = t[7] - parseInt(options.par.parent().find("input.SmnSAnSAnAAnSmarrAnS").val() || 0, 10);
                t[9] = t[8] + parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10) - parseInt(options.par.parent().find("input.SmAnSAnAAnSmarrAnS").val() || 0, 10);
                t[10] = t[9] - parseInt(options.par.parent().find("input.Sm").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10);
                t[11] = t[10];
                var inp3 = options.par.parent().parent().parent().next().find("tbody").children().find("input.Aarr");
                $(inp3).each(function( index ) {
                     t[11] += parseInt($(this).val() || 0, 10);
                });
                t[12] = t[11]
                      - parseInt(options.par.parent().find("input.SAnSAnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.ASnAAnSmarrAnS").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SAAnSnSmarrAnS:eq(1)").val() || 0, 10)
                      - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10)
                      + parseInt(options.par.parent().find("input.AnSmAAnSmarrAnS").val() || 0, 10);
                t[13] = t[11] - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.SmarrAnS").val() || 0, 10) - parseInt(options.par.parent().parent().parent().next().find("tbody").children().find("input.Sm").val() || 0, 10)
           
             for(var j = 0; j < options.ind.split("_").length -4; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input").val(t[j]);
             } 
             for(var k = 10; k < options.ind.split("_").length; k++){
                 options.par.parent().parent().parent().next().find("tbody").children(":eq(" + ind[k] + ")").find("input").val(t[k]);
             } 
                      
           } else if(options.dividend == "T_0e_225"){//T_014  
             var ind = [], t = [];
             if(options.ind.split("_")){
                 for(var i = 0; i < options.ind.split("_").length; i++){
                     ind.push(options.ind.split("_")[i]);
                 }  
             }              
             if(options.op == "AarrASAarrSMASMnAAnMax"){//per/A05/tax_confirmation/earnings_tax_standard_report_29
                t[0] = parseInt(options.par.parent().children().find("input.A6:eq(1)").val() || 0, 10);
                var inp = options.par.parent().children().find("input.AarrASAarrSMASMnAAnMax");
                $(inp).each(function( index ) {
                    t[0] += parseInt($(this).val() || 0, 10);
                });
                if(t[0] + parseInt(options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(1)").val() || 0, 10) > 20000000){               
                    t[1] = t[0] + parseInt(options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(1)").val() || 0, 10);
                    t[2] = t[1] - 20000000;
                    t[3] = t[2];
                    var inp2 = options.par.parent().children().find("input.AarrSMAMax");
                    $(inp2).each(function( index ) {
                        t[3] += parseInt($(this).val() || 0, 10);
                    });
                    t[4] = t[3] - parseInt(options.par.parent().children().find("input.SMAMax").val() || 0, 10);
                    t[5] = t[4] * parseInt(options.par.parent().find("input.MAMax").val() || 0, 10);
                    t[6] = t[5] + parseInt(options.par.parent().find("input.A:eq(" + ind[0] + ")").val() || 0, 10);
                    t[7] = t[4] - parseInt(options.par.parent().find("input.SmMnAA").val() || 0, 10);
                    t[8] = t[7] * parseInt(options.par.parent().find("input.MnAA").val() || 0, 10);
                    t[9] = parseInt(options.par.parent().find("input.AA").val() || 0, 10)
                         + parseInt(options.par.parent().find("input.A3:eq(" + ind[0] + ")").val() || 0, 10)
                         + parseInt(options.par.parent().find("input.A4:eq(" + ind[0] + ")").val() || 0, 10);
                    t[10] = 0;
                    var inp3 = options.par.parent().children().find("input.T_014.AarrASAarrSMASMnAAnMax");
                    $(inp3).each(function( index ) {
                        t[10] += parseInt($(this).val() || 0, 10);
                    });
                    t[11] = t[1] - t[10];
                    t[10] = t[10] *25/100;
                    t[12] = t[11] *14/100;
                    t[13] = t[10] + t[12] + parseInt(options.par.parent().find("input.AA").val() || 0, 10) + parseInt(options.par.parent().find("input.A5").val() || 0, 10);
                    t[14] = Math.max(t[6], t[9]);   

                    options.par.parent().children(":eq(9)").find("input:eq(1)").val("");
                    options.par.parent().children(":eq(23)").find("input:eq(1)").val("");
                    options.par.parent().children(":eq(24)").find("input:eq(1)").val("");                
                } else {
                    if(options.par.index() == 4){//추가작업
                      t0 = parseInt(options.my.val() || 0, 10) * 25/100;
                      t1 = t0;
                      t2 = Math.max(t1, 0);

                      options.par.parent().children(":eq(9)").find("input:eq(1)").val(t0);
                      options.par.parent().children(":eq(23)").find("input:eq(1)").val(t1);
                      options.par.parent().children(":eq(24)").find("input:eq(1)").val(t2);

                      for(var j = 1; j < options.ind.split("_").length; j++){
                         options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val("");
                      }
                      options.par.parent().children(":eq(" + ind[1] + ")").find("input:eq(" + ind[0] + ")").val(t[0]);
                      return;
                   }
                }
             } else {

             } 
                                     
             for(var j = 1; j < options.ind.split("_").length; j++){
                 options.par.parent().children(":eq(" + ind[j] + ")").find("input:eq(" + ind[0] + ")").val(t[j-1]);
             }                       
           } else if(options.dividend == "T_10_223"){ //093, 043, T_10_043
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];                              
             if(options.op == "AarrnAarrS"){//sau/A01/AA01/healthcare 
                $(options.par.find("input.AarrnAarrS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });
                var inp = options.par.parent().children().find("input.AarrnAarrS:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                    t0 += parseInt($(this).val() || 0, 10);
                });                
                t0 -= parseInt(options.par.parent().children().find("input.AarrnAarrSm:eq(" + ind0 + ")").val() || 0, 10);        
             } else if(options.op == "AarrAarr"){//cor/connection/report/connection_addition_tax_01
                 $(options.par.find("input.AarrAarr")).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 var inp = options.par.parent().children().find("input.AarrAarr:eq(" + ind0 + ")");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                            
             } else if(options.op == "AarrnAarrSm"){//view의 ind수정해야함
                $(options.par.find("input.AarrnAarrSm")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });
                var inp = options.par.parent().children().find("input.AarrnAarrS:eq(" + ind3 + ")");
                $(inp).each(function( index ) {
                    t0 += parseInt($(this).val() || 0, 10);
                });
                t0 -= parseInt(options.my.val() || 0, 10);                
                var inp2 = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind1 + "))");       
             } else if(options.op == "AarrAvg"){//per/A03/tax_stsndard/stockbreeding_bussiness_earnings_calculation                                 
                var inp = options.par.find("input.AarrAvg");
                $(inp).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });
                var inp3 = options.par.parent().children().find("input.AarrAvg:eq(" + ind0 + ")");
                $(inp3).each(function( index ) {
                   t0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 = Math.round(t0/inp3.length);                                                                 
             } else if(options.op == "AarrS"){//per/A03/tax_stsndard/stockbreeding_bussiness_earnings_calculation                                 
                $(options.par.find("input.AarrS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrSm:eq(" + ind0 + ")").val() || 0, 10);                     
             } else if(options.op == "AarrSm"){//per/A03/tax_stsndard/stockbreeding_bussiness_earnings_calculation                                 
                $(options.par.find("input.AarrSm")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 = parseInt(options.par.parent().children().find("input.AarrS:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                      
             } else if(options.op == "AarrnAASmS"){//per/A04/deduction/tax_deduction_control                                 
                $(options.par.find("input.AarrnAASmS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                var inp = options.par.parent().children().find("input.AarrnAarrSS:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                   t0 += parseInt($(this).val() || 0, 10);
                });
                t0 -= parseInt(options.par.parent().children().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10); 
                t0 -= parseInt(options.my.val() || 0, 10);                     
             } else if(options.op == "AarrnAarrSS"){//per/A04/deduction/tax_deduction_control                                 
                $(options.par.find("input.AarrnAarrSS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                var inp = options.par.parent().children().find("input.AarrnAarrSS:eq(" + ind0 + ")");
                $(inp).each(function( index ) {
                   t0 += parseInt($(this).val() || 0, 10);
                });
                t0 -= parseInt(options.par.parent().children().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10); 
                t0 -= parseInt(options.par.parent().children().find("input.AarrnAASmS:eq(" + ind0 + ")").val() || 0, 10);                    
             } else{                  
                                             
             }

             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");  
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");  
            
             thissum.val(t0); 
             var inp2 = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind1 + "))");
             $(inp2).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });        
             sumsum.val(t1);               
          } else if(options.dividend == "T_10_223_a"){//44, T_10_043_a   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];    
             var ind4 = options.ind.split("_")[4];                 
             if(options.op == "AarrSm"){ //cor/A06/nonprofit/a2102
                 var inp = options.par.find("input.AarrSm");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 
                 t0 = parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                 t1 = parseInt(options.par.parent().children(":eq(7)").find("input:eq(0)").val() || 0, 10) - arr0;              
             } else if(options.op == "AarrSm2"){//cor/A03/tax_confirmation/cor_tax_standard_report
                 var inp = options.par.find("input.AarrSm2");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });
                 t0 = parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                 t1 = parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")").val() || 0, 10) - arr0; 
             } else if(options.op == "ASm"){//cor/A06/nonprofit/a2101
                 arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.A").val() || 0, 10); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);  
                 t1 = t0 + parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(1)").val() || 0, 10);             
             } else if(options.op == "SMnSarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_31                               
                arr0 = ((parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmMnSarr").val() || 0, 10)) * 2/3).toFixed(2); 
                t0 = parseInt(options.par.find("input.S:eq(" + ind0 + ")").val() || 0, 10);
                var inp = options.par.parent().children().find("input.SMnSarr");
                $(inp).each(function( index ) {
                   t0 -= parseInt($(this).val() || 0, 10);
                });
                t1 = ((t0 - parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(1)").val() || 0, 10)) * 2/3).toFixed(2);                   
             } else if(options.op == "SmMnSarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_31                               
                arr0 = ((parseInt(options.par.find("input.SMnSarr").val() || 0, 10) - parseInt(options.my.val() || 0, 10)) * 2/3).toFixed(2); 
                t0 = parseInt(options.par.find("input.S:eq(" + ind1 + ")").val() || 0, 10);
                var inp = options.par.parent().children().find("input.SmMnSarr");
                $(inp).each(function( index ) {
                   t0 -= parseInt($(this).val() || 0, 10);
                });
                t1 = ((parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(0)").val() || 0, 10) - t0) * 2/3).toFixed(2);                   
             } else {
                
             }
              
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 
                         
             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");               
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")"); 
  
             thissum.val(t0);                        
             sumsum.val(t1);                                                                          
          } else if(options.dividend == "T_10_223_b"){//34  083 143, T_10_043_b
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];  
             if(options.op == "AarrnASA"){//cor/A05/international_trade_01/reserve_earnings_sum_tax_judge_02                                               
                 var inp = options.par.find("input.AarrnASA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 var inp3 = options.par.parent().children().find("input.AarrnASA:eq(" + ind0 + ")");
                 $(inp3).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });  
                 t0 -= parseInt(options.par.parent().children().find("input.AarrnSmAAA:eq(" + ind0 + ")").val() || 0, 10);                                             
             } else if(options.op == "AarrnSmAAA"){//cor/A05/international_trade_01/reserve_earnings_sum_tax_judge_02                                               
                 var inp = options.par.find("input.AarrnSmAAA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                                                
                 var inp3 = options.par.parent().children().find("input.AarrnASA:eq(" + ind0 + ")");
                 $(inp3).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t0 -= parseInt(options.my.val() || 0, 10);
             } else if(options.op == "AarrS"){//cor/A02/subject_01/a08, cor/A06/sincerity/aa05
                 var inp = options.par.find("input.AarrS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 

                 t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrSmnA:eq(" + ind0 + ")").val() || 0, 10);                 
             } else if(options.op == "AarrSm"){//cor/connection/report/connection_agriculture_special_tax_standard_report
                 var inp = options.par.find("input.AarrSm");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind4 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);       
             } else if(options.op == "ASarr"){//cor/connection/report/connection_base_tax_report
                 var inp = options.par.find("input.ASarr");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 //options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.my.val() || 0, 10); 
                 var inp3 = options.par.parent().children().find("input.ASmarr:eq(" + ind0 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });                         
             } else if(options.op == "ASmarr"){//cor/connection/report/connection_base_tax_report
                 var inp = options.par.find("input.ASmarr");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.par.siblings().find("input.ASarr:eq(" + ind0 + ")").val() || 0, 10); 
                 var inp3 = options.par.parent().children().find("input.ASmarr:eq(" + ind0 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });       
             } else if(options.op == "AarrA"){//cor/connection/report/connection_earnings_amount_control, sau/A01/AA01/house
                 var inp = options.par.find("input.AarrA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 t0 = parseInt(options.par.parent().children().find("input.A:eq(" + ind3 + ")").val() || 0, 10) + parseInt(options.my.val() || 0, 10); 
             } else if(options.op == "AvgS"){//cor/A06/common_benefit_01/application_earnings_use, 미완료(추가작업)
                 var inp = options.par.find("input:not(:eq(" + ind1 + "))");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr0 /= inp.length;
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind3 + ")").val() || 0, 10); 
             } else if(options.op == "Sm"){//cor/A06/nonprofit/a2103
                 var inp = options.par.find("input.Sm");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind2 + ")").val() || 0, 10)
                    - parseInt(options.my.val() || 0, 10)
                    - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind2 + ")").val() || 0, 10);
             } else {
 
             }  
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")"); 
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind1 + ")"); 

             thissum.val(t0); 
             var inp2  = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind1 + "))");
             $(inp2).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });                                                         
             sumsum.val(t1);                                                                                                                                   
           } else if(options.dividend == "T_10_223_c"){//32  073, T_10_043_c
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];   
             if(options.op == "AvgarrD"){//cor/base/depreciation/a01                                               
                 var inp = options.par.find("input.AvgarrD");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                                                
                 arr0 = Math.round(arr0/inp.length); 
                 t0 = parseInt(options.my.val() || 0, 10)/parseInt(options.par.parent().children().find("input.AvgarrDd:eq(" + ind0 + ")").val() || 1, 10);
                 t1 = arr0/parseInt(options.par.parent().children(":eq(1)").find("input:eq(" + ind1 + ")").val() || 1, 10);
             } else if(options.op == "AvgarrD2"){//cor/base/depreciation/a01                                               
                 var inp = options.par.find("input.AvgarrD2");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                                                
                 arr0 = Math.round(arr0/inp.length); 
                 t0 = parseInt(options.my.val() || 0, 10)/parseInt(options.par.parent().children().find("input.AvgarrDd2:eq(" + ind0 + ")").val() || 1, 10);
                 t1 = arr0/parseInt(options.par.parent().children(":eq(1)").find("input:eq(" + ind1 + ")").val() || 1, 10);
             } else if(options.op == "AvgarrDd"){//cor/base/depreciation/a01                                               
                 var inp = options.par.find("input.AvgarrDd");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                                                
                 arr0 = Math.round(arr0/inp.length); 
                 t0 = parseInt(options.par.parent().children().find("input.AvgarrD:eq(" + ind0 + ")").val() || 0, 10)/parseInt(options.my.val() || 1, 10);
                 t1 = parseInt(options.par.parent().children(":eq(0)").find("input:eq(" + ind1 + ")").val() || 1, 10)/arr0;
             } else if(options.op == "AvgarrDd2"){//cor/base/depreciation/a01                                               
                 var inp = options.par.find("input.AvgarrDd2");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                                                
                 arr0 = Math.round(arr0/inp.length); 
                 t0 = parseInt(options.par.parent().children().find("input.AvgarrD2:eq(" + ind0 + ")").val() || 0, 10)/parseInt(options.my.val() || 1, 10);
                 t1 = parseInt(options.par.parent().children(":eq(0)").find("input:eq(" + ind1 + ")").val() || 1, 10)/arr0;
             }  
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")"); 
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");             
             thissum.val(t0);                                
             sumsum.val(t1);                                                                                                                                   
           } else if(options.dividend == "T_10_224"){ //46 a3 044, T_10_044
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];       
             if(options.op == "Aarr"){//cor/A06/common_benefit_01/contribution_property_report 
                $(options.par.find("input.Aarr")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children(":eq(1)").find("td:eq(" + ind0 + ")").children("input").val() || 0, 10); 
                t1 = arr0 - parseInt(options.par.parent().children(":eq(1)").find("td:eq(" + ind1 + ")").children("input").val() || 0, 10);         
             } else if(options.op == "AarrSm"){//cor/A06/common_benefit_01/contribution_property_report
                $(options.par.find("input.AarrSm")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.par.parent().children(":eq(0)").find("td:eq(" + ind0 + ")").children("input").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                t1 = parseInt(options.par.parent().children(":eq(0)").find("td:eq(" + ind1 + ")").children("input").val() || 0, 10) - arr0;           
             } else{                  
                                             
             }

             options.par.find("td:eq(" + ind1 + ")").children("input").val(arr0);  

             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("td:eq(" + ind3 + ")").children("input");  
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("td:eq(" + ind4 + ")").children("input"); 

             thissum.val(t0); 
             sumsum.val(t1);               
          } else if(options.dividend == "T_10_225"){//41, T_10_045   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2], 
                 ind3 = options.ind.split("_")[3];
                 ind4 = options.ind.split("_")[4];          
             if(options.op == "M"){//cor/A06/nonprofit/common_benefit_addition_tax, cor/connection/report/connection_addition_tax_01, cor/A03/tax_confirmation/addition_tax, per/A05/tax_confirmation/earnings_tax_standard_report_21
                 var val = options.par.find("input.Mp").val();
                 if(val == "10/100" || val == "20(10)/100"){
                    val = 0.1;
                 } else if(val == "40/100"){
                    val = 0.4;
                 } else {
                    val = parseInt(options.par.find("input.Mp").val() || 0, 10);
                 }  
                 arr0 += parseInt(options.my.val() || 0, 10) * val;           
             } else{
                
             }  

             options.par.find("input:eq(" + ind1 + ")").val(arr0);                                 
                        
             var sumsum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");
             
             var inp = options.par.parent().children().not(".nodel").find("input:eq(" + ind1 + ")");
             $(inp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t0);                                                                                                      
          } else if(options.dividend == "T_10_225_a"){//41   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2], 
                 ind3 = options.ind.split("_")[3];
                 ind4 = options.ind.split("_")[4];          
             if(options.op == "M"){//per/A05/tax_confirmation/earnings_tax_standard_report_21
                 var val = options.par.find("input.Mp").val();
                 if(val == "10/100" || val == "20(10)/100"){
                    val = 0.1;
                 } else if(val == "40/100"){
                    val = 0.4;
                 } else if(val == "14/10,000"){
                    val = 0.0014;
                 } else {
                    val = parseInt(options.par.find("input.Mp").val() || 0, 10);
                 } 
                 arr0 += parseInt(options.my.val() || 0, 10) * val;

                 var val1 = options.par.next().find("input.Mp").val();
                 if(val1 == "10/100" || val1 == "20(10)/100"){
                    val1 = 0.1;
                 } else if(val1 == "40/100"){
                    val1 = 0.4;
                 } else if(val1 == "14/10,000"){
                    val1 = 0.0014;
                 } else {
                    val1 = parseInt(options.par.next().find("input.Mp").val() || 0, 10);
                 }  
                  
                 arr01 = 0;
                 arr01 += parseInt(options.par.next().find("input:eq(" + ind0 + ")").val() || 0, 10) * val1;  
                 if(arr0 > arr01){
                    arr0 = arr0;
                 } else{
                    arr0 = arr01;
                 }        
             } else{
                
             }  

             options.par.find("input:eq(" + ind1 + ")").val(arr0);                                 
                        
             var sumsum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");
             
             var inp = options.par.parent().children().not(".nodel").find("input:eq(" + ind1 + ")");
             $(inp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t0);                                                                                                      
          } else if(options.dividend == "T_10_225_b"){  
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2], 
                 ind3 = options.ind.split("_")[3];
                 ind4 = options.ind.split("_")[4];          
             if(options.op == "M"){//per/A05/tax_confirmation/earnings_tax_standard_report_21
                 var val = options.par.find("input.Mp").val();
                 if(val == "10/100" || val == "20(10)/100"){
                    val = 0.1;
                 } else if(val == "40/100"){
                    val = 0.4;
                 } else if(val == "14/10,000"){
                    val = 0.0014;
                 } else {
                    val = parseInt(options.par.find("input.Mp").val() || 0, 10);
                 } 
                 arr0 += parseInt(options.my.val() || 0, 10) * val; 

                 var val1 = options.par.prev().find("input.Mp").val();
                 if(val1 == "10/100" || val1 == "20(10)/100"){
                    val1 = 0.1;
                 } else if(val1 == "40/100"){
                    val1 = 0.4;
                 } else if(val1 == "14/10,000"){
                    val1 = 0.0014;
                 } else {
                    val1 = parseInt(options.par.prev().find("input.Mp").val() || 0, 10);
                 }  
                 
                 arr01 = 0;
                 arr01 += parseInt(options.par.prev().find("input:eq(" + ind0 + ")").val() || 0, 10) * val1;  
                 if(arr0 > arr01){
                    arr0 = arr0;
                 } else{
                    arr0 = arr01;
                 }        
             } else{
                
             }  

             options.par.prev().find("input:eq(" + ind1 + ")").val(arr0);                                 
                        
             var sumsum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");
             
             var inp = options.par.parent().children().not(".nodel").find("input:eq(" + ind1 + ")");
             $(inp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t0);                                                                                                      
          } else if(options.dividend == "T_11_223"){   //51, T_11_043
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2];  
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];   
             if(options.op == "AADA"){//cor/A05/international_trade_01/reserve_earnings_sum_tax_judge_01 
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AADA").val() || 0, 10);  
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.AADA:eq(" + ind0 + ")").val() || 0, 10);                   
                t1 = t0 + parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10);  
                t2 = t0/parseInt(options.par.parent().parent().prev().find("input:eq(0)").val() || 1, 10);  
                t3 = t2 + parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10);                
             } else if(options.op == "AarrSmS"){//cor/A06/nonprofit/a2102
                var inp = options.par.find("input.AarrSmS");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.A:eq(" + ind0 + ")").val() || 0, 10);
                t1 = parseInt(options.par.parent().children(":eq(5)").find("input:eq(0)").val() || 0, 10) - arr0;                 
                t0 = parseInt(options.par.parent().children(":eq(5)").find("input:eq(0)").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t2 = t0 - parseInt(options.par.parent().children(":eq(8)").find("input:eq(" + ind0 + ")").val() || 0, 10);   
                t3 = t1 - parseInt(options.par.parent().children(":eq(8)").find("input:eq(0)").val() || 0, 10);
             } else if(options.op == "AarrAS"){//per/A02/subject/reception_cost_control_01
                var inp = options.par.find("input.AarrAS");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.A2:eq(" + ind0 + ")").val() || 0, 10); 
                t1 = parseInt(options.par.parent().children(":eq(6)").find("input:eq(" + ind1 + ")").val() || 0, 10) + arr0;               
                t2 = t0 -parseInt(options.par.parent().children().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10);                                    
                t3 = t1 - parseInt(options.par.parent().children(":eq(10)").find("input:eq(1)").val() || 0, 10);
             } else if(options.op == "AarrASm"){//per/A02/subject/reception_cost_control_01
                var inp = options.par.find("input.AarrASm");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.A:eq(" + ind0 + ")").val() || 0, 10); 
                t1 = parseInt(options.par.parent().children(":eq(8)").find("input:eq(" + ind1 + ")").val() || 0, 10) - arr0;               
                t2 = parseInt(options.par.parent().children().find("input.S:eq(" + ind0 + ")").val() || 0, 10) - t0;                                    
                t3 = parseInt(options.par.parent().children(":eq(8)").find("input:eq(1)").val() || 0, 10) - t1;
             } else{                  
                                             
             }  

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")").val(t0);
             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")").val(t1); 
             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")").val(t2); 
             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")").val(t3);                                   
          } else if(options.dividend == "T_11_223_a"){//T_11_043_a   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5];
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind1 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");

             if(options.op == "AnSmarrAAnS"){//cor/A06/nonprofit/a2101
                 arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input:eq(1)").val() || 0, 10)
                 t0 = parseInt(options.par.parent().children().find("input.A2:eq(" + ind4 + ")").val() || 0, 10);
                 var inp = options.par.parent().children().find("input.AnSmarrAAnS:eq(" + ind4 + ")");
                 $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t0 += parseInt(options.par.parent().children().find("input.A:eq(" + ind4 + ")").val() || 0, 10);
                 t1 = t0 - parseInt(options.par.parent().children().find("input.ASm:eq(" + ind4 + ")").val() || 0, 10);                   
             }

             options.par.find("input:eq(" + ind1 + ")").val(arr0);

             thissum.val(t0);
             thissum1.val(t1);
                           
             t2 = parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10)
                + parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10);
             t3 = parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10)
                + parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10);
             sumsum.val(t2);                                                                             
             sumsum1.val(t3);                           
          } else if(options.dividend == "T_11_223_b"){//T_11_043_b   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4],
                 ind5 = options.ind.split("_")[5];
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")"); 

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");          
             if(options.op == "ASmM"){//per/A05/tax_confirmation/earnings_tax_standard_report_27
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input:eq(3)").val() || 0, 10);
 
                t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                t1 = (t0 * parseInt(options.par.parent().children().find("input.AM:eq(" + ind0 + ")").val() || 0, 10)/100).toFixed(2);
             } else {
                
             }
                
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
                             
             thissum.val(t0);
             thissum1.val(t1);
                          
             t2 = parseInt(thissum.val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(3)").val() || 0, 10);              
             t3 = parseInt(thissum1.val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(3)").val() || 0, 10);

             sumsum.val(t2); 
             sumsum1.val(t3);                                          
          } else if(options.dividend == "T_11_223_c"){//T_11_043_c   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")"); 
             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");
 
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")");              
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");

             var rate = parseInt(options.par.siblings().find("input.MpT").val() || 0, 10);
              
             if(options.op == "MMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.par.parent().find("input.M:eq(" + ind4 + ")").val() || 0, 10) * parseInt(options.my.val() || 0, 10);                    
             } else {
                
             }
                
                 var t2 = t0 * 2; //재작성
                             
             thissum.val(t0);
             thissum1.val(t2);
                          
             t1  += parseInt(thissum.val() || 0, 10)  * rate;              
             t3  += parseInt(thissum1.val() || 0, 10) * rate; 

             sumsum.val(t1); 
             sumsum1.val(t3);                                          
          } else if(options.dividend == "T_11_223_d"){//T_11_043_d
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2];  
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];   
             if(options.op == "AarrSMin"){//per/A05/AA01/a05 
                var inp = options.par.find("input.AarrSMin");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrSmMin:eq(" + ind0 + ")").val() || 0, 10);                               
                t2 = Math.min(t0, parseInt(options.par.parent().children().find("input.Min:eq(" + ind0 + ")").val() || 0, 10));                                    
             } else if(options.op == "AarrEMin"){//per/A05/AA01/a05 
                var inp = options.par.find("input.AarrEMin");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.my.val() || 0, 10);                               
                t2 = Math.min(t0, parseInt(options.par.parent().children().find("input.Min2:eq(" + ind0 + ")").val() || 0, 10));                                   
             } else if(options.op == "AarrSmMin"){//per/A05/AA01/a05 
                var inp = options.par.find("input.AarrSmMin");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.par.parent().children().find("input.AarrSMin:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                               
                t2 = Math.min(t0, parseInt(options.par.parent().children().find("input.Min:eq(" + ind0 + ")").val() || 0, 10));                                    
             } else{                  
                                             
             }  

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")").val(t0);
             var inp = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind5 + "))");
             $(inp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });            
             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")").val(t1); 

             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")").val(t2); 
             var inp2 = options.par.parent().children(":eq(" + ind3 + ")").find("input:not(:eq(" + ind5 + "))");
             $(inp2).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });
             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")").val(t3);                                   
          } else if(options.dividend == "T_11_223_e"){   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2];  
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];   
             if(options.op == "MSSarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_31 
                t0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.M:eq(" + ind0 + ")").val() || 0, 10)/100;                   
                t1 = ((t0 - parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(1)").val() || 0, 10)) * 2/3).toFixed(2); 
                t2 = t0;
                var inp = options.par.parent().children().find("input.SMnSarr");
                $(inp).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                });  
                t3 = ((t2 - parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10)) * 2/3).toFixed(2);              
             } else if(options.op == "MSmSarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_31 
                t0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().find("input.M:eq(" + ind0 + ")").val() || 0, 10)/100;                   
                t1 = ((parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(0)").val() || 0, 10) - t0) * 2/3).toFixed(2); 
                t2 = t0;
                var inp = options.par.parent().children().find("input.SmMnSarr");
                $(inp).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                });  
                t3 = ((parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10) - t2) * 2/3).toFixed(2);              
             } else{                  
                                             
             }  

             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")").val(t0);
             options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")").val(t1); 
             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")").val(t2); 
             options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")").val(t3);                                   
          } else if(options.dividend == "T_12_223"){//T_12_043   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7];

             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")"); 

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind6 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");              
             if(options.op == "ASarrSM"){//per/A05/tax_confirmation/earnings_tax_standard_report_27
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.A").val() || 0, 10);
                t0 = parseInt(options.my.val() || 0, 10);
                var inp = options.par.parent().children().find("input.ASmarrSM");
                $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                }); 
                t1 = t0 - parseInt(options.par.parent().children().find("input.ASmM").val() || 0, 10);
                t2 = (t1 * parseInt(options.par.parent().children().find("input.M1").val() || 0, 10)/100).toFixed(2);
             } else if(options.op == "ASmarrSM"){//per/A05/tax_confirmation/earnings_tax_standard_report_27
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.A").val() || 0, 10);
                t0 = parseInt(options.par.parent().children().find("input.ASarrSM").val() || 0, 10);
                var inp = options.par.parent().children().find("input.ASmarrSM");
                $(inp).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                }); 
                t1 = t0 - parseInt(options.par.parent().children().find("input.ASmM").val() || 0, 10);
                t2 = (t1 * parseInt(options.par.parent().children().find("input.M1").val() || 0, 10)/100).toFixed(2);
             } else {
                
             }
                
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
                             
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
                          
             t3 = parseInt(thissum.val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10);              
             t4 = parseInt(thissum1.val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10);
             t5 = parseInt(thissum2.val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10);

             sumsum.val(t3); 
             sumsum1.val(t4);
             sumsum2.val(t5);                                             
          } else if(options.dividend == "T_12_223_a"){//T_12_043_a   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];
             var ind7 = options.ind.split("_")[7];

             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")"); 

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind6 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");              
             if(options.op == "SMnASnMSarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_31
                arr0 = ((parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("inputSmMnASnMSarr").val() || 0, 10)) * 2/3).toFixed(2);                
                var inp = options.par.parent().children().find("input.SMnASnMSarr");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 -= parseInt(options.par.parent().children().find("input.SMnASmnMSarr").val() || 0, 10);
                t1 = (t0 * parseInt(options.par.parent().children().find("input.MSSarr").val() || 0, 10)/100).toFixed(2);
                t2 = parseInt(options.par.parent().children().find("input.S:eq(0)").val() || 0, 10);
                var inp2 = options.par.parent().children().find("input.SMnSarr");
                $(inp2).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                });                
             } else if(options.op == "SmMnASnMSarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_31
                arr0 = ((parseInt(options.par.find("inputSMnASnMSarr").val() || 0, 10) - parseInt(options.my.val() || 0, 10)) * 2/3).toFixed(2);                
                var inp = options.par.parent().children().find("input.SmMnASnMSarr");
                $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                }); 
                t0 -= parseInt(options.par.parent().children().find("input.SmMnASmnMSarr").val() || 0, 10);
                t1 = (t0 * parseInt(options.par.parent().children().find("input.MSmSarr").val() || 0, 10)/100).toFixed(2);
                t2 = parseInt(options.par.parent().children().find("input.S:eq(1)").val() || 0, 10);
                var inp2 = options.par.parent().children().find("input.SMnSarr");
                $(inp2).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                });                
             } else {
                
             }
                
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
                             
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
                          
             t3 = ((parseInt(thissum.val() || 0, 10)
                - parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10)) * 2/3).toFixed(2);              
             t4 = ((parseInt(thissum1.val() || 0, 10)
                - parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10)) * 2/3).toFixed(2);
             t5 = ((parseInt(thissum2.val() || 0, 10)
                - parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10)) * 2/3).toFixed(2);

             sumsum.val(t3); 
             sumsum1.val(t4);
             sumsum2.val(t5);                                             
          } else if(options.dividend == "T_12_223_b"){ //T_12_043_b    수정 ?  
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")"); 

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind6 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");

             var rate = parseInt(options.par.siblings().find("input.MpT").val() || 0, 10);
              
             if(options.op == "SmMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.par.parent().find("input.S:eq(" + ind5 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                    
             } else {
                
             }
                
                 var t1 = t0 * parseInt(options.par.parent().children().find("input.MM:eq(" + ind5 + ")").val() || 0, 10);
                 var t2 = t1 * 2; //재작성
                             
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
                          
             t3  += parseInt(thissum.val() || 0, 10)  * rate;              
             t4  += parseInt(thissum1.val() || 0, 10) * rate; 
             t5  += parseInt(thissum2.val() || 0, 10) * rate; 

             sumsum.val(t3); 
             sumsum1.val(t4);
             sumsum2.val(t5);                                             
          } else if(options.dividend == "T_12_223_c"){//T_12_043_c   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6];
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind1 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind1 + ")");

             if(options.op == "MAnSarrAnS"){//cor/A06/nonprofit/a2101
                 t0 = Math.round(parseInt(options.par.parent().children().find("input.M").val() || 0, 10) * parseInt(options.my.val() || 0, 10)/100, 2);
                 t1 = t0;
                 var inp = options.par.parent().children().find("input.AnSmarrAAnS:eq(" + ind5 + ")");
                 $(inp).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 += parseInt(options.par.parent().children().find("input.Aarr:eq(" + ind5 + ")").val() || 0, 10);
                 t2 = t1 - parseInt(options.par.parent().children().find("input.ASm:eq(" + ind5 + ")").val() || 0, 10);                   
             } else if(options.op == "AnSarrAnS"){//cor/A06/nonprofit/a2101
                 var inp = options.par.parent().children().find("input.AnSarrAnS:eq(" + ind5 + ")");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0;
                 t1 += parseInt(options.par.parent().children().find("input.A2:eq(" + ind5 + ")").val() || 0, 10);
                 var inp2 = options.par.parent().children().find("input.AnSmarrAAnS:eq(" + ind5 + ")");
                 $(inp2).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 = t1 - parseInt(options.par.parent().children().find("input.ASm:eq(" + ind5 + ")").val() || 0, 10);                   
             }

             thissum.val(t0);
             thissum1.val(t2);
             thissum2.val(t4); 
                          
             t3 = parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10)
                + parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind6 + ")").val() || 0, 10);
             t4 = parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10)
                + parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")").val() || 0, 10);
             t5 = parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10)
                + parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")").val() || 0, 10);
             sumsum.val(t3);                                                                             
             sumsum1.val(t4);              
             sumsum2.val(t5);             
          } else if(options.dividend == "T_13_223"){//T_13_043   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6],
                 ind7 = options.ind.split("_")[7];
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind1 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind1 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind1 + ")");
              
             if(options.op == "AnAarrSarrnMnSarrAnS"){//cor/A06/nonprofit/a2101
                                    
             } else if(options.op == "AnAarrSmarrnMnSmarrAnS"){//cor/A06/nonprofit/a2101
                                   
             } else {

             }
             arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input:eq(" + ind6 + ")").val() || 0, 10); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);   

                 var inp2 = options.par.parent().children().find("input.AnAarrSarrnMnSarrAnS:eq(" + ind6 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AnAarrSmarrnMnSmarrAnS:eq(" + ind6 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 = Math.round(t0 * parseInt(options.par.parent().children().find("input.MAnSarrAnS").val() || 0, 10)/100, 2);
                 t4 = t2;
                 var inp4 = options.par.parent().children().find("input.AnSmarrAAnS:eq(" + ind6 + ")");
                 $(inp4).each(function( index ) {
                     t4 -= parseInt($(this).val() || 0, 10);
                 });
                 t4 += parseInt(options.par.parent().children().find("input.A:eq(" + ind6 + ")").val() || 0, 10);
                 var t6 = t4 - parseInt(options.par.parent().children().find("input.ASm:eq(" + ind6 + ")").val() || 0, 10); 

             thissum.val(t0);
             thissum1.val(t2);
             thissum2.val(t4);
             thissum3.val(t6); 

             var t7 = 0;                           
             t1 = parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10);
             t3 = parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10);
             t5 = parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10);
             t7 = parseInt(options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10) + parseInt(options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind7 + ")").val() || 0, 10);
             sumsum.val(t1);                                                                             
             sumsum1.val(t3);              
             sumsum2.val(t5);             
             sumsum3.val(t7);
          } else if(options.dividend == "T_14_225"){//T_14   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 

             var suminp   = options.par.parent().children(":eq(" + ind2 + ")").find("input").not(":eq(" + ind8 + ")");
             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input").not(":eq(" + ind8 + ")");
             var suminp2  = options.par.parent().children(":eq(" + ind4 + ")").find("input").not(":eq(" + ind8 + ")");
             var suminp3  = options.par.parent().children(":eq(" + ind5 + ")").find("input").not(":eq(" + ind8 + ")");
             var suminp4  = options.par.parent().children(":eq(" + ind6 + ")").find("input").not(":eq(" + ind8 + ")");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind8 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind8 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind8 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind8 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind8 + ")");
              
             if(options.op == "AarrnAAarrSarrnASarrnSAnASnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAAarrSarrnASarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
 
                 t0 = parseInt(options.par.parent().children().find("input.A5:eq(" + ind7 + ")").val() || 0, 10); 
                 var inp2 = options.par.parent().children().find("input.AarrnAAarrSarrnASarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSmarrnASarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0;
                 var inp4 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp4).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                 });
                 var inp5 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp5).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t2  = t1 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind7 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind7 + ")").val() || 0, 10);
                 var t3  = t2 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind7 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind7 + ")").val() || 0, 10);
                 var t4 = t3 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind7 + ")").val() || 0, 10);                       
             } else if(options.op == "AarrnAAarrSmarrnASarrnSAnASnA"){ //cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAAarrSmarrnASarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
 
                 t0 = parseInt(options.par.parent().children().find("input.A5:eq(" + ind7 + ")").val() || 0, 10); 
                 var inp2 = options.par.parent().children().find("input.AarrnAAarrSarrnASarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSmarrnASarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 }); 
                 t1 = t0;
                 var inp4 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp4).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                 });
                 var inp5 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind7 + ")");
                 $(inp5).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t2  = t1 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind7 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind7 + ")").val() || 0, 10);
                 var t3  = t2 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind7 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind7 + ")").val() || 0, 10);
                 var t4 = t3 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind7 + ")").val() || 0, 10);                      
             } else if(options.op == "AarrnASmnSAnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnASmnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.A6:eq(" + ind7 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind7 + ")").val() || 0, 10); 
              
                 t1 = t0;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind2 + ")").find("input.A2:eq(" + ind7 + ")");    
                 $(inp3).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t2 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind7 + ")").val() || 0, 10); 
                 t3 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10);  
                 t4 = t2 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind7 + ")").val() || 0, 10);                
             } else if(options.op == "AarrnSmnSnAarrnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnSmnSnAarrnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.S2:eq(" + ind7 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 t1 = t0;                                                 
                 var inp2 = options.par.parent().children().not(":eq(" + ind2 + ")").find("input.A2:eq(" + ind7 + ")");    
                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t2 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind7 + ")").val() || 0, 10); 
                 t3 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10);  
                 t4 = t2 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind7 + ")").val() || 0, 10);               
             } else if(options.op == "AarrnAarrAnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnAarrAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.A3:eq(" + ind7 + ")").val() || 0, 10) + parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.AarrnAarrAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10);
                 t1 = t0;                                                 
                 var inp2 = options.par.parent().children().not(":eq(" + ind2 + ")").find("input.A2:eq(" + ind7 + ")");    
                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 t2 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind7 + ")").val() || 0, 10); 
                 t3 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10);  
                 t4 = t2 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind7 + ")").val() || 0, 10);               
             } else {
                
             }
                                                           
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
             thissum3.val(t3); 
             thissum4.val(t4); 

             var t7 = 0, t8 = 0, t9 = 0;                           
             $(suminp).each(function( index ) {
                 t5 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t5); 
             $(suminp1).each(function( index ) {
                 t6 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t6); 
             $(suminp2).each(function( index ) {
                 t7 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t7);
             $(suminp3).each(function( index ) {
                 t8 += parseInt($(this).val() || 0, 10);
             });             
             sumsum3.val(t8);
             $(suminp4).each(function( index ) {
                 t9 += parseInt($(this).val() || 0, 10);
             });             
             sumsum4.val(t9);                                              
          } else if(options.dividend == "T_14_225_a"){//T_14_91   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind8 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind8 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind8 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind8 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind8 + ")");

             var rate = parseInt(options.par.siblings().find("input.MpT").val() || 0, 10);
              
             if(options.op == "MASSMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.siblings().find("input.MASSMM:eq(" + ind7 + ")").val() || 0, 10);                    
             } else {
                
             }
                
                 t2 = t0 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind7 + ")").val() || 0, 10);
                 t4  = t2 - parseInt(options.par.parent().children().find("input.SmMM:eq(" + ind7 + ")").val() || 0, 10);
                 var t6 = t4 * parseInt(options.par.parent().children().find("input.MM:eq(" + ind7 + ")").val() || 0, 10);
                 var t8 = t6 * 2; //재작성
                             
             thissum.val(t0);
             thissum1.val(t2);
             thissum2.val(t4);
             thissum3.val(t6); 
             thissum4.val(t8); 

             var t7 = 0, t9 = 0;                           
             t1  += parseInt(thissum.val() || 0, 10)  * rate;              
             t3  += parseInt(thissum1.val() || 0, 10) * rate; 
             t5  += parseInt(thissum2.val() || 0, 10) * rate; 
             t7  += parseInt(thissum3.val() || 0, 10) * rate; 
             t9  += parseInt(thissum4.val() || 0, 10) * rate; 

             sumsum.val(t1); 
             sumsum1.val(t3);
             sumsum2.val(t5);
             sumsum3.val(t7);
             sumsum4.val(t9);                                              
          } else if(options.dividend == "T_14_225_b"){//추가작업  
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind8 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind8 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind8 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind8 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind8 + ")");

             var rate = parseInt(options.par.siblings().find("input.MpT").val() || 0, 10);
              
             if(options.op == "MAarrSmMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 var inp = options.par.parent().children().find("input.MAarrSmMM:eq(" + ind0 + ")");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                     
             } else {
                
             }
                
                 t2 = parseInt(options.par.parent().children().find("input.S2:eq(" + ind0 + ")").val() || 0, 10) - t0;
                 t4  = t2 - parseInt(options.par.parent().children().find("input.SmMM:eq(" + ind7 + ")").val() || 0, 10);
                 var t6 = t4 * parseInt(options.par.parent().children().find("input.MM:eq(" + ind7 + ")").val() || 0, 10);
                 var t8 = t6 * 2; //재작성
                             
             thissum.val(t0);
             thissum1.val(t2);
             thissum2.val(t4);
             thissum3.val(t6); 
             thissum4.val(t8); 

             var t7 = 0, t9 = 0;                           
             t1  += parseInt(thissum.val() || 0, 10)  * rate;              
             t3  += parseInt(thissum1.val() || 0, 10) * rate; 
             t5  += parseInt(thissum2.val() || 0, 10) * rate; 
             t7  += parseInt(thissum3.val() || 0, 10) * rate; 
             t9  += parseInt(thissum4.val() || 0, 10) * rate; 

             sumsum.val(t1); 
             sumsum1.val(t3);
             sumsum2.val(t5);
             sumsum3.val(t7);
             sumsum4.val(t9);                                              
          } else if(options.dividend == "T_15_223"){//T_15_101   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8], 
                 ind9 = options.ind.split("_")[9]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum5 = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind0 + ")");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind9 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind9 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind9 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind9 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind9 + ")");
             var sumsum5  = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind9 + ")");

             var rate = parseInt(options.par.siblings().find("input.MpT").val() || 0, 10);
              
             if(options.op == "MSAarrSmMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.MSmAarrSmMM:eq(" + ind8 + ")").val() || 0, 10);
                 if(t0 < 0){
                     t0 = 0;
                 } 
                 t1 = t0;                 
                 var inp = options.par.parent().find("input.MAarrSmMM:eq(" + ind8 + ")");
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });                 
                 t2 = parseInt(options.par.parent().children().find("input.S2:eq(" + ind8 + ")").val() || 0, 10) - t2;

                 t3  = t2 - parseInt(options.par.parent().children().find("input.SmMM:eq(" + ind7 + ")").val() || 0, 10);
                 t4  = t3 * parseInt(options.par.parent().children().find("input.MM:eq(" + ind7 + ")").val() || 0, 10);
                 t5 = t4 * 2; //재작성                    
             } else if(options.op == "MSmAarrSmMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.par.parent().children().find("input.MSAarrSmMM:eq(" + ind8 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 if(t0 < 0){
                     t0 = 0;
                 }  
                 t1 = t0;                 
                 var inp = options.par.parent().find("input.MAarrSmMM:eq(" + ind8 + ")");
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });                 
                 t2 = parseInt(options.par.parent().children().find("input.S2:eq(" + ind8 + ")").val() || 0, 10) - t2;

                 t3 = t2 - parseInt(options.par.parent().children().find("input.SmMM:eq(" + ind7 + ")").val() || 0, 10);
                 t4 = t3 * parseInt(options.par.parent().children().find("input.MM:eq(" + ind7 + ")").val() || 0, 10);
                 t5 = t4 * 2; //재작성                                    
             } else if(options.op == "MnSAnAarrSmMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.MnSmAAnAarrSmMM:eq(" + ind8 + ")").val() || 0, 10) + parseInt(options.par.siblings().find("input.MnSAnAarrSmMM:eq(" + ind8 + ")").val() || 0, 10); 
                 t1 = t0;                 
                 var inp = options.par.parent().find("input.MAarrSmMM:eq(" + ind8 + ")");
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });                 
                 t2 = parseInt(options.par.parent().children().find("input.S2:eq(" + ind8 + ")").val() || 0, 10) - t2;

                 t3 = t2 - parseInt(options.par.parent().children().find("input.SmMM:eq(" + ind7 + ")").val() || 0, 10);
                 t4 = t3 * parseInt(options.par.parent().children().find("input.MM:eq(" + ind7 + ")").val() || 0, 10);
                 t5 = t4 * 2; //재작성       
             } else if(options.op == "MnSmAAnAarrSmMM"){//cor/A05/international_trade_02/reserve_earnings_calculation_01
                 arr0 += parseInt(options.my.val() || 0, 10) * rate;

                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 
                 var inp = options.par.parent().find("input.MnSAnAarrSmMM:eq(" + ind8 + ")");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t0 -= parseInt(options.my.val() || 0, 10);   
                 t1 = t0;                 
                 var inp = options.par.parent().find("input.MAarrSmMM:eq(" + ind8 + ")");
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });                 
                 t2 = parseInt(options.par.parent().children().find("input.S2:eq(" + ind8 + ")").val() || 0, 10) - t2;

                 t3 = t2 - parseInt(options.par.parent().children().find("input.SmMM:eq(" + ind7 + ")").val() || 0, 10);
                 t4 = t3 * parseInt(options.par.parent().children().find("input.MM:eq(" + ind7 + ")").val() || 0, 10);
                 t5 = t4 * 2; //재작성                  
             } else {
                
             }
                                         
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
             thissum3.val(t3); 
             thissum4.val(t4); 
             thissum5.val(t5); 

             var t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0;                           
             t6  += parseInt(thissum.val() || 0, 10)  * rate;              
             t7  += parseInt(thissum1.val() || 0, 10) * rate; 
             t8  += parseInt(thissum2.val() || 0, 10) * rate; 
             t9  += parseInt(thissum3.val() || 0, 10) * rate; 
             t10 += parseInt(thissum4.val() || 0, 10) * rate; 
             t11 += parseInt(thissum5.val() || 0, 10) * rate; 

             sumsum.val(t6); 
             sumsum1.val(t7);
             sumsum2.val(t8);
             sumsum3.val(t9);
             sumsum4.val(t10); 
             sumsum5.val(t11);                                              
          } else if(options.dividend == "T_20_223"){//T_20_043 
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5]; 
             var ind6 = options.ind.split("_")[6];         
             if(options.op == "AarrAarrS"){//cor/A06/common_benefit_01/contribution_property_report
                $(options.par.find("input.AarrAarrS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                options.par.find("input:eq(" + ind1 + ")").val(arr0); 
                $(options.par.find("input.Aarr")).each(function( index ) {
                   arr1 += parseInt($(this).val() || 0, 10);
                });                                        
             } else if(options.op == "Aarr2AarrS"){//cor/A06/common_benefit_01/contribution_property_report 
                $(options.par.find("input.Aarr2AarrS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                options.par.find("input:eq(" + ind1 + ")").val(arr0); 
                $(options.par.find("input.Aarr")).each(function( index ) {
                   arr1 += parseInt($(this).val() || 0, 10);
                });          
             } else if(options.op == "EAarrSm"){//cor/A06/common_benefit_01/contribution_property_report
                arr0 = parseInt(options.my.val() || 0, 10); 
                options.par.find("input:eq(" + ind1 + ")").val(arr0);                 
                $(options.par.find("input.AarrSm")).each(function( index ) {
                   arr1 += parseInt($(this).val() || 0, 10);
                });            
             } else if(options.op == "Aarr2AarrSm"){//cor/A06/common_benefit_01/contribution_property_report
                $(options.par.find("input.Aarr2AarrSm")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });
                options.par.find("input:eq(" + ind1 + ")").val(arr0); 
                $(options.par.find("input.AarrSm")).each(function( index ) {
                   arr1 += parseInt($(this).val() || 0, 10);
                });            
             } else{                  
                                             
             }  
             
             options.par.find("input:eq(" + ind2 + ")").val(arr1);            
             
             thissum = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")");  
             sumsum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")"); 
             sumsum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind2 + ")");  
             
             t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10); 
             t1 = arr0 - parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind1 + ")").val() || 0, 10);
             t2 = arr1 - parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind2 + ")").val() || 0, 10);                     

             if(options.op == "EAarrSm" || options.op == "Aarr2AarrSm"){
                  t0 = t0 * (-1);
                  t1 = t1 * (-1);
                  t2 = t2 * (-1);
             }
             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);

         } else {

         }
       });
       return this;
     }


     $.fn.calcN1=function(options){
        $.defaultOptions = {
            op         : "",
            dividend   : "",
            par        : "",
            my         : "",
            ind        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, arr0 = 0;   
          if(options.dividend == "T_10_001"){//nodel, input, 21 0b1, T_10_221
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];        
             if(options.op == "AS"){//cor/A05/international_trade_02/reserve_earnings_calculation_02, per/appending/international_trade/reserve_earnings_calculation_02                                                
                 arr0 = parseInt(options.my.val() || 0, 10)
                      + parseInt(options.my.parent().siblings().find("input.AS").val() || 0, 10)
                      - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "Sm"){//cor/A05/international_trade_02/reserve_earnings_calculation_02, per/appending/international_trade/reserve_earnings_calculation_02 
                 arr0 = 0;  
                 var inp = options.par.find("input.AS");                 
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                                                
                 arr0 -= parseInt(options.my.val() || 0, 10); 
             } else {
                 
             }  
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")"); 
             sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")");

             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1);
           } else if(options.dividend == "T_10_006"){ //10_a, T_10_226
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];        
             if(options.op == "M"){//cor/A05/international_trade_02//foregin_rule_stockholder_payment_interest_03                  
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.M").val() || 0, 10);
             } else if(options.op == "M2"){//cor/A05/international_trade_02//foregin_rule_stockholder_payment_interest_03                  
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.M2").val() || 0, 10);
             } else {
                 
             }  
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  
             
             suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")"); 

             $(suminp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             sumsum.val(t0);                                                                                                                                   
           } else if(options.dividend == "T_10_006_a"){//0c6, T_10_226_a
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];        
             if(options.op == "MSDd"){//cor/A05/international_trade_02/a1803                                                                                
                arr0 += (parseInt(options.par.find("input.MD").val() || 0, 10)
                     * parseInt(options.par.find("input.SmD").val() || 0, 10))/(parseInt(options.my.val() || 1, 10)
                     * parseInt(options.my.parent().siblings().find("input.MSDd").val() || 1, 10)
                     - parseInt(options.par.find("input.SmD").val() || 0, 10));             
             } else if(options.op == "MD"){//cor/A05/international_trade_02/a1803                                                                                
                arr0 += parseInt(options.my.val() || 0, 10)
                     * parseInt(options.par.find("input.SmD").val() || 0, 10)/(parseInt(options.par.find("input:eq(1)").val() || 0, 10)
                     * parseInt(options.par.find("input:eq(2)").val() || 0, 10)
                     - parseInt(options.par.find("input.SmD").val() || 0, 10));             
             } else if(options.op == "SmD"){//cor/A05/international_trade_02/a1803                                                                                
                arr0 += parseInt(options.my.val() || 0, 10)
                     * parseInt(options.par.find("input.MD").val() || 0, 10)/(parseInt(options.par.find("input:eq(1)").val() || 0, 10)
                     * parseInt(options.par.find("input:eq(2)").val() || 0, 10)
                     - parseInt(options.my.val() || 0, 10));             
             } else {
                 
             }  
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             suminp  = options.par.parent().parent().parent().parent().parent().find("table").find("tbody").children().find("input:eq(" + ind1 + ")"); 
             sumsum  = options.par.parent().parent().parent().parent().parent().children(".nodel").find("input:eq(" + ind4 + ")");

             $(suminp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             sumsum.val(t0);
                                                                                                                                   
           } else if(options.dividend == "T_10_655"){//41, T_10_255   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2], 
                 ind3 = options.ind.split("_")[3];
                 ind4 = options.ind.split("_")[4];          
             if(options.op == "M"){//per/A05/tax_confirmation/earnings_tax_standard_report_19
                 var val = options.par.find("input.Mp").val();
                 if(val == "10/100" || val == "20(10)/100"){
                    val = 0.1;
                 } else if(val == "40/100"){
                    val = 0.4;
                 } else {
                    val = parseInt(options.par.find("input.Mp").val() || 0, 10);
                 }             
             } else if(options.op == "Mp"){//per/A05/tax_confirmation/earnings_tax_standard_report_19
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.M").val() || 0, 10)/100;
                
             }  
             options.par.find("input:eq(" + ind1 + ")").val(arr0);                                 
                                                 
             var suminp = options.par.parent().children().find("input.sum");
             $(suminp ).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });

             var sumsum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");
             sumsum.val(t0);                                                                                                      
          } else if(options.dividend == "T_10_305"){//options, sum, input  30, T_10_335
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];     
             if(options.op == "M"){//cor/A03/deduction/a0913, cor/A03/local_income_tax/agriculture_special_tax_standard_control
                 arr0 = parseFloat(options.my.val() || 0, 10)/100 * parseInt(options.my.parent().siblings().find("input.M").val() || 0, 10);                 
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var suminp  = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind1 + ")");  
                              
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");                        
           
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });        
             sumsum.val(t1);
           } else if(options.dividend == "T_10_505"){//options, sum, input  30, T_10_345
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];     
             if(options.op == "M"){//cor/A03/deduction/a0913, cor/A03/local_income_tax/agriculture_special_tax_standard_control
                 arr0 = parseFloat(options.my.val() || 0, 10)/100 * parseInt(options.my.parent().siblings().find("input.M").val() || 0, 10);
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var suminp = options.par.parent().children(":lt(" + ind2 + "):gt(" + ind5 + ")").find("input:eq(" + ind1 + ")"); 
                              
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");                        
           
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });        
             sumsum.val(t1);
           } else if(options.dividend == "T_11_113"){//T_11_243   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];  
               
             var suminp  = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind5 + "))");
             var suminp1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:not(:eq(" + ind5 + "))");

             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");               
             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")");            
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");               
              
             if(options.op == "AarrSmnA"){//cor/A02/subject_01/a08
                 var inp = options.par.find("input.AarrSmnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                  

                 t0 = parseInt(options.par.parent().children().find("input.AarrS:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                 t1 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.A:eq(" + ind0 + ")").val() || 0, 10);          
             } else if(options.op == "AarrSmS"){//cor/connection/report/connection_agriculture_special_tax_standard_report
                 var inp = options.par.find("input.AarrSmS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 

                 t0 = parseInt(options.par.parent().children().find("input.S2:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrSm:eq(" + ind0 + ")").val() || 0, 10);          
             } else if(options.op == "AarrnASnA"){ //cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 t0 = parseInt(options.par.parent().children().find("input.A2:eq(" + ind4 + ")").val() || 0, 10)
                    + parseInt(options.my.val() || 0, 10)
                    - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind4 + ")").val() || 0, 10); 
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind4 + ")").val() || 0, 10);
             } else if(options.op == "AarrnASmnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnASmnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 t0 = parseInt(options.par.parent().children().find("input.A2:eq(" + ind4 + ")").val() || 0, 10)
                    - parseInt(options.my.val() || 0, 10)
                    + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind4 + ")").val() || 0, 10); 
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind4 + ")").val() || 0, 10);
             } else if(options.op == "MnSS"){//cor/A06/nonprofit/a2103
                 t0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.MMS:eq(" + ind0 + ")").val() || 0, 10);
                 t1 = t0 - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind4 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind4 + ")").val() || 0, 10);
             } else if(options.op == "MnSmAS"){//cor/A06/nonprofit/a2103
                 t0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.MMS:eq(" + ind0 + ")").val() || 0, 10);
                 t1 = parseInt(options.par.parent().children().find("input.S:eq(" + ind4 + ")").val() || 0, 10)
                    - t0
                    - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind4 + ")").val() || 0, 10);
             } else if(options.op == "AarrAarrA"){//cor/A02/subject_01/a08, cor/A06/sincerity/aa05
                var inp = options.par.find("input.AarrAarrA");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                }); 
                var inp2 = options.par.parent().children().find("input." + options.op + ":eq(" + ind0 + ")");
                $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                }); 
                t1 = parseInt(options.par.parent().children().find("input.AarrSmnA:eq(" + ind0 + ")").val() || 0, 10) + t0;                 
             } else if(options.op == "AarrSarrS"){//cor/connection/report/connection_cor_tax_standard_report, cor/A03/tax_confirmation/cor_tax_standard_report
                 var inp = options.par.find("input.AarrSarrS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 

                 t0 = parseInt(options.my.val() || 0, 10); 
                 var inp2 = options.par.parent().children().find("input.AarrSmarrS:eq(" + ind4 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrSm:eq(" + ind4 + ")").val() || 0, 10);           
             } else if(options.op == "AarrSmarrS"){ //cor/connection/report/connection_cor_tax_standard_report ?
                 var inp = options.par.find("input.AarrSmarrS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 

                 t0 = parseInt(options.par.parent().children().find("input.AarrSarrS:eq(" + ind0 + ")").val() || 0, 10); 
                 var inp2 = options.par.parent().children().find("input.AarrSmarrS:eq(" + ind4 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrSm:eq(" + ind4 + ")").val() || 0, 10);                            
             } else if(options.op == "AarrSmnAASmS"){//per/A04/deduction/tax_deduction_control
                var inp = options.par.find("input.AarrSmnAASmS");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind0 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);

                $(options.par.find("input.AarrnAarrSS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });       
                var inp2 = options.par.parent().children().find("input.AarrnAarrSS:eq(" + ind0 + ")");
                $(inp2).each(function( index ) {
                   t0 += parseInt($(this).val() || 0, 10);
                });
                t1 -= t0; 
                t1 -= parseInt(options.par.parent().children().find("input.AarrnAASmS:eq(" + ind0 + ")").val() || 0, 10); 
             } else {
                
             } 
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             thissum.val(t0);
             thissum1.val(t1);
                                        
             $(suminp).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t2); 
             $(suminp1).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t3);                                   
          } else if(options.dividend == "T_11_113_a"){//T_11_243_a"   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5],
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7];
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")"); 

             var suminp   = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind1 + "))");
             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind1 + ")"); 

             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:not(:eq(" + ind5 + "))");                          
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");
              
             if(options.op == "AvgMSm"){//cor/A06/common_benefit_01/application_earnings_use
                 var inp = options.par.find("input.AvgMSm");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  

                 arr0 = arr0/inp.length;
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 t0 = parseInt(options.my.val() || 0, 10) * 0.7; 
                 t2 = parseInt(options.par.parent().children().find("input.S:eq(" + ind0 + ")").val() || 0, 10) - t0;                                       
             } else {
                
             }                
                            
             thissum.val(t0);
             thissum1.val(t2);
                          
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1); 
             $(suminp1).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t3);                                          
          } else if(options.dividend == "T_11_303"){//T_11_333   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5]; 
                           
             if(options.op == "SmAarrA"){//cor/A03/deduction/income_deduction
                 arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                                                  
             } else {
                
             }

             options.par.find("input:eq(" + ind1 + ")").val(arr0);                                            
             
             var thisinp = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind0 + ")");
             var suminp  = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind1 + ")");
            
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");  
             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");

             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")");              
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");

             $(thisinp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             }); 
             t2 = t0 + parseInt(options.par.parent().find("input.A:eq(" + ind0 + ")").val() || 0, 10);

             thissum.val(t0);
             thissum1.val(t2);
                          
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             }); 

             sumsum.val(t1); 
             t3 = t1 + parseInt(options.par.parent().find("input.A:eq(" + ind1 + ")").val() || 0, 10); 
             sumsum1.val(t3);                                          
          } else if(options.dividend == "T_11_303_a"){//T_11_333_a
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             if(options.op == "SM"){//cor/A05/international_trade_01/foregin_common_cost_division                  
                arr0 += parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmM").val() || 0, 10);                                        
             } else if(options.op == "SmM"){//cor/A05/international_trade_01/foregin_common_cost_division                  
                arr0 += parseInt(options.par.find("input.SM").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                                       
             } else {
                
             } 

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             var thisinp  = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind0 + ")");
             var suminp   = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind1 + ")");

             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");  
             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");  

             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")");  
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");   

             var tdval = options.par.siblings().find("td.val");                
        
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
                                        
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             }); 

             thissum.val(t0);               
             sumsum.val(t1); 

             tval  = tdval.text() * t0;
             tval1 = tdval.text() * t1;
             thissum1.val(tval);
             sumsum1.val(tval1);
           } else if(options.dividend == "T_11_303_b"){//T_11_333_b  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2];  
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5]; 
             
             if(options.op == "SAnAarrnAS"){//cor/A05/report_attachment/capital_control_02
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.SAnAarrnAS").val() || 0, 10)
                       - parseInt(options.par.find("input.SmAAnAarrnAS").val() || 0, 10);        
             } else if(options.op == "SmAAnAarrnAS"){//cor/A05/report_attachment/capital_control_02
                var inp = options.par.find("input.SAnAarrnAS");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                }); 
                arr0 -= parseInt(options.my.val() || 0, 10);                
             } else{                  
                                             
             }  

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             var thisinp  = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind0 + ")"); 
             var suminp   = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind1 + ")");
                             
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");                 
             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");

             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")");                 
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");

             $(thisinp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });  
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             }); 

             t2 = t0 + parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind4 + ")").val() || 0, 10)
                     - parseInt(options.par.parent().children(":eq(10)").find("input:eq(" + ind4 + ")").val() || 0, 10);
             t3 = t1 - parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind5 + ")").val() || 0, 10)
                     + parseInt(options.par.parent().children(":eq(10)").find("input:eq(" + ind5 + ")").val() || 0, 10);                              
                           
             thissum.val(t0);
             sumsum.val(t1);
             thissum1.val(t2);                                              
             sumsum1.val(t3); 
           } else if(options.dividend == "T_11_505"){//T_11_345
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];     
             if(options.op == "M"){//per/A05/tax_confirmation/earnings_tax_standard_report_21
                 arr0 = parseFloat(options.my.val() || 0, 10)/100 * parseInt(options.par.find("input.Mp").val() || 0, 10);
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var suminp  = options.par.parent().children(":lt(" + ind2 + "):gt(4)").find("input:eq(" + ind1 + ")"); 
             var suminp1 = options.par.parent().children(":not(:eq(" + ind3 + "))").find("input:eq(" + ind1 + ")"); 
                              
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");  
             var sumsum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");                      
           
             $(suminp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });       
             sumsum.val(t0);
             $(suminp1).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum1.val(t1);
           } else if(options.dividend == "T_12_113"){//T_12_243   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5]; 
             var ind6 = options.ind.split("_")[6];  
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");

             var suminp  = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind6 + "))");
             var suminp1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:not(:eq(" + ind6 + "))");
             var suminp2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:not(:eq(" + ind6 + "))");

             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind6 + ")");              
             var sumsum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");               
             var sumsum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");
              
             if(options.op == "AarrAarrAS"){//per/A02/subject/reception_cost_control_01
                 var inp = options.par.find("input.AarrAarrAS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 var inp2 = options.par.parent().children().find("input.AarrAarrAS:eq(" + ind0 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind0 + ")").val() || 0, 10);
                 t2 = t1 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind0 + ")").val() || 0, 10);             
             } else if(options.op == "AarrSarrSS"){//cor/A06/nonprofit/a2102
                 var inp = options.par.find("input.AarrSarrSS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.my.val() || 0, 10);
                 var inp2 = options.par.parent().children().find("input.AarrSmarrSS:eq(" + ind5 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 }); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrSmS:eq(" + ind5 + ")").val() || 0, 10);
                 t2 = t1 - parseInt(options.par.parent().children().find("input.AarrSm:eq(" + ind5 + ")").val() || 0, 10);                             
             } else if(options.op == "AarrSmarrSS"){//cor/A06/nonprofit/a2102
                 var inp = options.par.find("input.AarrSmarrSS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.par.parent().children().find("input.AarrSarrSS:eq(" + ind5 + ")").val() || 0, 10);
                 var inp2 = options.par.parent().children().find("input.AarrSmarrSS:eq(" + ind5 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 }); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrSmS:eq(" + ind5 + ")").val() || 0, 10);
                 t2 = t1 - parseInt(options.par.parent().children().find("input.AarrSm:eq(" + ind5 + ")").val() || 0, 10);              
             } else if(options.op == "AarrASS"){//cor/connection/report/connection_agriculture_special_tax_standard_report
                 var inp = options.par.find("input.AarrASS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.A:eq(" + ind5 + ")").val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrSmS:eq(" + ind5 + ")").val() || 0, 10);
                 t2 = t1 - parseInt(options.par.parent().children().find("input.AarrSm:eq(" + ind5 + ")").val() || 0, 10);             
             } else if(options.op == "AarrnAASmnSAnASnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAASmnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 t0 = parseInt(options.par.parent().children().find("input.A3:eq(" + ind5 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind5 + ")").val() || 0, 10); 
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind5 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind5 + ")").val() || 0, 10);
                 t2 = t1 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind5 + ")").val() || 0, 10);                                       
             } else if(options.op == "AarrnAASnSAnASnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAASnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 t0 = parseInt(options.par.parent().children().find("input.A3:eq(" + ind5 + ")").val() || 0, 10) + parseInt(options.my.val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind5 + ")").val() || 0, 10); 
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind5 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind5 + ")").val() || 0, 10);
                 t2 = t1 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind5 + ")").val() || 0, 10);                                       
             } else if(options.op == "AarrnSmnSarrAnS"){//cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnSmnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });  
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
                 t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind5 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind7 + ")").val() || 0, 10);  
                 t2 = t0 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind7 + ")").val() || 0, 10);                                        
             }else if(options.op == "MMS"){//cor/A06/nonprofit/a2103
                 t0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.MnSS:eq(" + ind5 + ")").val() || 0, 10);
                 t1 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.MnSmAS:eq(" + ind5 + ")").val() || 0, 10);
                 t2 = t0 - t1 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind5 + ")").val() || 0, 10);
             } else {
                
             } 

             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
                                        
             $(suminp).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t3); 
             $(suminp1).each(function( index ) {
                 t4 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t4); 
             $(suminp2).each(function( index ) {
                 t5 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t5);                                   
          } else if(options.dividend == "T_13_113"){//T_13_243   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  

             var suminp   = options.par.parent().children(":eq(" + ind2 + ")").find("input:not(:eq(" + ind7 + "))");
             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:not(:eq(" + ind7 + "))");
             var suminp2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:not(:eq(" + ind7 + "))");
             var suminp3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:not(:eq(" + ind7 + "))");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind7 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind7 + ")");
              
             if(options.op == "AarrnAAarrSmarrnSAnASnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAAarrSmarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
 
                 t0 = parseInt(options.par.parent().children().find("input.A4:eq(" + ind6 + ")").val() || 0, 10); 
                 var inp2 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind6 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind6 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 = t0 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind6 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind6 + ")").val() || 0, 10);
                 var t4 = t2 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind6 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind6 + ")").val() || 0, 10);
                 var t6 = t4 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind6 + ")").val() || 0, 10);                      
             } else if(options.op == "AarrnAAarrSarrnSAnASnA"){ //cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAAarrSarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
 
                 t0 = parseInt(options.par.parent().children().find("input.A4:eq(" + ind6 + ")").val() || 0, 10); 
                 var inp2 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind6 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind6 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 = t0 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind6 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind6 + ")").val() || 0, 10);
                 var t4 = t2 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind6 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind6 + ")").val() || 0, 10);
                 var t6 = t4 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind6 + ")").val() || 0, 10);                       
             } else {
                
             }
              
                             
             thissum.val(t0);
             thissum1.val(t2);
             thissum2.val(t4);
             thissum3.val(t6); 

             var t7 = 0;                           
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1); 
             $(suminp1).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t3); 
             $(suminp2).each(function( index ) {
                 t5 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t5);
             $(suminp3).each(function( index ) {
                 t7 += parseInt($(this).val() || 0, 10);
             });             
             sumsum3.val(t7);                                             
          } else if(options.dividend == "T_15_113"){//T_15   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8], 
                 ind9 = options.ind.split("_")[9]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum5 = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind0 + ")");

             var suminp   = options.par.parent().children(":eq(" + ind2 + ")").find("input").not(":eq(" + ind9 + ")");
             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input").not(":eq(" + ind9 + ")");
             var suminp2  = options.par.parent().children(":eq(" + ind4 + ")").find("input").not(":eq(" + ind9 + ")");
             var suminp3  = options.par.parent().children(":eq(" + ind5 + ")").find("input").not(":eq(" + ind9 + ")");
             var suminp4  = options.par.parent().children(":eq(" + ind6 + ")").find("input").not(":eq(" + ind9 + ")");
             var suminp5  = options.par.parent().children(":eq(" + ind7 + ")").find("input").not(":eq(" + ind9 + ")");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind9 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind9 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind9 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind9 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind9 + ")");
             var sumsum5  = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind9 + ")");
              
             if(options.op == "AarrnASnAarrSarrnASarrnSAnASnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnASnAarrSarrnASarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
 
                 t0 = parseInt(options.par.parent().children().find("input.A6:eq(" + ind8 + ")").val() || 0, 10)
                    + parseInt(options.my.val() || 0, 10)
                    - parseInt(options.par.parent().children().find("input.AarrnAASmnAarrSarrnASarrnSAnASnA:eq(" + ind8 + ")").val() || 0, 10); 
                 t1 = t0;
                 var inp2 = options.par.parent().children().find("input.AarrnAAarrSarrnASarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSmarrnASarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp3).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 = t1;
                 var inp4 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp4).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                 });
                 var inp5 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp5).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 var t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind8 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind8 + ")").val() || 0, 10);
                 var t4 = t3 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind8 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind8 + ")").val() || 0, 10);
                 var t5 = t4 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind8 + ")").val() || 0, 10);                        
             } else if(options.op == "AarrnAASmnAarrSarrnASarrnSAnASnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAASmnAarrSarrnASarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);
 
                 t0 = parseInt(options.par.parent().children().find("input.A6:eq(" + ind8 + ")").val() || 0, 10)
                    - parseInt(options.my.val() || 0, 10)
                    + parseInt(options.par.parent().children().find("input.AarrnASnAarrSarrnASarrnSAnASnA:eq(" + ind8 + ")").val() || 0, 10);
                 t1 = t0;
                 var inp2 = options.par.parent().children().find("input.AarrnAAarrSarrnASarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSmarrnASarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp3).each(function( index ) {
                     t1 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 = t1;
                 var inp4 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp4).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                 });
                 var inp5 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind8 + ")");
                 $(inp5).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 var t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind8 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind8 + ")").val() || 0, 10);
                 var t4 = t3 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind8 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind8 + ")").val() || 0, 10);
                 var t5 = t4 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind8 + ")").val() || 0, 10);                         
             } else if(options.op == "AarrnSmarrAAnSAnAarrnSnSarrAnS"){//cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnSmarrAAnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.A8:eq(" + ind8 + ")").val() || 0, 10);                                    
                 var inp2 = options.par.parent().children().find("input.AarrnSmarrAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t0 += parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrA:eq(" + ind8 + ")").val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind8 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAnSAnAarrnSnSarrA:eq(" + ind8 + ")").val() || 0, 10);  
                 t2 += t1;                                                                              
                 var inp3 = options.par.parent().children().not(":eq(" + ind3 + ")").find("input.A2:eq(" + ind8 + ")");    
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t4 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10);  
                 t5 = t3 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind8 + ")").val() || 0, 10);              
             } else if(options.op == "AarrnSmarrAnSAnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnSmarrAnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.A8:eq(" + ind8 + ")").val() || 0, 10);                                    
                 var inp2 = options.par.parent().children().find("input.AarrnSmarrAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t0 += parseInt(options.my.val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind8 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAnSAnAarrnSnSarrA:eq(" + ind8 + ")").val() || 0, 10);  
                 t2 += t1;                                                                              
                 var inp3 = options.par.parent().children().not(":eq(" + ind3 + ")").find("input.A2:eq(" + ind8 + ")");    
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t4 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10);  
                 t5 = t3 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind8 + ")").val() || 0, 10);              
             } else if(options.op == "AarrnAnSmAAnSAnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.parent().children().find("input.A7:eq(" + ind8 + ")").val() || 0, 10); 
                 t1 = parseInt(options.par.parent().children().find("input.A6:eq(" + ind8 + ")").val() || 0, 10) - t0 + parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
              
                 t2 = t1;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind3 + ")").find("input.A2:eq(" + ind8 + ")");    
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t4 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10);  
                 t5 = t3 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind8 + ")").val() || 0, 10);                
             } else if(options.op == "AarrnSmarrAAnAarrnSnAarrnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnSmarrAAnAarrnSnAarrnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.A5:eq(" + ind8 + ")").val() || 0, 10);

                 var inp2 = options.par.parent().children().find("input.AarrnSmarrAAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")");    
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });

                 t0 += parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrnSmnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
              
                 t2 = t1;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind3 + ")").find("input.A2:eq(" + ind8 + ")");    
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t4 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10);  
                 t5 = t3 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind8 + ")").val() || 0, 10);                
             } else if(options.op == "AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.par.parent().children().find("input.A5:eq(" + ind8 + ")").val() || 0, 10);

                 var inp2 = options.par.parent().children().find("input.AarrnSmarrAAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")");    
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });

                 t0 += parseInt(options.my.val() || 0, 10); 
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrnSmnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
              
                 t2 = t1;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind3 + ")").find("input.A2:eq(" + ind8 + ")");    
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t4 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10);  
                 t5 = t3 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind8 + ")").val() || 0, 10);                
             } else if(options.op == "AarrnMnAarrnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnMnAarrnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.AarrnMpnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)/100;

                 t1= t0;
                 var inp2 = options.par.parent().children().find("input.AarrnAarrAnAarrnSnSarrAnS:eq(" + ind8 + ")");    
                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
              
                 t2 = t1;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind3 + ")").find("input.A2:eq(" + ind8 + ")");    
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t4 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10);  
                 t5 = t3 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind8 + ")").val() || 0, 10);                
             } else if(options.op == "AarrnMpnAarrnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 t0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.parent().children().find("input.AarrnMnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)/100;
                 t1= t0;
                 var inp2 = options.par.parent().children().find("input.AarrnAarrAnAarrnSnSarrAnS:eq(" + ind8 + ")");    
                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
              
                 t2 = t1;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind3 + ")").find("input.A2:eq(" + ind8 + ")");    
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10); 
                 t4 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind8 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind8 + ")").val() || 0, 10);  
                 t5 = t3 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind8 + ")").val() || 0, 10);                
             } else {
                
             }
                                         
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
             thissum3.val(t3); 
             thissum4.val(t4); 
             thissum5.val(t5); 

             var t7 = 0, t8 = 0, t9 = 0;                           
             $(suminp).each(function( index ) {
                 t6 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t6); 
             $(suminp1).each(function( index ) {
                 t7 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t7); 
             $(suminp2).each(function( index ) {
                 t8 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t8);
             $(suminp3).each(function( index ) {
                 t9 += parseInt($(this).val() || 0, 10);
             });             
             sumsum3.val(t9);
             $(suminp4).each(function( index ) {
                 t10 += parseInt($(this).val() || 0, 10);
             });             
             sumsum4.val(t10);
             $(suminp5).each(function( index ) {
                 t11 += parseInt($(this).val() || 0, 10);
             });             
             sumsum5.val(t11);                                              
          } else if(options.dividend == "T_16_113"){//T_16   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8], 
                 ind9 = options.ind.split("_")[9], 
                 ind10 = options.ind.split("_")[10]; 
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum5 = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind0 + ")");
             var thissum6 = options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind0 + ")");

             var suminp   = options.par.parent().children(":eq(" + ind2 + ")").find("input").not(":eq(" + ind10 + ")");
             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input").not(":eq(" + ind10 + ")");
             var suminp2  = options.par.parent().children(":eq(" + ind4 + ")").find("input").not(":eq(" + ind10 + ")");
             var suminp3  = options.par.parent().children(":eq(" + ind5 + ")").find("input").not(":eq(" + ind10 + ")");
             var suminp4  = options.par.parent().children(":eq(" + ind6 + ")").find("input").not(":eq(" + ind10 + ")");
             var suminp5  = options.par.parent().children(":eq(" + ind7 + ")").find("input").not(":eq(" + ind10 + ")");
             var suminp6  = options.par.parent().children(":eq(" + ind8 + ")").find("input").not(":eq(" + ind10 + ")");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind10 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind10 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind10 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind10 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind10 + ")");
             var sumsum5  = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind10 + ")");
             var sumsum6  = options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind10 + ")");
              
             if(options.op == "AarrnASnASnAarrSarrnASarrnSAnASnA"){//cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnASnASnAarrSarrnASarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = 0;
                 var inp2 = options.par.parent().children().find("input.AarrnASnASnAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 }); 
                 t0 -= parseInt(options.par.parent().children().find("input.AASmnASnAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")").val() || 0, 10);
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrnASnAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnAASmnAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")").val() || 0, 10);
                 t2 = t1;
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 var inp4 = options.par.parent().children().find("input.AarrnAAarrSmarrnASarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp4).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2;
                 var inp5 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp5).each(function( index ) {
                     t3 -= parseInt($(this).val() || 0, 10);
                 });
                 var inp6 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp6).each(function( index ) {
                     t3 += parseInt($(this).val() || 0, 10);
                 });
                 var t4 = t3 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind9 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind9 + ")").val() || 0, 10);
                 var t5 = t4 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind9 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind9 + ")").val() || 0, 10);
                 var t6 = t5 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind9 + ")").val() || 0, 10);                         
             } else if(options.op == "AarrnAASmnASnAarrSarrnASarrnSAnASnA"){ //cor/connection/report/connection_earnings_amount_control
                 var inp = options.par.find("input.AarrnAASmnASnAarrSarrnASarrnSAnASnA");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0);

                 t0 = 0; 
                 var inp2 = options.par.parent().children().find("input.AarrnASnASnAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 }); 
                 t0 -= parseInt(options.my.val() || 0, 10);   
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrnASnAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnAASmnAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")").val() || 0, 10);
                 t2 = t1;
                 var inp3 = options.par.parent().children().find("input.AarrnAAarrSarrnASarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 var inp4 = options.par.parent().children().find("input.AarrnAAarrSmarrnASarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp4).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                 });
                 t3 = t2;
                 var inp5 = options.par.parent().children().find("input.AarrnAAarrSmarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp5).each(function( index ) {
                     t3 -= parseInt($(this).val() || 0, 10);
                 });
                 var inp6 = options.par.parent().children().find("input.AarrnAAarrSarrnSAnASnA:eq(" + ind9 + ")");
                 $(inp6).each(function( index ) {
                     t3 += parseInt($(this).val() || 0, 10);
                 });
                 var t4 = t3 - parseInt(options.par.parent().children().find("input.AarrnAASmnSAnASnA:eq(" + ind9 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAASnSAnASnA:eq(" + ind9 + ")").val() || 0, 10);
                 var t5 = t4 + parseInt(options.par.parent().children().find("input.AarrnASnA:eq(" + ind9 + ")").val() || 0, 10) - parseInt(options.par.parent().children().find("input.AarrnASmnA:eq(" + ind9 + ")").val() || 0, 10);
                 var t6 = t5 + parseInt(options.par.parent().children().find("input.AarrA:eq(" + ind9 + ")").val() || 0, 10);                                                                         
             } else if(options.op == "AarrnAarrnAnASmnSAnAarrnSnSarrAnS"){//cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnAarrnAnASmnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 var inp2 = options.par.parent().children().find("input.AarrnAarrnAnASmnSAnAarrnSnSarrAnS:eq(" + ind9 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10); 
                 t2 = parseInt(options.par.parent().children().find("input.A6:eq(" + ind9 + ")").val() || 0, 10) - t1 + parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10); 
              
                 t3 = t2;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind4 + ")").find("input.A2:eq(" + ind9 + ")");    
                 $(inp3).each(function( index ) {
                     t3 += parseInt($(this).val() || 0, 10);
                 });
                 t4 = t3 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind9 + ")").val() || 0, 10); 
                 t5 = t3 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10);  
                 t6 = t4 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind9 + ")").val() || 0, 10);                
             } else if(options.op == "AarrnMnSmarrAnAarrnSnAarrnAarrnSnSarrAnS"){//cor/connection/report/connection_group_tax_standard_control
                 t0 = parseInt(options.my.val() || 0, 10)/100 * parseInt(options.par.parent().children().find("input.M:eq(" + ind9 + ")").val() || 0, 10); 
                 t1 = t0;
                 var inp = options.par.parent().children().find("input.AarrnSmarrAAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind9 + ")");
                 $(inp).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
              
                 t1 += parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)   
                 t2 = t1 - parseInt(options.par.parent().children().find("input.AarrnSmnSnAarrnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10);  

                 t3 = t2;                            
                
                 var inp2 = options.par.parent().children().not(":eq(" + ind4 + ")").find("input.A2:eq(" + ind9 + ")");    
                 $(inp3).each(function( index ) {
                     t3 += parseInt($(this).val() || 0, 10);
                 });
                 t4 = t3 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind9 + ")").val() || 0, 10); 
                 t5 = t3 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind9 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind9 + ")").val() || 0, 10);  
                 t6 = t4 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind9 + ")").val() || 0, 10);              
             } else {
                
             }
                                          
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
             thissum3.val(t3); 
             thissum4.val(t4); 
             thissum5.val(t5); 
             thissum6.val(t6);

             var t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0;                           
             $(suminp).each(function( index ) {
                 t7 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t7); 
             $(suminp1).each(function( index ) {
                 t8 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t8); 
             $(suminp2).each(function( index ) {
                 t9 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t9);
             $(suminp3).each(function( index ) {
                 t10 += parseInt($(this).val() || 0, 10);
             });             
             sumsum3.val(t10);
             $(suminp4).each(function( index ) {
                 t11 += parseInt($(this).val() || 0, 10);
             });             
             sumsum4.val(t11); 
             $(suminp5).each(function( index ) {
                 t12 += parseInt($(this).val() || 0, 10);
             });             
             sumsum5.val(t12);
             $(suminp6).each(function( index ) {
                 t13 += parseInt($(this).val() || 0, 10);
             });             
             sumsum6.val(t13);                                  
          } else if(options.dividend == "T_17_113"){//T_17   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8], 
                 ind9 = options.ind.split("_")[9], 
                 ind10 = options.ind.split("_")[10], 
                 ind11 = options.ind.split("_")[11];
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum5 = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind0 + ")");
             var thissum6 = options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind0 + ")");
             var thissum7 = options.par.parent().children(":eq(" + ind9 + ")").find("input:eq(" + ind0 + ")");

             var suminp   = options.par.parent().children(":eq(" + ind2 + ")").find("input").not(":eq(" + ind11 + ")");
             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input").not(":eq(" + ind11 + ")");
             var suminp2  = options.par.parent().children(":eq(" + ind4 + ")").find("input").not(":eq(" + ind11 + ")");
             var suminp3  = options.par.parent().children(":eq(" + ind5 + ")").find("input").not(":eq(" + ind11 + ")");
             var suminp4  = options.par.parent().children(":eq(" + ind6 + ")").find("input").not(":eq(" + ind11 + ")");
             var suminp5  = options.par.parent().children(":eq(" + ind7 + ")").find("input").not(":eq(" + ind11 + ")");
             var suminp6  = options.par.parent().children(":eq(" + ind8 + ")").find("input").not(":eq(" + ind11 + ")");
             var suminp7  = options.par.parent().children(":eq(" + ind9 + ")").find("input").not(":eq(" + ind11 + ")");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind11 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind11 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind11 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind11 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind11 + ")");
             var sumsum5  = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind11 + ")");
             var sumsum6  = options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind11 + ")");
             var sumsum7  = options.par.parent().children(":eq(" + ind9 + ")").find("input:eq(" + ind11 + ")");
              
             if(options.op == "AarrDMnSarrAnSAnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrDMnSarrAnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 t0 = parseInt(options.my.val() || 0, 10)/parseInt(options.par.parent().children().find("input.Dd:eq(" + ind10 + ")").val() || 1, 10);
                 t1 = t0 * parseInt(options.par.parent().children().find("input.Dd:eq(" + ind10 + ")").val() || 0, 10);
                 t2 = t1;
                 var inp2 = options.par.parent().children().find("input.AarrnSmarrAAnSAnAarrnSnSarrA:eq(" + ind10 + ")");
                 $(inp2).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 += parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrA:eq(" + ind10 + ")").val() || 0, 10); 
                 t3 = t2 - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind10 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAnSAnAarrnSnSarrA:eq(" + ind10 + ")").val() || 0, 10); 
                               
                 t4 = t3;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind5 + ")").find("input.A2:eq(" + ind10 + ")");    
                 $(inp3).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });
                 t5 = t4 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind10 + ")").val() || 0, 10); 
                 t6 = t4 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10);  
                 t7 = t5 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind10 + ")").val() || 0, 10);               
             } else if(options.op == "AarrnAarrnMnSmarrAnAarrnSnAarrnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrnAarrnMnSmarrAnAarrnSnAarrnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });
                 options.par.find("input:eq(" + ind1 + ")").val(arr0); 

                 var inp2 = options.par.parent().children().find("input.AarrnAarrnMnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind10 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t1 = t0 * parseInt(options.par.parent().children().find("input.AarrnMnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)/100; 
                 t2 = t1;
                 var inp3 = options.par.parent().children().find("input.AarrnSmarrAAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind10 + ")");
                 $(inp3).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
                 t2 += parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                 t3 = t2 - parseInt(options.par.parent().children().find("input.AarrnSmnSnAarrnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10);  
              
                 t4 = t3;                                 
                
                 var inp3 = options.par.parent().children().not(":eq(" + ind5 + ")").find("input.A2:eq(" + ind10 + ")");    
                 $(inp3).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });
                 t5 = t4 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind10 + ")").val() || 0, 10); 
                 t6 = t4 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind10 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind10 + ")").val() || 0, 10);  
                 t7 = t5 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind10 + ")").val() || 0, 10);               
             } else {
                
             }                                                 
                         
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
             thissum3.val(t3); 
             thissum4.val(t4); 
             thissum5.val(t5); 
             thissum6.val(t6);
             thissum7.val(t7);

             var t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0;                           
             $(suminp).each(function( index ) {
                 t9 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t9); 
             $(suminp1).each(function( index ) {
                 t10 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t10); 
             $(suminp2).each(function( index ) {
                 t11 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t11);
             $(suminp3).each(function( index ) {
                 t12 += parseInt($(this).val() || 0, 10);
             });             
             sumsum3.val(t12);
             $(suminp4).each(function( index ) {
                 t13 += parseInt($(this).val() || 0, 10);
             });             
             sumsum4.val(t13); 
             $(suminp5).each(function( index ) {
                 t14 += parseInt($(this).val() || 0, 10);
             });             
             sumsum5.val(t14);
             $(suminp6).each(function( index ) {
                 t15 += parseInt($(this).val() || 0, 10);
             });             
             sumsum6.val(t15);
             $(suminp7).each(function( index ) {
                 t16 += parseInt($(this).val() || 0, 10);
             });             
             sumsum7.val(t16);                    
          } else if(options.dividend == "T_18_113"){//T_18   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6], 
                 ind7 = options.ind.split("_")[7], 
                 ind8 = options.ind.split("_")[8], 
                 ind9 = options.ind.split("_")[9], 
                 ind10 = options.ind.split("_")[10], 
                 ind11 = options.ind.split("_")[11],
                 ind12 = options.ind.split("_")[12];
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");  
             var thissum4 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum5 = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind0 + ")");
             var thissum6 = options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind0 + ")");
             var thissum7 = options.par.parent().children(":eq(" + ind9 + ")").find("input:eq(" + ind0 + ")");
             var thissum8 = options.par.parent().children(":eq(" + ind10 + ")").find("input:eq(" + ind0 + ")");

             var suminp   = options.par.parent().children(":eq(" + ind2 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp2  = options.par.parent().children(":eq(" + ind4 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp3  = options.par.parent().children(":eq(" + ind5 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp4  = options.par.parent().children(":eq(" + ind6 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp5  = options.par.parent().children(":eq(" + ind7 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp6  = options.par.parent().children(":eq(" + ind8 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp7  = options.par.parent().children(":eq(" + ind9 + ")").find("input").not(":eq(" + ind12 + ")");
             var suminp8  = options.par.parent().children(":eq(" + ind10 + ")").find("input").not(":eq(" + ind12 + ")");

             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind12 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind12 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind12 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind12 + ")");
             var sumsum4  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind12 + ")");
             var sumsum5  = options.par.parent().children(":eq(" + ind7 + ")").find("input:eq(" + ind12 + ")");
             var sumsum6  = options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind12 + ")");
             var sumsum7  = options.par.parent().children(":eq(" + ind9 + ")").find("input:eq(" + ind12 + ")");
             var sumsum8  = options.par.parent().children(":eq(" + ind10 + ")").find("input:eq(" + ind12 + ")");
              
             if(options.op == "AarrSarrDdMnSarrAnSAnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrSarrDdMnSarrAnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 t0 = parseInt(options.my.val() || 0, 10);                 
             } else if(options.op == "AarrSmarrDdMnSarrAnSAnAarrnSnSarrAnS"){ //cor/connection/report/connection_group_tax_standard_control
                 var inp = options.par.find("input.AarrSmarrDdMnSarrAnSAnAarrnSnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 t0 = parseInt(options.par.parent().children().find("input.AarrSarrDdMnSarrAnSAnAarrnSnSarrAnS:eq(" + ind11 + ")").val() || 0, 10);                 
             } else {
                
             } 

             options.par.find("input:eq(" + ind1 + ")").val(arr0);                 
                 var inp2 = options.par.parent().children().find("input.AarrSmarrDdMnSarrAnSAnAarrnSnSarrAnS:eq(" + ind11 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 }); 
                 t1 = parseInt(options.par.parent().children().find("input.AarrDMnSarrAnSAnAarrnSnSarrAnS:eq(" + ind11 + ")").val() || 0, 10)/t0;
                 t2 = t0 * t1;
                 t3 = t2;
                 var inp3 = options.par.parent().children().find("input.AarrnSmarrAAnSAnAarrnSnSarrA:eq(" + ind11 + ")");
                 $(inp3).each(function( index ) {
                     t3 -= parseInt($(this).val() || 0, 10);
                 });
                 t3 += parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrA:eq(" + ind11 + ")").val() || 0, 10); 
                 t4 = t3 - parseInt(options.par.parent().children().find("input.Sm2:eq(" + ind11 + ")").val() || 0, 10) + parseInt(options.par.parent().children().find("input.AarrnAnSAnAarrnSnSarrA:eq(" + ind11 + ")").val() || 0, 10); 
                 
                 var inp4 = options.par.parent().children().find("input.A2:eq(" + ind11 + ")");
                 $(inp4).each(function( index ) {
                     t5 += parseInt($(this).val() || 0, 10);
                 }); 
                 t6 = t5 - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind11 + ")").val() || 0, 10); 
                 t7 = t5 - parseInt(options.par.parent().children().find("input.AarrnSmarrAnSAnAarrnSnSarrAnS:eq(" + ind11 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnASmnSAnAarrnSnSarrAnS:eq(" + ind11 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmarrAnAarrnSnAarrnAarrnSnSarrAnS:eq(" + ind11 + ")").val() || 0, 10)
                         - parseInt(options.par.parent().children().find("input.AarrnSmnSarrAnS:eq(" + ind11 + ")").val() || 0, 10)
                         + parseInt(options.par.parent().children().find("input.AarrnAnSmAAnSAnAarrnSnSarrAnS:eq(" + ind11 + ")").val() || 0, 10);  
                 t8 = t6 - parseInt(options.par.parent().children().find("input.Sm:eq(" + ind11 + ")").val() || 0, 10);          
                             
             thissum.val(t0);
             thissum1.val(t1);
             thissum2.val(t2);
             thissum3.val(t3); 
             thissum4.val(t4); 
             thissum5.val(t5); 
             thissum6.val(t6);
             thissum7.val(t7);
             thissum8.val(t8);

             var t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0;                           
             $(suminp).each(function( index ) {
                 t9 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t9); 
             $(suminp1).each(function( index ) {
                 t10 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t10); 
             $(suminp2).each(function( index ) {
                 t11 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t11);
             $(suminp3).each(function( index ) {
                 t12 += parseInt($(this).val() || 0, 10);
             });             
             sumsum3.val(t12);
             $(suminp4).each(function( index ) {
                 t13 += parseInt($(this).val() || 0, 10);
             });             
             sumsum4.val(t13); 
             $(suminp5).each(function( index ) {
                 t14 += parseInt($(this).val() || 0, 10);
             });             
             sumsum5.val(t14);
             $(suminp6).each(function( index ) {
                 t15 += parseInt($(this).val() || 0, 10);
             });             
             sumsum6.val(t15);
             $(suminp7).each(function( index ) {
                 t16 += parseInt($(this).val() || 0, 10);
             });             
             sumsum7.val(t16); 
             $(suminp8).each(function( index ) {
                 t17 += parseInt($(this).val() || 0, 10);
             });             
             sumsum8.val(t17);                     
          } else if(options.dividend == "T_20_113"){//T_20_243    추가작업   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];

             var thissum = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")");  

             var suminp  = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumAarr");
             var suminp1 = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumA");

             var sumsum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");
             var sumsum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind2 + ")");
              
             if(options.op == "AarrAnSm"){//cor/A06/nonprofit/a2101
                 var inp = options.par.find("input.AarrAnSm");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 + parseInt(options.par.find("input.ASm").val() || 0, 10);                  

                 var inp2 = options.par.parent().children().find("input.AarrAnSm:eq(" + ind4 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                
                 t0 = parseInt(options.par.parent().children().find("input.S:eq(" + ind5 + ")").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
             } else {
                
             }
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);     
                                                          
             thissum.val(t0);
                         
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1); 
             t3 = t1 + parseInt(suminp1.val() || 0, 10);
             sumsum1.val(t3);                                                      
          } else if(options.dividend == "T_21_153"){//T_21_233   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];
            
             var suminp   = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumAarr");
             var suminp1  = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumA");
              
             var suminpa  = options.par.parent().children(":eq(" + ind4 + ")").find("input.SumAarr");             
             var suminpa1 = options.par.parent().children(":eq(" + ind4 + ")").find("input.SumA");

             var thissum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")"); 
             var sumsum   = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")"); 
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind2 + ")");

             var thissuma = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")");             
             var sumsuma  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind1 + ")");
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind2 + ")"); 
                                    
             if(options.op == "AarrAnSmarrAAnS"){//cor/A06/nonprofit/a2101
                var inp = options.par.find("input.AarrAnSmarrAAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 + parseInt(options.par.find("input.AnSmarrAAnS").val() || 0, 10); 
  
                 t0 = parseInt(options.par.parent().children(":eq(11)").find("input.SumAarr:eq(" + ind6 + ")").val() || 0, 10);            
                 var inp2 = options.par.parent().children().find("input.AarrAnSmarrAAnS:eq(" + ind6 + ")");
                 $(inp2).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t0 += parseInt(options.par.parent().children().find("input.Aarr:eq(" + ind6 + ")").val() || 0, 10);
                 t1 = t0 - parseInt(options.par.parent().children().find("input.AarrAnSm:eq(" + ind6 + ")").val() || 0, 10);                  
             } else {
                
             }

             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);
                                                                             
             thissum.val(t0);
             thissuma.val(t1);

             var t7 = 0;                           
             $(suminp).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t2); 
             t3 = t2 + parseInt(suminpa.val() || 0, 10);
             sumsuma.val(t3);
             $(suminp1).each(function( index ) {
                 t4 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t4);
             t5 = t4 + parseInt(suminpa.val() || 0, 10);
             sumsuma1.val(t5);                                                         
          } else if(options.dividend == "T_21_303"){//T_21_333   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];
             var ind7 = options.ind.split("_")[7];

             var thissum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");  
             var sumsum   = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsuma  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");

             var thissum1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")");                                      
             var sumsum1  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");             
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");
                           
             if(options.op == "MSA"){//cor/A03/deduction/income_deduction
                 var val = options.par.find("input.MpSAarrA").val();
                 if(val == "50/100"){
                     val = 0.5;
                 } else if(val == "100/100"){
                     val = 1;
                 } else {
                     val = parseInt(options.par.find("input.MpSAarrA").val() || 0, 10)/100;
                 }

                 arr0 += parseInt(options.my.val() || 0, 10) * val;
                 arr1 = arr0 - parseInt(options.par.find("input.SmAarrA").val() || 0, 10); 

                 var inp = options.par.parent().children().find("input." + options.op);
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                                                                
                 t3 = t0 + parseInt(options.par.parent().children().find("input.A:eq(" + ind5 + ")").val() || 0, 10);  
                 t4 = parseInt(options.par.parent().children().find("input.A:eq(" + ind6 + ")").val() || 0, 10);  
                 t5 = parseInt(options.par.parent().children().find("input.A:eq(" + ind7 + ")").val() || 0, 10);                              
             } else if(options.op == "SaS2AarrAarr"){//cor/A02/reserve/special_cost
                 arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmaASmAarrAarr").val() || 0, 10);
                 arr1 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10); 
              
                 var inp = options.par.parent().children().find("input.SaS2AarrAarr");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t0; 
                 var inp2 = options.par.parent().children().find("input.Aarr:eq(" + ind5 + ")");
                 $(inp2).each(function( index ) {
                     t3 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.Aarr:eq(" + ind6 + ")");
                 $(inp3).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });  
                 var inp4 = options.par.parent().children().find("input.Aarr:eq(" + ind7 + ")");
                 $(inp4).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 }); 
             } else if(options.op == "ASm"){//A02/cor/reserve/special_cost
                 arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.SmaASmAarrAarr").val() || 0, 10); 
                 arr1 = parseInt(options.par.find("input.SaS2AarrAarr").val() || 0, 10) - arr0; 
              
                 var inp = options.par.parent().children().find("input.ASm");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t0; 
                 var inp2 = options.par.parent().children().find("input.Aarr:eq(" + ind5 + ")");
                 $(inp2).each(function( index ) {
                     t1 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.Aarr:eq(" + ind6 + ")");
                 $(inp3).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });  
                 var inp4 = options.par.parent().children().find("input.Aarr:eq(" + ind7 + ")");
                 $(inp4).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });
             } else if(options.op == "SSA"){//per/A02/special_cost/special_cost
                 arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmASmA").val() || 0, 10);
                 arr1 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10); 
                              
                 var inp = options.par.parent().children().find("input.SSA");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 }); 
                 t3 = t0; 
                 var inp2 = options.par.parent().children().find("input.A:eq(" + ind5 + ")");
                 $(inp2).each(function( index ) {
                     t3 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.A:eq(" + ind6 + ")");
                 $(inp3).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });  
                 var inp4 = options.par.parent().children().find("input.A:eq(" + ind7 + ")");
                 $(inp4).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });  
             } else if(options.op == "ASmA"){//per/A02/special_cost/special_cost
                 arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.SmASmA").val() || 0, 10);
                 arr1 = parseInt(options.par.find("input.SSA").val() || 0, 10) - arr0; 

                 var inp = options.par.parent().children().find("input.ASmA");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t3 = t0; 
                 var inp2 = options.par.parent().children().find("input.A:eq(" + ind5 + ")");
                 $(inp2).each(function( index ) {
                     t3 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.A:eq(" + ind6 + ")");
                 $(inp3).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });  
                 var inp4 = options.par.parent().children().find("input.A:eq(" + ind7 + ")");
                 $(inp4).each(function( index ) {
                     t2 += parseInt($(this).val() || 0, 10);
                 });   
             } else {
                
             }
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);
            
             var suminp  = options.par.parent().children(":lt(" + ind3 + ")").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":lt(" + ind3 + ")").find("input:eq(" + ind2 + ")");
                                                                                        
             thissum.val(t0);                                       
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1);              
             $(suminp1).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             sumsum1.val(t2);
             thissum1.val(t3);
             t4 += t1;
             sumsuma.val(t4);
             t5 += t2;
             sumsuma1.val(t5);                                                        
          } else if(options.dividend == "T_21_303_a"){ //T_21_333_a  
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5],
                 ind6 = options.ind.split("_")[6],
                 ind7 = options.ind.split("_")[7];

             var sumsum   = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsuma  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");
                                    
             var sumsum1  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");             
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");
              
             if(options.op == "MpSAarrA"){//cor/A03/deduction/income_deduction
                 arr0 += parseInt(options.my.val() || 0, 10)/100 * parseInt(options.par.find("input.MSA").val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.SmAarrA").val() || 0, 10); 
                               
                 t4 = parseInt(options.par.parent().children().find("input.A:eq(" + ind6 + ")").val() || 0, 10);  
                 t5 = parseInt(options.par.parent().children().find("input.A:eq(" + ind7 + ")").val() || 0, 10);                              
             } else {
                
             }
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);

             var suminp  = options.par.parent().children(":lt(" + ind3 + ")").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":lt(" + ind3 + ")").find("input:eq(" + ind2 + ")");
             
                                                                                                                  
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1);              
             $(suminp1).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             sumsum1.val(t2);
             t4 += t1;
             sumsuma.val(t4);
             t5 += t2;
             sumsuma1.val(t5);                                                       
          } else if(options.dividend == "T_21_503"){//T_21_343   
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];
             var ind7 = options.ind.split("_")[7];

             var thissum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");  
             var sumsum   = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsuma  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");

             var thissum1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")");                                      
             var sumsum1  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");             
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");
                           
             if(options.op == "MSA"){//cor/A03/deduction/income_deduction
                 var val = options.par.find("input.Mp").val();
                 if(val == "50/100"){
                     val = 0.5;
                 } else if(val == "100/100"){
                     val = 1;
                 } else {
                     val = parseInt(options.par.find("input.MpSAarrA_02").val() || 0, 10)/100;
                 }

                 arr0 += parseInt(options.my.val() || 0, 10) * val;
                 arr1 = arr0 - parseInt(options.par.find("input.SmAarrA").val() || 0, 10); 

                 var inp = options.par.parent().children().find("input." + options.op);
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });                
              
                 t3 = t0 + parseInt(options.par.parent().children().find("input.A2:eq(" + ind5 + ")").val() || 0, 10);  
                 t4 = parseInt(options.par.parent().children().find("input.A2:eq(" + ind6 + ")").val() || 0, 10);  
                 t5 = parseInt(options.par.parent().children().find("input.A2:eq(" + ind7 + ")").val() || 0, 10);                              
             } else {
                
             }
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);
            
             var suminp  = options.par.parent().children(":lt(" + ind4 + "):gt(7)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":lt(" + ind4 + "):gt(7)").find("input:eq(" + ind2 + ")");
                                                                                        
             thissum.val(t0);                                       
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1);              
             $(suminp1).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             sumsum1.val(t2);
             thissum1.val(t3);
             t4 += t1;
             sumsuma.val(t4);
             t5 += t2;
             sumsuma1.val(t5);                                                        
          } else if(options.dividend == "T_21_503_a"){//T_21_343_a"   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5],
                 ind6 = options.ind.split("_")[6],
                 ind7 = options.ind.split("_")[7];

             var sumsum   = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsuma  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");
                                    
             var sumsum1  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");             
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");
              
             if(options.op == "MpSAarrA"){//cor/A03/deduction/income_deduction
                 arr0 += parseInt(options.my.val() || 0, 10)/100 * parseInt(options.par.find("input.MSA").val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.SmAarrA").val() || 0, 10);                 
               
                 t4 = parseInt(options.par.parent().children().find("input.A2:eq(" + ind6 + ")").val() || 0, 10);  
             } else {
                
             }
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);

             var suminp  = options.par.parent().children(":lt(" + ind3 + "):gt(7)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":lt(" + ind3 + "):gt(7)").find("input:eq(" + ind2 + ")");
                                                                                                                               
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1);              
             $(suminp1).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             sumsum1.val(t2);
             t4 += t1;
             sumsuma.val(t4);
             t5 += t2;
             sumsuma1.val(t5);                                                       
          } else if(options.dividend == "T_31_303"){//T_31_023 
             var ind0 = options.ind.split("_")[0]; 
                 ind1 = options.ind.split("_")[1],
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3],
                 ind4 = options.ind.split("_")[4],
                 ind5 = options.ind.split("_")[5],
                 ind6 = options.ind.split("_")[6],
                 ind7 = options.ind.split("_")[7],
                 ind8 = options.ind.split("_")[8],
                 ind9 = options.ind.split("_")[9];
             
             var thissum  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");  
             var sumsum   = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")"); 
             var sumsum1  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind8 + ")"); 
             var sumsum2  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind9 + ")"); 

             var thissum1 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind6 + ")");                                      
             var sumsuma  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind7 + ")");                                                 
             var sumsuma1 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind8 + ")");                         
             var sumsuma2 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind9 + ")");    

             var t7 = 0;
       
             if(options.op == "SmaASmAarrAarr"){//cor/A02/reserve/special_cost                                  
                 arr0 = parseInt(options.par.find("input.SaS2AarrAarr").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 arr1 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.ASm").val() || 0, 10);
                 arr2 = parseInt(options.par.find("input.SaS2AarrAarr").val() || 0, 10) - arr1;


                 var suminp  = options.par.parent().children(":lt(" + ind4 + ")").find("input:eq(" + ind1 + ")");
                 var suminp1 = options.par.parent().children(":lt(" + ind4 + ")").find("input:eq(" + ind2 + ")");
                 var suminp2 = options.par.parent().children(":lt(" + ind4 + ")").find("input:eq(" + ind3 + ")"); 
              
                 var inp = options.par.parent().children().find("input.SmaASmAarrAarr");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t4 = t0; 
                 var inp2 = options.par.parent().children().find("input.Aarr:eq(" + ind6 + ")");
                 $(inp2).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.Aarr:eq(" + ind7 + ")");
                 $(inp3).each(function( index ) {
                     t5 += parseInt($(this).val() || 0, 10);
                 });  
                 var inp4 = options.par.parent().children().find("input.Aarr:eq(" + ind8 + ")");
                 $(inp4).each(function( index ) {
                     t6 += parseInt($(this).val() || 0, 10);
                 });
                 var inp5 = options.par.parent().children().find("input.Aarr:eq(" + ind9 + ")");
                 $(inp5).each(function( index ) {
                     t7 += parseInt($(this).val() || 0, 10);
                 });
             } else if(options.op == "SmASmA"){//per/A02/special_cost/special_cost
                 arr0 = parseInt(options.par.find("input.SSA").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 arr1 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.ASmA").val() || 0, 10); 
                 arr2 = parseInt(options.par.find("input.SSA").val() || 0, 10) - arr1; 

                 var suminp  = options.par.parent().children(":lt(" + ind4 + ")").find("input:eq(" + ind1 + ")");
                 var suminp1 = options.par.parent().children(":lt(" + ind4 + ")").find("input:eq(" + ind2 + ")");
                 var suminp2 = options.par.parent().children(":lt(" + ind4 + ")").find("input:eq(" + ind3 + ")"); 
                              
                 var inp = options.par.parent().children().find("input.SmASmA");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t4 = t0; 
                 var inp2 = options.par.parent().children().find("input.A:eq(" + ind6 + ")");
                 $(inp2).each(function( index ) {
                     t4 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.A:eq(" + ind7 + ")");
                 $(inp3).each(function( index ) {
                     t5 += parseInt($(this).val() || 0, 10);
                 });  
                 var inp4 = options.par.parent().children().find("input.A:eq(" + ind8 + ")");
                 $(inp4).each(function( index ) {
                     t6 += parseInt($(this).val() || 0, 10);
                 });
                 var inp5 = options.par.parent().children().find("input.A:eq(" + ind9 + ")");
                 $(inp5).each(function( index ) {
                     t7 += parseInt($(this).val() || 0, 10);
                 });  
             } else {
                
             }
                          
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);
             options.par.find("input:eq(" + ind3 + ")").val(arr2);

             thissum.val(t0);
             thissum1.val(t4);
                                      
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1); 
             t5 += t1;
             sumsuma.val(t5);

             $(suminp1).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             sumsum1.val(t2);
             t6 += t2;
             sumsuma1.val(t6);

             $(suminp2).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });
             sumsum2.val(t3);
             t7 += t3;
             sumsuma2.val(t7);                          
          } else if(options.dividend == "T_22_155"){//T_22   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6];
             var thissum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");

             var suminp   = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumAarr");
             var suminp1  = options.par.parent().children(":eq(" + ind4 + ")").find("input.SumAarr");
             var suminp2  = options.par.parent().children(":eq(" + ind5 + ")").find("input.SumAarr");

             var suminpa  = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumA");
             var suminpa1 = options.par.parent().children(":eq(" + ind4 + ")").find("input.SumA");
             var suminpa2 = options.par.parent().children(":eq(" + ind5 + ")").find("input.SumA");

             var sumsum   = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind1 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind1 + ")");

             var sumsuma  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind2 + ")");
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind2 + ")");
             var sumsuma2 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind2 + ")");
              
             if(options.op == "MAarrnAnSarrAnS"){//cor/A06/nonprofit/a2101
                 t0 = Math.round(parseInt(options.par.parent().children().find("input.Marr:eq(" + ind6 + ")").val() || 0, 10) * parseInt(options.my.val() || 0, 10)/100, 2);
                 t2 = t0;
                 var inp = options.par.parent().children().find("input.AarrAnSmarrAAnS:eq(" + ind6 + ")");
                 $(inp).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 += parseInt(options.par.parent().children().find("input.Aarr:eq(" + ind6 + ")").val() || 0, 10);
                 t4 = t2 - parseInt(options.par.parent().children().find("input.AarrAnSm:eq(" + ind6 + ")").val() || 0, 10);                   
             } else if(options.op == "AarrAnAarrnSarrAnS"){//cor/A06/nonprofit/a2101
                 var inp = options.par.parent().children().find("input.AarrAnAarrnSarrAnS:eq(" + ind6 + ")");
                 $(inp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 t2 = t0;
                 t2 += parseInt(options.par.parent().children().find("input.A2:eq(" + ind6 + ")").val() || 0, 10);
                 var inp2 = options.par.parent().children().find("input.AarrAnSmarrAAnS:eq(" + ind6 + ")");
                 $(inp2).each(function( index ) {
                     t2 -= parseInt($(this).val() || 0, 10);
                 });
                 t4 = t2 - parseInt(options.par.parent().children().find("input.AarrAnSm:eq(" + ind6 + ")").val() || 0, 10);                   
             } else {
                
             }
                                                                                        
             thissum.val(t0);
             thissum1.val(t2);
             thissum2.val(t4);

             var t7 = 0, t9 = 0, t11 = 0, t13 = 0;                           
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1); 
             t7 = t1 + parseInt(suminpa.val() || 0, 10);
             sumsuma.val(t7);
             $(suminp1).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t3);
             t9 = t3 + parseInt(suminpa.val() || 0, 10);
             sumsuma1.val(t9); 
             $(suminp2).each(function( index ) {
                 t5 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t5);
             t11 = t5 + parseInt(suminpa1.val() || 0, 10);  
             sumsuma2.val(t11);                                                      
          } else if(options.dividend == "T_23_155"){//T_23   
             var ind0 = options.ind.split("_")[0],
                 ind1 = options.ind.split("_")[1], 
                 ind2 = options.ind.split("_")[2],
                 ind3 = options.ind.split("_")[3], 
                 ind4 = options.ind.split("_")[4], 
                 ind5 = options.ind.split("_")[5], 
                 ind6 = options.ind.split("_")[6],
                 ind7 = options.ind.split("_")[7];
             var thissum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind0 + ")");  
             var thissum1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")"); 
             var thissum2 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")");
             var thissum3 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind0 + ")");  

             var suminp   = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumAarr");
             var suminp1  = options.par.parent().children(":eq(" + ind4 + ")").find("input.SumAarr");
             var suminp2  = options.par.parent().children(":eq(" + ind5 + ")").find("input.SumAarr");
             var suminp3  = options.par.parent().children(":eq(" + ind6 + ")").find("input.SumAarr");

             var suminpa  = options.par.parent().children(":eq(" + ind3 + ")").find("input.SumA");
             var suminpa1 = options.par.parent().children(":eq(" + ind4 + ")").find("input.SumA");
             var suminpa2 = options.par.parent().children(":eq(" + ind5 + ")").find("input.SumA");
             var suminpa3 = options.par.parent().children(":eq(" + ind6 + ")").find("input.SumA");

             var sumsum   = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");
             var sumsum1  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind1 + ")");
             var sumsum2  = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind1 + ")");
             var sumsum3  = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind1 + ")");

             var sumsuma  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind2 + ")");
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind2 + ")");
             var sumsuma2 = options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind2 + ")");
             var sumsuma3 = options.par.parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind2 + ")");
              
             if(options.op == "AarrAnAarrSarrnMnSarrAnS"){//cor/A06/nonprofit/a2101
                 var inp = options.par.find("input.AarrAnAarrSarrnMnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 + parseInt(options.par.find("input.AnAarrSarrnMnSarrAnS").val() || 0, 10);                                       
             } else if(options.op == "AarrAnAarrSmarrnMnSarrAnS"){//cor/A06/nonprofit/a2101
                 var inp = options.par.find("input.AarrAnAarrSmarrnMnSarrAnS");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 + parseInt(options.par.find("input.AnAarrSmarrnMnSmarrAnS").val() || 0, 10);  
                   
                                   
             } else {
                
             }

             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);

             var inp2 = options.par.parent().children().find("input.AarrAnAarrSarrnMnSarrAnS:eq(" + ind7 + ")");
                 $(inp2).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                 });
                 var inp3 = options.par.parent().children().find("input.AarrAnAarrSmarrnMnSarrAnS:eq(" + ind7 + ")");
                 $(inp3).each(function( index ) {
                     t0 -= parseInt($(this).val() || 0, 10);
                 });
                 t2 = Math.round(t0 * parseInt(options.par.parent().children().find("input.MAarrnAnSarrAnS:eq(" + ind7 + ")").val() || 0, 10)/100, 2);
                 t4 = t2;
                 var inp4 = options.par.parent().children().find("input.AarrAnSmarrAAnS:eq(" + ind7 + ")");
                 $(inp4).each(function( index ) {
                     t4 -= parseInt($(this).val() || 0, 10);
                 });
                 t4 += parseInt(options.par.parent().children().find("input.Aarr:eq(" + ind7 + ")").val() || 0, 10);
                 var t6 = t4 - parseInt(options.par.parent().children().find("input.AarrAnSm:eq(" + ind7 + ")").val() || 0, 10); 
                                                          
             thissum.val(t0);
             thissum1.val(t2);
             thissum2.val(t4);
             thissum3.val(t6); 

             var t7 = 0, t9 = 0, t11 = 0, t13 = 0, t15 = 0;                           
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             sumsum.val(t1); 
             t9 = t1 + parseInt(suminpa.val() || 0, 10);
             sumsuma.val(t9);
             $(suminp1).each(function( index ) {
                 t3 += parseInt($(this).val() || 0, 10);
             });                                                                             
             sumsum1.val(t3);
             t11 = t3 + parseInt(suminpa.val() || 0, 10);
             sumsuma1.val(t11); 
             $(suminp2).each(function( index ) {
                 t5 += parseInt($(this).val() || 0, 10);
             });             
             sumsum2.val(t5);
             t13 = t5 + parseInt(suminpa.val() || 0, 10);
             sumsuma2.val(t13);
             $(suminp3).each(function( index ) {
                 t7 += parseInt($(this).val() || 0, 10);
             });             
             sumsum3.val(t7); 
             t15 = t7 + parseInt(suminpa.val() || 0, 10);
             sumsuma3.val(t15);                                            
          } else {

          }
       });
       return this;
     }

     $.fn.calcN2=function(options){
        $.defaultOptions = {
            op         : "",
            dividend   : "",
            par        : "",
            my         : "",
            ind        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0 = 0, t1 = 0, t2 = 0, arr0 = 0;   
          if(options.dividend == "T_00_008"){//cor/A03/deduction/deduction_addition_01, cor/A02/reserve/research, cor/A03/deduction/a0913
             var ind0 = options.ind.split("_")[0]; 
             var ind2 = options.ind.split("_")[2]; 

             var thisinp = options.par.parent().children(":not('.nodel')").find("input:eq(" + ind0 + ")");  
             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind2 + ")");                  
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
           
             thissum.val(t0); 
          } else if(options.dividend == "T_00_00c"){//cor/A03/tax_special_case_01/high_school   
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];     
             
             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")");
             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind1 + ")");

             var sumsum = options.par.parent().children(":eq(0)").find("input:eq(" + ind2 + ")");
            
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
                           
             thissum.val(t0);  
             t1 += t0 * 0.1;
             sumsum.val(t1);                                
          } else if(options.dividend == "T_00_645"){//cor/A06/business_inpartnership/a03-2, per/A05/tax_confirmation/earnings_tax_standard_report_15, cor/A03/deduction/deduction_addition_sub_01 
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];  
                                                 
             var thisinp = options.par.parent().children().find("input." + options.op + ":eq(" + ind0 + ")");    
             var thissum = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind2 + ")");         
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          

             thissum.val(t0);          
           } else if(options.dividend == "T_00_647"){
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var thissum; 
             if(options.op == "Aarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_17 
                t0 = parseInt(options.par.parent().parent().prev().find("input.Aarr").val() || 0, 10);                
             }
 
             thisinp = options.par.parent().children().find("input." + options.op);

             thissum = options.par.parent().parent().next().find("input:eq(" + ind2 + ")");

             $(thisinp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
              });
                                                                       
             thissum.val(t0);          
           } else if(options.dividend == "T_00_648"){//cor/A05/international_trade_02/earnings_type_foregin_pay_tax_deduction  --소계:0, 총계:1, 소계총계:2
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];   
                     
             var thisinp = options.par.parent().parent().parent().parent().parent().children().find("input." + options.op + ":eq(" + ind0 + ")");
             var thissum = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind2 + ")");
            
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
                           
             thissum.val(t0);                                
          } else if(options.dividend == "T_00_649"){//cor/base/revenue/control_after_revenue_amount, cor/A05/international_trade_02/oversea_local_cor_report 
             var ind2 = options.ind.split("_")[2];

             var thisinp = options.par.parent().children().find("input." + options.op);                                           

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind2 + ")");
                                 
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });            
             thissum.val(t0); 
          } else if(options.dividend == "T_01_005_a"){//cor/base/connection/report/connection_bad_debt_appropriation_control       T_01_195_a 
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];  
             var ind4 = options.ind.split("_")[4];        
                                         
             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind3 + ")"); 

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });                                
             
             thissum.val(t0);    

             var thisinp1 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind3 + ")");          

             var thissum1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");  

             $(thisinp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             });                               
 
             thissum1.val(t2); 
          } else if(options.dividend == "T_01_327"){//cor/A03/deduction/deduction_addition_01  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2];  
             var ind3 = options.ind.split("_")[3];    
             var ind4 = options.ind.split("_")[4];              
             var thisinp = options.par.parent().children(":lt(" + ind1 + ")").find("input:eq(" + ind0 + ")"); 

             var thissum  = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind3 + ")");                  
             var thissum1 = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");                  
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
             t1 = parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10); 
             t1 += t0;

             thissum.val(t0);          
             thissum1.val(t1);
           } else if(options.dividend == "T_01_527"){//cor/A03/deduction/deduction_addition_01, vat/A01/report01/sumtable 
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2];  
             var ind3 = options.ind.split("_")[3];    
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];            
             var inp = options.par.parent().children(":lt(" + ind1 + "):gt(" + ind4 + ")").find("input:eq(" + ind0 + ")");

             var thissum  = options.par.parent().children(":eq(" + ind1 + ")").find("input:eq(" + ind3 + ")");                  
             var thissum1 = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");                  
               
             $(inp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
             t1 = parseInt(options.par.parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind0 + ")").val() || 0, 10); 
             t1 += t0; 

             thissum.val(t0);          
             thissum1.val(t1);
           } else if(options.dividend == "T_01_641_a"){ 
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 

             var thisinp = options.par.parent().children().find("input." + options.op + ":eq(" + ind0 + ")"); 
             
             $(thisinp).each(function( index ) {
                     t0 += parseInt($(this).val() || 0, 10);
                });        
             if(options.op == "AarrA"){//cor/connection/report/connection_share_control_01               
                t1 = t0 + parseInt(options.par.parent().parent().parent().parent().parent().children().find("input.A:eq(" + ind0 + ")").val() || 0, 10);                 
             } else if(options.op == "AarrA2"){//cor/connection/report/connection_share_control_01
                t1 = t0 + parseInt(options.par.parent().parent().parent().parent().parent().children().find("input.A2:eq(" + ind0 + ")").val() || 0, 10);                 
             } else {
                
             }                                      
             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind3 + ")");                                                                     
             var thissum1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");  

             thissum.val(t0);                  
             thissum1.val(t1); 
          } else if(options.dividend == "T_02_003"){//cor/A06/business_inpartnership/a03-71  T_02_153
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")");              

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")");   

             var thisinp1 = options.par.parent().parent().parent().parent().parent().find("input." + options.op); 

             var thissum1 = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");    

             var thisinp2 = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").children(":not(:last)").find("input:eq(" + ind5 + ")");   

             var thissum2 = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").children(":last").find("input:eq(" + ind4 + ")");            
        
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });
             thissum.val(t0);                           
             $(thisinp1).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             }); 
             thissum1.val(t1); 
             $(thisinp2).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             });                                                                               
             thissum2.val(t2);                                                                                     
           } else if(options.dividend == "T_02_64a"){//pay/A02/earned_income/salary_insert   
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 

             var thissum; 
             var thisinp; 
             var thissum_other;
          
             if(options.par.index() % 2 == 0){
                thisinp = options.par.parent().children(":even").find("input." + options.op);
                thissum = options.par.parent().children(".nodel").prev().prev().find("input:eq(" + ind3 + ")");  
                thissum_other = options.par.parent().children(".nodel").prev().find("input:eq(" + ind3 + ")");
             } else {
                thisinp = options.par.parent().children(":odd").find("input." + options.op);
                thissum = options.par.parent().children(".nodel").prev().find("input:eq(" + ind3 + ")"); 
                thissum_other = options.par.parent().children(".nodel").prev().prev().find("input:eq(" + ind3 + ")");
             }

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
             thissum.val(t0); 

             var thissum1 = options.par.parent().children(".nodel").find("input:eq(" + ind3 + ")"); 
             var thissum_other2 = options.par.parent().parent().parent().parent().next().find("input.Sm");
             var thissum2 = options.par.parent().parent().parent().parent().next().find("tr.nodel").find("input"); 

             t1 = t0 + parseInt(thissum_other.val() || 0, 10);  

             thissum1.val(t1);   

             t2 = t1 - parseInt(thissum_other2.val() || 0, 10);   

             thissum2.val(t2);      
                                                                    
          } else if(options.dividend == "T_10_641"){//T_10_151   
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];  
             var ind4 = options.ind.split("_")[4];
             if(options.op == "Aarr"){//cor/base/revenue/control_after_revenue_amount                  
                $(options.par.find("input.Aarr")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });                        
             } else {
                
             }
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             thisinp = options.par.parent().children().find("input." + options.op + ":eq(" + ind0 + ")"); 
             
             thissum = options.par.parent().children(".nodel").find("input:eq(" + ind3 + ")");  

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
             thissum.val(t0); 

             var inp  = options.par.parent().children(".nodel").find("input:not(:eq(" + ind4 + "))");
             sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")");              
                                       
             $(inp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             }); 
                            
             sumsum.val(t1);                               
          } else {

          }
       });
       return this;
     }

     $.fn.calcE=function(options){
        $.defaultOptions = {
            op         : "",
            dividend   : "",
            par        : "",
            my         : "",
            ind        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0 = 0, t1 = 0, t2 = 0, t3 = 0, arr0 = 0, arr1 = 0, arr2 = 0;   
          if(options.dividend == "T_10_001"){//43 25 011
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];      
             if(options.op == "AS"){//cor/base/revenue/revenue_amount_control 
                $(options.par.find("input.AS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });               
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.A").val() || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10);                         
             } else if(options.op == "M"){//cor/A05/international_trade_01/origin_collection_control
                arr0 += parseInt(options.my.val() || 0, 10) * parseFloat(options.my.parent().siblings().find("input.M").val() || 0, 10);
             } else if(options.op == "Mp"){//cor/A05/international_trade_01/origin_collection_control
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.Mp").val() || 0, 10)/100;
             } else if(options.op == "Mm"){//cor/A02/subject_01/a09                    
                arr0 += parseInt(options.my.val() || 0, 10) * parseint(options.par.find("input.M").val() || 0, 10);
             } else if(options.op == "MD365"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01
                arr0 += parseInt(options.my.val() || 0, 10) * parseFloat(options.par.find("input.MpD365").val() || 0, 10)/365;
             } else if(options.op == "MpD365"){//cor/A05/international_trade_01/foregin_rule_stockholder_payment_interest_01
                arr0 += parseInt(options.my.val() || 0, 10) * parseFloat(options.par.find("input.MD365").val() || 0, 10)/365;
             } else if(options.op == "A"){//cor/A03/deduction/deduction_addition_01, cor/connection/report/connection_invest_hh, vat/A01/report01/card_sales_sum                    
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.A").val() || 0, 10);
             } else if(options.op == "A2"){//cor/A02/subject_01/a07                  
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.A2").val() || 0, 10);                         
             } else if(options.op == "AS2"){//cor/A05/report_attachment/capital_control_02                  
                arr0 = parseInt(options.my.val() || 0, 10)
                     + parseFloat(options.my.parent().siblings().find("input.AS2").val() || 0, 10)
                     - parseInt(options.par.find("input.SmAA").val() || 0, 10);                               
             } else if(options.op == "SmAA"){//A05/report_attachment/capital_control_02  
                $(options.par.find("input.AS2")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });                 
                arr0 -= parseInt(options.my.val() || 0, 10);
             } else if(options.op == "S"){//cor/A02/subject_02/government_subsidy, per/A02/subject/government_subsidy, cor/A06/business_inpartnership/division_limit_exceed_loss, cor/A03/deduction/deduction_addition_sub_06, cor/A03/deduction/deduction_addition_sub_02, cor/A06/common_benefit_02/a2003                  
                arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "Sm"){//cor/A03/deduction/deduction_addition_sub_06, cor/A02/subject_01/a07, cor/A06/common_benefit_02/a2003                   
                arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
             } else if(options.op == "S2"){//cor/A06/business_inpartnership/division_limit_exceed_loss                  
                arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.Sm2").val() || 0, 10);
             } else if(options.op == "S9"){//per/A02/subject/government_subsidy
                arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmnSmSm").val() || 0, 10);                 
             } else if(options.op == "Sm"){//per/A05/sincerity_report/tax_deduction, per/A02/subject/government_subsidy : op수정해야함                   
                arr0 = parseInt(options.par.find("input.SmS").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                               
             } else if(options.op == "Sm2"){//cor/A03/deduction/a0913 
                arr0 = parseInt(options.par.find("input.S2").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
             } else if(options.op == "Min"){//per/A02/subject/government_subsidy                                                              
                 arr0 = Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.my.parent().siblings().find("input.Min").val() || 0, 10));
             } else if(options.op == "Smn"){//cor/A05/report_attachment/capital_control_02                   
                arr0 = parseInt(options.par.find("input.SmS").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
             } else if(options.op == "Sarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_13, cor/A02/reserve/research, cor/A02/subject_02/a001, cor/connection/report/connection_reception_control_02                     
                arr0 = parseInt(options.my.val() || 0, 10);
                $(options.par.find("input.Smarr")).each(function( index ) {
                    arr0 -= parseInt($(this).val() || 0, 10);
                });                 
             } else if(options.op == "Smarr"){//per/A05/tax_confirmation/earnings_tax_standard_report_13 , cor/A02/reserve/research, cor/A02/subject_02/a001  
                arr0 = parseInt(options.par.find("input.Sarr").val() || 0, 10);                                 
                $(options.par.find("input.Smarr")).each(function( index ) {
                   arr0 -= parseInt($(this).val() || 0, 10);
                });                
             } else if(options.op == "Marr"){//cor/A03/deduction/deduction_addition_sub_06   
                arr0 += 1;                                                                           
                $(options.par.find("input.Marr")).each(function( index ) {
                   arr0 *= parseInt($(this).val() || 0, 10);
                });             
             } else if(options.op == "Marr3"){//cor/A03/deduction/deduction_addition_sub_04
                arr0 = parseInt(options.my.val() || 0, 10) * parseFloat(options.par.find("input.Marr").val() || 0, 10) * options.par.find("input.Mp").val();                 
             } else if(options.op == "DdMarr"){//cor/A02/subject_02/government_subsidy  
                 arr0 += 1;                                              
                $(options.par.find("input.MarrD")).each(function( index ) {
                   arr0 *= parseInt($(this).val() || 0, 10);
                });
                arr0 = arr0/parseInt(options.my.val() || 1, 10);                 
             } else if(options.op == "MarrD"){//cor/A02/subject_02/government_subsidy  
                 arr0 += 1;                                              
                $(options.par.find("input.MarrD")).each(function( index ) {
                   arr0 *= parseInt($(this).val() || 0, 10);
                }); 
                arr0 = arr0 /parseInt(options.my.parents("tr").find("input.DdMarr").val() || 1, 10);                
             } else if(options.op == "SmarrAarr"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction   
                arr0 = parseInt(options.par.find("input.Sarr").val() || 0, 10);
                var inp = options.par.find("input.SmarrAarr");
                $(inp).each(function( index ) {
                     arr0 -= parseInt($(this).val() || 0, 10);
                });                                           
             } else if(options.op == "AarrAarr"){//cor/A03/deduction/grow_research_develop
                 $(options.par.find("input.AarrAarr")).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                              
             } else if(options.op == "AarrAarr2"){//cor/A03/deduction/research_develop
                 $(options.par.find("input.AarrAarr2")).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                              
             } else if(options.op == "AAarr"){                  
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AAarr").val() || 0, 10);                         
             } else if(options.op == "ASabs"){//cor/A04/combination/amount_transfer_01                                                
                 arr0 = parseInt(options.my.val() || 0, 10)
                      + parseInt(options.my.parent().siblings().find("input.ASabs").val() || 0, 10)
                      - parseInt(options.par.find("input.Smabs").val() || 0, 10);                                                                                                     
             } else if(options.op == "Smabs"){//cor/A04/combination/amount_transfer_01                                                 
                 var inp = options.par.find("input.ASabs");
                 arr0 -= parseInt(options.my.val() || 0, 10);
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });               
             } else if(options.op == "Aarr"){//cor/connection/report/connection_transfer_deficit                                    
                 var inp = options.par.find("input.Aarr");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                              
             } else if(options.op == "SSm"){//cor/connection/report/connection_transfer_deficit                  
                arr0 += parseInt(options.par.find("input.SS").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                         
             } else if(options.op == "ASnAarr"){//cor/connection/report/connection_share_control_02                   
                $(options.par.find("input.ASnAarr")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                arr0 -= parseInt(options.par.find("input.AASmnAarr").val() || 0, 10);                      
             } else if(options.op == "AASmnAarr"){//cor/connection/report/connection_share_control_02                   
                $(options.par.find("input.ASnAarr")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                }); 
                arr0 -= parseInt(options.my.val() || 0, 10);                      
             } else if(options.op == "MMD"){//cor/connection/report/connection_share_control_02                                 
                arr0 = parseInt(options.my.val() || 0, 10) * 2 * 4 /3;                      
             } else if(options.op == "SAarr"){//per/A03/tax_stsndard/contribution_report                                  
                arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmAarr").val() || 0, 10);                      
             } else if(options.op == "SmAarr"){//per/A03/tax_stsndard/contribution_report                                  
                arr0 = parseInt(options.par.find("input.SAarr").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                      
             } else if(options.op == "AarrSarr"){//pay/A02/temporary/tempoarary_salary_insert  
                arr0 = parseInt(options.par.find("input.Sarr").val() || 0, 10);
                var inp = options.par.find("input.AarrSarr");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.find("input.AarrSmarr");
                $(inp2).each(function( index ) {
                     arr0 -= parseInt($(this).val() || 0, 10);
                });                                           
             } else if(options.op == "AarrSmarr"){//pay/A02/temporary/tempoarary_salary_insert  
                arr0 = parseInt(options.par.find("input.Sarr").val() || 0, 10);
                var inp = options.par.find("input.AarrSarr");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.find("input.AarrSmarr");
                $(inp2).each(function( index ) {
                     arr0 -= parseInt($(this).val() || 0, 10);
                });                                           
             } else if(options.op == "DM"){//vat/A01/report02/notax_deduction
                 arr0 = parseInt(options.my.val() || 0, 10)/parseInt(options.par.find("input.Dd").val() || 1, 10) * parseInt(options.par.find("input.AnMdM:eq(1)").val() || 0, 10);
             } else {
                 
             }  
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind3 + ")");  
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")"); 

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             thissum.val(t0);

             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             sumsum.val(t1);
           } else if(options.dividend == "T_10_101"){ //T_10_101  
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];

             if(options.op == "MMDd"){//cor/connection/report/connection_contribution_02   
                arr0 += parseInt(options.par.parent().find("input.M").val() || 0, 10)
                     * parseInt(options.my.val() || 0, 10)/parseInt(options.par.parent().find("input.Md").val() || 1, 10)                     
             } else {
                
             }
             options.par.find("input:eq(" + ind0 + ")").val(arr0); 

             thisinp = options.par.parent().parent().parent().parent().parent().children().find("input." + options.op); 
             suminp  = options.par.parent().parent().parent().parent().parent().children().find("input.sum"); 

             thissum = options.par.parent().parent().parent().parent().parent().children(".nodel").find("input:eq(" + ind3 + ")");  
             sumsum  = options.par.parent().parent().parent().parent().parent().children(".nodel").find("input:eq(" + ind4 + ")");               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });                                        
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             }); 

             thissum.val(t0);              
             sumsum.val(t1);                               
          } else if(options.dividend == "T_10_103"){//options, sum, input  30 053, T_10_103
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];   
             var cla;     
             if(options.op == "Sm"){//cor/A02/subject_01/contribution_details, cor/connection/report/connection_contribution_01
                 arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 cla = "sum";
             } else if(options.op == "Sma"){//cor/A02/subject_01/contribution_details
                 arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 cla = "suma";
             } else if(options.op == "Smb"){//cor/A02/subject_01/contribution_details
                 arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 cla = "sumb";
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var thisinp = options.par.parent().children().find("input." + options.op);  
             var suminp  = options.par.parent().children().find("input." + cla);
               
             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");                 
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");                 
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });

             thissum.val(t0);          
             sumsum.val(t1);
           } else if(options.dividend == "T_10_303"){//options, sum, input  30 053, T_10_313
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];      
             if(options.op == "M"){//cor/A03/local_income_tax/agriculture_special_tax_standard_control
                 arr0 = parseInt(options.my.val() || 0, 10) * parseFloat(options.my.parent().siblings().find("input.M").val() || 0, 10)/100;
             } else if(options.op == "AarrAarr"){//cor/A06/nonprofit/a2102
                 var inp = options.par.find("input.AarrAarr");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var thisinp = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind0 + ")");    
             var suminp  = options.par.parent().children(":lt(" + ind2 + ")").find("input:eq(" + ind1 + ")"); 
           
             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");                 
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");                 
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });

             thissum.val(t0);          
             sumsum.val(t1);
           } else if(options.dividend == "T_10_503"){//options, sum, input  30 053, T_10_323
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];        
             if(options.op == "M"){//cor/A03/deduction/a0913, cor/A03/local_income_tax/agriculture_special_tax_standard_control
                 arr0 = parseInt(options.my.val() || 0, 10) * parseFloat(options.my.parent().siblings().find("input.M").val() || 0, 10)/100;
             } else if(options.op == "AarrAarr"){//cor/A06/nonprofit/a2102
                 var inp = options.par.find("input.AarrAarr");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var thisinp = options.par.parent().children(":lt(" + ind2 + "):gt(" + ind5 + ")").find("input:eq(" + ind0 + ")");    
             var suminp  = options.par.parent().children(":lt(" + ind2 + "):gt(" + ind5 + ")").find("input:eq(" + ind1 + ")"); 
           
             var thissum = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind3 + ")");                 
             var sumsum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");                 
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });

             thissum.val(t0);          
             sumsum.val(t1);
           } else if(options.dividend == "T_11_001_a"){ //T_11_001_a"
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];  
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];         
             if(options.op == "AASmarrnAA"){//cor/A03/deduction/deduction_addition_sub_03
                $(options.par.find("input.EAarrSarrnASmarrnAA")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });
                $(options.par.find("input.AASmarrnAA")).each(function( index ) {
                   arr0 -= parseInt($(this).val() || 0, 10);
                });                
             } else if(options.op == "AS"){//cor/connection/report/connection_asset_transfer_control                 
                arr0 = parseInt(options.my.val() || 0, 10)
                     + parseInt(options.my.parent().siblings().find("input.AS").val() || 0, 10)
                     - parseInt(options.par.find("input.Sm").val() || 0, 10);                                       
             } else if(options.op == "Sm"){//cor/connection/report/connection_asset_transfer_control 
                inp = options.par.find("input.AS");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });                  
                arr0 -= parseInt(options.my.val() || 0, 10);                                        
             } else {
                
             }
                                       
             options.par.find("input:eq(" + ind1 + ")").val(arr0);    

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")"); 
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             thissum.val(t0); 
             sumsum.val(t1);        

             var thisinp1 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind4 + ")");  
             var suminp1  = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind5 + ")");          

             var thissum1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")");  
             var sumsum1  = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");

             var t01 = 0, t11 = 0;

             $(thisinp1).each(function( index ) {
                t01 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminp1).each(function( index ) {
                t11 += parseInt($(this).val() || 0, 10);
             });                      
 
             thissum1.val(t01); 
             sumsum1.val(t11);   
          } else if(options.dividend == "T_11_001_b"){//T_11_001_b 
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];  
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5]; 
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7];        
             if(options.op == "S"){//cor/connection/report/connection_transfer_deficit                  
                arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else if(options.op == "Sm"){//cor/connection/report/connection_share_control_01                  
                arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
             } else if(options.op == "SSm"){//cor/connection/report/connection_transfer_deficit                  
                arr0 = parseInt(options.par.find("input.SS").val() || 0, 10) - parseInt(options.my.val() || 0, 10) ;
             } else {
                
             }
                                       
             options.par.find("input:eq(" + ind1 + ")").val(arr0);    

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")"); 
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             thissum.val(t0); 
             sumsum.val(t1);        

             var thisinp1 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind4 + ")");  
             var suminp1  = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind5 + ")");          

             var thissum1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");  
             var sumsum1  = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");

             $(thisinp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminp1).each(function( index ) {
                t3 += parseInt($(this).val() || 0, 10);
             });                      
 
             thissum1.val(t2); 
             sumsum1.val(t3);   
          } else if(options.dividend == "T_11_503"){//T_11_323  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2];  
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
              
             if(options.op == "ASnAnSmAA"){//cor/A05/report_attachment/capital_control_02
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.ASnAnSmAA").val() || 0, 10)
                     - parseInt(options.par.find("input.SmAAnAnSmAA").val() || 0, 10);  
             } else if(options.op == "SmAAnAnSmAA"){//cor/A05/report_attachment/capital_control_02
                var inp = options.par.find("input.ASnAnSmAA");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                }); 
                arr0 -= parseInt(options.my.val() || 0, 10);
             } else{                  
                                             
             }  

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             var thisinp = options.par.parent().children(":lt(" + ind2 + "):gt(7)").find("input:eq(" + ind0 + ")");    
             var suminp  = options.par.parent().children(":lt(" + ind2 + "):gt(7)").find("input:eq(" + ind1 + ")"); 
                             
             var thissum  = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind4 + ")");                 
             var sumsum   = options.par.parent().children(":eq(" + ind2 + ")").find("input:eq(" + ind5 + ")");

             var thissum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")");                 
             var sumsum1  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");

             $(thisinp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });  
             $(suminp).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             }); 

             t2 = parseInt(options.par.parent().children(":eq(6)").find("input:eq(" + ind4 + ")").val() || 0, 10)
                + parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind4 + ")").val() || 0, 10) - t0;
             t3 = parseInt(options.par.parent().children(":eq(6)").find("input:eq(" + ind5 + ")").val() || 0, 10)
                + parseInt(options.par.parent().children(":eq(7)").find("input:eq(" + ind5 + ")").val() || 0, 10) - t1;                              
                           
             thissum.val(t0);
             sumsum.val(t1);
             thissum1.val(t2);                                              
             sumsum1.val(t3); 
           } else if(options.dividend == "T_20_001"){//T_20_001  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];  
             var ind5 = options.ind.split("_")[5]; 
             var ind6 = options.ind.split("_")[6];       
             if(options.op == "AS"){                  
                $(options.par.find("input.AS")).each(function( index ) {//cor/A02/subject_01/a07
                    arr0 += parseInt($(this).val() || 0, 10);
                });  
                arr1 += arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);                          
             } else if(options.op == "SM"){//per/A02/subject/payment_interest_control_01                  
                arr0 += parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmM").val() || 0, 10); 
                arr1 += arr0 * parseInt(options.par.find("input.M").val() || 0, 10);                          
             } else if(options.op == "SmM"){//per/A02/subject/payment_interest_control_01                  
                arr0 += parseInt(options.par.find("input.SM").val() || 0, 10) -  parseInt(options.my.val() || 0, 10); 
                arr1 += arr0 * parseInt(options.par.find("input.M").val() || 0, 10);                          
             } else if(options.op == "DA"){//stk/A05/operation_management/business_hh_table                 
                arr0 += parseInt(options.my.val() || 0, 10)/10; 
                arr1  = arr0 + parseInt(options.my.val() || 0, 10);                          
             } else if(options.op == "MarrA"){//cor/A03/deduction/deduction_addition_sub_06   
                arr0 += 1;                                                                           
                $(options.par.find("input.MarrA")).each(function( index ) {
                   arr0 *= parseInt($(this).val() || 0, 10);
                });
                arr1 = parseInt(options.par.find("input.MarrA:eq(0)").val() || 0, 10) + arr0;             
             } else if(options.op == "SMind"){//cor/A05/international_trade_01/origin_collection_control   
                arr0 += parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmMind").val() || 0, 10); 
                arr1 += arr0 * parseInt(options.par.find("input.M:eq(0)").val() || 0, 10);           
             } else if(options.op == "SmMind"){//cor/A05/international_trade_01/origin_collection_control  
                arr0 += parseInt(options.par.find("input.SMind").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                arr1 += arr0 * parseInt(options.par.find("input.M:eq(0)").val() || 0, 10);           
             } else if(options.op == "ASm"){//cor/A06/business_inpartnership/division_limit_exceed_loss                  
                $(options.par.find("input.ASm")).each(function( index ) {
                    arr0 += parseInt($(this).val() || 0, 10);
                });  
                arr1 += parseInt(options.par.find("input.S").val() || 0, 10) - arr0;                          
             } else if(options.op == "MS2"){//cor/base/revenue/revenue_share :MS --> MS2로 수정  ?                
                arr0 += parseInt(options.my.val() || 1, 10) * parseInt(options.my.parent().siblings().find("input.MS2").val() || 0, 10); 
                arr1 += arr0 - parseInt(options.my.parents("tr").find("input.Sm").val() || 0, 10);
             } else if(options.op == "MSm"){//cor/A02/subject_02/a10                  
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.MMS").val() || 0, 10); 
                arr1 += parseInt(options.par.find("input.S").val() || 0, 10) - arr0;                         
             } else if(options.op == "MS"){//cor/A02/subject_02/a10, per/A02/subject/foreign_currency_evaluation_control                  
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.MMS").val() || 0, 10); 
                arr1 += arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);                         
             } else if(options.op == "AMin"){//per/A02/subject/government_subsidy  
                 arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AMin").val() || 0, 10);
                 arr1 = Math.min(arr0, parseInt(options.par.find("input.Min:eq(0)").val() || 0, 10));
             } else if(options.op == "AarrM"){//per/A02/subject/payment_interest_control_01 
                 var inp = options.par.find("input.AarrM");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 * parseInt(options.par.find("input.M").val() || 0, 10);
             } else if(options.op == "SarrSarrAarr"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction  
                arr0 = parseInt(options.my.val() || 0, 10);
                var inp = options.par.find("input.SmarrSarrAarr");
                $(inp).each(function( index ) {
                     arr0 -= parseInt($(this).val() || 0, 10);
                });
                arr1 = arr0;
                var inp2 = options.par.find("input.SmarrAarr");
                $(inp2).each(function( index ) {
                     arr1 -= parseInt($(this).val() || 0, 10);
                });            
             } else if(options.op == "SmarrSarrAarr"){//cor/A05/international_trade_02/nation_foregin_pay_tax_deduction  
                arr0 = parseInt(options.par.find("input.SarrSarrAarr").val() || 0, 10);
                var inp = options.par.find("input.SmarrSarrAarr");
                $(inp).each(function( index ) {
                     arr0 -= parseInt($(this).val() || 0, 10);
                });
                arr1 = arr0;
                var inp2 = options.par.find("input.SmarrAarr");
                $(inp2).each(function( index ) {
                     arr1 -= parseInt($(this).val() || 0, 10);
                });            
             } else if(options.op == "SmS"){//per/A05/sincerity_report/tax_deduction
                arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                arr1 = arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);                       
             } else if(options.op == "SnMarrD"){//cor/A02/subject_02/government_subsidy                  
                arr0 += parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmnMarrD").val() || 0, 10); 
                arr1 += arr0 * parseInt(options.par.find("input.MarrD").val() || 0, 10)/parseInt(options.par.find("input.DdMarr").val() || 1, 10);                          
             } else if(options.op == "SmnMarrD"){//cor/A02/subject_02/government_subsidy                   
                arr0 += parseInt(options.par.find("input.SnMarrD").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                arr1 += arr0* parseInt(options.par.find("input.MarrD").val() || 0, 10) /parseInt(options.par.find("input.DdMarr").val() || 1, 10);                          
             } else if(options.op == "ASmind"){//cor/A06/business_inpartnership/division_limit_exceed_loss                  
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.ASmind").val() || 0, 10);
                arr1 += parseInt(options.par.find("input:eq(1)").children("input").val() || 0, 10) - arr0;
             } else if(options.op == "ASmind2"){//cor/A06/business_inpartnership/division_limit_exceed_loss                  
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.ASmind2").val() || 0, 10);
                arr1 += parseInt(options.par.find("input:eq(2)").children("input").val() || 0, 10) - arr0;
             } else if(options.op == "MSarr"){//cor/base/revenue/revenue_amount_control                                                
                 arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.M").val() || 0, 10);
                 var inp = options.par.find("input.Smarr");
                 $(inp).each(function( index ) {
                     arr1 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 - arr1;
             } else if(options.op == "MSarr2"){//cor/A06/common_benefit_01/contribution_property_sell_use
                 arr0 = parseInt(options.my.val() || 0, 10) * 0.3;
                 var inp = options.par.find("input.Smarr");
                 $(inp).each(function( index ) {
                     arr1 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 - arr1;
             } else if(options.op == "MAAarr"){//vat/A01/report01/card_sales_hh
                 arr0 = parseInt(options.my.val() || 0, 10) * 0.1;
                 var inp = options.par.find("input.Smarr");
                 $(inp).each(function( index ) {
                     arr1 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = parseInt(options.my.val() || 0, 10) + arr0;
             } else if(options.op == "SSarr"){//pay/A04/tax_report/yearend_performance
                 arr0 = parseInt(options.my.val() || 0, 10)  - parseInt(options.par.find("input.Sm").val() || 0, 10);
                 var inp = options.par.find("input.Smarr");
                 $(inp).each(function( index ) {
                     arr1 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = arr0 - arr1;
             } else if(options.op == "AnMdM"){//vat/A01/report02/notax_deduction
                 arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AnMdM").val() || 0, 10);
                 arr1 = parseInt(options.par.find("input.AnMdM:eq(1)").val() || 0, 10) * parseInt(options.par.find("input.DM").val() || 0, 10)/parseInt(arr0 || 1, 10);
             } else if(options.op == "MS3"){//vat/A01/report02/notax_deduction
                 arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.MS3").val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);
             } else {                 
                                             
             }

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  

             thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")"); 
             suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")"); 

             thissum = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")"); 
             sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");
             sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")"); 

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 
             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);
          } else if(options.dividend == "T_20_001_a"){//T_20_001_a   
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];        
             if(options.op == "ASm"){//cor/connection/report/connection_reception_control_02 ??삭제                  
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.A").val() || 0, 10); 
                arr1 = parseInt(options.par.find("input.S").val() || 0, 10) - arr0;                         
             } else if(options.op == "SmarrSm"){//추가작업 ???   ??삭제
                var inp = options.par.find("input.SmarrSm");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });                                   
                arr1 = parseInt(options.par.find("input.S").val() || 0, 10) - arr0;                  
             } else if(options.op == "MinS"){//cor/connection/report/combination_asset_loss_control 
                arr0 = Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.par.find("input.Min").val() || 0, 10)); 
                if(parseInt(options.par.find("input.Min").val() || 0, 10) - arr0 > 0){
                   arr1 = parseInt(options.par.find("input.Min").val() || 0, 10) - arr0;  
                }                
             } else {
                
             }
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 
             options.par.find("input:eq(" + ind2 + ")").val(arr1); 

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")");  
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");   
             var sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")");             
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });                            
             thissum.val(t0); 
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });                            
             sumsum.val(t1); 
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             });                            
             sumsum1.val(t2);                              
          } else if(options.dividend == "T_20_001_b"){//비율계산오류---수정필요  
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];        
             if(options.op == "AAarrSmarrnDnAarr"){//cor/connection/report/connection_reception_control_02  
                arr0 = parseInt(options.par.find("input.DAarrSmarrnDnAarr").val() || 0, 10);                 
                var inp = options.par.find("input.AAarrSmarrnDnAarr");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.find("input.AAarrSmarrnDnAarr2");
                $(inp2).each(function( index ) {
                     arr0 -= parseInt($(this).val() || 0, 10);
                 });                        
             } else if(options.op == "AAarrSmarrnDnAarr2"){//cor/connection/report/connection_reception_control_02  
                arr0 = parseInt(options.par.find("input.DAarrSmarrnDnAarr").val() || 0, 10);                 
                var inp = options.par.find("input.AAarrSmarrnDnAarr");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.find("input.AAarrSmarrnDnAarr2");
                $(inp2).each(function( index ) {
                     arr0 -= parseInt($(this).val() || 0, 10);
                 });                        
             } else {
                
             }
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind4 + ")");  
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });                            
             thissum.val(t0); 
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });                            
             sumsum.val(t1);  

             arr1 = arr0/sumsum.val() * 100;
             options.par.find("input:eq(" + ind2 + ")").val(arr1);                             
          } else if(options.dividend == "T_30_001"){//T_30_001  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5]; 
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7]; 
             var ind8 = options.ind.split("_")[8];         
             if(options.op == "AES"){//cor/A03/deduction/a0913                  
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AES").val() || 0, 10); 
                arr1 += arr0; 
                arr2 += arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);                          
             } else if(options.op == "AESm"){//cor/A03/deduction/a0913                  
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AESm").val() || 0, 10); 
                arr1 += parseInt(options.par.find("input.S").val() || 0, 10) - arr0;  
                arr2 += arr1;                         
             } else if(options.op == "AarrAS"){//cor/A02/reserve/research                   
                $(options.par.find("input.AarrAS")).each(function( index ) {
                    arr0 += parseInt($(this).val() || 0, 10);
                });  
                arr1 += (arr0 + 100);  
                arr2 += arr1 - parseInt(options.par.find("input.Sm").val() || 0, 10);                          
             } else if(options.op == "SmarrSE"){//cor/A05/report_attachment/capital_control_02                  
                arr0 = parseInt(options.par.find("input.S").val() || 0, 10) - parseInt(options.my.val() || 0, 10); 
                arr1 = arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);  
                arr2 = arr1 - parseInt(options.par.find("input:eq(11)").val() || 0, 10);                         
             } else if(options.op == "AarrSmE"){//cor/A05/report_attachment/capital_control_02  
                $(options.par.find("input.AarrSmE")).each(function( index ) {
                    arr0 += parseInt($(this).val() || 0, 10);
                });                
                arr1 = parseInt(options.par.find("input.S2").val() || 0, 10) - arr0;  
                arr2 = arr1 - parseInt(options.par.find("input:eq(11)").val() || 0, 10);                         
             } else if(options.op == "ADMarr"){//cor/A03/deduction/deduction_addition_sub_04
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.ADdMarr").val() || 0, 10); 
                arr1 = parseInt(options.my.val() || 0, 10)/arr0; 
                arr2 = arr1 * parseInt(options.par.find("input.Marr3").val() || 0, 10) * options.par.find("input.Mp").val();                      
             } else if(options.op == "ADdMarr"){//cor/A03/deduction/deduction_addition_sub_04
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.par.find("input.ADMarr").val() || 0, 10); 
                arr1 = parseInt(options.par.find("input.ADMarr").val() || 0, 10)/arr0; 
                arr2 = arr1 * parseInt(options.par.find("input.Marr3").val() || 0, 10) * options.par.find("input.Mp").val();                       
             } else if(options.op == "SmnSmSm"){//per/A02/subject/government_subsidy
                arr0 = parseInt(options.par.find("input.S9").val() || 0, 10) - parseInt(options.my.val() || 0, 10);                 
                arr1 = parseInt(options.par.find("input.S2").val() || 0, 10) - arr0; 
                if(arr1 > arr0){
                    arr1 = arr0;
                }
                arr2 = parseInt(options.par.find("input.S").val() || 0, 10) - arr1;                       
             } else if(options.op == "ASSm"){//per/A02/subject/government_subsidy
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.ASSm").val() || 0, 10);                 
                arr1 = arr0 - parseInt(options.par.find("input.SmnSmSm").val() || 0, 10); 
                if(arr1 > arr0){
                    arr1 = arr0;
                }
                arr2 = parseInt(options.par.find("input.S").val() || 0, 10) - arr1;                       
             } else if(options.op == "AarrSS"){//per/A05/sincerity_report/tax_deduction
                $(options.par.find("input.AarrSS")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });
                arr1 = arr0 - parseInt(options.par.find("input.SmS").val() || 0, 10); 
                arr2 = arr0 - arr1 - parseInt(options.par.find("input.Sm").val() || 0, 10);                       
             } else if(options.op == "M"){//cor/A02/subject_01/a09                    
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.Mm:eq(0)").val() || 0, 10); 
                arr1 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.Mm:eq(1)").val() || 0, 10); 
                arr2 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.Mm:eq(2)").val() || 0, 10)                         
             } else if(options.op == "MMS"){//cor/A02/subject_02/a10, per/A02/subject/foreign_currency_evaluation_control                   
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.MSm").val() || 0, 10); 
                arr1 += parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.MS").val() || 0, 10); 
                arr2 += arr1 - arr0;                         
             } else if(options.op == "MinES"){//cor/A02/subject_02/government_subsidy                  
                arr0 += Math.min(parseInt(options.my.val() || 0, 10), parseInt(options.par.find("td:eq(5)").children("input").val() || 0, 10));
                arr1 += arr0;  
                arr2 += parseInt(options.par.find("input.S").val() || 0, 10) - arr1;                          
             } else if(options.op == "AarrES"){//cor/A02/subject_02/government_subsidy  
                var inp = options.par.find("input.AarrES");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 });              
                arr1 += arr0; 
                arr2 += parseInt(options.par.find("input.S").val() || 0, 10) - arr1;                            
             } else if(options.op == "DMSarr"){//cor/base/revenue/revenue_amount_control                  
                arr0 += parseInt(options.my.val() || 0, 10)/ parseFloat(options.par.find("input.DdMSarr").val() || 1, 10);
                arr1 = arr0 * parseInt(options.par.find("input.MSarr").val() || 0, 10);  
                var inp = options.par.find("input.Smarr");
                 $(inp).each(function( index ) {
                     arr2 += parseInt($(this).val() || 0, 10);
                 }); 
                arr2 = arr1 - arr2;                          
             } else if(options.op == "DdMSarr"){//cor/base/revenue/revenue_amount_control                  
                arr0 += parseInt(options.par.find("input.DMSarr").val() || 1, 10)/parseInt(options.my.val() || 1, 10);
                arr1 = arr0 * parseInt(options.par.find("input.MSarr").val() || 0, 10);  
                var inp = options.par.find("input.Smarr");
                $(inp).each(function( index ) {
                     arr2 += parseInt($(this).val() || 0, 10);
                }); 
                arr2 = arr1- arr2;                          
             } else if(options.op == "MDA"){//stk/A02/sales_trade/outputorder                
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.MDA").val() || 0, 10);
                arr1 = arr0 * 0.1;  
                arr2 = arr0 + arr1;                          
             } else if(options.op == "AarrSmSarr"){//pay/A04/tax_report/yearend_performance                
                 var inp = options.par.find("input.AarrSmSarr");
                 $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr1 = parseInt(options.par.find("input.SSarr").val() || 0, 10) - arr0;
                 var inp2 = options.par.find("input.Smarr");
                 $(inp2).each(function( index ) {
                     arr2 += parseInt($(this).val() || 0, 10);
                 }); 
                 arr2 = arr1 - arr2;
             } else{                  
                                             
             }
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 
             options.par.find("input:eq(" + ind2 + ")").val(arr1); 
             options.par.find("input:eq(" + ind3 + ")").val(arr2);  

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")");
             var suminp2 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind3 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");  
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")"); 
             var sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")"); 
             var sumsum2 = options.par.parent().children(".nodel").find("input:eq(" + ind8 + ")"); 

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 

             $(suminp2).each(function( index ) {
                t3 += parseInt($(this).val() || 0, 10);
             }); 
             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);  
             sumsum2.val(t3);                                                                                                                                 
           } else if(options.dividend == "T_30_001_a"){//T_30_001_a  
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7];
             var ind8 = options.ind.split("_")[8];          
             if(options.op == "AarrSnMinS"){//cor/connection/report/combination_asset_loss_control                 
                arr0 += parseInt(options.my.val() || 0, 10)
                     + parseInt(options.my.parent().siblings().find("input.AarrSnMinS").val() || 0, 10)
                     - parseInt(options.par.find("input.AarrSmnMinS").val() || 0, 10); 
                arr1 = Math.min(arr0, parseInt(options.par.find("input.MinS").val() || 0, 10)); 
                if(arr0 - arr1 > 0){
                   arr2 += arr0 - arr1;  
                }                                       
             } else if(options.op == "AarrSmnMinS"){//cor/connection/report/combination_asset_loss_control  
                var inp = options.par.find("input.AarrSnMinS");
                $(inp).each(function( index ) {
                     arr0 += parseInt($(this).val() || 0, 10);
                });               
                arr0 -= parseInt(options.my.val() || 0, 10);
                arr1 += Math.min(arr0, parseInt(options.par.find("input.MinS").val() || 0, 10)); 
                if(arr0 - arr1 > 0){
                   arr2 += arr0 - arr1;  
                }                                       
             } else{                  
                                             
             }
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 
             options.par.find("input:eq(" + ind2 + ")").val(arr1); 
             options.par.find("input:eq(" + ind3 + ")").val(arr2); 

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")");
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")");
             var suminp2 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind3 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");  
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")"); 
             var sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")");   
             var sumsum2 = options.par.parent().children(".nodel").find("input:eq(" + ind8 + ")");            
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
                                     
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             }); 
                                         
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 
                                        
             $(suminp2).each(function( index ) {
                t3 += parseInt($(this).val() || 0, 10);
             }); 
              
             thissum.val(t0);
             sumsum.val(t1); 
             sumsum1.val(t2);              
             sumsum2.val(t3);                                                                                                                                
           } else if(options.dividend == "T_30_001_b"){//비율계산오류---수정필요  
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];  
             var ind7 = options.ind.split("_")[7];
             var ind8 = options.ind.split("_")[8];      
             if(options.op == "DAarrSmarrnDnAarr"){//cor/connection/report/connection_reception_control_02  
                arr1 = parseInt(options.my.val() || 0, 10);                 
                var inp = options.par.find("input.AAarrSmarrnDnAarr");
                $(inp).each(function( index ) {
                     arr1 += parseInt($(this).val() || 0, 10);
                });
                var inp2 = options.par.find("input.AAarrSmarrnDnAarr2");
                $(inp2).each(function( index ) {
                     arr1 -= parseInt($(this).val() || 0, 10);
                 });                        
             } else {
                
             }

             options.par.find("input:eq(" + ind2 + ")").val(arr1); 

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")");

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")");  
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")");               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });                            
             thissum.val(t0); 

             arr0 = parseInt(options.my.val() || 0, 10)/t0 * 100;
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });                            
             sumsum.val(t1);  

             arr2 = arr1/sumsum.val() * 100;
             options.par.find("input:eq(" + ind3 + ")").val(arr2);                             
          } else if(options.dividend == "T_40_001"){//T_40_001  
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7]; 
             var ind8 = options.ind.split("_")[8]; 
             var ind9 = options.ind.split("_")[9];  
             var ind10 = options.ind.split("_")[10];      
             if(options.op == "ASSE"){//cor/A05/report_attachment/capital_control_02                
                arr0 = parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.ASSE").val() || 0, 10); 
                arr1 = arr0 - parseInt(options.par.find("input.SmarrSEZ").val() || 0, 10); 
                arr2 = arr1 - parseInt(options.par.find("input.Sm").val() || 0, 10);
                arr3 = arr2 - parseInt(options.par.find("input:eq(11)").val() || 0, 10);                           
             } else if(options.op == "AMinES"){//cor/A02/subject_02/government_subsidy                   
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AMinES").val() || 0, 10);                 
                arr1 += Math.min(arr3, parseInt(options.par.find("input.MinES").val() || 0, 10));
                arr2 += arr1;  
                arr3 += parseInt(options.par.find("input.S").val() || 0, 10) - arr2;                        
             } else if(options.op == "S2nMinES"){//cor/A02/subject_02/government_subsidy               
                arr0 += parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.Sm2nMinES").val() || 0, 10);
                arr1 += Math.min(arr0, (parseInt(options.par.find("td:eq(7)").children("input").val() || 0, 10)
                     - parseInt(options.par.find("td:eq(1)").children("input").val() || 0, 10)));
                arr2 += arr1;  
                arr3 += parseInt(options.par.find("input.S").val() || 0, 10) - arr2;  
             } else if(options.op == "Sm2nMinES"){//cor/A02/subject_02/government_subsidy                
                arr0 += parseInt(options.par.find("input.S2nMinES").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                arr1 += Math.min(arr0, (parseInt(options.par.find("td:eq(7)").children("input").val() || 0, 10)
                     - parseInt(options.par.find("td:eq(1)").children("input").val() || 0, 10)));
                arr2 += arr1;  
                arr3 += parseInt(options.par.find("input.S").val() || 0, 10) - arr2;
             } else if(options.op == "AMinES_02"){//cor/A02/subject_02/government_subsidy  
                arr0 += parseInt(options.my.val() || 0, 10) + parseInt(options.my.parent().siblings().find("input.AMinES_02").val() || 0, 10);                 
                arr1 += Math.min(arr0 - parseInt(options.par.find("td:eq(1)").children("input").val() || 0, 10), parseInt(options.par.find("td:eq(2)").children("input").val() || 0, 10));
                arr2 += arr1;  
                arr3 += parseInt(options.par.find("input.S").val() || 0, 10) - arr2;                            
             } else{                  
                                             
             }
 
             options.par.find("input:eq(" + ind1 + ")").val(arr0); 
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  
             options.par.find("input:eq(" + ind3 + ")").val(arr2); 
             options.par.find("input:eq(" + ind4 + ")").val(arr3);   

             thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")"); 
             suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")"); 
             suminp2 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind3 + ")"); 
             suminp3 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind4 + ")"); 
             thissum = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")");  
             sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")"); 
             sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind8 + ")"); 
             sumsum2 = options.par.parent().children(".nodel").find("input:eq(" + ind9 + ")"); 
             sumsum3 = options.par.parent().children(".nodel").find("input:eq(" + ind10 + ")"); 

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 

             $(suminp2).each(function( index ) {
                t3 += parseInt($(this).val() || 0, 10);
             }); 
             $(suminp3).each(function( index ) {
                t4 += parseInt($(this).val() || 0, 10);
             });
             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);  
             sumsum2.val(t3);  
             sumsum3.val(t4);                                                                                                                                
           } else if(options.dividend == "T_21_001_a"){//T_21_001_a            
             if(options.op == "ASmarrnASmarrnAA"){//cor/A03/deduction/deduction_addition_sub_03
                arr0 = parseInt(options.par.find("input.Sarr").val() || 0, 10);
                $(options.par.find("input.ASmarrnASmarrnAA")).each(function( index ) {
                   arr0 -= parseInt($(this).val() || 0, 10);
                });
                $(options.par.find("input.EAarrSarrnASmarrnAA")).each(function( index ) {
                   arr1 += parseInt($(this).val() || 0, 10);
                });
                $(options.par.find("input.AASmarrnAA")).each(function( index ) {
                   arr1 -= parseInt($(this).val() || 0, 10);
                });
             } else {
                
             }
             
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7];
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")"); 

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")"); 
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")");
             var sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")");     

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 

             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);   

             var thisinpa = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind5 + ")");  
             var suminpa  = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind6 + ")"); 
             var suminpa1 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind7 + ")");          

             var thissuma = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")");  
             var sumsuma  = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");
             var sumsuma1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");

             var t01 = 0, t11 = 0, t21 = 0;

             $(thisinpa).each(function( index ) {
                t01 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminpa).each(function( index ) {
                t11 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminpa1).each(function( index ) {
                t21 += parseInt($(this).val() || 0, 10);
             }); 
 
             thissuma.val(t01); 
             sumsuma.val(t11);        
             sumsuma1.val(t21);             
          } else if(options.dividend == "T_21_001_b"){//T_21_001_b                         
             if(options.op == "MS"){//cor/connection/report/connection_share_control_01                                      
                arr0 += parseInt(options.my.val() || 0, 10) * parseInt(options.my.parent().siblings().find("input.MS").val() || 0, 10)/100; 
                arr1 += arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);                  
             } else if(options.op == "SmarrSm"){ 
                var inp = options.par.find("input.SmarrSm");
                $(inp).each(function( index ) {
                     arr1 += parseInt($(this).val() || 0, 10);
                 });                                   
                arr0 += parseInt(options.par.find("input.S").val() || 0, 10) - arr1;                  
             } else if(options.op == "DMnSAarrAarr"){//cor/connection/report/connection_bad_debt_appropriation_control  
                arr0 = parseInt(options.my.val() || 0, 10)/parseInt(options.par.parent().children(".nodel").find("input:eq(1)").val() || 1, 10) * parseInt(options.par.parent().children(".nodel").find("input:eq(2)").val() || 0, 10);                                  
                arr1 = parseInt(options.my.val() || 0, 10) - arr0;                 
             } else {
                
             }
             
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7];
             var ind8 = options.ind.split("_")[8];
             var ind9 = options.ind.split("_")[9]; 
             var ind10 = options.ind.split("_")[10];
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")"); 

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind5 + ")"); 
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")");
             var sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")");     

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 

             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);   

             var thisinpa = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind5 + ")");  
             var suminpa  = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind6 + ")"); 
             var suminpa1 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind7 + ")");          

             var thissuma = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind8 + ")");  
             var sumsuma  = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind9 + ")");
             var sumsuma1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind10 + ")");

             var t01 = 0, t11 = 0, t21 = 0;

             $(thisinpa).each(function( index ) {
                t01 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminpa).each(function( index ) {
                t11 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminpa1).each(function( index ) {
                t21 += parseInt($(this).val() || 0, 10);
             }); 
 
             thissuma.val(t01); 
             sumsuma.val(t11);        
             sumsuma1.val(t21);             
          } else if(options.dividend == "T_21_303"){
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];  
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7]; 
             var ind8 = options.ind.split("_")[8];   
             if(options.op == "SDA"){//vat/A01/report01/a03
                 arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmDA").val() || 0, 10);
                 arr1 = arr0/parseInt(options.my.val() || 0, 10) * 100;
             } else if(options.op == "SmDA"){//vat/A01/report01/a03
                 arr0 = parseInt(options.par.find("input.SDA").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 arr1 = arr0/parseInt(options.par.find("input.SDA").val() || 1, 10) * 100;
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  

             var thisinp = options.par.parent().children(":lt(" + ind3 + ")").find("input:eq(" + ind0 + ")");    
             var suminp  = options.par.parent().children(":lt(" + ind3 + ")").find("input:eq(" + ind1 + ")"); 
             var suminp1 = options.par.parent().children(":lt(" + ind3 + ")").find("input:eq(" + ind2 + ")"); 
           
             var thissum = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");
             var sumsum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");   

             var thissuma = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")");
             var sumsuma  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");            
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });

             if(options.op == "SDA"){
                t2 = t1/t0*100;
             } else {
                t2 = t1/parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(0)").val() || 1, 10)*100;
             }

             thissum.val(t0);          
             sumsum.val(t1);
             sumsum1.val(t2);

             t3 = t0 + parseInt(options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10);
             t4 = t1 + parseInt(options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind6 + ")").val() || 0, 10);
             t5 = t4/t3*100;

             if(options.op == "SDA"){
                t5 = t4/t3*100;
             } else {
                t5 = t4/parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(0)").val() || 1, 10)*100;
             }

             thissuma.val(t3);          
             sumsuma.val(t4);
             sumsuma1.val(t5);
           } else if(options.dividend == "T_21_503"){
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];  
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];
             var ind4 = options.ind.split("_")[4];  
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7]; 
             var ind8 = options.ind.split("_")[8];  
             var ind9 = options.ind.split("_")[9];  
             if(options.op == "SDA"){//vat/A01/report01/a03
                 arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmDA").val() || 0, 10);
                 arr1 = arr0/parseInt(options.my.val() || 0, 10) * 100;
             } else if(options.op == "SmDA"){//vat/A01/report01/a03
                 arr0 = parseInt(options.par.find("input.SDA").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 arr1 = arr0/parseInt(options.par.find("input.SDA").val() || 1, 10) * 100;
             } else {
                 
             }  
        
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  

             var thisinp = options.par.parent().children(":lt(" + ind3 + "):gt(" + ind9 + ")").find("input:eq(" + ind0 + ")");    
             var suminp  = options.par.parent().children(":lt(" + ind3 + "):gt(" + ind9 + ")").find("input:eq(" + ind1 + ")"); 
             var suminp1 = options.par.parent().children(":lt(" + ind3 + "):gt(" + ind9 + ")").find("input:eq(" + ind2 + ")"); 
           
             var thissum = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");
             var sumsum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");
             var sumsum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");   

             var thissuma = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind5 + ")");
             var sumsuma  = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind6 + ")");
             var sumsuma1 = options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(" + ind7 + ")");            
               
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });                   
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });

             if(options.op == "SDA"){
                t2 = t1/t0*100;
             } else {
                t2 = t1/parseInt(options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(0)").val() || 1, 10)*100;
             }

             thissum.val(t0);          
             sumsum.val(t1);
             sumsum1.val(t2);

             t3 = t0 + parseInt(options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind5 + ")").val() || 0, 10);
             t4 = t1 + parseInt(options.par.parent().children(":eq(" + ind8 + ")").find("input:eq(" + ind6 + ")").val() || 0, 10);
             t5 = t4/t3*100;

             if(options.op == "SDA"){
                t5 = t4/t3*100;
             } else {
                t5 = t4/parseInt(options.par.parent().children(":eq(" + ind4 + ")").find("input:eq(0)").val() || 1, 10)*100;
             }

             thissuma.val(t3);          
             sumsuma.val(t4);
             sumsuma1.val(t5);
           } else if(options.dividend == "T_31_001_a"){//T_31_001_a            
             if(options.op == "AarrSarrnASmarrnAA"){//cor/A03/deduction/deduction_addition_sub_03
                $(options.par.find("input.AarrSarrnASmarrnAA")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                 });
                 arr1 += arr0;
                 $(options.par.find("input.ASmarrnASmarrnAA")).each(function( index ) {
                   arr1 -= parseInt($(this).val() || 0, 10);
                 });
                 $(options.par.find("input.EAarrSarrnASmarrnAA")).each(function( index ) {
                   arr2 += parseInt($(this).val() || 0, 10);
                 });
                 arr2 = arr2 - arr1 - parseInt(options.par.find("input.ASmarrnASmarrnAA").val() || 0, 10);
             } else {
                
             }
             
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7];
             var ind8 = options.ind.split("_")[8]; 
             var ind9 = options.ind.split("_")[9];
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1); 
             options.par.find("input:eq(" + ind3 + ")").val(arr2); 

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")"); 
             var suminp2 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind3 + ")"); 

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind6 + ")"); 
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")");
             var sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind8 + ")");  
             var sumsum2 = options.par.parent().children(".nodel").find("input:eq(" + ind9 + ")");     

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 

             $(suminp2).each(function( index ) {
                t3 += parseInt($(this).val() || 0, 10);
             }); 

             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);  
             sumsum2.val(t3);  

             var thisinpa = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind6 + ")");  
             var suminpa  = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind7 + ")"); 
             var suminpa1 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind8 + ")");  
             var suminpa2 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind9 + ")");        

             var thissuma = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind6 + ")");  
             var sumsuma  = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind7 + ")");
             var sumsuma1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind8 + ")"); 
             var sumsuma2 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind5 + ")").find("input:eq(" + ind9 + ")"); 

             var t01 = 0, t11 = 0, t21 = 0, t31 = 0;

             $(thisinpa).each(function( index ) {
                t01 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminpa).each(function( index ) {
                t11 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminpa1).each(function( index ) {
                t21 += parseInt($(this).val() || 0, 10);
             }); 

             $(suminpa2).each(function( index ) {
                t31 += parseInt($(this).val() || 0, 10);
             }); 
             thissuma.val(t01); 
             sumsuma.val(t11);        
             sumsuma1.val(t21);  
             sumsuma2.val(t31); 
          } else if(options.dividend == "T_41_001_a"){//T_41_001_a            
             if(options.op == "EAarrSarrnASmarrnAA"){ //cor/A03/deduction/deduction_addition_sub_03                                 
                 arr0 = parseInt(options.my.val() || 0, 10);                                                                                           
                 $(options.par.find("input.AarrSarrnASmarrnAA")).each(function( index ) {
                   arr1 += parseInt($(this).val() || 0, 10);
                 });
                 arr2 = arr1;
                 $(options.par.find("input.ASmarrnASmarrnAA")).each(function( index ) {
                   arr2 -= parseInt($(this).val() || 0, 10);
                 });
                 arr3 = arr1;
                 $(options.par.find("input.AASmarrnAA")).each(function( index ) {
                   arr2 -= parseInt($(this).val() || 0, 10);
                 });
             } else {
                
             }
             
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6]; 
             var ind7 = options.ind.split("_")[7];
             var ind8 = options.ind.split("_")[8]; 
             var ind9 = options.ind.split("_")[9];
             var ind10 = options.ind.split("_")[10]; 
             var ind11 = options.ind.split("_")[11];
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1); 
             options.par.find("input:eq(" + ind3 + ")").val(arr2); 
             options.par.find("input:eq(" + ind4 + ")").val(arr3); 

             var thisinp = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind0 + ")"); 
             var suminp  = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind1 + ")");
             var suminp1 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind2 + ")"); 
             var suminp2 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind3 + ")");
             var suminp3 = options.par.parent().children(":not(.nodel)").find("input:eq(" + ind4 + ")");  

             var thissum = options.par.parent().children(".nodel").find("input:eq(" + ind7 + ")"); 
             var sumsum  = options.par.parent().children(".nodel").find("input:eq(" + ind8 + ")");
             var sumsum1 = options.par.parent().children(".nodel").find("input:eq(" + ind9 + ")");  
             var sumsum2 = options.par.parent().children(".nodel").find("input:eq(" + ind10 + ")"); 
             var sumsum3 = options.par.parent().children(".nodel").find("input:eq(" + ind11 + ")");          

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 

             $(suminp2).each(function( index ) {
                t3 += parseInt($(this).val() || 0, 10);
             }); 
             $(suminp3).each(function( index ) {
                t4 += parseInt($(this).val() || 0, 10);
             });
             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);  
             sumsum2.val(t3); 
             sumsum3.val(t4);    

             var thisinpa = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind7 + ")");  
             var suminpa  = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind8 + ")"); 
             var suminpa1 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind9 + ")");  
             var suminpa2 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind10 + ")"); 
             var suminpa3 = options.par.parent().parent().parent().parent().parent().find(".nodel").find("input:eq(" + ind11 + ")");       

             var thissuma = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind7 + ")");  
             var sumsuma  = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind8 + ")");
             var sumsuma1 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind9 + ")"); 
             var sumsuma2 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind10 + ")"); 
             var sumsuma3 = options.par.parent().parent().parent().parent().parent().children(":eq(" + ind6 + ")").find("input:eq(" + ind11 + ")");  

             var t01 = 0, t11 = 0, t21 = 0, t31 = 0, t41 = 0;

             $(thisinpa).each(function( index ) {
                t01 += parseInt($(this).val() || 0, 10);
             });          
           
             $(suminpa).each(function( index ) {
                t11 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminpa1).each(function( index ) {
                t21 += parseInt($(this).val() || 0, 10);
             }); 

             $(suminpa2).each(function( index ) {
                t31 += parseInt($(this).val() || 0, 10);
             }); 
             $(suminpa3).each(function( index ) {
                t41 += parseInt($(this).val() || 0, 10);
             });
             thissuma.val(t01); 
             sumsuma.val(t11);        
             sumsuma1.val(t21);  
             sumsuma2.val(t31); 
             sumsuma3.val(t41);    
          } else {

          }
       });
       return this;
     }

     $.fn.calcB=function(options){
        $.defaultOptions = {
            op         : "",
            dividend   : "",
            par        : "",
            my         : "",
            ind        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, arr0 = 0; 
          if(options.dividend == "T_01_629"){//pay/A02/earned_income/salary_insert   
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 

             var thisinp = options.par.parent().children().find("input." + options.op);   
             var thissum = options.par.parent().children(".nodel").prev().find("input:eq(" + ind3 + ")"); 
             var thissum_other = options.par.parent().parent().parent().parent().prev().find("tr.nodel").find("input"); 
             var thissum1 = options.par.parent().children(".nodel").find("input:eq(" + ind3 + ")");   

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             }); 
             thissum.val(t0); 
              
             t1 = parseInt(thissum_other.val() || 0, 10) - t0;  

             thissum1.val(t1);                                                                           
          } else if(options.dividend == "T_12_64a"){//T_12_18a
             var ind0 = options.ind.split("_")[0]; 
             var ind1 = options.ind.split("_")[1];
             var ind2 = options.ind.split("_")[2];
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4];
             var ind5 = options.ind.split("_")[5];
             var ind6 = options.ind.split("_")[6];
             var ind7 = options.ind.split("_")[7];
             if(options.op == "Aarr"){//cor/A06/business_inpartnership/a03-31                
                $(options.par.find("input.Aarr")).each(function( index ) {
                   arr0 += parseInt($(this).val() || 0, 10);
                });                                      
             } else {
                
             } 

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 

             var thisinp = options.par.parent().children().find("input." + options.op + ":eq(" + ind0 + ")");              
             var suminp  = options.par.parent().children(":not(:last)").find("input:eq(" + ind1 + ")");

             var thissum = options.par.parent().children(":last").find("input:eq(" + ind5 + ")");  
             var sumsum  = options.par.parent().children(":last").find("input:eq(" + ind6 + ")");   

             var thisinp1 = options.par.parent().parent().parent().parent().parent().find(".bodynodel").find("tr:eq(" + ind3 + ")").find("input:eq(" + ind7 + ")") 
             var suminp1  = options.par.parent().parent().parent().parent().parent().find(".bodynodel").find("tr:eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");

             //var tr = options.par.parent().parent().parent().parent().parent().find(".bodynodel").children(":not(.nodel)");

             var thissum1 = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").find("tr:eq(" + ind3 + ")").find("input:eq(" + ind7 + ")");  
             var sumsum1  = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").find("tr:eq(" + ind3 + ")").find("input:eq(" + ind1 + ")");   

             var thisinp2 = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").children(":not(:last)").find("input:eq(" + ind7 + ")");  
             var suminp2  = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").children(":not(:last)").find("input:eq(" + ind1 + ")");  

             var thissum2 = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").children(":last").find("input:eq(" + ind5 + ")");  
             var sumsum2  = options.par.parent().parent().parent().parent().parent().children(":last").find("tbody").children(":last").find("input:eq(" + ind6 + ")");            
        
             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });
             thissum.val(t0);                           
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             }); 
             sumsum.val(t1);
             $(thisinp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 
             thissum1.val(t2); 
             $(suminp1).each(function( index ) {
                t3 += parseInt($(this).val() || 0, 10);
             });
             sumsum1.val(t3); 
             $(thisinp2).each(function( index ) {
                t4 += parseInt($(this).val() || 0, 10);
             }); 
             thissum2.val(t4);
             $(suminp2).each(function( index ) {
                t5 += parseInt($(this).val() || 0, 10);
             });                                                                                                                      
             sumsum2.val(t5); 
          } else if(options.dividend == "T_20_653"){//T_20_103
             if(options.op == "SS"){//cor//A02/subject_01/contribution_details, cor/connection/report/connection_contribution_01                                                              
                 arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmS").val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);
                 suminp  = options.par.parent().children().find("input.sum1");
                 suminp1 = options.par.parent().children().find("input.sum");
             } else if(options.op == "SSa"){//cor//A02/subject_01/contribution_details                                                              
                 arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmSa").val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.Sma").val() || 0, 10);
                 suminp  = options.par.parent().children().find("input.suma1");
                 suminp1 = options.par.parent().children().find("input.suma");
             } else if(options.op == "SSb"){//cor//A02/subject_01/contribution_details                                                              
                 arr0 = parseInt(options.my.val() || 0, 10) - parseInt(options.par.find("input.SmSb").val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.Smb").val() || 0, 10);
                 suminp  = options.par.parent().children().find("input.sumb1");
                 suminp1 = options.par.parent().children().find("input.sumb");
             } else if(options.op == "SmS"){                                            
                 arr0 = parseInt(options.par.find("input.SS").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.Sm").val() || 0, 10);
                 suminp  = options.par.parent().children().find("input.sum1");
                 suminp1 = options.par.parent().children().find("input.sum");
             } else if(options.op == "SmSa"){                                            
                 arr0 =  parseInt(options.par.find("input.SSa").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.Sma").val() || 0, 10);
                 suminp  = options.par.parent().children().find("input.suma1");
                 suminp1 = options.par.parent().children().find("input.suma");
             } else if(options.op == "SmSb"){                                            
                 arr0 =  parseInt(options.par.find("input.SSb").val() || 0, 10) - parseInt(options.my.val() || 0, 10);
                 arr1 = arr0 - parseInt(options.par.find("input.Smb").val() || 0, 10);
                 suminp  = options.par.parent().children().find("input.sumb1");
                 suminp1 = options.par.parent().children().find("input.sumb");
             }

             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3]; 
             var ind4 = options.ind.split("_")[4]; 
             var ind5 = options.ind.split("_")[5]; 
             var ind6 = options.ind.split("_")[6];         

             options.par.find("input:eq(" + ind1 + ")").val(arr0); 
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  

             var thisinp = options.par.parent().children().find("input." + options.op);
              
             var thissum = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind4 + ")");  
             var sumsum  = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind5 + ")");
             var sumsum1 = options.par.parent().children(":eq(" + ind3 + ")").find("input:eq(" + ind6 + ")");

             $(thisinp).each(function( index ) {
                t0 += parseInt($(this).val() || 0, 10);
             });          
            
             $(suminp).each(function( index ) {
                t1 += parseInt($(this).val() || 0, 10);
             });          
             
             $(suminp1).each(function( index ) {
                t2 += parseInt($(this).val() || 0, 10);
             }); 
             thissum.val(t0); 
             sumsum.val(t1);        
             sumsum1.val(t2);
          } else {

          }
       });
       return this;
     }

     $.fn.calcT=function(options){
        $.defaultOptions = {
            op         : "",
            dividend   : "",
            par        : "",
            my         : "",
            ind        : ""
        }

        options = $.extend({}, $.defaultOptions, options);

        this.each(function(){
          var t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, arr0 = 0; 
          if(options.dividend == "T_00"){
             var ind0 = options.ind.split("_")[0];       
             if(options.op == "amt"){//acc/A02/trade_insert/revenue
                                 
             } else{                  
                                             
             }                     
              

             var suminp  = options.par.parent().children().find("input:eq(" + ind0 + ")");

             $(suminp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             });  

             sumsum = options.my.parents("div.row").prev().find("input.amount_form"); 

             sumsum.val(t0);        
         } else if(options.dividend == "T_10"){
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1];       
             if(options.op == "qua"){//acc/A02/trade_insert/revenue
                arr0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.up").val() || 0, 10);                                   
             } else if(options.op == "up"){//acc/A02/trade_insert/revenue
                arr0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.qua").val() || 0, 10);                                   
             } else{                  
                                             
             }                     
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);  

             var suminp  = options.par.parent().children().find("input:eq(" + ind1 + ")");   

             $(suminp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             }); 

             sumsum = options.my.parents("div.row").prev().find("input.amount_form"); 

             sumsum.val(t0);        
         } else if(options.dividend == "T_20"){
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2];        
             if(options.op == "amt"){//acc/A02/trade_insert/revenue
                arr0 = Math.round(parseInt(options.my.val() || 0, 10)/10);  
                arr1 = parseInt(options.my.val() || 0, 10) + arr0;                                    
             } else{                  
                                             
             }                     
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);     

             var suminp  = options.par.parent().children().find("input:eq(" + ind0 + ")");
             var suminp1  = options.par.parent().children().find("input:eq(" + ind1 + ")");    

             $(suminp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             }); 
             $(suminp1).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             }); 

             sumsum = options.my.parents("div.row").prev().find("input.amount_form"); 
             sumsum1 = options.my.parents("div.row").prev().find("input.taxamount_form");  

             sumsum.val(t0);        
             sumsum1.val(t1);
         } else if(options.dividend == "T_20_a"){
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];          
             if(options.op == "amt"){//acc/A02/AA03/a01
                var s_val = options.par.find("select option:selected").val();
                if(s_val == "6/106"){
                   arr0 = Math.round(parseInt(options.my.val() || 0, 10)/106*6); 
                } else if(s_val == "3/103"){
                   arr1 = Math.round(parseInt(options.my.val() || 0, 10)/103*3); 
                } else {
                   arr1 = Math.round(parseInt(options.my.val() || 0, 10)/110*10); 
                }
                arr1 = parseInt(options.my.val() || 0, 10) + arr0;                                    
             } else{                  
                                             
             }                     
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  

             var suminp  = options.par.parent().children().find("input:eq(" + ind0 + ")");   
             var suminp1  = options.par.parent().children().find("input:eq(" + ind1 + ")");   

             $(suminp).each(function( index ) {
                 t0 += parseInt($(this).val() || 0, 10);
             }); 
             $(suminp1).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             });
             
             sumsum = options.my.parents("div.row").prev().find("input.amount_form"); 
             sumsum1 = options.my.parents("div.row").prev().find("input.taxamount_form");  

             sumsum.val(t0);        
             sumsum1.val(t1);
         } else if(options.dividend == "T_30"){
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];          
             if(options.op == "qua"){//acc/A02/trade_insert/revenue
                arr0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.up").val() || 0, 10); 
                arr1 = Math.round(arr0/10);  
                arr2 = arr0 + arr1;                                    
             } else if(options.op == "up"){//acc/A02/trade_insert/revenue
                arr0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.qua").val() || 0, 10); 
                arr1 = Math.round(arr0/10);  
                arr2 = arr0 + arr1;                                    
             } else{                  
                                             
             }                     
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  
             options.par.find("input:eq(" + ind3 + ")").val(arr2);    

             var suminp1  = options.par.parent().children().find("input:eq(" + ind1 + ")");   
             var suminp2  = options.par.parent().children().find("input:eq(" + ind2 + ")");   

             $(suminp1).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             }); 
             $(suminp2).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             
             sumsum1 = options.my.parents("div.row").prev().find("input.amount_form"); 
             sumsum2 = options.my.parents("div.row").prev().find("input.taxamount_form");  

             sumsum1.val(t1);        
             sumsum2.val(t2);
         } else if(options.dividend == "T_30_a"){
             var ind0 = options.ind.split("_")[0];
             var ind1 = options.ind.split("_")[1]; 
             var ind2 = options.ind.split("_")[2]; 
             var ind3 = options.ind.split("_")[3];          
             if(options.op == "qua"){//acc/A02/AA03/a01
                arr0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.up").val() || 0, 10); 
                var s_val = options.par.find("select option:selected").val();
                if(s_val == "6/106"){
                   arr1 = Math.round(arr0/106*6); 
                } else if(s_val == "3/103"){
                   arr1 = Math.round(arr0/103*3); 
                } else {
                   arr1 = Math.round(arr0/110*10); 
                }
                arr2 = arr0 + arr1;                                    
             } else if(options.op == "up"){//acc/A02/AA03/a01
                arr0 = parseInt(options.my.val() || 0, 10) * parseInt(options.par.find("input.qua").val() || 0, 10); 
                var s_val = options.par.find("select option:selected").val();
                if(s_val == "6/106"){
                   arr1 = Math.round(arr0/106*6); 
                } else if(s_val == "3/103"){
                   arr1 = Math.round(arr0/103*3); 
                } else {
                   arr1 = Math.round(arr0/110*10); 
                }
                arr2 = arr0 + arr1;                                    
             } else{                  
                                             
             }                     
             
             options.par.find("input:eq(" + ind1 + ")").val(arr0);
             options.par.find("input:eq(" + ind2 + ")").val(arr1);  
             options.par.find("input:eq(" + ind3 + ")").val(arr2);    

             var suminp1  = options.par.parent().children().find("input:eq(" + ind1 + ")");   
             var suminp2  = options.par.parent().children().find("input:eq(" + ind2 + ")");   

             $(suminp1).each(function( index ) {
                 t1 += parseInt($(this).val() || 0, 10);
             }); 
             $(suminp2).each(function( index ) {
                 t2 += parseInt($(this).val() || 0, 10);
             });
             
             sumsum1 = options.my.parents("div.row").prev().find("input.amount_form"); 
             sumsum2 = options.my.parents("div.row").prev().find("input.taxamount_form");  

             sumsum1.val(t1);        
             sumsum2.val(t2);
         } else {

         }
       });
       return this;
     }

     $('input.pop').on("click", function(){
            var $this     = $(this);                         
            var subject   = $this.attr("class").split(" ")[2];
            var $next     = $this.attr("class").split(" ")[3];
            var $pan      = $this.attr("class").split(" ")[4];
            var id2       = "#dialog_" + subject;  
            var url       =  "../../../data/lookup_popup/" + subject + ".txt";  
            var table_pop = $(id2).find('table'); 

            $this.main_popup({id2:id2, ids: $this, url:url, table_pop: table_pop, next: $next, pan:$pan});            
	});

        <!-- 일반입력:거래처, 계정과목 -->
        $('input.pop').on("keydown", function(e){
           if(e.keyCode == 13 || e.which == 13){
            var $this     = $(this);                         
            var subject   = $this.attr("class").split(" ")[2];
            var $next     = $this.attr("class").split(" ")[3];
            var $pan      = $this.attr("class").split(" ")[4];
            var id2       = "#dialog_" + subject;  
            var url       =  "../../../data/lookup_popup/" + subject + ".txt";  
            var table_pop = $(id2).find('table'); 

            $this.main_popup({id2:id2, ids: $this, url:url, table_pop: table_pop, next: $next, pan:$pan}); 
           } 
                               
	});

        <!-- focus 체크 -->
        $('input.foc, select.foc').on("keydown", function(evt){            
            var $this = $(this); 
            var keyID = (evt.which) ? evt.which : evt.keyCode;                          
            var $next = $this.attr("class").split(" ")[3];          
            if (keyID == 13) {
               evt.preventDefault();
               foc($next,$this);
            }                        
	});

        $("select.foc").on("change", function(){
           var $this = $(this); 
           var $next = $this.attr("class").split(" ")[3];
           foc($next,$this);
        });

        $("select.foc.cac").on("change", function(){
           var $this = $(this); 
           var $next = $this.attr("class").split(" ")[2];
           var val = $this.val();
           var $calc = 24000000

           $this.calc({my:$this, calc: $calc, val: val}); 

           foc($next,$this);
        });

        <!-- focus 체크 -->
        $('ul.foc li').on("click", "a", function(evt){
           var $this = $(this);                      
           var $next = $this.parents("ul").attr("class").split(" ")[1];       
           evt.preventDefault();
           $this.parents("ul").prev().html($this.text() + ' <span class="caret"></span>');

           foc($next, $this.parents("ul"));           
        });

        <!-- focus 일반 체크 -->
        $('ul.focilban li').on("click", "a", function(evt){
           var $this = $(this); 
           var $text = $this.text();                     
           var $next = $this.parents("ul").attr("class").split(" ")[1];       
           evt.preventDefault();
        
           if($text == "입금" || $text == "대변"){
              $this.parents("td").siblings().children("input.cor").prop("disabled", true);
              $this.parents("td").siblings().children("input.dor").prop("disabled", false);
           }else{              
              $this.parents("td").siblings().children("input.cor").prop("disabled", false);
              $this.parents("td").siblings().children("input.dor").prop("disabled", true);
           } 
               
           $(this).parent().parent().prev().html($(this).text() + ' <span class="caret"></span>');
           foc($next, $this.parents("ul"));        
        });

        <!-- 계산 --> 
        $("input[class*='cac']").on("keydown", function(evt){
            var $this = $(this); 
            var $next = $this.attr("class").split(" ")[4];
             

            var keyID = (evt.which) ? evt.which : evt.keyCode;                    
            if (keyID == 13) {   
               evt.preventDefault();                                     
               foc($next, $this);
            } 
            
        });
      
        $('table.table').on("keyup", "input.cac", function(evt){            
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();
            var $dividend = $this.attr("class").split(" ")[2];
            var $op = $this.attr("class").split(" ")[3];
            var $par = $this.parent().parent();
            var $ind = $this.attr("class").split(" ")[5];
                       
            $this.calc({my:$this, val: $val, op: $op, dividend:$dividend, par:$par, ind: $ind});
        });

        $('input.cac2').on("keyup", function(evt){            
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $pid = $this.parents("table").attr("id") || $this.parents("table").parents("table").attr("id");

            var $op = $this.attr("class").split(" ")[2];
            var $dividend = $this.attr("class").split(" ")[3];
            var $par = $this.parent().parent();
            $this.calc2({my:$this, val: $val, op: $op, dividend:$dividend, par:$par, pid: $pid});
        });

        $('table.table').on("keyup", "input.cacTot", function(evt){            
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $dividend = $this.attr("class").split(" ")[2];
            var $op       = $this.attr("class").split(" ")[3];
            $ind          = $this.attr("class").split(" ")[5]; 

            var $par = $this.parent().parent();      
            
            if($dividend == "T_01"){               
               $this.calcTot({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
            } else {       
               $this.calcTot({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
            }
        });

        $('table.table').on("keyup", "input.cacN", function(evt){            
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $dividend = $this.attr("class").split(" ")[2];
            var $op       = $this.attr("class").split(" ")[3];
            $ind          = $this.attr("class").split(" ")[5]; 

            var $par = $this.parent().parent();                  
                
            $this.calcN({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
        });

        $('table.table').on("keyup", "input.cacN1", function(evt){            
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $dividend = $this.attr("class").split(" ")[2];
            var $op       = $this.attr("class").split(" ")[3];
            $ind          = $this.attr("class").split(" ")[5]; 

            var $par = $this.parent().parent();                  
                
            $this.calcN1({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
        });

        $('table.table').on("keyup", "input.cacN2", function(evt){            
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $dividend = $this.attr("class").split(" ")[2];
            var $op       = $this.attr("class").split(" ")[3];
            $ind          = $this.attr("class").split(" ")[5]; 

            var $par = $this.parent().parent();                  
                
            $this.calcN2({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
        });

        $('table.table').on("keyup", "input.cacE", function(evt){           
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $dividend = $this.attr("class").split(" ")[2];
            var $op       = $this.attr("class").split(" ")[3];
            $ind          = $this.attr("class").split(" ")[5]; 

            var $par = $this.parent().parent();                  
                
            $this.calcE({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
        });

        $('table.table').on("keyup", "input.cacB", function(evt){           
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $dividend = $this.attr("class").split(" ")[2];
            var $op       = $this.attr("class").split(" ")[3];
            $ind          = $this.attr("class").split(" ")[5]; 

            var $par = $this.parent().parent();                  
                
            $this.calcB({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
        });

        $("input[class*='cacT']").on("keydown", function(evt){
            var $this = $(this); 
            var $cla = $this.attr("class").split(" ")[3];
            var $nextinput;
            var $next;
            var previnput = $this.parent().parent().find("input:eq(1)");
            if(previnput.val() == ""){
               $this.val("");
               previnput.focus();
            }
             
            var keyID = (evt.which) ? evt.which : evt.keyCode;                    
            if (keyID == 13) {   
               evt.preventDefault(); 
               if($cla == "qua"){
                    $nextinput = $this.parent().next().find("input");
                    if($nextinput.val() > 0){
                       $next = "next211";                       
                    } else {
                       $next = $this.attr("class").split(" ")[4];
                    }
                } else if ($cla == "up"){
                    $nextinput = $this.parent().prev().find("input");
                    if($nextinput.val() > 0){
                       $next = "next211";                       
                    } else {
                       $next = $this.attr("class").split(" ")[4]; 
                    }
                } else if ($val == "amt"){
                    if($this.val() > 0){
                       $next = "next211";                       
                    } else {

                    }  
                }                                               
            } 
            foc($next, $this);            
        });
        
        $('table.table').on("keyup", "input.cacT", function(evt){          
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,""));    
            if( $this.val() == 0){
               $this.val("");
            } 
            var $val = ($this.val() == "") ? 0 : $this.val();

            var $dividend = $this.attr("class").split(" ")[2];
            var $op       = $this.attr("class").split(" ")[3];
            $ind          = $this.attr("class").split(" ")[5];             

            var $par = $this.parent().parent(); 

            if($op == "amt"){
               $par.find("input.qua").val("");
               $par.find("input.up").val("");
            }                 
                
            $this.calcT({dividend:$dividend, op: $op, par: $par, my: $this, ind:$ind});
        });
        
        function foc($next,$this){
           if($next == "next102"){
               $this.next().next().focus();
           }else if($next == "next110"){
               $this.parent().next().find("input:eq(0)").focus();
           }else if($next == "next111"){
               $this.parent().next().find("input:eq(1)").focus();
           }else if($next == "next112"){
               $this.parent().next().find("input:eq(2)").focus();
           }else if($next == "next114"){
               $this.parent().next().find("input:eq(4)").focus();
           }else if($next == "next115"){
               $this.parent().next().find("input:eq(5)").focus();
           }else if($next == "next118"){
               $this.parent().next().find("input:eq(8)").focus();
           }else if($next == "next110a"){
               $this.parent().next().find("a:eq(0)").focus();
           }else if($next == "next110b"){
               $this.parent().next().find("button:eq(0)").focus();
           }else if($next == "next110s"){
               $this.parent().next().find("select:eq(0)").focus();
           }else if($next == "next1p10"){
               $this.parent().prev().find("input:eq(0)").focus();
           }else if($next == "next120"){
               $this.parent().next().next().find("input:eq(0)").focus();
           }else if($next == "next120a"){
               $this.parent().next().next().find("a:eq(0)").focus();
           }else if($next == "next120b"){
               $this.parent().next().next().find("button").focus();
           }else if($next == "next130"){
               $this.parent().next().next().next().find("input:eq(0)").focus();
           }else if($next == "next130s"){
               $this.parent().next().next().next().find("select:eq(0)").focus();
           }else if($next == "next140"){
               $this.parent().next().next().next().next().find("input:eq(0)").focus();
           }else if($next == "next150"){
               $this.parent().next().next().next().next().next().find("input:eq(0)").focus();
           }else if($next == "next210"){
               $this.parent().parent().next().find("input:eq(0)").focus();
           }else if($next == "next210a"){
               $this.parent().parent().next().find("a:eq(0)").focus();
           }else if($next == "next210b"){
               $this.parent().parent().next().find("button:eq(0)").focus();
           }else if($next == "next220b"){
               $this.parent().parent().next().next().find("button:eq(0)").focus();
           }else if($next == "next211"){
               $this.parent().parent().next().find("input:eq(1)").focus();
           }else if($next == "next212"){
               $this.parent().parent().next().find("td:eq(2)").find("input").focus();
           }else if($next == "next212a"){
               $this.parent().parent().next().find("td:eq(1)").find("a:eq(0)").focus();
           }else if($next == "next213"){
               $this.parent().parent().next().find("td:eq(2)").find("input").focus();
           }else if($next == "next213b"){
               $this.parent().parent().next().find("td:eq(2)").find("button:eq(0)").focus();
           }else if($next == "next214"){
               $this.parent().parent().next().find("td:eq(3)").find("input").focus();
           }else if($next == "next214i"){
               $this.parent().parent().next().find("input:eq(3)").focus();
           }else if($next == "next215"){
               $this.parent().parent().next().find("td:eq(4)").find("input").focus();
           }else if($next == "next216"){
               $this.parent().parent().next().find("td:eq(5)").find("input").focus();
           }else if($next == "next217"){
               $this.parent().parent().next().find("td:eq(6)").find("input").focus();
           }else if($next == "next218"){
               $this.parent().parent().next().find("td:eq(7)").find("input").focus();
           }else if($next == "next219"){
               $this.parent().parent().next().find("td:eq(8)").find("input").focus();
           }else if($next == "next2110"){
               $this.parent().parent().next().find("td:eq(9)").find("input").focus();
           }else if($next == "next211a"){
               $this.parent().parent().next().find("a:eq(0)").focus();
           }else if($next == "next220"){
               $this.parent().parent().next().next().find("input:eq(0)").focus();
           }else if($next == "next220a"){
               $this.parent().parent().next().next().find("a:eq(0)").focus();
           }else if($next == "next220s"){
               $this.parent().parent().next().next().find("select:eq(0)").focus();
           }else if($next == "next221"){
               $this.parent().parent().next().next().find("input:eq(1)").focus();
           }else if($next == "next2p10"){
               $this.parent().parent().prev().find("input:eq(0)").focus();
           }else if($next == "next2p11"){
               $this.parent().parent().prev().find("input:eq(1)").focus();
           }else if($next == "next2p16"){
               $this.parent().parent().prev().find("td:eq(5)").find("input").focus();
           }else if($next == "next2p17"){
               $this.parent().parent().prev().find("td:eq(6)").find("input").focus();
           }else if($next == "next2p24"){
               $this.parent().parent().prev().prev().find("td:eq(3)").find("input").focus();
           }else if($next == "next2p34"){
               $this.parent().parent().prev().prev().prev().find("td:eq(3)").find("input").focus();
           }else if($next == "next2p66"){
               $this.parent().parent().prev().prev().prev().prev().prev().prev().find("td:eq(5)").find("input").focus();
           }else if($next == "next224"){
               $this.parent().parent().next().next().find("td:eq(3)").find("input").focus();
           }else if($next == "next230"){
               $this.parent().parent().next().next().next().find("input:eq(0)").focus();
           }else if($next == "next231"){
               $this.parent().parent().next().next().next().find("input:eq(1)").focus();
           }else if($next == "next240"){
               $this.parent().parent().next().next().next().next().find("input:eq(0)").focus();
           }else if($next == "next310"){
               $this.parent().parent().parent().next().find("input:eq(0)").focus();
           }else if($next == "next310a"){
               $this.parent().parent().parent().next().find("a:eq(0)").focus();
           }else if($next == "next310b"){
               $this.parent().parent().parent().next().find("button:eq(0)").focus();
           }else if($next == "next312"){
               $this.parent().parent().parent().next().find("input:eq(2)").focus();
           }else if($next == "next311"){
               $this.parent().parent().parent().next().find("input:eq(1)").focus();
           }else if($next == "next320"){
               $this.parent().parent().parent().next().next().find("input:eq(0)").focus();
           }else if($next == "next320b"){
               $this.parent().parent().parent().next().next().find("button:eq(0)").focus();
           }else if($next == "next410"){
               $this.parent().parent().parent().parent().next().find("input:eq(0)").focus();
           }else if($next == "next414"){
               $this.parent().parent().parent().parent().next().find("input:eq(4)").focus();
           }else if($next == "next410b"){
               $this.parent().parent().parent().parent().next().find("button:eq(0)").focus();
           }else if($next == "next420"){
               $this.parent().parent().parent().parent().next().next().find("input:eq(0)").focus();
           }else if($next == "next421"){
               $this.parent().parent().parent().parent().next().next().find("input:eq(1)").focus();
           }else if($next == "next510"){
               $this.parent().parent().parent().parent().parent().next().find("input:eq(0)").focus();
           }else if($next == "next511"){
               $this.parent().parent().parent().parent().parent().next().find("input").focus();
           }else if($next == "next518"){
               $this.parent().parent().parent().parent().parent().next().find("input:eq(8)").focus();
           }else if($next == "next520"){
               $this.parent().parent().parent().parent().parent().next().next().find("input:eq(0)").focus();
           }else if($next == "next530"){
               $this.parent().parent().parent().parent().parent().next().next().next().find("input:eq(0)").focus();
           }else if($next == "next610"){
               $this.parent().parent().parent().parent().parent().parent().next().find("input:eq(0)").focus();
           }else if($next == "next611"){
               $this.parent().parent().parent().parent().parent().parent().next().find("input:eq(1)").focus();
           }else if($next == "next620"){
               $this.parent().parent().parent().parent().parent().parent().next().next().find("input:eq(0)").focus();
           }else if($next == "next630"){
               $this.parent().parent().parent().parent().parent().parent().next().next().next().find("input:eq(0)").focus();
           }else if($next == "next710"){
               $this.parent().parent().parent().parent().parent().parent().parent().next().find("input:eq(0)").focus();
           }else if($next == "next710a"){
               $this.parent().parent().parent().parent().parent().parent().parent().next().find("a:eq(0)").focus();
           }else if($next == "next820"){
               $this.parent().parent().parent().parent().parent().parent().parent().parent().next().next().find("input:eq(0)").focus();
           }else if($next == "next2p112"){
               $this.parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("td:eq(2)").find("input").focus();
           }else if($next == "next2p113"){
               $this.parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("td:eq(3)").find("input").focus();
           }else if($next == "next2p114"){
               $this.parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("td:eq(4)").find("input").focus();
           }else if($next == "next2p115"){
               $this.parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("td:eq(5)").find("input").focus();
           }else if($next == "next2p116"){
               $this.parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("td:eq(6)").find("input").focus();
           }else if($next == "next2p117"){
               $this.parent().parent().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().find("td:eq(7)").find("input").focus();
           }
        }

        

        
        <!-- 계산 -->
        $('input.cactax').on("keydown", function(evt){
            var $this = $(this); 
            var $next;
            var previnput = $this.parent().parent().children(":eq(1)").find("input");
            if(previnput.val() == ""){
               $this.val("");
               previnput.focus();
            }            
            var keyID = (evt.which) ? evt.which : evt.keyCode; 
            var $val = $this.attr("class").split(" ")[2];
            var $nextinput;
            if (keyID == 13) {   
                evt.preventDefault();  
                
                if($val == "q"){
                    $nextinput = $this.parent().next().find("input");
                    if($nextinput.val() > 0){
                       $next = "next211";                       
                    }else{
                       $next = "next110"; 
                    }
                } else if ($val == "u"){
                    $nextinput = $this.parent().prev().find("input");
                    if($nextinput.val() > 0){
                       $next = "next211";                       
                    }else{
                       $next = "next1p10"; 
                    }
                } else if ($val == "amount"){
                    if($this.val() > 0){
                       $next = "next211";                       
                    }else{

                    }
                }                     
            }
            foc($next, $this);
            
        });  

        $('input.cactax').on("keyup", function(evt){           
            var $this = $(this);  
            $this.val($this.val().replace(/[^0-9]/g,"")); 
            if( $this.val() == 0){
               $this.val("");
            } 

            var pid = $this.parents("table").attr("id");                                  
            var $val = $this.attr("class").split(" ")[2]; 
            var $nextinput; 
            var amount;                    
            var taxamount; 
            var sumamount;  
          if(pid == "tax1" || pid == "card"){         
            if($val == "q"){
                $nextinput = $this.parent().next().find("input");
                if($nextinput.val() > 0){                    
                    amount = $this.parent().next().next().find("input");                    
                    taxamount = $this.parent().next().next().next().find("input"); 
                    sumamount = $this.parent().next().next().next().next().find("input");                   
                    amount.val($this.val() * $nextinput.val())
                    taxamount.val(Math.round(amount.val()/10));
                    sumamount.val(parseInt(amount.val(),10) + parseInt(taxamount.val(),10)); 
                    sum = sumSizes(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum[0]); 
                    $this.parents("div.row").prev().find("input.taxamount_form").val(sum[1]); 
                }else{                                                                                

                }
            } else if ($val == "u"){
                $nextinput = $this.parent().prev().find("input");
                if($nextinput.val() > 0){
                    amount = $this.parent().next().find("input");                    
                    taxamount = $this.parent().next().next().find("input"); 
                    sumamount = $this.parent().next().next().next().find("input");                   
                    amount.val($this.val() * $nextinput.val())
                    taxamount.val(Math.round(amount.val()/10));
                    sumamount.val(parseInt(amount.val(),10) + parseInt(taxamount.val(),10)); 
                    sum = sumSizes(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum[0]); 
                    $this.parents("div.row").prev().find("input.taxamount_form").val(sum[1]); 
                }else{                                                                                
 
                }
            } else if ($val == "amount"){
                if($this.val() > 0){                   
                    taxamount = $this.parent().next().find("input"); 
                    sumamount = $this.parent().next().next().find("input");                   
                    taxamount.val(Math.round($this.val()/10));
                    sumamount.val(parseInt($this.val(),10) + parseInt(taxamount.val(),10)); 
                    sum = sumSizes(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum[0]); 
                    $this.parents("div.row").prev().find("input.taxamount_form").val(sum[1]); 
                }else{                                                                                

                }
            } 
          } else if(pid == "tax2"){
            if($val == "q"){
                $nextinput = $this.parent().next().find("input");
                if($nextinput.val() > 0){                    
                    amount = $this.parent().next().next().find("input");                                    
                    amount.val($this.val() * $nextinput.val())
                    sum = sumSizes2(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum); 
                }else{                                                                                

                }
            } else if ($val == "u"){
                $nextinput = $this.parent().prev().find("input");
                if($nextinput.val() > 0){
                    amount = $this.parent().next().find("input");                                     
                    amount.val($this.val() * $nextinput.val())
                    sum = sumSizes2(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum); 
                }else{                                                                                
 
                }
            } else if ($val == "amount"){
                if($this.val() > 0){                   
                    sum = sumSizes2(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum); 
                }else{                                                                                

                }
            } 
          } else if(pid == "sales" || pid == "g-assest"){
            if($this.parents("div.row").prev().find("ul.dropdown-menu.kind li.selected a").text() == "면세" || $this.parents("div.row").prev().find("ul.dropdown-menu.kind li.selected a").text() == "영세"){
              if($val == "q"){
                $nextinput = $this.parent().next().find("input");
                if($nextinput.val() > 0){                    
                    amount = $this.parent().next().next().find("input");                                   
                    amount.val($this.val() * $nextinput.val())
                    sum = sumSizes_notax(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum);
                }else{                                                                                

                }
              } else if ($val == "u"){
                $nextinput = $this.parent().prev().find("input");
                if($nextinput.val() > 0){
                    amount = $this.parent().next().find("input");                                 
                    amount.val($this.val() * $nextinput.val())
                    sum = sumSizes_notax(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum);
                }else{                                                                                
 
                }
              } else if ($val == "amount"){
                if($this.val() > 0){                   
                    sum = sumSizes_notax(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum);
                }else{                                                                                

                }
              } 
            } else {
              if($val == "q"){
                $nextinput = $this.parent().next().find("input");
                if($nextinput.val() > 0){                    
                    amount = $this.parent().next().next().find("input");                    
                    taxamount = $this.parent().next().next().next().find("input");                  
                    amount.val($this.val() * $nextinput.val())
                    taxamount.val(Math.round(amount.val()/10));
                    sum = sumSizes(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum[0]); 
                    $this.parents("div.row").prev().find("input.taxamount_form").val(sum[1]); 
                }else{                                                                                

                }
              } else if ($val == "u"){
                $nextinput = $this.parent().prev().find("input");
                if($nextinput.val() > 0){
                    amount = $this.parent().next().find("input");                    
                    taxamount = $this.parent().next().next().find("input");              
                    amount.val($this.val() * $nextinput.val())
                    taxamount.val(Math.round(amount.val()/10));
                    sum = sumSizes(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum[0]); 
                    $this.parents("div.row").prev().find("input.taxamount_form").val(sum[1]); 
                }else{                                                                                
 
                }
              } else if ($val == "amount"){
                if($this.val() > 0){                   
                    taxamount = $this.parent().next().find("input");                
                    taxamount.val(Math.round($this.val()/10));
                    sum = sumSizes(pid);
                    $this.parents("div.row").prev().find("input.amount_form").val(sum[0]); 
                    $this.parents("div.row").prev().find("input.taxamount_form").val(sum[1]); 
                }else{                                                                                

                }
              } 
                  
            }
            var sum2 = sumSizes3(pid);
            $this.parents(".table").next().find("input").each(function(i){
               $this.parents(".table").next().find("input").eq(i).val(sum2[i]);
            });  
          }                                                                                
	});

       

        $("table.table input.plus").on("click", function(e) {
           var $this = $(this);
           var $tableBody = $this.parent().parent().parent();
           $trLast = $tableBody.children("tr:last");
         
           $trNew = $trLast.clone(true);
           $trNew.find(":input").val(""); 
           $trLast.after($trNew);                         
        });

        $("table.table input.plusdate").on("click", function(e) {
           var $this = $(this);
           var $tableBody = $this.parents("tbody");
           $trLast = $tableBody.find("tr:last");         
           $trNew = $trLast.clone(true);
           $trNew.find(":input").val(""); 
           $trNew.find("input.datepicker").attr("id", "").removeClass('hasDatepicker').removeData('datepicker').unbind().datepicker();
           $trLast.after($trNew);                        
        }); 

        $("table.table input.plusdate2").on("click", function(e) {
           var $this = $(this);
           var $tableBody = $this.parents("tbody");
           $trLast = $tableBody.find("tr.nodel").prev();       
           $trNew = $trLast.clone(true);
           $trNew.find(":input").val(""); 
           $trNew.find("input.datepicker").attr("id", "").removeClass('hasDatepicker').removeData('datepicker').unbind().datepicker();
           $trLast.after($trNew);                        
        });

        $("table.table input.plusdate2_prev").on("click", function(e) {
           var $this = $(this);
           var $tableBody = $this.parents("tbody");
           $trLast = $tableBody.find("tr.nodel").next();       
           $trNew = $trLast.clone(true);
           $trNew.find(":input").val(""); 
           $trNew.find("input.datepicker").attr("id", "").removeClass('hasDatepicker').removeData('datepicker').unbind().datepicker();
           $trLast.after($trNew);                        
        });

        $("table.table table.table").on("click", "input.plussub", function(e) {
           var $this = $(this);
           var $tableBodysub = $this.parents("tbody.sub");
           $trLastsub = $tableBodysub.find("tr:last");
           
           $trNewsub = $trLastsub.clone(true);
           $trNewsub.find("input").val("");           
           $trLastsub.after($trNewsub);     
        });

        $("table.table table.table").on("click", "input.plussub2", function(e) {
           var $this = $(this);
           var $tableBodysub = $this.parents("tbody.sub");
           $trLastsub = $tableBodysub.find("tr.nodel").prev();
           
           $trNewsub = $trLastsub.clone(true);
           $trNewsub.find("input").val("");           
           $trLastsub.after($trNewsub);     
        });

        $("table.table").on("click", "input.plus2", function(e) {
           e.preventDefault();
           var $this = $(this);
           var $tableBody = $this.parents("tbody");
           $trLast = $tableBody.find("tr.nodel").prev();          
           $trNew = $trLast.clone(true);
           $trNew.find("input").val("");
           $trLast.after($trNew);         
        });
               
        $('table.table, table.table table.table').on("click", "input.minus", function(){
            var $this = $(this);
            var del = $this.attr("class").split(" ")[2]; 
            var pid = $this.parents("table").attr("id");
            var par = $this.parents("div.row"); 
           
            var sum;
            var sum2;

              if(del == "delete1"){
                if($this.closest("tr").siblings().length !== 1){
                   $this.closest("tr").remove();                                
                }
              }else if(del == "delete2"){
                if($this.closest("tr").siblings().length !== 2){
                   $this.closest("tr").remove();                                
                }
              }else if(del == "delete3"){
                if($this.closest("tr").siblings().length !== 3){
                   $this.closest("tr").remove();                                
                }
              }else if(del == "delete4"){
                if($this.closest("tr").siblings().length !== 4){
                   $this.closest("tr").remove();                                
                }
              }else{
                if($this.closest("tr").siblings().length !== 0){
                   $this.closest("tr").remove();                                   
                } 
                      
                if(pid == "tax1" || pid == "card"){
                    sum = sumSizes(pid);       
                    par.prev().find("input.amount_form").val(sum[0]); 
                    par.prev().find("input.taxamount_form").val(sum[1]);
                }else if(pid == "tax2"){
                    sum = sumSizes2(pid);
                    par.prev().find("input.amount_form").val(sum);
                }else if(pid =="sales"){
                    sum2 = sumSizes3(pid);           
                    sum = sumSizes(pid);          
                    par.prev().find("input.amount_form").val(sum[0]);
                    par.prev().find("input.taxamount_form").val(sum[1]);
                    $("#" + pid).next().find("input").each(function(i){
                       $("#" + pid).next().find("input").eq(i).val(sum2[i]);
                    });            
                }
             }
         
                
        });        

        $("form.form-horizontal").on("submit", function(e) {
          e.preventDefault();
          var id = "#" + $(this).attr("id"); 
          //alert(id);
          //alert($(id).find("input.code").eq(1).val());
          //var len = $(id).find("input.code").length;
          var codesub = $(id).find("input.code");
          //alert(code.eq(1).val());
          var len = codesub.length;
          var code = [];
          for(var i = 0; i < len; i++){
            if(codesub.eq(i).val()){
              code[i] = codesub.eq(i).val();
            }
          }
          //alert(code);
        });        

         <!-- 혼합:판매 -->
        $(".table select").change(function(){
           $(this).parents("td").next().next().children().focus();
        });

        function sumSizes(pid) {
           var total = 0;
           var total2 = 0;
           sum = [];
           var pid = "#" + pid;
           
           $(pid + " .amount").each(function(){/*table#tax1*/
              total  += parseInt($(this).val(), 10) || 0;
              total2 += parseInt($(this).parents("td").next().children().val(), 10) || 0;
           });
           sum[0] = total;
           sum[1] = total2;
           return(sum);
        }

        function sumSizes_notax(pid) {
           var total = 0;
           var pid = "#" + pid;
           
           $(pid + " .amount").each(function(){
              total  += parseInt($(this).val(), 10) || 0;
           });
           return(total);
        }

         function sumSizes2(pid) {
           var sum = 0;
           var pid = "#" + pid;
           
           $(pid + " .amount").each(function(){
              sum  += parseInt($(this).val(), 10) || 0;
           });
           return(sum);
        }

        function sumSizes3(pid) {
           var amount = [];
           var pid = "#" + pid;          
           var $tr = $(pid + " tbody tr"); 
           var $gubun = $tr.eq(0).find("td").eq(2).children().children('option'); 
           var $len = $gubun.length ;            
           $gubun.each(function(i){
               amount[i] = 0;               
               $tr.each(function(j){
                   var ind = $tr.eq(j).children("td").eq(2).find(":selected").index();
                   if(i == ind){
                      amount[ind] += parseInt($tr.eq(j).find("td").eq(5).children().val(), 10) || 0;
                   }
               });
           });
          /* amount[$len] = 0; 
           for(var k = 0; k < $len; k++){
              amount[$len] += amount[k]; 
           }*/                                                         
           return(amount);
        }
        <!-- end dialog -->
 
});