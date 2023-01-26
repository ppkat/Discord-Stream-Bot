import Discord from 'discord.js'

// Crie uma instância de WebhookClient usando o ID e o token do webhook
const webhook = new Discord.WebhookClient({ url: 'https://discord.com/api/webhooks/1060342378466115667/ti3fYppr7vaq22vpxeu1NzNt8McGsQcpRu_RlVbyWDrCWoABmMVfrB-f-B7N5Wpo6dSZ' });

// Crie um objeto de opções para a mensagem
const embed = new Discord.EmbedBuilder()
  .setColor('Random')
  .setDescription(`❘ Preconceito, Racismo , homofobia resultará em um banimento imediato.

❘ É legal fornecer informações precisas aos novos membros, mas deixe a moderação para os membros da staff. Respeite quando eles estiverem fazendo seu trabalho. Não ordene os demais membros e não ria nem zombe daqueles que são repreendidos.

❘ É proibido usar perfis fakes com o intuito de enganar os outros membros. Seja de bots, influencers, ou outras pessoas. Caso seja um imitador, deixe isso explícito no seu nome.

❘ Proibido usar imagens de perfil que contenham  pornografia, entre outros

 ❘ Sem floods nos chats textos.

 ❘ A moderação do servidor tem liberdade para punir membros por motivos não citados acima, baseados no bom senso. E também podem interpretar diferentes regras da forma que acharem melhor dependendo do contexto da situação.

❘ Caso você não concorde com uma punição, entre em contato com um administrador.

 ❘ Como reportar um usuário? 

  Caso você veja alguém desrespeitando alguma regra, mande uma mensagem no nosso chat <#1060339232478068757>`)

// Envie a mensagem usando o objeto de opções
webhook.send({ embeds: [embed] });