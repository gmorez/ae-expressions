fadeInTime = 1;
fadeOutTime = 1;
 
Math.min(linear(time,inPoint,inPoint + fadeInTime,0,transform.opacity),linear(time,outPoint - fadeOutTime,outPoint,transform.opacity,0))