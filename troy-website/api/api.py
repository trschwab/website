from flask import Flask, jsonify
import boto3
from botocore.exceptions import NoCredentialsError
from dotenv import load_dotenv
from flask_cors import CORS
import os
import subprocess
import json

# Load environment variables from .env file
load_dotenv()

# Flask app setup
app = Flask(__name__)
CORS(app)

# AWS Configuration from environment variables
S3_BUCKET = os.getenv("S3_BUCKET", "troyschwab-resources")  # Replace with your actual S3 bucket
S3_REGION = os.getenv("S3_REGION", "us-east-2")  # Your actual region
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")


def get_s3_client():
    """Initialize S3 client with environment variables."""
    return boto3.client(
        "s3",
        region_name=S3_REGION,
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    )

@app.route('/get-signed-urls-photos', methods=['GET'])
def get_signed_urls_photos():
    """Fetch filePaths from the photoPageImages.js file and generate presigned URLs."""
    try:
        s3 = get_s3_client()

        # Run the Node.js script to get the filePaths
        result = subprocess.run(['node', 'data/photoPageImages.js'], capture_output=True, text=True)
        
        if result.returncode == 0:
            # Convert the output (filePaths) to JSON
            file_paths = json.loads(result.stdout)

            # Process each photo and generate presigned URLs
            for photo in file_paths:
                # Generate presigned URLs for lowres and midres images
                lowres_url = s3.generate_presigned_url(
                    'get_object',
                    Params={
                        'Bucket': S3_BUCKET,
                        'Key': f"photography/lowres/{photo['lowres'].split('/')[-1]}"  # Extract the file name
                    },
                    ExpiresIn=3600  # URL expiration time (1 hour)
                )
                
                midres_url = s3.generate_presigned_url(
                    'get_object',
                    Params={
                        'Bucket': S3_BUCKET,
                        'Key': f"photography/midres/{photo['midres'].split('/')[-1]}"  # Extract the file name
                    },
                    ExpiresIn=3600  # URL expiration time (1 hour)
                )
                
                # Add the generated URLs to the photo object
                photo['lowres_url'] = lowres_url
                photo['midres_url'] = midres_url

            # Return the filePaths with presigned URLs
            return jsonify(file_paths)
        
        else:
            return jsonify({"error": "Failed to run Node.js script"}), 500
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/get-signed-urls-photos-home', methods=['GET'])
def get_signed_urls_photos_home():
    """Fetch filePaths from the photoPageImages.js file and generate presigned URLs."""
    try:
        s3 = get_s3_client()

        # Run the Node.js script to get the filePaths
        result = subprocess.run(['node', 'data/homeImages.js'], capture_output=True, text=True)
        
        if result.returncode == 0:
            # Convert the output (filePaths) to JSON
            file_paths = json.loads(result.stdout)

            # Process each photo and generate presigned URLs
            for photo in file_paths:
                # Generate presigned URLs for lowres and midres images
                lowres_url = s3.generate_presigned_url(
                    'get_object',
                    Params={
                        'Bucket': S3_BUCKET,
                        'Key': f"photography/lowres/{photo['lowres'].split('/')[-1]}"  # Extract the file name
                    },
                    ExpiresIn=3600  # URL expiration time (1 hour)
                )
                
                midres_url = s3.generate_presigned_url(
                    'get_object',
                    Params={
                        'Bucket': S3_BUCKET,
                        'Key': f"photography/midres/{photo['midres'].split('/')[-1]}"  # Extract the file name
                    },
                    ExpiresIn=3600  # URL expiration time (1 hour)
                )
                
                # Add the generated URLs to the photo object
                photo['lowres_url'] = lowres_url
                photo['midres_url'] = midres_url

            # Return the filePaths with presigned URLs
            return jsonify(file_paths)
        
        else:
            return jsonify({"error": "Failed to run Node.js script"}), 500
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route('/get-signed-urls-photos-music', methods=['GET'])
def get_signed_urls_photos_music():
    """Fetch filePaths from the photoPageImages.js file and generate presigned URLs."""
    try:
        s3 = get_s3_client()

        # Run the Node.js script to get the filePaths
        result = subprocess.run(['node', 'data/musicImages.js'], capture_output=True, text=True)
        
        if result.returncode == 0:
            # Convert the output (filePaths) to JSON
            file_paths = json.loads(result.stdout)

            # Process each photo and generate presigned URLs
            for photo in file_paths:
                src_url = s3.generate_presigned_url(
                    'get_object',
                    Params={
                        'Bucket': S3_BUCKET,
                        'Key': f"{photo['src']}"  # Extract the file name
                    },
                    ExpiresIn=3600  # URL expiration time (1 hour)
                )
                photo['src'] = src_url

            # Return the filePaths with presigned URLs
            return jsonify(file_paths)
        
        else:
            return jsonify({"error": "Failed to run Node.js script"}), 500
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=3000)
