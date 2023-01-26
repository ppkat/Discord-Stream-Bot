import { CommandInteraction, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, Events, ButtonInteraction, MessageReaction } from "discord.js";
import { Command } from "../Command";
import { streamAction, Action } from '../scripts/UIControls'

export const jpstream: Command = {
    name: "jpstream",
    description: "Mostra os botões de controle da stream do jp",
    run: async (client: Client, interaction: CommandInteraction) => {

        let paused = true;

        function createStreamingControlsRow() {
            return new ActionRowBuilder<ButtonBuilder>()
                .addComponents([
                    new ButtonBuilder()
                        .setCustomId('rewind')
                        .setLabel('<<')
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('arrow_left')
                        .setLabel('\u21e6')
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('pause_button')
                        .setLabel(paused ? '▷' : '||') //▶️\u23f8
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('arrow_right')
                        .setLabel('\u21E8')
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId('fast_forward')
                        .setLabel('>>')
                        .setStyle(ButtonStyle.Primary)

                ]);
        }

        const messageButtons = await interaction.editReply({
            components: [createStreamingControlsRow()]
        });

        async function handleInteractions(i: ButtonInteraction | MessageReaction) {

            const action = i instanceof ButtonInteraction ? i.customId : i.emoji.name
            streamAction(action as Action)

            paused = action === 'pause_button' ? !paused : paused

            if (i instanceof ButtonInteraction) await i.update({ components: [createStreamingControlsRow()] })
            else await i.message.components
        }

        const buttonCollector = messageButtons.createMessageComponentCollector()
        buttonCollector?.on('collect', handleInteractions)

        const reactionCollector = messageButtons.createReactionCollector()
        reactionCollector.on('collect', handleInteractions)
        reactionCollector.on('remove', handleInteractions)
    }
};