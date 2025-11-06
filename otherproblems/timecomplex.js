const dnsRecords = [
  { address: "adobe.com", dns: "192.147.130.45" },              // 0
  { address: "airbnb.com", dns: "104.156.85.45" },              // 1
  { address: "alibaba.com", dns: "47.246.24.1" },               // 2
  { address: "amazon.com", dns: "205.251.242.103" },            // 3
  { address: "amd.com", dns: "23.57.24.51" },                   // 4
  { address: "apple.com", dns: "17.253.144.10" },               // 5
  { address: "bbc.com", dns: "151.101.64.81" },                 // 6
  { address: "bing.com", dns: "204.79.197.200" },               // 7
  { address: "blizzard.com", dns: "137.221.106.104" },          // 8
  { address: "capcom.com", dns: "52.219.20.34" },               // 9
  { address: "chat.openai.com", dns: "104.18.12.123" },         // 10
  { address: "cnn.com", dns: "151.101.1.67" },                  // 11
  { address: "coca-cola.com", dns: "23.33.22.91" },             // 12
  { address: "dell.com", dns: "143.166.83.38" },                // 13
  { address: "discord.com", dns: "162.159.137.232" },           // 14
  { address: "dropbox.com", dns: "162.125.4.1" },               // 15
  { address: "ebay.com", dns: "66.135.200.145" },               // 16
  { address: "espn.com", dns: "199.181.132.250" },              // 17
  { address: "etsy.com", dns: "151.101.65.224" },               // 18
  { address: "fandom.com", dns: "151.101.0.194" },              // 19
  { address: "foxnews.com", dns: "23.78.24.55" },               // 20
  { address: "github.com", dns: "140.82.113.3" },               // 21
  { address: "gmail.com", dns: "142.250.72.17" },               // 22
  { address: "google.com", dns: "142.250.72.14" },              // 23
  { address: "hbo.com", dns: "34.230.197.238" },                // 24
  { address: "hp.com", dns: "15.73.116.71" },                   // 25
  { address: "ibm.com", dns: "129.42.38.10" },                  // 26
  { address: "instagram.com", dns: "157.240.229.174" },         // 27
  { address: "intel.com", dns: "192.198.163.11" },              // 28
  { address: "linkedin.com", dns: "108.174.10.10" },            // 29
  { address: "mcdonalds.com", dns: "23.79.210.89" },            // 30
  { address: "microsoft.com", dns: "40.113.200.201" },          // 31
  { address: "mozilla.org", dns: "44.236.72.15" },              // 32
  { address: "nasa.gov", dns: "198.49.245.141" },               // 33
  { address: "netflix.com", dns: "52.41.250.12" },              // 34
  { address: "nike.com", dns: "13.249.132.45" },                // 35
  { address: "nvidia.com", dns: "216.228.112.21" },             // 36
  { address: "nytimes.com", dns: "151.101.1.164" },             // 37
  { address: "paypal.com", dns: "64.4.250.36" },                // 38
  { address: "pepsi.com", dns: "23.57.18.60" },                 // 39
  { address: "pinterest.com", dns: "151.101.192.84" },          // 40
  { address: "reddit.com", dns: "151.101.1.140" },              // 41
  { address: "roblox.com", dns: "128.116.114.3" },              // 42
  { address: "sony.com", dns: "23.33.44.100" },                 // 43
  { address: "spotify.com", dns: "35.186.224.24" },             // 44
  { address: "stanford.edu", dns: "171.67.215.200" },           // 45
  { address: "steamcommunity.com", dns: "208.64.202.94" },      // 46
  { address: "tiktok.com", dns: "23.213.61.254" },              // 47
  { address: "twitter.com", dns: "104.244.42.129" },            // 48
  { address: "ubisoft.com", dns: "52.48.56.161" },              // 49
  { address: "walmart.com", dns: "161.170.232.15" },            // 50
  { address: "wikipedia.org", dns: "208.80.154.224" },          // 51
  { address: "xbox.com", dns: "13.89.104.85" },                 // 52
  { address: "yahoo.com", dns: "74.6.231.21" },                 // 53
  { address: "youtube.com", dns: "142.250.190.46" }             // 54
];

/* function finder(want){
    let notFound = true
    while (notFound){
        console.log("debug1")
        const min = 0
        const max = dnsRecords.length - 1
        if (dnsRecords[max/2].address === want){
            notFound = false
            return dnsRecords[max/2].address
        } else if (dnsRecords[max/2].address > want){
            max = max/2
        } else if (dnsRecords[max/2].address < want){
            min = max/2
        }
        console.log(notFound)
    }

}

console.log(finder("netflix.com")) */

function finder(want){
    let low = 0
    let high = dnsRecords.length - 1
    let safety = 0
    while (safety < 10){
        
        let mid = Math.floor((low + high)/2)

        console.log(`L: ${low}, H: ${high}, M: ${mid}`)

        if (dnsRecords[mid].address === want){
            return (dnsRecords[mid].dns)
        } else if (dnsRecords[mid].address < want){
            low = mid + 1
        } else if (dnsRecords[mid].address > want){
            high = mid - 1
        }
        safety += 1

    }
}
 
console.log(finder("youtube.com")) 


/* function finder2(want){
    let a = undefined
    dnsRecords.forEach((thing) =>{
        if (thing.address === want){
            a = thing.dns
        }
    })
    return a
}

console.log(finder2("youtube.com"))  */