from urllib.parse import quote

import requests
import json
import random
import time

boongi = input() # 분기를 입력받는 코드 
encoding = quote(boongi)

header = {'laftel' : 'TeJava'}

laftel_API = 'https://laftel.net/api/search/v1/discover/?years=' + str(encoding)

next = ""
print ("==============================")

while(True):
  response = requests.get(url = laftel_API, headers = header)  

  json = response.json()

  results = json["results"]

  for x in results:
    print(x["name"])
  
  next = json["next"]
  if (next is not None):
    laftel_API = next
  else:
    break
  time.sleep(random.randint(1, 2))

print ("==============================")