function calcSeed(){
    let perAcre = document.getElementById("crop").value;
    let acreInput = document.getElementById("acre").value.trim();
    let cropSelect = document.getElementById("crop");
    let cropName = cropSelect.options[cropSelect.selectedIndex].text.split("-")[0].trim();
    let res = document.getElementById("result");

    if(!acreInput){
        alert("⚠️ Please enter your land size in acres");
        return;
    }

    let acre = parseFloat(acreInput);
    if(isNaN(acre) || acre <= 0){
        alert("⚠️ Enter valid acres (Ex: 2.5)");
        return;
    }

    perAcre = parseFloat(perAcre);
    let total = perAcre * acre;

    // Price estimate (average market price)
    let priceMap = {
        "Ragi": 35,
        "Tomato": 2500, // per kg hybrid
        "Rice": 50,
        "Maize": 80,
        "Groundnut": 90
    };

    let rate = 40; // default
    for(let key in priceMap){
        if(cropName.includes(key)){
            rate = priceMap[key];
            break;
        }
    }

    let estimatedCost = total * rate;
    let format = (n) => new Intl.NumberFormat('en-IN').format(n);
    let bags = Math.ceil(total / 10); // assuming 10kg bag

    res.style.display="block";
    res.style.borderLeftColor = "#2e7d32";
    res.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:40px;">🌱</div>
            <div style="font-size:18px; color:#1b5e20; margin-top:5px;">For ${acre} acre ${cropName}</div>
            <div style="font-size:26px; color:#2e7d32; font-weight:700; margin-top:8px;">${total.toFixed(2)} kg Seeds Needed</div>

            <div style="margin-top:15px; display:grid; grid-template-columns:1fr 1fr; gap:10px; text-align:left;">
                <div style="background:white; padding:10px; border-radius:8px;">
                    <div style="font-size:12px; color:#666;">Per Acre</div>
                    <div style="font-size:14px; font-weight:700; color:#333;">${perAcre} kg</div>
                </div>
                <div style="background:white; padding:10px; border-radius:8px;">
                    <div style="font-size:12px; color:#666;">Total Bags</div>
                    <div style="font-size:14px; font-weight:700; color:#333;">${bags} bags (10kg)</div>
                </div>
            </div>

            <div style="margin-top:12px; padding:10px; background:white; border-radius:8px; font-size:13px; color:#333;">
                💰 Estimated Cost: <b style="color:#1b5e20;">Rs. ${format(estimatedCost.toFixed(0))}</b> @ Rs.${rate}/kg
            </div>

            <div style="margin-top:10px; font-size:11px; color:#666; font-weight:400;">
                💡 Buy from Raitha Samparka Kendra for certified quality + 15% subsidy
            </div>
        </div>
    `;

    res.scrollIntoView({behavior:"smooth", block:"center"});
}