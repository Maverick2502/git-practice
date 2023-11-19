async function getGithubUser(username) {
  // async keyword allows usage of await in the function and means function returns a promise
  const response = await fetch(`https://api.github.com/users/${username}`); // Execution is paused here until the Promise returned by fetch is resolved
  return response.json();
}

getGithubUser("maverick2502")
  .then((user) => console.log(user)) // logging user response - cannot use await syntax since this code isn't in async function
  .catch((err) => console.log(err));

function downToOne(n) {
  const list = [];

  for (let i = n; i > 0; --i) {
    list.push(i);
  }

  return list;
}

downToOne(5);

async function getGitHubUsername(username) {
  const response = fetch(`https://api.github.com/users/${username}`);
  return (await response).json;
}

getGitHubUsername("maverick2502")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

function mult(x) {
  return x * 2;
}

// Function rest parameter
function createStudent(firstName, lastName, ...grades) {
  const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;

  return {
    firstName: firstName,
    lastName: lastName,
    grades: grades,
    avgGrade: avgGrade,
  };
}

const student = createStudent("Nick", "Anderson", 10, 12, 6);

// Tagged template literals
function comma(strings) {
  return strings.reduce((prev, next) => {
    let value = value.shift() || [];
    value.join(", ");
    return prev + next + value;
  }, "");
}

const snacks = ["apples", "strawberries", "bananas"];
comma`I like ${snacks}`;

// Bind, Call and Apply
let darthVader = {
  son: "Luke",
  saying: function () {
    console.log(this.son + ", I'm your father");
  },
};

let luke = {
  son: "Ben",
};

darthVader.saying.call(luke);
