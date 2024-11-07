/* // callback hell  => pyramid of doom

function firstAction(callback) {
  setTimeout(() => {
    console.log("First action completed");
    callback();
  }, 1000);
}

function secondAction(callback) {
  setTimeout(() => {
    console.log("Second action completed");
    callback();
  }, 1000);
}

function thirdAction(callback) {
  setTimeout(() => {
    console.log("Third action completed");
    callback();
  }, 1000);
}

firstAction(() => {
  secondAction(() => {
    thirdAction(() => {
      console.log("All actions are completed");
    });
  });
});
 */

// registration process

function validateUserInput(userData, callback) {
  setTimeout(() => {
    if (userData.username && userData.password) {
      callback(null, true);
    } else {
      callback("Invalid user input");
    }
  }, 1000);
}

function checkUserExists(userData, callback) {
  setTimeout(() => {
    const userExists = false;
    callback(null, userExists);
  }, 1000);
}

function saveNewUser(userData, callback) {
  setTimeout(() => {
    const savedUser = { id: 1, ...userData };
    callback(null, savedUser);
  });
}

function sendWelcomeEmail(user, callback) {
  setTimeout(() => {
    callback(null, "Email sent to " + user.username);
  }, 1000);
}

function registerUser(userData) {
  validateUserInput(userData, (err, isValid) => {
    if (err) {
      console.error("Validation error", err);
    } else if (isValid) {
      checkUserExists(userData, (err, exists) => {
        if (err) {
          console.error("Error checking user existence", err);
        } else if (!exists) {
          saveNewUser(userData, (err, savedUser) => {
            if (err) {
              console.error("Error saving user", err);
            } else {
              sendWelcomeEmail(savedUser, (err, message) => {
                if (err) {
                  console.error("Error sending email", err);
                } else {
                  console.log(message);
                }
              });
            }
          });
        } else {
          console.log("User already exists");
        }
      });
    }
  });
}

const userData = { username: "abc", password: "password123" };

registerUser(userData);

// promises and async await

// asynchronous functionality

//breakfast

/* 
1.toasting bread
2. boiling egg
3. pouring a juice */
