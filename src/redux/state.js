let  rerenderEntireTree = () =>{

}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likesCount: 12 },
            { id: 2, message: 'How are you?', likesCount: 11 },
            { id: 3, message: 'Blablabla', likesCount: 15 },
            { id: 4, message: 'lalalala', likesCount: 10 }
        ],

        newPostText: 'Enter-message'
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

window.state=state;

export const addPost =()=>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.state.profilePage.newPostText='';
    rerenderEntireTree(state);
}


export const updateNewPostText =(newText)=>{
    state.profilePage.newPostText =newText;
    rerenderEntireTree(state);
}

export const subscribe =(observer)=>{
    rerenderEntireTree = observer; //pochitat obrever, publisher-subscriber!!! eto odin iz pattern !!!

}
// store - oop pochitat

export default state;