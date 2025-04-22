(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.IMG_01 = function() {
	this.initialize(img.IMG_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.IMG_01_BG = function() {
	this.initialize(img.IMG_01_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1598,1200);


(lib.IMG_02 = function() {
	this.initialize(img.IMG_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,813,1625);


(lib.IMG_02_BG = function() {
	this.initialize(img.IMG_02_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,813,1625);


(lib.IMG_03 = function() {
	this.initialize(img.IMG_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.IMG_04 = function() {
	this.initialize(img.IMG_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.IMG_04_BG = function() {
	this.initialize(img.IMG_04_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2270,1200);


(lib.IMG_Rim = function() {
	this.initialize(img.IMG_Rim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,209);


(lib.VEC_Shadow_Frame4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)","rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,0.212,0.722,1],-38.5,0,38.5,0).s().p("AmAYTMAAAgwlIMBAAMAAAAwlg");
	this.shape.setTransform(197.6,135.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-20.3,481.9,311);


(lib.VEC_Shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)","rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,0.267,0.698,1],144.7,167.9,-144.8,-167.6).s().p("EhP1ASwMBudhehMAxOA5DMhueBegg");
	this.shape.setTransform(457.775,291.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-193,1022,969.9);


(lib.VEC_Red_Light_Strokes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.8,1,1).p("AAoADQgggHgvAC");
	this.shape.setTransform(78,2.9716);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjlAKYAAAABzgEBygFYAdAAAdAAAbAAYAaAAAagBAVAAYArgCAdgDAAAAYAAAAAAAAAAgBYAAAAAAAAAAAAYAAAAgdgCgrAAYgWgBgZAAgbABYgbAAgdACgcAAYhyAGhzAJAAAAYAAAAAAAAAAAAYAAAAAAABAAAA");
	this.shape_1.setTransform(24.599,3.0972);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AmZANQCjgOAdgCQBNgGBcgCQD1gDB0AEQAnABAQACQAhADAJAG");
	this.shape_2.setTransform(41,1.3308);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,84.1,5.3);


(lib.VEC_Red_Light_Diffuse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Red_Light_Diffsue
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0.247)","rgba(0,0,0,0)"],[0,1],-0.1,0,0,-0.1,0,51.8).s().p("AlwDMQiYhUAAh4QAAh3CYhVQCZhUDXAAQDYAACYBUQCZBVAAB3QAAB4iZBUQiYBVjYAAQjXAAiZhVg");
	this.shape.setTransform(52.125,28.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Red_Light_Diffsue
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,0,0,0.247)","rgba(0,0,0,0)"],[0,1],-0.1,-0.1,0,-0.1,-0.1,27).s().p("Ai/BqQhPgsAAg+QAAg+BPgsQBPgrBwgBQBwABBPArQBQAsAAA+QAAA+hQAsQhPAthwAAQhwAAhPgtg");
	this.shape_1.setTransform(102.325,28.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Red_Light_Reflection
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(190,0,0,0.549)","rgba(252,154,154,0)"],[0,1],46.7,-0.7,0,46.7,-0.7,18.3).s().p("AlUBKQhCgIhIglQhJgkgBgcQBngRE7gQQDYgME3AKQABgBAoALQAqAMAZAKQANAEAIAJIACAtIAdAUIgCAJQj6gEjnAFQiAACiKAPQhIAIgqAAQgSAAgMgBg");
	this.shape_2.setTransform(60.4,30.1558);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Red_Light_Reflection
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(190,0,0,0.549)","rgba(252,154,154,0)"],[0,1],-8.3,-0.2,0,-8.3,-0.2,37.3).s().p("AlUBIQhJgIhBgYQhJgagBgaQD0gnCugJQCNgICdgDQCVgDBQADQABgCAoAMQAqAMAZAJQANAFAIAJIACAsIAdAVIgCAJQj6gEjnAEQiAADiKAPQhIAIgqAAQgSAAgMgCg");
	this.shape_3.setTransform(60.4,30.3439);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129.5,57.9);


(lib.VEC_Gradient_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.376,0.604,1],0,70.5,0,-70.5).s().p("A8qLwIAA3gMA5VAAAIAAXgg");
	this.shape.setTransform(183.497,75.2827,1,1.3599,0,0,-1.0002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-30.2,366.9,211);


(lib.Text_CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuAxIAAg7QAAgNgEgFQgEgGgLAAQgKAAgFAFQgEAGAAANIAAA7IgPAAIAAg7QAAgNgEgFQgEgGgLAAQgJAAgGAFQgEAGAAANIAAA7IgQAAIAAhfIAPAAIAAAMQAGgOASAAQAVAAAFAQQAHgQAUAAQAfAAAAAiIAAA/g");
	this.shape.setTransform(86.35,16.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAmQgJgMAAgaQAAgZAJgMQAJgMASAAQAUAAAHAMQAIALAAAZIAAADIg4AAQAAAUAGAIQAFAHAKAAQAKAAAFgEQAEgEACgJIANAAQgCAdggABQgTAAgIgMgAAWgKQgBgOgFgFQgFgGgKABQgJgBgFAGQgFAFgCAOIAqAAIAAAAg");
	this.shape_1.setTransform(74.5,16.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATBEIAAg8QABgMgFgFQgEgGgLAAQgJAAgEAFQgGAFABAMIAAA9IgQAAIAAiHIAQAAIAAAzQAFgNASAAQAdAAAAAhIAABAg");
	this.shape_2.setTransform(65.4,14.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATBEIgagtIgNAPIAAAeIgPAAIAAiHIAPAAIAABXIAngvIARAAIgiAnIAiA4g");
	this.shape_3.setTransform(52.875,14.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAmQgJgMAAgaQAAgZAJgMQAJgMASAAQAUAAAHAMQAIALAAAZIAAADIg4AAQAAAUAFAIQAGAHAKAAQALAAAEgEQAFgEABgJIAOAAQgEAdgfABQgSAAgJgMgAAVgKQAAgOgFgFQgFgGgKABQgKgBgEAGQgGAFAAAOIAoAAIAAAAg");
	this.shape_4.setTransform(43.6,16.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA5QgHgMgBgaQABgZAIgMQAKgMASAAQAQABAHAMIAAgyIAPAAIAACGIgPAAIAAgOQgHAPgSABQgSAAgJgMgAgRgIQgEAIAAATQAAAVAEAIQAGAIALAAQANAAAEgIQAGgIAAgVQgBgUgFgHQgFgIgMABQgLgBgGAIg");
	this.shape_5.setTransform(34.1,14.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANA7QgbAAAAgdIAAg0IgNAAIAAgNIANAAIAAgXIAOAAIAAAXIAcAAIAAANIgcAAIAAAzQAAAKADAEQAEAEAJAAIAMAAIAAAMg");
	this.shape_6.setTransform(26.375,15.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUAxIAAg7QgBgNgEgFQgEgGgKAAQgKAAgEAFQgFAGgBANIAAA7IgOAAIAAhfIAOAAIAAAMQAFgOASAAQAeAAAAAiIAAA/g");
	this.shape_7.setTransform(18.55,16.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA2QgLgQAAgmQAAgmALgPQALgQAbAAQAcAAALAQQALAPAAAmQAAAmgLAQQgLAQgcAAQgbAAgLgQgAgagrQgHALAAAgQAAAiAHAMQAHALATAAQAUAAAHgLQAGgMAAgiQAAgggGgLQgHgLgUAAQgTAAgHALg");
	this.shape_8.setTransform(7.925,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAuAxIAAg7QAAgNgEgFQgEgGgLAAQgKAAgFAFQgEAGAAANIAAA7IgPAAIAAg7QAAgNgEgFQgEgGgLAAQgJAAgGAFQgEAGAAANIAAA7IgQAAIAAhfIAPAAIAAAMQAGgOASAAQAVAAAFAQQAHgQAUAAQAfAAAAAiIAAA/g");
	this.shape_9.setTransform(86.35,16.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAmQgJgMAAgaQAAgZAJgMQAJgMASAAQAUAAAHAMQAIALAAAZIAAADIg4AAQAAAUAGAIQAFAHAKAAQAKAAAFgEQAEgEACgJIANAAQgCAdggABQgTAAgIgMgAAWgKQgBgOgFgFQgFgGgKABQgJgBgFAGQgFAFgCAOIAqAAIAAAAg");
	this.shape_10.setTransform(74.5,16.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATBEIAAg8QABgMgFgFQgEgGgLAAQgJAAgEAFQgGAFABAMIAAA9IgQAAIAAiHIAQAAIAAAzQAFgNASAAQAdAAAAAhIAABAg");
	this.shape_11.setTransform(65.4,14.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATBEIgagtIgNAPIAAAeIgPAAIAAiHIAPAAIAABXIAngvIARAAIgiAnIAiA4g");
	this.shape_12.setTransform(52.875,14.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaAmQgJgMAAgaQAAgZAJgMQAJgMASAAQAUAAAHAMQAIALAAAZIAAADIg4AAQAAAUAFAIQAGAHAKAAQALAAAEgEQAFgEABgJIAOAAQgEAdgfABQgSAAgJgMgAAVgKQAAgOgFgFQgFgGgKABQgKgBgEAGQgGAFAAAOIAoAAIAAAAg");
	this.shape_13.setTransform(43.6,16.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdA5QgHgMgBgaQABgZAIgMQAKgMASAAQAQABAHAMIAAgyIAPAAIAACGIgPAAIAAgOQgHAPgSABQgSAAgJgMgAgRgIQgEAIAAATQAAAVAEAIQAGAIALAAQANAAAEgIQAGgIAAgVQgBgUgFgHQgFgIgMABQgLgBgGAIg");
	this.shape_14.setTransform(34.1,14.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AANA7QgbAAAAgdIAAg0IgNAAIAAgNIANAAIAAgXIAOAAIAAAXIAcAAIAAANIgcAAIAAAzQAAAKADAEQAEAEAJAAIAMAAIAAAMg");
	this.shape_15.setTransform(26.375,15.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAUAxIAAg7QgBgNgEgFQgEgGgKAAQgKAAgEAFQgFAGgBANIAAA7IgOAAIAAhfIAOAAIAAAMQAFgOASAAQAeAAAAAiIAAA/g");
	this.shape_16.setTransform(18.55,16.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmA2QgLgQAAgmQAAgmALgPQALgQAbAAQAcAAALAQQALAPAAAmQAAAmgLAQQgLAQgcAAQgbAAgLgQgAgagrQgHALAAAgQAAAiAHAMQAHALATAAQAUAAAHgLQAGgMAAgiQAAgggGgLQgHgLgUAAQgTAAgHALg");
	this.shape_17.setTransform(7.925,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.9,31.8);


(lib.Text_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3bDXIAAmtMAu3AAAIAAGtg");
	var mask_graphics_1 = new cjs.Graphics().p("A4SFaIAAksMAwlAAAIAAEsg");
	var mask_graphics_2 = new cjs.Graphics().p("A4SCWIAAkrMAwlAAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:160.05,y:16.7}).wait(1).to({graphics:mask_graphics_1,x:154.2227,y:34.6}).wait(1).to({graphics:mask_graphics_2,x:154.225,y:84.9}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIAXAAIAAAdg");
	this.shape.setTransform(264.125,89.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBbQgrAAAAgtIAAhQIgSAAIAAgVIATAAIAAgiIAWAAIAAAiIAqAAIAAAVIgqAAIAABPQAAAOAFAHQAFAFAOABIASAAIAAATg");
	this.shape_1.setTransform(256.375,81.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdBKIAAhbQABgTgHgIQgGgIgQAAQgPAAgHAHQgHAJAAATIAABbIgYAAIAAiRIAXAAIAAATQAIgVAcAAQAuAAAAAyIAABhg");
	this.shape_2.setTransform(244.4,83.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBBQgLgKAAgSQAAgWAPgMQANgIAcgFIAWgEIAAgJQAAgRgFgGQgGgIgPAAQgPAAgGAGQgGAGgBAQIgVAAQABgZALgLQANgMAaAAQAvAAAAAwIAABjIgWAAIAAgSQgKAUgaAAQgVABgLgLgAAIAHQgTACgJAIQgHAFAAAMQABAWAYAAQAOABAHgJQAJgJAAgOIAAgVg");
	this.shape_3.setTransform(230.2,83.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBbQgrAAAAgtIAAhQIgSAAIAAgVIATAAIAAgiIAWAAIAAAiIAqAAIAAAVIgqAAIAABPQAAAOAFAHQAFAFAOABIASAAIAAATg");
	this.shape_4.setTransform(219.225,81.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBKIAAhbQAAgTgHgIQgGgIgQAAQgPAAgHAHQgHAJAAATIAABbIgYAAIAAiRIAXAAIAAATQAIgVAbAAQAvAAAAAyIAABhg");
	this.shape_5.setTransform(207.25,83.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0AYIAAhhIAYAAIAABbQAAATAGAJQAHAJAPAAQAPAAAHgJQAIgIAAgUIAAhbIAXAAIAACRIgWAAIAAgTQgJAVgcAAQguAAAAgyg");
	this.shape_6.setTransform(192.775,83.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA5QgOgSAAgnQAAgnAOgRQAOgTAdABQAfgBANATQANARABAnQgBAngNASQgOATgegBQgeABgNgTgAgZgqQgIAMAAAeQAAAgAIAMQAIAMARAAQATAAAHgMQAIgMAAggQAAgegIgMQgHgMgTAAQgRAAgIAMg");
	this.shape_7.setTransform(178.65,83.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA6QgOgRAAgpQAAgnAOgRQANgTAeABQAaAAAMAOQAMANACAdIgWAAQgCgUgHgIQgHgHgPgBQgSAAgHAMQgHAMAAAeQAAAgAHANQAHALASAAQAPAAAHgIQAHgJACgWIAWAAQgCAfgNAOQgMANgZAAQgfAAgMgRg");
	this.shape_8.setTransform(165.05,83.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA6QgNgRAAgpQAAgnANgRQAOgTAdABQAaAAANAOQAMANACAdIgWAAQgCgUgHgIQgHgHgQgBQgRAAgHAMQgIAMABAeQgBAgAIANQAHALARAAQAQAAAIgIQAGgJACgWIAWAAQgBAfgOAOQgNANgZAAQgeAAgNgRg");
	this.shape_9.setTransform(151.7,83.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBBQgLgKAAgSQAAgWAPgMQANgIAcgFIAWgEIAAgJQAAgRgFgGQgGgIgPAAQgPAAgGAGQgGAGAAAQIgVAAQAAgZALgLQANgMAaAAQAvAAAAAwIAABjIgWAAIAAgSQgKAUgaAAQgUABgMgLgAAIAHQgTACgIAIQgIAFABAMQgBAWAZAAQANABAIgJQAJgJAAgOIAAgVg");
	this.shape_10.setTransform(138,83.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBJIgghnIgfBnIgVAAIgsiRIAZAAIAfBuIAihuIAQAAIAhBuIAghuIAWAAIgsCRg");
	this.shape_11.setTransform(115.575,83.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0AYIAAhhIAYAAIAABbQAAATAGAJQAHAJAPAAQAPAAAHgJQAIgIAAgUIAAhbIAXAAIAACRIgWAAIAAgTQgJAVgcAAQguAAAAgyg");
	this.shape_12.setTransform(98.275,83.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBKIAAhbQgBgTgGgIQgHgIgPAAQgPAAgHAHQgIAJAAATIAABbIgXAAIAAiRIAWAAIAAATQAJgVAbAAQAvAAAAAyIAABhg");
	this.shape_13.setTransform(77.85,83.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnBBQgLgKAAgSQAAgWAPgMQANgIAcgFIAWgEIAAgJQAAgRgFgGQgGgIgPAAQgPAAgGAGQgGAGAAAQIgWAAQABgZALgLQANgMAaAAQAvAAAAAwIAABjIgWAAIAAgSQgKAUgaAAQgUABgMgLgAAIAHQgTACgJAIQgGAFAAAMQAAAWAYAAQANABAJgJQAIgJAAgOIAAgVg");
	this.shape_14.setTransform(63.65,83.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKBJIgxiRIAYAAIAkBxIAmhxIAVAAIgyCRg");
	this.shape_15.setTransform(51.1,83.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdBKIAAhbQABgTgHgIQgGgIgQAAQgPAAgHAHQgHAJAAATIAABbIgYAAIAAiRIAXAAIAAATQAIgVAcAAQAuAAAAAyIAABhg");
	this.shape_16.setTransform(288.95,53.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgSAdAAQAdAAANASQALASAAAkIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgGACgOIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAIgBAWIA/AAIAAAAg");
	this.shape_17.setTransform(274.925,53.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggBJIAAhlQAAgsArAAIAWAAIAAAUIgWAAQgUAAAAAVIAABog");
	this.shape_18.setTransform(264.375,53.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrA5QgOgRAAgoQAAgnAOgSQANgSAeAAQAfAAAOASQANASgBAnQABAogNARQgPATgegBQgeABgNgTgAgZgqQgIANAAAdQAAAgAIAMQAIAMARAAQATAAAIgMQAHgMABggQgBgdgHgNQgIgMgTABQgRgBgIAMg");
	this.shape_19.setTransform(252.2,53.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgSAdAAQAdAAANASQALASAAAkIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgGACgOIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAIgBAWIA/AAIAAAAg");
	this.shape_20.setTransform(232.225,53.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsBWQgMgRAAgoQAAgmANgTQAOgSAdAAQAYABALASIAAhNIAWAAIAADOIgWAAIAAgVQgKAYgbgBQgeABgMgTgAgZgNQgIAMAAAeQAAAgAIAMQAIAMASAAQASAAAIgMQAHgMABggQgBgegHgNQgIgLgSABQgSgBgIAMg");
	this.shape_21.setTransform(217.75,50.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAeBKIAAhbQAAgTgHgIQgGgIgQAAQgPAAgHAHQgHAJgBATIAABbIgXAAIAAiRIAWAAIAAATQAJgVAbAAQAvAAAAAyIAABhg");
	this.shape_22.setTransform(197.45,53.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLBnIAAiRIAXAAIAACRgAgLhLIAAgbIAXAAIAAAbg");
	this.shape_23.setTransform(187.075,50.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUBaQgrABAAguIAAhQIgSAAIAAgUIATAAIAAgjIAWAAIAAAjIAqAAIAAAUIgqAAIAABPQAAAPAFAHQAFAFAOAAIASAAIAAATg");
	this.shape_24.setTransform(172.975,52.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrA5QgOgRAAgoQAAgnAOgSQAOgSAdAAQAfAAANASQANASABAnQgBAogNARQgOATgegBQgeABgNgTgAgZgqQgIANAAAdQAAAgAIAMQAIAMARAAQATAAAHgMQAIgMAAggQAAgdgIgNQgHgMgTABQgRgBgIAMg");
	this.shape_25.setTransform(161.1,53.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUBaQgrABAAguIAAhQIgSAAIAAgUIATAAIAAgjIAWAAIAAAjIAqAAIAAAUIgqAAIAABPQAAAPAFAHQAFAFAOAAIASAAIAAATg");
	this.shape_26.setTransform(149.325,52.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUBaQgrABAAguIAAhQIgSAAIAAgUIATAAIAAgjIAWAAIAAAjIAqAAIAAAUIgqAAIAABPQAAAPAFAHQAFAFAOAAIASAAIAAATg");
	this.shape_27.setTransform(133.475,52.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABHBKIAAhbQAAgTgGgIQgIgIgPAAQgQAAgGAHQgIAJAAATIAABbIgXAAIAAhbQAAgTgGgIQgGgIgQAAQgQAAgHAHQgIAJABATIAABbIgYAAIAAiRIAWAAIAAATQAJgVAdAAQAeAAAKAYQAKgYAfAAQAuAAAAAyIAABhg");
	this.shape_28.setTransform(117.35,53.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLBnIAAjNIAXAAIAADNg");
	this.shape_29.setTransform(102.875,50.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnBBQgLgKAAgSQAAgWAPgMQANgIAcgFIAWgEIAAgJQAAgRgFgGQgGgIgPAAQgPAAgGAGQgGAGAAAQIgWAAQABgYALgMQANgNAaAAQAvABAAAwIAABjIgWAAIAAgSQgKAVgagBQgUAAgMgKgAAIAHQgTACgJAIQgGAFAAAMQAAAXAYgBQANAAAJgIQAIgJAAgOIAAgVg");
	this.shape_30.setTransform(92.8,53.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglBcQgLgKgDgYIAXAAQABAPAGAHQAHAGAQABQARAAAHgIQAJgGgBgTIAAgeQgLAWgZgBQgdABgNgTQgMgRAAgnQgBgnAOgTQAOgSAdAAQAaABAJAUIAAgSIAXAAIAACcQAAA0g3AAQgcgBgMgNgAgZhIQgIANAAAeQAAAfAIAMQAHAMASAAQASAAAIgLQAIgNAAgfQABgegJgNQgHgMgTABQgSgBgHAMg");
	this.shape_31.setTransform(78.9,56.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggBJIAAhlQAAgsArAAIAWAAIAAAUIgWAAQgUAAAAAVIAABog");
	this.shape_32.setTransform(68.125,53.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgSAdAAQAdAAANASQALASAAAkIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgGACgOIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAIgBAWIA/AAIAAAAg");
	this.shape_33.setTransform(56.175,53.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgSAdAAQAdAAANASQALASAAAkIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgGACgOIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAIgBAWIA/AAIAAAAg");
	this.shape_34.setTransform(42.625,53.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAgBJIgghoIgfBoIgVAAIgsiRIAZAAIAfBuIAihuIAQAAIAhBuIAghuIAWAAIgsCRg");
	this.shape_35.setTransform(25.825,53.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_36.setTransform(256.875,24.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLBnIAAiRIAXAAIAACRgAgLhLIAAgbIAXAAIAAAbg");
	this.shape_37.setTransform(246.975,21.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgsBWQgNgRAAgoQABgmAOgTQANgRAdgBQAYAAAKATIAAhMIAYAAIAADNIgXAAIAAgVQgLAYgaAAQgdgBgNgSgAgZgMQgIALAAAeQAAAfAIANQAIAMARAAQATAAAHgMQAJgNgBgfQABgegJgMQgHgLgTAAQgRAAgIAMg");
	this.shape_38.setTransform(236.15,21.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglA/QgLgKgCgWIAWAAQACAPAGAFQAHAGAOAAQAOAAAHgGQAGgFAAgKQAAgMgGgEQgEgFgRgDIgPgFQgigHAAghQAAgpAwgBQAYABAMAJQAMALAAAZIgUAAQgBgPgHgFQgFgFgPAAQgOAAgGAFQgFAFAAALQAAAKAEAEQAGAGANADIAOAEQAVAFAJAIQAJAKgBATQABAogzAAQgaAAgLgNg");
	this.shape_39.setTransform(216.75,24.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAdBKIAAhbQABgTgHgIQgGgIgQAAQgPAAgHAHQgHAJAAATIAABbIgYAAIAAiRIAXAAIAAATQAIgVAcAAQAuAAAAAyIAABhg");
	this.shape_40.setTransform(203.45,24.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnBBQgLgKAAgSQAAgWAPgLQANgJAcgFIAWgEIAAgJQAAgQgFgIQgGgHgPAAQgPAAgGAGQgGAGgBAQIgVAAQABgZALgLQANgNAaAAQAvABAAAwIAABjIgWAAIAAgSQgKAVgaAAQgVgBgLgKgAAIAGQgTAEgJAGQgHAHAAALQABAXAYAAQAOAAAHgJQAJgIAAgPIAAgVg");
	this.shape_41.setTransform(189.25,24.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAdBnIgohDIgTAWIAAAtIgYAAIAAjNIAYAAIAACEIA7hIIAaAAIgzA9IAzBUg");
	this.shape_42.setTransform(177.3,21.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAeBKIAAhbQAAgTgHgIQgGgIgQAAQgPAAgHAHQgHAJgBATIAABbIgXAAIAAiRIAWAAIAAATQAJgVAbAAQAvAAAAAyIAABhg");
	this.shape_43.setTransform(162.8,24.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_44.setTransform(148.775,24.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAUBaQgrABAAguIAAhQIgSAAIAAgTIATAAIAAgkIAWAAIAAAkIAqAAIAAATIgqAAIAABPQAAAPAFAGQAFAHAOgBIASAAIAAATg");
	this.shape_45.setTransform(137.225,22.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLBnIAAiRIAXAAIAACRgAgLhLIAAgbIAXAAIAAAbg");
	this.shape_46.setTransform(129.225,21.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag0AYIAAhhIAYAAIAABbQAAATAGAJQAHAJAPAAQAPAAAHgJQAIgIAAgUIAAhbIAXAAIAACRIgWAAIAAgTQgJAVgcAAQguAAAAgyg");
	this.shape_47.setTransform(118.875,24.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgiBUIAAASIgXAAIAAjNIAYAAIAABPQAKgWAZAAQAeABANARQAMASAAAnQAAAogNARQgNASgeABQgagBgJgUgAgZgNQgIAMAAAeQAAAfAIANQAIAMARAAQATAAAIgMQAIgNAAgfQAAgegIgLQgHgMgUAAQgRAAgIALg");
	this.shape_48.setTransform(104.7,21.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAeBKIAAhbQgBgTgGgIQgHgIgPAAQgPAAgHAHQgIAJAAATIAABbIgXAAIAAiRIAWAAIAAATQAJgVAbAAQAvAAAAAyIAABhg");
	this.shape_49.setTransform(83.7,24.275);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_50.setTransform(69.675,24.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag2BnIAAjNIBtAAIAAAWIhVAAIAABEIBOAAIAAATIhOAAIAABNIBVAAIAAATg");
	this.shape_51.setTransform(56.025,21.375);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.1,99.9);


(lib.Text_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ax9DXIAAmtMAj7AAAIAAGtg");
	var mask_graphics_1 = new cjs.Graphics().p("A1yCWIAAkrMArlAAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:124.9,y:18.15}).wait(1).to({graphics:mask_graphics_1,x:121.9,y:54.8}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAYIAAgvIArAAIAAAvg");
	this.shape.setTransform(210.9,65.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpB9QgMgEgIgLQgIgLgEgSQgEgSAAgbQAAgbAFgRQAEgSAJgKQAIgLANgFQANgFARAAQAMAAAKAFQAKAEAGALIAAhcIAwAAIAAEAIgtAAIAAgYQgHAPgLAGQgMAGgOAAQgRAAgNgFgAgNgOQgGACgDAFQgDAGgCAJIgBAcIABAeQACALADAGQADAGAGACQAGACAIAAQAIAAAGgCQAFgCAEgGQADgGACgLIABgeIgBgcQgCgJgDgGQgEgFgFgCIgOgCQgIAAgGACg");
	this.shape_1.setTransform(197.375,55.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZBcIAAhqQAAgVgFgHQgGgIgOAAIgLACQgFACgDAEQgDAEgBAHIgBARIAABqIgwAAIAAi0IAtAAIAAAVQAKgYAhAAQAfAAANARQANARAAAgIAAB1g");
	this.shape_2.setTransform(179.525,59.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BLQgNgRAAggIAAh1IAwAAIAABuIAAASQACAHADAEQADAFAEABIAMACIAMgCQAFgBADgEQACgEABgHIACgSIAAhvIAwAAIAAC0IgtAAIAAgWQgGAMgKAHQgLAGgQAAQgfAAgNgRg");
	this.shape_3.setTransform(161.3,59.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkBZQgPgFgJgLQgJgLgEgRQgEgSAAgbQAAgaAEgSQAEgSAJgLQAKgLAOgEQAPgFAVAAQAWAAAPAFQAPAFAJALQAJALAEASQAEASAAAZQAAAbgEASQgEARgJALQgJALgPAFQgPAFgWAAQgVAAgPgFgAgNgyQgGACgEAFQgDAGgBAKIgCAbIACAeQABALADAGQAEAGAGACQAFACAIAAQAJAAAFgCQAGgCAEgGQADgGABgLIACgeIgCgbQgBgKgDgGQgEgFgGgCQgFgCgJAAQgIAAgFACg");
	this.shape_4.setTransform(143.375,59.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBZQgNgEgHgIQgHgIgDgKQgDgLAAgMIAqAAQABAOAGAFQAGAFANAAQAOAAAFgFQAFgEAAgKIgBgHIgEgFIgHgEIgLgDIgWgEQgUgEgNgNQgOgMAAgaQAAgcASgOQASgOAgAAQAkAAAPAPQAPAPAAAgIgpAAQgBgOgFgFQgFgFgNAAQgNAAgFAEQgFADAAALQAAAIAFAEQAFAFANADIAXAEQAXAFALAMQALANAAAXQAAAMgDAKQgEAKgIAHQgIAHgOAEQgNAEgUAAQgVAAgNgFg");
	this.shape_5.setTransform(126.575,59.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0ASIAAgjIBpAAIAAAjg");
	this.shape_6.setTransform(111.675,57.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBZQgPgFgJgLQgJgLgEgSQgEgSgBgZQABgYAEgSQAEgSAJgMQAJgLAPgFQAOgGAUAAQAWAAAOAGQAOAGAIALQAIAMADASQAEASAAAWIAAAKIhlAAIACAZQABAKAEAFQAEAFAFACIAOABQANAAAGgFQAHgEABgOIAqAAQgCAbgQAQQgQAQgjAAQgVAAgPgFgAAegUQgCgUgGgHQgGgGgNAAIgLABQgFABgEAEQgCADgDAHIgDARIA3AAIAAAAg");
	this.shape_7.setTransform(96.2,59.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjBZQgNgEgHgIQgHgIgDgKQgDgLAAgMIAqAAQABAOAGAFQAGAFANAAQAOAAAFgFQAFgEAAgKIgBgHIgEgFIgHgEIgLgDIgWgEQgUgEgNgNQgOgMAAgaQAAgcASgOQASgOAgAAQAkAAAPAPQAPAPAAAgIgpAAQgBgOgFgFQgFgFgNAAQgNAAgFAEQgFADAAALQAAAIAFAEQAFAFANADIAXAEQAXAFALAMQALANAAAXQAAAMgDAKQgEAKgIAHQgIAHgOAEQgNAEgUAAQgVAAgNgFg");
	this.shape_8.setTransform(79.775,59.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkBZQgPgFgJgLQgJgLgEgRQgEgSAAgbQAAgaAEgSQAEgSAJgLQAKgLAOgEQAPgFAVAAQAWAAAPAFQAPAFAJALQAJALAEASQAEASAAAZQAAAbgEASQgEARgJALQgJALgPAFQgPAFgWAAQgVAAgPgFgAgNgyQgGACgEAFQgDAGgBAKIgCAbIACAeQABALADAGQAEAGAGACQAFACAIAAQAJAAAFgCQAGgCAEgGQADgGABgLIACgeIgCgbQgBgKgDgGQgEgFgGgCQgFgCgJAAQgIAAgFACg");
	this.shape_9.setTransform(62.925,59.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhXCAIAAj/IBdAAQAnAAASASQARARAAAiQAAAXgIANQgHAMgMAGQATAGAIAQQAIARAAAUQAAAmgRASQgSARgmAAgAgmBZIAvAAQAOAAAHgIQAIgHAAgUQAAgUgIgHQgHgHgOAAIgvAAgAgmgUIApAAQAQAAAGgHQAGgHAAgRQAAgRgGgHQgHgHgQAAIgoAAg");
	this.shape_10.setTransform(44.175,55.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_11.setTransform(226.425,24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsBWQgNgRAAgoQABgmAOgTQANgRAdgBQAZAAAJATIAAhMIAYAAIAADNIgXAAIAAgVQgLAYgbAAQgcgBgNgSgAgZgMQgIALAAAeQAAAfAIANQAIAMASAAQASAAAHgMQAIgNAAgfQAAgegIgMQgHgLgSAAQgSAAgIAMg");
	this.shape_12.setTransform(211.95,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdBKIAAhbQAAgTgGgIQgGgIgQAAQgPAAgHAHQgIAJABATIAABbIgYAAIAAiRIAWAAIAAATQAJgVAcAAQAuAAAAAyIAABhg");
	this.shape_13.setTransform(197.85,24.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_14.setTransform(183.825,24.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglBcQgLgLgDgYIAXAAQABARAGAGQAHAHAQAAQARgBAHgGQAJgIAAgSIAAgeQgMAWgZAAQgdgBgNgSQgMgRAAgnQgBgnAOgTQAOgRAdgBQAaAAAJAVIAAgSIAXAAIAACcQAAA0g3AAQgcAAgMgOgAgZhHQgIAMAAAeQAAAeAIANQAHAMASAAQASAAAIgLQAIgNABgfQAAgegJgMQgHgMgTAAQgSAAgHAMg");
	this.shape_15.setTransform(169.35,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLBnIAAiRIAXAAIAACRgAgLhLIAAgbIAXAAIAAAbg");
	this.shape_16.setTransform(159.225,21.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgsBWQgNgRAAgoQABgmAOgTQANgRAdgBQAYAAAKATIAAhMIAYAAIAADNIgXAAIAAgVQgLAYgaAAQgdgBgNgSgAgZgMQgIALAAAeQAAAfAIANQAIAMARAAQATAAAHgMQAJgNgBgfQABgegJgMQgHgLgTAAQgRAAgIAMg");
	this.shape_17.setTransform(148.4,21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBnIAAjNIAXAAIAADNg");
	this.shape_18.setTransform(138.275,21.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_19.setTransform(128.375,24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAgBJIgghoIgfBoIgVAAIgsiRIAZAAIAfBvIAihvIAQAAIAhBvIAghvIAWAAIgsCRg");
	this.shape_20.setTransform(111.575,24.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggBJIAAhmQAAgrArAAIAWAAIAAAUIgWAAQgUAAAAAVIAABog");
	this.shape_21.setTransform(97.725,24.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_22.setTransform(85.775,24.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKBJIgxiRIAYAAIAlBxIAkhxIAWAAIgxCRg");
	this.shape_23.setTransform(72.65,24.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrA5QgOgRAAgoQAAgnAOgSQANgRAegBQAfABAOARQANASgBAnQABAogNARQgOASgfABQgegBgNgSgAgZgpQgIAMAAAdQAAAfAIANQAIAMARAAQATAAAIgMQAHgNABgfQgBgdgHgMQgIgMgTAAQgRAAgIAMg");
	this.shape_24.setTransform(59.25,24.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgRAdgBQAdABANARQALARAAAlIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAugvAAQgeAAgNgSgAAhgPQgBgWgHgJQgHgHgRAAQgOAAgHAHQgJAKgBAVIA/AAIAAAAg");
	this.shape_25.setTransform(39.275,24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhFBnIAAjNIBAAAQAqAAARAXQAQAWAAA5QAAA4gQAXQgRAYgqAAgAgtBUIAoAAQAdAAALgRQAKgSAAgxQAAgvgKgQQgLgRgdAAIgoAAg");
	this.shape_26.setTransform(24.075,21.375);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.6,0,222.70000000000002,69.8);


(lib.Text_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ax9DXIAAmtMAj7AAAIAAGtg");
	var mask_graphics_1 = new cjs.Graphics().p("A1yCWIAAkrMArlAAAIAAErg");
	var mask_graphics_2 = new cjs.Graphics().p("AxuIuIAAkYMAjdAAAIAAEYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:115.1,y:27.75}).wait(1).to({graphics:mask_graphics_1,x:121.9,y:69}).wait(1).to({graphics:mask_graphics_2,x:113.075,y:55.8}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIAXAAIAAAdg");
	this.shape.setTransform(215.125,104.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBJIAAhlQAAgsArAAIAWAAIAAAUIgWAAQgUAAAAAWIAABng");
	this.shape_1.setTransform(208.375,98.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrA5QgOgSAAgnQAAgnAOgRQAOgTAdABQAfgBANATQANARABAnQgBAngNASQgOATgegBQgeABgNgTgAgZgqQgIAMAAAeQAAAgAIAMQAIAMARAAQATAAAHgMQAIgMAAggQAAgegIgMQgHgMgTABQgRgBgIAMg");
	this.shape_2.setTransform(196.2,98.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBbQgrAAAAgtIAAhQIgSAAIAAgVIATAAIAAgiIAWAAIAAAiIAqAAIAAAVIgqAAIAABPQAAAOAFAHQAFAFAOABIASAAIAAATg");
	this.shape_3.setTransform(184.425,96.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA5QgOgSAAgnQAAgnAOgRQANgTAeABQAfgBAOATQANARgBAnQABAngNASQgPATgegBQgeABgNgTgAgZgqQgIAMAAAeQAAAgAIAMQAIAMARAAQATAAAIgMQAHgMABggQgBgegHgMQgIgMgTABQgRgBgIAMg");
	this.shape_4.setTransform(172.55,98.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABHBKIAAhbQAAgTgHgIQgGgIgPAAQgRAAgHAHQgHAJAAATIAABbIgWAAIAAhbQAAgTgHgIQgGgIgQAAQgQAAgHAHQgHAJgBATIAABbIgXAAIAAiRIAWAAIAAATQAJgVAcAAQAfAAAKAYQAKgYAfAAQAuAAAAAyIAABhg");
	this.shape_5.setTransform(154.3,98.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA5QgNgSAAgnQAAgnANgRQANgTAeABQAfgBANATQANARAAAnQAAAngNASQgNATgfgBQgeABgNgTgAgZgqQgIAMAAAeQAAAgAIAMQAHAMASAAQATAAAHgMQAJgMAAggQAAgegJgMQgHgMgTABQgSgBgHAMg");
	this.shape_6.setTransform(135.95,98.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBJIAAhlQAAgsArAAIAWAAIAAAUIgWAAQgUAAAAAWIAABng");
	this.shape_7.setTransform(125.175,98.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUBbQgrAAAAgtIAAhQIgSAAIAAgVIATAAIAAgiIAWAAIAAAiIAqAAIAAAVIgqAAIAABPQAAAOAFAHQAFAFAOABIASAAIAAATg");
	this.shape_8.setTransform(115.225,96.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBnIgohDIgTAWIAAAtIgXAAIAAjNIAXAAIAACEIA7hIIAaAAIg0A9IA0BUg");
	this.shape_9.setTransform(104.6,95.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgRQANgTAdABQAdgBANATQALAQAAAmIAAAEIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAJgBAVIA/AAIAAAAg");
	this.shape_10.setTransform(90.425,98.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBnIAAjNIAXAAIAADNg");
	this.shape_11.setTransform(80.525,95.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgRQANgTAdABQAdgBANATQALAQAAAmIAAAEIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAJgBAVIA/AAIAAAAg");
	this.shape_12.setTransform(70.625,98.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdBKIAAhbQABgTgHgIQgGgIgQAAQgPAAgHAHQgHAJAAATIAABbIgYAAIAAiRIAXAAIAAATQAIgVAcAAQAuAAAAAyIAABhg");
	this.shape_13.setTransform(50.55,98.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgRQANgTAdABQAdgBANATQALAQAAAmIAAAEIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgFACgPIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAJgBAVIA/AAIAAAAg");
	this.shape_14.setTransform(36.525,98.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAKIAAgTIBVAAIAAATg");
	this.shape_15.setTransform(239.8,67.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmA/QgKgKgBgWIAUAAQACAPAHAGQAHAEANAAQAQAAAGgEQAGgFAAgLQAAgMgFgFQgFgEgRgEIgOgDQgjgIAAgiQAAgpAwAAQAZAAALALQANAKAAAaIgWAAQAAgQgGgFQgHgFgOAAQgOAAgGAFQgGAFAAAKQABAKAEAGQAFAFAOADIAPAEQAUAEAJAKQAIAJAAATQABAogzgBQgaAAgMgMg");
	this.shape_16.setTransform(227.6,69.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglBcQgMgKgCgYIAXAAQABAPAGAHQAHAGAQABQARAAAIgIQAHgGABgTIAAgeQgLAWgagBQgeABgMgTQgMgRAAgnQAAgnANgTQAOgSAdAAQAaABAJAUIAAgSIAWAAIAACcQAAA0g2AAQgcgBgMgNgAgZhIQgIANAAAeQAAAfAIAMQAHAMASAAQATAAAHgLQAJgNAAgfQgBgegHgNQgIgMgTABQgSgBgHAMg");
	this.shape_17.setTransform(213.7,72.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeBKIAAhbQAAgTgHgIQgGgIgQAAQgPAAgHAHQgHAJgBATIAABbIgXAAIAAiRIAXAAIAAATQAIgVAbAAQAvAAAAAyIAABhg");
	this.shape_18.setTransform(199.6,69.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLBnIAAiRIAXAAIAACRgAgLhLIAAgbIAXAAIAAAbg");
	this.shape_19.setTransform(189.225,66.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsBWQgNgRAAgoQAAgmAPgTQANgSAdAAQAZABAKASIAAhNIAWAAIAADOIgWAAIAAgVQgLAYgbgBQgdABgMgTgAgZgNQgIAMAAAeQAAAgAIAMQAHAMATAAQASAAAIgMQAHgMABggQgBgegHgNQgIgLgSABQgTgBgHAMg");
	this.shape_20.setTransform(178.4,66.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdBKIAAhbQABgTgHgIQgGgIgQAAQgPAAgHAHQgHAJAAATIAABbIgYAAIAAiRIAXAAIAAATQAIgVAcAAQAuAAAAAyIAABhg");
	this.shape_21.setTransform(164.3,69.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnBBQgLgKAAgSQAAgWAPgMQANgIAcgFIAWgEIAAgJQAAgRgFgGQgGgIgPAAQgPAAgGAGQgGAGgBAQIgVAAQABgYALgMQANgNAaAAQAvABAAAwIAABjIgWAAIAAgSQgKAVgagBQgVAAgLgKgAAIAHQgTACgIAIQgIAFAAAMQABAXAYgBQAOAAAHgIQAJgJAAgOIAAgVg");
	this.shape_22.setTransform(150.1,69.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggBJIAAhlQAAgsArAAIAWAAIAAAUIgWAAQgUAAAAAVIAABog");
	this.shape_23.setTransform(140.125,69.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiBUIAAASIgXAAIAAjOIAYAAIAABQQAKgWAZAAQAeAAANASQAMASAAAnQAAAogNARQgOATgdgBQgaAAgJgUgAgZgOQgIANAAAeQAAAgAIAMQAIAMARAAQATAAAIgMQAIgMgBggQABgegIgMQgHgMgUABQgRgBgIALg");
	this.shape_24.setTransform(127.9,66.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggBJIAAhlQAAgsArAAIAWAAIAAAUIgWAAQgUAAAAAVIAABog");
	this.shape_25.setTransform(116.425,69.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgSAdAAQAdAAANASQALASAAAkIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgGACgOIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAIgBAWIA/AAIAAAAg");
	this.shape_26.setTransform(104.475,69.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKBJIgxiRIAYAAIAlBxIAlhxIAVAAIgxCRg");
	this.shape_27.setTransform(91.35,69.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAeBKIAAhbQgBgTgGgIQgHgIgPAAQgPAAgHAHQgIAJAAATIAABbIgXAAIAAiRIAWAAIAAATQAJgVAbAAQAvAAAAAyIAABhg");
	this.shape_28.setTransform(71.65,69.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgoA6QgOgSAAgoQAAgnAOgSQANgSAdAAQAdAAANASQALASAAAkIAAAFIhWAAQAAAgAJAMQAHAKASAAQAPAAAHgGQAHgGACgOIAVAAQgFAtgvAAQgeAAgNgRgAAhgPQgBgWgHgIQgHgJgRABQgOgBgHAJQgJAIgBAWIA/AAIAAAAg");
	this.shape_29.setTransform(57.625,69.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmA/QgJgKgDgWIAVAAQACAPAHAGQAHAEAOAAQAOAAAHgEQAGgFAAgLQAAgMgGgFQgFgEgQgEIgOgDQgjgIAAgiQAAgpAwAAQAYAAAMALQAMAKAAAaIgUAAQgBgQgGgFQgHgFgOAAQgOAAgGAFQgGAFABAKQAAAKAEAGQAGAFANADIAOAEQAVAEAJAKQAIAJAAATQAAAogygBQgZAAgNgMg");
	this.shape_30.setTransform(44.65,69.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AglA/QgLgKgCgWIAWAAQACAPAGAGQAHAEAOAAQAOAAAHgEQAGgFAAgLQAAgMgGgFQgEgEgRgEIgPgDQgigIAAgiQAAgpAwAAQAYAAAMALQAMAKAAAaIgUAAQgBgQgHgFQgFgFgPAAQgOAAgGAFQgFAFAAAKQAAAKAEAGQAGAFANADIAOAEQAVAEAJAKQAJAJgBATQABAogzgBQgaAAgLgMg");
	this.shape_31.setTransform(32.25,69.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag0AYIAAhhIAYAAIAABbQAAATAGAJQAHAJAPAAQAPAAAHgJQAIgIAAgUIAAhbIAXAAIAACRIgWAAIAAgTQgJAVgcAAQguAAAAgyg");
	this.shape_32.setTransform(18.825,69.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAUBaQgrABAAguIAAhQIgSAAIAAgUIATAAIAAgjIAWAAIAAAjIAqAAIAAAUIgqAAIAABPQAAAPAFAHQAFAFAOAAIASAAIAAATg");
	this.shape_33.setTransform(6.925,67.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAbBWIgcg1IgfA1IgrAAIAyhUIgyhXIAxAAIAcA1IAfg1IArAAIgyBVIAyBWg");
	this.shape_34.setTransform(223.575,28.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWB5IAAirIAsAAIAACrgAgWhPIAAgpIAsAAIAAApg");
	this.shape_35.setTransform(211.8,24.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABGBXIAAhlQAAgTgFgHQgFgHgOAAQgNAAgFAGQgGAHAAASIAABnIgsAAIAAhlQAAgTgFgHQgFgHgNAAQgOAAgFAGQgFAHAAASIAABnIgtAAIAAirIAqAAIAAAVQAJgXAhAAQASAAAMAHQAKAGAGANQAFgMALgHQAMgHARAAQAeAAAMAQQAMAQAAAfIAABug");
	this.shape_36.setTransform(194.725,28.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeBUQgOgFgJgKQgIgLgEgQQgEgRAAgYQAAgXAEgRQAEgRAIgLQAJgKAOgFQANgFATAAQAUAAANAFQAOAGAIAKQAIALADARQACARAAAVIAAAJIheAAIACAYQABAJADAFQADAFAGACIAMABQANAAAGgEQAGgFABgNIAoAAQgCAagPAOQgPAPghAAQgUAAgOgEgAAcgTQgBgTgGgGQgGgGgMAAIgKABQgFABgDADQgDAEgDAGIgDAQIA0AAIAAAAg");
	this.shape_37.setTransform(167.225,28.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaBqQgfAAgOgNQgNgOAAggIAAhLIgUAAIAAglIAVAAIAAgoIArAAIAAAoIApAAIAAAlIgpAAIAABNQAAAOAEAEQAFAEANABIASAAIAAAig");
	this.shape_38.setTransform(153.375,26.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeBUQgOgFgJgLQgIgKgEgRQgDgRAAgYQAAgXAEgRQAEgRAIgLQAJgKANgFQAOgEATAAQATAAAMAEQANAFAHAJQAIAIADAOQAEANAAASIgpAAIgCgQQgBgGgDgEQgDgEgFgBIgLgCQgHAAgFACQgGABgCAGQgDAGgBAKIgBAaIABAbQABALADAFQACAGAGABQAFACAHAAQAHAAAFgCQAEgBADgEQADgEABgHIACgSIApAAQgBAlgPARQgQAQgiAAQgTAAgOgEg");
	this.shape_39.setTransform(139.775,28.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgeBUQgOgFgJgKQgIgLgEgQQgEgRAAgYQAAgXAEgRQAEgRAIgLQAJgKAOgFQANgFATAAQAUAAANAFQAOAGAIAKQAIALADARQACARAAAVIAAAJIheAAIACAYQABAJADAFQADAFAGACIAMABQANAAAGgEQAGgFABgNIAoAAQgCAagPAOQgPAPghAAQgUAAgOgEgAAcgTQgBgTgGgGQgGgGgMAAIgKABQgFABgDADQgDAEgDAGIgDAQIA0AAIAAAAg");
	this.shape_40.setTransform(123.775,28.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AggB5IAAiGIgUAAIAAglIAUAAIAAgOQAAgdAOgOQAPgNAcAAIAcAAIAAAnIgVAAQgKAAgFADQgFAFAAALIAAAMIAnAAIAAAlIgnAAIAACGg");
	this.shape_41.setTransform(110.175,24.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgrBWIAAhvQAAggAOgOQAOgOAeAAIAdAAIAAAlIgXAAQgLAAgEAFQgFAFAAALIAABxg");
	this.shape_42.setTransform(99.475,28.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeBUQgOgFgJgKQgIgLgEgQQgEgRAAgYQAAgXAEgRQAEgRAIgLQAJgKAOgFQANgFATAAQAUAAANAFQAOAGAIAKQAIALADARQACARAAAVIAAAJIheAAIACAYQABAJADAFQADAFAGACIAMABQANAAAGgEQAGgFABgNIAoAAQgCAagPAOQgPAPghAAQgUAAgOgEgAAcgTQgBgTgGgGQgGgGgMAAIgKABQgFABgDADQgDAEgDAGIgDAQIA0AAIAAAAg");
	this.shape_43.setTransform(85.425,28.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhIB6IAAjxIAqAAIAAAWQAGgOALgFQALgFAMAAQARAAAMAEQAMAEAIAKQAHALAEARQADARAAAZQAAAZgDAQQgEARgIAKQgIALgNAEQgMAEgQAAQgLAAgKgDQgKgEgFgLIAABWgAgNhRQgFABgDAGQgEAFgBAKIgBAaIABAcQABAKAEAGQADAFAFACQAGACAHAAQAIAAAFgCQAGgCADgGQADgGABgJIACgcIgCgaQgBgKgDgFQgDgGgGgBQgFgCgIAAg");
	this.shape_44.setTransform(68.925,31.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgeBUQgOgFgJgKQgIgLgEgQQgEgRAAgYQAAgXAEgRQAEgRAIgLQAJgKAOgFQANgFATAAQAUAAANAFQAOAGAIAKQAIALADARQACARAAAVIAAAJIheAAIACAYQABAJADAFQADAFAGACIAMABQANAAAGgEQAGgFABgNIAoAAQgCAagPAOQgPAPghAAQgUAAgOgEgAAcgTQgBgTgGgGQgGgGgMAAIgKABQgFABgDADQgDAEgDAGIgDAQIA0AAIAAAAg");
	this.shape_45.setTransform(45.625,28.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhYB5IAAjxIBVAAQAaAAARAFQASAFALAOQALAPAEAWQAFAXAAAkQAAAhgFAYQgDAXgLAOQgMAOgSAHQgSAGgbAAgAgqBTIAnAAQAMABAJgDQAKgDAEgIQAFgJABgRQACgRAAgbQAAgagCgPQgBgOgFgJQgEgIgKgDQgJgDgMAAIgnAAg");
	this.shape_46.setTransform(27.5,24.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6.3,247.9,105.3);


(lib.Text_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRATIAAgmIAiAAIAAAmg");
	this.shape.setTransform(130.85,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBlQgKgEgHgJQgGgIgDgPQgEgOAAgWQAAgVAEgOQADgOAIgKQAGgIALgDQAKgEAOgBQAJAAAIAEQAJAEAFAIIAAhKIAlAAIAADOIgkAAIAAgTQgFANgJAEQgKAFgLgBQgOAAgJgDgAgKgMQgFACgDAFQgCAFgBAGIgBAXIABAXQABAKACAEQADAFAFADQAFABAFAAQAHAAAFgBQAEgCADgFQADgFABgJIACgYIgCgXQgBgHgDgEQgDgFgEgCIgMgBIgKABg");
	this.shape_1.setTransform(119.95,50.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBnIAAiRIAlAAIAACRgAgShDIAAgjIAlAAIAAAjg");
	this.shape_2.setTransform(109.425,50.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBJIAAhfQAAgbAMgLQAMgMAaAAIAYAAIAAAfIgTAAQgJAAgEAFQgEADAAAKIAABgg");
	this.shape_3.setTransform(101.95,53.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBkQgJgEgFgNIAAATIgkAAIAAjOIAnAAIAABLQAFgJAJgDQAJgEAJgBQAOAAAKAEQALAEAGAIQAHAJADAPQADANAAAWQAAAWgDAOQgEAOgHAJQgGAJgLAEQgKADgOAAQgLABgJgFgAgKgMQgFACgDAFQgDAEgBAHIgBAXIABAYQABAJADAFQADAFAFACQAEABAGAAQAHAAAFgBQAEgDADgFQACgEACgKIABgXIgBgXQgCgGgCgFQgDgFgEgCIgMgBg");
	this.shape_4.setTransform(89.625,50.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BnIAAgdIAMAAQAKAAAHgEQAGgEADgMIACgGIgziWIAoAAIAdBiIAehiIAiAAIg1CfIgIAUQgFAJgFAFQgFAGgJADQgJADgMAAg");
	this.shape_5.setTransform(75.125,56.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBnIAAhWIhCAAIAABWIgpAAIAAjNIApAAIAABWIBCAAIAAhWIAnAAIAADNg");
	this.shape_6.setTransform(59.2,50.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpAPIAAgdIBTAAIAAAdg");
	this.shape_7.setTransform(44.425,52.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BnIAAjNIB5AAIAAAkIhRAAIAAAyIBKAAIAAAhIhKAAIAAA2IBRAAIAAAgg");
	this.shape_8.setTransform(31.675,50.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBCQgLgLAAgTQAAgLAEgIQADgIAHgFQAHgFALgDQALgEANgDIATgEIAAgGQAAgMgDgGQgEgEgLAAQgKgBgFAEQgEAEAAANIgiAAQAAgNADgKQADgIAHgHQAHgHAKgDQALgDAOgBQASABALAEQAKAEAFAHQAHAIABAJQACAJAAAKIAABgIglAAIAAgPQgDAHgIAFQgIAGgNAAQgVAAgMgKgAAHAMQgOACgFAFQgGAEAAAIQAAARARAAQAJAAAGgGQAFgFAAgNIAAgOg");
	this.shape_9.setTransform(148.55,24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBJIAAhfQAAgbAMgLQAMgMAaAAIAZAAIAAAgIgUAAQgJAAgEADQgEAFAAAJIAABgg");
	this.shape_10.setTransform(138.05,24.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZBIQgMgFgIgJQgHgJgEgNQgDgPAAgUQAAgUADgOQAEgPAHgJQAIgJALgEQAMgFAQAAQARABALAEQAMAFAGAJQAHAJACAPQADAOAAASIAAAHIhRAAIACAWQABAHADAEQADAFAFABIAKABQAKAAAGgEQAEgEABgLIAjAAQgCAWgNANQgNANgcAAQgQgBgMgDgAAXgQQgBgQgEgGQgFgFgLAAIgIABQgEABgDADQgDACgBAGIgDAOIArAAIAAAAg");
	this.shape_11.setTransform(126.1,24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA8BKIAAhVQAAgRgEgGQgFgGgLAAQgMAAgEAGQgFAFABAPIAABYIgnAAIAAhVQAAgRgDgGQgFgGgMAAQgLAAgFAGQgEAFAAAPIAABYIgmAAIAAiRIAlAAIAAARQAHgTAcAAQAQAAAJAFQAJAGAFALQAEgKAKgGQAJgGAPAAQAZAAALANQALAOgBAaIAABeg");
	this.shape_12.setTransform(108,24.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBCQgMgLAAgTQAAgLAEgIQADgIAHgFQAHgFALgDQALgEAOgDIASgEIAAgGQAAgMgEgGQgDgEgLAAQgKgBgFAEQgEAEgBANIghAAQAAgNADgKQADgIAHgHQAGgHALgDQALgDAOgBQARABALAEQALAEAGAHQAFAIADAJQABAJAAAKIAABgIgkAAIAAgPQgEAHgIAFQgJAGgNAAQgUAAgLgKgAAHAMQgOACgGAFQgFAEAAAIQAAARAQAAQAKAAAFgGQAGgFAAgNIAAgOg");
	this.shape_13.setTransform(89.65,24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUBKIAAhVQAAgRgEgGQgFgGgLAAIgJABQgEACgCADQgDADgBAGIgBAOIAABVIgmAAIAAiRIAlAAIAAARQAHgTAbAAQAZAAALANQAKAOAAAaIAABeg");
	this.shape_14.setTransform(76.05,24.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBCQgLgLAAgTQAAgLAEgIQADgIAHgFQAHgFALgDQALgEAOgDIASgEIAAgGQAAgMgEgGQgDgEgLAAQgKgBgEAEQgFAEgBANIghAAQAAgNADgKQADgIAHgHQAHgHAKgDQALgDAPgBQAQABALAEQALAEAGAHQAGAIACAJQABAJAAAKIAABgIgkAAIAAgPQgEAHgIAFQgJAGgNAAQgUAAgMgKgAAHAMQgOACgGAFQgFAEAAAIQAAARAQAAQAKAAAGgGQAFgFAAgNIAAgOg");
	this.shape_15.setTransform(61.65,24.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhEBnIAAjNIBLAAQAQAAAMADQAMAEAHAIQAIAHADANQAEANAAASQAAAUgEANQgEANgHAHQgIAIgLADQgMAEgQAAIgjAAIAABHgAgcgBIAdAAIANgBQAFgBADgEQAEgEABgGIABgRIgBgRQgCgGgDgDQgDgEgFgBIgNgBIgdAAg");
	this.shape_16.setTransform(47.725,21.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaBIQgLgFgIgJQgHgJgDgNQgEgPAAgUQAAgUAEgOQADgPAHgJQAIgJALgEQAMgFAPAAQASABALAEQALAFAHAJQAHAJACAPQADAOAAASIAAAHIhQAAIABAWQABAHADAEQADAFAFABIAJABQAMAAAEgEQAFgEACgLIAiAAQgCAWgNANQgNANgcAAQgRgBgMgDgAAYgQQgCgQgEgGQgFgFgLAAIgJABQgDABgDADQgCACgCAGIgDAOIAsAAIAAAAg");
	this.shape_17.setTransform(26.95,24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhLBnIAAjNIBIAAQAWAAAPAEQAQAFAJAMQAJAMAEATQAEAUAAAeQAAAdgEAUQgDATgKANQgJAMgQAFQgPAFgXAAgAgjBHIAgAAQALAAAIgCQAHgCAEgIQAFgHABgOQABgPAAgXQAAgVgBgNQgBgNgFgHQgEgHgHgDQgIgCgLAAIggAAg");
	this.shape_18.setTransform(11.475,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,75.9);


(lib.Porsche_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhILAL2IAA3rMAndAAAQCKAABhBiQBjBigBCJIAAFNQAACJhcBhQheBiiHAAQCZBKBYCJQBaCKAACoIlNAAIAAhAQAAiJhhhiQhihiiKAAI9NAAIAAGNgEhC1AAlMAhbAAAQAYAAAPgOQAPgPAAgYIgBlXQAAgYgOgPQgPgPgZAAMghaAAAgA0qL2IAAkXMAlyAAAQAZAAAOgPQAPgPAAgYIAAjiQAAgZgPgPQgPgOgYAAMghPAAAQiJAAhihiQhihhAAiJIAAjiQAAiJBihiQBihiCJAAMAmnAAAIAAEXMglxAAAQgZAAgPAPQgOAPAAAYIAADiQAAAZAPAPQAPAOAYAAMAhPAAAQCJAABiBiQBjBhgBCJIAADiQgBCJhhBiQhiBiiJAAgEBzXAL1IAAo6I/uAAIAAI6IlNAAIAA3qIFNAAIAAJlIfuAAIAAplIFNAAIAAXqgEAiwAL1QiJAAhihiQhihiAAiJIAAtQQAAiJBkhiQBkhiCQAAMAlpAAAIAAFNMgk+AAAQgUAAgPAJQgTAMAAAWIAAL6QAAAQAOAOQAOANAPAAMAlIAAAIAAFNgEh1DAL1QiJAAhhhiQhjhiABiJIAAtQQAAiKBjhhQBkhiCRAAMAhbAAAQCBAABgBiQBgBjAACIIAANQQAACJhiBiQhhBiiKAAgEh00gGQQgPANAAARIAAL6QAAAQANANQAOAOAQAAIf6AAQAYAAAPgOQAPgPAAgZIAArkQAAgYgOgPQgPgPgZAAI/vAAQgYAAgPANgEis+AL1IAA3qMAnTAAAQCKAABhBiQBiBiAACJIAAHCQAACKhiBhQhhBiiKAAMgiGAAAIAAGOgEinxAAlMAhbAAAQAYAAAPgOQAPgPAAgYIgLlXQAAgYgOgPQgPgPgZAAMghQAAAgEB+zAL0IAA3pMAuLAAAIAAEYMgo+AAAIAAFXMAo+AAAIAAEWMgo+AAAIAAFNMAo+AAAIAAEXg");
	this.shape.setTransform(1107.05,75.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// gradient
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],73.3,1138.2,73.3,-2825.3).s().p("EnIOEK8MAAAoV3MOQdAAAMAAAIV3g");
	this.shape_1.setTransform(1145.05,1016.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1774.8,-692.3,5839.8,3416.8);


(lib.IMG_Rim_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_Rim();
	this.instance.setTransform(106,0,0.5,0.5,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,107,104.5);


(lib.IMG_04_Car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AH/JZQhWgIgigBQgbgBhLABQhBABgmgDQgqgDhIgNQhSgQgegEQg1gGhDgCIh5ABQiSABhigDQiFgEhtgMQhTgKg8gOQhMgRg7geQhZgshEhOQhDhNggheQgghfAHhlQAGhmAthaQAshaBNhDQBNhEBfggQA2gSBegPQBvgRAngKIA+gSIA+gSQAzgMBAgGQAtgEBHgDQECgJDuAEQBBABAkAEQA3AFAqAPIAkANQAVAHAQABQAMABAogFQAngEBXAGQBFAFAhAFQA5AHArAOQAiAKAqATIBKAjIBKAlQAqAWAeAVQA7ApAuA6QAuA6AbBEQAbBDAHBKQAHBIgNBIQgNBIggBBQggBDgxA0QhZBhigBAQilBDiUABIgGAAQgrAAhIgHgAkXAmQghA1ABBQQACBSAhA0QARAbAYAPQAYAPAYAAQAtAAAjg7QAig3gChNQgBhNgjg3Qgjg1gxAAQg0AAggA0gAxPApQgNAeAABAQABA2ARAnQASAnAYAAQAYAAARgnQARgngBg2QgBg3gRgnQgSgngYAAQgbAAgRAng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:155.9597,y:286.5292}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// IMG
	this.instance = new lib.IMG_04();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.1,225.7,265.7,121.69999999999999);


(lib.IMG_04_BG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_04_BG();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1135,600);


(lib.IMG_03_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,137.4,0,-137.3).s().p("A7KaAMAAAgz/MA2VAAAMAAAAz/g");
	this.shape.setTransform(153.95,67.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0.1,-137.3,0.1,137.4).s().p("A7KaAMAAAgz/MA2VAAAMAAAAz/g");
	this.shape_1.setTransform(153.95,458.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// IMG
	this.instance = new lib.IMG_03();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-99.1,347.9,723.8000000000001);


(lib.IMG_02_Car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_02();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406.5,812.5);


(lib.IMG_02_BG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_02_BG();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406.5,812.5);


(lib.IMG_01_Car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvwKyIgjgRQgUgJgQgFQgTgFgcgDIgugEQhzgOhjhAQhkhBg7hjQgqhHgRhRQgQhSALhRQARh/BeiSQBBhlBShUQCNiRCphIQBPghBpgYQBAgPB+gVQC7ggBmgJQBFgGCDgDQCIgDBAgFIBbgJIBcgLQBngKDOgRQB9gLAxgBQBigDBLAQQCWAfCRB2IA9A0QAlAhAYASQARANAtAfQAoAbAVARQBGA4AyBMQAyBMAXBWQAYBXgEBZQgFBbggBTQgUA1gjA8QgWAlguBFQgyBMgdAlQgvA8gwAmQhJA7hqAhQhSAah2APQknAlkkgoIhggOQg3gHgpgBQg9gBhQAKIiNAWQipAaiVAAQkyAAjghrgANaioQgPABgPAUQgLAPgSAnQgcA8gGBxQgGBpAVBLQAJAjARAVQAPATAOgBQAigCAchIQAXg9AGh3QAFhkgVhNQgJgjgQgTQgNgRgMAAIgCAAgAV8iAQgGABgGAMQgFAJgHAYQgMAlgCBGQgCBBAIAvQAEAVAHANQAGAMAGgBQAOAAALgtQAJgmADhKQACg+gJgvQgDgWgHgMQgFgKgFAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:142.3091,y:308.9211}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// IMG
	this.instance = new lib.IMG_01();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,229.3,300,159.3);


(lib.IMG_01_BG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_01_BG();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,799,600);


(lib.CTA_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApSjFISlAAQBkAAAABkIAADDQAABkhkAAIylAAQhkAAAAhkIAAjDQAAhkBkAAg");
	this.shape.setTransform(69.5,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApcDNQhkAAAAhkIAAjRQAAhkBkAAIS5AAQBkAAAABkIAADRQAABkhkAAg");
	this.shape_1.setTransform(69.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,141,41.6);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {end:23,rollover:24,rollout:32,stop:40};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_23 = function() {
		this.stop();
		ctaRolloverCheck = true;
	}
	this.frame_24 = function() {
		ctaRolloverCheck = false;
		ctaRolloverEnded = false;
	}
	this.frame_31 = function() {
		ctaRolloverEnded = true;
		
		if(!ctarolloutCheck){
			exportRoot.cta.stop();
		}
	}
	this.frame_32 = function() {
		ctaRolloverEnded = false;
	}
	this.frame_40 = function() {
		this.gotoAndStop("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(7).call(this.frame_31).wait(1).call(this.frame_32).wait(8).call(this.frame_40).wait(1));

	// text rollover
	this.instance = new lib.Text_CTA("single",1);
	this.instance.setTransform(70.9,15.85,1,1,0,0,0,51.1,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({alpha:1},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({alpha:0},8).wait(1));

	// text
	this.instance_1 = new lib.Text_CTA("single",0);
	this.instance_1.setTransform(70.9,15.85,1,1,0,0,0,51.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(3).to({_off:false,alpha:0},0).to({alpha:1},19,cjs.Ease.quadInOut).wait(18));

	// BG rollover
	this.instance_2 = new lib.CTA_BG("single",1);
	this.instance_2.setTransform(69.5,19.8,1,1,0,0,0,69.5,19.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({alpha:1},8,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).to({alpha:0},8).wait(1));

	// BG
	this.instance_3 = new lib.CTA_BG("single",0);
	this.instance_3.setTransform(69.5,19.8,1,1,0,0,0,69.5,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0},0).to({alpha:1},22,cjs.Ease.quadInOut).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,141,41.6);


(lib.Ani_text_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_02_line_03
	this.instance = new lib.Text_04("single",2);
	this.instance.setTransform(0.05,-6.1,1.02,1.02);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(248).to({_off:false},0).wait(1).to({regX:155.2,regY:50.9,x:158.35,y:45.8,alpha:0.0331},0).wait(1).to({alpha:0.0801},0).wait(1).to({alpha:0.1422},0).wait(1).to({alpha:0.2201},0).wait(1).to({alpha:0.3119},0).wait(1).to({alpha:0.4129},0).wait(1).to({alpha:0.5157},0).wait(1).to({alpha:0.6131},0).wait(1).to({alpha:0.7001},0).wait(1).to({alpha:0.7745},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.8855},0).wait(1).to({alpha:0.9244},0).wait(1).to({alpha:0.9539},0).wait(1).to({alpha:0.9753},0).wait(1).to({alpha:0.9895},0).wait(1).to({alpha:0.9975},0).wait(1).to({regX:0,regY:0,x:0.05,y:-6.1,alpha:1},0).wait(38).to({startPosition:2},0).to({alpha:0},10,cjs.Ease.quadInOut).wait(34));

	// text_02_line_02
	this.instance_1 = new lib.Text_04("single",1);
	this.instance_1.setTransform(0.05,-6.1,1.02,1.02);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(246).to({_off:false},0).wait(1).to({regX:155.2,regY:50.9,x:158.35,y:45.8,alpha:0.0355},0).wait(1).to({alpha:0.0866},0).wait(1).to({alpha:0.1548},0).wait(1).to({alpha:0.2406},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.4494},0).wait(1).to({alpha:0.5568},0).wait(1).to({alpha:0.6556},0).wait(1).to({alpha:0.7411},0).wait(1).to({alpha:0.8121},0).wait(1).to({alpha:0.8693},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.9477},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.9882},0).wait(1).to({alpha:0.9972},0).wait(1).to({regX:0,regY:0,x:0.05,y:-6.1,alpha:1},0).wait(39).to({startPosition:1},0).to({alpha:0},10,cjs.Ease.quadInOut).wait(36));

	// text_02_line_01
	this.instance_2 = new lib.Text_04("single",0);
	this.instance_2.setTransform(0.05,-6.1,1.02,1.02);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(244).to({_off:false},0).wait(1).to({regX:155.2,regY:50.9,x:158.35,y:45.8,alpha:0.0355},0).wait(1).to({alpha:0.0866},0).wait(1).to({alpha:0.1548},0).wait(1).to({alpha:0.2406},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.4494},0).wait(1).to({alpha:0.5568},0).wait(1).to({alpha:0.6556},0).wait(1).to({alpha:0.7411},0).wait(1).to({alpha:0.8121},0).wait(1).to({alpha:0.8693},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.9477},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.9882},0).wait(1).to({alpha:0.9972},0).wait(1).to({regX:0,regY:0,x:0.05,y:-6.1,alpha:1},0).wait(39).to({startPosition:0},0).to({alpha:0},10,cjs.Ease.quadInOut).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.1,316.3,101.89999999999999);


(lib.Ani_text_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_02_line_02
	this.instance = new lib.Text_03("single",1);
	this.instance.setTransform(127.55,49.85,1.68,1.68,0,0,0,125,54.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(172).to({_off:false},0).to({regX:124.9,regY:54.9,scaleX:1.02,scaleY:1.02,x:127.45,y:49.9},9,cjs.Ease.quintOut).wait(48));

	// text_02_line_01
	this.instance_1 = new lib.Text_03("single",0);
	this.instance_1.setTransform(0.05,-6.1,1.02,1.02);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156).to({_off:false},0).wait(1).to({regX:124.5,regY:39.8,x:127.05,y:34.5,alpha:0.0276},0).wait(1).to({alpha:0.0651},0).wait(1).to({alpha:0.1136},0).wait(1).to({alpha:0.1737},0).wait(1).to({alpha:0.2451},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.4129},0).wait(1).to({alpha:0.5012},0).wait(1).to({alpha:0.5862},0).wait(1).to({alpha:0.6643},0).wait(1).to({alpha:0.7336},0).wait(1).to({alpha:0.7933},0).wait(1).to({alpha:0.8437},0).wait(1).to({alpha:0.8855},0).wait(1).to({alpha:0.9194},0).wait(1).to({alpha:0.9464},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.9822},0).wait(1).to({alpha:0.9924},0).wait(1).to({alpha:0.9982},0).wait(1).to({regX:0,regY:0,x:0.05,y:-6.1,alpha:1},0).wait(52));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-6.1,374.09999999999997,81.19999999999999);


(lib.Ani_text_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_02_line_03
	this.instance = new lib.Text_02("single",2);
	this.instance.setTransform(0.05,-6.1,1.02,1.02);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({_off:false},0).wait(1).to({regX:123.4,regY:59.4,x:125.9,y:54.5,alpha:0.0331},0).wait(1).to({alpha:0.0801},0).wait(1).to({alpha:0.1422},0).wait(1).to({alpha:0.2201},0).wait(1).to({alpha:0.3119},0).wait(1).to({alpha:0.4129},0).wait(1).to({alpha:0.5157},0).wait(1).to({alpha:0.6131},0).wait(1).to({alpha:0.7001},0).wait(1).to({alpha:0.7745},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.8855},0).wait(1).to({alpha:0.9244},0).wait(1).to({alpha:0.9539},0).wait(1).to({alpha:0.9753},0).wait(1).to({alpha:0.9895},0).wait(1).to({alpha:0.9975},0).wait(1).to({regX:0,regY:0,x:0.05,y:-6.1,alpha:1},0).wait(35).to({startPosition:2},0).to({_off:true},1).wait(199));

	// text_02_line_02
	this.instance_1 = new lib.Text_02("single",1);
	this.instance_1.setTransform(0.05,-6.1,1.02,1.02);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(1).to({regX:123.4,regY:59.4,x:125.9,y:54.5,alpha:0.0355},0).wait(1).to({alpha:0.0866},0).wait(1).to({alpha:0.1548},0).wait(1).to({alpha:0.2406},0).wait(1).to({alpha:0.341},0).wait(1).to({alpha:0.4494},0).wait(1).to({alpha:0.5568},0).wait(1).to({alpha:0.6556},0).wait(1).to({alpha:0.7411},0).wait(1).to({alpha:0.8121},0).wait(1).to({alpha:0.8693},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.9477},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.9882},0).wait(1).to({alpha:0.9972},0).wait(1).to({regX:0,regY:0,x:0.05,y:-6.1,alpha:1},0).wait(42).to({startPosition:1},0).to({_off:true},1).wait(199));

	// text_02_line_01
	this.instance_2 = new lib.Text_02("single",0);
	this.instance_2.setTransform(0.05,-6.1,1.02,1.02);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).wait(1).to({regX:123.4,regY:59.4,x:125.9,y:54.5,alpha:0.0276},0).wait(1).to({alpha:0.0651},0).wait(1).to({alpha:0.1136},0).wait(1).to({alpha:0.1737},0).wait(1).to({alpha:0.2451},0).wait(1).to({alpha:0.326},0).wait(1).to({alpha:0.4129},0).wait(1).to({alpha:0.5012},0).wait(1).to({alpha:0.5862},0).wait(1).to({alpha:0.6643},0).wait(1).to({alpha:0.7336},0).wait(1).to({alpha:0.7933},0).wait(1).to({alpha:0.8437},0).wait(1).to({alpha:0.8855},0).wait(1).to({alpha:0.9194},0).wait(1).to({alpha:0.9464},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.9822},0).wait(1).to({alpha:0.9924},0).wait(1).to({alpha:0.9982},0).wait(1).to({regX:0,regY:0,x:0.05,y:-6.1,alpha:1},0).wait(57).to({startPosition:0},0).to({_off:true},1).wait(199));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.9,107.8);


(lib.Ani_IMG_04_Wheel_Rotating = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.IMG_Rim_1("synched",0);
	this.instance.setTransform(-1289.2,-60.9,2.0899,2.0899,0,0,0,53.5,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:52.5,scaleX:2.09,scaleY:2.09,rotation:-176.7648,x:-1287.3,y:-60.8},0).wait(1).to({rotation:-355.7829,x:-1291.25,y:-61.05},0).wait(1).to({scaleX:2.0899,scaleY:2.0899,rotation:-532.8688,x:-1287.25,y:-60.65},0).wait(1).to({scaleX:2.09,scaleY:2.09,rotation:-704.5791,x:-1291.2,y:-61.4},0).wait(1).to({scaleX:2.0899,scaleY:2.0899,rotation:-868.0913,x:-1287.6,y:-59.9},0).wait(1).to({scaleX:2.09,scaleY:2.09,rotation:-1021.1007,x:-1290.25,y:-62.6},0).wait(1).to({rotation:-1161.735,x:-1289.6,y:-58.95},0).wait(1).to({scaleX:2.0899,scaleY:2.0899,rotation:-1288.2737,x:-1287.55,y:-61.85},0).wait(1).to({rotation:-1400.1495,x:-1290.75,y:-62.15},0).wait(1).to({scaleX:2.09,scaleY:2.09,rotation:-1500.2339,x:-1290.3,y:-59.15},0).wait(1).to({scaleX:2.0899,scaleY:2.0899,rotation:-1591.1084,x:-1287.5,y:-59.95},0).wait(1).to({rotation:-1674.9545,x:-1288.1,y:-62.5},0).wait(1).to({rotation:-1753.7622,x:-1290.65,y:-62.3},0).wait(1).to({rotation:-1829.5178,x:-1291,y:-59.9},0).wait(1).to({scaleX:2.09,scaleY:2.09,rotation:-1904.4268,x:-1288.8,y:-59},0).wait(1).to({rotation:-1981.2658,x:-1287.3,y:-61},0).wait(1).to({rotation:-2064.085,x:-1289.05,y:-62.85},0).wait(1).to({regX:53.5,scaleX:2.0899,scaleY:2.0899,rotation:-2160,x:-1289.2,y:-60.9},0).to({rotation:-2520},53,cjs.Ease.sineOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1447,-218.8,315.70000000000005,315.5);


(lib.Ani_IMG_04_Driving_Car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_229 = new cjs.Graphics().p("AiTBsIAAjXIEnAAIAADXg");
	var mask_graphics_297 = new cjs.Graphics().p("Ar8BwIAAjXIEoAAIAADXgAH6BWIAAjFIEDAAIAADFg");
	var mask_graphics_298 = new cjs.Graphics().p("Ar7BwIAAjXIE9AAIAADXgAHxBWIAAjFIELAAIAADFg");
	var mask_graphics_299 = new cjs.Graphics().p("Ar5BwIAAjXIFcAAIAADXgAHlhvIEVAAIAADFIkVABg");
	var mask_graphics_300 = new cjs.Graphics().p("Ar3BwIAAjXIGDAAIAADXgAHVhvIEjAAIAADFIkjABg");
	var mask_graphics_301 = new cjs.Graphics().p("Ar0BwIAAjXIGzAAIAADXgAHBhvIE0AAIAADFIk0ABg");
	var mask_graphics_302 = new cjs.Graphics().p("ArxBwIAAjXIHtAAIAADXgAGqhuIFIgBIAADFIlIABg");
	var mask_graphics_303 = new cjs.Graphics().p("ArtBwIAAjXIIwAAIAADXgAGOhuIFggBIAADFIlgACg");
	var mask_graphics_304 = new cjs.Graphics().p("AroBwIAAjXIKCAAIAADXgAFthtIF8gCIAADFIl8ACg");
	var mask_graphics_305 = new cjs.Graphics().p("AriBwIAAjXILkAAIAADXgAFFhtIGegCIAADFImeADg");
	var mask_graphics_306 = new cjs.Graphics().p("ArdBwIAAjXIM+AAIAADXgAEghsIG+gDIAADFIm+ADg");
	var mask_graphics_307 = new cjs.Graphics().p("ArZBwIAAjXIN6AAIAADXgAEHhsIHTgDIAADFInTADg");
	var mask_graphics_308 = new cjs.Graphics().p("ArXBwIAAjXIOeAAIAADXgAD5hsIHfgDIAADFInfAEg");
	var mask_graphics_309 = new cjs.Graphics().p("ArWBwIAAjXIOyAAIAADXgADxhsIHmgDIAADFInmAEg");
	var mask_graphics_310 = new cjs.Graphics().p("ArVBwIAAjXIO7AAIAADXgADthsIHpgDIAADFInpAEg");
	var mask_graphics_311 = new cjs.Graphics().p("ArVBwIAAjXIO/AAIAADXgADshsIHqgDIAADFInqAEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_graphics_229,x:146.6,y:265.125}).wait(68).to({graphics:mask_graphics_297,x:208.2996,y:264.7251}).wait(1).to({graphics:mask_graphics_298,x:208.2249,y:264.7251}).wait(1).to({graphics:mask_graphics_299,x:208.1002,y:264.7251}).wait(1).to({graphics:mask_graphics_300,x:207.9247,y:264.7251}).wait(1).to({graphics:mask_graphics_301,x:207.7497,y:264.7251}).wait(1).to({graphics:mask_graphics_302,x:207.4999,y:264.7251}).wait(1).to({graphics:mask_graphics_303,x:207.2502,y:264.7251}).wait(1).to({graphics:mask_graphics_304,x:206.9253,y:264.7251}).wait(1).to({graphics:mask_graphics_305,x:206.5,y:264.7251}).wait(1).to({graphics:mask_graphics_306,x:206.1252,y:264.7251}).wait(1).to({graphics:mask_graphics_307,x:205.9249,y:264.7251}).wait(1).to({graphics:mask_graphics_308,x:205.7499,y:264.7251}).wait(1).to({graphics:mask_graphics_309,x:205.6999,y:264.7251}).wait(1).to({graphics:mask_graphics_310,x:205.65,y:264.7251}).wait(1).to({graphics:mask_graphics_311,x:205.6253,y:264.7251}).wait(11));

	// VEC_Red_Light_Stroke
	this.instance = new lib.VEC_Red_Light_Strokes("synched",0);
	this.instance.setTransform(209.25,264.3,1,1,0,0,0,41,2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).wait(68).to({startPosition:0},0).wait(25));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_229 = new cjs.Graphics().p("AQjRTIgjiXIAGAAIAjCXg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AAPBLIgiiWIAFABIAiCWg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AgihKIAigBIAjCWIgjABg");
	var mask_1_graphics_299 = new cjs.Graphics().p("Ag3hJIBMgDIAjCWIhMADg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AhShJICCgEIAjCXIiDADg");
	var mask_1_graphics_301 = new cjs.Graphics().p("Ah0hHIDGgHIAjCWIjGAHg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AichGIEWgJIAjCWIkWAKg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AjLhEIF0gNIAjCWIl0ANg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AkFhCIHngRIAjCWInnARg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AlKg/IJygXIAjCWIpyAXg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AmIg9ILugbIAjCWIruAbg");
	var mask_1_graphics_307 = new cjs.Graphics().p("Amyg7INCgfIAjCWItDAfg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AnLg6IN0ghIAjCWIt0Ahg");
	var mask_1_graphics_309 = new cjs.Graphics().p("Anag6IOSghIAjCWIuSAhg");
	var mask_1_graphics_310 = new cjs.Graphics().p("Angg6IOeghIAjCVIueAig");
	var mask_1_graphics_311 = new cjs.Graphics().p("Anig6IOighIAjCVIuiAig");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_1_graphics_229,x:106.45,y:110.75}).wait(68).to({graphics:mask_1_graphics_297,x:230.625,y:262.725}).wait(1).to({graphics:mask_1_graphics_298,x:229.925,y:262.775}).wait(1).to({graphics:mask_1_graphics_299,x:228.875,y:262.825}).wait(1).to({graphics:mask_1_graphics_300,x:227.55,y:262.9}).wait(1).to({graphics:mask_1_graphics_301,x:225.925,y:263}).wait(1).to({graphics:mask_1_graphics_302,x:224,y:263.1}).wait(1).to({graphics:mask_1_graphics_303,x:221.725,y:263.225}).wait(1).to({graphics:mask_1_graphics_304,x:218.95,y:263.375}).wait(1).to({graphics:mask_1_graphics_305,x:215.6,y:263.575}).wait(1).to({graphics:mask_1_graphics_306,x:212.575,y:263.75}).wait(1).to({graphics:mask_1_graphics_307,x:210.55,y:263.875}).wait(1).to({graphics:mask_1_graphics_308,x:209.325,y:263.925}).wait(1).to({graphics:mask_1_graphics_309,x:208.65,y:263.975}).wait(1).to({graphics:mask_1_graphics_310,x:208.325,y:264}).wait(1).to({graphics:mask_1_graphics_311,x:208.225,y:264}).wait(11));

	// Mask_Car (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_229 = new cjs.Graphics().p("AD7G7IiFgDQhDAAhAADQgvACgwgDQg+gEgfgLQgIgDgMgKQgKgJgGgCQg8gLhlgHIijgMIhpgNQhDgJgmgDQgagCheACQhPAAgigGQgegFgPggQgOgngJgOQgDgEgLgDQgLgDgEgDQgFgFgBgGIgBgJIgFgDQgEgEgBgGQAAgEADgKQADgKAAgGIgFguQgDgbADgVQAHgqAfg3QAhg8AhgSQAigSBGgGIA2gFQAegEAWgJQgNgOgFgHQgHgMAFgMQAFgOARgMQARgMAPgCQAIgBAOACQAOACAFgBQANgBAhggIAugsQAOgKAggeQAsglCMggQBcgVBtgPIARABIAygDQB1gECRAHQCPAICDAQQALABAQAEIAcAFQAPACANAEIAdAIICPAuICGAtQBTAcAvAPIAtANQAbAMAFARQACAGAAAPQAAAOADAFQADAFAUAMQAWANAEAGQAFAHAJAVQAJAWAAAHQABALgEAoQgFAiAEASQABAIAJALQALANACAEIAKAZQAHAUAAAEQABAPgPAlQgPAmgLALQgWATgwAVQgpARglAJQgXAGgQACQgVAEgSgBIgOATQAeAFA7ADQA8AEAcADQAtAGAZAHQA5AQgPAVQgCAEg5AMQgxALgTADQirAbjFAMQiIAIh+AAQg3AAg1gCg");
	var mask_2_graphics_297 = new cjs.Graphics().p("AD7G7IiFgDQhDAAhAADQgvACgwgDQg+gEgfgLQgIgDgMgKQgKgJgGgCQg8gLhlgHIijgMIhpgNQhDgJgmgDQgagCheACQhPAAgigGQgegFgPggQgOgngJgOQgDgEgLgDQgLgDgEgDQgFgFgBgGIgBgJIgFgDQgEgEgBgGQAAgEADgKQADgKAAgGIgFguQgDgbADgVQAHgqAfg3QAhg8AhgSQAigSBGgGIA2gFQAegEAWgJQgNgOgFgHQgHgMAFgMQAFgOARgMQARgMAPgCQAIgBAOACQAOACAFgBQANgBAhggIAugsQAOgKAggeQAsglCMggQBcgVBtgPIARABIAygDQB1gECRAHQCPAICDAQQALABAQAEIAcAFQAPACANAEIAdAIICPAuICGAtQBTAcAvAPIAtANQAbAMAFARQACAGAAAPQAAAOADAFQADAFAUAMQAWANAEAGQAFAHAJAVQAJAWAAAHQABALgEAoQgFAiAEASQABAIAJALQALANACAEIAKAZQAHAUAAAEQABAPgPAlQgPAmgLALQgWATgwAVQgpARglAJQgXAGgQACQgVAEgSgBIgOATQAeAFA7ADQA8AEAcADQAtAGAZAHQA5AQgPAVQgCAEg5AMQgxALgTADQirAbjFAMQiIAIh+AAQg3AAg1gCg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_2_graphics_229,x:151.9302,y:283.8914}).wait(68).to({graphics:mask_2_graphics_297,x:151.9302,y:283.8914}).wait(25));

	// VEC_Red_Light_Diffuse
	this.instance_1 = new lib.VEC_Red_Light_Diffuse("single",0);
	this.instance_1.setTransform(203,263.1,1,1,0,0,0,64.7,28.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:false},0).wait(68).to({startPosition:0},0).to({alpha:1},24,cjs.Ease.quadInOut).wait(1));

	// Shadow
	this.instance_2 = new lib.VEC_Shadow_Frame4("synched",0);
	this.instance_2.setTransform(-23.95,242.25,1,1,49.0005,0,0,145.1,112.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240).to({_off:false},0).to({regY:112.9,x:251.7,y:242.2},10,cjs.Ease.sineOut).wait(17).to({scaleX:0.7,x:-8.5,y:242.25},0).to({regX:144.8,scaleX:0.57,x:68.45,y:242.2},33,cjs.Ease.sineOut).wait(22));

	// IMG_04_Car
	this.instance_3 = new lib.IMG_04_Car("single",0);
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229).to({_off:false},0).wait(93));

	// Ani_IMG_04_Wheel_Rotating_Front_MotionBlur
	this.instance_4 = new lib.Ani_IMG_04_Wheel_Rotating("synched",2,false);
	this.instance_4.setTransform(51,300.4,0.0554,0.12,0,0,0,-1282.5,-59.2);
	this.instance_4.alpha = 0.3281;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(229).to({_off:false},0).wait(18).to({startPosition:19},0).to({alpha:0},5).wait(70));

	// Ani_IMG_04_Wheel_Rotating_Front_MotionBlur
	this.instance_5 = new lib.Ani_IMG_04_Wheel_Rotating("synched",3,false);
	this.instance_5.setTransform(51,300.4,0.0554,0.12,0,0,0,-1282.5,-59.2);
	this.instance_5.alpha = 0.3281;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(229).to({_off:false},0).wait(18).to({startPosition:3},0).to({alpha:0,startPosition:20},5).wait(70));

	// Ani_IMG_04_Wheel_Rotating_Front
	this.instance_6 = new lib.Ani_IMG_04_Wheel_Rotating("synched",0,false);
	this.instance_6.setTransform(51,300.4,0.0554,0.12,0,0,0,-1282.5,-59.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(229).to({_off:false},0).wait(93));

	// Ani_IMG_04_Wheel_Rotating_Back_MotionBlur
	this.instance_7 = new lib.Ani_IMG_04_Wheel_Rotating("synched",2,false);
	this.instance_7.setTransform(138.7,303.8,0.1165,0.18,0,0,0,-1282,-59.5);
	this.instance_7.alpha = 0.3281;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(229).to({_off:false},0).wait(18).to({startPosition:20},0).to({alpha:0,startPosition:25},5).wait(70));

	// Ani_IMG_04_Wheel_Rotating_Back_MotionBlur
	this.instance_8 = new lib.Ani_IMG_04_Wheel_Rotating("synched",4,false);
	this.instance_8.setTransform(138.7,303.8,0.1165,0.18,0,0,0,-1282,-59.5);
	this.instance_8.alpha = 0.3281;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(229).to({_off:false},0).wait(18).to({startPosition:22},0).to({alpha:0,startPosition:27},5).wait(70));

	// Ani_IMG_04_Wheel_Rotating_Back
	this.instance_9 = new lib.Ani_IMG_04_Wheel_Rotating("synched",0,false);
	this.instance_9.setTransform(138.7,303.8,0.1165,0.18,0,0,0,-1282,-59.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(229).to({_off:false},0).wait(93));

	// Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AF7DeQgngOgogyQgigtgMgmQgKgcgCg6QgFg7AIgfQAFgYAOgZQARgdAYgSQAYgRAhgGQAegGAiAFQAeAFAQANQAQAMAFAUQAFAUgHASIgCAFQAZAeAOAeQAMAaAFAaQAFAfgJAoQgOA8goA4IgGAHQgDALgHAKQgOAVgbAGQgKACgKAAQgPAAgQgGgAGSggQgCAIAEAQQAGAVAIAUQAFgRgBgMQgCgJgHgOIgKgQIgBADgAnTB1QgggNgNgqQgEgPgCgVQgSgNgHgXQgHgaAIgaQAIgXADgLQACgWACgKQAGgTASgPIAMgIQAHgMAIgJQAXgXAkgIIAOgCQAJgDALAAQAWAAAQAMQAQALAHAVQAGAUgGATQgIAYgbAUIgOAIQAJAUAAAiQAAAkgGAVIgKAdIgFAbQgHAbgZANQgOAIgOAAQgMAAgMgGg");
	this.shape.setTransform(95.5999,302.7043);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229).to({_off:false},0).wait(93));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288.8,347.4);


(lib.Ani_IMG_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EghXA1RMAAAhqhMBCvAAAMAAABqhg");
	this.shape.setTransform(120.525,289.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.435)").s().p("EghMA1AMAAAhp/MBCZAAAMAAABp/g");
	this.shape_1.setTransform(120.525,289.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.376)").s().p("EghCA0vMAAAhpdMBCFAAAMAAABpdg");
	this.shape_2.setTransform(120.55,289.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.314)").s().p("Egg3A0eMAAAho7MBBvAAAMAAABo7g");
	this.shape_3.setTransform(120.55,289.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.251)").s().p("EggtA0NMAAAhoZMBBbAAAMAAABoZg");
	this.shape_4.setTransform(120.55,289.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.188)").s().p("EggiAz8MAAAhn3MBBFAAAMAAABn3g");
	this.shape_5.setTransform(120.525,289.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.129)").s().p("EggXAzsMAAAhnXMBAvAAAMAAABnXg");
	this.shape_6.setTransform(120.55,289.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.067)").s().p("EggMAzbMAAAhm1MBAZAAAMAAABm1g");
	this.shape_7.setTransform(120.55,289.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.004)").s().p("EgaeAqSMAAAhUjMA09AAAMAAABUjg");
	this.shape_8.setTransform(120.5645,289.4215,1.21,1.21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},229).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(210));

	// IMG_04_Car
	this.instance = new lib.Ani_IMG_04_Driving_Car("synched",229,false);
	this.instance.setTransform(17.65,378.75,4.3391,4.3391,3.0024,0,0,-7.4,304.6);
	this.instance.alpha = 0.8516;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).wait(1).to({regX:144.4,regY:173.7,scaleX:4.0938,scaleY:4.0938,rotation:2.7819,x:662.5,y:-131.7,alpha:0.8637,startPosition:230},0).wait(1).to({scaleX:3.8454,scaleY:3.8454,rotation:2.5587,x:619.5,y:-108.95,alpha:0.876,startPosition:231},0).wait(1).to({scaleX:3.5996,scaleY:3.5996,rotation:2.3379,x:577.25,y:-86.15,alpha:0.8882,startPosition:232},0).wait(1).to({scaleX:3.3613,scaleY:3.3613,rotation:2.1238,x:536.5,y:-63.7,alpha:0.9,startPosition:233},0).wait(1).to({scaleX:3.1344,scaleY:3.1344,rotation:1.9199,x:497.85,y:-42.05,alpha:0.9112,startPosition:234},0).wait(1).to({scaleX:2.922,scaleY:2.922,rotation:1.7291,x:461.9,y:-21.6,alpha:0.9217,startPosition:235},0).wait(1).to({scaleX:2.7269,scaleY:2.7269,rotation:1.5537,x:429,y:-2.55,alpha:0.9314,startPosition:236},0).wait(1).to({scaleX:2.5513,scaleY:2.5513,rotation:1.3959,x:399.55,y:14.65,alpha:0.9401,startPosition:237},0).wait(1).to({scaleX:2.396,scaleY:2.396,rotation:1.2564,x:373.55,y:30.1,alpha:0.9478,startPosition:238},0).wait(1).to({scaleX:2.2571,scaleY:2.2571,rotation:1.1316,x:350.4,y:44,alpha:0.9547,startPosition:239},0).wait(1).to({scaleX:2.131,scaleY:2.131,rotation:1.0183,x:329.45,y:56.65,alpha:0.9609,startPosition:240},0).wait(1).to({scaleX:2.0146,scaleY:2.0146,rotation:0.9138,x:310.15,y:68.45,alpha:0.9667,startPosition:241},0).wait(1).to({scaleX:1.9052,scaleY:1.9052,rotation:0.8155,x:292.15,y:79.5,alpha:0.9721,startPosition:242},0).wait(1).to({scaleX:1.8001,scaleY:1.8001,rotation:0.721,x:274.8,y:90.25,alpha:0.9773,startPosition:243},0).wait(1).to({scaleX:1.6962,scaleY:1.6962,rotation:0.6276,x:257.7,y:100.95,alpha:0.9824,startPosition:244},0).wait(1).to({scaleX:1.5895,scaleY:1.5895,rotation:0.5318,x:240.25,y:112,alpha:0.9877,startPosition:245},0).wait(1).to({scaleX:1.4746,scaleY:1.4746,rotation:0.4285,x:221.45,y:123.9,alpha:0.9934,startPosition:246},0).wait(1).to({regX:-7.4,regY:304.6,scaleX:1.3415,scaleY:1.3415,rotation:0.3089,x:-4.8,y:312.25,alpha:1,startPosition:247},0).to({scaleX:1,scaleY:1,rotation:0,x:-7.4,y:304.6,startPosition:300},53,cjs.Ease.sineOut).wait(51).to({startPosition:321},0).to({_off:true},1).wait(96));

	// Logo_panamera
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5QgHAJADALIAEAHQABAFACABIAIAAQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAMAAQAJAAALgCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAMAAQAJAAAMgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQAIgDgBgCQABAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIgIgGIgIgBIgGAAg");
	this.shape_9.setTransform(155.65,229.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.043)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_10.setTransform(155.65,229.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.086)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_11.setTransform(155.65,229.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.129)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_12.setTransform(155.65,229.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.173)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_13.setTransform(155.65,229.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.216)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_14.setTransform(155.65,229.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.263)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_15.setTransform(155.65,229.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.306)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_16.setTransform(155.65,229.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.349)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_17.setTransform(155.65,229.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.392)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_18.setTransform(155.65,229.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.435)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_19.setTransform(155.65,229.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.478)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_20.setTransform(155.65,229.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.522)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_21.setTransform(155.65,229.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.565)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_22.setTransform(155.65,229.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.608)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_23.setTransform(155.65,229.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.651)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_24.setTransform(155.65,229.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.694)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_25.setTransform(155.65,229.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.737)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_26.setTransform(155.65,229.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.784)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_27.setTransform(155.65,229.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.827)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_28.setTransform(155.65,229.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.871)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_29.setTransform(155.65,229.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.914)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_30.setTransform(155.65,229.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.957)").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5IAAAbQAGAHAFgBQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAggCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAhgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_31.setTransform(155.65,229.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AzoB9QBkhkBRhGIBcgLIhPBFQAygCBegQQBygUAygWQAZgLgBgLQAAgOgigCQhCgHifATQiLAShfAVQAHgNAMgIQAKgGASgGQBOgaB9gRQCJgSBcAGQBlAFgCAqQgBAjhQAbQhAAUhdAQQhXAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgyARQgLACgFgCQgHgEgHgNQgGgKgFgPQhOArhJADQgUABgQgEQgTgHgCgRQgEgcAygZQB2g5CdAFIg1A5QgHAJADALIAEAHQABAFACABIAIAAQAUgEAhgOIA2g/IA8gGIgpAtQBKgbAggKQAlgJATAAQAGAAAFAEQAFAFACAHQADAGgGAIQgEAIgNAPIgXAaQgIAMABADQACABANgDQATgDAdgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIACAIQADAFADAAQACABAGgBQASgFAggNIA4g/IA7gHIgmAsQArgRAVgHQAsgNARgBQAFAAAGADQAEAEACAGQABAGgCAFIgHAMIBGgaQAngLAQAAQAHAAAEAEQAFADACAHQACAHgDAHIgiAoQgNARACADQADAEATgCQAPgCAVgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAJAPQADAIAAADQAAAFgKAEQgRALgtANQg1ARhGAOQAFACAcABQAqgBAxgKQAzgIAsgRIA1g8IA8gIIgfAjQAzgWAXgHQAegKANABQAPgBAJANQAIAMAGARQBygxCLAFQgtAwgKANQgIAIAFAMIAGAMQAFAFAKAAQAKgBAPgEIAVgGQAHgCADAHIAEAOQg/AVgjAEQgLAAgEgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgMgUQgIgLAGgOQAGgNAOgLIgNACQgEgSgIgDQgFgDgLABQgqAKg1AUIglApQgLALgJAFQgIADgRAAIgaAAIAVgZQhNAXhNADQgpABgbgGQgVgEgGgIQg2AQgoACQgjABgDgIQgFgFARgYIAagfQALgNgCgCQgBgCgRAEQgfAIgyAUIgZAhQgOATgaAAIgcABQAkguAMgUQAKgOgBgDQgBgBgSAFQgYAHg4AWIgdAfQgLANgKADQgIADgQAAIgaAAIASgXQgfANgSAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVgkACQgXADgGgHQgEgGANgTIAigqQAMgOgBgDQgBgCgZAGQgrALhHAZIgbAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALghAPQgfARACAIQACAGAMAAQAJAAALgCQBfgTAygwQgeABgqALgAg8AeQgrAMggAPQghARACAKQACAEAMAAQAJAAAMgDQBegSAygwQgeAAgrALgARBAYQgsAMggAQQghAOADALQACAIAggFQBegUAygwQgdABgrALgAKFAOQgPADgeALQgfAMgaANQgSALgFAGQBugaAfgOQAIgDgBgCQABAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIgIgGIgIgBIgGAAg");
	this.shape_32.setTransform(155.65,229.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},271).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},57).to({state:[]},1).wait(96));

	// Gradient
	this.instance_1 = new lib.VEC_Gradient_02("synched",0);
	this.instance_1.setTransform(162.4,236.6,1,1,0,0,0,183.5,75.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(271).to({_off:false},0).to({alpha:0.25},23).wait(57).to({startPosition:0},0).to({_off:true},1).wait(96));

	// IMG_04_BG
	this.instance_2 = new lib.IMG_04_BG_1("synched",0);
	this.instance_2.setTransform(-1032.35,301.4,1.18,1.18,0,0,0,1.4,301.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).wait(1).to({regX:567.5,regY:300,scaleX:1.1668,scaleY:1.1668,x:-300.55,y:299.8},0).wait(1).to({scaleX:1.1534,scaleY:1.1534,x:-235.95},0).wait(1).to({scaleX:1.1401,scaleY:1.1401,x:-172.1,y:299.85},0).wait(1).to({scaleX:1.1273,scaleY:1.1273,x:-110.15},0).wait(1).to({scaleX:1.115,scaleY:1.115,x:-51.1},0).wait(1).to({scaleX:1.1036,scaleY:1.1036,x:4.1},0).wait(1).to({scaleX:1.0931,scaleY:1.0931,x:54.85},0).wait(1).to({scaleX:1.0836,scaleY:1.0836,x:100.5,y:299.9},0).wait(1).to({scaleX:1.0752,scaleY:1.0752,x:140.9},0).wait(1).to({scaleX:1.0677,scaleY:1.0677,x:177},0).wait(1).to({scaleX:1.0609,scaleY:1.0609,x:209.8,y:299.95},0).wait(1).to({scaleX:1.0547,scaleY:1.0547,x:240},0).wait(1).to({scaleX:1.0488,scaleY:1.0488,x:268.5},0).wait(1).to({scaleX:1.0431,scaleY:1.0431,x:295.8},0).wait(1).to({scaleX:1.0375,scaleY:1.0375,x:322.85},0).wait(1).to({scaleX:1.0317,scaleY:1.0317,x:350.55},0).wait(1).to({scaleX:1.0255,scaleY:1.0255,x:380.45},0).wait(1).to({regX:1.4,regY:301.4,scaleX:1.0184,scaleY:1.0184,x:-161.45,y:301.45},0).to({scaleX:1,scaleY:1,x:-62.35,y:301.4},53,cjs.Ease.sineOut).wait(51).to({startPosition:0},0).to({_off:true},1).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1034,-54.2,2338.9,708);


(lib.Ani_IMG_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Shadow
	this.instance = new lib.VEC_Shadow("synched",0);
	this.instance.setTransform(-280.95,127.1,1,1,0,0,0,479.9,382.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).to({x:563.5,y:913.85},7).wait(7).to({x:-280.95,y:127.1},0).to({x:563.5,y:913.85},8).wait(7).to({x:-280.95,y:127.1},0).to({x:563.5,y:913.85},8).wait(7).to({x:-280.95,y:127.1},0).to({x:563.5,y:913.85},8).wait(7).to({x:-280.95,y:127.1},0).to({x:563.5,y:913.85},8).wait(7).to({x:-280.95,y:127.1},0).to({x:141.25,y:520.45},4).to({_off:true},1).wait(90));

	// IMG_03
	this.instance_1 = new lib.IMG_03_1("synched",0);
	this.instance_1.setTransform(170,399.15,1,1,0,0,0,150,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).wait(78).to({startPosition:0},0).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-814,-448.8,1866.4,1756.6);


(lib.Ani_IMG_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMG_02_Car
	this.instance = new lib.IMG_02_Car("synched",0);
	this.instance.setTransform(171.4,346.6,0.9499,0.9997,0,0,-7.0002,171.6,346.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).to({regX:171.5,regY:346.5,scaleX:1,scaleY:1,skewY:-3.9995,x:171.45,y:346.5},78).to({_off:true},1).wait(153));

	// IMG_02_BG
	this.instance_1 = new lib.IMG_02_BG_1("synched",0);
	this.instance_1.setTransform(173.05,348.75,1,0.95,0,-7.0007,0,173,348.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).to({regX:173.1,regY:348.9,scaleY:1,skewX:0,skewY:-3.9995,x:173,y:348.9},78).to({_off:true},1).wait(153));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-27.2,500.5,859.3000000000001);


(lib.Ani_IMG_01_Wheel_Rotating = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.IMG_Rim_1("synched",0);
	this.instance.setTransform(18.45,24.75,2.8141,2.8141,0,0,0,53.5,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1080},16).to({scaleX:2.8139,scaleY:2.8139,rotation:-2016.0019,x:18.15,y:25.1},60,cjs.Ease.none).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.3,-187.6,425.1,425);


(lib.Ani_IMG_01_Driving_Car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMG_01_Car
	this.instance = new lib.IMG_01_Car("single",0);
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({startPosition:0},0).to({_off:true},1).wait(2));

	// Ani_IMG_01_Wheel_Rotating_Front_MotionBlur
	this.instance_1 = new lib.Ani_IMG_01_Wheel_Rotating("synched",3);
	this.instance_1.setTransform(226.4,317.75,0.0555,0.17,0,2.9947,0,29.7,28);
	this.instance_1.alpha = 0.3281;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({startPosition:17},0).to({alpha:0,startPosition:20},3).wait(54).to({startPosition:74},0).to({_off:true},1).wait(2));

	// Ani_IMG_01_Wheel_Rotating_Front_MotionBlur
	this.instance_2 = new lib.Ani_IMG_01_Wheel_Rotating("synched",2,false);
	this.instance_2.setTransform(226.4,317.75,0.0555,0.17,0,2.9947,0,29.7,28);
	this.instance_2.alpha = 0.3281;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({startPosition:16},0).to({alpha:0,startPosition:19},3).wait(54).to({startPosition:73},0).to({_off:true},1).wait(2));

	// Ani_IMG_01_Wheel_Rotating_Front
	this.instance_3 = new lib.Ani_IMG_01_Wheel_Rotating("synched",0);
	this.instance_3.setTransform(226.4,317.75,0.0555,0.17,0,2.9947,0,29.7,28);
	this.instance_3.alpha = 0.3281;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({startPosition:14},0).to({alpha:1,startPosition:17},3).wait(54).to({startPosition:71},0).to({_off:true},1).wait(2));

	// Ani_IMG_01_Wheel_Rotating_Back_MotionBlur
	this.instance_4 = new lib.Ani_IMG_01_Wheel_Rotating("synched",3,false);
	this.instance_4.setTransform(281.6,312.7,0.0296,0.1099,0,1.9969,0,41.5,33.7);
	this.instance_4.alpha = 0.3281;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({startPosition:17},0).to({alpha:0,startPosition:20},3).wait(54).to({startPosition:74},0).to({_off:true},1).wait(2));

	// Ani_IMG_01_Wheel_Rotating_Back_MotionBlur
	this.instance_5 = new lib.Ani_IMG_01_Wheel_Rotating("synched",2,false);
	this.instance_5.setTransform(281.6,312.7,0.0296,0.1099,0,1.9969,0,41.5,33.7);
	this.instance_5.alpha = 0.3281;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({startPosition:16},0).to({alpha:0,startPosition:19},3).wait(54).to({startPosition:73},0).to({_off:true},1).wait(2));

	// Ani_IMG_01_Wheel_Rotating_Back
	this.instance_6 = new lib.Ani_IMG_01_Wheel_Rotating("synched",0);
	this.instance_6.setTransform(281.6,312.7,0.0296,0.1099,0,1.9969,0,41.5,33.7);
	this.instance_6.alpha = 0.3281;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({startPosition:14},0).to({alpha:1,startPosition:17},3).wait(54).to({startPosition:71},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,229.3,300,159.3);


(lib.Ani_IMG_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMG_01
	this.instance = new lib.Ani_IMG_01_Driving_Car("synched",0,false);
	this.instance.setTransform(958.15,473.9,0.38,0.38,0,0,0,170.2,333.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:150,regY:308.9,scaleX:0.3979,scaleY:0.3979,x:949.15,y:465.25,startPosition:1},0).wait(1).to({scaleX:0.4159,scaleY:0.4159,x:947.85,y:465.9,startPosition:2},0).wait(1).to({scaleX:0.4341,scaleY:0.4341,x:946.5,y:466.5,startPosition:3},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,x:945.2,y:467.1,startPosition:4},0).wait(1).to({scaleX:0.4707,scaleY:0.4707,x:943.85,y:467.65,startPosition:5},0).wait(1).to({scaleX:0.489,scaleY:0.489,x:942.5,y:468.25,startPosition:6},0).wait(1).to({scaleX:0.5085,scaleY:0.5085,x:941.05,y:468.9,startPosition:7},0).wait(1).to({scaleX:0.531,scaleY:0.531,x:939.4,y:469.65,startPosition:8},0).wait(1).to({scaleX:0.5555,scaleY:0.5555,x:937.6,y:470.45,startPosition:9},0).wait(1).to({scaleX:0.5813,scaleY:0.5813,x:935.75,y:471.25,startPosition:10},0).wait(1).to({scaleX:0.6085,scaleY:0.6085,x:933.75,y:472.15,startPosition:11},0).wait(1).to({scaleX:0.6371,scaleY:0.6371,x:931.65,y:473.15,startPosition:12},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,x:929.45,y:474.1,startPosition:13},0).wait(1).to({scaleX:0.6997,scaleY:0.6997,x:927.05,y:475.15,startPosition:14},0).wait(1).to({scaleX:0.7361,scaleY:0.7361,x:924.4,y:476.4,startPosition:15},0).wait(1).to({regX:170.2,regY:333.1,scaleX:0.7868,scaleY:0.7868,x:936.6,y:497.05,startPosition:16},0).to({regY:333.2,scaleX:0.9961,scaleY:0.9961,x:925.55,y:509.05,startPosition:70},54).to({_off:true},1).wait(1));

	// Logo_panamera
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5QgIAJAEALIAEAHQACAFACABIAIAAQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQADAGAMAAQAJAAALgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEANAAQAJAAANgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQAIgDAAgCQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIgIgGIgIgBIgGAAg");
	this.shape.setTransform(937.9,413.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.067)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_1.setTransform(937.9,413.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.133)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_2.setTransform(937.9,413.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_3.setTransform(937.9,413.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.267)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_4.setTransform(937.9,413.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.333)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_5.setTransform(937.9,413.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.4)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_6.setTransform(937.9,413.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.467)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_7.setTransform(937.9,413.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.533)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_8.setTransform(937.9,413.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.6)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_9.setTransform(937.9,413.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.667)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_10.setTransform(937.9,413.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.733)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_11.setTransform(937.9,413.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_12.setTransform(937.9,413.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.867)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_13.setTransform(937.9,413.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.933)").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5IAAAbQAGAHAGgBQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQACAGAhgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEAjgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQADgMgFgDIgIgBIgGAAg");
	this.shape_14.setTransform(937.9,413.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AznB9QBjhkBRhGIBcgLIhQBFQAzgCBegQQBxgUA0gWQAYgLgBgLQAAgOgigCQhDgHieATQiMASheAVQAHgNAMgIQAKgGATgGQBNgaB9gRQCKgSBbAGQBlAFgBAqQgBAjhQAbQhBAUheAQQhWAOiIANIhIA8QgRAMgdADgAoJB8IgaAAIAUgWIgzARQgLACgEgCQgGgEgIgNQgGgKgEgPQhPArhJADQgVABgPgEQgTgHgBgRQgFgcAygZQB2g5CcAFIg0A5QgIAJAEALIAEAHQACAFACABIAIAAQASgEAigOIA2g/IA7gGIgoAtQBLgbAegKQAmgJAUAAQAFAAAFAEQAFAFACAHQACAGgFAIQgEAIgNAPIgWAaQgKAMACADQACABANgDQAUgDAcgKQALgPAdgPQB3g4CZAEIg0A6QgHAJADAKIADAIQACAFADAAQACABAGgBQASgFAggNIA3g/IA8gHIgmAsQArgRAVgHQAsgNAQgBQAHAAAFADQADAEADAGQABAGgCAFIgIAMIBHgaQAngLAQAAQAGAAAFAEQAGADABAHQACAHgEAHIgiAoQgMARABADQADAEAVgCQAPgCAUgFQAHgSAegUQA4gmBHgRQAbgHARAAQAKAAANAIQARAMAIAPQAEAIAAADQAAAFgKAEQgQALguANQg1ARhGAOQAFACAcABQAqgBAxgKQA0gIArgRIA1g8IA8gIIgfAjQAzgWAXgHQAdgKAOABQAPgBAJANQAIAMAFARQBzgxCLAFQguAwgJANQgIAIAEAMIAIAMQAEAFALAAQAJgBAOgEIAWgGQAIgCACAHIADAOQg9AVglAEQgJAAgFgCQgFgCgFgIQgEgGgKgaQhRAthFADQgpACgNgUQgGgLAEgOQAHgNAOgLIgNACQgEgSgIgDQgFgDgLABQgrAKg1AUIgkApQgKALgKAFQgJADgRAAIgZAAIAWgZQhPAXhMADQgoABgcgGQgVgEgGgIQg3AQgnACQgiABgFgIQgDgFAQgYIAagfQALgNgBgCQgBgCgSAEQgfAIgyAUIgYAhQgPATgbAAIgcABQAlguAMgUQAKgOgBgDQAAgBgUAFQgXAHg4AWIgeAfQgJANgLADQgIADgRAAIgaAAIATgXQgeANgTAFQgMAEgDgEQgHgFgGgLQgGgKgFgQQhPAshJADQgyABgHgZQg+AVglACQgWADgGgHQgFgGAOgTIAigqQAMgOgBgDQgBgCgaAGQgqALhGAZIgcAgQgLALgJAEQgIADgPAAIgDAAgAqKAfQgtALggAPQggARABAIQADAGAMAAQAJAAALgCQBggTAwgwQgdABgqALgAg7AeQgsAMggAPQghARACAKQABAEANAAQAJAAANgDQBegSAxgwQgeAAgqALgARBAYQgsAMggAQQghAOADALQABAIAhgFQBegUAzgwQgdABgsALgAKFAOQgPADgeALQgfAMgZANQgTALgGAGQBvgaAfgOQAIgDAAgCQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIgIgGIgIgBIgGAAg");
	this.shape_15.setTransform(937.9,413.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},40).to({state:[]},1).wait(1));

	// IMG_01_BG
	this.instance_1 = new lib.IMG_01_BG_1("synched",0);
	this.instance_1.setTransform(985.65,469.05,1.5,1.5,0,0,0,657.1,312.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:399.5,regY:300,scaleX:1.4855,scaleY:1.4855,x:616.25,y:450.15},0).wait(1).to({scaleX:1.471,scaleY:1.471,x:633.3,y:450.35},0).wait(1).to({scaleX:1.4564,scaleY:1.4564,x:650.45,y:450.5},0).wait(1).to({scaleX:1.4416,scaleY:1.4416,x:667.85,y:450.7},0).wait(1).to({scaleX:1.4268,scaleY:1.4268,x:685.2,y:450.9},0).wait(1).to({scaleX:1.4121,scaleY:1.4121,x:702.55,y:451.05},0).wait(1).to({scaleX:1.3963,scaleY:1.3963,x:721.05,y:451.25},0).wait(1).to({scaleX:1.3782,scaleY:1.3782,x:742.4,y:451.5},0).wait(1).to({scaleX:1.3585,scaleY:1.3585,x:765.55,y:451.75},0).wait(1).to({scaleX:1.3376,scaleY:1.3376,x:790.05,y:452},0).wait(1).to({scaleX:1.3157,scaleY:1.3157,x:815.8,y:452.25},0).wait(1).to({scaleX:1.2927,scaleY:1.2927,x:842.9,y:452.55},0).wait(1).to({scaleX:1.2683,scaleY:1.2683,x:871.55,y:452.9},0).wait(1).to({scaleX:1.2421,scaleY:1.2421,x:902.3,y:453.2},0).wait(1).to({scaleX:1.2128,scaleY:1.2128,x:936.75,y:453.6},0).wait(1).to({regX:657.1,regY:312.6,scaleX:1.1719,scaleY:1.1719,x:1286.75,y:468.9},0).to({scaleX:1.0031,scaleY:1.0031,x:1441.6},54).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1586.3,900);


// stage content:
(lib._000831NewBizzPorsche_300x600_NL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"end":351,"rollover":352,"rollout":436};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,351,352,435,436,437];
	// timeline functions:
	this.frame_0 = function() {
		this.stage.cursor = "pointer";
		this.stage.enableMouseOver();
		bannerEnded = false;
		ctaRolloverCheck = false;
		ctaRolloverEnded = false;
		aniRolloverCheck = false;
		aniRolloverEnded = false;
		rolloutCheck = false;
		
		
		canvas.addEventListener("mouseover", overTarget, this);
		function overTarget(evt){
			rolloutCheck = false;
			ctarolloutCheck = false;
			if(bannerEnded){
				if(ctaRolloverCheck){
					exportRoot.cta.gotoAndPlay("rollover");
				};
				if(aniRolloverCheck){
					exportRoot.gotoAndPlay("rollover");
				};
			}
		};
		//ROLLOUTCHECK
		canvas.addEventListener("mouseout", outTarget, this);
		
		function outTarget(evt){
			
			rolloutCheck = true;
			
			ctarolloutCheck = true;
			
			if(ctaRolloverEnded){
				exportRoot.cta.gotoAndPlay("rollout");
			};
			if(aniRolloverEnded){
				exportRoot.gotoAndPlay("rollout");
			};
		};
	}
	this.frame_351 = function() {
		this.stop();
		aniRolloverCheck = true;
		
		bannerEnded = true;
		rolloutCheck = false;
	}
	this.frame_352 = function() {
		aniRolloverCheck = false;
		aniRolloverEnded = false;
	}
	this.frame_435 = function() {
		aniRolloverEnded = true;
		
		if(!rolloutCheck){
			this.stop();
		}
	}
	this.frame_436 = function() {
		aniRolloverEnded = false;
	}
	this.frame_437 = function() {
		this.gotoAndStop("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(351).call(this.frame_351).wait(1).call(this.frame_352).wait(83).call(this.frame_435).wait(1).call(this.frame_436).wait(1).call(this.frame_437).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(81.95,493,1,1,0,0,0,2.6,0);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(327).to({_off:false},0).wait(111));

	// Logo_porsche
	this.instance = new lib.Porsche_Logo("synched",0);
	this.instance.setTransform(149.45,39.35,0.07,0.07,0,0,0,1106.8,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(438));

	// text_EF
	this.instance_1 = new lib.Text_01("synched",0);
	this.instance_1.setTransform(54.05,380.1,1.2056,1.2056,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(311).to({_off:false},0).to({alpha:1},15,cjs.Ease.quadInOut).wait(112));

	// Ani_text_04
	this.instance_2 = new lib.Ani_text_04("synched",229,false);
	this.instance_2.setTransform(14,413,0.86,0.86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).wait(209));

	// Ani_IMG_04
	this.instance_3 = new lib.Ani_IMG_04("synched",229,false);
	this.instance_3.setTransform(-125.1,302.2,1.15,1.15,0,0,0,-125.1,302.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229).to({_off:false},0).wait(10).to({startPosition:239},0).to({scaleX:1,scaleY:1,startPosition:251},12,cjs.Ease.cubicInOut).wait(101).to({scaleX:1.15,scaleY:1.15,startPosition:229},0).wait(10).to({startPosition:239},0).to({scaleX:1,scaleY:1,startPosition:251},12,cjs.Ease.cubicInOut).wait(64));

	// Ani_text_03
	this.instance_4 = new lib.Ani_text_03("synched",150,false);
	this.instance_4.setTransform(149.35,486.75,1,1,0,0,0,126.4,46.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).wait(72).to({startPosition:222},0).to({alpha:0,startPosition:228},6).to({_off:true},1).wait(209));

	// Ani_IMG_03
	this.instance_5 = new lib.Ani_IMG_03("synched",71,false);
	this.instance_5.setTransform(154,262.75,1,1,0,0,0,174,361.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({_off:false},0).to({regX:173.9,scaleX:1.1,scaleY:1.1,x:153.95,y:263.1,startPosition:78},7,cjs.Ease.cubicOut).wait(1).to({y:264.1,startPosition:79},0).wait(1).to({y:262.1,startPosition:80},0).wait(1).to({y:263.1,startPosition:81},0).wait(2).to({y:262.1,startPosition:83},0).wait(1).to({y:263.1,startPosition:84},0).wait(1).to({y:262.1,startPosition:85},0).wait(1).to({y:264.1,startPosition:86},0).wait(1).to({y:263.1,startPosition:87},0).wait(2).to({startPosition:89},0).wait(1).to({y:262.1,startPosition:90},0).wait(1).to({y:263.1,startPosition:91},0).wait(1).to({y:264.1,startPosition:92},0).wait(2).to({y:262.8,startPosition:94},0).wait(2).to({y:262.1,startPosition:96},0).wait(1).to({y:263.1,startPosition:97},0).wait(1).to({y:264.1,startPosition:98},0).wait(2).to({y:263.1,startPosition:100},0).wait(2).to({y:262.1,startPosition:102},0).wait(1).to({y:264.1,startPosition:103},0).wait(1).to({y:263.1,startPosition:104},0).wait(2).to({y:262.1,startPosition:106},0).wait(1).to({y:264.1,startPosition:107},0).wait(1).to({y:263.1,startPosition:108},0).wait(2).to({y:264.1,startPosition:110},0).wait(1).to({y:262.1,startPosition:111},0).wait(1).to({y:263.1,startPosition:112},0).wait(2).to({y:264.1,startPosition:114},0).wait(2).to({y:262.1,startPosition:116},0).wait(1).to({y:263.1,startPosition:117},0).wait(1).to({y:262.1,startPosition:118},0).wait(1).to({y:264.1,startPosition:119},0).wait(1).to({y:263.1,startPosition:120},0).wait(2).to({startPosition:122},0).wait(1).to({y:262.1,startPosition:123},0).wait(1).to({y:263.1,startPosition:124},0).wait(1).to({y:264.1,startPosition:125},0).wait(2).to({y:262.8,startPosition:127},0).wait(2).to({y:262.1,startPosition:129},0).wait(1).to({y:263.1,startPosition:130},0).wait(1).to({y:264.1,startPosition:131},0).wait(2).to({y:263.1,startPosition:133},0).wait(2).to({y:262.1,startPosition:135},0).wait(1).to({y:264.1,startPosition:136},0).wait(1).to({y:263.1,startPosition:137},0).wait(2).to({y:262.1,startPosition:139},0).wait(1).to({y:264.1,startPosition:140},0).wait(1).to({y:263.1,startPosition:141},0).wait(2).to({y:264.1,startPosition:143},0).wait(1).to({y:262.1,startPosition:144},0).wait(1).to({y:263.1,startPosition:145},0).wait(2).to({y:264.1,startPosition:147},0).to({_off:true},3).wait(209));

	// Ani_text_02
	this.instance_6 = new lib.Ani_text_02("synched",71,false);
	this.instance_6.setTransform(150.4,486.75,1,1,0,0,0,126.4,46.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).wait(72).to({startPosition:143},0).to({alpha:0,startPosition:149},6).to({_off:true},1).wait(288));

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.847)"],[0,1],0,-140.3,0,140.3).s().p("A8PWhMAAAgtCMA4fAAAMAAAAtCg");
	this.shape.setTransform(146.125,473.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(71).to({_off:false},0).to({_off:true},79).wait(288));

	// Ani_IMG_02
	this.instance_7 = new lib.Ani_IMG_02("synched",71,false);
	this.instance_7.setTransform(145.35,300.55,0.82,0.82,3.9994,0,0,203.5,405.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({scaleX:1.1612,scaleY:1.1612,rotation:-2.6397,x:165.45,y:363.6,startPosition:145},74).wait(1).to({regX:209.9,regY:402.4,scaleX:1.1676,scaleY:1.1676,rotation:-2.7021,x:172.65,y:360.45,startPosition:146},0).wait(1).to({scaleX:1.1801,scaleY:1.1801,rotation:-2.8237,x:172.45,y:362.8,startPosition:147},0).wait(1).to({scaleX:1.2024,scaleY:1.2024,rotation:-3.0401,x:172.15,y:367,startPosition:148},0).wait(1).to({regX:203.2,regY:406.1,scaleX:1.2497,scaleY:1.2497,rotation:-3.5008,x:163.75,y:380.8,startPosition:149},0).to({_off:true},1).wait(288));

	// text_01
	this.instance_8 = new lib.Text_01("synched",0);
	this.instance_8.setTransform(54.05,431.15,1.2056,1.2056,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.none).to({_off:true},1).wait(367));

	// Ani_IMG_01
	this.instance_9 = new lib.Ani_IMG_01("synched",0,false);
	this.instance_9.setTransform(169.35,329,0.85,0.85,0,0,0,956.6,484.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({y:328,startPosition:1},0).wait(1).to({y:329,startPosition:2},0).wait(2).to({y:328,startPosition:4},0).wait(1).to({y:329,startPosition:5},0).wait(2).to({y:328,startPosition:7},0).wait(1).to({y:329,startPosition:8},0).wait(2).to({y:328,startPosition:10},0).wait(1).to({y:329,startPosition:11},0).wait(2).to({y:328.45,startPosition:13},0).to({scaleX:1,scaleY:1,x:169.25,startPosition:19},6,cjs.Ease.cubicInOut).to({_off:true},52).wait(367));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1020.3,-329.7,2539.5,1634.2);
// library properties:
lib.properties = {
	id: 'DA976D8B26B84C4C97DBECA9E7A252F9',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/IMG_01.png?1744894400337", id:"IMG_01"},
		{src:"images/IMG_01_BG.jpg?1744894400337", id:"IMG_01_BG"},
		{src:"images/IMG_02.png?1744894400337", id:"IMG_02"},
		{src:"images/IMG_02_BG.jpg?1744894400337", id:"IMG_02_BG"},
		{src:"images/IMG_03.jpg?1744894400337", id:"IMG_03"},
		{src:"images/IMG_04.png?1744894400337", id:"IMG_04"},
		{src:"images/IMG_04_BG.jpg?1744894400337", id:"IMG_04_BG"},
		{src:"images/IMG_Rim.png?1744894400337", id:"IMG_Rim"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DA976D8B26B84C4C97DBECA9E7A252F9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;