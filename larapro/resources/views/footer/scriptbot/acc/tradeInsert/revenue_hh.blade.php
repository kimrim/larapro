<script class="init">
	$(document).ready(function() {
           $("#ajaxtabsub a").each(function(){
              var $this = $(this);
              var $href = $this.attr("href"); 
              if($href == "tab51"){
                 $href = "tab5";
              }
              var cla = $this.attr("class");
              var cla1 = cla.substring(0, cla.length-3)
              var cla2 = cla.charAt(3);
              var cla3 = cla.substring(cla.length-2);          
              var exam = $href + "_table";
              var url = "../../data/" + cla1 + "/" + cla3 + ".txt"; 

              $this.con_tab3({cla2: cla2, exam: exam, url: url}); 
           });
        });
    </script> 
