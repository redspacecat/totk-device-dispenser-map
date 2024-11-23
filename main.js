window.onload = setup

const Devices = Object.freeze({
    FAN: {"value": 1, "name": "Fan"},
    WING: {"value": 2, "name": "Wing"},
    CART: {"value": 3, "name": "Cart"},
    BALLOON: {"value": 4, "name": "Balloon"},
    ROCKET: {"value": 5, "name": "Rocket"},
    TIME_BOMB: {"value": 6, "name": "Time Bomb"},
    PORTABLE_POT: {"value": 7, "name": "Portable Pot"},
    FLAME_EMITTER: {"value": 8, "name": "Flame Emitter"},
    FROST_EMITTER: {"value": 9, "name": "Frost Emitter"},
    SHOCK_EMITTER: {"value": 10, "name": "Shock Emitter"},
    BEAM_EMITTER: {"value": 11, "name": "Beam Emitter"},
    HYDRANT: {"value": 12, "name": "Hydrant"},
    STEERING_STICK: {"value": 13, "name": "Steering Stick"},
    BIG_WHEEL: {"value": 14, "name": "Big Wheel"},
    SMALL_WHELL: {"value": 15, "name": "Small Wheel"},
    SLED: {"value": 16, "name": "Sled"},
    BATTERY: {"value": 17, "name": "Battery"},
    BIG_BATTERY: {"value": 18, "name": "Big Battery"},
    SPRING: {"value": 19, "name": "Spring"},
    CANNON: {"value": 20, "name": "Cannon"},
    STABILIZER: {"value": 21, "name": "Stabilizer"},
    HOVER_STONE: {"value": 22, "name": "Hover Stone"},
    LIGHT: {"value": 23, "name": "Light"},
    STAKE: {"value": 24, "name": "Stake"},
    MIRROR: {"value": 25, "name": "Mirror"},
    HOMING_CART: {"value": 26, "name": "Homing Cart"},
    CONSTRUCT_HEAD: {"value": 27, "name": "Construct Head"}
});

let canvas
let ctx
let map
let dispenserImg
let search
let displayedDispensers
let currentlyDisplayedDispenserData
let info
let items
let dispensers = [
    {
        coords: [119 - 13, 104 - 13],
        stuff: [
            Devices.ROCKET,
            Devices.FLAME_EMITTER,
            Devices.PORTABLE_POT,
            Devices.TIME_BOMB
        ]
    },
    {
        coords: [267 - 13, 59 - 13],
        stuff: [
            Devices.WING,
            Devices.SLED,
            Devices.FAN,
            Devices.CART,
            Devices.LIGHT
        ]
    },
    {
        coords: [133 - 13, 219 - 13],
        stuff: [
            Devices.MIRROR,
            Devices.BALLOON,
            Devices.SPRING,
            Devices.WING,
            Devices.HOVER_STONE
        ]
    },
    {
        coords: [418 - 13, 98 - 13],
        stuff: [
            Devices.SHOCK_EMITTER,
            Devices.LIGHT,
            Devices.STEERING_STICK,
            Devices.HOMING_CART
        ]
    },
    {
        coords: [402 - 13, 153 - 13],
        stuff: [
            Devices.LIGHT,
            Devices.FLAME_EMITTER,
            Devices.BATTERY,
            Devices.CONSTRUCT_HEAD
        ]
    },
    {
        coords: [143 - 13, 267 - 13],
        stuff: [
            Devices.WING,
            Devices.FROST_EMITTER,
            Devices.SMALL_WHELL,
            Devices.MIRROR
        ]
    },
    {
        coords: [129, 309],
        stuff: [
            Devices.STAKE,
            Devices.SHOCK_EMITTER,
            Devices.SLED,
            Devices.STABILIZER,
            Devices.FROST_EMITTER
        ]
    },
    {
        coords: [511, 199],
        stuff: [
            Devices.BIG_WHEEL,
            Devices.HYDRANT,
            Devices.BATTERY,
            Devices.FAN
        ]
    },
    {
        coords: [638, 178],
        stuff: [
            Devices.HOMING_CART,
            Devices.STAKE,
            Devices.CART,
            Devices.CANNON,
            Devices.CONSTRUCT_HEAD
        ]
    },
    {
        coords: [696, 138],
        stuff: [
            Devices.HOVER_STONE,
            Devices.TIME_BOMB,
            Devices.HOMING_CART,
            Devices.HYDRANT
        ]
    },
    {
        coords: [617, 242],
        stuff: [
            Devices.FAN,
            Devices.HOVER_STONE,
            Devices.WING,
            Devices.BATTERY,
            Devices.STABILIZER
        ]
    },
    {
        coords: [500, 248],
        stuff: [
            Devices.CART,
            Devices.WING,
            Devices.FAN,
            Devices.BEAM_EMITTER
        ]
    },
    {
        coords: [690, 340],
        stuff: [
            Devices.SPRING,
            Devices.HYDRANT,
            Devices.BEAM_EMITTER,
            Devices.STEERING_STICK
        ]
    },
    {
        coords: [703, 357],
        stuff: [
            Devices.FROST_EMITTER,
            Devices.WING,
            Devices.BATTERY,
            Devices.MIRROR
        ]
    },
    {
        coords: [539, 407],
        stuff: [
            Devices.HOMING_CART,
            Devices.BEAM_EMITTER,
            Devices.FLAME_EMITTER,
            Devices.FROST_EMITTER,
            Devices.TIME_BOMB
        ]
    },
    {
        coords: [500, 363],
        stuff: [
            Devices.CANNON,
            Devices.WING,
            Devices.SPRING,
            Devices.TIME_BOMB
        ]
    },
    {
        coords: [474, 436],
        stuff: [
            Devices.CONSTRUCT_HEAD,
            Devices.CART,
            Devices.BALLOON,
            Devices.STABILIZER,
            Devices.HYDRANT
        ]
    },
    {
        coords: [575, 492],
        stuff: [
            Devices.STEERING_STICK,
            Devices.SMALL_WHELL,
            Devices.CANNON,
            Devices.LIGHT
        ]
    },
    {
        coords: [472, 515],
        stuff: [
            Devices.WING,
            Devices.CART,
            Devices.FAN,
            Devices.STEERING_STICK
        ]
    },
    {
        coords: [449, 518],
        stuff: [
            Devices.SHOCK_EMITTER,
            Devices.FAN,
            Devices.PORTABLE_POT,
            Devices.BATTERY
        ]
    },
    {
        coords: [427, 374],
        stuff: [
            Devices.FLAME_EMITTER,
            Devices.WING,
            Devices.FAN,
            Devices.PORTABLE_POT
        ]
    },
    {
        coords: [406, 402],
        stuff: [
            Devices.FLAME_EMITTER,
            Devices.FAN,
            Devices.PORTABLE_POT
        ]
    },
    {
        coords: [286, 395],
        stuff: [
            Devices.TIME_BOMB,
            Devices.SMALL_WHELL,
            Devices.LIGHT,
            Devices.ROCKET
        ]
    },
    {
        coords: [250, 429],
        stuff: [
            Devices.BEAM_EMITTER,
            Devices.SLED,
            Devices.MIRROR,
            Devices.STEERING_STICK,
            Devices.STAKE
        ]
    },
    {
        coords: [211, 224],
        stuff: [
            Devices.BALLOON,
            Devices.FAN,
            Devices.PORTABLE_POT,
            Devices.TIME_BOMB
        ]
    }
]

function setup() {
    map = document.getElementById("map")
    canvas = document.getElementById("c")
    dispenserImg = document.getElementById("dispenser_img")
    info = document.getElementById("info")
    items = document.getElementById("items")
    search = document.getElementById("search")
    ctx = canvas.getContext("2d")
    ctx.drawImage(map, 0, 0)

    canvas.addEventListener("mousedown", function(e) {
        getCursorPosition(canvas, e)
    })

    canvas.addEventListener("mousemove", function(e) {
        let mousePos = getMousePos(canvas, e)
        checkForDataDisplay(mousePos)
    })

    search.addEventListener("input", function(e) {
        drawDispensers(search.value)
    })

    drawDispensers("")
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + Math.round(x - dispenserImg.width / 2) + " y: " + Math.round(y - dispenserImg.height / 2))
}

function drawDispensers(filter) {
    let filters = filter.split(",")
    filters = filters.filter(function (el) {
        return el.trim() != "";
    });
    displayedDispensers = []
    ctx.drawImage(map, 0, 0)

    let i = 0
    for (let currentDispenser of dispensers) {
        let matchCount = 0
        for (let currentFilter of filters) {
            for (let currentItem of currentDispenser.stuff) {
                if (currentItem.name.toLowerCase().includes(currentFilter.toLowerCase().trim())) {
                    matchCount += 1
                    break
                }
            }
        }
        if (matchCount == filters.length) {
            ctx.drawImage(dispenserImg, currentDispenser.coords[0], currentDispenser.coords[1])
            displayedDispensers.push(i)
        }

        i += 1
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function checkForDataDisplay(coords) {
    if (!displayedDispensers) {
        return
    }

    for (let i = 0; i < displayedDispensers.length; i++) {
        let x1, y1, x2, y2
        [x1, y1] = dispensers[displayedDispensers[i]].coords
        x2 = coords.x - dispenserImg.width / 2
        y2 = coords.y - dispenserImg.height / 2

        // console.log(x1, y1)
        // console.log(x2, y2)
        var a = x1 - x2;
        var b = y1 - y2;
        var c = Math.sqrt( a*a + b*b );
        // console.log(c)

        if (c < 15) {
            if (!(currentlyDisplayedDispenserData == displayedDispensers[i])) {
                currentlyDisplayedDispenserData = displayedDispensers[i]
                displayDispenserData(displayedDispensers[i])
                return
            }  
        }
    }
}

function displayDispenserData(d) {
    console.log(d)
    items.innerHTML = ""
    let stuff = dispensers[d].stuff
    for (let i = 0; i < stuff.length; i++) {
        let data = document.createElement("li")
        data.innerText = stuff[i].name
        items.appendChild(data)
    }

    document.getElementById("items-title").hidden = false
}