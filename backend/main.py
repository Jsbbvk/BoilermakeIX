from flask import Flask, jsonify, request
from flask_cors import CORS
from itsdangerous import json
from course import get_course

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": ["*", "https://localhost:3000"], }})

@app.route("/", methods=["GET"])
def index():
	return jsonify("nice"), 200

@app.route("/api/getcourse", methods=["GET"])
def getcourse():
	subject = request.args["subject"]
	if not subject.isalpha() and not subject.isupper(): return 500
	number = request.args["number"]
	if not number.isnumeric(): return 500

	res = get_course(subject, number)
	if res == None: return 404
	response = jsonify(res)
	response.status = 200
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add
	return response

if __name__ == "__main__":
    print ("=" * 50)
    print ("Starting server...")
    app.run(host="0.0.0.0", port=8000, debug=True)
