function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        attackMonster() {
            // increment round
            this.currentRound++;
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
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    },
});

app.mount('#game');