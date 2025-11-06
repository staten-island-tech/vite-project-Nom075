const dnsRecords = [
  { address: "amazon.com", dns: "205.251.242.103" },
  { address: "apple.com", dns: "17.253.144.10" },
  { address: "bbc.com", dns: "151.101.64.81" },
  { address: "chat.openai.com", dns: "104.18.12.123" },
  { address: "cnn.com", dns: "151.101.1.67" },
  { address: "discord.com", dns: "162.159.137.232" },
  { address: "github.com", dns: "140.82.113.3" },
  { address: "google.com", dns: "142.250.72.14" },
  { address: "instagram.com", dns: "157.240.229.174" },
  { address: "microsoft.com", dns: "40.113.200.201" },
  { address: "netflix.com", dns: "52.41.250.12" },
  { address: "nasa.gov", dns: "198.49.245.141" },
  { address: "nytimes.com", dns: "151.101.1.164" },
  { address: "reddit.com", dns: "151.101.1.140" },
  { address: "roblox.com", dns: "128.116.114.3" },
  { address: "stanford.edu", dns: "171.67.215.200" },
  {address: "youtube.com", dns: "142.250.190.46"}
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
    while (true){
        let mid = Math.round((high - low)/2)
        if (dnsRecords[mid].address === want){
            return ("found")
        } else if (dnsRecords[mid].address < want){
            low = mid + 1
/*             return (` low is ${low}`) */
        } else if (dnsRecords[mid].address > want){
            high = mid - 1
            return high
        }
        console.log("running")

    }
}

console.log(finder("netflix.com"))