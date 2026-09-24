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
                question: "01 — What languages do you usually use in different settings and why?",
                answer: "I usually speak Creolese around my family because it is the language commonly used at home. At university, I speak Standard English because it is more suitable for the academic environment. At church, I also use Standard English because it is commonly used during services and communication. In the community, I mostly use Creolese because that is what people normally speak."
            },
            {
                question: "02 — What language(s) is/are spoken in different environments and by whom?",
                answer: "At home, everyone in my household speaks Creolese. At university, Standard English is mostly spoken by lecturers and students. At my place of worship, Standard English is used by the pastor and others during services. In the community, Creolese is mainly spoken by the people around me."
            },
            {
                question: "03 — What reactions do you observe to the languages used around you?",
                answer: "At home, everyone reacts normally because that is how we communicate. At university, people generally react normally, but Standard English is expected in formal situations. At church, some people may feel that those who use Standard English are more educated because of the way they speak. In the community, people usually react normally because Creolese is how most people communicate."
            },
            {
                question: "04 — What challenges may you face using language in this course?",
                answer: "One challenge may be using Standard English because I am more accustomed to Creolese. Sometimes speaking Standard English can be difficult because the community mostly speaks Creolese. I may also have difficulty pronouncing certain words correctly in Standard English."
            },
            {
                question: "05 — What do you hope to learn?",
                answer: "I hope to learn to use Standard English better and improve my pronunciation and clarity regardless of what other people say."
            }
        ]
    },


    shivrani: {
        number: "02 — MEMBER",
        name: "Shivrani Baldeo",
        usi: "USI: 1064915",

        answers: [
            {
                question: "01 — What languages do you usually use in different settings and why?",
                answer: "I use English at university because it is the language used in online classes, assignments, and coursework. At home and with relatives and friends, I sometimes use Creolese because it is more casual and easy to speak to people I am comfortable around. I change the way I speak depending on who I am talking to and where I am."
            },
            {
                question: "02 — What language(s) is/are spoken in different environments and by whom?",
                answer: "At home, I almost always hear and use English and Creolese with my family. At university, English is mainly used by lecturers and students because it is the main language for classes and coursework. In the community, Creolese is often used for casual conversations. The language depends on the people and the situation."
            },
            {
                question: "03 — What reactions do you observe to the languages used around you?",
                answer: "People react to English normally because it is more commonly used in formal places and universities and schools. Creolese is also commonly used in everyday conversations when people are relaxed and comfortable or with friends and family. Sometimes people might think someone sounds more serious, formal, or professional when they speak proper English."
            },
            {
                question: "04 — What challenges may you face using language in this course?",
                answer: "A challenge may be making sure to use formal English in assignments or when answering questions. I am used to speaking more casually with family and friends, so sometimes I have to think about how to word things properly for university."
            },
            {
                question: "05 — What do you hope to learn?",
                answer: "I expect to learn more about how people use English and Creolese in different situations, the different ways people speak, and why they change how they speak depending on who they are talking to. I hope the course helps me understand languages better and communicate more clearly."
            }
        ]
    },


    joyel: {
        number: "03 — MEMBER",
        name: "Joyel Forrester",
        usi: "USI: 1057140",

        answers: [
            {
                question: "01 — What languages do you usually use in different settings and why?",
                answer: "I mostly use English in different settings because it is the language I grew up knowing and am familiar with. I speak English at home with my family, at university with lecturers and classmates, and in the community when talking to others. I find English easy because I live in an English-speaking country where most people are comfortable using it."
            },
            {
                question: "02 — What language(s) is/are spoken in different environments and by whom?",
                answer: "At home, I mainly use English with my family. At university, I use English with lecturers and classmates. At work, I use English with coworkers and customers. At my place of worship, English is the main language. In the community, both English and Spanish are spoken depending on who I interact with."
            },
            {
                question: "03 — What reactions do you observe to the languages used around you?",
                answer: "English gets a normal reaction because it is the main language people are familiar with. Spanish can get comedic or confused reactions, especially if people do not understand it. Sometimes people laugh or look confused because they are not used to hearing Spanish around them."
            },
            {
                question: "04 — What challenges may you face using language in this course?",
                answer: "One challenge may be understanding certain unfamiliar words or terms. Since I mainly speak English, I might feel uncomfortable or unsure when having to use or understand another language. I may also have trouble expressing myself if I am unsure of the right words. I am willing to ask questions, learn from others, and improve."
            },
            {
                question: "05 — What do you hope to learn?",
                answer: "I hope to learn more about language use and how people communicate differently depending on their environment."
            }
        ]
    },


    maria: {
        number: "04 — MEMBER",
        name: "Maria Chester",
        usi: "USI: 1065347",

        answers: [
            {
                question: "01 — What languages do you usually use in different settings and why?",
                answer: "I mainly use Guyanese Creole and Standard English. I use Creole with friends and family because it is more relaxed and natural. I use Standard English at university and for formal writing because it is expected."
            },
            {
                question: "02 — What language(s) is/are spoken in different environments and by whom?",
                answer: "At home, my family speaks Creole, but we switch to English for school matters. At university, lecturers and students use Standard English for teaching and assignments. At work and places of worship, people use English formally but Creole informally. In the community, Creole is used more by everyone."
            },
            {
                question: "03 — What reactions do you observe to the languages used around you?",
                answer: "People see Standard English as more professional and educated, especially at university. Creole is seen as more friendly and gets a better response in the community. If Creole is used in a formal setting, some people may correct you or see it as unprofessional."
            },
            {
                question: "04 — What challenges may you face using language in this course?",
                answer: "One challenge may be switching from Creole to formal academic English in writing. I may also need to avoid mixing grammar from Creole into Standard English."
            },
            {
                question: "05 — What do you hope to learn?",
                answer: "I expect to learn how language changes in different social settings. I also want to learn how to use language more correctly for academic and professional purposes."
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