const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'amiyaprogramer@gmail.com'
global.github = 'https://github.com/TechwithAmee1/Dragon-MD-V3'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/mr.amiya.ofc' // add your username
global.sudo = process.env.SUDO || '94767453646'
global.devs = '94767453646';
global.website = 'https://github.com/TechwithAmee1/Dragon-MD-V3' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.ibb.co/30VVgGW/Amiya.jpg'
module.exports = {
  botname: process.env.BOT_NAME || '𝐃𝐫𝐚𝐠𝐨𝐧 𝐁𝐨𝐭',
  ownername:process.env.OWNER_NAME || '៚֟ᴍ֢ʀͥ.ᴀͣᴍͫɪʏ͙ᴀ֮༒֘ᴏꜰ̐̈́ᴄ֮༒֘ʏᴛ͢⁸⁵⁴¹༆࿐',
  sessionName: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lQWXdzZGFDYkk2ZG1sZ0duUldtdUhQa05wSVVhbnh5b3VOV0c2d2pFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEdlQmhBcGxtc2JTcGFPM1RoM3dZNlo1cnNCblBlRzU1YmVraHVibWVVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSWVqYW1JSVNkWlRtakJpWVRYNFdYMUZFMDlCTm80UVQ5bVQ0Y3JPeGs0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONmVMaUM0b2pOUHdDVXExdmVqSUdnZFBoc3RKbHNSOUhjVGZMUkhuU0ZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMeUtoMk9wZUIvei9LWFQrUzAzNW1SeEtMY0tvTDhlbHkvV0lyMUlOMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpPaHh3YTFvWmREc3J2Y3FBaDEydGJVQTl2M3U1d05tdityaGYrdnNrMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhsRVlnZFRYeEUzRWNBazl4UUFrRTdhbFJvWXNMaEtnR2JtL3lybXZHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnl3ZXRJSnpoR2liaEpCbjVVb0RMZUExSDdBQVR6SHFUWkdRRThQVzhWMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI4NkhzUDgzK0xZeWNjMzRlMFFQVWh5VG9WRVhnUXJCV1JiVVVKdlBaeGNQbFh4RnE1Q05TTjRkYzhLY0dUL2o0S1E2dHBTeVpiWnlDUlpKMnVVd0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6Iklubk9TZi9pTUl5MWlBN1BManZ3SHcrR3JBbklTekc5aEQ1aWhsQmVSQWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhFcF9QblJXVDlXUl9oWUMxN2x6NEEiLCJwaG9uZUlkIjoiMTVhYTgxNDMtMmUzZC00OGI0LWI4OWMtM2IzOGFmYjk5YmM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMrRVF1WmhXZ3dJTWFkR1huS3IybG43Q0Rvdz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEh5UlVkdm9wcWM4ZzJmMVhFdTdocGo4cnJvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWpGaFhNUWp1ZUh0Z1lZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVGEvUU0yRGg0VVBrN0RrbDQ1aVhQcFdqTWI2c1diSlQ2QWtTamV3WjNBRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYzBRL0dpMjV1cU9lRk9tZjdlMS9tRkZCZXd6eVFBRGxFREZVMENkY0pkT0I3V3NGb0pxdzBESHJIVHA5RHhTNExmOFQrdjJ2ZUhxL29PL2RnN0dhREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjUzbEFBT1ArNjJhYmZhcDQ1QmRQUXIxWnRqT09GMmVBUExaZ1J5RFZDY2ZLS1dGbUtrdkNyR2lPYlhMcnhTMlIwNU1zZk1Na2pwOWJ5TTBpdi8xZEJBPT0ifSwibWUiOnsiaWQiOiIyMzQ4MTMyMzQyOTYwOjM5QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzIzNDI5NjA6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTJ2MEROZzRlRkQ1T3c1SmVPWWx6NlZvekcrckZteVUrZ0pFbzNzR2R3QiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzk4Njg0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJekUifQ==',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Dragon-MD;Dark-Amiya',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  caption: process.env.CAPTION || '_*🪄 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐎𝐮𝐫 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 🪄*_ \nhttps://youtube.com/@Dragon-MD-OFC',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'dragon-md',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.3.0.2' : process.env.VERSION,
  LANG: process.env.THEME|| 'SI',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
