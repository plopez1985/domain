/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var dominio = [".com", ".es", ".net", ".us", ".cl", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < dominio.length; l++) {
        console.log(
          pronoun[i]
            .concat(adj[j])
            .concat(noun[k])
            .concat(dominio[l])
        );
      }
    }
  }
}
