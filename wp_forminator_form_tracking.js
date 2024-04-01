<script>
(function() {
    function formDataToObject(formData) {
      var object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      });
      return object;
    }

    jQuery(document).on('forminator:form:submit:success', function (e, formData) { 
        var formDataObject = formDataToObject(formData);

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'forminator_form_submit',
            form_id: formDataObject.form_id,
            inputs: formDataObject
        });
    });
})();
</script>