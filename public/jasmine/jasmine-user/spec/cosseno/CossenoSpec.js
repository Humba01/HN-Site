describe("Módulo do Cosseno", function() {

  describe("Ângulos Comuns", function() {

    it("deve fazer o cosseno de 30º", function() {

      var a = [30];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(0.8660254);

    });

    it("deve fazer o cosseno de 45º", function() {

      var a = [45];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(0.70710678);

    });

    it("deve fazer o cosseno de 60º", function() {

      var a = [60];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(0.5);

    });

    it("deve fazer o cosseno de 90º", function() {

      var a = [90];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(0);

    });

    it("deve fazer o cosseno de 120º", function() {

      var a = [120];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-0.5);

    });

    it("deve fazer o cosseno de 135º", function() {

      var a = [135];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-0.70710678);

    });

    it("deve fazer o cosseno de 150º", function() {

      var a = [150];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-0.8660254);

    });

    it("deve fazer o cosseno de 180º", function() {

      var a = [180];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-1);

    });

    it("deve fazer o cosseno de 210º", function() {

      var a = [210];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-0.8660254);

    });

    it("deve fazer o cosseno de 225º", function() {

      var a = [225];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-0.70710678);

    });

    it("deve fazer o cosseno de 240º", function() {

      var a = [240];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-0.5);

    });

    it("deve fazer o cosseno de 270º", function() {

      var a = [270];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(-0);

    });

    it("deve fazer o cosseno de 300º", function() {

      var a = [300];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(0.5);

    });

    it("deve fazer o cosseno de 315º", function() {

      var a = [315];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(0.70710678);

    });

    it("deve fazer o cosseno de 330º", function() {

      var a = [330];

      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(0.8660254);

    });
  });

  describe("Ângulos Diferentes", function() {

    it("deve fazer o cosseno de 420º", function() {

      var a = [420];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.5);
  
    });

    it("deve fazer o cosseno de 600º", function() {

      var a = [600];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(-0.5);
  
    });

    it("deve fazer o cosseno de 720º", function() {

      var a = [720];
  
      var exe = new Cosseno();

      expect(exe.uso(a)).toEqual(1);
  
    });

    it("deve fazer o cosseno de 900º", function() {

      var a = [900];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(-1);
  
    });

    it("deve fazer o cosseno de 1490º", function() {

      var a = [1490];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.64278761);
  
    });

    it("deve fazer o cosseno de 1800º", function() {

      var a = [1800];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(1);
  
    });
  });

  describe("Ângulos Decimais", function() {

    it("deve fazer o cosseno de 30.125º", function() {

      var a = [30.25];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.86383551);
  
    });

    it("deve fazer o cosseno de 30.25º", function() {

      var a = [30.25];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.86383551);
  
    });

    it("deve fazer o cosseno de 30.5º", function() {

      var a = [30.5];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.86162916);
  
    });
    
    it("deve fazer o cosseno de 30.75º", function() {

      var a = [30.25];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.86383551);
  
    });
  });

  
  describe("Ângulos Negativos", function() {

    it("deve fazer o cosseno de -30º", function() {

      var a = [-30];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.8660254);
  
    });

    it("deve fazer o cosseno de -40º", function() {

      var a = [-40];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.76604444);
  
    });
    
    it("deve fazer o cosseno de -50º", function() {

      var a = [-50];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.64278761);
  
    });
    
    it("deve fazer o cosseno de -60º", function() {

      var a = [-60];
  
      var exe = new Cosseno();
  
      expect(exe.uso(a)).toEqual(0.5);
  
    });
  });
});