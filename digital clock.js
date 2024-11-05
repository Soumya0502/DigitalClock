function digitalClock(){
    var dateObj=new Date();
    var hh=dateObj.getHours();
    var mm=dateObj.getMinutes();
    var ss=dateObj.getSeconds();
    var am_pm="Am";
    if(hh>=12){
        am_pm="pm"
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    console.log(hh,mm,ss);
    var dd=dateObj.getDate();
    var mo=dateObj.getMonth();
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    mo=month[mo];
    var yy=dateObj.getFullYear();
    console.log(dd,mo,yy);
    var da=dateObj.getDay();
    var arrImage=["sun","mon","tue","wed","thu","fri","sat"];
    document.querySelector("#bgcontainer").style.backgroundImage=`url(../../asset/images/${arrImage[da]}.jpg)`;
    var day=["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"]
    da=day[da]
    console.log(da);

    if(hh<10){
        hh="0"+hh;
    }
    if(mm<10){
        mm="0"+mm;
    }
    if(ss<10){
        ss="0"+ss;
    }
    if(dd<10){
        dd="0"+dd;
    }


    var time=`${hh}:${mm}`
    document.querySelector("#time").innerHTML=time;
    document.querySelector("#am_pm").innerHTML=am_pm;
    document.querySelector("#sec").innerHTML=ss;


    var dateFormat=`${dd}-${mm}-${yy}`
    document.querySelector("#date").innerHTML=dateFormat;

    document.querySelector("#day").innerHTML=da;

    setTimeout(digitalClock,1000);
}
digitalClock()