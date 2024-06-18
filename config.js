const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '255738132447'
global.devs = '255738132447';
global.website = 'https://king-session.vercel.app' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'HUMBLE-BOY' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'HUMBLE-BOY' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ?'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUFSSnRGSUtORzNvUDE2YUpRNlkzVGNLTHRRbFJFSy9DMi9IM0psMUYydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzhXNTlYOVBYNVI0N3R4OG9WOWdFZnBtQWZNcFFqek9RQ20vU2JvUnRWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQWhDQUI4ajBscEQ3UjhtTkwxZGdiK1NYd0VWb0tYYXJLS1hPU1lCdDJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4eFcvSENjcnZxNEhlZ1UzQnZGK0Z4OS83Njh2RllYZEd6YWJ2Zk5GZHpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGRVN3ZEd0VlY0bmJkVHpqMENSOXJJRURML2xNWmdNY0xWRDM3eTg3bGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ4VGUrMEpTeWVVd3N1aXozNnBwak1QUHp2RW05MCt1NTJ2L0d1YUhyVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Fhd3ZIN0VHSkJGOEJDMm1qL3hvNWtlTTZhcVJpVUgzZ3EzN2lWSFIycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG1yM1I3am1tSVMxVFFZWFd3VjlEd1VXajZQbk54ZUlqanJMMjZSdnZRYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd3aWtWVEZPbGVvRU9UY0pqdHk5NzQ1L2w3enVCQ2FvTVRpb0xENjRyU3Era05hVGtrTVNNQjMvSktiUjFCYUtySjhQK3pCdURLMWNoaVIreFZhdGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJWamZGUU9iQVB5dStucm1rZG1hbGQxU1lyc1JvenFISHh0cU9wYk9NZlh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpeXdlNVZ1UFRKQ3prd0pVTng3ZjRRIiwicGhvbmVJZCI6ImZmYTNmOWZiLTE3NTctNDc5NC1hZDIxLTYxYTYwZTNjN2YzNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVbkRKalMwK094bVB4UHQ0ZldHYWpZVUxZc1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhsV3VzUndZUUNieEs2VXByUEhqMlJLZ1pZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNLVjhYR0RFIiwibWUiOnsiaWQiOiIyNTU3MzgxMzI0NDc6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xla2c3MEZFT2pkeHJNR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFEU1RTR1JxaUxSOUMrczU1TXhDK0Y4UlpNaXo5RGFaSS96dStrRVdNMUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZjQytNdnA1VEtNeGZ6N0RyUyt0TFpLRDZBeVp1WVJ6VkRtWFlVV1dxTDBSNUFteVgvRkk3MTJVUmNDZ0lLRTlMbUQxYlZwU0UwYTNudHZEakdXckRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGeDhKTGUwemU4V05CdmE5WUVDVElEdXRweXZCOXI4UWxxd3pqSU92eFh6cjYzczlJcGJWY05oYWY1SFlsMHJlK1pkUGVpdVFoMlNTOXZ4VE0xUnRqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTczODEzMjQ0NzozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkUTBrMGhrYW9pMGZRdnJPZVRNUXZoZkVXVElzL1EybVNQODd2cEJGak5RIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NzI2MzkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU10aiJ9': process.env.SESSION_ID,
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
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.2.9' : process.env.VERSION,
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
