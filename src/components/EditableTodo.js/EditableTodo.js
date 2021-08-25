import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import styles from './EditableTodo.module.css';
import useOnClickOutside from '../../app/hooks/useOnClickOutside';

const EditableTodo = ({
  item,
  updateTodo,
  updateDetails,
  removeTodo,
  changeCheckbox,
}) => {
  const [isTitleInputActive, setIsTitleInputActive] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState(item.title);
  const [isDetailsInputActive, setIsDetailsInputActive] = useState(false);
  const [detailsInputValue, setDetailsInputValue] = useState(item.details);

  const wrapperRef = useRef(null);
  const titleTextRef = useRef(null);
  const titleInputRef = useRef(null);
  const detailsTextRef = useRef(null);
  const detailsInputRef = useRef(null);

  const remove = 'x';

  useOnClickOutside(wrapperRef, () => {
    if (isTitleInputActive) {
      updateTodo(item.id, titleInputValue);
      setIsTitleInputActive(false);
    }
    if (isDetailsInputActive) {
      updateDetails(item.id, detailsInputValue);
      setIsDetailsInputActive(false);
    }
  });

  useEffect(() => {
    if (isTitleInputActive) {
      titleInputRef.current.focus();
    }
  }, [isTitleInputActive]);

  useEffect(() => {
    if (isDetailsInputActive) {
      detailsInputRef.current.focus();
    }
  }, [isDetailsInputActive]);

  return (
    <span ref={wrapperRef}>
      <tr className={styles.toprow}>
        <p className={item.done ? styles.greyIfChecked : styles.toprow}>
          <td className={styles.checkboxColumn}>
            <input
              id={item.id}
              type="checkbox"
              defaultChecked={item.done}
              onChange={() => {
                changeCheckbox(item);
              }}
              className={styles.checkbox}
            />
          </td>
          <td className={styles.titleColumn}>
            <span
              ref={titleTextRef}
              role="presentation"
              onClick={() => setIsTitleInputActive(true)}
              onKeyDown={() => setIsTitleInputActive(true)}
              className={styles.inlineTitleCopyActive}
            >
              <input
                ref={titleInputRef}
                value={titleInputValue}
                onChange={(e) => setTitleInputValue(e.target.value)}
                className={styles.inlineTitleInputActive}
                // style={{ width: titleInputValue.length * 7 }}
              />
            </span>
          </td>
          <td className={styles.removeColumn}>
            <span className={styles.todo}>
              <button
                type="button"
                className={styles.removeTodo}
                onClick={() => {
                  removeTodo(item.id);
                }}
              >
                {remove}
              </button>
            </span>
          </td>
        </p>
      </tr>
      <tr className={styles.bottomrow}>
        <td className={styles.detailsColumn}>
          <span
            ref={detailsTextRef}
            role="presentation"
            onClick={() => setIsDetailsInputActive(true)}
            onKeyDown={() => setIsDetailsInputActive(true)}
            className={styles.details}
          >
            <input
              ref={detailsInputRef}
              value={detailsInputValue}
              onChange={(e) => setDetailsInputValue(e.target.value)}
              className={styles.inlineDetailsInputActive}
              // style={{ width: Math.ceil(detailsInputValue.length * 9) }}
            />
          </span>
        </td>
      </tr>
    </span>
  );
};

export default EditableTodo;

EditableTodo.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateDetails: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
