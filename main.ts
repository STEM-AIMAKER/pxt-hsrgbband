namespace hsrgbband
{
    //% shim=sendBufferAsm
    export function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    //% weight=90
    //% blockId=callSend block="callSend"
    //% color.fieldEditor="gridpicker"
    export function callSend(value: number, offset: number, length1: number, pin: DigitalPin): void {

        let strip = new Strip();
       
        strip.buf = pins.createBuffer(60 * 3);
        strip.pin = pin
        strip.buf.fill(value, offset, length1);
        strip.callSend();
    }

    export class Strip {
        buf: Buffer;
        pin: DigitalPin


        callSend() {
            this.buf.fill(0,1,1);
            sendBuffer(this.buf, DigitalPin.P0)            
        }
    }
} 