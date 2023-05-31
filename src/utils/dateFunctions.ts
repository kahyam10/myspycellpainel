
export function getFullDate(date:number) {
        try {
            var d = new Date((date));
            var day = d.getDate().toString();
            if (day.length === 1) {
                day = "0" + day;
            }
            var month = (d.getMonth()+1).toString();
            if (month.length === 1) {
                month = "0" + month;
            }
            var year = d.getFullYear().toString();

            var hour = d.getHours().toString();
            if (hour.length === 1) {
                hour = "0" + hour;
            }
            var minute = d.getMinutes().toString();
            if (minute.length === 1) {
                minute = "0" + minute;
            }
            var second = d.getSeconds().toString();
            if (second.length ===1){
                second = "0"+second;
            }
            
            
            var retorno = day+"/"+month+"/"+year+" "+hour+":"+minute+":"+second;
            return retorno;
        } catch (err) {

            return ""
        }
    }
export function getSmallDate(date:any) {
        try {
            
            var d = new Date(date);
            var day = d.getDate().toString();
            if (day.length === 1) {
                day = "0" + day;
            }
            var month = (d.getMonth()+1).toString();
            if (month.length === 1) {
                month = "0" + month;
            }
            var year = d.getFullYear().toString().substring(2,4);

            var hour = d.getHours().toString();
            if (hour.length === 1) {
                hour = "0" + hour;
            }
            var minute = d.getMinutes().toString();
            if (minute.length === 1) {
                minute = "0" + minute;
            }

            
            var retorno = day+"-"+month+"-"+year+" "+hour+":"+minute;
            return retorno;
        } catch (err) {

            return ""
        }
    }
export function getDay(date:any){
    var retorno = getSmallDate(date);
    return retorno.substring(0,2);
}
export function getMoth(date:any){
    var retorno = getSmallDate(date);
    return retorno.substring(3,5);
}
export function getYear(date:any){
    var retorno = getSmallDate(date);
    return retorno.substring(6,8);
}

export function getDate(date:number){
        try {
            var d = new Date(date);
            var day = d.getDate().toString();
            if (day.length === 1) {
                day = "0" + day;
            }
            var month = (d.getMonth()+1).toString();
            if (month.length === 1) {
                month = "0" + month;
            }
            var year = d.getFullYear().toString();

            
            
            var retorno = day+"/"+month+"/"+year;
            return retorno;
        } catch (err) {

            return ""
        }
    }
export function getTime(date:number){
        try {
            var d = new Date((date));
           
            var hour = d.getHours().toString();
            if (hour.length === 1) {
                hour = "0" + hour;
            }
            var minute = d.getMinutes().toString();
            if (minute.length === 1) {
                minute = "0" + minute;
            }
            var second = d.getSeconds().toString();
            if (second.length ===1){
                second = "0"+second;
            }
            
            
            var retorno = hour+":"+minute+":"+second;
            return retorno;
        } catch (err) {

            return ""
        }
    }
export function getSmallTime(date:number){
        try {
            var d = new Date((date));
           
            var hour = d.getHours().toString();
            if (hour.length === 1) {
                hour = "0" + hour;
            }
            var minute = d.getMinutes().toString();
            if (minute.length === 1) {
                minute = "0" + minute;
            }
   
            var retorno = hour+":"+minute;
            return retorno;
        } catch (err) {

            return ""
        }
    }
