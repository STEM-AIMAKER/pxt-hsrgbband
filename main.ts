namespace hsrgbband
{
    //% shim=sendBufferAsm
    export function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    export class Strip {
        buf: Buffer;


        callSend() {
            this.buf.fill(0,1,1);
            sendBuffer(this.buf, DigitalPin.P0)            
        }
    }
} 