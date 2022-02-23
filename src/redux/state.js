import { rerenderEntireTree } from "../render";

let state = {

    audioPage: {

    },

    friendsPage: {

    },

    messagesPage: {
        chats: [
            {id: 1, name: "Oleg", avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"},
            {id: 2, name: "Ilya", avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"},
            {id: 3, name: "Vlad", avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"},
            {id: 4, name: "Danil", avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"},
            {id: 5, name: "Kirill", avatar: "https://pbs.twimg.com/media/EZXUzQOXgAMbDm_.jpg"},
          ],
          
        messages: [
            {id: 1, text: "Bonsoir Elliot"},
            {id: 2, text: "Huba-buba"},
            {id: 3, text: "WHO WANTS TO LIVE FOREVER"},
          ],

        messageText: "HELLO"
        },

    newsPage: {

    },

    profilePage: {
        posts: [
            {id: 1, text: "OOOH I'M SO AWESOME!", likes: 10},
            {id: 2, text: "LOOK AT ME! I AM CAT!", likes: 20},
            {id: 3, text: "JUST FOR TEST, I'M STILL A CAT", likes: 30}
          ],
        postText: "just imagine"
        },

    settingsPage: {

    },
}

export let addPost = (postText) =>
{
  let newPost = {
    id: state.profilePage.posts.length - 1,
    text: postText,
    likes: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.postText = '';

  rerenderEntireTree(state);
}

export let updatePostText = (currentPostText) =>
{
  state.profilePage.postText = currentPostText;
  rerenderEntireTree(state);
}

export let updateMessageText = (currentMessageText) => {
  state.messagesPage.messageText = currentMessageText;
  rerenderEntireTree(state);
}

export default state