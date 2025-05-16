class Sha256 {
  constructor() {
    this.xorResult = "";
    this.bitAdditionResult = "";
    this._defaultValue = 'Hello world'
  }

  generation = async (value = this._defaultValue) => {
    /**
     * Step 1
     */
    console.log("Step 1: \nGenerate 8 simple numbers!");
    let [h0, h1, h2, h3, h4, h5, h6, h7] = await this.getHashValues(
      await this.getPrimes(8)
    );

    /**
     * Step 2
     */
    console.log("\nStep 2: \nGenerate 64 prime numbers!");
    const k = await this.getHashValues(await this.getPrimes(64), true);
    
    /**
     * Step 3
     */
    const binary = this.toBinary(value);
    console.log("\nStep 3: \nConvert the incoming string to binary code!\n");
    console.log(`"${value}" to ${binary}`);

    /**
     * Step 4
     */
    let multiplesOf512 = binary + "1";
    console.log(
      "\nStep 4: \nAdd at the end of 1 and fill in with zeros on the right side until it is a multiple of 512 without the last 64 bits!\n"
    );
    await process.stdout.write(multiplesOf512);

    /**
     * Step 5
     */
    let lengthDataToBinary = this.toBinary(value.length.toString());
    // console.log(
    //   "\nStep 5: \nTake the length of the input data (number) in binary form and fill with zeros on the left until there is 64 bits!\n"
    // );
    // await process.stdout.write(lengthDataToBinary);
    

    while (multiplesOf512.length % 512) {
      multiplesOf512 += "0";
      await this.delay(50);
      process.stdout.write("0");
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
  bitAddition = (first, second) => {
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
  binaryAnd = (first, second) => {
    const firstParse = parseInt(first, 2);
    const secondParse = parseInt(second, 2);

    const result = (firstParse & secondParse).toString(2);

    return this.fillWithZerosToDigits(
      result.substring(result.length - 32, result.length),
      32
    );
  };

  // Bitwise NOT
  binaryNot = (value) => {
    return value
      .split("")
      .map((bit) => (bit === "1" ? "0" : "1"))
      .join("");
  };

  // Bitwise exclusive OR
  xor = (first, second) => {
    this.xorResult = first
      .split("")
      .map((bit, index) => (bit !== second[index] ? 1 : 0))
      .join("");

    return this;
  };

  // Bitwise shift to the right. The remainder on the right
  // is discarded, and on the left it fills with zeros.
  rightShift = (str, val) => {
    const chunk2 = str.substring(0, str.length - val);
    const zeros = "0".repeat(val);

    return zeros + chunk2;
  };

  // Bitwise shift to the right. The remainder
  // on the right moves to the left.
  rightRotate = (str, val) => {
    const chunk1 = str.substring(str.length - val);
    const chunk2 = str.substring(0, str.length - val);

    return chunk1 + chunk2;
  };

  // Collect hash
  collectHash = (...bites) => {
    return bites
      .map((bit) => parseInt(bit, 2).toString(16).toUpperCase())
      .join("");
  };

  // Generates an array of hash values from an array
  // of square (or cubic) roots of prime numbers
  getHashValues = async (primes, isCbrt = false) => {
    console.log(
      `Take from the primes the first 32 bits of the fractional part of the ${
        isCbrt ? "cubic" : "square"
      } root:\n`
    );

    const result = [];

    for (const num of primes) {
      const sqrt = isCbrt ? Math.cbrt(num) : Math.sqrt(num);
      const bites = (sqrt.toString(2).split(".")[1] + "0".repeat(10)).substring(
        0,
        32
      );
      await this.delay(100);

      const numLength = num.toString().length;
      const sqrtLength = sqrt.toString().length;

      console.log(
        `${num}${this.getSpaces(4 - numLength)} to  ${sqrt}${this.getSpaces(
          20 - sqrtLength
        )}to   ${bites}`
      );

      result.push(bites);
    }

    return result;
  };

  // Converts a string to an 8-bit binary
  toBinary = (value) => {
    return value
      .split("")
      .map((char) =>
        this.fillWithZerosToDigits(char.charCodeAt(0).toString(2), 8)
      )
      .join("");
  };

  // Fills in the specified number of zeros on the left
  fillWithZerosToDigits = (value, size) => {
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
  getPrimes = async (size) => {
    const primes = [];
    let number = 2;

    while (primes.length < size) {
      if (this.isPrime(number)) {
        await this.delay(100);
        primes.push(number);
        process.stdout.write(`${number}, `);
      }
      number++;
    }

    process.stdout.write("\n\n");
    return primes;
  };

  // Checks for a prime number
  isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (!(num % i)) {
        return false;
      }
    }
    return true;
  };

  delay = (time) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(1);
      }, time);
    });
  };

  getSpaces = (length) => {
    return " ".repeat(length);
  };
}

let string = process.argv[2];

const myHash = new Sha256().generation(string);

myHash.then((result) => {
  console.log('\n\nRESULT: ', result);
})

// 4FF5C8FABE1ACA8055C2A2DF1FBA649B4F0020BA39714ED81173F6FEC733D1BD - valera
// 4DAAE28F271D12B27143969D2C356A09BED388488B39BBA76C800B3E3F01DC8  - denis
// 4FF5C8FABE1ACA8055C2A2DF1FBA649B4F0020BA39714ED81173F6FEC733D1BD - valera
// 4DAAE28F271D12B27143969D2C356A09BED388488B39BBA76C800B3E3F01DC8  - denis