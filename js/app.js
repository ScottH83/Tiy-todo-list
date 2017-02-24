(function() {
    "use strict";
    $(document).ready(() => {

        const toDoList = function() {

            function bindEvents() {
                checkTask();
                deleteTask();
                showAllTask();
                clearTask();
                activeTask();
                completeTask();
            }

            function checkTask() {
                $('.items').on('click', '.check', function() {
                    event.preventDefault();
                    $(this).parents('.list-item').addClass('completed');
                    tasks();
                });
            }

            function deleteTask() {
                $('.items').on('click', '.delete', function() {
                    event.preventDefault();
                    $(this).parents('.list-item').remove();
                    tasks();
                });
            }

            function showAllTask() {
                $('.show-all').on('click', function() {
                    $('.items li').removeClass('hide');
                    $(this).parents('li').addClass('active');
                    tasks();
                });

            }

            function clearTask() {
                $('button').filter('.clear').on('click', function() {
                    $('.items li.completed').remove();
                    tasks();
                });
            }

            function activeTask() {
                $('.show-active').on('click', function() {
                    $('.items li').removeClass('hide');
                    $('.items li.completed').addClass('hide');
                    tasks();
                });
            }

            function completeTask() {
                $('.show-completed').on('click', function() {
                    $('.items li').addClass('hide');
                    $('.items li.completed').removeClass('hide');
                    tasks();
                });
            }

            function getFormData() {
                $('form').on('submit', function() {
                    event.preventDefault();
                    let newTask = $('.new-todo').val();
                    console.log(newTask);
                    buildTemplate(newTask);
                    this.reset();
                    // tasks();
                });
            }

            function buildTemplate(task) {
                const source = $('#home-template').html();
                const template = Handlebars.compile(source);
                const context = {
                    task: task
                };
                const html = template(context);
                displayTask(html);
                $('li').removeClass('hide');

            }

            function displayTask(task) {
                $('.items').prepend(task);

            }

            function tasks() {
                let count = $('.list-item').not('.completed').length;
                console.log(count);
                $('.incomplete-items').text(count);
            }

            function init() {
                bindEvents();
                displayTask();
                getFormData();
            }
            return {
                init: init
            };

        };
        const todo = toDoList();
        todo.init();
    });

})();
