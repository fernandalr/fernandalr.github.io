let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #985d87;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #985d87;">Lic. Tecnologías y sistemas de la Información.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
