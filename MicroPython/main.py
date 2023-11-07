"""
Created by: Sophie
Created on: Oct 2023
This module is a Micro:bit MicroPython program that makes LED sprite move diagonally
"""

from microbit import *


# variables
loop_counter = 0

# setup
display.clear()
display.show(Image.HEART)
sleep(1000)

# loop
while True:
    if button_a.is_pressed():
        # setup
        display.clear()
        loop_counter = 0

        # loop
        while loop_counter <= 5:
            sleep(500)

            set_pixel(loop_counter, loop_counter, 9)

            # loop_counter goes up by 1
            loop_counter += 1

        display.show(Image.HEART)

    if button_b.is_pressed():
        # setup
        display.clear()
        loop_counter = 5

        # loop
        while loop_counter <= 5:
            sleep(500)

            set_pixel(loop_counter, loop_counter, 9)

            # loop_counter goes down by 1
            loop_counter -= 1

        display.show(Image.HEART)
