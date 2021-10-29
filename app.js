const app = Vue.createApp({
   data() {
     return {
       userHeart: 100,
       monsterHeart: 100,
       userDamage: 10,
       monsterDamage: 20,
       isFighting: false,
     
     };
   },
   methods: {
     userAttack() {
       this.isFighting = true
       this.userDamage = Math.floor(Math.random() * 20) + 10
       this.monsterHeart -= this.userDamage 
       console.log('user: '+this.userDamage);
       setTimeout(() => {
         this.monsterAttack();
       }, 500)
     },
     userBuff() {
      setTimeout(() => {
         this.userHeart += 10
      }, 500)
    },


     monsterAttack() {
      this.monsterDamage = Math.floor(Math.random() * 20) + 10
      console.log('monster: '+this.monsterDamage);
       this.userHeart -= this.monsterDamage
       this.isFighting = false
     },
      
   },
   computed: {
      headleEnd1(){
      if(this.monsterHeart == 0) {
         return true
      }
      },
      headleEnd2(){
         if(this.userHeart <= 0) {
            return true
         }
         }
   }
 });
 
 app.mount('#app');