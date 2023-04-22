---
title: 'Everthing about JSX'
subtitle: 'Understanding JSX in depth'
date: '2023-04-22'
image: 'https://images.unsplash.com/photo-1587226513115-f1e3439f1a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80'
---

***One of the core concepts of React.***

# **What is JSX?**

> JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.

```jsx
const jsx = <h1>This is JSX</h1>
```

This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.

So to convert it to browser-understandable JavaScript code, we use a tool like [Babel](https://babeljs.io/) which is a JavaScript compiler/transpiler.

JSX produces React “elements”.

```jsx
React.createElement("h1", null, "This is JSX");
```

Every JSX is converted into React.createElement() function by Transpiler/compiler like Babel and browser can understand this.

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

> Knowing how to convert JSX to `React.createElement` is very important as a React developer (it's also a popular interview question).

### **What is the React.createElement Function?**

Every JSX is converted to the `React.createElement` function call that the browser understands.

The `React.createElement` has the following syntax:

```jsx
React.createElement(type, [props], [...children])
```

Let’s look at the parameters of the `createElement` function.

* **type** can be an HTML tag like h1, div or it can be a React component
    
* **props** are the attributes you want the element to have
    
* **children** contain other HTML tags or can be a component
    

The `React.createElement` call will also be converted to the object representation like this:

```jsx
{
 type: 'h1',
 props: {
   children: 'This is JSX'
 }
}
```

## Embedding Expressions in JSX

In the example below, we declare a variable called `name` and then use it inside JSX by wrapping it in curly braces:

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

You can put any valid [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) inside the curly braces in JSX.

> Since JSX is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.
> 
> For example, `class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`.

## **JSX Also Prevents Injection Attacks**

### What is Injection Attacks

This type of attack allows an attacker to inject code into a program or query or inject malware onto a computer to execute remote commands that can read or modify a database, or change data on a website.

Cross-site scripting (XSS) is a type of security vulnerability that occurs when an attacker injects malicious code into a legitimate website. The malicious code is typically in the form of a script, such as JavaScript, VBScript, or HTML, which is then executed by the victim's browser. This can allow the attacker to access sensitive information, such as passwords and credit card numbers, or manipulate the website’s content and appearance. XSS can also be used to redirect the victim to malicious websites.

React DOM escapes any values embedded in JSX before rendering them to prevent XSS (cross-site scripting) attacks. This means that any values that are inserted into the JSX code are converted to strings before they are rendered, thus ensuring that nothing malicious can be injected into the application.