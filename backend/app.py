from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import tensorflow as tf
from PIL import Image
import io

app = Flask(__name__)
CORS(app) # Essential for React-to-Flask communication

# --- 1. MODEL LOADING ---
try:
    # Loading based on your exact file names in the 'models' folder
    crop_model = pickle.load(open("models/model.pkl", "rb"))
    scaler = pickle.load(open("models/minmaxscaler.pkl", "rb"))
    disease_model = tf.keras.models.load_model("models/plant_disease_prediction_model.h5")
    print("All models loaded successfully!")
except Exception as e:
    print(f"Error loading models: {e}")

# --- 2. MAPPING DICTIONARIES ---
# Update these lists based on your specific training dataset labels
CROP_NAMES = [
    'rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
    'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
    'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple',
    'orange', 'papaya', 'coconut', 'cotton', 'jute', 'coffee'
]

DISEASE_CLASSES = [
    "Apple Scab", "Apple Black Rot", "Cedar Apple Rust", "Apple Healthy",
    "Corn Common Rust", "Corn Healthy", "Potato Early Blight", "Potato Healthy"
    # Ensure this matches the order in your disease detection notebook
]

@app.route("/")
def home():
    return "KrishiCare AI Backend Running"

# --- 3. CROP RECOMMENDATION API ---
@app.route("/predict-crop", methods=["POST"])
def predict_crop():
    try:
        data = request.json
        
        # Convert JSON to 2D array
        features = np.array([[ 
            float(data["N"]), float(data["P"]), float(data["K"]),
            float(data["temperature"]), float(data["humidity"]),
            float(data["ph"]), float(data["rainfall"])
        ]])

        # Apply the MinMax Scaler found in your folder
        scaled_features = scaler.transform(features)
        
        # Get numerical prediction (e.g., 11) and map it to name
        prediction_index = int(crop_model.predict(scaled_features)[0])
        recommended_crop = CROP_NAMES[prediction_index]
        
        return jsonify({
            "status": "success",
            "recommended_crop": recommended_crop
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 400

# --- 4. DISEASE DETECTION API ---
@app.route("/predict-disease", methods=["POST"])
def predict_disease():
    try:
        if 'image' not in request.files:
            return jsonify({"status": "error", "message": "No image uploaded"}), 400
            
        file = request.files["image"]
        image = Image.open(io.BytesIO(file.read()))
        
        # Preprocessing: Match your model's expected input size (usually 224x224)
        image = image.resize((224, 224)) 
        image_array = np.array(image) / 255.0
        image_array = np.expand_dims(image_array, axis=0)

        prediction = disease_model.predict(image_array)
        result_index = np.argmax(prediction)
        confidence = float(np.max(prediction) * 100)

        return jsonify({
            "status": "success",
            "disease_class": DISEASE_CLASSES[result_index],
            "confidence": f"{confidence:.2f}%"
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)