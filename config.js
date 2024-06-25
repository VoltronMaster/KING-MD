const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("255738132447,")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // HUMBLE-BOY
global.sudo = process.env.SUDO || '255738132447'
global.devs = '255738132447';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME, HUMBLE-TECHNOLOGY
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,HUMBLE-BOY
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0x0cmQ5ZjRraWEvQTRhNk1zb3hxRWp6aHEzSVpYYVk2WUoyVG1jK0kwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEkwWlMrZElqSll1ai9yVzc2U2p1dzF5dGNUTEpJM2dveXlaRC9jSlQxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRkptc01Zdktab2JCbmFjQU1vU3JUdE1iM2RlZ3pJQm9KTXpRelF1LzB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHenkzU1JhblpyZnZYZmozYjJ1VXdDNFRhdTBaKzk2S0tFL3lJNThjYWk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FdUZwa0ZTSzdDSzdnWXZRNER1eUw4UzhLK04rd0tSaTBFa0ZzM1BuRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYxR0E4YkpxNkU0ekloaW05UVFtczVIcGRHSWpjUGFCQjkrUTRYVmM1RmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05LcUcySEt6akw1SHN2TE5lUGJYZHV0djJDOGRtRjYrd2owUWtWL1kwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem1oTWVjMWZzR1Nhc0YzZmw5N3dVUUhNSFdwMVd2YnE5dlh0UU9PeWt3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdWZEhrVXpZclM1Z25xaWRsNGlDVVdXSDYwcVZNNUZqRk5Hc1dmT3ErWUJoMnB1T2Z4MjZGWFkycnhqZzUrR3FZYUMxNW82QTNNUXhPRkgrSUwzbERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6Ikpyenh4QlVGajdGQnJpTUtMQ05WMWFES1QxbnJuVVBLY1RaOE9CNTNXeEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVWODV4Uno0UmJHNEZIcWtEMGdLcWciLCJwaG9uZUlkIjoiYTYwNGFhYTUtNTA1My00NDRiLWE3YzgtNzA2ODNiYTJlNjM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpVaGRKdy9pdGdzOXpDUXg1b0hUVExmVE1xbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbjVreXVaK0dSemdDaE9PejRPUkg1cmk2b009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUw4VE02TE0iLCJtZSI6eyJpZCI6IjI1NTczODEzMjQ0Nzo1MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGVrZzcwRkVPYUU2ck1HR0JzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMURTVFNHUnFpTFI5QytzNTVNeEMrRjhSWk1pejlEYVpJL3p1K2tFV00xQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTWl0UEs3Rm1XdGJUODRCWk5UdTQrNDJFaE1RUmMvNFo0L1J6dzgzZkxBZ3paRGh0dWhDM0V6dUFNNUNWUmtCbzZqZTRQSXdtMGFJOE94cVVXOHFqQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImR3S3JLajZtZUpKUnBtN3ZtTS9MUytvL1V3NWwxUEN0eDBXZmFoalhtNGo4WUF6b0VtcmNSQ1FtVXptamRJb2RBMjJ4cUFrQVZKcjlUUlhqTTVzT0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzM4MTMyNDQ3OjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRRMGswaGthb2kwZlF2ck9lVE1RdmhmRVdUSXMvUTJtU1A4N3ZwQkZqTlEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkzMDQ4MjB9
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
