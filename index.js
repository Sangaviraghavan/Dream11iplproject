// team and player data
var playerData = [
    {
        "id": 1,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "13.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 2,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 3,
        "playerName": "Faf Du Plessis (c)",
        "from": "RCB",
        "price": "7.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 4,
        "playerName": "Mohhamad Siraj",
        "from": "RCB",
        "price": "5.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Harshal Patel",
        "from": "RCB",
        "price": "10.75cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/114.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 6,
        "playerName": "Rohit Sharma(C)",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 7,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 8,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 9,
        "playerName": "Tim David",
        "from": "MI",
        "price": "8.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/636.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 10,
        "playerName": "Rahul Budhhi",
        "from": "MI",
        "price": "5.00 Cr",
        "isPlaying": true,
        "description": "bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20597.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "MS Dhoni(C)",
        "from": "CSK",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 12,
        "playerName": "Devon Conway",
        "from": "CSK",
        "price": "01.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 13,
        "playerName": "Robin Uthappa",
        "from": "CSK",
        "price": "02.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 14,
        "playerName": "Moeen Ali",
        "from": "CSK",
        "price": "08.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/206.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 15,
        "playerName": "Deepak Chahar",
        "from": "CSK",
        "price": "14.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png",
        "playerTeam": "Chennai Super Kings"
    },

    {
        "id": 16,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 17,
        "playerName": "Axar Patel",
        "from": "DC",
        "price": "09.00 Cr",
        "isPlaying": true,
        "description": "All-Rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 18,
        "playerName": "Anrich Nortje",
        "from": "DC",
        "price": "06.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/142.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 19,
        "playerName": "David Warner (c)",
        "from": "DC",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 20,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 21,
        "playerName": "Nitish Rana (c)",
        "from": "KKR",
        "price": "8.0 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 22,
        "playerName": "Lockie Ferguson",
        "from": "KKR",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/69.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 23,
        "playerName": "Ashok Sharma",
        "from": "KKR",
        "price": "18 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 24,
        "playerName": "Andre Russell",
        "from": "KKR",
        "price": "12.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png",
        "playerTeam": "Kolkata Knight Riders"
    }

];

var teamData = [

    {
        "id": 0,
        "teamFullName": "Chennai Super Kings",
        "sName": "CSK",
        "fullSname":"CSK (Chennai Super King)" ,
        "teamIcon": "https://seeklogo.com/images/I/ipl-chennai-super-kings-logo-E534CFAF4A-seeklogo.com.png",
        "WonCount": 4,
    },
    {
        "id": 1,
        "teamFullName": "Royal Challengers Bangalore",
        "sName": "RCB",
        "fullSname":"RCB (Royal challengers Bangalore)" ,
        "teamIcon": "https://seeklogo.com/images/I/ipl-royal-challengers-bangalore-logo-B2B03856E6-seeklogo.com.png",
        "WonCount": 0,
    },
    {
        "id": 2,
        "teamFullName": "Kolkata Knight Riders",
        "sName": "KKR",
        "fullSname":"KKR (Kolkata Knight Riders)" ,
        "teamIcon": "https://seeklogo.com/images/I/ipl-kolkata-knight-riders-logo-23993E9646-seeklogo.com.png?v=638133705430000000",
        "WonCount": 2,
    },
    {
        "id": 3,
        "teamFullName": "Mumbai Indians",
        "sName": "MI",
        "fullSname":"MI (Mumbai Indians)" ,
        "teamIcon": "https://seeklogo.com/images/I/ipl-mumbai-indians-logo-5FD6E24965-seeklogo.com.png",
        "WonCount": 5,
    },
    
    {
        "id": 4,
        "teamFullName": "Delhi Capitals",
        "sName": "DC",
        "fullSname":"DC (Delhi Capitals)" ,
        "teamIcon": "https://seeklogo.com/images/I/ipl-delhi-dare-devils-logo-E6278237F0-seeklogo.com.png",
        "WonCount": 2,
    }
];



var addteamclicked=()=>{
    window.open("./addTeam.html","_self")
}
var addPlayerClicked=()=>{
    window.open("./addPlayer.html","_self")
}





    let detailofTeam = [];
    let detailOfPlayer = [];
    var teamGrid = document.getElementById("container_teams")
    
    if(localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray", JSON.stringify(teamData));
    
    if(localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray", JSON.stringify(playerData));

    detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
    detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));

   


   
// search bar code goes here

var suggestArray=[];
for(var i=0;i<detailofTeam.length;i++){
    suggestArray.push(detailofTeam[i].sName)
    
}
let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".icon");



inputBox.onkeyup = (e)=>{
    if(e.keyCode==13){
        icon.click()
    }
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
      
        emptyArray = suggestArray.filter((data)=>{
           
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
           
            return data = `<li>${data}</li>`;
        });
        searchBar.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            
            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    }else{
        searchBar.classList.remove("active");
    }
}
function currentLi(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
   
        window.open(`./teams.html?name=${element.textContent}`,"_self")
    
    }
    searchBar.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// search bar code ends here

// grid cards for teams goes here

var teamMainBox=document.getElementById("container_teams")
for(var i=0;i<detailofTeam.length;i++){
teamMainBox.innerHTML+=`
<div    onclick="makethisinclick('${i}')"    class="minibox">

<img src="${detailofTeam[i].teamIcon}" class="mainimage" alt=""/> 
<div class="dataodcard">

  <p class="text1"> ${detailofTeam[i].teamFullName}   </p>
  <p class="text2"> Won Count : ${detailofTeam[i].WonCount} </p>
 
</div>

</div>

`

}

function makethisinclick(res){
    var clickedCard=detailofTeam[res].sName
    
    window.open(`./teams.html?name=${clickedCard}`,"_self")
    
    
}

