'use strict';
const btnBookmark = document.querySelector(".btn-bookmark");
const btnTurq1 = document.querySelector(".btn-turq1");
const btnTurq2 = document.querySelector(".btn-turq2");
const bambooStand = document.querySelector(".bamboo-stand");
const btnTurq3 = document.querySelector(".btn-turq3");
const blackEdition = document.querySelector(".black-edition");
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
const btnModals = document.querySelectorAll(".btn-modal");
const bills = document.querySelectorAll(".bill")
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
    if(e.target === smallModalClose) {
        closeSmallModal();
    }
});

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

//hidden bottom modal card
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
let bill;
let dataId;
let topRightText;
function calc(bill, dataId) {
    let sum = backedMoney.textContent.slice(1, backedMoney.length);
    sum=parseInt(sum.replace(/\,/g,''));
    let backers = parseInt(totalBackers.textContent.replace(/\,/g,''));
    sum += bill;
    sum = sum.toLocaleString("en-US");
    backedMoney.textContent = `$ ${sum}`
    backers += 1;
    backers = backers.toLocaleString("en-US");
    totalBackers.textContent = backers;
    openSmallModal();
    switch(dataId) {
        case 0:
            break;
        case 24:
            topRightText = cardsTopNumLeft1.textContent;
            topRightText = topRightText.slice( 0 , topRightText.length-4)
            topRightText -=1;
            cardsTopNumLeft1.innerHTML = `<h4>${topRightText}</h4><p>left</p>`
            cardsTopRightDown1.innerHTML = `<h4>${topRightText}</h4><p>left</p>`
            numLeft1.innerHTML = `${topRightText}<span>left</span>`
            break;
        case 74:
            topRightText = cardsTopNumLeft2.textContent;
            topRightText = topRightText.slice( 0 , topRightText.length-4)
            topRightText -=1;
            cardsTopNumLeft2.innerHTML = `<h4>${topRightText}</h4><p>left</p>`
            cardsTopRightDown2.innerHTML = `<h4>${topRightText}</h4><p>left</p>`
            numLeft2.innerHTML = `${topRightText}<span>left</span>`
            break;
    }
}
btnModals.forEach((btnModal) => {
    btnModal.addEventListener('click', (e) => {
        bill = parseInt(e.target.parentElement.children[1].value);
        dataId = parseInt(e.target.parentElement.children[1].getAttribute('data-id'));

        if (!isNaN(bill) && bill > dataId) {
            calc(bill, dataId)
        }
    })
})

document.addEventListener('keydown', (e) => {
    if ( e.key === "Enter") {
        bills.forEach((billValue) => {
            if (billValue === document.activeElement) {
                bill = parseInt(billValue.value)
                dataId = parseInt(billValue.getAttribute('data-id'))
                if (!isNaN(bill) && bill > dataId) {
                    calc(bill, dataId)
                }
            }
        })
    }
})

// Bookmark/Bookmarked
btnBookmark.addEventListener('click', () => {
    btnBookmark.classList.toggle("active");

    if(bookmarText.textContent === "Bookmark") {
        bookmarText.textContent = "Bookmarked"
    } else {
        bookmarText.textContent = "Bookmark"
    }
})