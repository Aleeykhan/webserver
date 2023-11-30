class MSGStart {
    constructor() {
        this._Start_ = this._Start_.bind(this);
    }
    _Start_() {
        console.log("Messanger App is started...");
        return;
    }
}
class Messanger extends MSGStart {
    constructor(name, version) {
        super();
        this.name = name;
        this.version = version;
        this.Send = this.Send.bind(this);
        this.Details = this.Details.bind(this);
        this._Start_();
        this.Details();
    }
    Send(message) {
        console.log("[*] FROM: " + this.name + ", MESSAGE: " + message);
    }
    Details() {
        console.log("[*] NAME: " + this.name + "\n[*] VERSION: " + this.version);
    }
}
