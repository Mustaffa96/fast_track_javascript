// WINDOW METHODS / OBJECTS / PROPERTIES

//window.console.log(123);

// Alert
// window.alert("Hello World");
// alert("Hello World"); //both are working

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if (confirm("Are you sure?")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = "https://google.com";

// Reload
// window.location.reload();

// History

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
