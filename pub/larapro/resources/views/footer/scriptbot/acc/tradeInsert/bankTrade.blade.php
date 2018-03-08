<script class="init">
	$(document).ready(function() {
	   $("body").con_tab2({exam: "#example_04", url: "{{ asset('data/2500_14.txt') }}", searching:false, info:false});
           $("body").con_tab2({exam: "#example_05", url: "{{ asset('data/2500_14.txt') }}", searching:false, info:false});
           $("body").con_tab2({exam: "#example_06", url: "{{ ('data/2500_14.txt') }}", searching:false, info:false});
        });
    </script> 
