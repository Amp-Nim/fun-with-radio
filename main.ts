input.onButtonPressed(Button.A, function () {
    radio.sendString("Nothing happening yet")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
