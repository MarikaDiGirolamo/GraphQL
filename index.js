const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const db = require("./util/database.js")

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    products: String
  }
`)

//The root provides a resolver function for each API endpoint
const root = {
  products: () => {
    return "Products List!"
  },
}

const app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
// app.use("/", (req, res) =>{
//     res.send("<h1>Hello There</h1>");
// } );
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")

db.execute("SELECT * FROM STUDENTS") .then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});