'use strict';
const btnBookmark = document.querySelector(".btn-bookmark");
const btnTurq1 = document.querySelector(".btn-turq1");
const btnTurq2 = document.querySelector(".btn-turq2");
const bambooStand = document.querySelector(".bamboo-stand");
const btnTurq3 = document.querySelector(".btn-turq3");
const blackEdition = document.querySelector(".black-edition");
const btnModal1 = document.querySelector(".btn-modal1");
const btnModal2 = document.querySelector(".btn-modal2");
const btnModal3 = document.querySelector(".btn-modal3");
const smallModalClose = document.querySelector(".small-modal-close");
const bookmarText = document.querySelector(".btn-bookmark p");
const btnClose = document.getElementById("close-modal-img");
const modal = document.querySelector(".modal");
const smallOverlay = document.querySelector(".small-overlay");
const smallModal = document.querySelector(".small-modal");
const overlay = document.querySelector(".overlay");
const cardsTopLeftBTN = document.querySelectorAll(".cards-top-left");
const cardsHiddenText = document.querySelectorAll(".cards-hidden-text");
const cards = document.querySelectorAll(".cards");
const navMob = document.querySelector(".nav-mob");
const hamburgerBtn = document.querySelector(".hamburger");
const backedMoney = document.querySelector(".backed-money");
const totalBackers = document.querySelector(".total-backers");
const bill1 = document.querySelector(".bill1");
const bill2 = document.querySelector(".bill2");
const bill3 = document.querySelector(".bill3");
const numLeft1 = document.querySelector(".num-left1");
const numLeft2 = document.querySelector(".num-left2");
const cardsTopNumLeft1 = document.querySelector(".cards-top-right-top1");
const cardsTopNumLeft2 = document.querySelector(".cards-top-right-top2");
const cardsTopRightDown1 = document.querySelector(".cards-top-right-down1");
const cardsTopRightDown2 = document.querySelector(".cards-top-right-down2");




// esc close
document.addEventListener('keydown', function (e) {

    if  (e.key === 'Escape' && !smallModal.classList.contains('hidden')) {
        closeSmallModal();
    }
    else if (e.key === 'Enter' && !smallModal.classList.contains('hidden')) {
        closeSmallModal();
    }
    else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
    else if (e.key === 'Escape' && navMob.classList.contains("active")) {
        closeModal();
        navMob.classList.remove("active");
    }
  });

// Mob nav
const openNavMob = function () {
    navMob.classList.add("active");
    overlay.classList.remove('hidden');
    document.documentElement.style.setProperty('--bodyPosition', 'fixed');
  };

hamburgerBtn.addEventListener('click', openNavMob);

//Open small-model
const openSmallModal = function () {
    smallModal.classList.remove('hidden');
    smallOverlay.classList.remove('hidden');
    document.documentElement.style.setProperty('--bodyPosition', 'fixed');
  };

const closeSmallModal = function () {
    smallModal.classList.add('hidden');
    smallOverlay.classList.add('hidden');
};

smallOverlay.addEventListener('click', function(e) {
    if(e.target === smallOverlay) {
        closeSmallModal();
    }
});
smallModalClose.addEventListener('click', closeSmallModal);

//Open close modal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.documentElement.style.setProperty('--bodyPosition', 'fixed');
  };

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    document.documentElement.style.setProperty('--bodyPosition', 'static');
};

btnTurq1.addEventListener('click', openModal);
btnTurq2.addEventListener('click', function() {

    const textOfCard = bambooStand.querySelectorAll(".cards-hidden-text")
    textOfCard[0].classList.add("active");
    openModal();
    bambooStand.classList.add("active");

});
btnTurq3.addEventListener('click', function() {

    const textOfCard = blackEdition.querySelectorAll(".cards-hidden-text")
    textOfCard[0].classList.add("active");
    openModal();
    blackEdition.classList.add("active");

});
btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', function(e) {
    if(e.target === overlay) {
        closeModal();
    }
    if(navMob.classList.contains("active")) {
        navMob.classList.remove("active");
    }
});

//Open hidden massage
cardsTopLeftBTN.forEach((button) => {
    button.addEventListener('click', (e) => {
        const cliced = e.target.closest('.cards-top-left');
        const hidenText = cliced.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;
        const clicedCard = e.target.closest('.cards');

        if (hidenText.classList.contains("active")) {
            hidenText.classList.remove("active");
            clicedCard.classList.remove("active");
        } else {
            cardsHiddenText.forEach((text) => {
                text.classList.remove("active");
            })
            cards.forEach((card) => {
                card.classList.remove("active");
            })
            hidenText.classList.add("active");
            clicedCard.classList.add("active");
        }
    })
})

// calculator 
function calc1() {
    let sum = backedMoney.textContent.slice(1, backedMoney.length);
    sum=parseInt(sum.replace(/\,/g,''));
    let backers = parseInt(totalBackers.textContent.replace(/\,/g,''));
    const bill = parseInt(bill1.value);
    openSmallModal();
    sum += bill;
    sum = sum.toLocaleString("en-US");
    backedMoney.textContent = `$ ${sum}`
    backers += 1;
    backers = backers.toLocaleString("en-US");
    totalBackers.textContent = backers;
    console.log(sum, typeof sum)
}

bill1.addEventListener("click", function() {
    bill1.addEventListener('keydown', (event) => {

        if ( event.key === "Enter" && bill1.value !== '') {
            calc1()
        }
    })
  })

btnModal1.addEventListener('click', () => {
    if (bill1.value !== '') {
        calc1()
    }
} );

function calc2() {
    let sum = backedMoney.textContent.slice(1, backedMoney.length);
    sum=parseInt(sum.replace(/\,/g,''));
    let backers = parseInt(totalBackers.textContent.replace(/\,/g,''));
    const bill = parseInt(bill2.value);
    openSmallModal();
    sum += bill;
    sum = sum.toLocaleString("en-US");
    backedMoney.textContent = `$ ${sum}`
    backers += 1;
    backers = backers.toLocaleString("en-US");
    totalBackers.textContent = backers;

    let numLeft11 = numLeft1.textContent
    numLeft11 = numLeft11.slice( 0 , numLeft11.length-4)
    numLeft11 -= 1;
    numLeft1.innerHTML = `<h2 class="num-left1" >${numLeft11}<span>left</span></h2>`

    cardsTopNumLeft1.innerHTML = `<h4>${numLeft11}</h4><p>left</p>`

    cardsTopRightDown1.innerHTML = `
    <h4>${numLeft11}</h4>
    <p>left</p>
    `
}

bill2.addEventListener("click", function() {
    bill2.addEventListener('keydown', (event) => {

        if ( event.key === "Enter" && bill2.value !== '' && bill2.value >= "25" ) {
            calc2()
        }
    })
  })

btnModal2.addEventListener('click', () => {
    if (bill2.value !== '' && bill2.value >= "25" ) {
        calc2()
    }
} );

function calc3() {
    let sum = backedMoney.textContent.slice(1, backedMoney.length);
    sum=parseInt(sum.replace(/\,/g,''));
    let backers = parseInt(totalBackers.textContent.replace(/\,/g,''));
    const bill = parseInt(bill3.value);
    openSmallModal();
    sum += bill;
    sum = sum.toLocaleString("en-US");
    backedMoney.textContent = `$ ${sum}`
    backers += 1;
    backers = backers.toLocaleString("en-US");
    totalBackers.textContent = backers;

    let numLeft22 = numLeft2.textContent
    numLeft22 = numLeft22.slice( 0 , numLeft22.length-4)
    numLeft22 -= 1;
    numLeft2.innerHTML = `<h2 class="num-left1" >${numLeft22}<span>left</span></h2>`;
    cardsTopNumLeft2.innerHTML = `<div class="cards-top-right"><h4>${numLeft22}</h4><p>left</p></div>`;

    cardsTopRightDown2.innerHTML = `
    <h4>${numLeft22}</h4>
    <p>left</p>
    `
}

bill3.addEventListener("click", function() {
    bill3.addEventListener('keydown', (event) => {

        if ( event.key === "Enter" && bill3.value !== '' && bill3.value >= "75" ) {
            calc3()
        }
    })
  })

btnModal3.addEventListener('click', () => {
    if (bill3.value !== '' && bill3.value >= "75" ) {
        calc3()
    }
} );

// Bookmark/Bookmarked
btnBookmark.addEventListener('click', () => {
    btnBookmark.classList.toggle("active");

    if(bookmarText.textContent === "Bookmark") {
        bookmarText.textContent = "Bookmarked"
    } else {
        bookmarText.textContent = "Bookmark"
    }

})
