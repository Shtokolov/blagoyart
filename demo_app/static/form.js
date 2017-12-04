$(function() {

  $('#post-form').on('submit', function(event){
  event.preventDefault();
  console.log("form submitted!");
  create_post();
  });



  function create_post() {
    $.ajax({ // решил делать на jqery, потому что он и так уже у нас в проекте
      url : "/test_submit",
      type : "POST",
      data : {  text: $('#id_text').val(),
                integer: $('#id_integer').val(),
                email: $('#id_email').val(),
                // 'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val()
              },

      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRFToken', $.cookie('csrftoken'));
      },

      success : function(data) {
        if (data.status === "success") {
          $('#output').html(data.data);
        }
        else {
          for(var key in data.data) {
            $('#output').html(data.data[key]);
          }
        }
        showPopUp();
      },

      error : function(xhr,errmsg,err) {
        console.log(xhr);
        console.log(errmsg);
        console.log(err);
      }

    });
  }

  function showPopUp(){
    $('.cd-popup').addClass('is-visible');
  }


  $('.cd-popup').on('click', function(event){
    if($(event.target).is('.cd-popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });


  $(document).keyup(function(event){
    if(event.which=='27'){
      $('.cd-popup').removeClass('is-visible');
    }
  });

});
