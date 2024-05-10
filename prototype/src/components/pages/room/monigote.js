const Monigote = {
    estado: {
      hambre: 50,
      higiene: 100,
      diversion: 75,
      felicidad: 80,
      ambicion: 60,
      antojo: '' 
    },
    
    alimentar: function() {
      this.estado.hambre -= 10;
      this.estado.felicidad += 10;
    },
  
    banar: function() {
      this.estado.higiene = 100;
      this.estado.diversion -= 10;
    },
  
    jugar: function() {
      this.estado.diversion += 20;
      this.estado.hambre += 5;
    },
  
  };
  
  export default Monigote;