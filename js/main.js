let $search = $("#search");
let $imgs = $("a");

$search.keyup((event) => {
  let value = $search.val().toLowerCase();
  $imgs.show();
  if (value !== "") {
    $imgs.not(`[data-caption*="${value}"]`).hide();
  }
});
