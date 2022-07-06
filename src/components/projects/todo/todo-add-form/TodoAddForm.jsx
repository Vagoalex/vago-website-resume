import { useDispatch, useSelector } from 'react-redux';
import { addTodo, plusCounter } from '../../../../store/todoList/todo';
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

const TodoAddForm = () => {
  const counterId = useSelector((state) => state.todoList.counterId);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      todo: '',
    },

    validate,
    onSubmit: ({ todo }, { resetForm }) => {
      dispatch(
        addTodo({ id: counterId, text: todo, important: false, done: false })
      );
      dispatch(plusCounter());
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
