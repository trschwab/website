import json
import os
import subprocess
from datetime import timedelta

import boto3
from botocore.client import Config
from dotenv import load_dotenv

load_dotenv()

# AWS Configuration from environment variables
S3_BUCKET = os.getenv("S3_BUCKET", "troyschwab-resources")
S3_REGION = os.getenv("S3_REGION", "us-east-2")
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
LOWRES_PREFIX = "photography/lowres/"
MIDRES_PREFIX = "photography/midres/"
EXPIRATION = 604800  # 7 days


def get_s3_client():
    """Initialize S3 client with environment variables."""
    return boto3.client(
        "s3",
        region_name=S3_REGION,
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    )

def run_node_script():
    result = subprocess.run(
        ['node', 'data/photoPageImages.js'],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        raise RuntimeError("Failed to run photoPageImages.js")
    return json.loads(result.stdout)

def generate_urls():
    s3 = get_s3_client()
    photo_metadata = run_node_script()

    for photo in photo_metadata:
        filename = photo['midres'].split('/')[-1]

        photo['lowres_url'] = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': S3_BUCKET, 'Key': f"{LOWRES_PREFIX}{filename}"},
            ExpiresIn=EXPIRATION
        )
        photo['midres_url'] = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': S3_BUCKET, 'Key': f"{MIDRES_PREFIX}{filename}"},
            ExpiresIn=EXPIRATION
        )

    with open('cached_photos.json', 'w') as f:
        json.dump(photo_metadata, f, indent=2)
    print(f"Generated signed URLs for {len(photo_metadata)} photos.")

if __name__ == "__main__":
    generate_urls()
