const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(07084825782) : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_47_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICA1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvU0VGM3BobjlOQ0srVU1YTC9Ba1grdEhtQVlpTndTWTFsaTZSWmhvNEQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODQ4MjU3ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjExQzQ0QTdGOTVFODgxNjZDMEJFOUE5NDEzNkUwMkJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjU2NzY0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0MzVvWENMOFMzNjhmazFLd1IwdTJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJmNjAxYjk0LTIwZDctNGFjNC1iZGNhLWIzNjgwMTQ4MTYwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAzNSxcbiAgICAgIDMzLFxuICAgICAgNzMsXG4gICAgICA5MSxcbiAgICAgIDEyNyxcbiAgICAgIDIzNixcbiAgICAgIDI1MCxcbiAgICAgIDMyLFxuICAgICAgMTU1LFxuICAgICAgNzQsXG4gICAgICAyMzYsXG4gICAgICAxNDQsXG4gICAgICAyMDcsXG4gICAgICAxMjQsXG4gICAgICAyMjMsXG4gICAgICAxOTYsXG4gICAgICAzNCxcbiAgICAgIDM5LFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgOTYsXG4gICAgICAxODMsXG4gICAgICA2MyxcbiAgICAgIDE4MixcbiAgICAgIDY1LFxuICAgICAgMjM3LFxuICAgICAgMTkyLFxuICAgICAgNjUsXG4gICAgICA2NixcbiAgICAgIDEyNixcbiAgICAgIDI1MixcbiAgICAgIDkyLFxuICAgICAgMTYsXG4gICAgICAzMCxcbiAgICAgIDExMSxcbiAgICAgIDIwMCxcbiAgICAgIDEyNSxcbiAgICAgIDg2LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVJSSENLSFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODQ4MjU3ODI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM3MzcwNjE5ODc1MzU3OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJPdUk4REVOREVrN29HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpaWFmbWZEWDhva0VYeWhrVkNMTENubDR3ZXZVRVZIdmFtL2twbUwwMWwwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZnZXpkME53aHZEUnpDZW9PMERCd3dhT2FzSmlSMjRjQWZQclM0c1MwWjFicDd2dDlPOHYvQlVhR0E4bDM2S245bUV1OVprbFVST05JVm1oNTY3SkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInd2VVNFWksrN0E0MG8yUTBtVUFPZ0xTdlo0WWU4NTFDN0dQVWpqUHNqZUlUbXhudmNkYzgyTTg1S1dhQmRReHgzcHVTZzhIQm4xOWdEODIvSGxZTkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODQ4MjU3ODI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjU2NzYzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUoxUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjFQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNjRqbkhJN1BEZWRraU5xWTllWHRUcXY2ZWp0K0t4SDJBdmpLZldlK2lBQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4Mzc2ODI5ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjU2NjU2Njk0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
