$(":text").on("focus", event => {
  let input = $(event.target);
  input.val("Enter text here");
})
$(":text").on("blur", event => {
  let input = $(event.target);
  input.val("")
})