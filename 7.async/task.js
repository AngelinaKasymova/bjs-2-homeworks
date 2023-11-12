class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    
    addClock(time, callback){
        if(!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find((alarm) => alarm.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({time, callback, canCall:true});
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    }

    getCurrentFormattedTime(){
        let now = new Date;
        let nowHour = now.getHours().toString().padStart(2, '0');
        let nowMinute = now.getMinutes().toString().padStart(2, '0');
        return `${nowHour}:${nowMinute}`;
    }

    start(){
        if(this.intervalId){
            return;
        }

        this.intervalId = setInterval (() => {
            this.alarmCollection.forEach((alarm) => {
                if(this.alarmCollection.alarm.time === getCurrentFormattedTime() && this.alarmCollection.alarm.canCall === true){
                    this.alarmCollection.alarm.canCall = false;
                    this.alarmCollection.alarm.callback();
                }
            })
        }, 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((alarm) => {
            this.alarmCollection.alarm.canCall = true;
        });
    }

    clearAlarms(){
        stop();
        this.alarmCollection = [];
    }

}
