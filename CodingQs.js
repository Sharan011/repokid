//check digit
function createCheckDigit(membershipId) {
  let sum = membershipId.split('').reduce((a, c) => {
    a += parseInt(c);
    return a;
  }, 0);
  // reduce((accumulator val, current val) => accum val + cuurent val, initial val);
  // since we need to convert first to add the array element we use arrow func
  // and inital val =0 in our case

  // have to convert the sum back to a string

  return sum >= 10 ? createCheckDigit(sum.toString()) : sum;
}

console.log(createCheckDigit('55555'));

//Closest Relative

function closestRelative(parent, relativeName) {
  const children = [...parent.childNodes];
  // "..." This saves us the time we would use to write a loop statement to copy contents from one array to another
  //childNodes - used to get data from Node object. other keywords - .haschildNodes(), .firstChild, .removeChild()
  let c;
  while (children.length) {
    console.log(children);
    console.log(c);
    c = children.shift();
    // The shift() method removes the element at the zeroth index and shifts
    // the values at consecutive indexes down, then returns the removed value.
    // c is the removed name from list, i.e dave
    // tagname returns in caps - ex: DAVE
    console.log(c.tagName);
    if (c.tagName === relativeName.toUpperCase()) return c;

    for (const child of c.childNodes) {
      children.push(child);
    }
  }
  return null;
}

document.body.innerHTML =
  '<James>' +
  '<Dave></Dave>' +
  '<Mike></Mike>' +
  '<Sarah></Sarah>' +
  '</James>';

let parent = document.getElementsByTagName('James')[0];
let relative = closestRelative(parent, 'Mike');
console.log(relative && relative.tagName);

//Closures
function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (let i = 0; i < as.length; i++) {
    as[i].onclick = function () {
      alert(i);
      return false;
    };
  }
}

//customers list
function showCustomers(customers, targetList) {
  for (let item of customers) {
    let clicked = false;
    let childElement = document.createElement('li');
    // creates an entity or record or new list and using
    //appendChild it is added to the list called "targetList"
    let appendChildElement = targetList.appendChild(childElement);
    appendChildElement.innerHTML = `<p> ${item.name} </p>`;

    appendChildElement.addEventListener('click', () => {
      if (!clicked) {
        appendChildElement.innerHTML = `<p>${item.name}</p>
                                        <p>${item.email}</p>`;
        clicked = true;
      } else {
        appendChildElement.innerHTML = `<p>${item.name}</p>`;
        clicked = false;
      }
    });
  }
}

// Format User entered Date
function formatDate(userDate) {
  let result = new Date(userDate.split('/'));
  console.log(result);
  // using Date will give you the day, month, year, time and time zone as well
  //ex: Thu Dec 02 1999 00:00:00 GMT-0500 (Eastern Standard Time)
  //remeber slice can be used only to string so we converting it using ISOString()
  //join removes the array and since we didnt give space b/w chars. itll give
  //result like - 19991202
  return result.toISOString().slice(0, 10).split('-').join('');
}
console.log(formatDate('12/02/1999'));

//endangered species finder
function endangeredSpecies(continent, species) {
  let continentMatch = document.querySelector(
    "[data-continent='" + continent + "']"
  );

  let matches = continentMatch.querySelector(
    "[data-species='" + species + "']"
  );
  //using innerText will represent the rendered text content of a node
  //basically it represent the value. in our case it is the "species"
  return matches.innerText;
}

//ensuring value is not undefined
function ensure(value) {
  if (value === undefined) {
    throw new Error('value must be provided');
  }
  return value;
}

//span even number elements needed to show yellow bg eveytime when it is clicked
//this question is based on choose the answers
//three correct answer chosen - line nos. 170,171,172 are correct
//170- using querySelectorAll instead of just query Selector which will pick the first span but we need all span that has even nos.
//171- passing item as a param to the function instead of event as for a particular item selection we need yellow color not for events which 
//will change yellow everytime the event occurs
//172- its already not showing yellow bg so we first check if its not yello bg and if its return true then we change to yellow or else transprent
function toggleEvenColor() {
  let elem = document.querySelectorAll('#numbers span:nth-child(2n)');
  elem.forEach(function (item) {
    item.style.backgroundColor !== 'yellow' ? 'yellow' : 'transparent';
  });
}

//food ranking - if its not included in button and up/down is defined as class
// function setup() {
//   let upLink = document.querySelectorAll('.up');
//by clicking up button the this is stored as wrapper and the element before wrapper's moved up will be
// having this of wrapper's and the wrapper will have the content of its previous element.
//its like 2's content stored in 1 and it became no.1 position and 1's content moved to 2, taking 2nd position.
//   for (let i = 0; i < upLink.length; i++) {
//     upLink[i].addEventListener('click', function () {
//       let wrapper = this.parentElement;

//       if (wrapper.previousElementSibling) {
//         wrapper.parentNode.insertBefore(
//           wrapper,
//           wrapper.previousElementSibling
//         );
//       }
//     });
//   }

//   let downLink = document.querySelectorAll('.down');

//   for (let i = 0; i < downLink.length; i++) {
//     downLink[i].addEventListener('click', function () {
//       let wrapper = this.parentElement;

//       if (wrapper.nextElementSibling) {
//         wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
//       }
//     });
//   }
// }

//if the uo or down classes defined inside a button
//just one line changes -
// it will navigate to the button and see if the element has text called "Up!"
function setup() {
  let upLink = Array.from(document.getElementsByTagName('button')).filter(
    el => el.textContent === 'Up!'
  );

  for (let i = 0; i < upLink.length; i++) {
    upLink[i].addEventListener('click', function () {
      let wrapper = this.parentElement;

      if (wrapper.previousElementSibling) {
        wrapper.parentNode.insertBefore(
          wrapper,
          wrapper.previousElementSibling
        );
      }
    });
  }

  let downLink = Array.from(document.getElementsByTagName('button')).filter(
    el => el.textContent === 'Down!'
  );

  for (let i = 0; i < downLink.length; i++) {
    downLink[i].addEventListener('click', function () {
      let wrapper = this.parentElement;

      if (wrapper.nextElementSibling) {
        wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
      }
    });
  }
}
// Example case
document.body.innerHTML = `<ol>
<li><button>Up!</button>Taco<button>Down!</button></li>
<li><button>Up!</button>Pizza<button>Down!</button></li>
<li><button>Up!</button>Eggs<button>Down!</button></li>
</ol>`;

setup();
document.getElementsByTagName('button')[2].click();

console.log(document.body.innerHTML);

//game platform
function calculateFinalSpeed(initialSpeed, inclinations) {
  let speed = initialSpeed;

  for (let i = 0; i < inclinations.length; i++) {
    if (inclinations[i] < 0) {
      speed += Math.abs(inclinations[i]); // Absolute Value is a must here
    } else {
      speed -= inclinations[i]; // works with / without using Absolute Value
      // speed check has to be after subtracting
      if (speed <= 0) {
        return 0;
      }
    }
  }

  return speed;
}
//at first speed will be evaluated to 30
//when loop reaches -45 it will go to the if statement and changed to +45 as abs val
//after 30+45 = 75 will be the final answer returned
console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));

//function to remove image using click event
function setup() {
  let items = document.querySelectorAll('.remove');

  items.forEach(item => {
    item.addEventListener('click', function () {
      item.parentElement.remove();
    });
  });
  return items;
}

//looping all div elements and appending a child divs to all those divs
function appendChildren(decorateDivFunction) {
  var allDivs = [...document.getElementsByTagName('div')];

  for (let i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement('div');
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

//malware detection
function simulate(entries) {
  // need to copy array - otherwise you'll get
  // [19,0,0,87,0,0,0,77,77,77,0]

  let arr = [...entries];
  for (let i = 0; i < entries.length; i++) {
    console.log(i, entries[i - 3]);
    //for i = 0,1,2 it will be undefined it wont go to the last element - remember
    if (entries[i - 3] !== undefined && entries[i + 4] !== undefined) {
      if (entries[i] <= entries[i - 3] || entries[i] <= entries[i + 4]) {
        arr[i] = 0;
      }
    } else if (entries[i - 3] === undefined && entries[i] <= entries[i + 4]) {
      arr[i] = 0;
    } else if (entries[i + 4] === undefined && entries[i] <= entries[i - 3]) {
      arr[i] = 0;
    }
  }

  return arr;
}

const records = [19, 2, 0, 87, 1, 40, 80, 77, 77, 77, 77];
console.log(simulate(records));

//pipline - take prev math opt x value and pass it to next math opt
//useing reduce func
function pipeline(...funcs) {
  return arg => {
    return funcs.reduce((prev, fn) => fn(prev), arg);
  };
}

let fun = pipeline(
  x => x * 3,
  x => x + 1,
  x => x / 2
);
console.log(fun(3)); // Should print 5

//Remove Property function
//if the passed obj param has the passed prop param then delete it
function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return delete obj[prop];
  }
  return false;
}

//Record Tasks Function
//same as food ranking
function initialize() {
  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (this.classList.contains('downButton')) {
        // down button clicked next to this span
        const span = this.previousElementSibling;
        const spanTextContent = span.textContent;

        const below = this.parentNode.nextElementSibling;

        if (below) {
          const spanToSwap = below.querySelector('span');
          const spanToSwapTextContent = spanToSwap.textContent;
          span.textContent = spanToSwapTextContent;
          spanToSwap.textContent = spanTextContent;
        }
      } else {
        // upButton functionality here

        // up button clicked next to this span
        let span = this.previousElementSibling;

        // have to change span for double button row
        if (span.classList.contains('downButton')) {
          span = this.previousElementSibling.previousElementSibling;
        }

        let spanTextContent = span.textContent;

        const above = this.parentNode.previousElementSibling;

        if (above) {
          const spanToSwap = above.querySelector('span');
          const spanToSwapTextContent = spanToSwap.textContent;
          span.textContent = spanToSwapTextContent;
          spanToSwap.textContent = spanTextContent;
        }
      }
    });
  }
}

document.body.innerHTML = `
<div>
  <span>Read emails</span>
  <button class="downButton" type="button">&darr;</button>
</div>
<div>
  <span>Prepare presentation</span>
  <button class="downButton" type="button">&darr;</button>
  <button class="upButton" type="button">&uarr;</button></div>
<div>
  <span>Monthly report</span>
  <button class="upButton" type="button">&uarr;</button>
</div>`;

initialize();

document.querySelectorAll('button')[0].click();
document.querySelectorAll('button')[3].click();
document.querySelectorAll('button')[1].click();

console.log(document.body.innerHTML);

//Create Song
class Song {
  name;
  nextSong;

  constructor(name) {
    this.name = name;
  }

  isRepeatingPlaylist() {
    let bank = new Set();
    let currentSong = this;

    while (true) {
      if (currentSong.nextSong == undefined) {
        return false;
      } else if (!bank.has(currentSong.nextSong.name)) {
        bank.add(currentSong.name);
        currentSong = currentSong.nextSong;
      } else {
        return true;
      }
    }
  }
}

//Topic COloring - bg color to be set to red for the topic
function newMessage(topicName) {
  if (document.querySelector(`[data-topic-name="${topicName}"]`)) {
    return (document.querySelector(
      `[data-topic-name="${topicName}"]`
    ).style.backgroundColor = 'red');
  }
}

//Two Sum- add the target no to the array element and return the val
function findTwoSum(arr, target) {
  const comp = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (comp[arr[i]] >= 0) {
      return [comp[arr[i]], i];
    }
    comp[target - arr[i]] = i;
  }
  return null;
}
let a = [1, 2, 3, -4, 5];
console.log(findTwoSum(a, 2));


///SQL ANSWERS
SELECT count(*) FROM students WHERE firstName = 'John';

//A table containing the students enrolled in a yearly course has incorrect data in records with ids between 20 and 100 (inclusive).
// TABLE enrollments
// --   id INTEGER NOT NULL PRIMARY KEY
// --   year INTEGER NOT NULL
// --   studentId INTEGER NOT NULL
// --
// -- Write a query that updates the field 'year' of every faulty record to 2015.

UPDATE  enrollments set year = 2015 WHERE id >= 20 and id <= 100;

// -- Information about pets is kept in two separate tables:
// --
// -- TABLE dogs
// --   id INTEGER NOT NULL PRIMARY KEY,
// --   name VARCHAR(50) NOT NULL
// --
// -- TABLE cats
// --   id INTEGER NOT NULL PRIMARY KEY,
// --   name VARCHAR(50) NOT NULL
// --
// -- Write a query that select all distinct pet names.
// -- INSERT INTO dogs(id, name) values(1, 'Lola');
// -- INSERT INTO dogs(id, name) values(2, 'Bella');
// -- INSERT INTO cats(id, name) values(1, 'Lola');
// -- INSERT INTO cats(id, name) values(2, 'Kitty');
// --
// -- Expected output (in any order):
// -- name
// -- -----
// -- Bella
// -- Kitty
// -- Lola

SELECT DISTINCT name FROM dogs UNION SELECT DISTINCT name FROM cats;

// -- App usage data are kept in the following table:
// --
// -- TABLE sessions
// --   id INTEGER PRIMARY KEY,
// --   userId INTEGER NOT NULL,
// --   duration DECIMAL NOT NULL
// --
// -- Write a query that selects userId and average session duration for each user who has more than one session.

// -- Suggested testing environment:
// -- http://sqlite.online/

// -- Example case create statement:
// -- CREATE TABLE sessions (
// --   id INTEGER NOT NULL PRIMARY KEY,
// --   userId INTEGER NOT NULL,
// --   duration DECIMAL NOT NULL
// -- );
// --
// -- INSERT INTO sessions(id, userId, duration) VALUES(1, 1, 10);
// -- INSERT INTO sessions(id, userId, duration) VALUES(2, 2, 18);
// -- INSERT INTO sessions(id, userId, duration) VALUES(3, 1, 14);
// --
// -- Expected output:
// -- UserId  AverageDuration
// -- -----------------------
// -- 1       12

SELECT userId, avg (duration) FROM sessions GROUP BY userId HAVING COUNT(userId) > 1;

//Each item in a web shop belongs to a seller. To ensure service quality, each seller has a rating.
// --
// -- The data are kept in the following two tables:
// --
// -- TABLE sellers
// --   id INTEGER PRIMARY KEY,
// --   name VARCHAR(30) NOT NULL,
// --   rating INTEGER NOT NULL
// --
// -- TABLE items
// --   id INTEGER PRIMARY KEY,
// --   name VARCHAR(30) NOT NULL,
// --   sellerId INTEGER REFERENCES sellers(id)
// --
// -- Write a query that selects the item name and the name of its seller for each item that belongs to a seller with a rating greater than 4.

SELECT items.name, sellers.name FROM items
INNER JOIN sellers ON items.sellerId = sellers.id WHERE sellers.rating > 4;

// -- The following data definition defines an organization's employee hierarchy.
// --
// -- An employee is a manager if any other employee has their managerId set to the first employees id. 
//An employee who is a manager may or may not also have a manager.
// --
// -- TABLE employees
// --   id INTEGER NOT NULL PRIMARY KEY
// --   managerId INTEGER REFERENCES employees(id)
// --   name VARCHAR(30) NOT NULL
// --
// -- Write a query that selects the names of employees who are not managers.

SELECT name FROM employees
WHERE id NOT IN (
    SELECT e1.id FROM employees as e1 JOIN employees as e2 on e1.id = e2.managerId
);


// -- The following two tables are used to define users and their respective roles:
// --
// -- TABLE users
// --   id INTEGER NOT NULL PRIMARY KEY,
// --   userName VARCHAR(50) NOT NULL
// --
// -- TABLE roles
// --   id INTEGER NOT NULL PRIMARY KEY,
// --   role VARCHAR(20) NOT NULL
// --
// -- The users_roles table should contain the mapping between each user and their roles. Each user can have many roles, and each role can have many users.
// --
// -- Modify the provided SQLite create table statement so that:
// --
// --     Only users from the users table can exist within users_roles.
// --     Only roles from the roles table can exist within users_roles.
// --     A user can only have a specific role once.

CREATE TABLE users_roles (
  userId INTEGER not null,
  roleId INTEGER not null,
  foreign key (userId) references users(id),
  foreign key (roleId) references roles(id),
  unique (userId, roleId)
);
///////////////////////////
CREATE PROCEDURE insertUser(
    IN type VARCHAR(50),
    IN email VARCHAR(50)
)
BEGIN
    INSERT INTO users(email,userTypeId) VALUES (email, (SELECT id FROM userTypes WHERE userTypes.type = type));
END

////////////////
Trigger item_delete AFTER DELETE item ROW item_archive(name) OLD.name

//Items List
CREATE PROCEDURE ItemsBought (@date DATE) AS
BEGIN
    SELECT DAY(dateBought) as day, MONTH(dateBought) as month, name FROM items 
    WHERE dateBought >= @date AND dateBought <= DATEADD(month, 1, @date);
END;

//PArse MEssage
CREATE PROCEDURE ParseMessages AS
BEGIN

  INSERT INTO notifications (id, message)
  SELECT id, data
  FROM messages
  WHERE type = 'notification';
  
  INSERT INTO alerts (id, shortMessage)
  SELECT id, SUBSTRING(data, 1, 15)
  FROM messages
  WHERE type = 'alert';
END;


//Question Variation
CREATE PROCEDURE findLatestVersion(
    IN questionId INTEGER
)
BEGIN
  SELECT childId FROM questions WHERE questionId = questions.id;
END

//Regional Sales COmparison
with SalesAvg as (
  select Regions.name as rgn, 
    CASE WHEN SUM(IFNULL(SL.amount,0)) = 0 THEN 0                    /*region with no sales returning 0*/
    ELSE  SUM(IFNULL(SL.amount,0)) / COUNT(DISTINCT E.id) END as average             
/*distinct employee count gives the correct value for number of employees in ther region.*/
  from regions R
    left join states S on R.id = S.regionId
    left join employees E on S.id = E.stateId
    left join sales SL on E.id = SL.employeeId
  group by R.Id, R.name
) 
select 
  rgn, 
  average,
  (select max(average) from SalesAvg)- average as difference        /*highest average sales -region average*/
from SalesAvg
group by rgn

//last activity
last_activity DATE_ADD create_date
