import nlp from "compromise";

// const TEXT = `
// devices active last week
// that sent more than 5 GB of data
// or received more than 1 GB
// and are either XR80 or XR90
// `;

const TEXT = `
active last week & firmware version 1.24.3
`;

const analysis = nlp(TEXT);

// console.log(analysis.model.one.tagSet);

// analysis.forEach((view) => {
//   view.terms().forEach((term) => {
//     console.log(term.);
//   });
// });

// analysis.debug();

// console.log(analysis.verbs().json());
// console.log(analysis.adjectives().json());
// analysis.chunks().map((chunk) => {
//   console.log(chunk.adjectives().json());
// });

console.log(analysis.chunks().json());

analysis.chunks().forEach((chunk) => {
  chunk.docs.forEach((terms) => {
    terms.forEach((term) => {
      console.log(term);
    });
  });
});

// console.log(analysis.conjunctions().json());
// console.log(analysis.clauses().json());
