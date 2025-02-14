const FIRSTSIMBOLS = '+7(';

function initPhoneInput() {
  let phoneInputs = document.querySelectorAll('input[data-tel-input]');
  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '');
  };

  const onPhonePaste = (e) => {
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  const onPhoneInput = (e) => {
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let selectionStart = input.selectionStart;
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      input.value = '';
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (inputNumbersValue) {

      if (inputNumbersValue.length === 1) {
        formattedInputValue = FIRSTSIMBOLS + inputNumbersValue;
      }

      if (inputNumbersValue.length >= 2) {
        formattedInputValue = input.value;
      }

      if (inputNumbersValue.length > 4) {
        formattedInputValue = FIRSTSIMBOLS + inputNumbersValue.substring(1, 4) + ')' + inputNumbersValue.substring(4, 13);
      }
    }

    input.value = formattedInputValue;
  };

  const onPhoneKeyDown = (e) => {
    let inputValue = e.target.value;
    if (e.keyCode === 8 && inputValue.length === 4) {
      e.target.value = '';
    }
  };

  phoneInputs.forEach((el) => {
    el.addEventListener('keydown', onPhoneKeyDown);
    el.addEventListener('input', onPhoneInput, false);
    el.addEventListener('paste', onPhonePaste, false);
  });
}

export {initPhoneInput};
