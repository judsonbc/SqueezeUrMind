
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
  Answer1.style.lineHeight='24px'; 

  NSB.addProperties(Answer1);
  Answer2.style.lineHeight='24px'; 

  NSB.addProperties(Answer2);
  Answer3.style.lineHeight='24px'; 

  NSB.addProperties(Answer3);
  Answer4.style.lineHeight='24px'; 

  NSB.addProperties(Answer4);


  NSB.addProperties(Question);
  NSB.NavBar_jqm_init('NavBar1','About, Confirm');
  NSB.addProperties(NavBar1);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(Image2);
  NSB.addProperties(Image3);
  NSB.addProperties(Image4);


  NSB.addProperties(Score);
NSB.addProperties(ProgressBar1);
  NSB.NavBar_jqm_init('NavBar2','Restart Game');
  NSB.addProperties(NavBar2);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar2_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(Audio2);
NSB.addProperties(Audio3);
NSB.addProperties(Audio4);


  NSB.addProperties(GameO);
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var  GameOver,timeref,TimeLimit,StageNum,Q=createMultiDimArray('100'),Ans=createMultiDimArray('100,5'),Qnum,Lnum,DoneQ=createMultiDimArray('100'),MaxQ=createMultiDimArray('3'),MyAns,Skip_Option,Fifty_Option,Croud_Option,OptionNow;
var  Top1,Top2, Top3, Top4, Top5, Top6, Top7, Top8, Top9, Top10;
var  Score1, Score2,Score3, Score4, Score5, Score6, Score7, Score8, Score9, Score10;



 //If choice="Save" Then 
 //  localStorage.data1=Textarea1.value  
 //  myArray=Textarea2.value 
 //  localStorage.myArray=JSON.stringify(myArray)'

 //  MsgBox "You saved your string and array using AppStudio!"
 //End If 



Audio1.play();
GameOver = False;
TimeLimit = 60;
StageNum = 1;

Fifty_Option = False;
Croud_Option = False;
Skip_Option = False;
OptionNow = False;
Lnum = 1;

nsbDOMAttr(NavBar2,'style.display', "none");
nsbDOMAttr(GameO,'style.display', "none");
MaxQ[1] = 25;
MaxQ[2] = 15;
MaxQ[3] = 15;

for   (x =1; x  <= 100; x ++) {
  DoneQ[x] = "";
}

if(True) {
  Q[1] = "It is an electronic device that executes the instruction in a program?";
  Ans[1][1] = "a. System Unit";
  Ans[1][2] = "b. Computer";
  Ans[1][3] = "c. Tablet";
  Ans[1][4] = "d. Hardware";
  Ans[1][5] = "b. Computer";

  Q[2] = "Who is the first computer programmer?";
  Ans[2][1] = "a. Lady Agusta Lovelace Bayron";
  Ans[2][2] = "b. John Mc Arthy";
  Ans[2][3] = "c. Thomas Hobbes";
  Ans[2][4] = "d. Allan Turing";
  Ans[2][5] = "a. Lady Agusta Lovelace Bayron";

  Q[3] = "Where the computer RAM installed?";
  Ans[3][1] = "a. DIMM Socket";
  Ans[3][2] = "b. USB";
  Ans[3][3] = "c. Disk drive";
  Ans[3][4] = "d. Expansion Slot";
  Ans[3][5] = "a. DIMM Socket";

  Q[4] = "It supply electrical power from the power supply to the drives and other devices.";
  Ans[4][1] = "a. Power cables";
  Ans[4][2] = "b. Power Supply";
  Ans[4][3] = "c. UTP Cable";
  Ans[4][4] = "d. AGP";
  Ans[4][5] = "a. Power cables";

  Q[5] = "It is a multinational computer technology corporation.";
  Ans[5][1] = "a. Microsoft";
  Ans[5][2] = "b. OS";
  Ans[5][3] = "c. Software";
  Ans[5][4] = "d. Multimedia";
  Ans[5][5] = "a. Microsoft";

   Q[6] = "What is the brain of the vedio card?";
  Ans[6][1] = "a. AGP";
  Ans[6][2] = "b. GPU";
  Ans[6][3] = "c. DVI";
  Ans[6][4] = "d. ISA";
  Ans[6][5] = "b. GPU";

  Q[7] = "It is an acronym for binary digit.";
  Ans[7][1] = "a. Octa";
  Ans[7][2] = "b. Bin";
  Ans[7][3] = "c. Bit";
  Ans[7][4] = "d. Deci";
  Ans[7][5] = "c. Bit";

  Q[8] = "Who invented the Power Loom (weaving loom) in 1880?";
  Ans[8][1] = "a. Joseph Marie Jacquard";
  Ans[8][2] = "b. Herman Hollerith";
  Ans[8][3] = "c. Howard Aiken";
  Ans[8][4] = "d. Charles Babbage";
  Ans[8][5] = "a. Joseph Marie Jacquard";

  Q[9] = "In what year was the Analytical Engine developed?";
  Ans[9][1] = "a. 1822";
  Ans[9][2] = "b. 1282";
  Ans[9][3] = "c. 1922";
  Ans[9][4] = "d. 1828";
  Ans[9][5] = "a. 1822";

  Q[10] = "One byte is equivalent to how many bit?";
  Ans[10][1] = "a. 9 bit";
  Ans[10][2] = "b. 8 bit";
  Ans[10][3] = "c. 1 bit";
  Ans[10][4] = "d. 7 bit";
  Ans[10][5] = "b. 8 bit";

  Q[11] = "The compression of circuit elements into smaller and smaller chips.";
  Ans[11][1] = "a. Microminiaturization";
  Ans[11][2] = "b. Microorganization";
  Ans[11][3] = "c. Macrominiaturization";
  Ans[11][4] = "d. Minorminiaturization";
  Ans[11][5] = "a. Microminiaturization";

  Q[12] = "The following are the basic components of a computer except one.";
  Ans[12][1] = "a. Hardware";
  Ans[12][2] = "b. Software";
  Ans[12][3] = "c. Know ware";
  Ans[12][4] = "d. Micro ware";
  Ans[12][5] = "d. Micro ware";

  Q[13] = "One of the basic Components of a Computer.";
  Ans[13][1] = "a. Memory";
  Ans[13][2] = "b. Hardware";
  Ans[13][3] = "c. Mouse";
  Ans[13][4] = "d. Mother board";
  Ans[13][5] = "b. Hardware";

  Q[14] = "When was the first released of Microsoft Excel?";
  Ans[14][1] = "a. 1979";
  Ans[14][2] = "b. 1978";
  Ans[14][3] = "c. 1987";
  Ans[14][4] = "d. 1997";
  Ans[14][5] = "c. 1987";

  Q[15] = "It is a links of two or more Computer in order to communicate.";
  Ans[15][1] = "a. Modem";
  Ans[15][2] = "b. Expansion slot";
  Ans[15][3] = "c. System unit";
  Ans[15][4] = "d. Power cables";
  Ans[15][5] = "a. Modem";

  Q[16] = "Who is the inventor of Turing Machine?";
  Ans[16][1] = "a. Alan Turing";
  Ans[16][2] = "b. Tedd Hoff";
  Ans[16][3] = "c. Vinton";
  Ans[16][4] = "d. Jack Kilvy";
  Ans[16][5] = "a. Alan Turing";

  Q[17] = "Who invented the computer mouse?";
  Ans[17][1] = "a. Clifford Bering";
  Ans[17][2] = "b. Douglas Englebert";
  Ans[17][3] = "c. Charles Babbage";
  Ans[17][4] = "d. Herman Hollerith";
  Ans[17][5] = "b. Douglas Englebert";

  Q[18] = "It direct the flow of data from one point to another.";
  Ans[18][1] = "a. BIOS chip";
  Ans[18][2] = "b. Chipset";
  Ans[18][3] = "c. Clock driver";
  Ans[18][4] = "d. video card";
  Ans[18][5] = "b. Chipset";

  Q[19] = "Who is considered as a father of Artificial Intelligence?";
  Ans[19][1] = "a. Alan Turing";
  Ans[19][2] = "b. John Mc Carthy";
  Ans[19][3] = "c. George Boole";
  Ans[19][4] = "d. Allen Newell";
  Ans[19][5] = "b. John Mc Carthy";

  Q[20] = "It is a universal help in almost every windows program.";
  Ans[20][1] = "a. F1";
  Ans[20][2] = "b. F2";
  Ans[20][3] = "c. F5";
  Ans[20][4] = "d. F8";
  Ans[20][5] = "a. F1";

  Q[21] = "It is a system of resource that able computer user to view and interact with a variety of information";
  Ans[21][1] = "a. Internet connection";
  Ans[21][2] = "b. WWW";
  Ans[21][3] = "c. TCP/IP";
  Ans[21][4] = "d. Ethernet";
  Ans[21][5] = "b. WWW";

  Q[22] = "Data which is raw facts that you the user enter to the computer is called ";
  Ans[22][1] = "a. Output ";
  Ans[22][2] = "b. Input";
  Ans[22][3] = "c. Process";
  Ans[22][4] = "d. Unit";
  Ans[22][5] = "b. Input";

  Q[23] = "Which of the following is not an input device?";
  Ans[23][1] = "a. Keyboard";
  Ans[23][2] = "b. Speaker";
  Ans[23][3] = "c. Mouse";
  Ans[23][4] = "d. Stylus";
  Ans[23][5] = "b. Speaker";

  Q[24] = "The first mechanical computer designed by Charles Babbage was called?";
  Ans[24][1] = "a. Abacus";
  Ans[24][2] = "b. Analytical Engine";
  Ans[24][3] = "c. Calculator";
  Ans[24][4] = "d. Processor";
  Ans[24][5] = "b. Analytical Engine";

  Q[25] = "Function performed to reverse the action of the earlier action.";
  Ans[25][1] = "a. Undo";
  Ans[25][2] = "b. Redo ";
  Ans[25][3] = "c. Paste";
  Ans[25][4] = "d. Copy";
  Ans[25][5] = "a. Undo";

  Q[26] = "What is the meaning of AGP?";
  Ans[26][1] = "a. Accelarated Graphic Port";
  Ans[26][2] = "b. Access Grapics Port";
  Ans[26][3] = "c. Accelerated Group Proccessor";
  Ans[26][4] = "d. Advancement General Port";
  Ans[26][5] = "a. Accelarated Graphic Port";

  Q[27] = "What is the meaing of FORTRAN??";
  Ans[27][1] = "a. Formula Transfer";
  Ans[27][2] = "b. Formation Transit";
  Ans[27][3] = "c. Formula Translation";
  Ans[27][4] = "d. Form Transaction";
  Ans[27][5] = "c. Formula Translation";

  Q[28] = "In what year does Microsoft formed a partnership with IBM computers?";
  Ans[28][1] = "a. 1890";
  Ans[28][2] = "b. 1990";
  Ans[28][3] = "c. 1880";
  Ans[28][4] = "d.  1980";
  Ans[28][5] = "d.  1980";

  Q[29] = "A more recent technology that is slowly replacing AGP.";
  Ans[29][1] = "a. GPU";
  Ans[29][2] = "b. PCIe";
  Ans[29][3] = "c. DVI";
  Ans[29][4] = "d. ISA";
  Ans[29][5] = "b. PCIe";

  Q[30] = "Is used to set-up the computers hardware.";
  Ans[30][1] = "a. BIOS";
  Ans[30][2] = "b. CMOS";
  Ans[30][3] = "c. CPU";
  Ans[30][4] = "d. ISA";
  Ans[30][5] = "a. BIOS";

  Q[31] = "Which of the is not a characteristic of a computer?";
  Ans[31][1] = "a. Accuracy";
  Ans[31][2] = "b. Diligence";
  Ans[31][3] = "c. Speed";
  Ans[31][4] = "d. Intelligence";
  Ans[31][5] = "d. Intelligence";

  Q[32] = "The following are examples of computers of the 2nd generation except one.";
  Ans[32][1] = "a. IBM 1620";
  Ans[32][2] = "b. IBM 1401";
  Ans[32][3] = "c. IBM 1260";
  Ans[32][4] = "d. CDC 3600";
  Ans[32][5] = "c. IBM 1260";

  Q[33] = "It is base 10 number system as it uses 10 digits from 0-9.";
  Ans[33][1] = "a. Binary Numbering System ";
  Ans[33][2] = "b. Octal Numbering System";
  Ans[33][3] = "c. Hexa Numbering System";
  Ans[33][4] = "d. Decimal Numbering System";
  Ans[33][5] = "d. Decimal Numbering System";

  Q[34] = "In what year did Robert Metcalf invent the Ethernet?";
  Ans[34][1] = "a. 1793";
  Ans[34][2] = "b. 1973";
  Ans[34][3] = "c. 1983";
  Ans[34][4] = "d. 1937";
  Ans[34][5] = "b. 1973";

  Q[35] = "The following are the basic elements of computer except one.";
  Ans[35][1] = "a. Data Security";
  Ans[35][2] = "b. Unemployment";
  Ans[35][3] = "c. Versability";
  Ans[35][4] = "d. Computer crimes";
  Ans[35][5] = "c. Versability";

  Q[36] = "It tells the name of the file and application you are currently using.";
  Ans[36][1] = "a. Menu Bar";
  Ans[36][2] = "b. Title Bar";
  Ans[36][3] = "c. Word Perfect";
  Ans[36][4] = "d. Microsoft Access";
  Ans[36][5] = "a. Menu Bar";

  Q[37] = "Bespoke software refers to:";
  Ans[37][1] = "a. Tailored Software";
  Ans[37][2] = "b. Ready-Made Software";
  Ans[37][3] = "c. Productivity Software";
  Ans[37][4] = "d. None of these";
  Ans[37][5] = "a. Tailored Software";

  Q[38] = "A large round control in the upper-left  orner of some office 2007 application.";
  Ans[38][1] = "a. Ribbon";
  Ans[38][2] = "b. Office Button ";
  Ans[38][3] = "c. Tab Button";
  Ans[38][4] = "d. Mini Toolbar";
  Ans[38][5] = "b. Office Button ";

  Q[39] = "It provides information about the current state of what you are viewing in the window.";
  Ans[39][1] = "a. Status Bar";
  Ans[39][2] = "b. Scroll Bar";
  Ans[39][3] = "c.  Title Bar";
  Ans[39][4] = "d. Menu Bar";
  Ans[39][5] = "a. Status Bar";

  Q[40] = "Which of the following is a utility software?";
  Ans[40][1] = "a. Firewall";
  Ans[40][2] = "b. Disk Defragmenter";
  Ans[40][3] = "c. AVG";
  Ans[40][4] = "d. None of these";
  Ans[40][5] = "c. AVG";

  Q[41] = "Convert octa to binary 515₈ is equals to";
  Ans[41][1] = "a. 101100101₂";
  Ans[41][2] = "b. 101001101₂";
  Ans[41][3] = "c. 10110010₂";
  Ans[41][4] = "d. 110100101₂";
  Ans[41][5] = "b. 101001101₂";

  Q[42] = "Convert deci to binary 864₁₀ is equals to";
  Ans[42][1] = "a. 1101100000₂";
  Ans[42][2] = "b. 11101100001₂";
  Ans[42][3] = "c. 100000110110₂";
  Ans[42][4] = "d. 1100110001110₂";
  Ans[42][5] = "a. 1101100000₂";

  Q[43] = "Convert hexa to octa 65E₁₆ is equals to";
  Ans[43][1] = "a. 3361₈";
  Ans[43][2] = "b. 3613₈";
  Ans[43][3] = "c. 3136₈";
  Ans[43][4] = "d. 3633₈";
  Ans[43][5] = "c. 3136₈";

  Q[44] = "Convert octa to hexa 714₈ is equals to";
  Ans[44][1] = "a. C1C₁₆";
  Ans[44][2] = "b. 1CC₁₆";
  Ans[44][3] = "c. CC1₁₆";
  Ans[44][4] = "d. 1CD₁₆";
  Ans[44][5] = "b. 1CD₁₆";

  Q[45] = "Convert binary to octa 11111001100₂ is equals to";
  Ans[45][1] = "a. 3714₈";
  Ans[45][2] = "b. 4173₈﻿";
  Ans[45][3] = "c. 7143₈";
  Ans[45][4] = "d. 7314₈";
  Ans[45][5] = "a. 3714₈";

  Q[46] = "The product of the binary numbers 1011 and 1010 is equal to";
  Ans[46][1] = "a. 0111011";
  Ans[46][2] = "b. 1110110";
  Ans[46][3] = "c. 1010101";
  Ans[46][4] = "d. 1101110";
  Ans[46][5] = "d. 1101110";

  Q[47] = "The sum of the binary numbers 01101 and 10111 , 11111 is equal to";
  Ans[47][1] = "a. 100100₂";
  Ans[47][2] = "b. 010010₂";
  Ans[47][3] = "c. 110110₂";
  Ans[47][4] = "d. 101101₂";
  Ans[47][5] = "a. 100100₂";

  Q[48] = "The difference of binary number 1101110 and 10111 is equal to";
  Ans[48][1] = "a. 1100111₂ ";
  Ans[48][2] = "b. 1010100₂";
  Ans[48][3] = "c. 1010111₂";
  Ans[48][4] = "d. 1110101₂";
  Ans[48][5] = "c. 1010111₂";

  Q[49] = "Convert 3A₁₆ to binary";
  Ans[49][1] = "a. 00111010₂";
  Ans[49][2] = "b. 01011101₂";
  Ans[49][3] = "c. 01101110₂";
  Ans[49][4] = "d. 11110011₂";
  Ans[49][5] = "a. 00111010₂";

  Q[50] = "Convert binary to hexa 1010010₂ is equal to";
  Ans[50][1] = "a. 25₁₆";
  Ans[50][2] = "b. 36₁₆";
  Ans[50][3] = "c. 52₁₆";
  Ans[50][4] = "d. 37₁₆";
  Ans[50][5] = "c. 52₁₆";

  Q[51] = "Convert 65₈ to binary";
  Ans[51][1] = "a. 111101₂";
  Ans[51][2] = "b. 110101₂";
  Ans[51][3] = "c. 011111₂";
  Ans[51][4] = "d. 001110₂";
  Ans[51][5] = "b. 110101₂";

  Q[52] = "Convert binary to octa 101100₂ is equal to";
  Ans[52][1] = "a. 52₈";
  Ans[52][2] = "b. 54₈";
  Ans[52][3] = "c. 45₈";
  Ans[52][4] = "d. 56₈";
  Ans[52][5] = "b. 54₈";

  Q[53] = "Convert 100101₂ to decimal";
  Ans[53][1] = "a. 37₁₀";
  Ans[53][2] = "b. 73₁₀";
  Ans[53][3] = "c. 38₁₀";
  Ans[53][4] = "d. 36₁₀";
  Ans[53][5] = "a. 37₁₀";

  Q[54] = "When was Handheld calculator invented?";
  Ans[54][1] = "a. 1976";
  Ans[54][2] = "b. 1986";
  Ans[54][3] = "c. 1996";
  Ans[54][4] = "d. 1966";
  Ans[54][5] = "d. 1966";

  Q[55] = "When was Pascaline develop?";
  Ans[55][1] = "a. 1945";
  Ans[55][2] = "b. 1820";
  Ans[55][3] = "c. 1672";
  Ans[55][4] = "d. 1642";
  Ans[55][5] = "d. 1642";

}

function Main() {
    if(localStorage.Score1 == undefined ) { localStorage.Score1 = 0; }
    if(localStorage.Score2 == undefined ) { localStorage.Score2 = 0; }
    if(localStorage.Score3 == undefined ) { localStorage.Score3 = 0; }
    if(localStorage.Score4 == undefined ) { localStorage.Score4 = 0; }
    if(localStorage.Score5 == undefined ) { localStorage.Score5 = 0; }
    if(localStorage.Score6 == undefined ) { localStorage.Score6 = 0; }
    if(localStorage.Score7 == undefined ) { localStorage.Score7 = 0; }
    if(localStorage.Score8 == undefined ) { localStorage.Score8 = 0; }
    if(localStorage.Score9 == undefined ) { localStorage.Score9 = 0; }
    if(localStorage.Score10 == undefined ) { localStorage.Score10 = 0; }


  l1.textContent = "1,000";
  l2.textContent = "5,000";
  l3.textContent = "15,000";
  l4.textContent = "25,000";
  l5.textContent = "50,000";
  l6.textContent = "100,000";
  l7.textContent = "150,000";
  l8.textContent = "200,000";
  l9.textContent = "300,000";
  l10.textContent = "400,000";
  l11.textContent = "500,000";
  l12.textContent = "600,000";
  l13.textContent = "700,000";
  l14.textContent = "850,000";
  l15.textContent = "1,000,000";
  ChangeLevel();
  Image1.Left = 0;
  Image1.Top = 0;
  Image1.Width = 320;
  Image1.Height = 460;
  Image5.Left = 0;
  Image5.Top = 0;
  Image5.Width = 320;
  Image5.Height = 460;
  Image6.Left = 0;
  Image6.Top = 0;
  Image6.Width = 320;
  Image6.Height = 460;
  Image7.Left = 0;
  Image7.Top = 0;
  Image7.Width = 320;
  Image7.Height = 460;

  RestoreTopScore();

  ChangeForm(Form4);


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

function GetQ() { savethefunction_rvar="";
  Qnum= Math.floor(MaxQ[Lnum] * rnd()) + 1;
  if(Lnum == 2 ) { Qnum = Qnum + 25; }
  if(Lnum == 3 ) { Qnum = Qnum + 25 + 15; }

 while (DoneQ[Qnum] != "") {
    Qnum= Math.floor(MaxQ[Lnum] * rnd()) + 1;
    if(Lnum == 2 ) { Qnum = Qnum + 25; }
    if(Lnum == 3 ) { Qnum = Qnum + 25 + 15; }
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

  TimeLimit = 61;
  timeref = setInterval(Timer, 1000);

return savethefunction_rvar; }

NavBar1.onclick = function(choice) { savethefunction_rvar="";
  if(choice == "Confirm" && ! GameOver) {
    if(MyAns == Ans[Qnum][5]) {
        clearInterval(timeref);
        _msgbox_confirm("You Got It Right!");
        Audio3.play();
        StageNum = StageNum + 1;
        ChangeLevel();
        ChangeForm(Form4);
        if(StageNum == 2) {
          Score.textContent = "1,000";
        }
        if(StageNum == 3 ) { Score.textContent = "5,000"; }
        if(StageNum == 4 ) { Score.textContent = "15,000"; }
        if(StageNum == 5 ) { Score.textContent = "25,000"; }
        if(StageNum == 6) {
          Score.textContent = "50,000";
          Lnum = 2;
        }
        if(StageNum == 7 ) { Score.textContent = "100,000"; }
        if(StageNum == 8 ) { Score.textContent = "150,000"; }
        if(StageNum == 9 ) { Score.textContent = "200,000"; }
        if(StageNum == 10 ) { Score.textContent = "300,000"; }
        if(StageNum == 11) {
          Score.textContent = "400,000";
          Lnum = 3;
        }
        if(StageNum == 12 ) { Score.textContent = "500,000"; }
        if(StageNum == 13 ) { Score.textContent = "600,000"; }
        if(StageNum == 14 ) { Score.textContent = "700,000"; }
        if(StageNum == 15 ) { Score.textContent = "850,000"; }
        if(StageNum == 16) {
            Score.textContent = "1,000,000";
            clearInterval(timeref);
            ChangeForm(Form3);
            Audio1.play();
             return savethefunction_rvar;
        }
 //GetQ
        ClearAll();
 } else {
        if(StageNum != 1) {
          NSB.InputBox(InputDone,"Please enter your name" , "Wrong Answer, Answer is : "  +  Ans[Qnum][5] , "");
          ChangeForm(Form5);
        }
        Audio4.play();
        GameOver = True;
        GameO.hidden = False;
        nsbDOMAttr(NavBar1,'style.display', "none");
        nsbDOMAttr(NavBar2,'style.display', "");
        nsbDOMAttr(GameO,'style.display', "");
        clearInterval(timeref);


         return savethefunction_rvar;
    }
  }
  if(choice == "About") {
    ChangeForm(Form2);
  }
return savethefunction_rvar; }

function RestoreTopScore() {
    Label2.textContent = localStorage.Top1;
    Label3.textContent = localStorage.Top2;
    Label4.textContent = localStorage.Top3;
    Label5.textContent = localStorage.Top4;
    Label6.textContent = localStorage.Top5;
    Label7.textContent = localStorage.Top6;
    Label8.textContent = localStorage.Top7;
    Label9.textContent = localStorage.Top8;
    Label10.textContent = localStorage.Top9;
    Label11.textContent = localStorage.Top10;
}

function ResetTopScore() {
  localStorage.Top1 = "";
  localStorage.Top2 = "";
  localStorage.Top3 = "";
  localStorage.Top4 = "";
  localStorage.Top5 = "";
  localStorage.Top6 = "";
  localStorage.Top7 = "";
  localStorage.Top8 = "";
  localStorage.Top9 = "";
  localStorage.Top10 = "";

  localStorage.Score1 = 0;
  localStorage.Score2 = 0;
  localStorage.Score3 = 0;
  localStorage.Score4 = 0;
  localStorage.Score5 = 0;
  localStorage.Score6 = 0;
  localStorage.Score7 = 0;
  localStorage.Score8 = 0;
  localStorage.Score9 = 0;
  localStorage.Score10 = 0;

  RestoreTopScore();

}

function InputDone(result, value) {
  if(result==1) {

    if(StageNum >= localStorage.Score1) {

      localStorage.Score10 = localStorage.Score9;
      localStorage.Score9 = localStorage.Score8;
      localStorage.Score8 = localStorage.Score7;
      localStorage.Score7 = localStorage.Score6;
      localStorage.Score6 = localStorage.Score5;
      localStorage.Score5 = localStorage.Score4;
      localStorage.Score4 = localStorage.Score3;
      localStorage.Score3 = localStorage.Score2;
      localStorage.Score2 = localStorage.Score1;
      localStorage.Score1 = StageNum;

      localStorage.Top10 = localStorage.Top9;
      localStorage.Top9 = localStorage.Top8;
      localStorage.Top8 = localStorage.Top7;
      localStorage.Top7 = localStorage.Top6;
      localStorage.Top6 = localStorage.Top5;
      localStorage.Top5 = localStorage.Top4;
      localStorage.Top4 = localStorage.Top3;
      localStorage.Top3 = localStorage.Top2;
      localStorage.Top2 = localStorage.Top1;
      localStorage.Top1 = value  +  " "  +  Score.textContent;
 } else {
      if(StageNum >= localStorage.Score2) {
        localStorage.Score10 = localStorage.Score9;
        localStorage.Score9 = localStorage.Score8;
        localStorage.Score8 = localStorage.Score7;
        localStorage.Score7 = localStorage.Score6;
        localStorage.Score6 = localStorage.Score5;
        localStorage.Score5 = localStorage.Score4;
        localStorage.Score4 = localStorage.Score3;
        localStorage.Score3 = localStorage.Score2;
        localStorage.Score2 = StageNum;

        localStorage.Top10 = localStorage.Top9;
        localStorage.Top9 = localStorage.Top8;
        localStorage.Top8 = localStorage.Top7;
        localStorage.Top7 = localStorage.Top6;
        localStorage.Top6 = localStorage.Top5;
        localStorage.Top5 = localStorage.Top4;
        localStorage.Top4 = localStorage.Top3;
        localStorage.Top3 = localStorage.Top2;
        localStorage.Top2 = value  +  " "  +  Score.textContent;
 } else {
        if(StageNum >= localStorage.Score3) {
          localStorage.Score10 = localStorage.Score9;
          localStorage.Score9 = localStorage.Score8;
          localStorage.Score8 = localStorage.Score7;
          localStorage.Score7 = localStorage.Score6;
          localStorage.Score6 = localStorage.Score5;
          localStorage.Score5 = localStorage.Score4;
          localStorage.Score4 = localStorage.Score3;
          localStorage.Score3 = StageNum;

          localStorage.Top10 = localStorage.Top9;
          localStorage.Top9 = localStorage.Top8;
          localStorage.Top8 = localStorage.Top7;
          localStorage.Top7 = localStorage.Top6;
          localStorage.Top6 = localStorage.Top5;
          localStorage.Top5 = localStorage.Top4;
          localStorage.Top4 = localStorage.Top3;
          localStorage.Top3 = value  +  " "  +  Score.textContent;
 } else {
          if(StageNum >= localStorage.Score4) {
            localStorage.Score10 = localStorage.Score9;
            localStorage.Score9 = localStorage.Score8;
            localStorage.Score8 = localStorage.Score7;
            localStorage.Score7 = localStorage.Score6;
            localStorage.Score6 = localStorage.Score5;
            localStorage.Score5 = localStorage.Score4;
            localStorage.Score4 = StageNum;

            localStorage.Top10 = localStorage.Top9;
            localStorage.Top9 = localStorage.Top8;
            localStorage.Top8 = localStorage.Top7;
            localStorage.Top7 = localStorage.Top6;
            localStorage.Top6 = localStorage.Top5;
            localStorage.Top5 = localStorage.Top4;
            localStorage.Top4 = value  +  " "  +  Score.textContent;
 } else {
            if(StageNum >= localStorage.Score5) {
              localStorage.Score10 = localStorage.Score9;
              localStorage.Score9 = localStorage.Score8;
              localStorage.Score8 = localStorage.Score7;
              localStorage.Score7 = localStorage.Score6;
              localStorage.Score6 = localStorage.Score5;
              localStorage.Score5 = StageNum;

              localStorage.Top10 = localStorage.Top9;
              localStorage.Top9 = localStorage.Top8;
              localStorage.Top8 = localStorage.Top7;
              localStorage.Top7 = localStorage.Top6;
              localStorage.Top6 = localStorage.Top5;
              localStorage.Top5 = value  +  " "  +  Score.textContent;
 } else {
              if(StageNum >= localStorage.Score6) {
                localStorage.Score10 = localStorage.Score9;
                localStorage.Score9 = localStorage.Score8;
                localStorage.Score8 = localStorage.Score7;
                localStorage.Score7 = localStorage.Score6;
                localStorage.Score6 = StageNum;

                localStorage.Top10 = localStorage.Top9;
                localStorage.Top9 = localStorage.Top8;
                localStorage.Top8 = localStorage.Top7;
                localStorage.Top7 = localStorage.Top6;
                localStorage.Top6 = value  +  " "  +  Score.textContent;
 } else {
                if(StageNum >= localStorage.Score7) {
                  localStorage.Score10 = localStorage.Score9;
                  localStorage.Score9 = localStorage.Score8;
                  localStorage.Score8 = localStorage.Score7;
                  localStorage.Score7 = StageNum;

                  localStorage.Top10 = localStorage.Top9;
                  localStorage.Top9 = localStorage.Top8;
                  localStorage.Top8 = localStorage.Top7;
                  localStorage.Top7 = value  +  " "  +  Score.textContent;
 } else {
                  if(StageNum >= localStorage.Score8) {
                    localStorage.Score10 = localStorage.Score9;
                    localStorage.Score9 = localStorage.Score8;
                    localStorage.Score8 = StageNum;

                    localStorage.Top10 = localStorage.Top9;
                    localStorage.Top9 = localStorage.Top8;
                    localStorage.Top8 = value  +  " "  +  Score.textContent;
 } else {
                    if(StageNum >= localStorage.Score9) {
                      localStorage.Score10 = localStorage.Score9;
                      localStorage.Score9 = StageNum;

                      localStorage.Top10 = localStorage.Top9;
                      localStorage.Top9 = value  +  " "  +  Score.textContent;
 } else {
                      if(StageNum >= localStorage.Score10) {
                        localStorage.Score10 = StageNum;

                        localStorage.Top10 = value  +  " "  +  Score.textContent;
 } else {
                        _msgbox_confirm("You are not in the Top 10");
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    RestoreTopScore();
  }
}

Image2.onclick = function() { savethefunction_rvar="";
  if(! Skip_Option && ! GameOver) {
    Audio3.play();
    clearInterval(timeref);
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
  if(! Fifty_Option && ! OptionNow && ! GameOver) {
    Answer1.textContent  = "";
    Answer2.textContent  = "";
    Answer3.textContent  = "";
    Answer4.textContent  = "";
        Audio3.play();

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
  if(! Croud_Option && ! OptionNow && ! GameOver) {
    Answer1.textContent  = "";
    Answer2.textContent  = "";
    Answer3.textContent  = "";
    Answer4.textContent  = "";
    Audio3.play();

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
    Image4.firstChild.src = "images/croud_x.png";
  }
return savethefunction_rvar; }

function Timer() { savethefunction_rvar="";
  if(! GameOver) {
    TimeLimit = TimeLimit - 1;
    Audio2.play();
    ProgressBar1.value = TimeLimit;
    if(TimeLimit == 0) {
      _msgbox_confirm("Game Over");
      GameO.hidden = False;
      GameOver = True;
 //NavBar1.hidden = True
 //NavBar2.hidden = False
      nsbDOMAttr(NavBar1,'style.display', "none");
      nsbDOMAttr(NavBar2,'style.display', "");
      nsbDOMAttr(GameO,'style.display', "");

      Audio4.play();
      clearInterval(timeref);
    }
 } else {
    ProgressBar1.Visible = False;
  }
return savethefunction_rvar; }

NavBar2.onclick = function() { savethefunction_rvar="";
  GameOver = False;
  TimeLimit = 61;
  StageNum = 1;
  Fifty_Option = False;
  Croud_Option = False;
  Skip_Option = False;
  OptionNow = False;
  Image2.firstChild.src = "images/skip.png";
  Image3.firstChild.src = "images/50.png";
  Image4.firstChild.src = "images/croud.png";
  Lnum = 1;
  nsbDOMAttr(NavBar1,'style.display', "");
  nsbDOMAttr(NavBar2,'style.display', "none");
  nsbDOMAttr(GameO,'style.display', "none");

  for   (x =1; x  <= 100; x ++) {
    DoneQ[x] = "";
  }
  Image1.Left = 0;
  Image1.Top = 0;
  Image1.Width = 320;
  Image1.Height = 460;
  GameO.hidden = True;
  ProgressBar1.Visible = True;
  ProgressBar1.max = 60;
  ProgressBar1.value = 60;
  Score.textContent = "0";
  clearInterval(timeref);
  Audio1.play();
  GetQ();
  ClearAll();
return savethefunction_rvar; }

function ChangeLevel() { savethefunction_rvar="";
  l1.style.color = "white";
  l2.style.color = "white";
  l3.style.color = "white";
  l4.style.color = "white";
  l5.style.color = "white";
  l6.style.color = "white";
  l7.style.color = "white";
  l8.style.color = "white";
  l9.style.color = "white";
  l10.style.color = "white";
  l11.style.color = "white";
  l12.style.color = "white";
  l13.style.color = "white";
  l14.style.color = "white";
  l15.style.color = "white";

  if(StageNum == 1 ) { l1.style.color = "red"; }
  if(StageNum == 2 ) { l2.style.color = "red"; }
  if(StageNum == 3 ) { l3.style.color = "red"; }
  if(StageNum == 4 ) { l4.style.color = "red"; }
  if(StageNum == 5 ) { l5.style.color = "red"; }
  if(StageNum == 6 ) { l6.style.color = "red"; }
  if(StageNum == 7 ) { l7.style.color = "red"; }
  if(StageNum == 8 ) { l8.style.color = "red"; }
  if(StageNum == 9 ) { l9.style.color = "red"; }
  if(StageNum == 10 ) { l10.style.color = "red"; }
  if(StageNum == 11 ) { l11.style.color = "red"; }
  if(StageNum == 12 ) { l12.style.color = "red"; }
  if(StageNum == 13 ) { l13.style.color = "red"; }
  if(StageNum == 14 ) { l14.style.color = "red"; }
  if(StageNum == 15 ) { l15.style.color = "red"; }

return savethefunction_rvar; }
window.addEventListener('load', function() {
  Form2.style.display = 'block';
  NSB.addProperties(Image5);
  NSB.TitleBar_init('TitleBar1','Home','Home,Right');
  NSB.addProperties(TitleBar1);
  NSB.NavBar_jqm_init('NavBar3','Back');
  NSB.addProperties(NavBar3);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar3_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  Form2.style.display = 'none';
}, false);
Form2.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form2);
NavBar3.onclick = function() { savethefunction_rvar="";
  ChangeForm(Form1);
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Form3.style.display = 'block';
  NSB.addProperties(Image6);
  NSB.TitleBar_init('TitleBar2','Home,Left','Home,Right');
  NSB.addProperties(TitleBar2);
  NSB.NavBar_jqm_init('NavBar4','Restart Game');
  NSB.addProperties(NavBar4);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar4_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()


  NSB.addProperties(Label1);


  NSB.addProperties(Label1Copy);
NSB.addProperties(Audio1);
  Form3.style.display = 'none';
}, false);
Form3.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form3);

NavBar4.onclick = function(choice1) { savethefunction_rvar="";
  if(choice1== "Restart_Game") {
    ChangeForm(Form1);
    clearInterval(timeref);
    NavBar2.onclick();
  }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Form4.style.display = 'block';
  NSB.addProperties(Image7);


  NSB.addProperties(l1);


  NSB.addProperties(l2);


  NSB.addProperties(l3);


  NSB.addProperties(l4);


  NSB.addProperties(l5);


  NSB.addProperties(l10);


  NSB.addProperties(l9);


  NSB.addProperties(l8);


  NSB.addProperties(l7);


  NSB.addProperties(l6);


  NSB.addProperties(l15);


  NSB.addProperties(l14);


  NSB.addProperties(l13);


  NSB.addProperties(l12);


  NSB.addProperties(l11);
  NSB.NavBar_jqm_init('NavBar5','Start');
  NSB.addProperties(NavBar5);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar5_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  Form4.style.display = 'none';
}, false);
Form4.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form4);
NavBar5.onclick = function() { savethefunction_rvar="";
  clearInterval(timeref);
  GetQ();
  ChangeForm(Form1);
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Form5.style.display = 'block';
  NSB.NavBar_jqm_init('NavBar4Copy','Restart Game');
  NSB.addProperties(NavBar4Copy);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar4Copy_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.TitleBar_init('TitleBar2Copy','Home,Left','Home,Right');
  NSB.addProperties(TitleBar2Copy);


  NSB.addProperties(Label2);


  NSB.addProperties(Label3);


  NSB.addProperties(Label4);


  NSB.addProperties(Label5);


  NSB.addProperties(Label6);


  NSB.addProperties(Label7);


  NSB.addProperties(Label8);


  NSB.addProperties(Label9);


  NSB.addProperties(Label10);


  NSB.addProperties(Label11);
  NSB.addDisableProperty(Button1);
  NSB.addProperties(Button1);

  Form5.style.display = 'none';
}, false);
Form5.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form5);
NavBar4Copy.onclick = function(choice1) { savethefunction_rvar="";
  if(choice1== "Restart_Game") {
    ChangeForm(Form1);
    clearInterval(timeref);
    NavBar2.onclick();
  }
return savethefunction_rvar; }

Button1.onclick = function() { savethefunction_rvar="";
  ResetTopScore();
return savethefunction_rvar; }

function RestoreTopScore() {
    Label2.textContent = localStorage.Top1;
    Label3.textContent = localStorage.Top2;
    Label4.textContent = localStorage.Top3;
    Label5.textContent = localStorage.Top4;
    Label6.textContent = localStorage.Top5;
    Label7.textContent = localStorage.Top6;
    Label8.textContent = localStorage.Top7;
    Label9.textContent = localStorage.Top8;
    Label10.textContent = localStorage.Top9;
    Label11.textContent = localStorage.Top10;
}

function ResetTopScore() {
  localStorage.Top1 = "";
  localStorage.Top2 = "";
  localStorage.Top3 = "";
  localStorage.Top4 = "";
  localStorage.Top5 = "";
  localStorage.Top6 = "";
  localStorage.Top7 = "";
  localStorage.Top8 = "";
  localStorage.Top9 = "";
  localStorage.Top10 = "";

  localStorage.Score1 = 0;
  localStorage.Score2 = 0;
  localStorage.Score3 = 0;
  localStorage.Score4 = 0;
  localStorage.Score5 = 0;
  localStorage.Score6 = 0;
  localStorage.Score7 = 0;
  localStorage.Score8 = 0;
  localStorage.Score9 = 0;
  localStorage.Score10 = 0;

  RestoreTopScore();

}

window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


