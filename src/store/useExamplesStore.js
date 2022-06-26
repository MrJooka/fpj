import _ from 'lodash';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useExamplesStore = create(
  immer((set) => ({
    examples: {
      first: {
        5: {
          value: `
          \`\`\`javascript
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
  \`\`\`
          `,
          fn: () => {
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
          },
        },
      },
    },
  }))
);

export default useExamplesStore;
