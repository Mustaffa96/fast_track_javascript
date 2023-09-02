/* The code provided is a JavaScript code snippet that simulates asynchronous operations using setTimeout and callbacks. */

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];
/* an array posts is defined, which contains two objects, each representing a post with a title and a body. */


// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

/* These functions are responsible for adding new posts to the posts array and displaying the posts on the web page, respectively. */

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}
/* createPost function:

* It takes two parameters: post (representing a new post to be added) and callback (a function to be executed after the new post is pushed into the posts array).
* Inside the setTimeout function, it pushes the post object into the posts array.
* After pushing the post, it calls the callback function. This ensures that the getPosts function is executed after a delay of 2 seconds (2000 milliseconds). */

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
/* getPosts function:

* It uses setTimeout to simulate an asynchronous delay of 1 second (1000 milliseconds).
* Inside the timeout callback function, it creates an HTML string by iterating over the posts array and generating an <li> element for each post's title.
* Finally, it sets the innerHTML of the document's body to the generated HTML string, effectively displaying the list of posts on the web page. */

/* Initially, there were two versions of the createPost and getPosts functions. In the commented-out code, there were no callback functions, so the timing of these functions was not synchronized. 
However, in the active code, the createPost function accepts a callback function as its second argument. */

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
/* the createPost function is called with an object representing a new post ({title: 'Post Three', body: 'This is post three'}) and the getPosts function as its callback. 
This means that after a 2-second delay, the new post will be added to the posts array, and then the getPosts function will be called to display all posts on the web page. */

/* So, in summary, this code demonstrates asynchronous behavior in JavaScript using setTimeout and callbacks. 
It adds a new post to the posts array after a 2-second delay and then displays all posts on the web page after a 1-second delay, ensuring that the posts are retrieved and displayed asynchronously. */