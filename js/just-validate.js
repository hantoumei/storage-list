export function newValidation(func) {
  const validate = new JustValidate('.form',
    {
      errorLabelStyle: {
        color: 'crimson',
        fontSize: '13px',
      }
    }
  );
  
  validate.addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите название предмета',
    }
  ]);
  
  validate.addField('#shelf', [
    {
      rule: 'required',
      errorMessage: 'Введите номер полки'
    }
  ]);
  
  validate.addField('#weight', [
    {
      rule: 'required',
      errorMessage: 'Введите вес предмета'
    },
    {
      rule: 'minNumber',
      value: 0.01,
      errorMessage: 'Минимальный вес 0,01 кг'
    },
  ]);
  
  validate.addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Введите дату'
    }
  ]);
  
  validate.onSuccess(func);
}