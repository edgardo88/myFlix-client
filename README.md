<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Documentation</title>
  <link rel="icon" type="image/png" href=" img/film.png" />
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="dist/css-minified.css">
</head>

<body>
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <title>MyFlix Movie App</title>
    <link rel="stylesheet" type="text/css" href="/css/styles.css">
  </head>

<body>
  <div>
  <h2>READme Documentation</h2>
        <p>
        Build a movie client-side app with React as Front-End and using a REST API as Back-End.</p>
  <h2>Build With:</h2>
  <p>
        React Redux React Bootstrap!</p>


  <h1>Movie API</h1>
    <h2>Objective</h2>
        <p>
        To build the server-side component of a “movies” web application. The web
        application will provide users with access to information about different
        movies, directors, and genres. Users will be able to sign up, update their
        personal information, and create a list of their favorite movies.</p>

    <h2>Features</h2>
        <div>
            <li>Return a list of ALL movies to the user</li>
            <li>Return data (description, genre, director, image URL, whether it's featured or not) about a single movie by title to the user</li>
            <li>Return data about a genre (description) by name/title</li>
            <li>Return data about a director (bio, birth year, death year) by name</li>
            <li>Allow new users to register</li>
            <li>Allow users to update their user info</li>
            <li>Allow users to add a movie to their list of favorites</li>
            <li>Allow users to remove a movie from their list of favorites</li>
            <li>Allow existing users to deregister.</li>
        </div>
    </div> <br>

    <h2>API Endpoint Documentation</h2>

    <table class="table">
      <div>
        <tr>
            <th>Business Logic</th>
            <th>URL</th>
            <th>HTTP Method</th>
            <th>Query Parameters</th>
            <th>Request Body Data Format</th>
            <th>Response Body Data Format</th>
        </tr>
      </div>

     <tbody>   
      <tr>
          <td>Returns a list of all movies</td>
          <td>/movies</td>
          <td>GET</td>
          <td>-</td>
          <td>-</td>
          <td>A JSON object holding data about all the movies</td>
      </tr>

      <tr>
        <td>Returns data about single movie by title</td>
        <td>/movies/:title</td>
        <td>GET</td>
        <td>:title</td>
        <td>-</td>
        <td>A JSON object holding data about a single movie</td>
      </tr>

      <tr>
        <td>Returns data about a genre by title</td>
        <td>/movies/genre/:genreName</td>
        <td>GET</td>
        <td>:genreName</td>
        <td>-</td>
        <td>A JSON object holding data about a specific genre of movie</td>
      </tr>

      <tr>
        <td>Returns data about a director by name</td>
        <td>/movies/director/:directorName</td>
        <td>GET</td>
        <td>:directorName</td>
        <td>-</td>
        <td>A JSON object holding data about a specific director</td>
      </tr>

      <tr>
        <td>Allows new users to register</td>
        <td>/users</td>
        <td>POST</td>
        <td>-</td>
        <td>A JSON object holding data about the user to add, structured like: { "name" : "John" }</td>
        <td>A JSON object holding data about the user that was added</td>
      </tr>

      

      <tr>
        <td>get all users</td>
        <td>/users</td>
        <td>READ</td>
        <td>-</td>
        <td>A JSON object holding data about the user data</td>
      </tr>

      <tr>
        <td>Allows users to update their user info</td>
        <td>/users/:id</td>
        <td>PUT</td>
        <td>:id</td>
        <td>-</td>
        <td>A JSON object holding data about the updated user information</td>
      </tr>

      <tr>
        <td>Allows users to add a movie to their favourites</td>
        <td>/users/:Username/movies/:MovieID</td>
        <td>POST</td>
        <td>:Username, :MovieID</td>
        <td>-</td>
        <td>A JSON object holding data about the user and the movie that was added</td>
      </tr>

      <tr>
        <td>Allows users to remove a movie from their favourites</td>
        <td>/users/:id/:movieTitle</td>
        <td>DELETE</td>
        <td>:id, :movieTitle</td>
        <td>-</td>
        <td>A JSON object holding data about the user and the movie that was removed</td>
      </tr>

      <tr>
        <td>Allows existing users to deregister</td>
        <td>/users/:id</td>
        <td>DELETE</td>
        <td>:id</td>
        <td>-</td>
        <td>A text message indicating whether the user has successfully deregistered</td>
      </tr>
     </tbody>
     </table>
</body>
</html>


  

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <script src="./dist/min.js"></script>
  <script src="scripts.min"></script>
  <script src="fetch.umd.js"></script>
  <script src="js-promise-polyfill.js"></script>
  <script src="js/scripts.js"></script>

</body>

</html>