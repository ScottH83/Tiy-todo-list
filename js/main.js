(function() {
    "use strict";

    $(document).ready(() => {
        const toDoList = function() {
            function bindEvents() {
                removeTaskItem();
                checkCompletedTask();
                listAllTasks();
                activeTasks();
                allCompletedTasks();
                clearAllCompletedTasks();
                editTask();
            }
            // shows both completed and active tasks
            function listAllTasks() {
                $('.show-all-active').on('click', function() {
                    event.preventDefault;
                    $('.new-item').removeClass('hide');
                });
            }
            // shows active tasks
            function activeTasks() {
                $('.show-active').on('click', function() {
                    event.preventDefault;
                    $('.new-item').removeClass('hide');
                    $('.new-item.completed').addClass('hide');
                });
            }
            // shows all completed tasks
            function allCompletedTasks() {
                $('.show-completed').on('click', function() {
                    event.preventDefault;
                    $('.new-item').addClass('hide');
                    $('.new-item.completed').removeClass('hide');
                });
            }
            // Deletes completed Tasks
            function clearAllCompletedTasks() {
                $('.clear').on('click', function() {
                    event.preventDefault;
                    $('.new-item.completed').remove();
                });
            }
            // Marks task as complete
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
            // counts number of active tasks
            function taskCounter() {
                let count = $('.new-item').not('.completed').length;
                $('.incomplete-items').text(count);
            }
            // makes it possible to edit a task
            function editTask() {
                $('.items').on('click', function() {
                    $('.new-item p').attr('contentEditable', 'true');

                    console.log('in');
                });

            }

            function taskData() {
                $('form').on('submit', function() {
                    event.preventDefault();
                    let newtask = $('.new-todo').val();
                    console.log(newtask);
                    buildTemplate(newtask);
                    this.reset();
                    taskCounter();
                });
            }

            function buildTemplate(task) {
                const source = $('#home-template').html();
                const template = Handlebars.compile(source);
                const context = {
                    task: task
                };
                const html = template(context);
                $('.items').prepend(html);
                $('.new-item').removeClass('hide');
            }

            function init() {
                taskData();
                bindEvents();
            }
            return {
                init: init
            };
        };
        const todo = toDoList();
        todo.init();
    });

})();
