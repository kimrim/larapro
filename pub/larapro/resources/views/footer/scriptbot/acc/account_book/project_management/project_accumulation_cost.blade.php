<script class="init">
        $(document).ready(function() {
           $("body").con_tab2({exam: "#example_90", url: "{{ asset('data/2500_03.txt') }}", lengthChange:true, searching:false, info:false});
           $("body").con_tab3({cla2: "1", exam: "#example", url: "{{ asset('data/2500_17.txt') }}", lengthChange:false, info:false});
        });	
    </script>
