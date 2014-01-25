from flask import Flask, jsonify, render_template
from random import randint
app = Flask(__name__)

@app.route("/")
def runner():
    return render_template('index.html')

@app.route("/data")
def data():
    myrand = randint(2, 100)
    return jsonify({'foo': myrand})
if __name__ == "__main__":
    app.debug = True
    app.run()
