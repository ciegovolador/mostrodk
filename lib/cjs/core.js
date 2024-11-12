"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// core.ts
var core_exports = {};
__export(core_exports, {
  dispute: () => dispute,
  hello: () => hello,
  help: () => help,
  lib: () => lib,
  message: () => message,
  order: () => order,
  rating: () => rating,
  user: () => user
});
module.exports = __toCommonJS(core_exports);
function hello(name2) {
  return `Hello ${name2}! I am the core :)`;
}
function dispute() {
  return `Hello ${name}! I am the core :)`;
}
function lib() {
  return `Hello ${name}! I am the core :)`;
}
function message() {
  return `Hello ${name}! I am the core :)`;
}
function order() {
  return `Hello ${name}! I am the core :)`;
}
function rating() {
  return `Hello ${name}! I am the core :)`;
}
function user() {
  return `Hello ${name}! I am the core :)`;
}
function help(command) {
  let result = "";
  switch (command) {
    case "dispute":
      result = "Handles dispute resolution logic";
      break;
    case "lib":
      result = "Core library utilities";
      break;
    case "message":
      result = "Message handling functionality";
      break;
    case "order":
      result = "Order management system";
      break;
    case "rating":
      result = "User rating implementation";
      break;
    case "user":
      result = "User management functionality";
      break;
    default:
      result = "we don't have that command; Choosea supported one (dispute, lib, message, order. rating, user)";
  }
  return result;
}
