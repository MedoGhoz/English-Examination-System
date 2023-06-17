import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MediaRecordHandler {
    mediaRecorder: any;
    chunks: any[] = [];
    stream: any;
    mimeType: any;
    canSend = false;
    audioBlob: any;
    encoder: any;
    audioContext: any;
    recording = false;
    encodingConfig = {
        flacData: {
            bps: 16,
            channels: 1,
            compression: 5,
        },
        sampleRate: 48000
    }

    input: any;
    node: any;
    blob: any
    audioUrl: any;
    setStream(stream: any) {
        this.stream = stream;
        this.audioContext = new AudioContext()
        this.input = this.audioContext.createMediaStreamSource(stream)
        if(this.input.context.createJavaScriptNode) {
            this.node = this.input.context.createJavaScriptNode(4096, 1, 1)
        } else if (this.input.context.createScriptProcessor) {
            this.node = this.input.context.createScriptProcessor(4096, 1, 1)
        } else {
            console.log('Could not create')
        }
        console.log('node', this.node)
        console.log(`Sample Rate: ${this.audioContext.sampleRate}`)
        console.log('config', this.encodingConfig)
        this.encoder.postMessage({
            cmd: 'init',
            config: {
                samplerate: this.encodingConfig.sampleRate,
                bps: this.encodingConfig.flacData.bps,
                channels: this.encodingConfig.flacData.channels,
                compression: this.encodingConfig.flacData.compression
            }
        })

        this.node.onaudioprocess = (e: any) => {
            if (!this.recording) 
                return;
            this.encoder.postMessage({
                cmd: 'encode',
                buf: e.inputBuffer.getChannelData(0)
            })
        }        

        this.input.connect(this.node)
        this.node.connect(this.audioContext.destination)
    }

    onDataAvailable(e: any) {
        this.chunks.push(e.data)
    }

    async start() {
        this.encoder = new Worker('static/encoder.js')
        this.encoder.onmessage = (e: any) => {
            if (e.data.cmd == 'end') { 
                this.blob = e.data.buf
                const audioUrl = window.URL.createObjectURL(e.data.buf)
                console.log("nothing herere", e.data.buf, audioUrl)
                this.audioUrl = audioUrl;
                // download.href = audioUrl
                // download.download = "output.flac"
            } else if (e.data.cmd == 'debug') {
                console.log(e.data)
            } else {
                console.log('Unkown event', e.data.cmd)
            }
        } 
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            console.log("getUserMedia supported.");
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                console.log('Got user persmission! :D');
                this.recording = true
                this.setStream(stream)
            } catch (err) {
                console.log('Something went wrong', err)
            }
        }
    }
    async record() {
        await this.start()
    }

    toggle(cb: any) {
        if (this.audioContext.state == 'running') {
            this.audioContext.suspend().then(() => cb('resume'));
        } else if (this.audioContext.state == 'suspended') {
            this.audioContext.resume().then(() => cb('pause'));
        }
        console.log(`Toggle statue: ${this.audioContext.state}`)
        return this.audioContext.state
    }
    
    stop() {

      this.recording = false;
      this.stopStream()
      this.encoder.postMessage({ cmd: 'finish' })
      this.input.disconnect()
      this.node.disconnect()
      this.node = this.input = null;
      console.log("herererere", this.audioUrl)
    }
    stopStream() {
        this.stream.getTracks().forEach( (track: any) => track.stop() );
    }
}





