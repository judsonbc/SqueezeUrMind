
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = 'images/splashscreen.jpg';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  Form1.style.display = 'block';
  NSB.addProperties(Image1);


  NSB.addProperties(Answer1);


  NSB.addProperties(Answer2);


  NSB.addProperties(Answer3);


  NSB.addProperties(Answer4);


  NSB.addProperties(Question);
  NSB.NavBar_jqm_init('NavBar1','About, Confirm');
  NSB.addProperties(NavBar1);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(Image2);
  NSB.addProperties(Image3);
  NSB.addProperties(Image4);


  NSB.addProperties(Score);
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var  StageNum,Q=createMultiDimArray('100'),Ans=createMultiDimArray('100,5'),Qnum,Lnum,DoneQ=createMultiDimArray('100'),MaxQ=createMultiDimArray('3'),MyAns,Skip_Option,Fifty_Option,Croud_Option,OptionNow;


StageNum = 1;

Fifty_Option = False;
Croud_Option = False;
Skip_Option = False;
OptionNow = False;
Lnum = 1;

MaxQ[1] = 27;

for   (x =1; x  <= 100; x ++) {
  DoneQ[x] = "";
}

Q[1] = "An electronic device that can store data And retrieve information.";
Ans[1][1] = "a. Hardware";
Ans[1][2] = "b. nCPU";
Ans[1][3] = "c. Computer";
Ans[1][4] = "d. Flash drive";
Ans[1][5] = "c. Computer";

Q[2] = "Inventor of 'Turing Machine'";
Ans[2][1] = "a. Alan Turing";
Ans[2][2] = "b. Tedd Hoff";
Ans[2][3] = "c. Vinton";
Ans[2][4] = "d. Jack Kilvy";
Ans[2][5] = "a. Alan Turing";

Q[3] = "Brain of the computer";
Ans[3][1] = "a. Motherboard";
Ans[3][2] = "b. CPU";
Ans[3][3] = "c. Power Supply";
Ans[3][4] = "d. Battery";
Ans[3][5] = "b. CPU";

Q[4] = "A computer parts that absorbs heat coming from the microprocessor.";
Ans[4][1] = "a. CPU Fan";
Ans[4][2] = "b. Power Supply";
Ans[4][3] = "c. Case Fan";
Ans[4][4] = "d. Heatsink";
Ans[4][5] = "d. Heatsink";

Q[5] = "It helps keeping the system cool to avoid over heating.";
Ans[5][1] = "a. Case Fan";
Ans[5][2] = "b. Heatsink";
Ans[5][3] = "c. Power Supply";
Ans[5][4] = "d. CPU Fan";
Ans[5][5] = "a. Case Fan";

Q[6] = "GUI stands for?";
Ans[6][1] = "a. Graphic User Internet";
Ans[6][2] = "b. Graphic User Interface";
Ans[6][3] = "c. Graphical Ultimate Interface";
Ans[6][4] = "d. Graphical User Internet";
Ans[6][5] = "b. Graphic User Interface";

Q[7] = "It is a central processor on a chip and it enabled designers to replace dozenz of integrated circuit.";
Ans[7][1] = "a. Microprocessor";
Ans[7][2] = "b. Motherboard";
Ans[7][3] = "c. Chipset";
Ans[7][4] = "d. Hard drive";
Ans[7][5] = "a. Microprocessor";

Q[8] = "When was Pascaline develop?";
Ans[8][1] = "a. 1945";
Ans[8][2] = "b. 1820";
Ans[8][3] = "c. 1672";
Ans[8][4] = "d. 1642";
Ans[8][5] = "d. 1642";

Q[9] = "Who invented the 'calculating clock'?";
Ans[9][1] = "a. Blaise Pascal";
Ans[9][2] = "b. Herman Hollerith";
Ans[9][3] = "c. Jack Kilvy";
Ans[9][4] = "d. Wilhelm Schikard";
Ans[9][5] = "d. Wilhelm Schikard";

Q[10] = "Who invented the 'computer mouse'?";
Ans[10][1] = "a. Clifford Bering";
Ans[10][2] = "b. Douglas Englebert";
Ans[10][3] = "c. Charles Babbage";
Ans[10][4] = "d. Herman Hollerith";
Ans[10][5] = "b. Douglas Englebert";

Q[11] = "Who is the first computer programmer?";
Ans[11][1] = "a. Joseph Marie Jacquard";
Ans[11][2] = "b. Lady Ada Augusta Lovelace Byron";
Ans[11][3] = "c. Charles Babbage";
Ans[11][4] = "d. Blaise Pascal";
Ans[11][5] = "b. Lady Ada Augusta Lovelace Byron";

Q[12] = "When was 'Handheld calculator' invented?";
Ans[12][1] = "a. 1976";
Ans[12][2] = "b. 1986";
Ans[12][3] = "c. 1996";
Ans[12][4] = "d. 1966";
Ans[12][5] = "d. 1966";

Q[13] = "He invented the 'Power Loom (weaving loom) ' in 1880. ";
Ans[13][1] = "a. Joseph Marie Jacquard";
Ans[13][2] = "b. Herman Hollerith";
Ans[13][3] = "c. Howard Aiken";
Ans[13][4] = "d. Charles Babbage";
Ans[13][5] = "a. Joseph Marie Jacquard";

Q[14] = "It is the standard input device";
Ans[14][1] = "a. Mouse";
Ans[14][2] = "b. Keyboard";
Ans[14][3] = "c. Printer ";
Ans[14][4] = "d. Monitor";
Ans[14][5] = "b. Keyboard";

Q[15] = "It is the main circuit board containing the primary components of a computer system.";
Ans[15][1] = "a. Motherboard";
Ans[15][2] = "b. CPU";
Ans[15][3] = "c. Motherboard card";
Ans[15][4] = "d. Keyboard";
Ans[15][5] = "a. Motherboard";

Q[16] = "It direct the flow of data from one point to another.";
Ans[16][1] = "a. BIOS chip";
Ans[16][2] = "b. Chipset";
Ans[16][3] = "c. Clock driver";
Ans[16][4] = "d. Video Card";
Ans[16][5] = "b. Chipset";

Q[17] = "It supply electrical power to the computer.";
Ans[17][1] = "a. keyboard";
Ans[17][2] = "b. Power cable";
Ans[17][3] = "c. Battery";
Ans[17][4] = "d. Power supply";
Ans[17][5] = "d. Power supply";

Q[18] = "The following are the basic function of computer except one.";
Ans[18][1] = "a. Process";
Ans[18][2] = "b. Storage";
Ans[18][3] = "c. Connector";
Ans[18][4] = "d. Input";
Ans[18][5] = "c. Connector";

Q[19] = "A mechanical device used to sid an individual in performing calculations.";
Ans[19][1] = "a. Pascaline";
Ans[19][2] = "b. Calculating clock";
Ans[19][3] = "c. Abacus";
Ans[19][4] = "d. Calculator";
Ans[19][5] = "c. Abacus";

Q[20] = "Which of the following can be used as a computer input device?";
Ans[20][1] = "a. Plotter";
Ans[20][2] = "b. Speaker";
Ans[20][3] = "c. Disk drive";
Ans[20][4] = "d. Laser printer";
Ans[20][5] = "c. Disk drive";

Q[21] = "Which of the following is not an input device?";
Ans[21][1] = "a. Keyboard";
Ans[21][2] = "b. Speaker";
Ans[21][3] = "c. Mouse";
Ans[21][4] = "d. Stylus";
Ans[21][5] = "b. Speaker";

Q[22] = "Which of the following is an example of optical storage media?";
Ans[22][1] = "a. Disk drive";
Ans[22][2] = "b. Flash card";
Ans[22][3] = "c. RAM";
Ans[22][4] = "d. Compact disc";
Ans[22][5] = "c. RAM";

Q[23] = "Before a computer can process where must the data be stored?";
Ans[23][1] = "a. In RAM";
Ans[23][2] = "b. On a disk";
Ans[23][3] = "c.In the control unit";
Ans[23][4] = "d. On the monitor";
Ans[23][5] = "a. In RAM";

Q[24] = "The first mechanical computer designed by Charles Babbage was called?";
Ans[24][1] = "a. Abacus";
Ans[24][2] = "b. Analytical Engine";
Ans[24][3] = "c. Calculator";
Ans[24][4] = "d. Processor";
Ans[24][5] = "b. Analytical Engine";

Q[25] = "Who is considered as a father of Artificial Intelligence";
Ans[25][1] = "a. Alan Turing";
Ans[25][2] = "b. John Mc Carthy";
Ans[25][3] = "c. George Boole";
Ans[25][4] = "d. Allen Newell";
Ans[25][5] = "b. John Mc Carthy";

Q[26] = "Inventor of a Computer mouse.";
Ans[26][1] = "a. Clifford Bering";
Ans[26][2] = "b. Doughlas Englebert";
Ans[26][3] = "c. Charles Babbage";
Ans[26][4] = "d. Herman Hollerith";
Ans[26][5] = "b. Doughlas Englebert";

Q[27] = "It is a manual aid to calculate that can move up and down on a series of sticks or strings within usually wooden frame.";
Ans[27][1] = "a. Abacus";
Ans[27][2] = "b. Algorithm";
Ans[27][3] = "c. Boolean";
Ans[27][4] = "d. Analytical Engine";
Ans[27][5] = "a. Abacus";








function Main() {
  Image1.Left = 0;
  Image1.Top = 0;
  Image1.Width = 320;
  Image1.Height = 460;
  GetQ();
}

Answer1.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer1.style.background = "white";
  Answer1.style.color = "black";
  MyAns = Ans[Qnum][1];
return savethefunction_rvar; }

Answer2.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer2.style.background = "white";
  Answer2.style.color = "black";
  MyAns = Ans[Qnum][2];
return savethefunction_rvar; }

Answer3.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer3.style.background = "white";
  Answer3.style.color = "black";
  MyAns = Ans[Qnum][3];
return savethefunction_rvar; }

Answer4.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer4.style.background = "white";
  Answer4.style.color = "black";
  MyAns = Ans[Qnum][4];
return savethefunction_rvar; }

function ClearAll() { savethefunction_rvar="";
  Answer1.style.background = "transparent";
  Answer2.style.background = "transparent";
  Answer3.style.background = "transparent";
  Answer4.style.background = "transparent";

  Answer1.style.color = "white";
  Answer2.style.color = "white";
  Answer3.style.color = "white";
  Answer4.style.color = "white";

return savethefunction_rvar; }

function GetQ() {
  Qnum= Math.floor(MaxQ[Lnum] * rnd()) +1;
 while (DoneQ[Qnum] != "") {
    Qnum= Math.floor(MaxQ[Lnum] * rnd()) +1;
   }
  DoneQ[Qnum] = "Done";

  Answer1.hidden = False;
  Answer2.hidden = False;
  Answer3.hidden = False;
  Answer4.hidden = False;

  Question.textContent = Q[Qnum];
  Answer1.textContent = Ans[Qnum][1];
  Answer2.textContent = Ans[Qnum][2];
  Answer3.textContent = Ans[Qnum][3];
  Answer4.textContent = Ans[Qnum][4];

  OptionNow = False;

}

NavBar1.onclick = function(choice) { savethefunction_rvar="";
  if(choice == "Confirm") {
    if(MyAns == Ans[Qnum][5]) {
        _msgbox_confirm("Perfect "  +  Ans[Qnum][5] );
        StageNum = StageNum + 1;
        if(StageNum == 2 ) { Score.textContent = "1,000"; }
        if(StageNum == 3 ) { Score.textContent = "5,000"; }
        if(StageNum == 4 ) { Score.textContent = "15,000"; }
        if(StageNum == 5 ) { Score.textContent = "25,000"; }
        if(StageNum == 6 ) { Score.textContent = "50,000"; }
        if(StageNum == 7 ) { Score.textContent = "100,000"; }
        if(StageNum == 8 ) { Score.textContent = "150,000"; }
        if(StageNum == 9 ) { Score.textContent = "250,000"; }
        if(StageNum == 10 ) { Score.textContent = "300,000"; }
        if(StageNum == 11 ) { Score.textContent = "400,000"; }
        if(StageNum == 12 ) { Score.textContent = "500,000"; }
        if(StageNum == 13 ) { Score.textContent = "600,000"; }
        if(StageNum == 14 ) { Score.textContent = "750,000"; }
        if(StageNum == 15 ) { Score.textContent = "850,000"; }
        if(StageNum == 16 ) { Score.textContent = "1,000,000"; }

 } else {
        _msgbox_confirm("Wrong Answer, Answer is : "  +  Ans[Qnum][5] );
    }
    GetQ();
    ClearAll();
  }
return savethefunction_rvar; }

Image2.onclick = function() { savethefunction_rvar="";
  if(! Skip_Option) {
    GetQ();
    ClearAll();
    Skip_Option = True;
    Image2.firstChild.src = "images/skip_x.png";
  }
return savethefunction_rvar; }

Image3.onclick = function() { savethefunction_rvar="";
 var  WhatIs,NextIs;
  NextIs = 1;
  WhatIs = 1;
  if(! Fifty_Option && ! OptionNow) {
    Answer1.textContent  = "";
    Answer2.textContent  = "";
    Answer3.textContent  = "";
    Answer4.textContent  = "";

    if(Ans[Qnum][1] == Ans[Qnum][5]) {
        Answer1.textContent = Ans[Qnum][1];
        WhatIs = 1;
    }
    if(Ans[Qnum][2] == Ans[Qnum][5]) {
        Answer2.textContent = Ans[Qnum][2];
        WhatIs = 2;
    }
    if(Ans[Qnum][3] == Ans[Qnum][5]) {
        Answer3.textContent = Ans[Qnum][3];
        WhatIs = 3;
    }
    if(Ans[Qnum][4] == Ans[Qnum][5]) {
        Answer4.textContent = Ans[Qnum][4];
        WhatIs = 4;
    }

    NextIs = WhatIs + (Math.floor(3 * rnd()) +1);

    if(NextIs > 4 ) { NextIs = NextIs - 4; }

    if(NextIs == 1) {
      Answer1.textContent  = Ans[Qnum][1];
    }

    if(NextIs == 2) {
      Answer2.textContent  = Ans[Qnum][2];
    }

    if(NextIs == 3) {
      Answer3.textContent  = Ans[Qnum][3];
    }

    if(NextIs == 4) {
      Answer4.textContent  = Ans[Qnum][4];
    }

    Fifty_Option = True;
    Image3.firstChild.src = "images/50_x.png";
    OptionNow = True;
  }
return savethefunction_rvar; }

Image4.onclick = function() { savethefunction_rvar="";
 var  WhatIs,NextIs;
  NextIs = 1;
  WhatIs = 1;
  if(! Croud_Option && ! OptionNow) {
    Answer1.textContent  = "";
    Answer2.textContent  = "";
    Answer3.textContent  = "";
    Answer4.textContent  = "";

    if(Ans[Qnum][1] == Ans[Qnum][5]) {
        Answer1.textContent = Ans[Qnum][1];
        WhatIs = 1;
    }
    if(Ans[Qnum][2] == Ans[Qnum][5]) {
        Answer2.textContent = Ans[Qnum][2];
        WhatIs = 2;
    }
    if(Ans[Qnum][3] == Ans[Qnum][5]) {
        Answer3.textContent = Ans[Qnum][3];
        WhatIs = 3;
    }
    if(Ans[Qnum][4] == Ans[Qnum][5]) {
        Answer4.textContent = Ans[Qnum][4];
        WhatIs = 4;
    }

    Croud_Option = True;
    OptionNow = True;
    Image4.firstChild.src = "images/50_x.png";
  }
return savethefunction_rvar; }



window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


