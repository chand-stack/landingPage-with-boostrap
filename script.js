function computeTotal() {
  // let total = 0;
  // console.log($("li"));
  // $("li").each(() => {
  //   total += parseInt($(this).text(), 10);
  // });
  // $("#total").text(`Total: ${total}`);

  let total = 0;
  console.log($("li"));
  $("li").each(function () {
    total += parseInt($(this).text(), 10);
  });
  $("#total").text(`Total: ${total}`);
}

document.addEventListener("DOMContentLoaded", function () {
  computeTotal();
});
