import {Socket,createServer} from "net";
import CatNip from "../CatNip";

//server
createServer(function (socket:Socket) {
    console.log("connected");

    //When recive data
    socket.on('data', function (chunk:Buffer) {
        let catnip = new CatNip()
        catnip.decodeFrame(chunk)
        console.log("frame type:",catnip.getFrameType)
        console.log("mac:",catnip.getClientMacAddress)
    });
}).listen(8080);

// client
let s = new Socket();
s.connect(8080);
// Create tram
let a = [CatNip.START_TRAM,CatNip.FRAME_HELLO_LENGTH,CatNip.STATUS_HELLO,0x70,0x4B,0x7B,0x2A,0x03,0xA4]
a.push(CatNip.calculateCheckSum(a))
let b = new Uint8Array(a);

//send tram
s.write(b);
s.end();

const test = 0x12, test1 = 0x10
const add = (a:number, b:number) => (a << Math.ceil(Math.log2(b)) + 1) + b;
const arr = new Uint8Array([0x12,0x10])
//console.log(parseInt(test.toString(2) + test1.toString(2), 2))
console.log(CatNip.concatenateBytes(arr))