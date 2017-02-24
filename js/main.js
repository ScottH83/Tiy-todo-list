// WORKFLOW
// GET FORM TO OUTPUT DATA IN console
// CONNECT THE TEMPLATE USED BY HANDLEBAR WITH JAVASCRIPT
// DISPLAY THE VALUE OF WHATS IN FORM TAG
// REMOVE EACH TASK FROM THE LIST
// MARK TASK AS COMPLETED
// SHOW ALL TASKS
//







// 1. iife = immediately-invoked function expression.
(function() {
    // 2. runs javascript in strict mode.
    "use strict";
    // 3. jquery ready() method = happens when "document" has been loaded. Makes functions available after "document" has been loaded.
    $(document).ready(() => {
        // 4. const = variable in which value cannot change through reassignment and cant be redeclared.
        const toDoList = function() {
            let allTaskArray = [];
            // call functions here that are to be initiated after load of "document"
            function bindEvents() {
                removeTaskItem();
                checkCompletedTask();
                listAllTasks();
                activeTasks();
                allCompletedTasks();
                clearAllCompletedTasks();
                editTask();
            }

            function listAllTasks() {
                $('.show-all-active').on('click', function() {
                    event.preventDefault;
                    $('.new-item').removeClass('hide');
                });
            }

            function activeTasks() {
                $('.show-active').on('click', function() {
                    event.preventDefault;
                    $('.new-item').removeClass('hide');
                    $('.new-item.completed').addClass('hide');
                });
            }

            function allCompletedTasks() {
                $('.show-completed').on('click', function() {
                    event.preventDefault;
                    $('.new-item').addClass('hide');
                    $('.new-item.completed').removeClass('hide');
                });
            }

            function clearAllCompletedTasks() {
                $('.clear').on('click', function() {
                    event.preventDefault;
                    $('.new-item.completed').remove();
                });
            }
            // Checks task as completed
            function checkCompletedTask() {
                $('.items').on('click', '.check', function() {
                    event.preventDefault;
                    $(this).parents('li').toggleClass('completed');
                    taskCounter();
                });
            }
            // Deletes task from list
            function removeTaskItem() {
                $(".items").on('click', '.delete', function() {
                    event.preventDefault;
                    $(this).parents('li').remove();
                    taskCounter();
                });
            }

            function taskCounter() {
                let count = $('.new-item').not('.completed').length;
                $('.incomplete-items').text(count);
            }

            function editTask() {
                $('.items').on('click', function() {
                    $('.new-item p').attr('contentEditable', 'true');

                    console.log('in');
                });

            }

            // 6. write function that allows the input in form to recognize data is being typed in.
            function taskData() {
                // 6a. targets the form tag and on submit sends the data sent in form tag.
                $('form').on('submit', function() {
                    event.preventDefault();
                    // 6b. create variable to get value of whats in the form tag using the .val() method
                    let newtask = $('.new-todo').val();
                    console.log(newtask);
                    // 6c. calling the buildTemplate() method here with newtask as the argument connects the value of the form tag with the template.
                    buildTemplate(newtask);

                    this.reset();
                    taskCounter();
                });
            }
            // 7. function that connects the javascript with html using a handlebar template.
            function buildTemplate(task) {
                // 7a. variable that defines the source of the template in the html.
                const source = $('#home-template').html();
                // 7b. variable that actually connects js and html using the "source" variable as the argument.
                const template = Handlebars.compile(source);
                // 7c. variable that contains the context of the data(task) being handlebarred
                const context = {
                    task: task
                };
                // 7d. variable
                const html = template(context);
                // 7e. calling the displayTask() method here with html as the argument allows the template to be displayed.
                $('.items').prepend(html);
                // displayTask(html);
                $('.new-item').removeClass('hide');
            }
            // 8. function that will display template into .items class using handlebars and.prepend() method.
            // function displayTask(task) {
            //
            // }

            // 5. this init functon runs what ever other functions are called in here on "document" load.
            function init() {
                taskData();
                bindEvents();
            }
            // 6. return = ends function execution and specifies a value to be returnedj to the function caller.
            return {
                init: init
            };
        };
        // 4a. declares the variable "todo" which makes the variable "toDoList" into "todo".
        const todo = toDoList();
        // 5a. takes the variable "todo" and initializes it on "document" load.
        todo.init();
    });








})();
