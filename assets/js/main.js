/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!

DATI:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/


// create objects array with team members
const teamMembers = [

   {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      pic: 'wayne-barnett-founder-ceo.jpg'
   },
   {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      pic: 'angela-caroll-chief-editor.jpg'
   },
   {
      name: 'Walter Gordon',
      role: 'Office Manager',
      pic: 'walter-gordon-office-manager.jpg'
   },
   {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      pic: 'angela-lopez-social-media-manager.jpg'
   },
   {
      name: 'Scott Estrada',
      role: 'Developer',
      pic: 'scott-estrada-developer.jpg'
   },
   {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      pic: 'barbara-ramos-graphic-designer.jpg'
   },
];

console.log(teamMembers);
console.log('.-.-.-.--.-.-.-.-.-.-.-.-.-..-.-.-.');// space log

getMemberInfo();

// select row element to DOM
const rowEl = document.querySelector('.row');

createMarkup();



/* FUNCTIONS */
// function who log name, role and pic into console
function getMemberInfo() {
   for (let i = 0; i < teamMembers.length; i++) {
      const member = teamMembers[i];
      console.log(member);
      console.log(member.name);
      console.log(member.role);
      console.log(member.pic);
   }
}

// function who create DOM element card 
function createMarkup() {

   for (let i = 0; i < teamMembers.length; i++) {
      const memberToDOM = teamMembers[i];
      const markup = `
      <div class="col p-3">
         <div class="card p-3">
            <img src="./assets/img/${memberToDOM.pic}" alt="" class="img-fluid rounded-circle">
            <p><strong>Name:</strong> ${memberToDOM.name}</p>
            <p><strong>Role:</strong> ${memberToDOM.role}</p>
            <p><strong>Pic src:</strong> ${memberToDOM.pic}</p>
         </div>
      </div>
      `
      rowEl.innerHTML += markup;
   }
}