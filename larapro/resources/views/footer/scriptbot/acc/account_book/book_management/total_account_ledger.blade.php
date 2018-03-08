<script class="init">
	$(document).ready(function() {	   
           $("body").con_tab2({exam: "#example_90", url: "{{ asset('data/2500_account.txt') }}", lengthChange:true, searching : false, info:false, paging: true});
           $("body").con_tab2({exam: "#example_91", url: "{{ asset('data/2500_account.txt') }}", lengthChange:true, searching : false, info:false, paging: true});                    
      } );
    </script>
