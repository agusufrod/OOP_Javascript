new gridjs.Grid({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    ['heru', 'heru@gmail.com', '+62 812 679 9008'],
    ['agus', 'agus@gmail.com', '+62 812 679 9008'],
    ['rizky', 'rizky@gmail.com', '+62 812 679 9008'],
    ['jabar', 'jabar@gmail.com', '+62 812 679 9008'],
    ['bram', 'bram@mail.com', '+62 812 679 9008'],
  ],
}).render(document.getElementById('oop'));

export default oop;
