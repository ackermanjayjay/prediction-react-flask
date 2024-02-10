from flask import Flask, jsonify, request
from transformers import pipeline

from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data')
def get_data():
    data = {'message': 'Indonesian RoBERTa Base Sentiment Classifier'}
    return jsonify(data)

@app.route('/api/input', methods=['POST'])
def prediction ():
    result = []
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
                    'Kalimat':getKalimat,
                    'hasil':result[0]['label'],
                    'score':result[0]['score']}),200
   



if __name__ == '__main__':
    app.run(debug=True)
