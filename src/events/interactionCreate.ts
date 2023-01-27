import { CommandInteraction, Client, Interaction, ContextMenuCommandInteraction, ButtonInteraction } from "discord.js";
import getCommands from "../Commands";

export default async (client: Client, interaction: Interaction): Promise<void> => {

    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
        await handleSlashCommand(client, interaction);
    }
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction | ContextMenuCommandInteraction): Promise<void> => {

    const commandName = (await getCommands()).find(command => command.name === interaction.commandName)?.name
    const slashCommand = (await import(`../commands/${commandName}`)).default
    if (!slashCommand) {
        interaction.followUp({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
};