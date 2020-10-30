let els = document.getElementsByClassName('graph');

let moveCircle = function(color, lineWidth, percent, ctx, radius, size, els) {
    let range = 0;
    let span = document.createElement('span');

    let drawCircle = function(color, lineWidth, percent, ctx, radius) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth
        ctx.stroke();
    };

    function draw() {
        drawCircle('#efefef', lineWidth, 100 / 100, ctx, radius);
        percent = Math.min(Math.max(0, percent || 1), 1);
        if (range < percent) {
            range += 0.005;
        }
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * range, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth
        ctx.stroke();
        span.innerHTML = Math.ceil(range * 100) + '%';
        els.appendChild(span);
    }

    requestAnimationFrame(animate);

    function animate() {
        ctx.clearRect(-60, -60, size, size);
        draw();
        setTimeout(function() {
            if (range + 0.01 < percent) {
                requestAnimationFrame(animate);
            }
        }, 8);

    }
};

let bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById("firstLineSkill").getBoundingClientRect(),
    offset = (elemRect.top - bodyRect.top) / 2;

window.addEventListener('scroll', function() {
    console.log(offset);
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        this.removeEventListener('scroll', arguments.callee);
        for (let i = 0; i < els.length; i++) {
            let options = {
                percent: els[i].getAttribute('data-percent') || 25,
                size: els[i].getAttribute('data-size') || 120,
                lineWidth: els[i].getAttribute('data-line') || 15,
                rotate: els[i].getAttribute('data-rotate') || 0
            }
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width = canvas.height = options.size;
            els[i].appendChild(canvas);
            ctx.translate(options.size / 2, options.size / 2);
            ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);
            let radius = (options.size - options.lineWidth) / 2;
            moveCircle('#02cf13', options.lineWidth, options.percent / 100, ctx, radius, options.size, els[i]);
        }
    }
});