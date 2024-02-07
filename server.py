from flask import Flask, jsonify, request
from transformers import pipeline

from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask Reza!'}
    return jsonify(data)

@app.route('/api/input', methods=['POST'])
def prediction ():
    result = []
    kalimat  = ""
    pretrained_name = "w11wo/indonesian-roberta-base-sentiment-classifier"
    if request.method == "POST":
        data = request.json
        print("Received data:", data)
        nlp = pipeline(
        "sentiment-analysis",
        model=pretrained_name,
        tokenizer=pretrained_name
    )        
        getKalimat = data.get('name')
        result = nlp(getKalimat)
    return jsonify({'message': 'Data received successfully',
                    'Kalimat':data,
                    'hasil':result})
    
   



if __name__ == '__main__':
    app.run(debug=True)
