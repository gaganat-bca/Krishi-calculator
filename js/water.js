function calcWater(){
    let waterPerAcre = document.getElementById("cropWater").value;
    let acreInput = document.getElementById("waterAcre").value.trim();
    let cropSelect = document.getElementById("cropWater");
    let cropName = cropSelect.options[cropSelect.selectedIndex].text.split("-")[0].trim();
    let res = document.getElementById("result");

    if(!acreInput){
        alert("⚠️ Please enter your land size");
        return;
    }

    let acre = parseFloat(acreInput);
    if(isNaN(acre) || acre <= 0){
        alert("⚠️ Enter valid acres (Ex: 2)");
        return;
    }

    waterPerAcre = parseFloat(waterPerAcre);
    let dailyLiters = waterPerAcre * acre;
    let weeklyLiters = dailyLiters * 7;
    let monthlyLiters = dailyLiters * 30;

    // Convert to units farmers understand
    let tanker = (dailyLiters / 5000).toFixed(1); // 1 tanker = 5000L
    let motorHours = (dailyLiters / 3000).toFixed(1); // 1 hour motor = ~3000L
    let dripSaving = (dailyLiters * 0.5).toFixed(0);

    let status = "";
    let icon = "";
    if(waterPerAcre <= 500){
        status = "Low Water Crop - Best for Summer 💚";
        icon = "✅";
    } else if(waterPerAcre <= 800){
        status = "Medium Water Need - Manageable 🟡";
        icon = "⚠️";
    } else {
        status = "High Water Need - Need good water source 🔴";
        icon = "💧";
    }

    let format = (n) => new Intl.NumberFormat('en-IN').format(n);

    res.style.display="block";
    res.style.borderLeftColor = "#1565c0";
    res.style.background = "linear-gradient(135deg, #e3f2fd, #bbdefb)";
    res.style.color = "#0d47a1";
    res.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:40px;">💧</div>
            <div style="font-size:16px; margin-top:5px;">For ${acre} acre ${cropName}</div>
            <div style="font-size:26px; font-weight:800; margin-top:8px; color:#0d47a1;">${format(dailyLiters)} Liters / Day</div>

            <div style="margin-top:8px; padding:8px; background:white; border-radius:8px; font-size:13px; font-weight:600; color:#1565c0;">
                ${icon} ${status}
            </div>

            <div style="margin-top:15px; display:grid; grid-template-columns:1fr 1fr; gap:10px; text-align:left;">
                <div style="background:white; padding:10px; border-radius:8px;">
                    <div style="font-size:11px; color:#666;">Weekly Need</div>
                    <div style="font-size:14px; font-weight:700; color:#0d47a1;">${format(weeklyLiters)} L</div>
                </div>
                <div style="background:white; padding:10px; border-radius:8px;">
                    <div style="font-size:11px; color:#666;">Monthly Need</div>
                    <div style="font-size:14px; font-weight:700; color:#0d47a1;">${format(monthlyLiters)} L</div>
                </div>
                <div style="background:white; padding:10px; border-radius:8px;">
                    <div style="font-size:11px; color:#666;">Motor Runtime</div>
                    <div style="font-size:14px; font-weight:700; color:#333;">${motorHours} hrs / day</div>
                </div>
                <div style="background:white; padding:10px; border-radius:8px;">
                    <div style="font-size:11px; color:#666;">Tanker Needed</div>
                    <div style="font-size:14px; font-weight:700; color:#333;">${tanker} tankers / day</div>
                </div>
            </div>

            <div style="margin-top:12px; padding:10px; background:#c8e6c9; border-radius:8px; font-size:12px; color:#1b5e20; font-weight:600;">
                💡 With Drip Irrigation: Only ${format(dripSaving)}L/day needed! Save 50% + Govt Subsidy 90%
            </div>
        </div>
    `;

    res.scrollIntoView({behavior:"smooth", block:"center"});
}