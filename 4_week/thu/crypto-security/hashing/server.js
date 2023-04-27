var bcrypt = require('bcryptjs');

const path = require("path");
const express = require("express");
const session = require("express-session");

// Mock database to store usernames and passwords by username.
const db = {
  test: {
    username: "test",
    password: "test",
  },
  testhashed: {
    username: "testhashed",
    password: "$2a$10$7WK77kJZ0qzrcgOoE3MszOWuPz2bzPueuSCePScbQnkKwCUx2045q",
  },
};

const app = express();

// Set up EJS as the view engine. We'll use this to serve pages from the views/ directory.
// For example, res.render("index") will render views/index.ejs.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Built-in middleware to extract data from req.body.
app.use(express.urlencoded({ extended: false }));

// Set up the session middleware. This will allow us to store data in the user's session.
app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: "shhhh, very secret", // secret key used to sign the session ID cookie
  })
);

// Flash messaging middleware.
// This will allow us to set a message in the session, and then display it on the next
// page. This is useful for displaying error messages or success messages to the user.
app.use((req, res, next) => {
  const { error, success } = req.session;

  // Flush existing session messages
  req.session.error = req.session.success = null;
  res.locals.message = ""; // res.locals is how we store local variables in Express

  if (error) {
    res.locals.message = `<p class="msg error">${error}</p>`;
  }
  if (success) {
    res.locals.message = `<p class="msg success">${success}</p>`;
  }

  next(); // move on to the next middleware
});

// Middleware to restrict access to a route.
// When a user logs in, we store their username in the session. If req.session.username
// doesn't exist, don't call next(). Instead, redirect to the homepage and display an
// error message.
const restrict = (req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    req.session.error =
      "Access denied! Try logging in again or create a new account.";
    res.redirect("/");
  }
};

// The homepage.
app.get("/", (req, res) => {
  res.render("index");
});

// Handle user login.
app.post("/login", (req, res) => {
  // TODO: Get the username and password from form data
  const { username: user, password: pass } = req.body;
  console.log(req.body);
  // TODO: Attempt to retrieve the user from the database
  const existingUser = db[user];
  // TODO: If the user exists, check if the password matches the user's password
  if(existingUser && bcrypt.compareSync(pass, existingUser.password)) {
    // TODO: Log the user in by storing their username in the session
    req.session.username = user;
    // TODO: Display a success message and redirect to /login/success
    req.session.success = "Logged in successfully!";
    res.redirect("/login/success");
  } else {
    // TODO: If the user doesn't exist or the password doesn't match, display an error
    // message and redirect to the homepage
    req.session.error = "Authentication failed, please check your username and password.";
    res.redirect("/");
  }
})

// Handle user registration.
app.post("/register", (req, res) => {
  // TODO: Get the username and password from form data
  const {username, password} = req.body;
  // TODO: Check if username already exists in the database
  if (db[username]) {
    // TODO: If the user already exists, display an error message
    req.session.error = "User with this name already exists."
    res.redirect("/");
  }
  // TODO: If it doesn't, create a new user and store it in the database
  // TODO: Display a success message to the user
  else {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    const newUser = {
      username,
      password: hash
    }
    db[username] = newUser;
    req.session.success = "User registered."
    res.redirect("/");
  }
  // TODO: Either way, redirect to the homepage so they can log in
  console.log(db);
});

// A restricted route that can only be accessed if the user is logged in.
app.get("/login/success", restrict, (req, res) => {
  res.render("login-success", { username: req.session.username });
});

// Destroy the user's session cookie to log them out.
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(8000, () => console.log("Server running on port 8000"));