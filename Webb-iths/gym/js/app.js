const app = new Vue({
    el: '#app',
    data: {
        meddelande: 'Välkommen till ditt gymschema!',
        newExercise: {
            text: '',
            done: false
        },
        exercises: [
            { text: 'Ben & mage', done: false },
            { text: 'Rygg & biceps', done: false },
            { text: 'Axlar & triceps', done: false }
        ],
        userName: '',  // Ny variabel för användarens namn
        loggedIn: false // Ny variabel för att kontrollera inloggning
    },
    methods: {
        addExercise: function () {
            if (this.newExercise.text.trim() !== '') {
                this.exercises.push({
                    text: this.newExercise.text,
                    done: false
                });
                this.newExercise.text = '';
            }
        },
        removeExercise: function (index) {
            this.exercises.splice(index, 1);
        },
        logIn: function () {
            // Kontrollera att användaren har angett ett namn
            if (this.userName.trim() !== '') {
                this.loggedIn = true; // Sätt loggedIn till true
            } else {
                alert("Vänligen ange ditt namn för att fortsätta.");
            }
        },
        logOut: function () {
            this.loggedIn = false; // Sätt loggedIn till false för att logga ut
            this.userName = ''; // Rensa namnet
        }
    }
});