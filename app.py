from os import system
from flask import Flask, render_template, make_response


app = Flask(__name__)


@app.route('/api')
def api_index():
    return 'api cool?'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    """render index.html"""
    return render_template("index.html")

if __name__ == '__main__':
    system("webpack")  # for auto reloading js files.
    app.run(debug=True, host='0.0.0.0')
