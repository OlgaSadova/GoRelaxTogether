let state = {
    profilePage: {
        
        posts: [
            {id: 1, message: 'What do you like to do?', likesCount: 10, dontLikeCount: 0}, 
            {id: 2, message: 'I like swimming!What about you?', likesCount: 70, dontLikeCount: 1},
            {id: 3, message: 'I hate swimming!What about you?', likesCount: 0, dontLikeCount: 1},
            {id: 4, message: 'I like swimming!What about you?', likesCount: 70, dontLikeCount: 1},
          ]
  
     
    },

    dialogsPage: {
        dialogs: [{id: 1, name: 'Olga'}, 
        {id: 2, name: 'Sergiy'},
        {id: 3, name: 'Mira'},
        {id: 4, name: 'Milana'},
        {id: 5, name: 'Lina'}],

        messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'What do you like to do?'},
            {id: 3, message: 'I love hiking!'},
            {id: 4, message: 'Hi, Me too'},
            {id: 5, message: 'I hate sport'}]
    
    }
    
    }
    export default state;