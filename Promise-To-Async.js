"use strict";

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loginUser(id, password) {
    if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
    ) {
        await delay(2000);
        return id;
    }  else {
        throw new Error("not found");
    }
}

async function getRoles(user) {
    if (user === "ellie") {
        await delay(1000);
        return { name: "ellie", role: "admin" };
    } else {
        throw new Error("no access");
    }
}

const id = prompt("enter your id");
const password = prompt("enter your password");
loginUser(id, password)
    .then(getRoles)
    .then((user) => alert(`Hello ${user.name}, you have an ${user.role} role.`))
    .catch(console.log);
