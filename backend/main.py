from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from itsdangerous import json
from course import get_course

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/api/", methods=["GET"])
@cross_origin()
def index():
	return jsonify("nice api ya got there"), 200

@app.route("/api/getcourse", methods=["GET"])
@cross_origin()
def getcourse():
	subject = request.args["subject"]
	if not subject.isalpha() and not subject.isupper(): return 500
	number = request.args["number"]
	if not number.isnumeric(): return 500

	res = get_course(subject, int(number))
	if res == None: return 404
	response = jsonify(res)
	response.status = 200
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add
	return response

@app.after_request
def cors_origin(response):
    allowed_origins = "*"
    if allowed_origins == "*":
        response.headers['Access-Control-Allow-Origin'] = "*"
    else:
        assert request.headers['Host']
        if request.headers.get("Origin"):
            response.headers["Access-Control-Allow-Origin"]  = request.headers["Origin"]
        else:
            for origin in allowed_origins:
                if origin.find(request.headers["Host"]) != -1:
                    response.headers["Access-Control-Allow-Origin"] = origin
    return response

if __name__ == "__main__":
    print ("=" * 50)
    print ("Starting server...")
    app.run(host="0.0.0.0", port=8000, debug=True)
