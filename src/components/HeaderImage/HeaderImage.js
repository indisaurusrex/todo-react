/* eslint-disable import/no-cycle */

import React from 'react';
import PropTypes from 'prop-types';
import {
  AddNewTodo,
  TodoDate,
  Progress,
  Image,
} from '../internal';

export function HeaderImage({
  items,
  formDisplay,
  toggleForm,
  addTodo,
  treeToggle,
}) {
  let doneCount = 0;
  let donePercent = 0;

  items.map((item) => {
    if (item.done) {
      doneCount += 1;
    }
    return doneCount;
  });

  donePercent = Math.round((doneCount / items.length + Number.EPSILON) * 100);

  return (
    <div className="header-image">
      <Image donePercent={donePercent} treeToggle={treeToggle} />
      <div className="dark-shade">
        <AddNewTodo
          formDisplay={formDisplay}
          toggleForm={toggleForm}
          addTodo={addTodo}
        />
        <Progress donePercent={donePercent} />
        <TodoDate />
      </div>
    </div>
  );
}

HeaderImage.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array]).isRequired,
  formDisplay: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  treeToggle: PropTypes.bool.isRequired,
};
