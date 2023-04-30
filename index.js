const { exec } = require('child_process');
const path = require("path")
const express = require("express")
const app = express()


app.use(express.static(path.join(__dirname, "public/")))
app.use(express.static(path.join(__dirname, "pages/")))
app.set("view engine", "ejs"); // set the view engine to EJS



app.get("/content", (req, res) => {
  // Generate some new content
  var content =  Math.random();

  // Send the new content back in the response
  res.send(content.toString());
});

app.get("/", (req,res) => {
  exec('npx tailwindcss -i ./input.css -o ./public/out.css ', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }
});
   const name = "John Doe"; // define some data
  res.render("index", { name }); // render the index.ejs template with the data
  // res.sendFile(path.join("__dirname", "pages/index.html"))
})

app.listen(3000, () => {
  console.log("🚀 Shipping on port 3000")
})