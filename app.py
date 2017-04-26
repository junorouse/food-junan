from os import system
from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def index():
    """render index.html"""
    return render_template('index.html')

if __name__ == '__main__':
    system("webpack")  # for auto reloading js files.
    app.run(debug=True, host='0.0.0.0')
