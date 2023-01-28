import { Client } from 'whatsapp-web.js'
import * as qrcode from 'qrcode-terminal'

const client = new Client({})

client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
})

let clientReady: undefined | Client
async function getReadyClient(): Promise<Client> {
    if (clientReady) return clientReady

    clientReady = await new Promise(resolve => {
        client.on('ready', () => {
            console.log('client is ready!')
            resolve(client)
        })
    })
    return clientReady as Client
}
getReadyClient()

client.initialize()

export default getReadyClient