<script class="init">
	$(document).ready(function() {          
           $("body").con_tab2({exam: "#example_90", url: "{{ asset('data/2500_03.txt') }}", scrollY:239, searching : false, info:false, paging: false});
           $("body").con_tab2({exam: "#example", url: "{{ asset('data/2500_09.txt') }}", searching : false, info:false, paging: false});
        });
    </script>
