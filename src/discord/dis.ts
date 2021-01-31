import discord from 'discord.js'
import {tech} from '../common/tech.js'

const technician = tech()

export async function dis(){

    const client = new discord.Client();
    client.on('ready', () => {
        console.log(`Logged in as ${client.user!.tag}!`);
      });
      
      client.on('message', msg => {
        if (msg.content === 'ping') {
          msg.reply('Pong!');
        }
      });
      
      client.login(await technician.read('DIS_TOKEN'));
}