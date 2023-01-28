import getReadyClient from "./clientInicialization"
import * as discord from 'discord.js'

export default async function waitGroupMessages(discClient: discord.Client, groupName: string) {
    const c = await getReadyClient()
    console.log('função chamada')

    c.on('message_create', async m => {
        if ((await m.getChat()).name !== groupName) return
        if (m.body.startsWith('🤖')) return
        if (!m.body) return
        if (!m.author) m.author = 'João Pedro' //author is only undefined when is i that have created the message

        const messageStructure = new discord.EmbedBuilder()
            .setAuthor({ name: m.author })
            .setDescription(m.body)
            .setColor('Green')
            .setFooter({
                text: 'Mensagem do whats', iconURL:
                    'https://imgs.search.brave.com/trNUmCtp4upCIt8BzomuMPtzXZdx65F3ZFJK47h2ML8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL2Njb3ZlcnMv/MTQ5OTk1NTMzNXdo/YXRzYXBwLWljb24t/bG9nby1wbmcucG5n'
            })

        const whatsChannel = await discClient.channels.fetch('1068353294210191400') as discord.TextBasedChannel
        await whatsChannel.send({ embeds: [messageStructure] })
    })
}