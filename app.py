from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO

from goldapi import update_price

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ajasdfhjaiodfaisnd9ofiansdofajoisdf'
socketio = SocketIO(app, cors_allowed_origins = "*")

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@socketio.on('get_data')
def handel_get_data_event():
    update_price(socketio)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', debug=True)
