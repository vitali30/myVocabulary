const router = {

    rout: {
        '': () => {
            console.log('empty rout')
        },
        '#one': () => {
            console.log('one rout')
        },
        '#two': async () => {
            console.log('two rout')
        },
        '#three': (user) => {
            console.log('three rout')
        },
        '#four': () => {
            console.log('four rout')
        },
    },

    hideOneUser() {
        console.log('hideOneUser')
    },

    clearUserList() {
        console.log('clearUserList')
    },

    openFeed() {
        console.log('openFeed')
    },

    closeFeed() {
        console.log('closeFeed')
    },

 
    hideGreeting() {
        console.log('hideGreeting')
    },

    closeUser() {
        console.log('closeUser')
    },


    addListeners() {
        // window.onhashchange = () => this.checkHash();
        // document.addEventListener("DOMContentLoaded", () => this.checkHash());
        this.rout[location.hash]()
    },

    // checkHash() {
    //     if(LOGIN_REG_EXP.test(location.hash)) {
    //         this.rout['#entered/members'](location.hash.match(ROUTE_EXP)[0])
    //     }else{
    //         this.rout[location.hash]();
    //     }
    // }
}

export default router