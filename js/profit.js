function calcProfit(){
    let cost = document.getElementById("cost").value.trim();
    let selling = document.getElementById("selling").value.trim();
    let res = document.getElementById("result");

    if(!cost || !selling){ 
        alert("⚠️ Please enter both Cost and Selling Price"); 
        return; 
    }

    cost = parseFloat(cost);
    selling = parseFloat(selling);

    if(isNaN(cost) || isNaN(selling) || cost <=0){
        alert("⚠️ Enter valid numbers");
        return;
    }

    let profit = selling - cost;
    let profitPercent = ((profit / cost) * 100).toFixed(1);
    let status = "";
    let icon = "";
    let color = "";

    if(profit > 15000){
        status = "Excellent Profit! Great Farming! 🌾🎉";
        icon = "🤑";
        color = "#1b5e20";
    } else if(profit > 0){
        status = "Good Profit! Keep it up! ✅";
        icon = "😊";
        color = "#2e7d32";
    } else if(profit == 0){
        status = "No Profit No Loss 😐";
        icon = "⚖️";
        color = "#ef6c00";
    } else {
        status = "Loss! Check your costs ❌";
        icon = "😟";
        color = "#c62828";
    }

    // Indian currency format
    let format = (n) => new Intl.NumberFormat('en-IN').format(n);

    res.style.display="block";
    res.style.borderLeftColor = color;
    res.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size:40px;">${icon}</div>
            <div style="font-size:22px; color:${color}; margin-top:5px;">Profit: Rs. ${format(profit)} / acre</div>
            <div style="font-size:14px; color:#555; margin-top:5px;">Return: ${profitPercent}% | Cost: Rs.${format(cost)} | Sale: Rs.${format(selling)}</div>
            <div style="margin-top:12px; padding:10px; background:white; border-radius:8px; font-size:14px; color:${color}; font-weight:700;">
                ${status}
            </div>
            ${profit < 0 ? `<div style="margin-top:10px; font-size:12px; color:#666; font-weight:400;">💡 Tip: Reduce fertilizer cost or try Ragi/Maize for low cost</div>` : ''}
        </div>
    `;

    // Scroll to result smoothly
    res.scrollIntoView({behavior:"smooth", block:"center"});
}