    let gameName = document.querySelector('.menu h2');
    let playBtn = document.getElementById('play_btn');
    let stngsBtn = document.getElementById('stngs_btn');

    //functions

    function contentAppear(){
        gameName.style.animation = 'appearing 2s 1 forwards';

        setTimeout(()=>{
            playBtn.style.animation = 'appearing 2s 1 forwards';

                setTimeout(()=>{
                    stngsBtn.style.animation = 'appearing 2s 1 forwards';
                }, 1500)
        }, 1500);
    }

    playBtn.onclick = ()=>{
        console.log('play');
    }

    stngsBtn.onclick = ()=>{
        console.log('settings opened')
    }

    //events

    document.addEventListener('DOMContentLoaded', contentAppear);