// ===============================
// MEMBER INFORMATION
// ===============================

const members = {

    malika: { 
    number: "01 — MEMBER", 
    name: "Malika McKenzie", 
    usi: "USI: 1062531", 
 
    answers: [ 
        { 
            question: "05 — What do you hope to learn?", 
            answer: "The group hopes to better understand how and why people change the way they speak depending on their environment and audience. They also want to improve their Standard English, pronunciation, academic and professional communication, and overall understanding of language use." 
        } 
    ] 
},

   shivrani: { 
    number: "02 — MEMBER", 
    name: "Shivrani Baldeo", 
    usi: "USI: 1064915", 
 
    answers: [ 
        { 
            question: "04 — What challenges may you face using language in this course?", 
            answer: "Some challenges include switching between Creole and Standard English, especially when moving from casual conversations to academic writing. The group may also experience difficulties with pronunciation, grammar, unfamiliar words, and avoiding the mixing of Creole expressions with formal English." 
        } 
    ] 
},


   joyel: { 
    number: "03 — MEMBER", 
    name: "Joyel Forrester", 
    usi: "USI: 1057140", 
 
    answers: [ 
        { 
            question: "02 — What language(s) is/are spoken in different environments and by whom?", 
            answer: "At home, the group commonly uses English and Creole with family and relatives. At university, Standard English is mainly used by lecturers and students. English is also common in workplaces and places of worship, while Creole is frequently heard in casual community conversations. Spanish is also present in some community interactions." 
        }, 
        { 
            question: "03 — What reactions do you observe to the languages used around you?", 
            answer: "The group generally receives normal reactions when using English because it is widely understood. Standard English may be associated with being formal, professional, or educated, while Creole is often viewed as relaxed and friendly. Spanish can sometimes cause confusion or humorous reactions when others do not understand it." 
        } 
    ] 
},


maria: {
    number: "04 — MEMBER",
    name: "Maria Chester",
    usi: "USI: 1065347",

    answers: [
        {
            question: "01 — Language Used In Different Settings",
            answer: "The group mainly uses Standard English and Guyanese Creole, with some use of Spanish. Standard English is more common in formal settings such as university, work, church, and academic writing, while Creole is used more naturally with family, friends, and in the community. Language choice often depends on the people and setting."
        }
    ]
}

};


// ===============================
// MEMBER MODAL
// ===============================

const memberCards = document.querySelectorAll(".member-card");
const modal = document.querySelector("#memberModal");
const closeModal = document.querySelector(".close-modal");

const modalNumber = document.querySelector("#modalNumber");
const modalName = document.querySelector("#modalName");
const modalUSI = document.querySelector("#modalUSI");
const answersContainer = document.querySelector("#answers");


memberCards.forEach(card => {

    card.addEventListener("click", () => {

        const memberID = card.dataset.member;
        const member = members[memberID];

        modalNumber.textContent = member.number;
        modalName.textContent = member.name;
        modalUSI.textContent = member.usi;

        answersContainer.innerHTML = "";

        member.answers.forEach(item => {

            const answerDiv = document.createElement("div");

            answerDiv.classList.add("answer");

            answerDiv.innerHTML = `
                <h4>${item.question}</h4>
                <p>${item.answer}</p>
            `;

            answersContainer.appendChild(answerDiv);

        });

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});


function closeMemberModal() {

    modal.classList.remove("active");
    document.body.style.overflow = "auto";

}


closeModal.addEventListener("click", closeMemberModal);


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeMemberModal();
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMemberModal();
    }

});


// ===============================
// CASUAL / FORMAL TOGGLE
// ===============================

const toggles = document.querySelectorAll(".toggle");

const comparisonLabel = document.querySelector("#comparisonLabel");
const comparisonText = document.querySelector("#comparisonText");
const comparisonTags = document.querySelector("#comparisonTags");


toggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        toggles.forEach(button => {
            button.classList.remove("active");
        });

        toggle.classList.add("active");

        const mode = toggle.dataset.mode;

        if (mode === "casual") {

            comparisonLabel.textContent = "FRIENDS / CASUAL";

            comparisonText.textContent =
                "“Wah yuh seh? We goin' out?”";

            comparisonTags.innerHTML = `
                <span>Relaxed</span>
                <span>Casual</span>
                <span>Creolese</span>
            `;

        } else {

            comparisonLabel.textContent = "UNIVERSITY / FORMAL";

            comparisonText.textContent =
                "“What are you saying? Are we going out?”";

            comparisonTags.innerHTML = `
                <span>Formal</span>
                <span>Academic</span>
                <span>Standard English</span>
            `;

        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ===============================
// LANGUAGE BUTTON EFFECT
// ===============================

const languageButtons =
    document.querySelectorAll(".language-buttons button");


languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        languageButtons.forEach(btn => {
            btn.style.transform = "scale(1)";
        });

        button.style.transform = "scale(1.08)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 300);

    });

});


// ===============================
// CURSOR GLOW
// ===============================

const cursorGlow = document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "250px";
cursorGlow.style.height = "250px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.background =
    "radial-gradient(circle, rgba(216,181,109,0.08), transparent 70%)";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.transform = "translate(-50%, -50%)";
cursorGlow.style.zIndex = "-1";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", event => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});