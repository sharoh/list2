var shuffleSequence = seq(anyType);
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        hideProgressBar: true,
	transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        hideProgressBar: true, 
	mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
	as: ["Yes", "No"],
	hideProgressBar: true,
	hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    
    "FlashSentence", {
	hideProgressBar: true
   
    },
    "Form", {
	hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

   //DashedSentence Controller separates at -

      ["intro", "Form", {
        html: { include: "example_intro.html" },
       
    } ],

    [["item1",1], "FlashSentence",{s: "trash ----- bash ----- gash"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late"},
      "Form", {
	  html: { include: "recall.html" }},
    ],

[["item1",1], "FlashSentence",{s: "mo ----- bro ----- go"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late"},
      "Form", {
	  html: { include: "recall.html" }},
    ],

[["item1",1], "FlashSentence",{s: "mom ----- bomb ----- gualm"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late"},
      "Form", {
	  html: { include: "recall.html" }},
    ],   
       

[["item2",2], "FlashSentence",{s: "wonky ----- trip ----- blip"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late"},
      "Form", {
	  html: { include: "recall.html" }},
    ],

[["item2",2], "FlashSentence",{s: "crude ----- bro ----- go"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late", as: ["The professor", "The dog", ]},
      "Form", {
	  html: { include: "recall.html" }},
    ],

[["item2",2], "FlashSentence",{s: "balah ----- tro ----- loow"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late", as: ["The professor", "The dog", ]},
      "Form", {
	  html: { include: "recall.html" }},
    ],

   

 [["item3",3], "FlashSentence",{s: "nuts ----- facesitting ----- chode"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late"},
      "Form", {
	  html: { include: "recall.html" }},
    ],

[["item3",3], "FlashSentence",{s: "see ----- pee ----- 3"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late"},
      "Form", {
	  html: { include: "recall.html" }},
    ],

[["item3",3], "FlashSentence",{s: "peepee ----- weewee ----- heehee"},
      "DashedSentence", {s: "The student-thought that-the professor-was too late-for the important meeting."},
      "Question", {q: "_____was too late"},
      "Form", {
	  html: { include: "recall.html" }},
    ],];
