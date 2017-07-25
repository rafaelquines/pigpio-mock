# Pigpio-mock

A mock library used for raspberry pi development on your local machine. It copies all method from https://github.com/fivdi/pigpio and logs information to the console, instead of controlling the Raspberry's GPIO pins.

# Installation
It is as simple as:

    yarn add pigpio-mock

and you can use it in your code as:

    const pigpio = process.env.NODE_ENV !== "production" ?
        require("pigpio-mock") :
        require("pigpio");

# Implemented classes:
- [x] Gpio
- [ ] GpioBank
- [ ] Notifier

# Contribution
All kind of contribution will be greatly appreciated.

#### Pull requests
* We're using https://github.com/enhancv/prettier for automatic code formating
* Please provide tests. We're aiming for 100% code coverage

#### Running tests

    yarn test