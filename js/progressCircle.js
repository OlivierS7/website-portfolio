let els = document.getElementsByClassName('graph');

for (let i = 0; i < els.length; i++) {
    let options = {
        percent: els[i].getAttribute('data-percent') || 25,
        size: els[i].getAttribute('data-size') || 120,
        lineWidth: els[i].getAttribute('data-line') || 15,
        rotate: els[i].getAttribute('data-rotate') || 0
    }
    let canvas = document.createElement('canvas');
    let span = document.createElement('span');
    span.textContent = options.percent + '%';
    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }
    let ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    els[i].appendChild(span);
    els[i].appendChild(canvas);
    ctx.translate(options.size / 2, options.size / 2);
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);
    let radius = (options.size - options.lineWidth) / 2;
    let drawCircle = function(color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth
        ctx.stroke();
    };
    drawCircle('#efefef', options.lineWidth, 100 / 100);
    drawCircle('#02cf13', options.lineWidth, options.percent / 100);
}