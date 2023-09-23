---
title: 'The Event Loop: JavaScript Traffic Cop for Asynchronous Tasks'
subtitle: 'Demystifying the Event Loop in JavaScript'
date: '2023-09-23'
image: 'https://images.unsplash.com/photo-1577720643360-00432b40139c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80'
---

JavaScript is a programming language known for its single-threaded, synchronous execution. This means it processes one task in a specified order at a time. The JavaScript engine contains a call stack, which keeps track of the execution context, including global and local contexts.

Call Stack is responsible for the execution of the program.

There is only one call stack in the JS engine which makes it a **synchronous single-threaded language**, which means, it can execute one line at a time in a specified order.

But the above language was only partially true. JS is a synchronous single-threaded language but it does support asynchronous programming how?

So let's deduce this by implementing a setTimeout function.

```jsx
setTimeout(function(){
	console.log("Hello World")
}, 1000);

console.log("End")
```

The output of the above snippet is:

```jsx
End
Hello World
```

End will be printed first and then Hello World will be printed after 1 sec of delay or 1000 ms of delay.

But since JS is a synchronous programming language, it should have waited for 1 sec & then printed Hello World and then End should be printed right? Well, that does not happen instead End is printed first, and then Hello World.

Here’s one thing for us to remember: “ JS waits for none. ”

and that’s what happened here.

JS does not wait for the setTimeout function instead it continues its execution after the setTimeout portion of the code.

Let’s see what happens in our call stack:

* First Global execution context will be put into the call stack and line-by-line execution starts.
    
* setTimeout function is pushed into a stack for execution.
    
* setTimeout function magically disappears from the call stack.
    
* console.log() is pushed and End is logged in the console.
    
* After 1 sec, the setTimeout function is again inserted into the call stack and then the callback function is pushed to the call stack and executed and Hello World is printed in the console.
    

### To understand the magic, we need to understand **Web APIS**

What if i tell you that **setTimeout** is not a JS built-in function instead this function is provided to us by the browser in which JS is executed. Similar to setTimeout there are many important functionalities like - Local storage, Geolocation access, console, location and many others. These functionalities are known as **Web APIs**.

So lets continue with our example, Now we discussed that setTimeout function disappears from the call stack. So where does it goes? Well, the web apis takes it along with its call back function and a timer starts for 1 sec inside web apis.

As soon as timer ends, the call back function needs to execute for this we need call back queue and event loop.

### Callback Queue

The callback function and its associated task are placed in a data structure known as the "Callback Queue." It's essentially a queue where tasks (in this case, the callback function) wait to be executed when the call stack is empty.

So, after the 1000 milliseconds have passed, the callback function for `setTimeout` is added to the Callback Queue.

### **Event Loop**

The Event Loop is a crucial part of how asynchronous operations work in JavaScript. Its job is to continuously check the Call Stack and the Callback Queue to see if there are any tasks waiting to be executed.

Here's how the Event Loop works:

1. It checks if the Call Stack is empty. If the Call Stack is empty, it looks at the Callback Queue.
    
2. If there is a task (callback function) in the Callback Queue, the Event Loop moves it to the Call Stack for execution.
    
3. The task is executed in the Call Stack.
    
4. If there are more tasks in the Callback Queue, the Event Loop repeats the process, moving each task to the Call Stack one by one.
    

This process continues indefinitely, allowing JavaScript to handle asynchronous operations without blocking the main thread. As soon as a task in the Callback Queue is executed, it may trigger additional asynchronous tasks, and the Event Loop ensures they are processed in the correct order.

So, in the case of your `setTimeout` example:

1. The `setTimeout` function schedules the callback function to be executed after 1000 milliseconds but doesn't block the main thread.
    
2. The main thread continues executing the next line (`console.log("End")`) and prints "End" immediately.
    
3. After 1000 milliseconds, the callback function is moved from the Callback Queue to the Call Stack by the Event Loop.
    
4. The callback function (`console.log("Hello World")`) is executed, and "Hello World" is printed to the console.
    

**References:** [https://www.youtube.com/watch?v=8zKuNo4ay8E](https://www.youtube.com/watch?v=8zKuNo4ay8E), [https://www.youtube.com/watch?v=8aGhZQkoFbQ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)