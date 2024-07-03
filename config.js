const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237656468700";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_58_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9QYmZKYTc0TW5GYndEa3JIdXFwVVV4NFB6WWFRTjRJbXFZdHFOUjJZRHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlqejdUaVNEUWctckM5Y1JDeGd3THdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGViODI0NDctNjkwNC00M2Y0LTliMTgtMTZjYTYyNTUyMTE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMjQ3LFxuICAgICAgNzcsXG4gICAgICA1NCxcbiAgICAgIDY0LFxuICAgICAgMjEzLFxuICAgICAgMTQ4LFxuICAgICAgMyxcbiAgICAgIDU4LFxuICAgICAgMTIyLFxuICAgICAgMjMzLFxuICAgICAgMjE5LFxuICAgICAgMTE1LFxuICAgICAgOTgsXG4gICAgICA1NyxcbiAgICAgIDE0NixcbiAgICAgIDEwMixcbiAgICAgIDg5LFxuICAgICAgMTQsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMzUsXG4gICAgICAxMDEsXG4gICAgICA4OCxcbiAgICAgIDIyNyxcbiAgICAgIDIzNyxcbiAgICAgIDE3NSxcbiAgICAgIDYxLFxuICAgICAgMjQzLFxuICAgICAgODAsXG4gICAgICA0MCxcbiAgICAgIDE0OSxcbiAgICAgIDYwLFxuICAgICAgMTcyLFxuICAgICAgMTkxLFxuICAgICAgMTk2LFxuICAgICAgMTc2LFxuICAgICAgOSxcbiAgICAgIDEyOSxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFNUNHQ1JQMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU2NDY4NzAwOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MDg3MzI3MDM5NDk2ODo4NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT2Y2ZjBHRU1HaWxyUUdHQ3dnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5Xa2RnZXo0SUZLRmdOTVVsbEJiVnBsMzUvQ2VULzl4TzQyTVNNZ1B4RFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVpYTUpGMVFwTXRmdFBkcmxPZ1VLZEx1c0Npd3ZpNFQ1ajhVMkNuV2puRnM1dVhURGtvWkZ2YUdJNDY5N1BBdGpyYmtQTlJKM1NobFdKZ2VDZjNpQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZFIxTUxXTUtVTFBWQ3BGSHVnMkdXNFlJalpDcDJLbnhSRnVnRStmY0c1Q0xwVTJPdUVzdFFHdCs5N3pucDJaSDlkbnZIK3diR2pOYURTRG92c3JCZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjU2NDY4NzAwOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMjk1MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCS3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJLcS5qc29uIjogIntcImtleURhdGFcIjpcIm5jK05oamM0anFtSjlJTWNXSjNJRDhRSmRwWjBSN2tIUXZvNlJvQXd2WVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3NDQ4MTEyMyxcImN1cnJlbnRJbmRleFwiOjE0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDcsOCwxNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "∆",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝘙𝘌𝘉𝘌𝘊𝘊𝘈™",
  packname: process.env.PACK_NAME || "𝘝𝘜𝘌𝘙𝘖𝘌𝘙𝘜𝘒𝘖",
  botname : process.env.BOT_NAME  || "𝑉𝑈𝐸𝑅𝑂𝐸𝑅𝑈𝐾𝑂",
  ownername:process.env.OWNER_NAME|| "𝑁𝐴𝑁𝐴𝐶𝐻𝐼 𝑉𝐸𝑅𝑂𝐸𝐿𝐾𝑂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
