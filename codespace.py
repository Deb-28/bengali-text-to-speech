import sys
from gtts import gTTS
import playsound
import os

tts = gTTS(text=sys.argv[1], lang='bn')
tts.save("good.mp3")
os.system("good.mp3")
playsound.playsound('good.mp3', True)
