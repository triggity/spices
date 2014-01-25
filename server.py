from flask import Flask, jsonify, render_template, request
from random import randint
app = Flask(__name__)

@app.route("/")
def runner():
    return render_template('index.html')

def rand():
    return randint(2, 100)
@app.route("/data", methods=['GET', 'POST'])
def data():
    if request.method == 'POST':
        print request.form
    output = {
        'foo': rand(),    
        'bar': rand()    
    }
    return jsonify(output)
if __name__ == "__main__":
    app.debug = True
    app.run()
