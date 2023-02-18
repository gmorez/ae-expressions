startScale = 0;
endScale = transform.scale[1];
scaleInTime = 1;
scaleOutTime = 1;

if (time < inPoint + scaleInTime) {
    s = ease(time, inPoint, inPoint + scaleInTime, startScale, endScale);
} else if (time > outPoint - scaleOutTime) {
    s = ease(time, outPoint - scaleOutTime, outPoint, endScale, startScale);
} else {
    s = endScale;
}
[s,s]