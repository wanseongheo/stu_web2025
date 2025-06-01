from flask import Flask, render_template_string
import requests
from xml.etree import ElementTree as ET

app = Flask(__name__)

@app.route('/')
def index():
    url = "http://data.khnp.co.kr/environ/service/realtime/pwr"
    params = {
        "serviceKey": "yp9br8zY5HYVw9qRJMIoX5atZKelfO4MBqRsDmlJYb704cYxWF5guYzIL4SwZ04911iYYTO6Usv4CLZo/6x7Ag==",
        "genName": "WS"
    }

    res = requests.get(url, params=params)
    root = ET.fromstring(res.text)
    items = root.findall(".//item")

    data = []
    for item in items:
        data.append({
            "설명": item.find("expl").text,
            "출력": item.find("value").text,
            "시간": item.find("time").text
        })

    html_template = """
    <html>
    <head><meta charset='UTF-8'><title>원자력 발전소 실시간</title></head>
    <body>
      <h1>월성 원자력 발전소 출력 현황</h1>
      <ul>
        {% for row in data %}
          <li><strong>{{ row.설명 }}</strong>: {{ row.출력 }} MWe (측정: {{ row.시간 }})</li>
        {% endfor %}
      </ul>
    </body>
    </html>
    """

    return render_template_string(html_template, data=data)

if __name__ == '__main__':
    app.run(debug=True)
