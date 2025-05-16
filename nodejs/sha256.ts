// https://en.wikipedia.org/wiki/SHA-2#Pseudocode

class Sha256 {
  private h: string[];
  private k: string[];
  private xorResult: string;
  private bitAdditionResult: string;

  constructor() {
    this.h = this.getHashValues(this.getPrimes(8));
    this.k = this.getHashValues(this.getPrimes(64), true);
    this.xorResult = "";
    this.bitAdditionResult = "";
  }

  public generation = (value: string) => {
    let [h0, h1, h2, h3, h4, h5, h6, h7] = this.h;
    const k = this.k;

    const binary = this.toBinary(value);

    let multiplesOf512: string = binary + "1";
    let lengthDataToBinary = this.toBinary(value.length.toString());
    

    while (multiplesOf512.length % 512) {
      multiplesOf512 += "0";
    }

    while (lengthDataToBinary.length !== 64) {
      lengthDataToBinary = "0" + lengthDataToBinary;
    }

    const chunks512byte = (
      multiplesOf512.slice(0, -64) + lengthDataToBinary
    ).match(/.{1,512}/g);

    chunks512byte.forEach((chunk) => {
      const w = chunk.match(/.{32}/g);

      for (let i = 48; i > 0; i--) {
        w.push("00000000000000000000000000000000");
      }

      for (let i = 16; i < 64; i++) {
        const s0 = this.xor(
          this.rightRotate(w[i - 15], 7),
          this.rightRotate(w[i - 15], 18)
        ).xor(this.xorResult, this.rightShift(w[i - 15], 3)).xorResult;

        const s1 = this.xor(
          this.rightRotate(w[i - 2], 17),
          this.rightRotate(w[i - 2], 19)
        ).xor(this.xorResult, this.rightShift(w[i - 2], 10)).xorResult;

        w[i] = this.bitAddition(w[i - 16], s0)
          .bitAddition(this.bitAdditionResult, w[i - 7])
          .bitAddition(this.bitAdditionResult, s1).bitAdditionResult;
      }

      let a = h0,
        b = h1,
        c = h2,
        d = h3,
        e = h4,
        f = h5,
        g = h6,
        h = h7;

      for (let i = 0; i < 64; i++) {
        const s1 = this.xor(
          this.rightRotate(e, 6),
          this.rightRotate(e, 11)
        ).xor(this.xorResult, this.rightRotate(e, 25)).xorResult;

        const ch = this.xor(
          this.binaryAnd(e, f),
          this.binaryAnd(this.binaryNot(e), g)
        ).xorResult;

        const temp1 = this.bitAddition(h, s1)
          .bitAddition(this.bitAdditionResult, ch)
          .bitAddition(this.bitAdditionResult, k[i])
          .bitAddition(this.bitAdditionResult, w[i]).bitAdditionResult;

        const s0 = this.xor(
          this.rightRotate(a, 2),
          this.rightRotate(a, 13)
        ).xor(this.xorResult, this.rightRotate(a, 22)).xorResult;

        const maj = this.xor(this.binaryAnd(a, b), this.binaryAnd(a, c)).xor(
          this.xorResult,
          this.binaryAnd(b, c)
        ).xorResult;

        const temp2 = this.bitAddition(s0, maj).bitAdditionResult;

        h = g;
        g = f;
        f = e;
        e = this.bitAddition(d, temp1).bitAdditionResult;
        d = c;
        c = b;
        b = a;
        a = this.bitAddition(temp1, temp2).bitAdditionResult;
      }

      h0 = this.bitAddition(h0, a).bitAdditionResult;
      h1 = this.bitAddition(h1, b).bitAdditionResult;
      h2 = this.bitAddition(h2, c).bitAdditionResult;
      h3 = this.bitAddition(h3, d).bitAdditionResult;
      h4 = this.bitAddition(h4, e).bitAdditionResult;
      h5 = this.bitAddition(h5, f).bitAdditionResult;
      h6 = this.bitAddition(h6, g).bitAdditionResult;
      h7 = this.bitAddition(h7, h).bitAdditionResult;
    });

    return this.collectHash(h0, h1, h2, h3, h4, h5, h6, h7);
  };

  // Bitwise addition
  private bitAddition = (first: string, second: string) => {
    const firstParse = parseInt(first, 2);
    const secondParse = parseInt(second, 2);

    const result = (firstParse + secondParse).toString(2);

    this.bitAdditionResult = this.fillWithZerosToDigits(
      result.substring(result.length - 32, result.length),
      32
    );

    return this;
  };

  // Bitwise AND
  private binaryAnd = (first: string, second: string) => {
    const firstParse = parseInt(first, 2);
    const secondParse = parseInt(second, 2);

    const result = (firstParse & secondParse).toString(2);

    return this.fillWithZerosToDigits(
      result.substring(result.length - 32, result.length),
      32
    );
  };

  // Bitwise NOT
  private binaryNot = (value: string) => {
    return value
      .split("")
      .map((bit) => (bit === "1" ? "0" : "1"))
      .join("");
  };

  // Bitwise exclusive OR
  private xor = (first: string, second: string) => {
    this.xorResult = first
      .split("")
      .map((bit, index) => (bit !== second[index] ? 1 : 0))
      .join("");

    return this;
  };

  // Bitwise shift to the right. The remainder on the right
  // is discarded, and on the left it fills with zeros.
  private rightShift = (str: string, val: number) => {
    const chunk2 = str.substring(0, str.length - val);
    const zeros = "0".repeat(val);

    return zeros + chunk2;
  };

  // Bitwise shift to the right. The remainder
  // on the right moves to the left.
  private rightRotate = (str: string, val: number) => {
    const chunk1 = str.substring(str.length - val);
    const chunk2 = str.substring(0, str.length - val);

    return chunk1 + chunk2;
  };

  // Collect hash
  private collectHash = (...bites) => {
    return bites
      .map((bit) => parseInt(bit, 2).toString(16).toUpperCase())
      .join("");
  };

  // Generates an array of hash values from an array
  // of square (or cubic) roots of prime numbers
  private getHashValues = (primes: number[], isCbrt = false) => {
    return primes.map((num) => {
      const sqrt = isCbrt ? Math.cbrt(num) : Math.sqrt(num);
      return sqrt.toString(2).split(".")[1].substring(0, 32);
    });
  };

  // Converts a string to an 8-bit binary
  private toBinary = (value: string) => {
    return value
      .split("")
      .map((char) =>
        this.fillWithZerosToDigits(char.charCodeAt(0).toString(2), 8)
      )
      .join("");
  };

  // Fills in the specified number of zeros on the left
  private fillWithZerosToDigits = (value: string, size: number) => {
    if (value.length >= size) {
      return value;
    }

    let result = value;

    for (let i = 0; i < size - value.length; i++) {
      result = "0" + result;
    }

    return result;
  };

  // Generates an array of prime numbers
  private getPrimes = (size: number) => {
    const primes: number[] = [];
    let number = 2;

    while (primes.length < size) {
      if (this.isPrime(number)) {
        primes.push(number);
      }
      number++;
    }

    return primes;
  };

  // Checks for a prime number
  private isPrime = (num: number) => {
    for (let i = 2; i < num; i++) {
      if (!(num % i)) {
        return false;
      }
    }
    return true;
  };
}

const myHash = new Sha256().generation("js liberty");

console.log(myHash);
