const SHARESIGN = document.getElementById('share-sign');
const SHARESIGN2 = document.getElementById('share-sign-2');
const CARDFOOTER = document.getElementById('card-footer');
const CARDFOOTERGREY = document.getElementById('card-footer-grey');

function footerHandler (){
    if(screen.width<700){
        if (CARDFOOTER.classList.contains('show')){
            CARDFOOTER.classList.remove('show');
            CARDFOOTER.classList.add('none');
            CARDFOOTERGREY.classList.add('show');
        } else if (CARDFOOTERGREY.classList.contains('show')){
            
            CARDFOOTERGREY.classList.remove('show');
            CARDFOOTERGREY.classList.add('none');
            CARDFOOTER.classList.add('show');
        } 
    }else if (screen.width > 700){
        
        if(SHARESIGN.classList.contains('show')){
            CARDFOOTERGREY.classList.add('show');
            SHARESIGN.classList.remove('show');
            SHARESIGN2.classList.add('show');
            
        } else if (SHARESIGN2.classList.contains('show')){
            CARDFOOTERGREY.classList.remove('show');
            CARDFOOTERGREY.classList.add('none');
            SHARESIGN.classList.remove('none');
            SHARESIGN.classList.add('show');
            SHARESIGN2.classList.remove('none');
            SHARESIGN2.classList.add('none');
            
            
            
        }
        
    }
}


SHARESIGN.addEventListener('click', footerHandler);
SHARESIGN2.addEventListener('click', footerHandler);