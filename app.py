from os import system
from json import dumps
from time import sleep
from flask import Flask, render_template, make_response


app = Flask(__name__)


@app.route('/api')
def api_index():
    return 'api cool?'


@app.route('/api/test')
def api_test():
    x = {}
    x['detailPost'] = 'hello\n' * 20
    return dumps(x)


@app.route('/api/bests')
def api_best():
    """return bests from db"""
    content = "숙대의 명물 조대포, 언제나 가도 맛있다. 황젯살이 진짜 하.. 어깨부위 라고 하는데 1인분당 돼지 한마리다 .. 아 진짜 배고프다 으아아아앙아아아악 뭐시켜먹지?";
    bests = []
    for i in range(5): bests.append({'title': "조대포", 'location': "남영역", 'content': content})
    return dumps(bests)


@app.route('/api/worsts')
def api_worst():
    """return bests from db"""
    content = "숙대의 명물 조대포, 언제나 가도 맛있다. 황젯살이 진짜 하.. 어깨부위 라고 하는데 1인분당 돼지 한마리다 .. 아 진짜 배고프다 으아아아앙아아아악 뭐시켜먹지?";
    bests = []
    for i in range(5): bests.append({'title': "조대포", 'location': "남영역", 'content': content})
    return dumps(bests)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    """render index.html"""
    return render_template("index.html")

if __name__ == '__main__':
    system("webpack")  # for auto reloading js files.
    app.run(debug=True, host='0.0.0.0')
