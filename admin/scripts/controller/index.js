class Controller {
    constructor() {
        // this.view = new View();
        // this.model = new Model();
        this.$inputField = document.querySelector('#main_input')
        this.$searchButton = document.querySelector('#search_button')
    }

    addListeners() {
        this.$inputField.addEventListener('input', this.insertInputText);
        this.$searchButton.addEventListener('click', this.testFunction);
        // this.$greetingContainer.onclick = (event) => this.view.startDialog(event);
        // this.$dialog.addEventListener('click', (event) => this.view.closeDialog(event));
        // this.$dialog.addEventListener('click', (event) => this.view.toggleForm(event));
        // this.$logOutApp.onclick = () => {
        //     this.view.switchApp();
        //     localStorage.removeItem('auth');
        //     userFetchs.userEscape();
        // };
        // this.$logInForm.addEventListener('submit', (event) => this.loginSubmit(event));
        // this.$logUpForm.addEventListener('submit', (event) => this.logUpSubmit(event));
        
        // document.addEventListener('click', (event) => this.deleteCurrentMember(event));

        // this.$userSettingsButton.onclick = () => this.settings.open();
    }

    insertInputText(event) {
        console.log(event.target.value)
    }

    async testFunction() {
        console.log(1111)
        const response = await fetch ('https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?q=Hello%20World!&langpair=en%7Cru&de=a%40b.c&onlyprivate=0&mt=1', 
            {
                method: "GET", 
                headers: {
                    "x-rapidapi-key": "8365a0416dmsh34d5eabd4924b5fp18fd2djsn41d97c04d000",
                    "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com"
                }
            }
        );
        const res = await response.json();
        console.log(res)
    }

    // async loginSubmit(event) {                  
    //     event.preventDefault();
    //     const resultOfChecking = await logIn();//{user: "userName", psw: "userPsw"}
    //         if (resultOfChecking) {
    //             const enteringNowUser = await userFetchs.getOneUsersByLogin(resultOfChecking.user);
    //             localStorage.setItem('auth', enteringNowUser[0]._id);//5f745ce138d67b69e463a80e
    //             await userFetchs.userAuth(enteringNowUser[0]._id);
    //             this.enterApp(resultOfChecking);
    //         }
    // }
    
    // async logUpSubmit(event) {
    //     event.preventDefault();
    //     const resultOfChecking = await logUp();
    //     if (resultOfChecking) {
    //         this.view.switchSettingForm()
    //         this.$settingsForm.onsubmit = async (event) => {
    //             event.preventDefault();
    //             const resultSettings = this.model.collectInputs();
    //             this.view.switchSettingForm();
    //             this.view.switchLogForm();
    //             const result = await userFetchs.addOneUser(resultOfChecking, resultSettings) //5f745ce138d67b69e463a80e
    //             if(result) {
    //                 localStorage.setItem('auth', result);
    //                 await userFetchs.userAuth(result);
    //                 this.enterApp(resultOfChecking);
    //             }
    //         }
    //     }
    // }

    // async enterApp(result) {
    //     this.$dialog.close();
    //     this.view.switchApp();
    //     location.hash = `#entered/members/${result.user}`;
    // }

    // async deleteCurrentMember(event) {
    //     if(event.target.classList.contains('member_delete')) {
    //         const result = await userFetchs.deleteUser(event.target.id)
    //         const authUser = localStorage.getItem('auth');
    //         location.hash = result === authUser ? `#` : `#entered/members`;
    //     }
    // }
}

export default Controller