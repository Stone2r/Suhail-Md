const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9032588e33739a2ba13e8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237656468700";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/6bad8cd45cdd92c46da58.jpg,https://telegra.ph/file/c02da941928788ccf2ca8.jpg,https://telegra.ph/file/9032588e33739a2ba13e8.jpg,https://telegra.ph/file/a8e0d9374a48d77cf7258.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_23_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdjWmg5VTd0R0VJMURwT2Q1NU9CLzhSdk9KZjMybmJ0Yys1S0kxSWZ1T2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZiMlMyb2pkUko2eF9GX3VCOVMwSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDBlOTRkY2YtYjNiZS00MzQyLTk2ZjQtODRlODAyYzE3ZmExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTMwLFxuICAgICAgMjM3LFxuICAgICAgMjcsXG4gICAgICAyMjEsXG4gICAgICA2NCxcbiAgICAgIDE2NixcbiAgICAgIDE0NyxcbiAgICAgIDEsXG4gICAgICAxNzgsXG4gICAgICAyNDIsXG4gICAgICAxMjQsXG4gICAgICAxNzAsXG4gICAgICAyMDAsXG4gICAgICAxNzAsXG4gICAgICAxMzksXG4gICAgICAxMjAsXG4gICAgICAxNzAsXG4gICAgICAyMzAsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTAsXG4gICAgICA5MyxcbiAgICAgIDIzNCxcbiAgICAgIDEwNCxcbiAgICAgIDE0OCxcbiAgICAgIDIwNCxcbiAgICAgIDg0LFxuICAgICAgMTgwLFxuICAgICAgMzQsXG4gICAgICAxOTMsXG4gICAgICA0NyxcbiAgICAgIDExOCxcbiAgICAgIDE4OSxcbiAgICAgIDkzLFxuICAgICAgMTgyLFxuICAgICAgMTI3LFxuICAgICAgMTUsXG4gICAgICAyNTQsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkFYSExNNkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NjQ2ODcwMDo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTA4NzMyNzAzOTQ5Njg6OTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09mNmYwR0VOT2JtYlFHR0RVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOV2tkZ2V6NElGS0ZnTk1VbGxCYlZwbDM1L0NlVC85eE80Mk1TTWdQeERZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInB6UGdPL01INmVaWWZZS0t5bFZDeVJYb2cxbFhudjNTVk16YzI3R1B1TnFkOHp2MFMvWS9hQi9vc2cxek9iOEFZV2Y3bGFqZXJ4ZzdlOG11WXFRZEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1DQnRWSkNHM0RjWUhHY01zVDlGMWxhbVFVSUlWTnFlS3lmMzFtZU5pRW1uNUNnUE9yQmtuSk5hT1ZjY0JBdUMzNGNqU1V0bTVTL0ZrTER4UFlIOWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1NjQ2ODcwMDo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDc3NzgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQktxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCS3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuYytOaGpjNGpxbUo5SU1jV0ozSUQ4UUpkcFowUjdrSFF2bzZSb0F3dllVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzQ0ODExMjMsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCw3LDgsMTRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "∆",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| 𝙁𝙍𝙄𝙀𝙍𝙀𝙉",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || " 𝙍𝙀𝘽𝙀𝘾𝘾𝘼™",
  ownername:process.env.OWNER_NAME|| "𝘿𝙚𝙢𝙚𝙩𝙚𝙧 𝘿. 𝘽𝙚𝙡𝙡𝙖𝙩𝙧𝙞𝙭",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
