$(function() {
    $.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
        '7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '',
        //showOn: 'both',
        //buttonText: "달력",
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        yearRange: 'c-99:c+99',
    };
    $.datepicker.setDefaults($.datepicker.regional['ko']);
 
    $('#from').datepicker();
    $('#from').datepicker("option", "maxDate", $("#to").val());
    $('#from').datepicker("option", "onClose", function ( selectedDate ) {
        $("#to").datepicker( "option", "minDate", selectedDate );
        //$(this).parents("div.form-group").next().find("input").focus();
        
    });
 
    $('#to').datepicker();
    $('#to').datepicker("option", "minDate", $("#from").val());
    $('#to').datepicker("option", "onClose", function ( selectedDate ) {
        $("#from").datepicker( "option", "maxDate", selectedDate );
        $(this).parents("div.form-group").next("div.form-group").find("input").focus();
    });

    $('#from2').datepicker();
    $('#from2').datepicker("option", "maxDate", $("#to").val());
    $('#from2').datepicker("option", "onClose", function ( selectedDate ) {
        $("#to2").datepicker( "option", "minDate", selectedDate );
        //$(this).parents("div.form-group").next().find("input").focus();
        
    });
 
    $('#to2').datepicker();
    $('#to2').datepicker("option", "minDate", $("#from").val());
    $('#to2').datepicker("option", "onClose", function ( selectedDate ) {
        $("#from2").datepicker( "option", "maxDate", selectedDate );
        //$(this).parents("div.form-group").next("div.form-group").find("input").focus();
    });



    <!-- datapicker -->
    $(".datepicker").each( function() {
      $(this).datepicker({
        onSelect: function (dateText, inst) {   
           // 일자 선택된 후 이벤트 발생 
           if (inst.input) {
             //inst.input.trigger('change');
             //alert(inst.input.attr("type"));
             //alert(inst.input.attr("class")); /*server 전송시 선택*/
             if($(this).attr("class").split(" ")[2] == "next121a"){
               $(this).parent().next().next().find("a:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next110"){
               $(this).parent().next().find("input:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next110a"){
               $(this).parent().next().find("a:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next111"){
               $(this).parent().next().find("input:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next110s"){
               $(this).parent().next().find("select:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next120"){
               $(this).parent().next().next().find("input:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next120b"){
               $(this).parent().next().next().find("button:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next130"){
               $(this).parent().next().next().next().find("input:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next210b"){
               $(this).parent().parent().next().find("button:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next210"){
               $(this).parent().parent().next().find("input:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next210b"){
               $(this).parent().parent().next().find("button:eq(0)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next211"){
               $(this).parent().parent().next().find("input:eq(1)").focus();
             }else if($(this).attr("class").split(" ")[2] == "next220"){
               $(this).parent().parent().next().next().find("input:eq(0)").focus();
             }else{
               
             }
             
           };
       } 
     });
   }); 

  
});
