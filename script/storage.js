'use strict';

const storage = {
    set: (name, value) => localStorage.setItem(name, JSON.stringify(value)),
    get: (name) => JSON.parse(localStorage.getItem(name)),
}