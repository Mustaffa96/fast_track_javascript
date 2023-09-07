/* This code is an example of asynchronous JavaScript using Promises to manage the timing of various tasks.  */


const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
]; /* An array called posts is defined. It contains two objects, each representing a post with a title and body. */

function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}
/* This function takes an argument post, which represents a new post object. Inside this function, a Promise is created. 
Within the Promise, there's a setTimeout function that simulates a delayed operation (2 seconds in this case). 
During this timeout, the provided post is pushed into the posts array. Then, it checks if error is set to false. 
If it's false, the Promise resolves. 
If it's true, the Promise rejects with an error message. */

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
/* This function also contains a setTimeout function (1 second delay) that simulates a delayed operation. 
Inside this timeout, it iterates over the posts array and constructs an HTML list (<li>) with each post's title. 
Finally, it sets the HTML content of the document.body to display the list. */

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});

/* The createPost({title: 'Post Three', body: 'This is post three'}) function call creates a new post and returns a Promise. 
It's followed by a .then(getPosts) which means that when the createPost Promise resolves (i.e., after the 2-second delay), it will call the getPosts function to display the updated list of posts. */

/* The .catch block is used to handle errors if the Promise is rejected. 
In this case, if there is an error (which is never the case because error is always set to false), it logs an error message to the console. */

/* Here's the execution flow:

createPost is called with a new post object.
Inside createPost, a Promise is created that simulates a 2-second delay and then pushes the new post into the posts array.
Since error is set to false, the Promise resolves.
The .then(getPosts) block is triggered, calling getPosts after the resolution.
getPosts waits for 1 second and then constructs an HTML list of posts, updating the document.body with the list of posts. */