const S_MILESTONES = [
    {
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(1),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(2),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(3),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(4),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(5),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(6),
    },{
        unl:()=>true,
        req:()=>player.singularity.best_bh.gte(7),
    },{
        unl:()=>true,
        req:()=>player.singularity.bh.gte(8),
    },

    {
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(1),
    },{
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(10),
    },{
        unl:()=>player.feature>=18,
        req:()=>CURRENCIES["dark-matter"].total.gte(1e6),
    },{
        unl:()=>player.feature>=20,
        req:()=>CURRENCIES["dark-matter"].total.gte(1e12),
    },
    {
        unl:()=>player.feature>=20,
        req:()=>CURRENCIES["dilated"].total.gte(100),
    },
    {
        unl:()=>player.feature>=20,
        req:()=>CURRENCIES["dilated"].total.gte(1000),
    },
    {
        unl:()=>player.feature>=20,
        req:()=>CURRENCIES["dark-matter"].total.gte(1e18),
    },
    {
        unl:()=>player.feature>=20,
        req:()=>CURRENCIES["dark-faith"].total.gte(1),
    },
]

const REMNANT_UPGS = [
    {
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(10),
        bulk:a=>a.log(10).root(1.25).floor(),
        effect(a) {
            let x = a.mul(.5).add(1)
            return x
        },
        effDesc: x=>"+"+formatPercent(x.sub(1)),
    },{
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(2).mul(5e2),
        bulk:a=>a.div(5e2).log(2).root(1.25).floor(),
        effect(a) {
            let x = a.pow_base(10)
            return x
        },
        effDesc: x=>formatMult(x),
    },{
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(10).mul(1e3),
        bulk:a=>a.div(1e3).log(10).root(1.25).floor(),
        effect(a) {
            let x = a.root(2).mul(1).add(1)
            return x
        },
        effDesc: x=>"+"+formatPercent(x.sub(1)),
    },{
        unl:()=>true,
        cost:a=>a.add(1).pow(1.25).pow_base(5).mul(2e7),
        bulk:a=>a.div(2e7).log(5).root(1.25).floor(),
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x),
    },
    
    {
        unl:()=>player.singularity.best_bh.gte(2),
        cost:a=>a.add(1).pow(1.25).pow_base(100),
        bulk:a=>a.log(100).root(1.25).floor(),
        effect(a) {
            if (hasResearch('dm2')) a = a.sqr();
            let x = player.fish.add(1).log10().add(1).log10().add(1).pow(a)
            return x
        },
        effDesc: x=>formatPow(x),
    },{
        unl:()=>player.singularity.best_bh.gte(2),
        cost:a=>a.add(1).pow(1.25).pow_base(10).mul(1e5),
        bulk:a=>a.div(1e5).log(10).root(1.25).floor(),
        effect(a) {
            let x = a.mul(.5).add(1)
            return x
        },
        effDesc: x=>"+"+formatPercent(x.sub(1)),
    },{
        unl:()=>player.singularity.best_bh.gte(4),
        cost:a=>a.add(1).pow(1.25).pow_base(100).mul(1e4),
        bulk:a=>a.div(1e4).log(100).root(1.25).floor(),
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x),
    },{
        unl:()=>player.singularity.best_bh.gte(5),
        cost:a=>a.add(1).pow(1.25).pow_base(5).mul(20),
        bulk:a=>a.div(20).log(5).root(1.25).floor(),
        effect(a) {
            if (hasResearch('dm3')) a = a.pow(3.5);
            let x = a.pow_base(10)
            return x
        },
        effDesc: x=>formatMult(x),
    },

    {
        unl:()=>player.feature>=19,
        cost:a=>a.add(1).pow(1.25).pow_base(1e5).mul(1e55),
        bulk:a=>a.div(1e55).log(1e5).root(1.25).floor(),
        effect(a) {
            let x = a.add(1).pow(2)
            return x
        },
        effDesc: x=>formatPow(x,0),
    },{
        unl:()=>player.feature>=19,
        cost:a=>a.add(1).sumBase(1.1).pow_base(1e5).mul(1e65),
        bulk:a=>a.div(1e65).log(1e5).sumBase(1.1,true).floor(),
        effect(a) {
            let x = a.pow_base(2)
            return x
        },
        effDesc: x=>formatMult(x,0),
    },{
        unl:()=>player.feature>=19,
        cost:a=>a.add(1).pow(1.25).pow_base(1e5).mul(1e95),
        bulk:a=>a.div(1e95).log(1e5).root(1.25).floor(),
        effect(a) {
            let x = a.add(1).pow(2)
            return x
        },
        effDesc: x=>formatMult(x,0),
    },
    {
        unl:()=>hasSMilestone(12),
        cost:a=>a.add(44).mul(3).pow10(),
        bulk:a=>a.log10().div(3).sub(44),
        effect(a) {
            let x = a.add(1).pow(E(2).add(a.add(1).div(10)))
            return x
        },
        effDesc: x=>formatMult(x,0),
    },
]

function buyRemnantUpg(i) {
    let u = REMNANT_UPGS[i], lvl, cost, amt = player.singularity.remnants
    if (u.unl() && amt.gte(cost = u.cost(lvl = player.singularity.upgs[i]))) {
        let bulk = lvl.add(1).max(u.bulk(amt))
        player.singularity.upgs[i] = bulk
        if (!hasSMilestone(10)) player.singularity.remnants = amt.sub(u.cost(bulk.sub(1))).max(0)
    }
}

function hasSMilestone(i) { return S_MILESTONES[i].req() }
function remnantUpgEffect(i,def=1) { return tmp.remnant_upg_effects[i]??def }

function updateSingularityTemp() {
    tmp.bh_reduction = player.singularity.bh.gte(8) ? E(1) : Decimal.div(1,player.singularity.bh.sub(player.research.dm1).max(0).pow(2).div(20).add(1))

    for (let i = 0; i < REMNANT_UPGS.length; i++) {
        let u = REMNANT_UPGS[i]
        if ('effect' in u) tmp.remnant_upg_effects[i] = u.effect(player.singularity.upgs[i])
    }
}

function updateBlackHoleHTML() {
    let remnants = player.singularity.remnants, texts = [lang_text('remnant-upgrades')]

    el('black-hole-amount').innerHTML = format(player.singularity.bh,0) + " / 8"
    el('black-hole-effect').innerHTML = formatPow(tmp.bh_reduction,4)

    el('remnant-amount').innerHTML = format(remnants,0)
    el('remnant-gain').innerHTML = formatGain(remnants,tmp.currency_gain.remnants)

    for (let i = 0; i < REMNANT_UPGS.length; i++) {
        let u = REMNANT_UPGS[i], id = `remnant-upg-${i}-`, e = el(id+'button'), unl = u.unl()

        e.style.display = el_display(unl)

        if (unl) {
            let lvl = player.singularity.upgs[i]

            el(id+'level').textContent = format(lvl,0)
            el(id+'desc').innerHTML = texts[0][i][1](toColoredText(u.effDesc(tmp.remnant_upg_effects[i]),'lime'))

            let cost = u.cost(lvl)

            el(id+'cost').textContent = format(cost)
            e.className = el_classes({'remnant-upg': true, locked: remnants.lt(cost)})
        }
    }
}

function setupSingularityHTML() {
    let h = "", texts = [lang_text('remnant-upgrades'),lang_text('cost')]

    for (let i = 0; i < S_MILESTONES.length; i++) {
        let s = S_MILESTONES[i]

        h += `
        <div class="singularity-milestone" id="sm-${i}"><h3>???</h3><br>???</div>
        `
    }

    el('singularity-milestones').innerHTML = h

    h = ""

    for (let i = 0; i < REMNANT_UPGS.length; i++) {
        h += `<button class="remnant-upg" id="remnant-upg-${i}-button" onclick="buyRemnantUpg(${i})"><b>${texts[0][i][0]}</b> [<span id="remnant-upg-${i}-level">0</span>]<div id="remnant-upg-${i}-desc">${texts[0][i][1]('???')}</div>${texts[1]}: <span id="remnant-upg-${i}-cost">???</span></button>`
    }

    el('remnant-upgs').innerHTML = h
}

function updateSingularityMilestones() {
    let text = lang_text('singularity-milestones')

    for (let i = 0; i < S_MILESTONES.length; i++) {
        let s = S_MILESTONES[i], e = el(`sm-${i}`), unl = s.unl()

        e.style.display = el_display(unl)

        if (unl) {
            let t = text[i]

            e.innerHTML = `<h3>${t[0]}</h3><br>${t[1]}`
            e.style.borderColor = s.req() ? "lime" : "white"
        }
    }
}


// Dilation
let DILATION_EFFECTS = [
    {
        curr: "fish",
        effect(x) {
        return x.pow(x.log10())
        },
        type: 'p'
    },
    {
        curr: "remnants",
        effect(x) {
        return x.log10().pow(0.25)
        },
        type: 'p'
    },
    {
        curr: "prestige",
        effect(x) {
            if (hasForgeUpgrade('dilation', 1)) {
                return x.pow(x.log10().pow(1.5))
            } else {
                return E(1)
            }
        },
        type: 'p'
    },
    {
        curr: "core",
        effect(x) {
            if (hasForgeUpgrade('dilation', 1)) {
                return x.pow(0.25)
            } else {
                return E(1)
            }
        },
        type: 'p'
    },
    {
        curr: "humanoid",
        effect(x) {
            if (hasForgeUpgrade('dilation', 2)) {
                return x.log10()
            } else {
                return E(1)
            }
        },
        type: 'm'
    },
    {
        curr: "dilated",
        effect(x) {
            if (hasForgeUpgrade('dilation', 2)) {
                return x.log10().log10()
            } else {
                return E(1)
            }
        },
        type: 'm'
    },
    
]
const dilationEffect = i => DILATION_EFFECTS[i].effect(player.singularity.dilated)
function createDilationHTML() {
 
for (let i = 0; i < DILATION_EFFECTS.length; i++) {
    
       el('dilation-effects').innerHTML += `<div id = ${'dil' + i}> ${dilationEffect(i)} ${lang_text(DILATION_EFFECTS[i].curr + "-costName")}</div>`
}
}

function updateDilationHTML() {
    let dilated = player.singularity.dilated
    el('dilated-amount').innerHTML =  `You have <h2>${format(dilated)}</h2> ${formatGain(dilated,tmp.currency_gain.dilated)} dilated matter`
    for (let i = 0; i < DILATION_EFFECTS.length; i++) {
        
    el(`dil${i}`).innerHTML = `${formatPow(dilationEffect(i)) } ${lang_text(DILATION_EFFECTS[i].curr + "-costName")}`
    }
       
}

// Dark evo tree

