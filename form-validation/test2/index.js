const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");
const date = document.getElementById("date");
const timeEnd = document.getElementById("time-end");
const timeStart = document.getElementById("time-start");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

function CustomValidation() {}

CustomValidation.prototype = {
  // Установим пустой массив сообщений об ошибках
  invalidities: [],

  // Метод, проверяющий валидность
  checkValidity: function (input) {
    var validity = input.validity;

    if (validity.patternMismatch) {
      this.addInvalidity("This is the wrong pattern for this field");
    }

    if (validity.rangeOverflow) {
      var max = getAttributeValue(input, "max");
      this.addInvalidity("The maximum value should be " + max);
    }

    if (validity.rangeUnderflow) {
      var min = getAttributeValue(input, "min");
      this.addInvalidity("The minimum value should be " + min);
    }

    if (validity.stepMismatch) {
      var step = getAttributeValue(input, "step");
      this.addInvalidity("This number needs to be a multiple of " + step);
    }

    // И остальные проверки валидности...
  },

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity: function (message) {
    this.invalidities.push(message);
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function () {
    return this.invalidities.join(". \n");
  },
};

function CustomValidation() {}

CustomValidation.prototype = {
  // Установим пустой массив сообщений об ошибках
  invalidities: [],

  // Метод, проверяющий валидность
  checkValidity: function (input) {
    var validity = input.validity;

    if (validity.patternMismatch) {
      this.addInvalidity("This is the wrong pattern for this field");
    }

    if (validity.rangeOverflow) {
      var max = getAttributeValue(input, "max");
      this.addInvalidity("The maximum value should be " + max);
    }

    if (validity.rangeUnderflow) {
      var min = getAttributeValue(input, "min");
      this.addInvalidity("The minimum value should be " + min);
    }

    if (validity.stepMismatch) {
      var step = getAttributeValue(input, "step");
      this.addInvalidity("This number needs to be a multiple of " + step);
    }

    // И остальные проверки валидности...
  },

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity: function (message) {
    this.invalidities.push(message);
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function () {
    return this.invalidities.join(". \n");
  },
};

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener("click", function (e) {
  // Пройдёмся по всем полям
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
    if (input.checkValidity() == false) {
      var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
      inputCustomValidation.checkValidity(input); // Выявим ошибки
      var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
      input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
    } // закончился if
  } // закончился цикл
});
