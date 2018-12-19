$("body").append(`<table border="1px">
<thead>
    <tr>
        <td>ID</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
    </tr>
</thead>
<tbody>
    <tr>
    </tr>
</tbody>
</table>`);
$("div").css("float","left");
let submit = $("#submit");
let idCounter = 0;

submit.on("click", () => {
  if($(":text").val() === "") {
    submit.after("<p>Insert text in all fields")
  } else {
    let fName = $("#fName");
    let lName = $("#lName");
    let pass = $("#password");
    let email = $("#email");
    $("tbody").append(`<tr><td>${idCounter++}</td><td>${fName}</td><td>${lName}</td><td>${email}</td></tr>`)
    $("p").remove()
}
});
