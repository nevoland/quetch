import nlp from "compromise";

// Define the Filter type
type Filter = {
  field: string;
  operator: "equal" | "notEqual" | "contain" | "exclude";
  value: string | string[];
};

// Function to extract filters from text
function extractFilters(text: string): Filter[] {
  const doc = nlp(text);
  const filters: Filter[] = [];

  // Identify meaningful chunks
  const chunks = doc.terms().out("array");
  console.log(doc.terms().json()[0].terms);

  chunks.forEach((chunk) => {
    const chunkDoc = nlp(chunk);
    const nouns = chunkDoc.nouns().out("array");
    const verbs = chunkDoc.verbs().out("array");
    const values = chunkDoc.match("#Value").out("array");

    nouns.forEach((noun, index) => {
      let operator: Filter["operator"] = "equal";
      const verb = verbs[index] || "";

      if (verb.includes("not")) {
        operator = "notEqual";
      } else if (verb.includes("contain")) {
        operator = "contain";
      } else if (verb.includes("exclude")) {
        operator = "exclude";
      }

      filters.push({
        field: noun,
        operator,
        value: values[index] || "",
      });
    });
  });

  return filters;
}

// Example usage
const inputText =
  "Find products where category contains electronics and brand is not Apple";
const filters = extractFilters(inputText);
console.log(filters);
