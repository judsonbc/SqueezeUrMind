
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


  NSB.addProperties(GameO);
  NSB.NavBar_jqm_init('NavBar2','Restart Game');
  NSB.addProperties(NavBar2);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar2_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
NSB.addProperties(Audio2);
NSB.addProperties(Audio3);
NSB.addProperties(Audio4);
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var  GameOver,timeref,TimeLimit,StageNum,Q=createMultiDimArray('100'),Ans=createMultiDimArray('100,5'),Qnum,Lnum,DoneQ=createMultiDimArray('100'),MaxQ=createMultiDimArray('3'),MyAns,Skip_Option,Fifty_Option,Croud_Option,OptionNow;

Audio1.play();
GameOver = False;
TimeLimit = 60;
StageNum = 1;

Fifty_Option = False;
Croud_Option = False;
Skip_Option = False;
OptionNow = False;
Lnum = 1;

NavBar2.hidden = True;
MaxQ[1] = 27;
MaxQ[2] = 21;
MaxQ[3] = 14;

for   (x =1; x  <= 100; x ++) {
  DoneQ[x] = "";
}

if(True) {
  Q[1] = "An electronic device that can store data And retrieve information.";
  Ans[1][1] = "a. Hardware";
  Ans[1][2] = "b. CPU";
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

  Q[28] = "A place where files are stored temporarily.";
  Ans[28][1] = "a. ROM";
  Ans[28][2] = "b. Expansion Slot";
  Ans[28][3] = "c. RAM";
  Ans[28][4] = "d. Chipset";
  Ans[28][5] = "c. RAM";

  Q[29] = "It is a universal help in almost every windows program.";
  Ans[29][1] = "a. F1";
  Ans[29][2] = "b. F2";
  Ans[29][3] = "c. F5";
  Ans[29][4] = "d. F8";
  Ans[29][5] = "a. F1";

  Q[30] = "It is a shortcut keys to print the current page or document.";
  Ans[30][1] = "a. Ctrl+E";
  Ans[30][2] = "b. Ctrl+F";
  Ans[30][3] = "c. Ctrl+S";
  Ans[30][4] = "d. Ctrl+P";
  Ans[30][5] = "d. Ctrl+P";

  Q[31] = "Shortcut keys to copy selected items.";
  Ans[31][1] = "a. Ctrl+C";
  Ans[31][2] = "b. Ctrl+V";
  Ans[31][3] = "c. Ctrl+S";
  Ans[31][4] = "d. Ctrl+A";
  Ans[31][5] = "a. Ctrl+C";

  Q[32] = "The instruction that direct the computer";
  Ans[32][1] = "a. Software";
  Ans[32][2] = "b. Hardware";
  Ans[32][3] = "c. Input";
  Ans[32][4] = "d. Output";
  Ans[32][5] = "a. Software";

  Q[33] = "CD-ROM is a kind of";
  Ans[33][1] = "a. Optical disk";
  Ans[33][2] = "b. Magnetic disk";
  Ans[33][3] = "c. Magneto-optical disk";
  Ans[33][4] = "d. None of these";
  Ans[33][5] = "b. Magnetic disk";

  Q[34] = "Function performed to reverse the action of the earlier action.";
  Ans[34][1] = "a. Undo";
  Ans[34][2] = "b. Redo ";
  Ans[34][3] = "c. Paste";
  Ans[34][4] = "d. Copy";
  Ans[34][5] = "a. Undo";

  Q[35] = "Accronym of DRAM";
  Ans[35][1] = "a. Dynamic Random Access Memory";
  Ans[35][2] = "b. Disk Random Access Memory";
  Ans[35][3] = "c. Device Random Access Memory";
  Ans[35][4] = "d. DynamicRandom AccessMicroprocessor";
  Ans[35][5] = "a. Dynamic Random Access Memory";

  Q[36] = "It provides access to input and output devices";
  Ans[36][1] = "a. Input/Output Panel";
  Ans[36][2] = "b. Front Panel Connector Cables";
  Ans[36][3] = "c. Internet connection";
  Ans[36][4] = "d. IDE cable";
  Ans[36][5] = "a. Input/Output Panel";

  Q[37] = "It is a system of resource that able computer user to view and interact with a variety of information";
  Ans[37][1] = "a. Internet connection";
  Ans[37][2] = "b. WWW";
  Ans[37][3] = "c. TCP/IP";
  Ans[37][4] = "d. Ethernet";
  Ans[37][5] = "b. WWW";

  Q[38] = "Copy of text stored in the computer and only accessible through the computer.";
  Ans[38][1] = "a. Hard copy";
  Ans[38][2] = "b. Soft copy";
  Ans[38][3] = "c. Photo copy";
  Ans[38][4] = "d. Storage";
  Ans[38][5] = "b. Soft copy";

  Q[39] = "The smallest unit of information in a computer";
  Ans[39][1] = "a. Bit";
  Ans[39][2] = "b. Mega byte";
  Ans[39][3] = "c. Hertz";
  Ans[39][4] = "d. Byte";
  Ans[39][5] = "a. Bit";

  Q[40] = "'WYSIWYG' is a great little computer word but what stands for?";
  Ans[40][1] = "a. Would You Show In World Your Group";
  Ans[40][2] = "b. What Your System Is Winning Your Group";
  Ans[40][3] = "c. Where Your System Is Where You Get";
  Ans[40][4] = "d. What You See Is What You Get";
  Ans[40][5] = "d. What You See Is What You Get";

  Q[41] = "The computer that is not considered as portable computer is.";
  Ans[41][1] = "a. Laptop computer";
  Ans[41][2] = "b. Mini computer";
  Ans[41][3] = "c. Notebook computer";
  Ans[41][4] = "d. None of these";
  Ans[41][5] = "b. Mini computer";

  Q[42] = "Which of the following is an example of non-volatile memory?";
  Ans[42][1] = "a. VLSI";
  Ans[42][2] = "b. LSI";
  Ans[42][3] = "c. ROM";
  Ans[42][4] = "d. RAM";
  Ans[42][5] = "c. ROM";

  Q[43] = "One byte is equivalent to.";
  Ans[43][1] = "a. 4 bits";
  Ans[43][2] = "b. 8 bits";
  Ans[43][3] = "c. 10 bits";
  Ans[43][4] = "d. 32 bits";
  Ans[43][5] = "b. 8 bits";

  Q[44] = "ROM is composed of ";
  Ans[44][1] = "a. Floppy Disk";
  Ans[44][2] = "b. Magnetic cores";
  Ans[44][3] = "c. Microprocessor";
  Ans[44][4] = "d. Photo Electric cells";
  Ans[44][5] = "d. Photo Electric cells";

  Q[45] = "The administrative section of the computer";
  Ans[45][1] = "a. Memory Unit";
  Ans[45][2] = "b. Input Unit";
  Ans[45][3] = "c. Central Processing Unit";
  Ans[45][4] = "d. BIOS Unit";
  Ans[45][5] = "c. Central Processing Unit";

  Q[46] = "Select the smallest memory size";
  Ans[46][1] = "a. Terabyte";
  Ans[46][2] = "b. Gigabyte";
  Ans[46][3] = "c. Kilobyte";
  Ans[46][4] = "d. Megabyte";
  Ans[46][5] = "c. Kilobyte";

  Q[47] = "Full form of TCP is ";
  Ans[47][1] = "a. Transmission Control Program";
  Ans[47][2] = "b. Transmission Control Protocol";
  Ans[47][3] = "c. Transfer Control Protocol";
  Ans[47][4] = "d. Total Control Protocol";
  Ans[47][5] = "b. Transmission Control Protocol";

  Q[48] = "Data which is raw facts that you the user enter to the computer is called ";
  Ans[48][1] = "a. Output ";
  Ans[48][2] = "b. Input";
  Ans[48][3] = "c. Process";
  Ans[48][4] = "d. Unit";
  Ans[48][5] = "b. Input";

  Q[49] = "Which of the following is not a type of micro computer?";
  Ans[49][1] = "a. Desktop";
  Ans[49][2] = "b. Notebook";
  Ans[49][3] = "c. Personal Digital Assitant";
  Ans[49][4] = "d. Microprocessor";
  Ans[49][5] = "d. Microprocessor";

  Q[50] = "The product of the binary numbers 1011 and 1010 is";
  Ans[50][1] = "a. 0111011";
  Ans[50][2] = "b. 1110110";
  Ans[50][3] = "c. 1010101";
  Ans[50][4] = "d. 1101110";
  Ans[50][5] = "d. 1101110";

  Q[51] = "The sum of the binary number 01101 and 10111 , 11111 ";
  Ans[51][1] = "a. 100100₂";
  Ans[51][2] = "b. 010010₂";
  Ans[51][3] = "c. 110110₂";
  Ans[51][4] = "d. 101101₂";
  Ans[51][5] = "a. 100100₂";

  Q[52] = "The difference of binary number 1101110 and 10111 is ";
  Ans[52][1] = "a. 1100111₂";
  Ans[52][2] = "b.1010100₂";
  Ans[52][3] = "c. 1010111₂";
  Ans[52][4] = "d. 1110101₂";
  Ans[52][5] = "c. 1010111₂";

  Q[53] = "Convert 3A₁₆ to binary";
  Ans[53][1] = "a. 00111010₂";
  Ans[53][2] = "b. 01011101₂";
  Ans[53][3] = "c. 01101110₂";
  Ans[53][4] = "d. 11110011₂";
  Ans[53][5] = "a. 00111010₂";

  Q[54] = "Convert a binary number into its hexadecimal equivalent. 1010010₂";
  Ans[54][1] = "a. 25₁₆";
  Ans[54][2] = "b. 36₁₆";
  Ans[54][3] = "c. 52₁₆";
  Ans[54][4] = "d. 37₁₆";
  Ans[54][5] = "c. 52₁₆";

  Q[55] = "Convert 65₈ to binary";
  Ans[55][1] = "a. 111101₂";
  Ans[55][2] = "b. 110101₂";
  Ans[55][3] = "c. 011111₂";
  Ans[55][4] = "d. 001110₂";
  Ans[55][5] = "b. 110101₂";

  Q[56] = "Covert binary to octal 101100₂ is equal to";
  Ans[56][1] = "a. 52₈";
  Ans[56][2] = "b. 54₈";
  Ans[56][3] = "c. 45₈";
  Ans[56][4] = "d. 56₈";
  Ans[56][5] = "b. 54₈";

  Q[57] = "Convert 100101₂ to decimal";
  Ans[57][1] = "a. 37₁₀";
  Ans[57][2] = "b. 73₁₀";
  Ans[57][3] = "c. 38₁₀";
  Ans[57][4] = "d. 25₁₀";
  Ans[57][5] = "a. 37₁₀";

  Q[58] = "What is the number of bit patterns provided by a 7 bit code?";
  Ans[58][1] = "a. 64";
  Ans[58][2] = "b. 256";
  Ans[58][3] = "c. 128";
  Ans[58][4] = "d. 512";
  Ans[58][5] = "c. 128";

  Q[59] = "In what year did Robert Metcalf invent the Ethernet?";
  Ans[59][1] = "a. 1793";
  Ans[59][2] = "b. 1973";
  Ans[59][3] = "c. 1983";
  Ans[59][4] = "d. 1937";
  Ans[59][5] = "b. 1973";

  Q[60] = "The 8 number system which uses just 8 unique symbols";
  Ans[60][1] = "a. Hexa";
  Ans[60][2] = "b. Binary";
  Ans[60][3] = "c. Tera";
  Ans[60][4] = "d. Octal";
  Ans[60][5] = "d. Octal";

  Q[61] = "A terabyte comprises";
  Ans[61][1] = "a. 1024 gigabyte";
  Ans[61][2] = "b. 1024 kilobyte";
  Ans[61][3] = "c. 1024 megabyte";
  Ans[61][4] = "d. 1024 byte";
  Ans[61][5] = "a. 1024 gigabyte";

  Q[62] = "The word length of a computer is measured in";
  Ans[62][1] = "a. Bits";
  Ans[62][2] = "b. Bytes";
  Ans[62][3] = "c. Millimetres";
  Ans[62][4] = "d. Metres";
  Ans[62][5] = "b. Bytes";

  Q[63] = "What term related to computers means billion?";
  Ans[63][1] = "a. Byte";
  Ans[63][2] = "b. Mega";
  Ans[63][3] = "c. Giga";
  Ans[63][4] = "d. Hertz";
  Ans[63][5] = "c. Giga";

}

function Main() {
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
  if(Lnum == 2 ) { Qnum = Qnum + 27; }
  if(Lnum == 3 ) { Qnum = Qnum + 27 + 21; }

 while (DoneQ[Qnum] != "") {
    Qnum= Math.floor(MaxQ[Lnum] * rnd()) + 1;
    if(Lnum == 2 ) { Qnum = Qnum + 27; }
    if(Lnum == 3 ) { Qnum = Qnum + 27 + 21; }
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
        _msgbox_confirm("Wrong Answer, Answer is : "  +  Ans[Qnum][5] );
        Audio4.play();
        GameOver = True;
        GameO.hidden = False;
        NavBar1.hidden = True;
        NavBar2.hidden = False;
        clearInterval(timeref);
         return savethefunction_rvar;
    }
  }
  if(choice == "About") {
    ChangeForm(Form2);
  }
return savethefunction_rvar; }

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
      NavBar1.hidden = True;
      NavBar2.hidden = False;
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
  NavBar2.hidden = True;
  NavBar1.hidden = False;
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
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


