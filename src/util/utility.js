export function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function getMonthAsString(dateAsString) {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dateObject = new Date(dateAsString);
  return month[dateObject.getMonth()];
}

export function extractDate(budgetArray) {
  const dates = budgetArray.map((budget) => {
    return `${budget["month"]}, ${budget["year"]}`;
  });

  return [...new Set(dates)];
}

export function fetch(url, options) {
  if (options["method"] === "GET") {
    return fetch(url, { method: "GET", headers: { Accept: "application/json" } });
  } else if (options["method"] === "POST") {
    return fetch(url, { method: "POST", body: JSON.stringify(options["body"]), headers: { "Content-Type": "application/json", Accept: "application/json" } });
  }
}
