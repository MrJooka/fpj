import _ from 'lodash';
import React, { useState } from 'react';

function First() {
  const [visible, setVisible] = useState(false);

  const firstToggle = () => {
    setVisible((vis) => !vis);
  };

  const handle_1_5 = () => {
    const enrollment = [
      { enrolled: 1, grade: 80 },
      { enrolled: 2, grade: 80 },
      { enrolled: 1, grade: 80 },
      { enrolled: 2, grade: 70 },
      { enrolled: 1, grade: 80 },
    ];

    const meanByGradeOnEnrolled2 = _.chain(enrollment)
      .filter((st) => st.enrolled === 2)
      .meanBy((st) => st.grade)
      .value();

    console.log(meanByGradeOnEnrolled2);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <button
        className={`px-4 py-2 font-semibold text-sm bg-white text-slate-700 
                  dark:bg-slate-700 dark:text-white dark:ring-white/10 dark:ring-inset
                    rounded-md shadow-sm ring-1 ring-slate-900/5  border-indigo-500 border-2 border-none`}
        onClick={firstToggle}
      >
        1강 테스트
      </button>
      {visible && (
        <div className="flex gap-4 flex-wrap p-4 border border-gray-500 rounded-md">
          <button
            className={`px-4 py-2 font-normalgi text-sm bg-white text-slate-500 
                  dark:bg-slate-500 dark:text-white dark:ring-white/10 dark:ring-inset
                    rounded-md shadow-sm ring-1 ring-slate-700/5  border-indigo-400 border-2 border-none`}
            onClick={handle_1_5}
          >
            1-5
          </button>
        </div>
      )}
    </div>
  );
}

export default First;
