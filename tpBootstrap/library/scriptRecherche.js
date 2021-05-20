$( "#buttonRecherche" ).click(function() {
  var valueInput = $("#recherche").val();
  if (!valueInput){
    $('#myModal').modal('show');
  }
  else {
    $('#formRecherche').submit();
  }
});
