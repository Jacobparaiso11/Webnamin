const myLoveLetters = [
    { 
      month: "February", 
      sender: "Jacob", 
      text: "hiiiiii magandaaaa kongg asawaa, uhm gusto ko lang batiin ka ng HAPPY FIRST MONTHSARRY yeeeyy naka first na tayo, and 11 months. gustoo ko lang mag pasalamat sa lahat lahat kahit na alam kong mahirap na kayanan parin natin, kahit sobrang daming challenge, at pag subok na yung dumaan sa relasyon natin nalampasan natin lahat. hindi naman sa nagugulat ako pero kasi may mga times na mahirap narin para satin, may mga nangyareng unexpected, and alam kong akala mo rin magiging magulo o may mag babago dahi lang don pero hindi naman ako ganon bebe, okay naman nako ron siguro (haha emoji) pero yun nga po thankyou kasi hindi ka sumuko, palagi akong nag papasalamat don, at salamt kasi nalampasan natin lahat ng yun kahit na sobrang hirap. yun bebeee Happy first monthsarry ulit, more monthsarry to come. alam ko na hindi moko iiwan pero gusto ko lang humingi ng pasinsya sa lahat. sanaa maging masaya tong araw na to for us and maging memorable kasi ito yung first monthsarry natin, and palagi alam kong palagi kotong sinasabi, babawi ako palagi bebe, babawi ako nang babawi, and pasinsya kana patuloy kang na didisappoint, katulad nga ng sabi ko I'll be better for u, for us. Iloooooooveeeyouuuuuuuuuuuuuuuuu bebe, dana maging happy u, maging happy tayo ngayong araw, and sana meron cuddle and maraming kiss, missss na misss kitaa palagi, mahaaaal na mahaaal kita, at patuloyyy kitang mamahalin alam mo yan. thankyouuuu sa lahat bebe, thankyouuuuuusomucchh, sobrang grateful akong na kilala ka. I know na marami tayong hardest time, misunderstanding, away, pero kahit na ganon sana hindi nabawasan yung love mo for me, sana patuloy mo lang akong mahalin. sobrang swerte ko dahil nakilala kita, mahirap na para sakin kapag nawala ka kasi nasanay akong nandito, may nag aalalaga, may nag aalala, may nag mamahal pero its not mean na pinipili kita dahil don, pinipili kita dahil mahal kita, dahil ikaw ang mahal ko. Iloveyou allways, always. hindi mawawala basta basta yung love ko for u kahit na anong mangyare, siguro naman naputunayan ko nayan sayo, na hinding hindi mawawala yan kahit saan at anong sitwasyon ang pag daanan natin. Gustoo ko lang na sana mas tumagal pa tayo, at maging tayo na talaga, sana maging asawa talaga kita, alam mo kung bakit sana, baka kasi gumising ka isang araw hindi mo nako mahal. alam ko naman na hindi basta basta mawawala yang love mo pero sana kahit na ganon, piliin mo parin ako, ako parin ang piliin mo. kung dumating man yung oras na hindi mo nako mahal, hayaan mo lang akong mahalin ka, hanggang dumating sa puntong handa ka ng mahalin ulit ako, hinding hindi mawawala yung love ko para sayo, hinding hindi yun ma aalis ng kahit ano, at kahit pa na sobrang daming misunderstanding ang dumaan sating dalawa mahal kita, at hindi na mag babago yun." 
    },
    { 
      month: "February", 
      sender: "Nicole", 
      text: "HAPPPY 1ST MONTHSARRY POOOOO LOVEEELOVEEE KOOOOOOO, 1st month na official na talaga, our first month was rough, puro tampuhan, misunderstandings and doubts. We went through a lot, to the point na napagod at muntik na hiwalayan. All of that happened in just a month. Pero here we are, standing strong and mahal na mahal parin ang isat isa. I hope na sa next 5 to 10 years and many more, ganon pa rin tayo. Sana magkasama tayo habangbuhay. Sana yung trust, patience and love, panghabangbuhay na. Alam ko na mahina ako, may times na ambilis ko sumuko, pero kilala mo naman ako, konting pahinga lang, umaayos naman na. Mabilis madala ng emosyon kaya sana patuloy mokong iintindihin at mamahalin despite sa ugali ko. Kuha mo na ugali ko e, kaya mabilis nalang tayo mag bati rin. Ayunn lang loveeeloveee, tandaan mo palagi na andito lang ako, pwede mong sandalan kahit kailan. You'll always have my shoulder when you cry~~~~~~ kumanta?!? eme HAHAHAHAHSH. Happpy 1st again bebeeee, more months and years to us poooo Iloooooooveeeeeeeloveeeeeeeeyouuuuuuuuuuupoooooo bebeeee alwayssss and forever, to infinity and beyond<33333333" 
    },
    { month: "March", sender: "Jacob", text: "..." },
    { month: "March", sender: "Nicole", text: "..." },
    { month: "April", sender: "Jacob", text: "..." },
    { month: "April", sender: "Nicole", text: "..." },
    { month: "May", sender: "Jacob", text: "..." },
    { month: "May", sender: "Nicole", text: "..." },
    { month: "June", sender: "Jacob", text: "..." },
    { month: "June", sender: "Nicole", text: "..." },
    { month: "August", sender: "Jacob", text: "..." },
    { month: "August", sender: "Nicole", text: "..." } ,
    { month: "September", sender: "Jacob", text: "..." },
    { month: "September", sender: "Nicole", text: "..." },
    { month: "October", sender: "Jacob", text: "..." },
    { month: "October", sender: "Nicole", text: "..." },
    { month: "November", sender: "Jacob", text: "..." },
    { month: "November", sender: "Nicole", text: "..." },
    { month: "December", sender: "Jacob", text: "..." },
    { month: "December", sender: "Nicole", text: "..." },
    { month: "January", sender: "Jacob", text: "..." },
    { month: "January", sender: "Nicole", text: "..." }
];

function checkPass() {
    const pass = document.getElementById('passInput').value;
    const lock = document.getElementById('lock-screen');
    const error = document.getElementById('error-msg');
    
    if (pass === '021326') {
        lock.style.transform = 'translateY(-100%)';
        setTimeout(() => lock.style.display = 'none', 1200);
    } else if (pass.length >= 6) {
        error.style.opacity = '1';
    } else {
        error.style.opacity = '0';
    }
}

function showTab(tabId) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(tabId)) link.classList.add('active');
    });
    const sections = document.querySelectorAll('.tab-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

const container = document.getElementById('message-container');
myLoveLetters.forEach(msg => {
    const card = document.createElement('div');
    card.className = 'message-card';
    card.innerHTML = `<span style="font-size:0.7rem; color:var(--electric-blue); font-weight:600; text-transform:uppercase;">${msg.month} • ${msg.sender}</span>
                      <p style="font-family:var(--heading-font); font-size:1rem; margin-top:5px;">"${msg.text}"</p>`;
    container.appendChild(card);
});

const startDate = new Date("February 13, 2026 00:00:00").getTime();
function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h < 10 ? "0"+h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0"+m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0"+s : s;
}
setInterval(updateTimer, 1000);
updateTimer();