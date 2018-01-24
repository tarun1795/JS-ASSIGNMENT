A();

function C() {
	console.log("OOPS!");
}

function E(f) {
	console.log("E");
	f();

}

function A() {
	console.log("A");
	B();
};

var C;

function G() {
	console.log("G");


	var h = function H() {
		console.log("H");
		I();
	};
	h();
}

var D = d;

function d() {
	console.log("D");
	E(F);
}

function I() {
	console.log("I");
	J();
}

function B() {
	console.log("B");
	C();
};

function F() {
	console.log("F");
	G();
};

function K() {
	var rest = "KLMNOPQRSTUVWXYZ".split("");
	for (var i = 0; i < rest.length; i++) {
		(function (i) {
			// define the current function
			window[rest[i]] = function () {
				console.log(rest[i]);
				if (i < (rest.length - 1)) {
					// TODO: call the next function
					window[rest[i + 1]]();
				}
			};
		})(i);
	}
}

function J() {
	J = function () {
		console.log("J");
		K();
		K();
	};
	J();
};

function C() {
	console.log("C");
	d();
};