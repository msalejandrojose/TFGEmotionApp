const miband = require('miband');

class pulseraMiBand {
    constructor() {
        this.chart = [];
        this.band = {};
        this.pulsacionesActuales = 0;
    }


    async connect() {
        try {
            const device = await navigator.bluetooth.requestDevice({
                filters: [{ services: [miband.advertisementService] }],
                optionalServices: miband.optionalServices
            });
            console.log('Connecting to device...');
            const server = await device.gatt.connect();
            console.log('Connected');
            this.band = new miband(server);
            this.startBandInit();
            console.log(this.band);
            if (device != null) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log(e);
        }
    }

    desconnect() {
        try {
            this.band.hrmStop();
        } catch (e) {

        }

    }

    async startBandInit() {
        try {
            await this.band.init();
            console.log('Starting heart rate medition...');
            this.band.on('heart_rate', (rate) => {
                //console.log(rate);
                this.pulsacionesActuales = rate;
            });
            //this.log('Start hour: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
            await this.band.hrmStart();
        } catch (error) {
            console.log('Error while trying to get heart rate');
        }
    }
}

pulseraMiband = new pulseraMiBand();

