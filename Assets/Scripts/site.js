
/* -------------------------------------------------- Page 1 : HomePage -------------------------------------------------- */


var i = 1;

// Latest News: Previous button (shown when screen max-width: 768px)
function latestNewsPrev() {
	
	document.getElementById("latest-news-"+i).className = "news-wrapper-items-item highlight-giveaway";
	if(i == 1) {
		i = 4;
	}
	document.getElementById("latest-news-"+(i-1)).className = "news-wrapper-items-item news-active-item highlight-giveaway";
	i--;
}


// Latest News: Next button (shown when screen max-width: 768px)
function latestNewsNext() {
	
	document.getElementById("latest-news-"+i).className = "news-wrapper-items-item highlight-giveaway";
	if(i == 3) {
		i = 0;
	}
	document.getElementById("latest-news-"+(i+1)).className = "news-wrapper-items-item news-active-item highlight-giveaway";
	i++;
}


/* ---------------------------------------------- End of Page 1 : HomePage ----------------------------------------------- */



/* ------------------------------------------------- Page 2 : News Page -------------------------------------------------- */


var j = 1;

// News : Previous Button
function newsPrevPage() {
	
	j--;
	
	
	// Page Indicator
	document.getElementById("news-page-count").innerHTML = j + "/3";
	
	// Enabling Next Button
	if(j == 2) {
		document.getElementById("news-next").className = "button button-style1 news-next";
	}
	
	// Disabling Previous Button
	if(j == 1) {
		document.getElementById("news-prev").className = "button button-style1 news-prev controls-disabled";
	}
	
	
	// Changing to previous page
	document.getElementById("page-"+j).className = "news-wrapper-items";
	document.getElementById("page-"+(j+1)).className = "news-wrapper-items hidden";
	
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// News : Next Button
function newsNextPage() {
	
	j++;
	
	
	// Page Indicator
	document.getElementById("news-page-count").innerHTML = j + "/3";
	
	// Enabling Previous Button
	if(j == 2) {
		document.getElementById("news-prev").className = "button button-style1 news-prev";
	}
	
	// Disabling Next Button
	if(j == 3) {
		document.getElementById("news-next").className = "button button-style1 news-next controls-disabled";
	}
	
	
	// Changing to next page
	document.getElementById("page-"+j).className = "news-wrapper-items";
	document.getElementById("page-"+(j-1)).className = "news-wrapper-items hidden";
	
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* ---------------------------------------------- End of Page 2 : News Page ---------------------------------------------- */



/* ----------------------------------------------- Page 3 : Operator Page ------------------------------------------------ */


/* ----------------------- Attacker Information ----------------------- */

// Attacker Operator Pictures
attackerOpPic = new Array(7);
attackerOpPic[0]  = "url('Assets/Images/r6s-operator-zero.png')";
attackerOpPic[1]  = "url('Assets/Images/r6s-operator-ace.png')";
attackerOpPic[2]  = "url('Assets/Images/r6s-operator-iana.png')";
attackerOpPic[3]  = "url('Assets/Images/r6s-operator-kali.png')";
attackerOpPic[4]  = "url('Assets/Images/r6s-operator-amaru.png')";
attackerOpPic[5]  = "url('Assets/Images/r6s-operator-nokk.png')";
attackerOpPic[6]  = "url('Assets/Images/r6s-operator-gridlock.png')";

// Attacker Operator Icons
attackerOpIcon = new Array(7);
attackerOpIcon[0]  = "r6s-operators-badge-zero.png";
attackerOpIcon[1]  = "r6s-operators-badge-ace.png";
attackerOpIcon[2]  = "r6s-operators-badge-iana.png";
attackerOpIcon[3]  = "r6s-operators-badge-kali.png";
attackerOpIcon[4]  = "r6s-operators-badge-amaru.png";
attackerOpIcon[5]  = "r6s-operators-badge-nokk.png";
attackerOpIcon[6]  = "r6s-operators-badge-gridlock.png";

// Attacker Operator Names
attackerName = new Array(7);
attackerName[0]  = "Zero";
attackerName[1]  = "Ace";
attackerName[2]  = "Iana";
attackerName[3]  = "Kali";
attackerName[4]  = "Amaru";
attackerName[5]  = "Nokk";
attackerName[6]  = "Gridlock";

// Attackers Roles
attackerRole = new Array(7);
attackerRole[0]  = "Intel Denier, Intel Gatherer";
attackerRole[1]  = "Front Line, Hard Breach";
attackerRole[2]  = "Intel Denier, Intel Gatherer";
attackerRole[3]  = "Back Line, Covering Fire, Disable";
attackerRole[4]  = "Flank, Front Line";
attackerRole[5]  = "Flank, Intel Denier";
attackerRole[6]  = "Anti Roam, Area Denial, Crowd Control";

// Attackers Abilities Description
attackerAbilities = new Array(7);
attackerAbilities[0] = "Intel is crucial to a good attack strategy, and Zero is well aware of that. His Argus Launcher is equipped with very special cameras that can lodge themselves into breakable and reinforced surface to surveil either side.<br>Yes, these cameras can cover two angles and effectively allow you to spy on the opposing team. Argus Cameras do have one more quirk though: a single laser shot, perfect for destroying key elements in the Defenders’ setup or drawing attention away from choke points.";
attackerAbilities[1] = "With the S.E.L.M.A. Aqua Breacher, water is the name of the game. It makes use of hydraulic pressure to burst through breakable and reinforced surfaces. The cylinder is thrown on whatever Ace is trying to breach, and then it opens to fully deploy. It explodes one time on floors, ceilings and hatches, but on walls the cylinder rolls down to deploy up to two times, if space allows. Each of these deployments leaves a clean rectangle breach, combining to create a hole big enough for an Operator to go through easily.";
attackerAbilities[2] = "The Gemini Replicator is a remotely-controlled holographic copy of Iana. It can move and produces sound like she would, but it cannot shoot, melee or use secondary gadgets. It has a time limit, or it can be exited at any time. There is always a cooldown between two uses, which is longer if it’s destroyed.<br>The Replicator is all about fooling Iana’s opponents and collecting information. During its deployment, she can find her opponents and cause confusion to her heart’s content. If the Gemini is spotted and destroyed, it can help Iana deduce the threat’s location, but it will buy her opponents a few precious seconds to reposition.";
attackerAbilities[3] = "To talk about the LV Explosive Lance, we need to mention Kali’s CSRX 300. It’s a dangerous weapon that can breach barricades and hatches in a single shot, and create big holes in breakable walls. The LV is its under-barrel, and it can be used at the same time as the CSRX 300’s scopes.<br>Its role is to destroy gadgets with a light explosion within a set radius. When used on a breakable wall, it will create a hole slightly smaller than what the sniper rifle would do. When shot at a reinforced wall, however, it simply lodges in surface.";
attackerAbilities[4] = "With the Garra Hook, Amaru can grapple onto ledges and windows and hoist herself up in record times. Her opponents now not only have to worry about attacks from above, but also attacks from below. With the Garra, Amaru is the only operator that can go up an open hatch, instead of down. When timed right, hooking the Garra onto a window can result in Amaru’s infamous Garra Kick, which instantly takes out an opponent standing behind the window.";
attackerAbilities[5] = "The HEL is a glove attachment, which, when activated, reduces her ambient noise output and hides her image from the opponents’ observation tools. Drones, Bulletproof Cameras, Evil Eyes and more will thus be unable to register Nøkk’s presence as she roams through the map, unseen. Her footsteps will be silenced as she stalks opposing operators, unheard. Roaming will be more risky than ever for Defenders, as Nøkk could be hiding behind every corner or worse, sneaking up right behind them.";
attackerAbilities[6] = "Trax Stingers' design is a portable version that when activated, deploys a hexagonal cluster of spikes, covering uneven ground better than a straight mat. Once deployed they can replicate and spread out over a large area.<br>This feature, unique for an Attacker, enables them to use the Trax as an obstacle to reshape the map and control an area. Effects on the enemy include slowing them down and causing damage when stepped on. Trax Stingers will be destroyed when shot or dealt impact or thermal damage.";

/* ------------------- End of Attacker Information -------------------- */



/* ----------------------- Defender Information ----------------------- */

// Defender Operator Pictures
defenderOpPic = new Array(7);
defenderOpPic[0]  = "url('Assets/Images/r6s-operator-aruni.png')";
defenderOpPic[1]  = "url('Assets/Images/r6s-operator-melusi.png')";
defenderOpPic[2]  = "url('Assets/Images/r6s-operator-oryx.png')";
defenderOpPic[3]  = "url('Assets/Images/r6s-operator-wamai.png')";
defenderOpPic[4]  = "url('Assets/Images/r6s-operator-goyo.png')";
defenderOpPic[5]  = "url('Assets/Images/r6s-operator-warden.png')";
defenderOpPic[6]  = "url('Assets/Images/r6s-operator-mozzie.png')";

// Defender Operator Icons
defenderOpIcon = new Array(7);
defenderOpIcon[0]  = "r6s-operators-badge-aruni.png";
defenderOpIcon[1]  = "r6s-operators-badge-melusi.png";
defenderOpIcon[2]  = "r6s-operators-badge-oryx.png";
defenderOpIcon[3]  = "r6s-operators-badge-wamai.png";
defenderOpIcon[4]  = "r6s-operators-badge-goyo.png";
defenderOpIcon[5]  = "r6s-operators-badge-warden.png";
defenderOpIcon[6]  = "r6s-operators-badge-mozzie.png";

// Defender Operator Names
defenderName = new Array(7);
defenderName[0]  = "Aruni";
defenderName[1]  = "Melusi";
defenderName[2]  = "Oryx";
defenderName[3]  = "Wamai";
defenderName[4]  = "Goyo";
defenderName[5]  = "Warden";
defenderName[6]  = "Mozzie";

// Defender Roles
defenderRole = new Array(7);
defenderRole[0]  = "Secure, Intel Gatherer, Anchor";
defenderRole[1]  = "Crowd Control, Intel Gatherer, Secure";
defenderRole[2]  = "Roam, Soft Breach";
defenderRole[3]  = "Anchor, Secure";
defenderRole[4]  = "Area Denial, Secure";
defenderRole[5]  = "Anchor, Intel Denier";
defenderRole[6]  = "Intel Denier, Intel Gatherer, Secure";

// Defender Abilities Description
defenderAbilities = new Array(7);
defenderAbilities[0] = "Once in place, the gate projects a laser array capable of detecting anyone moving through it. When an intruder is detected, energy output to the laser increases, causing second- and third-degree burns. We spent nearly an hour tossing everything from wads of paper to pieces of fruit through until we found a setting that maximizes damage while limiting energy consumption.";
defenderAbilities[1] = "The Banshee Sonic Defence is deployable on surfaces, much like Maestro’s Evil Eyes, but they don’t require any manual control. As soon as an opponent walks close enough to it, it will release its scream and slow them. It can be destroyed, but since it’s bulletproof, Attackers will have to dispense some utility or strike it up close.";
defenderAbilities[2] = "The Remah Dash speed allows him to roam efficiently and cover short distances with unprecedented swiftness. It can also be used to knock down opponents and dash through breakable walls, creating a wide opening. Be careful of the cost, though, as he loses health every time the Remah Dash is used for breaching.<br>Additionally, Oryx has the unique ability to interact with broken hatches. He can climb straight through for a quick rotation, or he can hang on the edge to peek or wait for the perfect moment to go up. As long as he’s hanging, he can also opt to drop down if the climb seems too dangerous.";
defenderAbilities[3] = "The Mag-NET System is a thrown, adhesive gadget. It sticks to surfaces and waits. Its function is to attract an opponent’s projectile to its position, and then self-destruct to detonate that projectile.<br>This way, not only can Wamai make Attackers’ grenades and projectile gadgets useless, he can also use strategic placement to turn those projectiles against them.";
defenderAbilities[4] = "Like the ordinary Deployable Shield, the Volcán Shield provides cover and allows Defenders to block pathways, but Goyo turns up the heat with an attached incendiary bomb. From the front, however, there’s little indication of which it might be. Until someone shoots the bomb to make it explode, the shield continues to be an obstacle for the Attackers.";
defenderAbilities[5] = "The Glance serves a function that was almost non-existent on the Defending team. With it active, Warden can see through smoke and turn around what could be a low-intel situation. Activating his Smart Glasses can also prevent Warden from being blinded by flash effects, or cleanse an existing flash blindness, salvaging an otherwise dangerous few seconds. However, the Glance’s thermal vision only works as long as Warden stays immobile; otherwise, he is affected by smoke the same as everyone else. The Glance is a triggered effect, which must be restored through a cooldown after use.";
defenderAbilities[6] = "Mozzie’s launcher, Pests, are tiny 4-legged bots that can be used to target a single drone, or deployed into an area to prevent access by a drone. When launched, the Pest latches onto the nearest enemy drone and obscures its camera. It then initiates an override sequence to hack the drone and give control to Mozzie.<br>Counter-intelligence is enabled with no risk of a counter hack. Single-use only, Pests self-destruct by dissolving into thin air once their target is in Mozzie’s control.";

/* ------------------- End of Defender Information -------------------- */


// Each Primary with Information
function loadoutPrimary(a, b) {
	/* ---------- Index ---------- */
	
	//  0 : P10 RONI
	//  1 : SC3000K
	//  2 : ARX200
	//  3 : G36C
	//  4 : CSRX 300
	//  5 : G8A1
	//  6 : SuperNova
	//  7 : FMG-9
	//  8 : MP7
	//  9 : SIX12 SD
	// 10 : F90
	// 11 : M249 SAW
	// 12 : Mk 14 EBR
	// 13 : MP5
	// 14 : Super 90
	// 15 : SPAS-12
	// 16 : T-5 SMG
	// 17 : AUG A2
	// 18 : MP5K
	// 19 : Vector .45 ACP
	// 20 : M590A1
	// 21 : MPX
	// 22 : Commando 9
	// 23 : AK-12
	// 24 : M1014
	
	/* ------ End of Index ------- */
	
	if(b == 0) {
		document.getElementById(a + "-primary-title").innerHTML = "P10 RONI";
		document.getElementById(a + "-primary-image").src = "Assets/Images/r6-operator-weapon-smg-p10roni.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	} 
	
	if(b == 1) {
		document.getElementById(a + "-primary-title").innerHTML = "SC3000K";
		document.getElementById(a + "-primary-image").src = "Assets/Images/SC3000K.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Assault Rifle";
	}
	
	if(b == 2) {
		document.getElementById(a + "-primary-title").innerHTML = "ARX200";
		document.getElementById(a + "-primary-image").src = "Assets/Images/ARX200.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Assault Rifle";
	}
	
	if(b == 3) {
		document.getElementById(a + "-primary-title").innerHTML = "G36C";
		document.getElementById(a + "-primary-image").src = "Assets/Images/G36C.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Assault Rifle";
	}
	
	if(b == 4) {
		document.getElementById(a + "-primary-title").innerHTML = "CSRX 300";
		document.getElementById(a + "-primary-image").src = "Assets/Images/CSRX_300.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Marksman Rifle";
	}
	
	if(b == 5) {
		document.getElementById(a + "-primary-title").innerHTML = "G8A1";
		document.getElementById(a + "-primary-image").src = "Assets/Images/G8A1.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Light Machine Gun";
	}
	
	if(b == 6) {
		document.getElementById(a + "-primary-title").innerHTML = "SuperNova";
		document.getElementById(a + "-primary-image").src = "Assets/Images/SuperNova.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Shotgun";
	}
	
	if(b == 7) {
		document.getElementById(a + "-primary-title").innerHTML = "FMG-9";
		document.getElementById(a + "-primary-image").src = "Assets/Images/FMG-9.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	}
	
	if(b == 8) {
		document.getElementById(a + "-primary-title").innerHTML = "MP7";
		document.getElementById(a + "-primary-image").src = "Assets/Images/MP7.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	}
	
	if(b == 9) {
		document.getElementById(a + "-primary-title").innerHTML = "SIX12 SD";
		document.getElementById(a + "-primary-image").src = "Assets/Images/SIX12_SD.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Shotgun";
	}
	
	if(b == 10) {
		document.getElementById(a + "-primary-title").innerHTML = "F90";
		document.getElementById(a + "-primary-image").src = "Assets/Images/F90.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Assault Rifle";
	}
	
	if(b == 11) {
		document.getElementById(a + "-primary-title").innerHTML = "M249 SAW";
		document.getElementById(a + "-primary-image").src = "Assets/Images/M249_SAW.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Light Machine Gun";
	}
	
	if(b == 12) {
		document.getElementById(a + "-primary-title").innerHTML = "Mk 14 EBR";
		document.getElementById(a + "-primary-image").src = "Assets/Images/Mk_14_EBR.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Marksman Rifle";
	}
	
	if(b == 13) {
		document.getElementById(a + "-primary-title").innerHTML = "MP5";
		document.getElementById(a + "-primary-image").src = "Assets/Images/MP5.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	}
	
	if(b == 14) {
		document.getElementById(a + "-primary-title").innerHTML = "Super 90";
		document.getElementById(a + "-primary-image").src = "Assets/Images/Super_90.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Shotgun";
	}
	
	if(b == 15) {
		document.getElementById(a + "-primary-title").innerHTML = "SPAS-12";
		document.getElementById(a + "-primary-image").src = "Assets/Images/SPAS-12.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Shotgun";
	}
	
	if(b == 16) {
		document.getElementById(a + "-primary-title").innerHTML = "T-5 SMG";
		document.getElementById(a + "-primary-image").src = "Assets/Images/T-5_SMG.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	}
	
	if(b == 17) {
		document.getElementById(a + "-primary-title").innerHTML = "AUG A2";
		document.getElementById(a + "-primary-image").src = "Assets/Images/AUG_A2.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Assault Rifle";
	}
	
	if(b == 18) {
		document.getElementById(a + "-primary-title").innerHTML = "MP5K";
		document.getElementById(a + "-primary-image").src = "Assets/Images/MP5K.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	}
	
	if(b == 19) {
		document.getElementById(a + "-primary-title").innerHTML = "Vector .45 ACP";
		document.getElementById(a + "-primary-image").src = "Assets/Images/Vector_.45_ACP.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	}
	
	if(b == 20) {
		document.getElementById(a + "-primary-title").innerHTML = "M590A1";
		document.getElementById(a + "-primary-image").src = "Assets/Images/M590A1.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Shotgun";
	}
	
	if(b == 21) {
		document.getElementById(a + "-primary-title").innerHTML = "MPX";
		document.getElementById(a + "-primary-image").src = "Assets/Images/MPX.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Submachine Gun";
	}
	
	if(b == 22) {
		document.getElementById(a + "-primary-title").innerHTML = "Commando 9";
		document.getElementById(a + "-primary-image").src = "Assets/Images/Commando_9.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Assault Rifle";
	}
	
	if(b == 23) {
		document.getElementById(a + "-primary-title").innerHTML = "AK-12";
		document.getElementById(a + "-primary-image").src = "Assets/Images/AK-12.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Assault Rifle";
	}
	
	if(b == 24) {
		document.getElementById(a + "-primary-title").innerHTML = "M1014";
		document.getElementById(a + "-primary-image").src = "Assets/Images/M1014.png";
		document.getElementById(a + "-primary-bottom").innerHTML = "Shotgun";
	}
	
}

// Each Secondary with Information
function loadoutSecondary(y) {
	/* ---------- Index ---------- */
	
	//  0 : 5.7 USG
	//  1 : Mk1 9mm
	//  2 : P9
	//  3 : SPSMG9
	//  4 : ITA12S
	//  5 : D-50
	//  6 : Super Shorty
	//  7 : RG15
	//  8 : D-40
	//  9 : PRB92
	
	/* ------ End of Index ------- */
	
	if(y == 0) {
		document.getElementById("secondary-title").innerHTML = "5.7 USG";
		document.getElementById("secondary-image").src = "Assets/Images/5.7_USG.png";
		document.getElementById("secondary-bottom").innerHTML = "Handgun";
	}
	
	if(y == 1) {
		document.getElementById("secondary-title").innerHTML = "Mk1 9mm";
		document.getElementById("secondary-image").src = "Assets/Images/Mk1_9mm.png";
		document.getElementById("secondary-bottom").innerHTML = "Handgun";
	}
	
	if(y == 2) {
		document.getElementById("secondary-title").innerHTML = "P9";
		document.getElementById("secondary-image").src = "Assets/Images/P9.png";
		document.getElementById("secondary-bottom").innerHTML = "Handgun";
	}
	
	if(y == 3) {
		document.getElementById("secondary-title").innerHTML = "SPSMG9";
		document.getElementById("secondary-image").src = "Assets/Images/SPSMG9.png";
		document.getElementById("secondary-bottom").innerHTML = "Machine Pistol";
	}
	
	if(y == 4) {
		document.getElementById("secondary-title").innerHTML = "ITA12S";
		document.getElementById("secondary-image").src = "Assets/Images/ITA12S.png";
		document.getElementById("secondary-bottom").innerHTML = "Shotgun";
	}
	
	if(y == 5) {
		document.getElementById("secondary-title").innerHTML = "D-50";
		document.getElementById("secondary-image").src = "Assets/Images/D-50.png";
		document.getElementById("secondary-bottom").innerHTML = "Handgun";
	}
	
	if(y == 6) {
		document.getElementById("secondary-title").innerHTML = "Super Shorty";
		document.getElementById("secondary-image").src = "Assets/Images/supershorty.png";
		document.getElementById("secondary-bottom").innerHTML = "Shotgun";
	}
	
	if(y == 7) {
		document.getElementById("secondary-title").innerHTML = "RG15";
		document.getElementById("secondary-image").src = "Assets/Images/RG15.png";
		document.getElementById("secondary-bottom").innerHTML = "Handgun";
	}
	
	if(y == 8) {
		document.getElementById("secondary-title").innerHTML = "D-40";
		document.getElementById("secondary-image").src = "Assets/Images/D-40.png";
		document.getElementById("secondary-bottom").innerHTML = "Handgun";
	}
	
	if(y == 9) {
		document.getElementById("secondary-title").innerHTML = "PRB92";
		document.getElementById("secondary-image").src = "Assets/Images/PRB92.png";
		document.getElementById("secondary-bottom").innerHTML = "Handgun";
	}
	
}

// Each Gadget with Information
function loadoutGadget(n, z) {
	/* ---------- Index ---------- */
	
	//  0 : Hard Breach Charge
	//  1 : Claymore
	//  2 : Breach Charge
	//  3 : Smoke Grenade
	//  4 : Frag Grenade
	//  5 : Stun Grenade
	//  6 : Bulletproof camera
	//  7 : Barbed wire
	//  8 : Impact Grenade
	//  9 : Nitro Cell
	// 10 : Proximity Alarm
	// 11 : Deployable Shield
	
	/* ------ End of Index ------- */
	
	if(z == 0) {
		document.getElementById(n + "-gadget-title").innerHTML = "Hard Breach Charge";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/SecondaryBreacher.png";
	}
	
	if(z == 1) {
		document.getElementById(n + "-gadget-title").innerHTML = "Claymore";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Claymore.png";
	}
	
	if(z == 2) {
		document.getElementById(n + "-gadget-title").innerHTML = "Breach Charge";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Breach_Charge.png";
	}
	
	if(z == 3) {
		document.getElementById(n + "-gadget-title").innerHTML = "Smoke Grenade";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Smoke_Grenade.png";
	}
	
	if(z == 4) {
		document.getElementById(n + "-gadget-title").innerHTML = "Frag Grenade";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Frag_Grenade.png";
	}
	
	if(z == 5) {
		document.getElementById(n + "-gadget-title").innerHTML = "Stun Grenade";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Stun_Grenade.png";
	}
	
	if(z == 6) {
		document.getElementById(n + "-gadget-title").innerHTML = "Bulletproof camera";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Bulletproof_camera.png";
	}
	
	if(z == 7) {
		document.getElementById(n + "-gadget-title").innerHTML = "Barbed wire";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Barbed_wire.png";
	}
	
	if(z == 8) {
		document.getElementById(n + "-gadget-title").innerHTML = "Impact Grenade";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Impact_Grenade.png";
	}
	
	if(z == 9) {
		document.getElementById(n + "-gadget-title").innerHTML = "Nitro Cell";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Nitro_Cell.png";
	}
	
	if(z == 10) {
		document.getElementById(n + "-gadget-title").innerHTML = "Proximity Alarm";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Proximity_alarm.png";
	}
	
	if(z == 11) {
		document.getElementById(n + "-gadget-title").innerHTML = "Deployable Shield";
		document.getElementById(n + "-gadget-image").src = "Assets/Images/Deployable_Shield.png";
	}
}

// Attacker Card Click
function attacker(x) {
	
	// Change Operator Side Background Image
	document.getElementById("operator-side-background").className = "operator-attacker";
	
	// Change Operator Picture
	document.getElementById("op-pic").style.backgroundImage = attackerOpPic[x];
	
	// Change Operator Icon
	document.getElementById("operator-icon-image").src = "Assets/Images/" + attackerOpIcon[x];
	
	// Change Operator Name
	document.getElementById("operator-icon-name").innerHTML = attackerName[x];
	
	// Change Side Icon
	document.getElementById("side-image").className = "operator-header-side-detail attacker";
	
	// Change Side Name
	document.getElementById("side-text").innerHTML = "Attacker";
	
	// Change Roles
	document.getElementById("role").innerHTML = attackerRole[x];
	
	
	/* ---------------------- Change Stats ---------------------- */
	
	// Gridlock Stats
	if(x == 6) {
		document.getElementById("armor-second").className = "circle";
		document.getElementById("armor-third").className = "circle";
		document.getElementById("speed-second").className = "circle-disabled";
		document.getElementById("speed-third").className = "circle-disabled";
	}
	else {
		document.getElementById("armor-second").className = "circle";
		document.getElementById("armor-third").className = "circle-disabled";
		document.getElementById("speed-second").className = "circle";
		document.getElementById("speed-third").className = "circle-disabled";
	}
	
	/* ------------------ End of Change Stats ------------------- */
	
	
	// Change Operator Abilities Description
	document.getElementById("abilities-description").innerHTML = attackerAbilities[x];
	
	
	/* --------------------- Change Loadout --------------------- */
	
	// Zero
	if(x == 0) {
		loadoutPrimary("first", 1);
		loadoutPrimary("second", 8);
		loadoutSecondary(0);
		loadoutGadget("first", 0);
		loadoutGadget("second", 1);
	}
	
	// Ace
	if(x == 1) {
		loadoutPrimary("first", 23);
		loadoutPrimary("second", 24);
		loadoutSecondary(2);
		loadoutGadget("first", 2);
		loadoutGadget("second", 3);
	}
	
	// Iana
	if(x == 2) {
		loadoutPrimary("first", 2);
		loadoutPrimary("second", 3);
		loadoutSecondary(1);
		loadoutGadget("first", 4);
		loadoutGadget("second", 3);
	}
	
	// Kali
	if(x == 3) {
		loadoutPrimary("first", 4);
		loadoutPrimary("second", 12);
		loadoutSecondary(3);
		loadoutGadget("first", 2);
		loadoutGadget("second", 1);
	}
	
	// Amaru
	if(x == 4) {
		loadoutPrimary("first", 5);
		loadoutPrimary("second", 6);
		loadoutSecondary(4);
		loadoutGadget("first", 5);
		loadoutGadget("second", 0);
	}
	
	// Nokk
	if(x == 5) {
		loadoutPrimary("first", 7);
		loadoutPrimary("second", 9);
		loadoutSecondary(5);
		loadoutGadget("first", 0);
		loadoutGadget("second", 4);
	}
	
	// Gridlock
	if(x == 6) {
		loadoutPrimary("first", 10);
		loadoutPrimary("second", 11);
		loadoutSecondary(6);
		loadoutGadget("first", 3);
		loadoutGadget("second", 2);
	}
	
	/* ----------------- End of Change Loadout ------------------ */
	
	
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Defender Card Click
function defender(x) {
	
	// Change Operator Side Background Image
	document.getElementById("operator-side-background").className = "operator-defender";
	
	// Change Operator Picture
	document.getElementById("op-pic").style.backgroundImage = defenderOpPic[x];
	
	// Change Operator Icon
	document.getElementById("operator-icon-image").src = "Assets/Images/" + defenderOpIcon[x];
	
	// Change Operator Name
	document.getElementById("operator-icon-name").innerHTML = defenderName[x];
	
	// Change Side Icon
	document.getElementById("side-image").className = "operator-header-side-detail defender";
	
	// Change Side Name
	document.getElementById("side-text").innerHTML = "Defender";
	
	// Change Roles
	document.getElementById("role").innerHTML = defenderRole[x];
	
	
	/* ---------------------- Change Stats ---------------------- */
	
	// Melusi Stats
	if(x == 1) {
		document.getElementById("armor-second").className = "circle-disabled";
		document.getElementById("armor-third").className = "circle-disabled";
		document.getElementById("speed-second").className = "circle";
		document.getElementById("speed-third").className = "circle";
	}
	else {
		document.getElementById("armor-second").className = "circle";
		document.getElementById("armor-third").className = "circle-disabled";
		document.getElementById("speed-second").className = "circle";
		document.getElementById("speed-third").className = "circle-disabled";
	}
	
	/* ------------------ End of Change Stats ------------------- */
	
	// Change Operator Abilities Description
	document.getElementById("abilities-description").innerHTML = defenderAbilities[x];
	
	
	/* --------------------- Change Loadout --------------------- */
	
	// Aruni
	if(x == 0) {
		loadoutPrimary("first", 0);
		loadoutPrimary("second", 12);
		loadoutSecondary(9);
		loadoutGadget("first", 6);
		loadoutGadget("second", 7);
	}
	
	// Melusi
	if(x == 1) {
		loadoutPrimary("first", 13);
		loadoutPrimary("second", 14);
		loadoutSecondary(7);
		loadoutGadget("first", 8);
		loadoutGadget("second", 9);
	}
	
	// Oryx
	if(x == 2) {
		loadoutPrimary("first", 15);
		loadoutPrimary("second", 16);
		loadoutSecondary(2);
		loadoutGadget("first", 7);
		loadoutGadget("second", 10);
	}
	
	// Wamai
	if(x == 3) {
		loadoutPrimary("first", 17);
		loadoutPrimary("second", 18);
		loadoutSecondary(8);
		loadoutGadget("first", 10);
		loadoutGadget("second", 8);
	}
	
	// Goyo
	if(x == 4) {
		loadoutPrimary("first", 19);
		loadoutPrimary("second", 6);
		loadoutSecondary(0);
		loadoutGadget("first", 10);
		loadoutGadget("second", 9);
	}
	
	// Warden
	if(x == 5) {
		loadoutPrimary("first", 20);
		loadoutPrimary("second", 21);
		loadoutSecondary(7);
		loadoutGadget("first", 11);
		loadoutGadget("second", 9);
	}
	
	// Mozzie
	if(x == 6) {
		loadoutPrimary("first", 22);
		loadoutPrimary("second", 0);
		loadoutSecondary(6);
		loadoutGadget("first", 7);
		loadoutGadget("second", 9);
	}
	
	/* ----------------- End of Change Loadout ------------------ */
	
	
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* -------------------------------------------- End of Page 3 : Operator Page -------------------------------------------- */



/* ----------------------------------------------- Page 5 : Giveaway Page ------------------------------------------------ */

function validate() {
	var flag = 1;
	
	// Validate firstname
	if(document.regForm.firstname.value == "") {
		document.getElementById('first-name-error').className = "error-msg show-error-msg";
		document.getElementById('first-name-border').className = "generalInput error-generalInput";
		flag = 0;
		
	} else {
		document.getElementById('first-name-error').className = "error-msg";
		document.getElementById('first-name-border').className = "generalInput";
	}
	
	// Validate lastname
	if(document.regForm.lastname.value == "") {
		document.getElementById('last-name-error').className = "error-msg show-error-msg";
		document.getElementById('last-name-border').className = "generalInput error-generalInput";
		flag = 0;
		
	} else {
		document.getElementById('last-name-error').className = "error-msg";
		document.getElementById('last-name-border').className = "generalInput";
		
	}
	
	// Validate email
	if(document.regForm.email.value == "") {
		document.getElementById('email-error').className = "error-msg show-error-msg";
		document.getElementById('email-border').className = "generalInput error-generalInput";
		flag = 0;
		
	} else {
		document.getElementById('email-error').className = "error-msg";
		document.getElementById('email-border').className = "generalInput";
	}
	
	// Validate inGameName
	if(document.regForm.ign.value == "") {
		document.getElementById('in-game-name-error').className = "error-msg show-error-msg";
		document.getElementById('in-game-name-border').className = "generalInput error-generalInput";
		flag = 0;
		
	} else {
		document.getElementById('in-game-name-error').className = "error-msg"
		document.getElementById('in-game-name-border').className = "generalInput";;
	}
	
	// Validate platform
	if(document.regForm.platform.value == "") {
		document.getElementById('platform-error').className = "error-msg show-error-msg";
		document.getElementById('platform-border').className = "generalInput error-generalInput";
		flag = 0;
		
	} else {
		document.getElementById('platform-error').className = "error-msg";
		document.getElementById('platform-border').className = "generalInput";
	}
	
	// Validate reason
	if(document.regForm.reason.value == "") {
		document.getElementById('reason-error').className = "error-msg show-error-msg";
		document.getElementById('reason-border').className = "generalInput error-generalInput";
		flag = 0;
		
	} else {
		document.getElementById('reason-error').className = "error-msg";
		document.getElementById('reason-border').className = "generalInput";
	}
	
	if(flag == 0) {
		return false;
	}
	
	return true;
	
}

/* -------------------------------------------- End of Page 5 : Giveaway Page -------------------------------------------- */


// For buttons that are there only for asthetics
function maintenance() {
	alert("Page Under Maintenance! Please try again later");
}

