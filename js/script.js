const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodoElement: '',
            todoList : [
                {
                    itemID: 2,
                    text: 'Dublin',
                    done: false,
                },
                {
                    itemID: 3,
                    text: 'Vienna',
                    done: true,
                },
                {
                    itemID: 1,
                    text: 'Tokyo',
                    done: false,
                },
                {
                    itemID: 5,
                    text: 'Berlin',
                    done: false,
                },
                {
                    itemID: 7,
                    text:'Antananarivo',
                    done: true,
                }
            ],
        }
    },
    methods: {
        addNewTodoItem(newElement){
            newElement = newElement.trim();
            const beatifiedElement = this.stringBeautifier(newElement);

            if (newElement.length > 3 ){
                this.newTodoElement = '';
                this.todoList.push({
                    itemID: this.todoList[this.todoList.length-1].itemID + 1 ,
                    text: beatifiedElement,
                    done: false
                });
            }
            else
                console.error('Cannot insert an item which is not a capital city');
        },

        stringBeautifier(rawString){
            rawString = rawString.trim().toLowerCase();
            return rawString.charAt(0).toUpperCase() + rawString.slice(1);
        },

        removeTodoItem(IDofElement){
            const indexToBeRemoved = this.todoList.findIndex( element => element.itemID === IDofElement);
            this.todoList.splice(indexToBeRemoved, 1);
        },

        interactWithElement(indexToBeStruck){
            this.todoList[indexToBeStruck].done = !this.todoList[indexToBeStruck].done;
        }
    },
}).mount('#app');