
function showGraph(data) {
    "strict";
    var arrayLength = months.length;
    // for (var i = 0; i < arrayLength; i++) {
    //     console.log(months[i]);
    // }
    months.forEach(function(element) {

        var graph = document.getElementById('graph');

        var dataSet = document.createElement("div");
        dataSet.setAttribute('class', 'data-set');
        
        var bar = document.createElement('div');
        bar.setAttribute('class', 'bar');
        bar.setAttribute('style', 'width: ' + element.subscribers + 'px; background-color: ' + element.color + ';');
        var appendBar;
        appendBar = dataSet.appendChild(bar);

        var subscribers = document.createElement('span');
        subscribers.setAttribute('class', 'subscribers');
        subscribers.innerText = ' - ' + element.subscribers + ' subscribers';
        

        var monthLabel = document.createElement('p');
        monthLabel.innerText = element.month;
        monthLabel.setAttribute('class', 'month-label');
        
        var appendSubscribers;
        appendSubscribers = monthLabel.appendChild(subscribers);

        var appendMonth
        appendMonth = dataSet.appendChild(monthLabel);

        

        var appendDataSet;
        appendDataSet = graph.appendChild(dataSet);
        

        var bar = document.createElement("div.bar");
        var monthLabel = document.createElement("p.month-label");
        var subscribers = element.subscribers;


    });    
} 

showGraph(months);

function clearGraph() {
    var bar = document.getElementsByClassName('bar');
    for (var i = 0; i < bar.length; i++) {
        var barWidth = bar[i].style.width

        //var id = setInterval(frame, 5);
        // function frame() {
            if (barWidth === 1) {
                return;
            } else {
                barWidth++;
                bar[i].style.width = barWidth + "px";
            }
        //}
        var velocity = 5;
        // bar.style.width = bar.style.width || "0px";
        bar[i].style.width = 1 + 'px';
    };

    var subscribers = document.getElementsByClassName('subscribers');
    for (var i = 0; i < subscribers.length; i++) {
        subscribers[i].innerText = ' - 0 subscribers';
    }
}

// window.onload = function() {
//     // Set up event handlers.
//     document.getElementById("resetBtn").onclick = clearGraph;
    
// }; 
