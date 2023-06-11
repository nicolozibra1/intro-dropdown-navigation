import {reactive} from 'vue';

export const store = reactive({

    features: [
        {
            name: 'Todo List',
            icon: 'icon-todo.svg'   
        },
        {
            name: 'Calendar',
            icon: 'icon-calendar.svg'   
        },
        {
            name: 'Reminders',
            icon: 'icon-reminders.svg'   
        },
        {
            name: 'Planning',
            icon: 'icon-planning.svg'   
        }
    ],
    company: [
        {
            name: 'History'
        },
        {
            name: 'Our Team'
        },
        {
            name: 'Blog'
        }
    ]
})