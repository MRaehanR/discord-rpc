const RPC = require("discord-rpc")
const client = new RPC.Client({transport: "ipc"})

const activity = {
    details: "Halo Bang",
    assets: {
        large_image: "image-1",
        large_text: "Halo Bang",        
    },
    buttons: [
        {
            "label": "Github",
            "url": "https://github.com/MRaehanR"
        },
        {
            "label": "Gitlab",
            "url": "https://gitlab.com/MRaehanR"
        }
    ],
    timestamps: {start: Date.now()},
    instance: true,    
}

client.on("ready", () => {
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity})
    console.log("done");
})

client.login({clientId: "860378056820916274"})