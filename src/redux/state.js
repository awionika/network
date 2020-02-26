
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likesCount: 12 },
            { id: 2, message: 'How are you?', likesCount: 11 },
            { id: 3, message: 'Blablabla', likesCount: 15 },
            { id: 4, message: 'lalalala', likesCount: 10 }
        ]
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Freya" },
            { id: 2, name: 'Anna' },
            { id: 3, name: 'Knut' },
            { id: 4, name: 'Bjørn' },
            { id: 5, name: 'Irene' },
            { id: 6, name: 'Andreas' },
            { id: 7, name: 'Glenn' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: "I'm fine. Thanks." },
            { id: 4, message: "It's my first post. Hi everybody!" },
            { id: 5, message: 'Hi. Can you help me, please?' },
            { id: 6, message: 'Please check my post' },
            { id: 7, message: 'Yo' }
        ]
    },
    sideBar:[
        { id: 1, name: "Freya" },
        { id: 2, name: 'Anna' },
        { id: 3, name: 'Knut' },
        { id: 4, name: 'Bjørn' },
        { id: 5, name: 'Irene' },
        { id: 6, name: 'Andreas' },
        { id: 7, name: 'Glenn' }
    ]
}

export default state;