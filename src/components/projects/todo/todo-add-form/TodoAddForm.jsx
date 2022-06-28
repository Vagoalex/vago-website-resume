import { useFormik } from 'formik';

import './TodoAddForm.scss';

const validate = (values) => {
  const errors = {};

  if (!values.todo) {
    errors.todo = 'Укажите дело!';
  } else if (values.todo.length < 4) {
    errors.todo = 'Минимум 4 символа.';
  }

  return errors;
};

const TodoAddForm = ({ addTodoItem }) => {
  const formik = useFormik({
    initialValues: {
      todo: '',
    },

    validate,
    onSubmit: (values, { resetForm }) => {
      addTodoItem(values);
      resetForm(formik.initialValues);
    },
  });
  return (
    <form className='TodoAddForm' onSubmit={formik.handleSubmit}>
      <input
        id='todo'
        name='todo'
        type='text'
        className='TodoAddForm__input'
        placeholder='What needs to be done?'
        value={formik.values.todo}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type='submit' className='TodoAddForm__btn'>
        Add
      </button>
      {formik.touched.todo && formik.errors.todo ? (
        <div className='TodoAddForm-error'>{formik.errors.todo}</div>
      ) : null}
    </form>
  );
};

export default TodoAddForm;
