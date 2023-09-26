<script type="text/javascript">
      jQuery(function ($) {
       $('#termo').on('scroll', function () {
         if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
           $('#botaoAceitar').removeAttr('disabled');
         }
       })
     });
  </script>