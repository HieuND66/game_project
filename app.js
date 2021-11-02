
const app = Vue.createApp({
  data() {
    return {
      userHeart: 100,
      monsterHeart: 100,
      userDamage: 10,
      monsterDamage: 20,
      isFighting: false,
      isActiveBubble: false,
      animate: false,
      round: 0,
      specialAttack: false,
    };
  },
  methods: {
    startNewGame() {
      this.userHeart = 100;
      this.monsterHeart = 100;
      this.winner = null;
      this.round = 0;
    },
    userAttack() {
      this.round++;
      this.isFighting = true
      this.userDamage = Math.floor(Math.random() * 20) + 10
      this.monsterHeart -= this.userDamage 
      console.log('user: '+this.userDamage);
      
     this.animate = false; 
      setTimeout(() => {
        this.monsterAttack();
      }, 500)
    },
    userBuff() {
      this.round++;
      this.healHeart = 25
      this.isActiveBubble = true;  //Bat animation Heal
      setTimeout(() => {
        this.isActiveBubble = false;
      },500); //Tat animation Heal
      if(this.userHeart + this.healHeart > 100) {
        this.userHeart = 100;
      } else {
        setTimeout(() => {
          this.userHeart += this.healHeart;
        }, 500);
      }
      this.healAnimate = false;
      setTimeout(() => {
        this.monsterAttack();
      }, 500)
    },


    monsterAttack() {
      this.round++;
     this.monsterDamage = Math.floor(Math.random() * 20) + 10
     console.log('monster: '+this.monsterDamage);
     this.animate = true;
      this.userHeart -= this.monsterDamage
      this.isFighting = false
    },
    specialAttackMonster() {
      this.round++;
      this.monsterHeart -= 30;
      this.isFighting = true;
      this.specialAttack = true,
      setTimeout(() => {
        this.monsterAttack();
      }, 2000);
    },
  },
  computed: {
    canUseBuff() {
      return this.round < 1 
    },
    canUseSpecialAttack() {
      return this.round % 4 == 0;
    },
     headleEnd1(){
     if(this.monsterHeart <= 0) {

       this.monsterHeart = 0;
        return true
     }
     },
     headleEnd2(){
        if(this.userHeart <= 0) {
         
         this.userHeart = 0;
           return true
        }
        },
        handlebtn(){
         if(this.userHeart <= 0 || this.monsterHeart <= 0) {
           return false
        }else{
         return true
        }
        }
  }
});

app.mount('#app');