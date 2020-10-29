let els = document.getElementsByClassName("graph");
for (let e = 0; e < els.length; e++) {
    let t = { percent: els[e].getAttribute("data-percent") || 25, size: els[e].getAttribute("data-size") || 120, lineWidth: els[e].getAttribute("data-line") || 15, rotate: els[e].getAttribute("data-rotate") || 0 },
        a = document.createElement("canvas"),
        n = document.createElement("span");
    n.textContent = t.percent + "%", "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
    let i = a.getContext("2d");
    a.width = a.height = t.size, els[e].appendChild(n), els[e].appendChild(a), i.translate(t.size / 2, t.size / 2), i.rotate((t.rotate / 180 - .5) * Math.PI);
    let l = (t.size - t.lineWidth) / 2,
        s = function(e, t, a) { a = Math.min(Math.max(0, a || 1), 1), i.beginPath(), i.arc(0, 0, l, 0, 2 * Math.PI * a, !1), i.strokeStyle = e, i.lineCap = "round", i.lineWidth = t, i.stroke() };
    s("#efefef", t.lineWidth, 1), s("#02cf13", t.lineWidth, t.percent / 100)
}