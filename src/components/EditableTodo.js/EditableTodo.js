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
  updateLocation,
  removeTodo,
  changeCheckbox,
}) => {
  const [isTitleInputActive, setIsTitleInputActive] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState(item.title);
  const [isLocationInputActive, setIsLocationInputActive] = useState(false);
  const [locationInputValue, setLocationInputValue] = useState(item.location);

  const wrapperRef = useRef(null);
  const titleTextRef = useRef(null);
  const titleInputRef = useRef(null);
  const locationTextRef = useRef(null);
  const locationInputRef = useRef(null);

  const remove = 'x';
  const atWithSpaces = ' at ';
  const onWithSpaces = ' on ';
  const done = 'done?';

  useOnClickOutside(wrapperRef, () => {
    if (isTitleInputActive) {
      updateTodo(item.id, titleInputValue);
      setIsTitleInputActive(false);
    }
    if (isLocationInputActive) {
      updateLocation(item.id, locationInputValue);
      setIsLocationInputActive(false);
    }
  });

  useEffect(() => {
    if (isTitleInputActive) {
      titleInputRef.current.focus();
    }
  }, [isTitleInputActive]);

  useEffect(() => {
    if (isLocationInputActive) {
      locationInputRef.current.focus();
    }
  }, [isLocationInputActive]);

  return (
    <span ref={wrapperRef}>
      <p>
        <span
          ref={titleTextRef}
          role="presentation"
          onClick={() => setIsTitleInputActive(true)}
          onKeyDown={() => setIsTitleInputActive(true)}
          className={styles.inlineTitleCopyActive}
          style={{ width: Math.ceil(titleInputValue.length * 0.9) }}
        >
          <input
            ref={titleInputRef}
            value={titleInputValue}
            onChange={(e) => setTitleInputValue(e.target.value)}
            className={styles.inlineTitleInputActive}
            style={{ width: Math.ceil(titleInputValue.length * 7.5) }}
          />
        </span>
        <span className={styles.details}>{atWithSpaces}</span>
        <span
          ref={locationTextRef}
          role="presentation"
          onClick={() => setIsLocationInputActive(true)}
          onKeyDown={() => setIsLocationInputActive(true)}
          className={styles.inlineLocationCopyActive}
        >
          <input
            ref={locationInputRef}
            value={locationInputValue}
            onChange={(e) => setLocationInputValue(e.target.value)}
            className={styles.inlineLocationInputActive}
            style={{ width: Math.ceil(locationInputValue.length * 8) }}
          />
        </span>
        <span className={styles.details}>{onWithSpaces}</span>
        <span className={styles.details}>{done}</span>
        <span className={styles.todo}>
          <input
            id={item.id}
            type="checkbox"
            defaultChecked={item.done}
            onChange={() => {
              changeCheckbox(item);
            }}
          />
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
      </p>
    </span>
  );
};

export default EditableTodo;

EditableTodo.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateLocation: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
