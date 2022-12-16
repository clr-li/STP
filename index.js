// install express with `npm install express` 
const express = require('express');
var cors = require('cors');
let fs = require('fs');
let path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Deta micro to handle tutor portal'));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

// const { Deta } = require("deta");
// // add your Project Key
// const deta = Deta("b0o5hv7v_QgjTEixCaKw5Cdd6Ci755WKwpUGWb7rh");
// // name your DB
// const base = deta.Base("tutorData");

function getData() {
  return {
    FHpvqAs6beafEPFDhyf8hIyDCnC2: {
      name: "Alexander Metzger",
      education: "CS student at University of Washington",
      yearsTutored: 3.5,
      students: 7,
      status: "Founder",
      imageURL: "https://cdn.glitch.global/2f6a531f-cfcc-42b6-851a-31c3358c7092/TemporaryAlex.jpeg?v=1662437429002",
      bio: "Born in Denmark, Alex shares his birth country's values of accessible education and free thinking. During his high school years, he volunteered with local Elementary Schools in the Seattle Area to make music education freely accessible. He has since expanded to more subject areas to share his philosophy of combining learning styles (visual, tactile, explanations, examples) to develop understanding of why patterns form rather than blindly memorizing how they work. This philosophy has guided his own learning as he explored his own passion for Math and Science when he was younger through books and experiments. His understanding later fascillitated him enjoying Science Olympiad, Data Science internships, and research opportunities with Professor Richard at UW.",
      subjects: [
        { subject: "English", color: "blue", qualification: "AP English and CHS Composition. 99th percentile on Reading/Writing SAT" },
        { subject: "Math", color: "green", qualification: "College level courses through multivariate calculus with 4.0 GPA. 800 out of 800 on the math SAT" },
        { subject: "Science", color: "orange", qualification: "5's in AP Physics 1+2 and AP Chemistry. Medaled at State and National Science Olympiad competitions" },
        { subject: "Computer Science", color: "gold", qualification: "Won national ML competitions. Data Science intern with the European Environment Agency" },
        { subject: "Danish", color: "red", qualification: "Native speaker. Lived in Denmark for 12.5 years. Experienced with teaching techniques for grammar and pronounciation" },
        { subject: "Violin", color: "brown", qualification: "12 years of practice. Conservatory classes. Seattle Youth Symphony first violin. All State. All Northwest. Concertmaster" },
        { subject: "Chess", color: "grey", qualification: "Played online competitively for 4 years. 99th percentile on Chess.com. Good with beginners" }
      ],
      completedLessons: [{date:'2022-9-18', hours: 1.5, student: 'Oleg'}],
      studentNames: ['Ashlene','Paige','Andrew','Oleg','Owen','Franklin','Saniru']
    },
  };
}

class Data {
  constructor(relativePath, name) {
    this.dict = false;
    this.file = path.join(__dirname, relativePath, name);
    fs.readFile(this.file, function(err, data) {
      if (!err) {
        this.dict = JSON.parse(data);     
      }
      if (!data || this.dict == []) {
        this.dict = getData();
        fs.writeFile(this.file, JSON.stringify(this.dict), function (err) {
          if (err) return console.error(err);
        });
      }
    });
  }
  
  fetch() {
    if (!this.dict) return { items: null, count: 0 };
    let items = Object.values(this.dict);
    return { items: items, count: items.length };
  }
  
  get(key) {
    if (!this.dict) return null;
    return this.dict[key] || null;
  }
  
  update(updates, key) {
    if (!this.dict) return "error: database not loaded yet";
    
    for (const [column, value] of Object.entries(updates)) {
      this.dict[key][column] = value;
    }

    fs.writeFile(this.file, JSON.stringify(this.dict), function (err) {
      if (err) return console.error(err);
    });
    return null;
  }
}
let db = new Data('/tmp/', 'tutorData.json')

// class Data {
//   constructor(base) {
//     this.base = base;
//   }
  
//   async fetch() {
//     const { items } = await db.fetch();
//     return items;
//   }
  
//   async get(key) {
//     const { item } = await db.get(key);
//     return item;
//   }
  
//   async update(updates, key) {
//     const { res } = await db.update(updates, key);
//   }
// }
// let db = new Data(base);


function getTutorData(data) { // get rid of key and completed lessons (anything that shouldn't be visible to the public)
  return {
    name: data.name,
    education: data.education,
    yearsTutored: data.yearsTutored,
    students: data.students,
    status: data.status,
    imageURL: data.imageURL,
    bio: data.bio,
    subjects: data.subjects
  };
}

let tutorDatas = false;
function generateTutorDatas() {
  if (tutorDatas) return;
  let res = db.fetch();
  let count = res.count;
  let allTutors = res.items;
  tutorDatas = [];
  for (let i = 0; i < count; i++) {
    tutorDatas.push(getTutorData(allTutors[i]));
  }
}


app.get('/tutorData', (req, res) => {
  generateTutorDatas();
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(tutorDatas));    
});

function isloggedin(request) {
  if (!request.headers.uid || db.get(request.headers.uid) === null) {
    // console.log('no/wrong uid');
    return false;
  } else {
    // console.log('logged in');
    return true;
  }
}

app.get('/tutor', (req, res) => {
    let tutor = db.get(req.headers.uid);
    if (tutor) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(tutor));
    } else 
      res.sendStatus(403);
});

app.post('/updateTutor', (req, res) => {
  if (isloggedin(req)) {
    let error = db.update(req.body.updates, req.headers.uid)
    if (error == null) {
      res.sendStatus(200);
    } else 
      res.sendStatus(500);
  } else {
    res.sendStatus(403);
  }
});

// export 'app'
module.exports = app