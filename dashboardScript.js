setInterval(()=>{

    let latency = Math.floor(Math.random()*30);
    let alertBox = document.getElementById("alertBox");

    if(latency > 20){

    alertBox.innerText =
    "⚠ High Network Latency Detected";

      alertBox.style.borderLeft =
    "5px solid red";

    alertBox.style.boxShadow =
    "0px 0px 20px rgba(255,0,0,0.7)";

}
else{

    alertBox.innerText =
    "✅ Network Status Normal";

        alertBox.style.borderLeft =
    "5px solid lime";

    alertBox.style.boxShadow =
    "0px 0px 20px rgba(0,255,0,0.7)";

}
    document.getElementById("latency").innerText =
    latency + "ms";

},2000);

function updateClock(){

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerText = time;
}
updateClock();
setInterval(updateClock,1000);


const devices = [

    {
        name: "Router",
        status: "Online",
        ip: "192.168.1.1"
    },

    {
        name: "Server",
        status: "Offline",
        ip: "192.168.1.5"
    },

    {
        name: "Firewall",
        status: "Online",
        ip: "192.168.1.10"
    },

    {
        name: "Switch",
        status: "Offline",
        ip: "192.168.1.20"
    }

];

function renderDevices(){

    let deviceBody =
    document.getElementById("deviceBody");

    deviceBody.innerHTML = "";

    devices.forEach((device)=>{

        let row = `

        <tr>

            <td>${device.name}</td>

            <td class="${
                device.status === "Online"
                ? "online"
                : "offline"
            }">

                ${device.status}

            </td>

            <td>${device.ip}</td>

        </tr>

        `;

        deviceBody.innerHTML += row;

    });

}

renderDevices();

setInterval(()=>{

    let randomIndex =
    Math.floor(Math.random()*devices.length);

    if(devices[randomIndex].status === "Online"){

        devices[randomIndex].status = "Offline";
    }

    else{

        devices[randomIndex].status = "Online";
    }
    
let onlineCount =
devices.filter(
device => device.status === "Online"
).length;

let offlineCount =
devices.filter(
device => device.status === "Offline"
).length;

document.getElementById("activeDevices")
.innerText = onlineCount;

document.getElementById("offlineDevices")
.innerText = offlineCount;

document.getElementById("totalDevices")
.innerText = devices.length;

    renderDevices();

},3000);
let devicesBtn =
document.getElementById("devicesBtn");

let deviceSection =
document.getElementById("deviceSection");

devicesBtn.addEventListener("click", ()=>{

   deviceSection.style.display = "block";

});