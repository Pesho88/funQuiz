var wrongAns,correctAns, percentage, rank, pictureSad, musicSad, musicSusp, a1 ,a2, a3, a4, questionNumber,speech, pictureHappy, soundHappy,gamePlaying,remainingQuestions;
function newGame()  {
remainingQuestions=25;
gamePlaying=true;
rank = "Шматка";
correctAns = 0;
wrongAns = 0;
pictureSad =document.querySelector(".sadPic");
pictureHappy=document.querySelector("#happyPic");
musicSad = document.querySelector("#sadSound");
musicSusp = document.querySelector("#suspSound");
soundHappy=document.getElementById("happySound");
pictureSad.style.display="none";
a1=document.getElementById("answer1");
a2=document.getElementById("answer2");
a3=document.getElementById("answer3");
a4=document.getElementById("answer4");
speech = document.querySelector(".speech-bubble");
nextQBtn=document.getElementById("nextQuestion");
pickUpQuestion();
document.getElementById("yes").textContent="Брао е "+rank+":"+correctAns;
document.getElementById("no").textContent="Много слабо е "+rank+":"+wrongAns;
document.getElementById("pro").textContent=percentage+" процента силни отговори!!!";
document.getElementById("rank").textContent="Your rank is:"+rank;
document.getElementById("rankpic").src=rank+".jpg";
}

/*var pressButtonSad = document.querySelector(".buttonSad");
var pressButtonSusp = document.querySelector(".buttonSusp") */

/*pressButtonSad.addEventListener("click", function(){
    pictureSusp.style.display="none";
    pictureSad.style.display="block";
    var number = Math.floor(Math.random()*3+1);
    musicSad.src="sad"+number+".mp3";
    musicSad.play();

})
pressButtonSusp.addEventListener("click", function(){
pictureSad.style.display="none";
pictureSusp.style.display="block";
var number = Math.floor(Math.random()*2+1);
musicSusp.src="susp"+number+".mp3";
musicSusp.play();
}) */
function checkAnswer(answ,corransw)
{
    unactive();
    remainingQuestions-=1;
    var sadPicNr = Math.floor(Math.random()*18+1);
    var sadSnNr = Math.floor(Math.random()*7+1);
    var happyPicNr = Math.floor(Math.random()*17+1);
    var happySnNr = Math.floor(Math.random()*10+1);
    
  if  (answ==corransw)
      {
          soundHappy.src="happy"+happySnNr+".mp3";
          soundHappy.play();  
          pictureHappy.src="happy"+happyPicNr+".jpg"
          pictureHappy.style.display="block";
          document.getElementById("msg").textContent="Уеу дан "+rank;
          correctAns+=1;
      }
  else
      {
          musicSad.src="sad"+sadSnNr+".mp3";
          pictureSad.src="sad"+sadPicNr+".jpg";
          musicSad.play();
          pictureSad.style.display="block";
          document.getElementById("msg").textContent="Дат ис патетик "+rank;
          wrongAns+=1;
      }
    if(correctAns>=5)
        {
                rank = "Слабак";   
                
        }
    if(correctAns>=8)
        {
            rank="Маняче";
        }
    
    if(correctAns>=12)
        {
            rank="Играч";
        }
    
    if(correctAns>=15)
        {
            rank="батка";
        }
    if(correctAns>=18)
        {
            rank="нацепена_батка";
        }
    percentage = Math.round(correctAns*100/(correctAns+wrongAns));
    document.getElementById("yes").textContent="Брао е "+rank+":"+correctAns;
    document.getElementById("no").textContent="Много слабо е "+rank+":"+wrongAns;
    document.getElementById("pro").textContent=percentage+" процента силни отговори!!!";
    document.getElementById("rem").textContent="Remaining questions:"+remainingQuestions; 
    document.getElementById("rank").textContent="Your rank is:"+rank;
    document.getElementById("rankpic").src=rank+".jpg";
}
var Question = function(question,answers,correctAnswer)
    {
        this.question = question;
        this.answers= answers;
        this.correctAnswer = correctAnswer;
    }
var q1 = new Question("Какво е първото и най-важно действие по време на пожар?", ["Да се евакуираме","Да се обадим на пожарната", "Да постнем \"Пожааар\" във фейсбук и да следим коментарите","Да предприемем ефективни действия по загасяне на пожара", 2]);
var q2 = new Question;
var q3 = new Question;
var q4 = new Question;
var q5 = new Question;
var q6 = new Question;
var q7 = new Question;
var q8 = new Question;
var q9 = new Question;
var q10 = new Question;
var q11 = new Question;
var q12 = new Question;
var q13 = new Question;
var q14 = new Question;
var q15=new Question;
var q16=new Question;
var q17=new Question;
var q18=new Question;
var q19=new Question;
var q20= new Question;

q2.question="Какво означава BM?";
q3.question="Как кн Долапчиев определя студентите на ВВМУ?";
q4.question="Кой е най-често срещаният метод за взимане на изпит във ВВМУ?";
q20.question="Какво представлява леката вода?"
q5.question="Индивид от Бургас с обем на тялото и мускулите,видно надвишаващ средностатистическия се нарича ...?";
q6.question="Индивид от Бургас характерен с иноваторски шеги и лафчета се нарича ...?";
q7.question="Индивид от Бургас участващ активно в дадено начинание се нарича ...?";
q8.question="Индивид от Бургас със специфичен чар и неортодоксална харизма се нарича ...";
q9.question="По кое време хората,които имат тази способност,може да се трансформират във върколаци?";
q10.question="Корабът пътува на изток и на 25 януари пресича Международната линия на датите на източен курс в 09.00 часа време на зоната. Каква е датата и часовото време на Гринуич когато кораба пресича линията?";
q11.question="При доминация в обществото от леки хора тип \"Батка\",съответният индивид се определя като...";
q12.question="При доминация в обществото от леки хора тип \"Маняк\",съответният индивид се определя като...";
q13.question="Кой е най-точният метод за определяне на позицията на средностатистическата Бургазлийка ?"
q14.question="Гражданското смрачаване започва в 19.10 часа зонално време на 20 юли 1981 год. Вашата позиция в този момент е географска ширина 22°16'N и географска дължина 150°06'W.  Кое твърдение относно възможните за наблюдение планети вечер е вярно?";
q15.question="Кой от изброените се занимава с линеен и трампови пренос на течен товар?"
q16.question="Прибирате се от Planeta payner и внезапно получавате крен към левия борд.Кое от твърденията е вярно?";
q17.question="Вашата позиция в този момент е географска ширина 22°16'N и географска дължина 150°06'W.  Кое твърдение е вярно?";
q18.question="Намирате се в акваторията на пристанище Бургас.Корабът ви е в distress.Какъв сигнал ще подадете по VHF телефония?";
q19.question="Наближавате Бургас.Какъв е минимумът от PPE екипировка,с който трябва да разполагате?";
q2.answers=["Разстоянието от центъра на водоизместването B до метацентъра М","Бали Мааму","Бай Марин","Баси Манията"];
q2.correctAnswer=1;
q3.answers=["Рядко срещани таланти","Бъдещето на българската морска индустрия","Гордостта на България","Навигационни Опасности"];
q3.correctAnswer=3;
q4.answers=["На късмет","Китайския метод \"На Го Диго\"","чрез съвестно учене","с пищови тип \"Хармоника\" или Хендсфрий"]; 
q4.correctAnswer=3;
q20.answers=["Химическа смес използвана за гасене на пожари тип B - горящи течностти","Обикновенна вода поставена в съд и престояла известно време в Бургас","Вода в която се къпят само \"Леки хора\"","Отпадъчна вода получена при процеса на приготвяне на боя \"Леко\""];
q20.correctAnswer=1;
q5.answers=["Лице","Маняк","Батка","Играч"]; 	
q5.correctAnswer=2;
q6.answers=["Лице","Маняк","Батка","Играч"];
q6.correctAnswer=0;
q7.answers=["Лице","Маняк","Батка","Играч"];
q7.correctAnswer=3;
q8.answers=["Лице","Маняк","Батка","Играч"];
q8.correctAnswer=1;
q9.answers=["При Сизигия 00:00 Local time","При Квадратура 00:00 Local time","При Сизигия 00:00 GMT","При Квадратура 00:00 GMT"];	
q9.correctAnswer=0;
q10.answers=["Ракиено време","Време за белот","Крайно време да си взема изпита","всички отговори са верни"];	
q10.correctAnswer=3;
q11.answers=["Нацепена Баткa","Голяма Батка","Старша Батка","Арх Батка"];
q11.correctAnswer=0;
q12.answers=["Гига Маняк","Мега Маняк","Ултра Маняк","Кило Маняк"];		 
q12.correctAnswer=1;
q13.answers=["Чрез GPS данни","Чрез визуални и радарни обзервации","Използвайки метода на малките квадрати за подобряване на точността","По Статуса и във Фейсбук"]; 	
q13.correctAnswer=3;
q14.answers=["Брат,какво ме занимаваш с глупости,аз още не съм бил роден :)","Ще бъдете отвлечен от извънземни ...","Някой,който е зодия рак,ще отговаря на тъпи въпроси","всички отговори са верни"]; 
q14.correctAnswer=3;
q15.answers=["Бълкери","Кораб за генерални товари","Пасажери","Сервитъорка във Фолк заведение"];
q15.correctAnswer=3;
q16.answers=["Имате отрицателна устойчивост","На сутринта ще ви боли глава и ще пиете айрян","Наличие на свободни повърхностти в левия и десния ви джоб","всички отговори са верни"];
q16.correctAnswer=3;
q17.answers=["Намирам се някъде на майната си","Не трябваше да пия толкова снощи","Ако хвана такси ще ми излезе над 10 лв","всички отговори са верни"];
q17.correctAnswer=3;
q18.answers=["mayday mayday mayday","pan-pan pan-pan pan-pan","въй въй въъъъъъъъъъй","securite securite securite"];	
q18.correctAnswer=2;
q19.answers=["Анцунг Адидас","Татуировка","Бухалка","Ножка"]
q19.correctAnswer=0;

var questionsList = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20];
newGame();
function pickUpQuestion()
{
    active();
    document.getElementById("msg").textContent="Гоу он "+rank+", шоу ми ват юв гот!!!"
    var musicNumber = Math.floor(Math.random()*8+1);
    questionNumber = Math.floor(Math.random()*questionsList.length);
    console.log(musicNumber);
    console.log(questionNumber);
    var currentQuestion = questionsList[questionNumber].question;
    speech.textContent=currentQuestion;
   musicSusp.src="susp"+musicNumber+".mp3"
   musicSusp.play();
    for(var i = 0; i<4; i++)
        {
            document.getElementById("answer"+(i+1)).textContent=questionsList[questionNumber].answers[i];
        }
    
}

nextQBtn.addEventListener("click",function(){
    if(remainingQuestions>0)
        {
        pickUpQuestion();
        }
    else
    {
        document.getElementById("nextQuestion").style.display="none";
        musicSad.src="over.mp3";
        musicSad.play();
        pictureSad.src="over.jpg";
        pictureHappy.src="over.jpg";
    }
});


speech.textContent = "Въпрос?";
function unactive() 
    {
     musicSusp.pause();
    speech.style.display="none";
    document.getElementById("nextQuestion").style.display="inline-block";
    document.getElementById("answer1").style.display="none";
    document.getElementById("answer2").style.display="none";
    document.getElementById("answer3").style.display="none";
    document.getElementById("answer4").style.display="none";
    document.querySelector(".popay").style.display="none";  
    };
function active()
{
    soundHappy.pause();
    musicSad.pause();
    pictureSad.style.display="none";
    pictureHappy.style.display="none";
    document.getElementById("nextQuestion").style.display="none";
    speech.style.display="block";
    a1.style.display="block";
    a2.style.display="block";
    a3.style.display="block";
    a4.style.display="block";
    document.querySelector(".popay").style.display="block";
};
document.getElementById("answer1").textContent="tova e otgovor nomer 1";
document.querySelector("#newgame").addEventListener("click",function(){
newGame();    
})
a1.addEventListener("click",function(){
    var sel = 0;
    checkAnswer(sel,questionsList[questionNumber].correctAnswer);
})
a2.addEventListener("click",function(){
    var sel = 1;
    checkAnswer(sel,questionsList[questionNumber].correctAnswer);
})
a3.addEventListener("click",function(){
    var sel = 2;
    checkAnswer(sel,questionsList[questionNumber].correctAnswer);
})
a4.addEventListener("click",function(){
    var sel = 3;
    checkAnswer(sel,questionsList[questionNumber].correctAnswer);
})
