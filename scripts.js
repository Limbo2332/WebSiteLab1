const myForm = $("#form"),
  myFormInputs = $(".form-control");

function validatePhone(phone) {
  let re = /\+380\d{9}/;
  return re.test(String(phone));
}

function nextElement(next, content) {
  next.removeClass("d-none");
  next.addClass("form-validation");
  next.text(content);
}

function deleteNextElement(next) {
  next.removeClass("form-validation");
  next.addClass("d-none");
  next.text("");
}

myForm.submit(function () {

  myFormInputs.each(function (index, element) {
    console.log($(element));
    if ($(element).val() === "") {
      $(element).addClass("error");

      nextElement($(element).next(), "Поле обов'язкове для заповнення");
    } else {
      $(element).removeClass("error");
      deleteNextElement($(element).next());
    }
  });
  if (!validatePhone($("#phoneNumber").val())) {
    $("#phoneNumber").addClass("error");

    nextElement(
      $("#phoneNumber").next(),
      "Номер телефону не дійсний."
    );
  } else {
    $("#phoneNumber").removeClass("error");
    deleteNextElement($("#phoneNumber").next());
  }
  let count = 0;
  $(".validate-label").each(function (index, element) {
    if (!$(element).hasClass("d-none")) {
      count++;
    }
  });
  if (count >= 1) {
    return false;
  } else {
    return true;
  }
});

