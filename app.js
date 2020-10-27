function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    methods: {
        attackMonster() {
            // random between 5 and 12
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            // trigger monster's attack on player
            this.attackPlayer();
        },
        attackPlayer() {
            // random between 5 and 12
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');