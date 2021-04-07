socket = io.connect("https://89113bb62236.ngrok.io");
socket.on('connect', () => {
    socket.emit('get_data')
});

socket.on('new_data', (price_data) => 
{
    var Profile1 = document.getElementById('profile1')
    var Bidspread1 = document.getElementById('bidspread1')
    var Askspread1 = document.getElementById('askspread1')
    var Bid1 = document.getElementById('bid1')
    var Ask1 = document.getElementById('ask1')

    var profile1 = price_data[0]['spreadProfile'];
    var bidspread1 = price_data[0]['bidSpread'];
    var askspread1 = price_data[0]['askSpread'];
    var bid1 = price_data[0]['bid'];
    var ask1 = price_data[0]['ask'];



    if(Profile1.innerHTML.trim() != profile1)
        Profile1.innerHTML = profile1;

    if(Bidspread1.innerHTML.trim() != bidspread1)
        Bidspread1.innerHTML = bidspread1;

    if(Askspread1.innerHTML.trim() != askspread1)
        Askspread1.innerHTML = askspread1;

    if(Bid1.innerHTML.trim() != bid1)
        Bid1.innerHTML = bid1;

    if(Ask1.innerHTML.trim() != ask1)
        Ask1.innerHTML = ask1;


        
    var Profile2 = document.getElementById('profile2')
    var Bidspread2 = document.getElementById('bidspread2')
    var Askspread2 = document.getElementById('askspread2')
    var Bid2 = document.getElementById('bid2')
    var Ask2 = document.getElementById('ask2')

    var profile2 = price_data[1]['spreadProfile'];
    var bidspread2 = price_data[1]['bidSpread'];
    var askspread2 = price_data[1]['askSpread'];
    var bid2 = price_data[1]['bid'];
    var ask2 = price_data[1]['ask'];



    if(Profile2.innerHTML.trim() != profile2)
        Profile2.innerHTML = profile2;

    if(Bidspread2.innerHTML.trim() != bidspread2)
        Bidspread2.innerHTML = bidspread2;

    if(Askspread2.innerHTML.trim() != askspread2)
        Askspread2.innerHTML = askspread2;

    if(Bid2.innerHTML.trim() != bid2)
        Bid2.innerHTML = bid2;

    if(Ask2.innerHTML.trim() != ask2)
        Ask2.innerHTML = ask2;



    var Profile3 = document.getElementById('profile3')
    var Bidspread3 = document.getElementById('bidspread3')
    var Askspread3 = document.getElementById('askspread3')
    var Bid3 = document.getElementById('bid3')
    var Ask3 = document.getElementById('ask3')

    var profile3 = price_data[2]['spreadProfile'];
    var bidspread3 = price_data[2]['bidSpread'];
    var askspread3 = price_data[2]['askSpread'];
    var bid3 = price_data[2]['bid'];
    var ask3 = price_data[2]['ask'];


    
    if(Profile3.innerHTML.trim() != profile3)
        Profile3.innerHTML = profile3;

    if(Bidspread3.innerHTML.trim() != bidspread3)
        Bidspread3.innerHTML = bidspread3;

    if(Askspread3.innerHTML.trim() != askspread3)
        Askspread3.innerHTML = askspread3;

    if(Bid3.innerHTML.trim() != bid3)
        Bid3.innerHTML = bid3;

    if(Ask3.innerHTML.trim() != ask3)
        Ask3.innerHTML = ask3;

    socket.emit("get_data")
});