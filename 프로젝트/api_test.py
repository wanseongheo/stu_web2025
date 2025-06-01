import requests

url = "http://data.khnp.co.kr/environ/service/realtime/pwr"
params = {
    "serviceKey": "yp9br8zY5HYVw9qRJMIoX5atZKelfO4MBqRsDmlJYb704cYxWF5guYzIL4SwZ04911iYYTO6Usv4CLZo/6x7Ag==",
    "genName": "WS"
}

res = requests.get(url, params=params)
print(res.text)
