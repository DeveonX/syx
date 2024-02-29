title = document.getElementById('typeWriteTitle');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeTitle(titleMessage){
    for(letter in titleMessage){
        title.innerHTML += titleMessage[letter];
        await sleep(30);
    }
    await sleep(2000)
    // now removing each letter
    for (let i = titleMessage.length; i >= 0; i--){
        title.innerHTML = titleMessage.slice(0, i)+"&nbsp;";
        await sleep(30);
    }
}

async function typeWrite() {
    while (true){
        for (let i = 0; i < titleMessages.length; i++) {
            title.innerHTML = "";
            await writeTitle(titleMessages[i]);
        }
    }
}


typeWrite();