import RPi.GPIO as GPIO
import sys

status = int(sys.argv[1])

print("Setting led 7 to", status)

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)
GPIO.output(7, status)


