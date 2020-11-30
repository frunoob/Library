// ==UserScript==
// @name         河北工程大学教学评估自动评估
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://219.148.85.172:9113/student/teachingEvaluation/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var text = [
        "认真"
        ,"负责"
        ,"讲课水平高"
        ,"课堂生动幽默"
        ,"关心学生"
        ,"讲课慷慨激昂"
        ,"讲课细致"
    ];
    function auto(){
       var  button = document.querySelectorAll(".btn.btn-xs.btn-round.btn-purple");
        for (let i = 0; i < button.length; i++) {
            if (button[i].innerText == "评估") {
                button[i].click();
                setTimeout(() => {
                    var app = document.querySelectorAll(".radio-bj");
                    for (let i = 0; i < app.length; i++) {
                        if (app[i].innerText.includes(") 符合")) {
                            app[i].querySelector(".ace").checked = true;
                        }
                    }
                    var input = document.querySelector(".form-control");
                    for (let i = 0; i < Math.ceil(Math.random()*(text.length))+1; i++) {
                        input.innerHTML=text[Math.floor(Math.random()*(text.length))];
                    }
                    setTimeout(() => {toEvaluation();}, 2000);
                }, 3000);
               
                break;
            }
        }

    }
    
})();