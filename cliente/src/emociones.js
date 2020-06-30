
const video = document.getElementById('deteccionEmocionesVideo');

Promise.all([
  faceapi.nets.faceExpressionNet.loadFromUri('/modelos'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/modelos'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/modelos'),
  faceapi.nets.tinyFaceDetector.loadFromUri('/modelos'),
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)

  /*setInterval(async () => {  
    try {
      const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      var datosNeutral = faceapi.resizeResults(detections, displaySize).expressions.neutral;
      var datosHappy = faceapi.resizeResults(detections, displaySize).expressions.happy;
      var datosSad = faceapi.resizeResults(detections, displaySize).expressions.sad;
      var datosAngry = faceapi.resizeResults(detections, displaySize).expressions.angry;
      var datosFearful = faceapi.resizeResults(detections, displaySize).expressions.fearful;
      var datosSurprised = faceapi.resizeResults(detections, displaySize).expressions.surprised;
      var datosDisgusted = faceapi.resizeResults(detections, displaySize).expressions.disgusted;
      var maximo = Math.max(datosAngry, datosDisgusted, datosFearful, datosHappy, datosNeutral, datosSad, datosSurprised);
      if (datosNeutral == maximo) {
        //console.log("Neutro: "+maximo);
        $('#estadoAlumno').css('background-color', ColorNeutral);
        this.ContadorNeutro++
        this.usuario.Neutro.valor = this.usuario.Neutro.valor + 1;
      }
      if (datosFearful == maximo) {
        //console.log("Miedo: "+maximo);
        $('#estadoAlumno').css('background-color', ColorFearful);
        this.ContadorMiedo++
        this.usuario.Miedo.valor = this.usuario.Miedo.valor + 1;
      }
      if (datosAngry == maximo) {
        //console.log("Enfadado: "+maximo);
        $('#estadoAlumno').css('background-color', ColorAngry);
        this.ContadorEnfadado++
        this.usuario.Enfadado.valor = this.usuario.Enfadado.valor + 1;
      }
      if (datosHappy == maximo) {
        //console.log("Feliz: "+maximo);
        $('#estadoAlumno').css('background-color', ColorHappy);
        this.ContadorFeliz++
        this.usuario.Felicidad.valor = this.usuario.Felicidad.valor + 1;
      }
      if (datosSad == maximo) {
        //console.log("Triste: "+maximo);
        $('#estadoAlumno').css('background-color', ColorSad);
        this.ContadorTriste++
        this.usuario.Triste.valor = this.usuario.Triste.valor + 1;
      }
      if (datosSurprised == maximo) {
 
        $('#estadoAlumno').css('background-color', ColorSurprised);
        this.ContadorSorprendido++
        this.usuario.Sorpresa.valor = this.usuario.Sorpresa.valor + 1;
      }
      if (datosDisgusted == maximo) {
        //console.log("Disgustado: "+maximo);
        $('#estadoAlumno').css('background-color', ColorDisgusted);
        this.ContadorDisgustado++
        this.usuario.Disgustado.valor = this.usuario.Disgustado.valor + 1;
      }
      this.contador = this.contador + 1;
      //console.log(contador);
    } catch (error) {
      //console.log("Ha dado error");
      this.ContadorNeutro++;
      this.usuario.Neutro.valor = this.usuario.Neutro.valor + 1;
      this.contador++;
    }
    if (this.contador == 5) {
      //enviar resultados
      //console.log('Hemos llegado a 10');
      //console.log('Resultado: ['+this.ContadorDisgustado+']['+this.ContadorEnfadado+']['+this.ContadorFeliz+']['+this.ContadorMiedo+']['+this.ContadorNeutro+']['+this.ContadorSorprendido+']['+this.ContadorTriste)+']';
      //console.log(this.ContadorNeutro);
      console.log(usuario);
      var datos = [
        { "label": "Neutro", "valor": this.ContadorNeutro },
        { "label": "Felicidad", "valor": this.ContadorFeliz },
        { "label": "Triste", "valor": this.ContadorTriste },
        { "label": "Enfadado", "valor": this.ContadorEnfadado },
        { "label": "Miedo", "valor": this.ContadorMiedo },
        { "label": "Disgustado", "valor": this.ContadorDisgustado },
        { "label": "Sorpresa", "valor": this.ContadorSorprendido }
      ];
      //console.log(datos);
      ponerDatos(usuario, datos);
      this.ContadorDisgustado = 0;
      this.ContadorEnfadado = 0;
      this.ContadorFeliz = 0;
      this.ContadorMiedo = 0;
      this.ContadorNeutro = 0;
      this.ContadorSorprendido = 0;
      this.ContadorTriste = 0;
      this.contador = 0;
      this.usuario.Disgustado.valor = 0;
      this.usuario.Enfadado.valor = 0;
      this.usuario.Felicidad.valor = 0;
      this.usuario.Miedo.valor = 0;
      this.usuario.Neutro.valor = 0;
      this.usuario.Sorpresa.valor = 0;
      this.usuario.Triste.valor = 0;
    }
 
    //const age = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withAgeAndGender()
    //console.log(faceapi.resizeResults(detections, displaySize));
    //console.log(faceapi.resizeResults(age, displaySize));
 
 
  }, 1000)*/
})