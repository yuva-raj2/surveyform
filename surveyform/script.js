document.addEventListener("readystatechange",(event)=>{
  if(event.target.readystate==="complete"){
      console.log("Complete");
  }
  initApp();
});
const initApp=()=>{
  const survey=document.querySelector(".survey");
  console.log(survey);
  const startbtn=document.querySelector(".start-btn");
  const survey2=document.querySelector(".survey2");
  const survey3=document.querySelector(".survey3");
  const survey4=document.querySelector(".survey4");
  const survey5=document.querySelector(".survey5");
  const survey6=document.querySelector(".survey6");
  const check=document.querySelector(".check");
  const check2=document.querySelector(".check-2");
  const check3=document.querySelector(".check-3");
  const check4=document.querySelector(".check-4");
  const check5=document.querySelector(".check-5");
  const checkone=document.querySelector(".check-one");
  const checktwo=document.querySelector(".check-two");
  const checkthree=document.querySelector(".check-three");
  const checkfour=document.querySelector(".check-four");
  const checkfive=document.querySelector(".check-five");
  const checkone1=document.querySelector(".check-one-1");
  const checktwo1=document.querySelector(".check-two-1");
  const checkthree1=document.querySelector(".check-three-1");
  const checkfour1=document.querySelector(".check-four-1");
  const checkfive1=document.querySelector(".check-five-1");
  const check11=document.querySelector(".check-1-1");
  const check21=document.querySelector(".check-2-1");
  const check31=document.querySelector(".check-3-1");
  const check41=document.querySelector(".check-4-1");
  const check51=document.querySelector(".check-5-1");
  const check61=document.querySelector(".check-6-1");
  const check71=document.querySelector(".check-7-1");
  const check81=document.querySelector(".check-8-1");
  const check91=document.querySelector(".check-9-1");
  const check101=document.querySelector(".check-10-1");
  const prev1=document.querySelector(".prev-1");
  const prev2=document.querySelector(".prev-2");
  const prev3=document.querySelector(".prev-3");
  const prev4=document.querySelector(".prev-4");
  const prev5=document.querySelector(".prev-5");
  const next1=document.querySelector(".next-1");
  const next2=document.querySelector(".next-2");
  const next3=document.querySelector(".next-3");
  const next4=document.querySelector(".next-4");
  const next5=document.querySelector(".next-5");
  const thankyou=document.querySelector(".thankyou");
  startbtn.addEventListener("click",(event)=>{
    startbtn.style.display="none";
    survey2.style.display="flex";
    survey2.style.flexDirection="column";
    survey.style.display="none";
});
  check.addEventListener("click",(event)=>{
    check.style.backgroundColor="red";
    check2.style.backgroundColor="white";
    check3.style.backgroundColor="white";
    check4.style.backgroundColor="white";
    check5.style.backgroundColor="white";
  })
  check2.addEventListener("click",(event)=>{
    check2.style.backgroundColor="red";
    check.style.backgroundColor="white";
    check3.style.backgroundColor="white";
    check4.style.backgroundColor="white";
    check5.style.backgroundColor="white";
  })
  check3.addEventListener("click",(event)=>{
    check3.style.backgroundColor="red";
    check.style.backgroundColor="white";
    check2.style.backgroundColor="white";
    check4.style.backgroundColor="white";
    check5.style.backgroundColor="white";
  })
  check4.addEventListener("click",(event)=>{
    check4.style.backgroundColor="red";
    check.style.backgroundColor="white";
    check2.style.backgroundColor="white";
    check3.style.backgroundColor="white";
    check5.style.backgroundColor="white";
  })
  check5.addEventListener("click",(event)=>{
    check5.style.backgroundColor="red";
    check.style.backgroundColor="white";
    check2.style.backgroundColor="white";
    check3.style.backgroundColor="white";
    check4.style.backgroundColor="white";
  })
  prev1.addEventListener("click",(event)=>{
    survey.style.display="flex";
    survey2.style.display="none";
    startbtn.style.display="flex";
  })
  next1.addEventListener("click",(event)=>{
    survey2.style.display="none";
    survey3.style.display="flex";
    survey3.style.flexDirection="column";
    survey.style.display="none";
  })
  checkone.addEventListener("click",(event)=>{
    checkone.style.backgroundColor="red";
    checktwo.style.backgroundColor="white";
    checkthree.style.backgroundColor="white";
    checkfour.style.backgroundColor="white";
    checkfive.style.backgroundColor="white";
  })
  checktwo.addEventListener("click",(event)=>{
    checktwo.style.backgroundColor="red";
    checkone.style.backgroundColor="white";
    checkthree.style.backgroundColor="white";
    checkfour.style.backgroundColor="white";
    checkfive.style.backgroundColor="white";
  })
  checkthree.addEventListener("click",(event)=>{
    checkthree.style.backgroundColor="red";
    checkone.style.backgroundColor="white";
    checktwo.style.backgroundColor="white";
    checkfour.style.backgroundColor="white";
    checkfive.style.backgroundColor="white";
  })
  checkfour.addEventListener("click",(event)=>{
    checkfour.style.backgroundColor="red";
    checkone.style.backgroundColor="white";
    checktwo.style.backgroundColor="white";
    checkthree.style.backgroundColor="white";
    checkfive.style.backgroundColor="white";
  })
  checkfive.addEventListener("click",(event)=>{
    checkfive.style.backgroundColor="red";
    checkone.style.backgroundColor="white";
    checktwo.style.backgroundColor="white";
    checkthree.style.backgroundColor="white";
    checkfour.style.backgroundColor="white";
  })
  prev2.addEventListener("click",(event)=>{
    survey.style.display="none";
    survey2.style.display="flex";
    survey3.style.display="none";
    startbtn.style.display="none";
  })
  next2.addEventListener("click",(event)=>{
    survey.style.display="none";
    survey2.style.display="none";
    survey3.style.display="none";
    survey4.style.display="flex";
    survey4.style.flexDirection="column";
  })
  checkone1.addEventListener("click",(event)=>{
    checkone1.style.backgroundColor="red";
    checktwo1.style.backgroundColor="white";
    checkthree1.style.backgroundColor="white";
    checkfour1.style.backgroundColor="white";
    checkfive1.style.backgroundColor="white";
  })
  checktwo1.addEventListener("click",(event)=>{
    checktwo1.style.backgroundColor="red";
    checkone1.style.backgroundColor="white";
    checkthree1.style.backgroundColor="white";
    checkfour1.style.backgroundColor="white";
    checkfive1.style.backgroundColor="white";
  })
  checkthree1.addEventListener("click",(event)=>{
    checkthree1.style.backgroundColor="red";
    checkone1.style.backgroundColor="white";
    checktwo1.style.backgroundColor="white";
    checkfour1.style.backgroundColor="white";
    checkfive1.style.backgroundColor="white";
  })
  checkfour1.addEventListener("click",(event)=>{
    checkfour1.style.backgroundColor="red";
    checkone1.style.backgroundColor="white";
    checktwo1.style.backgroundColor="white";
    checkthree1.style.backgroundColor="white";
    checkfive1.style.backgroundColor="white";
  })
  checkfive1.addEventListener("click",(event)=>{
    checkfive1.style.backgroundColor="red";
    checkone1.style.backgroundColor="white";
    checktwo1.style.backgroundColor="white";
    checkthree1.style.backgroundColor="white";
    checkfour1.style.backgroundColor="white";
  })
  prev3.addEventListener("click",(event)=>{
    startbtn.style.display="none";
    survey.style.display="none";
    survey2.style.display="none";
    survey3.style.display="flex";
    survey4.style.display="none";
  });
  next3.addEventListener("click",(event)=>{
    survey.style.display="none";
    survey2.style.display="none";
    survey3.style.display="none";
    survey4.style.display="none";
    survey5.style.display="flex";
    survey5.style.flexDirection="column";
  })
  check11.addEventListener("click",(event)=>{
    check11.style.backgroundColor="red";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check21.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="red";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check31.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="red";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check41.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="red";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check51.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="red";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check61.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="red";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check71.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="red";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check81.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="red";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="white";
  })
  check91.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="red";
    check101.style.backgroundColor="white";
  })
  check101.addEventListener("click",(event)=>{
    check11.style.backgroundColor="white";
    check21.style.backgroundColor="white";
    check31.style.backgroundColor="white";
    check41.style.backgroundColor="white";
    check51.style.backgroundColor="white";
    check61.style.backgroundColor="white";
    check71.style.backgroundColor="white";
    check81.style.backgroundColor="white";
    check91.style.backgroundColor="white";
    check101.style.backgroundColor="red";
  }) 
  prev4.addEventListener("click",(event)=>{
    startbtn.style.display="none";
    survey.style.display="none";
    survey2.style.display="none";
    survey3.style.display="none";
    survey4.style.display="flex";
    survey5.style.display="none";
  });
  next4.addEventListener("click",(event)=>{
    survey.style.display="none";
    survey2.style.display="none";
    survey3.style.display="none";
    survey4.style.display="none";
    survey5.style.display="none";
    survey6.style.display="flex";
    survey6.style.flexDirection="column";
  })
  prev5.addEventListener("click",(event)=>{
    startbtn.style.display="none";
    survey.style.display="none";
    survey2.style.display="none";
    survey3.style.display="none";
    survey4.style.display="none";
    survey5.style.display="flex";
    survey6.style.display="none";
  });
  next4.addEventListener("click",(event)=>{
    survey.style.display="none";
    survey2.style.display="none";
    survey3.style.display="none";
    survey4.style.display="none";
    survey5.style.display="none";
    survey6.style.display="none";
    thankyou.style.display="flex";
  })
  thankyou.addEventListener("click",(event)=>{
    survey.style.display="flex";
    survey2.style.display="none";
    survey3.style.display="none";
    survey4.style.display="none";
    survey5.style.display="none";
    survey6.style.display="none";
    thankyou.style.display="none";
    startbtn.style.display="flex";
  })
}